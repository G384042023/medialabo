function greeting(){
    let i1 = document.querySelector('input[name="left"]');
    let i2 = document.querySelector('input[name="right"]');
    left =i1.value;
    right =i2.value;
    let n = Number(left);
    let m = Number(right);
    sum=n+m;
    let span=document.querySelector('span#answer');
    span.textContent=sum;
}
let b=document.querySelector('button#calc');
b.addEventListener('click',greeting);







