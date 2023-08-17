// var vall = "var変数";
// console.log(vall);

// vall = "vallを上書き";
// console.log(vall);

// vall = "vallを再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数は上書き可能";
// console.log(val2);

// let val3 = "ran";
// console.log(val3);

// const val4 = "look";
// console.log(val4);

// val4 = "ddd"
// console.log(val4);

// const val10 =['dog','cat'];
// val10[0] = "bird";
// val10.push("monky");
// console.log(val10);

// const name = "ruru";
// const age = 33;
 
// const message = "私の名前は"+name+"です。年齢は"+age+"です。";
// console.log(message)

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const mypro ={
//   name:"KK",
//   age:28,
// };

// const message4 = `私の名前は${mypro.name}です。年齢は${mypro.age}です。`;
// console.log(message4);

// const {name, age} = mypro;
// const message6 = `私の名前は${mypro.name}です。年齢は${mypro.age}です。`;
// console.log(message6);

// const my = [`hh`,11];

// const me3 = `名前は${my[0]}です。年齢は${my[1]}です。`;
// console.log(me3);

// const [name,age] = my;

// const me4 = `名前は${name}です。年齢は${age}です。`;
// console.log(me4);

// const say = (name="ゲスト") => console.log(`こんにちわ${name}さん`);
// say();

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const fun = (num1,num2) => console.log(num1 + num2);
// fun(arr1[0],arr1[1]);
// fun(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4,...arr5];
// console.log(arr6);

// const nameArr = ["ダン","ボブ","サン"];
// // for (let index = 0; index < nameArr.length; index++){
// //   console.log(`${index+1}番目は${nameArr[index]}です`);
// // }
// const newNameArr = nameArr.map((name) =>{
//   if(name === "サン"){
//   return name
//   }else{
//     return`${name}さん`
//   }
// })
// console.log(newNameArr);


// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2)
// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));
// const numArr = [1,2,3,4,5,6];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const vall = 1 < 0 ? `trueです` : `falseです`;
// console.log(vall);

// const vall2 = 1 < 0 ? `trueです` : `falseです`;
// console.log(vall2);

const cheksum = (num1,num2) => {
  return num1 + num2 > 100 ? `範囲内です`:`範囲外です`;
}
console.log(cheksum(50,40));

