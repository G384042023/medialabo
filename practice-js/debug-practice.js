let heikin = 3.5;
console.log(heikin);        // 正しくは heikin

// (2) 関数名のつづり間違い      → エラー発生
let h = Math.floor(heikin); // 正しくは floor

// (3) 存在しない配列要素       → undefined　（エラーにならない）
let ary1 = ['a', 'b', 'c'];
console.log(ary[2]);        // 3番目の要素は存在しない

// (4) 小数のインデックス       → undefined　（エラーにならない）
let ary2 = [10, 20, 30];
let i = 3/2;
console.log(ary[Math.floor(i)]); // ary[1] = 20  i=3/2=1.5 なので ary[1.5] を参照しようとする

// (5) メンバー名の間違い       → undefined （エラーにならない）
let obj = {x:3, y:7};
console.log(obj.z ?? "メンバーが存在しません");       // メンバー z は存在しない

// (6) 初期化していない変数のメンバー   → エラー発生
let o = {}; // 初始化为空对象
console.log(o.x); // undefined（不会报错）        // oは初期化していない

// (7) オブジェクトや配列ではない値のメンバーと要素	→ undefined （エラーにならない）
let n = 3;
console.log(n.x);			// n はオブジェクトではない
console.log(n[2]);			// n は配列ではない

// (8) メンバー名の間違い(その2）       → エラー発生
let obj2 = {
	mem1: {x:4, y:9},
	mem2: "abc"
};
console.log(obj2.mem0?.x); // 安全访问运算符 → undefined（不会报错）    // obj2.mem0 は存在しない. さらにそのメンバー x を参照しようとする

