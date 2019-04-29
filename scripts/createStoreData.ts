/**
 * アイカツ公式の「あそべるおみせ」から、店舗情報を取得する
 */
import fs from 'fs';
import client from 'cheerio-httpcli';
import { StoreData } from '../src/types/shims';

/** 都道府県IDの最大値 */
const prefMax = 47;
/** アクセス先のURL */
const baseUrl = 'https://www.aikatsu.com/friends/playshop/list.php?p={0}&pref={1}';
/** 保存するファイル名(緯度経度無し) */
const filenamePrefix = 'tmp/01/store';
const filenameExt = '.json';

/** 1ページ分の店舗情報を取得 */
const fetchStoreData = async (prefNum: string, pageNum: string) => {
  const accessUrl = baseUrl.replace('{1}', prefNum).replace('{0}', pageNum);
  const storeData: StoreData[] = [];

  const res = await client.fetch(accessUrl);
  const $ = res.$;

  $('.shoplist_resultlist').each((index, elem) => {
    const name = $($(elem).find('tr>td')[0])
      .text()
      .trim();
    const address = $($(elem).find('tr>td')[1])
      .text()
      .replace('地図を見る', '')
      .trim();
    const grid: [number, number] = [0, 0];
    const machineNum = $(elem).find('.titlenum>dl').length;

    storeData.push({
      name,
      address,
      grid,
      machineNum,
      prefId: parseInt(prefNum, 10),
    });
  });

  return storeData;
};

(async () => {
  for (let i = 1; i <= prefMax; i++) {
    let prefName: string = '';

    try {
      const storeDataList: StoreData[] = [];

      /** クエリパラメータに用いる形式の県ID */
      const prefNum: string = ('00' + i).slice(-2);

      const accessUrl = baseUrl.replace('{1}', prefNum).replace('{0}', '1');

      // まず1ページ目にアクセスして、最大のページ数を取得する
      const res = await client.fetch(accessUrl);

      prefName = res
        .$('#pref_id')
        .find('option:selected')
        .text();

      /** ページ数の最大値 */
      let pageMax = 1;
      try {
        pageMax = parseInt(
          res
            .$('.paginator > a:last-child')
            .attr('href')
            .match(/p=([\d]+)/)![1],
          10,
        );
      } catch (e) {
        // ここで死ぬのは、1ページしか無い場合なので続行
      }

      for (let j = 1; j <= pageMax; j++) {
        const store = await fetchStoreData(prefNum, `${j}`);
        storeDataList.push(...store);
      }
      // 県ごとに結果を出力
      fs.writeFileSync(`${filenamePrefix}${prefNum}${filenameExt}`, JSON.stringify(storeDataList, null, '  '));
    } catch (e) {
      console.log('----------------------------------------');
      console.log(`${prefName}でエラーがあった`);
      console.log(e);
    }
  }
})();
