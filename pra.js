let x = 5;
const xx = 4;
let z = 5;
let y = 8;
let arr = []
let obj = {
    name: "超人",
    age: 58,
    sex: "男",
    skin: "白",
    old: "老"
}; //物件

console.log(typeof (x))
console.log(typeof (xx))
console.log(typeof (y))
console.log(typeof (obj))
console.log(typeof (x))
console.log(typeof (x))

console.log(x)
console.log(obj)
console.log(obj.name)
console.log(obj.old + obj.skin + obj.sex)
console.log(typeof (obj.old + obj.skin + obj.sex))

console.log(x)
console.log(x = x + x)
// x = x+x 運算式可以直接寫在console裡面
console.log(x)

let c = false
console.log(typeof (c))
console.log(c)
//布林值也是一種資料型態

let a = 1
let b = "1"
console.log(a == b)
console.log(a === b)

//a==b會將後者資料型態轉為跟前者想同，===並不會

let d = 1

if (a == d) {
    console.log("我不愛程式寫作")
} else {
    console.log("原神啟動")
}

//========================================

let str = "42a" //parseInt只會抓到整數，有小數點與字符都會省略
str = "42.22" //Number則是可以抓取所有數字單位，但不能抓到字符
str = "" //Nmuber空字串為0，parseInt則為Null
str = null //Nmuber空字串為0，parseInt則為Null

console.log("parseInt" + typeof (parseInt(str)))
console.log(parseInt(str))
console.log("Number" + typeof (Number(str)))
console.log(Number(str))

//=================================

const spanText = document.getElementById("text")

console.dir(spanText) //調出資料
spanText.innerText = "xxx"
console.log(spanText.getElementById)

const aTest = document.getElementById("aTest")
aTest.innerHTML = "<a href=www.google.com class=aCool>xxx</a>" //可以直接把標籤插入html的body中。
//可以設置為會員時變更圖片，訪客時變更另一張。或是特定條件滿足後變更圖片

console.log(9 / 2)
console.log(2.2 * 4.6)
const g = "g"
console.log(5 % 2 + g)
console.log(typeof (5 % 2))
console.log(typeof (5 % 2 + g))
//js可以直接算出小數點值，不需要額外定義。

//中文

const t = "啊"
const n = "啊"

console.log(n === t)

//沒有記憶體空間不同的問題，不需要像java要使用valueof 才能夠判斷字串的值

// if(想讀大學){
//     繼續讀書
// } else{
//     去工作
// }

const e = 5
const f = 6

if( e > f){
    console.log("e比較大")
} else if (e < f) {
    console.log("f比較大")
} else {
    console.log("f跟e一樣大")
}

// switch 判斷
// 只給兩條路可以選
// 如果"你想" 讀大學(case) 就 "繼續讀書" ，"不然"就"去工作"

// switch(你想做的事){
//     case 讀大學:
//         繼續讀書
//         break
//     default:
//         去工作
//         break;
// }

// switch("哪個符合css中的背景設定"){
//     case A:
//         "A的描述內容"
//         break
//     case B:
//         "B的描述內容"
//         break
//     case C:
//         "C的描述內容"
//         break
//     case D:
//         "D的描述內容"
//         break
// }

switch( x ){
    case 4:
        console.log("四")
        break;
    case 5:
        console.log("五")
        break;
    case 6:
        console.log("六")
        break;
    default:
        console.log( x )
}

x = 10
y = 10

switch(true){
    case x > y:
    console.log("x比較大")
    break;
    case x < y:
    console.log("y比較大")
    break;
    default:
    console.log("x跟y一樣大")
    break;
}

//讓switch為真，會變成判斷case哪個為真才進入結果。