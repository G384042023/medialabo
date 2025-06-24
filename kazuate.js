let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let yoso;

let b1 = document.querySelector('button#kaito');
b1.addEventListener('click', hantei);
function hantei() {
    let i = document.querySelector('input[name="number"]');
    let number = i.value;
    yoso= number;
    
    let span1 = document.querySelector('span#kaisu');
    
    let span2 = document.querySelector('span#answer');
     

  if(kaisu >=0 && kaisu <=2){
    if(kaisu == 0){
      kaisu =1;
      
      let w = document.querySelector('p#result > span');
      w.remove();
  
      span1.textContent = kaisu;
      span2.textContent = number;
    }

  console.log(kaisu+'回目の予想:' +yoso);
  let result = document.querySelector('p#result');    
  span1.textContent = kaisu;
  span2.textContent = number;

    if(yoso == kotae){        
      result.textContent = '正解です．おめでとう!';
      console.log('正解です．おめでとう!');
      kaisu = 5;

    }else if(yoso > kotae){
      result.textContent = 'まちがい．答えはもっと小さいですよ';
      console.log('まちがい．答えはもっと小さいですよ');
      kaisu ++;

    }else if(yoso < kotae){        
      result.textContent = 'まちがい．答えはもっと大きいですよ';
      console.log('まちがい．答えはもっと大きいですよ');
      kaisu ++;
    }

  }else if(kaisu >= 3){
    let result = document.querySelector('p#result');    
    span1.textContent = kaisu;
    span2.textContent = number;
    if(kaisu == 3){
      console.log(kaisu+'回目の予想:' +yoso);
      if(yoso != kotae){   
      console.log('まちがい．残念でした答えは '+ kotae +'です．');
      let result = document.querySelector('p#result');          
      result.textContent = 'まちがい．残念でした答えは '+ kotae +'です．';
    }else {
      console.log('正解です．おめでとう!');
      let result = document.querySelector('p#result');          
      result.textContent = '正解です．おめでとう!';
    }
    kaisu ++;
    }else {
      console.log(kaisu+'回目の予想:' +yoso);
      console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
      let result = document.querySelector('p#result');          
      result.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
      kaisu++;
    }
  }
}
