
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("=== 天気情報の出力 ===");
  console.log("都市名: " + data.name);
  console.log("緯度: " + data.coord.lat);
  console.log("経度: " + data.coord.lon);
  console.log("天気: " + data.weather[0].description);
  console.log("最低気温: " + data.main.temp_min);
  console.log("最高気温: " + data.main.temp_max);
  console.log("湿度: " + data.main.humidity);
  console.log("風速: " + data.wind.speed);
  console.log("風向: " + data.wind.deg);
}

//print(data);
let city = [
  ["360630",'project-html/Cairo.jpg'],
  ["524901",'project-html/Moscow.jpg'],
  ["993800",'project-html/Johannesburg.jpg'],
  ["1816670",'project-html/Beijing.jpg'],
  ["1850147",'project-html/Tokyo.jpg'],
  ["1880252",'project-html/Singapore.jpg'],
  ["2147714",'project-html/Sydney.jpg'],
  ["2643743",'project-html/London.jpg'],
  ["2968815",'project-html/Paris.jpg'],
  ["3451189",'project-html/RiodeJaneiro.jpg'],
  ["5128581",'project-html/NewYork.jpg'],
  ["5368361",'project-html/LosAngeles.jpg'],
]

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

var body = document.querySelector('body');
function changeBackground(backgroundUrl) {
  body.style.backgroundImage = 'url(' + backgroundUrl + ')';
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

