/**
 * 県ごとの店舗情報をマージする
 */
import fs from 'fs';
import path from 'path';
import { StoreData } from '../src/types/shims';

/** 都道府県IDの最大値 */
const prefMax = 47;
const inputFilenamePrefix = 'tmp/02/store';
const outputFilename = 'src/data/store.json';
const ext = '.json';

(async () => {
  try {
    const allStoreDataList: StoreData[] = [];
    for (let i = 1; i <= prefMax; i++) {
      /** 県ID */
      const prefNum: string = ('00' + i).slice(-2);
      const storeDataList: StoreData[] = require(path.resolve(`${inputFilenamePrefix}${prefNum}${ext}`));
      allStoreDataList.push(...storeDataList);
    }
    // ファイルに出力
    fs.writeFileSync(`${outputFilename}`, JSON.stringify(allStoreDataList, null, '  '));
  } catch (e) {
    console.log(e);
  }
})();
