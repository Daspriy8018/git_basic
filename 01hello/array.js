// var Name;
// var Name2;
// var Name3;
// var countries=["india","usa","russia","germany"]
// var state= new Array("odisha","bihar","mumbai")
// console.log(state[0])
// console.log(state.length)
// state[0]="punjab"
// console.log(state)
// var user=["sanu","priyadarsandas98@gmail.com",3,34,true]
// console.log(user)
// user.pop()
// console.log(user)
// user.unshift("rani")
// console.log(user)
// user.shift()
// console.log(user)
// console.log(user.indexOf("gggg"));
// console.log(Array.from("priyadarsan"));

// function isEven(element){
//     // if(element%2===0){
//     //     return true
//     // }
//     // return false
//     return element % 2===0;
// }
// console.log(isEven(4))

//  var isEven=function (element){
//     return element % 2===0;
// }
// console.log(isEven(4))

// var isEven= (element) =>{
//     return element % 2===0;
// }
// console.log(isEven(5))
// var result=[2,4,6,8].every(isEven)
// console.log(result)


// var result=[2,4,7,8].every((e)=>{
//     return e%2===0

// })
// console.log(result)

// var result=[2,4,6,8].every((e)=>(e%2===0))
// console.log(result)
const arr=[1,2,3,4,5,6,7,8,9,10]
const friend=[
    {
    'name':'sanu',
    'age':23
},
    {
    'name':'rani',
    'age':27
},
    {
    'name':'khus',
    'age':12
}
]
// const newarr1=arr.map(function(element){
//     console.log(element)
//     return element+5
// })
// filter gives us the boolean value
// const filterel=arr.filter(element=>element>2)
const filterel=friend.filter(element=>element.age<23)
const newarr2=arr.map(element=> element+5)
//  console.log(friend,filterel)
 arr.forEach(element=>
    console.log(element))
 
 