/**
 * 住所情報を元に、緯度経度をセットする
 */
import fs from 'fs';
import path from 'path';
import client from 'cheerio-httpcli';
import { StoreData } from '../src/types/shims';

/** 都道府県IDの最大値。47都道府県+台湾。 */
const prefMax = 48;
const inputFilenamePrefix = 'tmp/01/store';
const outputFilenamePrefix = 'tmp/02/store';
const ext = '.json';

/** アクセス先のURL */
const baseUrl = 'https://www.geocoding.jp/api/?v=1.1&q=';

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

/** 1住所に対する緯度経度を取得 */
const fetchGeoData = async (address: string): Promise<[number, number]> => {
  let accessUrl = `${baseUrl}${encodeURI(address)}`;
  // APIにアクセス
  let res = await client.fetch(accessUrl);
  let $ = res.$;
  // 緯度経度を取得
  let lat = parseFloat($('lat').text());
  let lng = parseFloat($('lng').text());
  if (lat && lng) return [lat, lng];

  // 住所＋○○店 の後半部分が悪さしてる可能性があるので、分割して試してみる
  await sleep(3000);
  accessUrl = `${baseUrl}${encodeURI(address.split(/\s/)[0])}`;
  res = await client.fetch(accessUrl);
  $ = res.$;
  lat = parseFloat($('lat').text());
  lng = parseFloat($('lng').text());
  if (lat && lng) return [lat, lng];

  // 台湾住所で、桃園市桃園區三民路一段131號1樓 の1樓が悪さしてる可能性があるので、消してみる
  if (address.includes('樓')) {
    await sleep(3000);
    accessUrl = `${baseUrl}${encodeURI(address.replace(/樓/, ''))}`;
    res = await client.fetch(accessUrl);
    $ = res.$;
    lat = parseFloat($('lat').text());
    lng = parseFloat($('lng').text());
    if (lat && lng) return [lat, lng];
  }

  // 末尾に階が入ってるケース1
  if (address.match(/\dF$/)) {
    await sleep(3000);
    accessUrl = `${baseUrl}${encodeURI(address.replace(/\d+F/, ''))}`;
    res = await client.fetch(accessUrl);
    $ = res.$;
    lat = parseFloat($('lat').text());
    lng = parseFloat($('lng').text());
    if (lat && lng) return [lat, lng];
  }

  // 末尾に階が入ってるケース2
  if (address.match(/B\d$/)) {
    await sleep(3000);
    accessUrl = `${baseUrl}${encodeURI(address.replace(/B\d/, ''))}`;
    res = await client.fetch(accessUrl);
    $ = res.$;
    lat = parseFloat($('lat').text());
    lng = parseFloat($('lng').text());
    if (lat && lng) return [lat, lng];
  }

  console.log(`Error: ${address}`);
  return [0, 0];
};

(async () => {
  try {
    for (let i = 1; i <= prefMax; i++) {
      /** 県ID */
      const prefNum: string = ('00' + i).slice(-2);
      const storeDataList: StoreData[] = require(path.resolve(`${inputFilenamePrefix}${prefNum}${ext}`));
      // 店舗ごとにループして、緯度経度を取得
      for (const store of storeDataList) {
        // 既に取得済みの場合はスキップ
        if (store.grid[0] !== 0 && store.grid[1] !== 0) continue;
        console.log(store.name);
        const grid = await fetchGeoData(store.address);
        store.grid = grid;
        // 連続してアクセスするとアク禁6時間とか食らうので、ちょっと待つ
        await sleep(3000);
      }

      // ファイルに出力
      fs.writeFileSync(`${outputFilenamePrefix}${prefNum}${ext}`, JSON.stringify(storeDataList, null, '  '));
    }
  } catch (e) {
    console.log(e);
  }
})();
