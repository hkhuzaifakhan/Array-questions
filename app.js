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
var qualification = [ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil' , 'PhD'];
console.log(qualification);

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

// Q13
var scores = ['320' , '230' , '480' , '120'];
console.log(scores.sort());

// Q14
var fruits = ['strawberry', 'apple', 'orange', 'banana'];
console.log(fruits.sort());

// Q15
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2 , 4);
console.log("Cities Array: " + cities + "<br><br>");
console.log("Selected Cities Array: " + selectedCities);

// Q16
var arr = ['This', 'is', 'my', 'cat'];
var singestring = arr.join(' ');
console.log(singestring);

// Q17
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

console.log("Original Array: " + devices + '<br>');
console.log("FIFO Order:<br>");
if (devices.length > 0) {
    var value = devices.shift();
    console.log(value + "<br>");
}

// Q18
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
console.log("Original Array: " + devices + "<br><br>");
console.log("LIFO Order:<br>");

if (devices.length > 0) {
    var value = devices.pop();
    console.log(value + "<br>");
}

// Q19
var manufacturers = ['Apple' , 'Samsung' , 'Mototola' , 'Nokia' , 'Sony' , 'Haier'];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");

// Q20
var multiArray = [[], [], []];

// Q21
var arr = [
    [0 , 1 , 2 , 3],
    [1 , 0 , 1 , 2],
    [2 , 1 , 0 , 1]
];

console.log(arr);

