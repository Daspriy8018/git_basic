const ADDBTN=document.getElementById('increment')
const REMOVEBTN=document.getElementById('decrement')
const ullistitems=document.getElementById('ullist')
let count=0;
function ADD_INC(){
    const counterrel=document.getElementById('counter')
    count++
    counterrel.innerText=count
    const lilist=document.createElement('li')
    lilist.setAttribute('data-counter',count)
    lilist.innerHTML='SENTENCE'+ count
  ullistitems.appendChild(lilist)
  console.log(lilist)
}
ADDBTN.addEventListener('click',ADD_INC)
function DEC_INC(){
    const lilist=ullistitems.querySelector('[data-counter="'+count+'"]')
    //   lilist.remove()
    count--
    const counterrel=document.getElementById('counter')
    counterrel.innerText=count
  const number= parseInt( lilist.getAttribute('data-counter'),10)
  console.log(number)
  if(number%2===0){
    lilist.remove()
  }
}
REMOVEBTN.addEventListener('click',DEC_INC)