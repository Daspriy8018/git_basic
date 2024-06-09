// function sayhello(name){
//     return`my name is ${name}`
// }
// console.log(sayhello("priyadarsan das"))

// function sayhello(name){
//     console.log(`my name is ${name}`)
// }
// sayhello("priyadarsan das")
// sayhello("sanu")

// sayhello("rani")

// sayhello("guddy")
// var state=["odisha","jharkhand","bihar","westbengal"]
// console.log(state)
// console.log(state[0])
// console.log(state.length)
//state.pop()
//state.shift()
//state.unshift("sanu")
// console.log(state)


//   var isEven=function(number){
//      if(number%2===0){
//          return true
//      }
//      else {
//          return false
//      }
// return number%2===0
// }
// console.log(isEven(12))
// var user=["sanu","ty","babu","nvnb",6]
// console.log(user.indexOf(6))
// console.log(Array.from("priyadarsandas"))
// var isEven=(element)=>{
//     return element%2===0

// }
// console.log(isEven(6));

// var result=[2,4,6,8].every(isEven)
// console.log(result)
// function isEven(el){
// return el%2===0
// }
// console.log(isEven(23))

// var result=[2,4,6,8,10,12].every((el)=>{ 
//     return el%2===0
// })
// console.log(result)
// var testArray=[12,20,36,4,56,57,767,5]
//testArray.fill("h",2,6)
// console.log(testArray.slice(1,5))
//  testArray.splice(2,4,"hi")
//  console.log(testArray);
 var user={
     firstname:"priyadarsan",
     lastname:"das",
     role:"admin",
     facebook:true,
     courselist:[],
     BuyNewCourse:function(coursename){
         this.courselist.push(coursename)
     },
     getCourseCount:function(){
         return `the total no of courses purchase by ${this.firstname} is ${this.courselist.length}`
     }
 }
 user.BuyNewCourse("gate");
 user.BuyNewCourse("cat");
 console.log(user.courselist)
 console.log(user.getCourseCount())




//  let numbers = [1, 4, 9]
// let roots = numbers.map(function(num) {
//     return Math.sqrt(num)
// })
// console.log(roots)
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
// let numbers=[1,64,81]
// let roots=numbers.map((num)=>{
//     return Math.sqrt(num)
// })
// console.log(roots)



// let kvArray = [{key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30}]

// let reformattedArray = kvArray.map(obj => {
// let rObj = {}
// rObj[obj.key] = obj.value
// return rObj
// })
// console.log(reformattedArray)
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
// let AArray=[{key:1,value:100},
// {key:2,value:200},
// {key:3,value:300}]
// let newARRAY=AArray.map((obj)=>{
//     let Nobj={}
//     Nobj[obj.key]=obj.value
//     return Nobj
// })
// console.log(newARRAY)

let number=[1,3,6]
let doubles=number.map((el)=>{
    return el=el*2

})
console.log(doubles)




let xs = ['10', '10', '10']

xs = xs.map(parseInt)

console.log(xs)
// Actual result of 10,NaN,2 may be unexpected based on the above description.


// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']



// 
// // Our array with items
// const cart = ['apple', 'banana', 'pear'];

// // A function which returns the last item of a given array
// function returnLast(arr) {
//   return arr.at(-1);
// }
//  x=returnLast([1,2,3,4,5,6])

// // Get the last item of our array 'cart'
// const item1 = returnLast(cart);
// console.log(item1); // Logs: 'pear'

// // Add an item to our 'cart' array
// cart.push('orange');
// const item2 = returnLast(cart);
// console.log(item2); // Logs: 'orange'
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
  
// function resolveAfter2Seconds(){
//     return new Promise(resolve=>{

//         setTimeout(()=>{
//             resolve("resolved")
//         },1000);
//     })
// }
// async function asyncCall(){
//     console.log("calling")
//     const result=await resolveAfter2Seconds();
// }
// asyncCall()

const mystates=["odisha",
"biahr",
1947,
"jharkhand"
,"up"
,"chatisgarh"
,"maharastra"]

// for(let i=0;i<mystates.length;i++){
//     if(typeof mystates[i]!="string") continue;
//     console.log(mystates[i])
// }
// let i=0;

// do  {
//     console.log(mystates[i])
//     i++
// }while(i<mystates.length)