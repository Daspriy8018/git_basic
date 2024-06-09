// const mystates=["odisha",
// "biahr",
// 1947,
// "jharkhand"
// ,"up"
// ,"chatisgarh"
// ,"maharastra"]


// mystates.forEach((s)=>(console.log(s)))
// mystates.forEach((s)=>(console.log(s)))
// const names=["youtube",
// "insta","snapchat",
// "netflix","amazon"]
//  for(const n of names){
//      console.log(n)
//  }
//  const symbols={
//      yt:"youtube",
//      ig:"instagram",
//      fb:"facebook",
//      lco:"learncodeonline.in"
//  }

//  for(const n in symbols){
//      console.log(symbols[n])
//  }
// var user={
//     firstname:"priyadarsan",
//     coursecount:4,
//     getcoursecount: function (){
//         console.log("line 32",this)
//     }
// };
// user.getcoursecount()

var user={
    firstname:"priyadarsan",
    coursecount:4,
    getcoursecount: function (){
        console.log("line 32",this)
        function sayhello(){
            console.log("hello");
            console.log("line44",this)
        }
        sayhello()
    }
};
user.getcoursecount()




const uno=()=>{
    console.log("i am one")
}
const dos=()=>{
    console.log("i am two")

}
const tres=()=>{
    setTimeout(()=>{
        console.log("i  am late")
    },2000)
    console.log("i  am three")
}
uno();
dos()
tres()
  