/**
 * 台湾アイカツ公式の「あそべるおみせ」から、店舗情報を取得する
 */
import fs from 'fs';
import client from 'cheerio-httpcli';
import { StoreData } from '../src/types/shims';

/** 都道府県ID。台湾を暫定で48に。 */
const prefNumTw = 48;
/** アクセス先のURL */
const baseUrl = 'http://www.aikatsu.com.tw/shop_searcresult.php';
/** 保存するファイル名(緯度経度無し) */
const filenamePrefix = 'tmp/01/store';
const filenameExt = '.json';

/** 1ページ分の店舗情報を取得 */
const fetchStoreData = async () => {
  const accessUrl = baseUrl;
  const storeData: StoreData[] = [];

  const res = await client.fetch(accessUrl);
  const $ = res.$;

  $('.shopsearch')
    .find('dl')
    .each((index, elem) => {
      const name = $(elem)
        .find('h4')
        .text()
        .trim();
      const address = $($(elem).find('p')[0])
        .text()
        .replace('地址', '')
        .trim();
      const grid: [number, number] = [0, 0];
      const machineNum = 1;

      storeData.push({
        name,
        address,
        grid,
        machineNum,
        prefId: prefNumTw,
      });
    });

  return storeData;
};

(async () => {
  try {
    const store = await fetchStoreData();
    // 結果を出力
    fs.writeFileSync(`${filenamePrefix}${prefNumTw}${filenameExt}`, JSON.stringify(store, null, '  '));
  } catch (e) {
    console.log('----------------------------------------');
    console.log(e);
  }
})();
