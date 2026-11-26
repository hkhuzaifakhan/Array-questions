// Q1
var studentName = [];
console.log(studentName);

// Q2
var studentName = new Array();
console.log(studentName);

// Q3
var str = ['huzaifa' , 'anas' , 'ali' , 'saad'];
console.log(str);

// Q4
var num = [10 , 20 , 30 , 40 , 50];
console.log(num);

// Q5
var bol = [true , false , true , false];
console.log(bol);

// Q6
var mix = ['apple' , 15 , false , 'ahmed' , true];
console.log(mix);

// Q7
var mobileNet = ['Jazz' , 'Zong' , 'Ufone' , 'Telenore'];
console.log(mobileNet);

// Q8
var arr = [ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil' , 'PhD'];
console.log('Qualifications');
console.log('1)' + arr[0]);
console.log('2)' + arr[1]);
console.log('3)' + arr[2]);
console.log('4)' + arr[3]);
console.log('5)' + arr[4]);
console.log('6)' + arr[5]);
console.log('7)' + arr[6]);
console.log('8)' + arr[7]);

// Q9
var movie = [];
movie.push('Avengers: Age of Ultron');
movie.push('Spectre');
movie.push('Jurassic World');
movie.push('Inside Out');
console.log(movie);

// Q10
var car = ['Audi' , 'Volvo' , 'Ford' , 'Lamborghini'];
console.log("First Index: 0");

console.log("Car at First Index: " + car[0] + 1);

console.log("Last Index: " + (car.length - 1));

console.log("Car at Last Index: " + car[car.length - 1]);

// Q11
var studentNames = ['Michael' , 'John' , 'Tony'];
var score = [320 , 230 , 480];
var percentage = [64 , 46 , 96];
console.log(studentNames , score , percentage);

// Q12
var colors = ['red' , 'green' , 'blue'];
// a
var inputA = prompt('Start ma konsa color add krna ha');
colors.unshift(inputA);
console.log(colors);
// b
var inputB = prompt('Last ma konsa color add krna ha');
colors.unshift(inputB);
console.log(colors);
// c
var inputC = prompt('1 or color batao jisko ma add kr dunga');
var inputD = prompt('Bs Last ma 1 or add kr dunga');
colors.unshift(inputC);
colors.unshift(inputD);
// d
colors.shift();
// e
colors.pop();
// f
var inputE = Number(prompt("in which index no you want to add a color"));
var inputF = Number(prompt(" which color do you want to add a color"));
colors.splice(inputE , 0 ,inputF)

// Q13
var scores = ['320' , '230' , '480' , '120'];
console.log(scores.sort());

// Q14
var fruits = ['strawberry', 'apple', 'orange', 'banana'];
console.log(fruits.sort());

// Q15
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2 , 4);
console.log("Cities Array: " + cities);
console.log("Selected Cities Array: " + selectedCities);

// Q17
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

console.log("Original Array: " + devices);
console.log("FIFO Order:");
if (devices.length > 0) {
    var value = devices.shift();
    console.log(value);
}

// Q18
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
console.log("Original Array: " + devices);
console.log("LIFO Order:");

if (devices.length > 0) {
    var value = devices.pop();
    console.log(value);
}

// Q20
var multiArray = [[], [], []];

// Q21
var arr = [
    [0 , 1 , 2 , 3],
    [1 , 0 , 1 , 2],
    [2 , 1 , 0 , 1]
];

console.log(arr);
