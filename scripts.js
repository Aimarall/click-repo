// let example = document.querySelector('#example');
// let exampleButton = document.querySelector('#example-button');
// let exampleButton2 = document.querySelector('#example-button2');
// let exampleLink = document.querySelector('#example-link');

// exampleLink.addEventListener('click', function (event) {
//     let random = Math.random() * 100;
//     example.value = random.toFixed(0);

//     event.preventDefault();
// });

// // let example = document.querySelector('#example');
// example.addEventListener('click', function (event) {
//     let random = Math.random() * 100;
//     example.value = random.toFixed(0);

//     event.preventDefault();



//     //случайное число
//     // let random = Math.random() * 100;
//     // example.value = random.toFixed(0);

//     // let random = Math.random() * 100;
//     // // console.log(Math.random() * 5);
//     // console.log(random.toFixed(0));
//     // // console.log(random);
//     // // console.log('cicked');
//     // // console.log(example); внутри html элемент
//     // console.log(example.value);

// });

// // exampleButton.addEventListener('click', function (event) {

// //     let r = Math.random() * 255;

// //     let g = Math.random() * 255;

// //     let b = Math.random() * 255;

// //     exampleButton.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";


// });

let fontSize = 30;
let h1 = document.querySelector('h1')
let example1 = document.querySelector('#example1')
let example2 = document.querySelector('#example2')

example1.addEventListener('click', function (event) {
    fontSize++;
    h1.style.fontSize = fontSize + "px";
});

example2.addEventListener('click', function (event) {
    fontSize--;
    h1.style.fontSize = fontSize + "px";
});




