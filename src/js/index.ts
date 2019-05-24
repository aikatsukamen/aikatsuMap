import L from 'leaflet';
import _L from 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/map.css';
import storeData from '../data/store.json';

// leafletの上書きなので、インポートそのものにはあんまり意味が無い
// ほんとは以下みたいなのは要らないんだけどこうでもしないとビルド後に消滅しちゃう
console.log(_L);

/** マーカーアイコン */
const icon = L.icon({
  iconUrl: 'https://www.aikatsu.com/friends/images/playshop/kyoutai.gif',
  iconRetinaUrl: 'https://www.aikatsu.com/friends/images/playshop/kyoutai.gif',
  iconSize: [40, 40],
  // iconAnchor: [25, 50],
  // popupAnchor: [0, -50],
});

/** 地図の初期ズームレベル */
const zoom = 8;
const map = L.map('map').setView([35.699024, 139.771062], zoom);

// 地図情報を取ってくるところ
// オープンストリートマップ
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//   maxZoom: 18,
// }).addTo(map);

L.control.scale({ maxWidth: 200, position: 'bottomright', imperial: false }).addTo(map);
L.control.zoom({ position: 'bottomleft' }).addTo(map);

// 地理院地図の標準地図タイル
const gsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
});
// 地理院地図の淡色地図タイル
const gsipale = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>地理院タイル</a>",
});
// オープンストリートマップのタイル
const osm = L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png', { attribution: "<a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors" });

const baseMaps = {
  地理院地図: gsi,
  淡色地図: gsipale,
  オープンストリートマップ: osm,
};
// layersコントロールにbaseMapsオブジェクトを設定して地図に追加
// コントロール内にプロパティ名が表示される
L.control.layers(baseMaps).addTo(map);
gsi.addTo(map);

/** ヒートマップの座標リスト */
const heatPoints: [number, number, number][] = [];

// マーカーセットとヒートリストへの追加
for (const store of storeData) {
  // マーカー置く
  const markerGrid = store.grid as [number, number];
  L.marker(markerGrid, { icon })
    .addTo(map)
    .bindPopup(`<h3>${store.name}</h3><span>${store.address}</span>`); // クリック時、店名と住所を表示
  // .openPopup();

  // 筐体数に応じてヒートを強くする
  const intensity: number = 100 + store.machineNum * 10;
  heatPoints.push([store.grid[0], store.grid[1], intensity]);
}
const heatOption: L.HeatMapOptions = { radius: 25 };
// ヒートマップ描画
L.heatLayer(heatPoints, heatOption).addTo(map);

// ベースレイヤ切り替え
