console.log('hello')
const btn2=document.querySelector('#btn2')
btn2.onclick=function(){
alert('YOU HAVE CLICKED THE BUTTON')
};

//example 2
//another way to create the event
//function clickedBtn(){
//alert('Hi there')


// example 3
const qcclink= document.querySelector('#qcclink')
qcclink.onclick=function(){
  console.log('QCC link has been engaged')
}

// example 4
const title=document.querySelector('.title')
title.onmouseover=function(){
  console.log('QCC link was hovered or mouse over ')
}

//EXAMPLE 5
const btn5=document.querySelector('#btn5')
btn5.addEventListener('click',function(){
  alert('Button 5 was clicked!')
})
//example 6
const btn6=document.querySelector('#btn6')
btn6.addEventListener('mouseout', click1)
btn6.addEventListener('dblclick', click2)
function click1(){
  console.log('Button 6=mouseout')
}
function click2(){
  alert('Buttun 6 was t double clicked')
}

//EXAMPLE 7
const colorContainer=document.querySelector(".colorContainer")
const btnColor=document.querySelector("#btnColor")
btnColor.addEventListener('click',function(){
  //change color of the div
  colorContainer.style.backgroundColor=changeColor();
})

//rgb from 0 to 255
function changeColor(){
const r =Math.floor(Math.random()*256)
const g =Math.floor(Math.random()*256)
const b =Math.floor(Math.random()*256)
return `rgb(${r},${g},${b})`
}
//example 9
const divColor=document.querySelectorAll('.divColor')
for(let eachDiv of divColor){
  eachDiv.addEventListener('mouseout',function(){
  eachDiv.style.backgroundColor=changeColor();
})
}
//EXAMPLE 10
//const inputTxt=document.querySelector('inputTxt')
//inputTxt.addEventListener('keydown',function(){
  //alert('KEYDOWN! JEY'${e.key});
//});
//EXAMPLE 10
const inputTxt=document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown',function(e){
  alert(`KEYDOWN! key"${e.key}" was pressed \n The ASCI code for jey is ${e.which}`);
});
//example 11
const display9=document.querySelector('.display9')
window.addEventListener('scroll',function(){
  let pxTop=window.pageYOffset;
  display9.innerHTML=` Browser Window is ${pxTop}px away from the top`
})


//example 12
const toTop=document.querySelector('.toTop')
window.addEventListener('scroll',function(){
  let pxTop=window.pageYOffset;
  if(pxTop>80){
    toTop.style.display='block';
  }else{
    toTop.style.display='none'
  }
})
//Example 14
const sBubble=document.querySelector('.sBubble')
const pBubble=document.querySelector('.pBubble')
const aBubble=document.querySelector('.aBubble')
sBubble.addEventListener('click',function(){
  alert('section WAS CLICKED!!!!!!')
  e.stopPropagation()

})
pBubble.addEventListener('click',function(){
  alert('Paragraph WAS CLICKED!!!!!!')

})
aBubble.addEventListener('click',function(){
  alert('Anchor was clicked WAS CLICKED!!!!!!')

})
