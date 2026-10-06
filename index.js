const btn=document.getElementById("btn")
const h1=document.getElementById("h1")
const p1=document.getElementById("p1")
const p=document.getElementsById("p")
btn.onclick=function(){
  if(document.body.style.backgroundColor=="white"){
    document.body.style.backgroundColor="black"
    h1.style.color="white"
    p1.style.color="white"
    p.style.color="white"
  }
  else {
    document.bpody.style.backgroundColor="white"
    h1.style.color="black"
    p1.style.color="black"
    p.style.color="black"
  }
}