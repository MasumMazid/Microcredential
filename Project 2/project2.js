var boats=[
{name:"Oro Jackson ",price:240000,color:"red",speed:200},
{name:"Thousand Sunny",price:500000,color:"red",speed:50},
{name:"Lomac 520",price:23200,color:"red",speed:36},
{name:"Model T rider",price:67300,color:"blue",speed:43},
{name:"Yachmaster Cruiser -T 2020",price:5234500,color:"blue",speed:47},
{name:"Santa Explorer",price:50000,color:"blue",speed:55},
{name:"Kayak",price:150,color:"green",speed:10},
{name:"Yamamoto",price:83838,color:"green",speed:16},
{name:"Elric",price:45230,color:"green",speed:14}
]

let individualspeed=document.querySelector(".speedinput")
let form=document.querySelector("#forminputs")
form.addEventListener('submit',function(event){
event.preventDefault()
})
var boatspeed=[]
function getspeed(){
for(let ps=0;ps<boats.length;ps++){
if (boats[ps].speed>individualspeed.value){
console.log(boats[ps].speed)
boatspeed.push(boats[ps].name)
}
}
}
