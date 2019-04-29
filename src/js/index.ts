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
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

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
