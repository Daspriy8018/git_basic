
// const heading = document.querySelector('h1')
// heading.innerText='hello rni'
// console.log(heading)
// const alllistitems=document.querySelectorAll('ul li')
// for(let i=0;i<alllistitems.length;i++){
//     const listitem=alllistitems[i]
//     listitem.innerText="qwerrty"
//     console.log(listitem)
// }
// console.log(alllistitems)
// const alllistitems=document.querySelectorAll('ul li')
// for(let i=0;i<alllistitems.length;i++){
//   const listitem=alllistitems[i];
//   listitem.innerText='sanu'
//   console.log(listitem)
// }
// heading.innerText='sanu'



 const  IncrementBtn= document.querySelector('#increment')
 const  DecrementBtn= document.querySelector('#decrement')
let count=0
const  ulelement=document.getElementById('listitems')
  function increment(){
    let counterel=document.getElementById('counter')
    count++
    counterel.innerText=count
  const li=document.createElement('li')
  li.setAttribute('data-counter',count)
  if(count%2===0){
    li.style.background='red'
    
    // li.setAttribute('class','red')
  }else{
    li.style.background='yellow'

    // li.setAttribute('class','yellow')
  }
  li.innerHTML='<b>sentence</b>'+ count
  
//   const b=document.createElement('b')
//   const TextNode1=document.createTextNode('sentence')
//   b.appendChild(TextNode1)
//   li.appendChild(b)
  
//   const TextNode=document.createTextNode(count)
//   li.appendChild(TextNode)
 ulelement.appendChild(li)
  }
IncrementBtn.addEventListener('click',increment)
  function decrement(){
    let counterel=document.getElementById('counter')
    const li=ulelement.querySelector('[data-counter="'+count+'"]')
const number= parseInt ( li.getAttribute('data-counter'),10)
   if (number%2===0)
{
li.remove()
}
    count--
    //get elementbyid can be select .getelementByid('name') it is more performant thanquery selector
    counterel.innerText=count

  }
DecrementBtn.addEventListener('click',decrement)
// let ul=document.querySelector('ul')
// let li=ul.querySelectorAll('li')
// console.log(li)