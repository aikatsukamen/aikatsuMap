/**
 * 住所情報を元に、緯度経度をセットする
 */
import fs from 'fs';
import path from 'path';
import client from 'cheerio-httpcli';
import { StoreData } from '../src/types/shims';

/** 都道府県IDの最大値 */
const prefMax = 47;
const inputFilenamePrefix = 'tmp/01/store';
const outputFilenamePrefix = 'tmp/02/store';
const ext = '.json';

/** アクセス先のURL */
const baseUrl = 'https://www.geocoding.jp/api/?v=1.1&q=';

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

/** 1住所に対する緯度経度を取得 */
const fetchGeoData = async (address: string): Promise<[number, number]> => {
  const accessUrl = `${baseUrl}${encodeURI(address)}`;
  // APIにアクセス
  const res = await client.fetch(accessUrl);
  const $ = res.$;
  // 緯度経度を取得
  const lat = parseFloat($('lat').text());
  const lng = parseFloat($('lng').text());
  if (!lat || !lng) {
    await sleep(3000);
    // 住所＋○○店 の後半部分が悪さしてる可能性があるので、分割して試してみる
    const accessUrl2 = `${baseUrl}${encodeURI(address.split(/\s/)[0])}`;
    const res2 = await client.fetch(accessUrl2);
    const $2 = res2.$;
    const lat2 = parseFloat($2('lat').text());
    const lng2 = parseFloat($2('lng').text());
    if (!lat2 || !lng2) {
      console.log(`Error: ${address}`);
      return [0, 0];
    }
    return [lat2, lng2];
  }
  return [lat, lng];
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
