      /*forEach*/

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit)=> {
//   console.log(fruit);
// });

/* map method*/
// const numbers = ['1','2','3','4']

//  const doubles = numbers.map(function (num)
// {
// return num * 2;
// console.log(numbers);})

   /*SetTimeout function*/

// console.log('hellow');
// setTimeout(()  => {
//     console.log('are you still there')
// },4000)
// console.log('good bye')

    /*filter method*/

// const numbers = [13,34,45,2,4,5]

// const higher = numbers.filter(function(number)
// {
//     return number > 10;
// });
// console.log(higher);
         
      /* using arrow function*/

// const higher = numbers.filter(number => number > 10);
// console.log(higher);

     /* Every function*/
  //const marks = [12,24,54,54,334,33] 
 // marks.every(score => score >= 50)

      /*default parameters*/

// function createMessage(name = "Friend", greeting = "Hello", punctuation = "!") {
//       console.log(`${greeting},${name}${punctuation}`);
// }

// createMessage();

/*function getBill(amount = 0 , tipPercent = 10)
{
      const total = amount + (amount * tipPercent/100);
      console.log(total);
}    
getBill();*/

/* onclick property*/
// const btn = document.querySelector('#v2');
// btn.onclick = function() {
//       console.log("you clicked me!");
//       console.log("i hope it worked");
// }
// function scream(){
//       console.log("ahhhhhhhh!");
//       console.log("stop clicking me");
// }
// btn.onmouseenter = scream;
// /* addEventListener method*/
// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click',function() {
//       console.log("you clicked me!");
// })
// const btntas = document.querySelector('#tas');
// function twist(){
//       console.log("twist");
// }
// function shout(){
//       console.log("shout");
// }
// btntas.addEventListener('click',twist);
// btntas.addEventListener('click',shout);
// btntas.addEventListener('click',function(){

      /* Small Exercise*/
// const button = document.querySelector('#v2');
// const h1 = document.querySelector('h1');
// button.addEventListener('click', function(){
//       const r = Math.floor(Math.random() * 255);
//       const g = Math.floor(Math.random() * 255);
//       const b = Math.floor(Math.random() * 255);  
//       const newColor = `rgb(${r}, ${g}, ${b})`;
//       document.body.style.backgroundColor = newColor;
//       h1.innerText = newColor;
// })

     /* Event Objects*/

// document.querySelector('button').addEventListener('click',function(evt){
//       console.log(evt)
// })
// const input = document.querySelector('input');
// input.addEventListener('keydown',function(e){
//       console.log(e.code);
//       console.log(e.key);
//    }) 
      // const input1 = document.querySelector('input');
// input1.addEventListener('keyup',function(){
//       console.log("keyup");
// }) 

// window.addEventListener('keydown',function(e){
//       switch(e.code){
//             case 'ArrowUp':
//                   console.log("up");
//                   break;
//             case 'ArrowDown':
//                   console.log("down");
//                   break;
//             case 'ArrowLeft':
//                   console.log("left");
//                   break;
//             default:
//                   console.log("ignored");
//       }
        
// });
const form = document.querySelector('#shelterForm');
form.addEventListener('submit',function(e){
      e.preventDefault();
      console.log("submitted the form!");
})