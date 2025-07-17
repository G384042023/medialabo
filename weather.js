// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("=== 天気情報の出力 ===");

  console.log("都市名: " + data.name);
  console.log("緯度: " + data.coord.lat);
  console.log("経度: " + data.coord.lon);
  console.log("天気: " + data.weather[0].description);
  console.log("最高気温: " + data.main.temp_max + " ℃");
  console.log("最低気温: " + data.main.temp_min + " ℃");
  console.log("湿度: " + data.main.humidity + " %");
  console.log("風速: " + data.wind.speed + " m/s");
  console.log("風向: " + data.wind.deg + " °");
}
//print(data);
let city = [
  ["360630",'project-html/Cairo.jpg', "カイロ"],
  ["524901",'project-html/Moscow.jpg', "モスクワ"],
  ["993800",'project-html/Johannesburg.jpg', "ヨハネスブルク"],
  ["1816670",'project-html/Beijing.jpg', "北京"],
  ["1850147",'project-html/Tokyo.jpg', "東京"],
  ["1880252",'project-html/Singapore.jpg', "シンガポール"],
  ["2147714",'project-html/Sydney.jpg', "シドニー"],
  ["2643743",'project-html/London.jpg', "ロンドン"],
  ["2968815",'project-html/Paris.jpg', "パリ"],
  ["3451189",'project-html/RiodeJaneiro.jpg', "リオデジャネイロ"],
  ["5128581",'project-html/NewYork.jpg', "ニューヨーク"],
  ["5368361",'project-html/LosAngeles.jpg', "ロサンゼルス"]
];

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

var body = document.querySelector('body');
function changeBackground(backgroundUrl) {
  body.style.backgroundImage = 'url(' + backgroundUrl + ')';
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let oldResult = document.querySelector('#result');
  if (oldResult) {
    oldResult.remove();
  }

  let resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result');
  resultDiv.classList.add('card'); // カード風の装飾追加
  document.body.appendChild(resultDiv);

  let cityTitle = document.createElement('h3');
  cityTitle.textContent = "📍 " + data.name;
  cityTitle.classList.add('city-title');
  resultDiv.appendChild(cityTitle);

  let list = [
    ["緯度", data.coord.lat],
    ["経度", data.coord.lon],
    ["天気", data.weather[0].description],
    ["最高気温", data.main.temp_max + " ℃"],
    ["最低気温", data.main.temp_min + " ℃"],
    ["湿度", data.main.humidity + " %"],
    ["風速", data.wind.speed + " m/s"],
    ["風向", data.wind.deg + " °"]
  ];

  list.forEach(item => {
    let p = document.createElement('p');
    p.textContent = item[0] + ": " + item[1];
    p.classList.add('weather-line');
    resultDiv.appendChild(p);
  });
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let select = document.querySelector('#select');
  let index = select.value;

if (index === "") {
  console.log("都市が選択されていません。");

  // 【新增】清除显示区域
  let oldResult = document.querySelector('#result');
  if (oldResult) {
    oldResult.remove();
  }

  // 【新增】也可以加一段提示内容（可选）
  let resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result');
  resultDiv.textContent = "都市を選択してください。";
  document.body.appendChild(resultDiv);

  return;
}


  let cityId = city[index][0];
  let imagePath = city[index][1];
  let cityName = city[index][2];

  console.log("検索キー: " + cityName);

  // OpenWeatherMap API のURLを作成（APIキー不要）
  let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

  // AxiosでAjaxリクエストを送信
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // 追加：consoleに天気情報を出力
  print(data);

  // DOMに表示
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
