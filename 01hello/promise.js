const uno=()=>{
    return "i am one"
};
// const dos=()=>{
//     setTimeout(()=>{
//         return "i am two"
//     },3000)

// };


const dos=()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i am two")
        },3000);
    })

};
 
const tres=()=>{
    return "i  am three"
};


 const callme = async ()=>{
     let valOne=uno();
     console.log(valOne)
     let valTwo= await dos();
     console.log(valTwo)
     let valThree=tres();
     console.log(valThree)
 }
 callme()