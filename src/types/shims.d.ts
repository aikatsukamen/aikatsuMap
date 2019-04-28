declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare interface Window {}

declare module '*/store.json' {
  const store: {
    /** 店舗名 */
    name: string;
    /** 住所 */
    address: string;
    /** 緯度、経度 */
    grid: [number, number];
    /** 筐体数 */
    machineNum: number;
  }[];
  export default store;
}
