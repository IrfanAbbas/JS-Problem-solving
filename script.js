    // =============================================================
    //                     Datemethod
    // ==========================================================
    const currentDate = new Date();
console.log(currentDate);
const year=currentDate.getFullYear();
console.log(year);
const day = currentDate.getDay();
console.log(day);
const date=currentDate.getDate();
console.log(date);
const hours = currentDate.getHours();
console.log(hours);
const minutes=currentDate.getMinutes();
console.log(minutes);
const seconds=currentDate.getSeconds();
console.log(seconds);
const milisecond = currentDate.getMilliseconds()
console.log(milisecond);

 // =============================================================
    //                    live time print 
    // ==========================================================

const customDate = new Date(2024, 2, 20, 13, 26, 0, 0);
console.log(customDate);
console.clear();

const clockElement = document.getElementById('clock');

function updateTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    clockElement.textContent = formattedTime;
}
updateTime(); // Call updateTime initially to update the clock immediately
setInterval(updateTime, 1000); // Call updateTime every second to update the clock



// =============================================================
//                     print current window 
// ==========================================================

function printWindow(){
    window.print();
}

// =============================================================
//                     Show custom time using moment js  
// ==========================================================
let currentTime =console.log(moment().format('LLLL'));

document.getElementById("ctime").innerHTML=currentTime;
console.log(currentTime) ;

//=============================================================
//                     Show customdate dd-mm-yy
// ==========================================================
  
let d = new Date();
let currentDay = d.getDay();
let M = d.getMonth() + 1; // Added missing semicolon here
let currentYear = d.getFullYear();
let Final_date = currentDay + '/' + M + '/' + currentYear; 
let Final_2Date= M + '/' + currentDay + '/' + currentYear
document.getElementById("todaytime").innerHTML = Final_date;

document.getElementById("dateMathod").innerHTML = Final_2Date;

//=============================================================
//                     area of triangle
// ==========================================================
let a,b,c,s,g;
a=5;
b=6;
c=7;
s=(a+b+c)/2;
g= Math.sqrt(s*((s - a ) * (s - b)*(s - c) ));
document.getElementById("areaTriangle").innerHTML=g;
//=============================================================
//                     Rotate string left to right
// ==========================================================
const animatestring = function(id) {
    let el = document.getElementById(id);
    let textNode = el.childNodes[0];
    let text = textNode.data;
    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1); // Fixed the assignment here
        textNode.data = text;
    }, 300);
}

// Example usage:
animatestring("target");

//=============================================================
//                     leap year
// ==========================================================

const isLeapYear= function(year){
    console.log(year % 100);
    return(year % 100===0)? (year % 400 === 0):(year % 4 === 0);

}
console.log(isLeapYear(2024)); 

//=============================================================
//   Sunday between 2014 and 2050
// ==========================================================

const getYear = function(year, endyear) {
    for (; year <= endyear; year++) { // Removed 'let year;' from the loop initialization
        const d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            console.log(`1st January being a Sunday in ${year}`); // Corrected the typo
        }
    }
}

// Example usage:
getYear(2014, 2050);


//=============================================================
//                     random number 
// ==========================================================

const random= Math.floor(Math.random() * 10 +  1);
const Userguss= parseInt(prompt( "Enter your guess b/w 1-10"));
if (Userguss==random) {alert('Congratulation you are correct!')}
else{
    console.log(alert("Sorry that's incorrect"));

    
}

//=============================================================
//                     calculate day before the cris
// ==========================================================

const today= new Date();
 const cmas= new Date(today.getFullYear(), 11, 31).getTime(); // December  31 is CMAS
 if  (cmas < today.getTime()) {
     alert ('It\'s Christmas');
 } else {
     let timeDiff= cmas - today.getTime();
     let daysLeft= Math.ceil(timeDiff / (1000 *  60 * 60 * 24));
     alert (`There are ${daysLeft}
     days left until Christmas`);
 }

 //=============================================================
//                     multiply and division of two number
// ==========================================================
function multiply() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result = num1 * num2;
        document.getElementById("result").innerText = result;
    }

    function addition() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result = num1 + num2;
        document.getElementById("result").innerHTML = result;
    }

    //=============================================================
//                     get url
// ==========================================================
// let  inputUrl = prompt('Please enter a URL: ');
var inputUrl = document.URL;
    document.getElementById("one").innerHTML = inputUrl;
    console.log(document.URL)
//=============================================================
//                     user defined user name 
// ==========================================================
const user_name = "mohat";
const chewccl_name = "moha_youtuber";
window[user_name] = chewccl_name;

console.log(window[user_name]);

//===========================================================
//                difference of 13 number 
// ========================================================


function getDifference(number) {
    const difference = Math.abs(number - 13);     
    if (number > 13) {
        return difference * 2; 
        return difference; 
    }
}
console.log(getDifference(10)); 
//===========================================================
//               Q.16  if two number same then return  there triple of sum 
// ========================================================

function TripleOfSum(x, y ){
    if (x==y){
        return 3*(x+y);
    }
    else{
        return (x+y);
    }
}

console.log(TripleOfSum(5,5)) ;

//===========================================================
//               Q.17  difference b/w 19 and specifice number  
// ========================================================

function  diffBetween19AndSpecNum(num){
    if(num<=19){
        return (19-num)

    }
    else{
        return (19 -num)*3;
    }
}
console.log(diffBetween19AndSpecNum(4));
//===========================================================
//                     Q.18   value of 50 or sum of thire 50 
// ========================================================
    function  isValueof50rSumOfFivety(x , y){
    return ((x==50)||(y==50) ||( x+y==50)); 

    }
    console.log(isValueof50rSumOfFivety(25,30));

    //===========================================================
//                     Q.19  value 20-100 or 400 
// ========================================================
function  valDiffOrValIs400(x){
    return((Math.abs(100-x)<=20)||(Math.abs(400-x)<=20));
}
console.log(valDiffOrValIs400(100));


 //===========================================================
//                     Q.20 positive integer checking  
// ========================================================  

function positiveIntegerChecker(x, y){
    if((x<0 && y>0)|| (x>0 && y<0)){
        return true;
    }
    else{
        return false;
    }
}
    console.log(positiveIntegerChecker(2, -2));

     //===========================================================
//                     Q.21  crete string with add py 
// ========================================================

function string_Checker(str) {
    if (str === null || str === undefined || str.substring(0, 2) === 'py') {
        return str;
    } else {
        return "py" + str;
    }
}

console.log(string_Checker("python"));
console.log(string_Checker("thon")); 


  //===========================================================
//                     Q.22  Remove character
// ========================================================
function remove_character(str, removech) {
    let a = str.substring(0, removech);
    let b = str.substring(removech + 1, str.length);
    return a + b;
}

console.log(remove_character("w3schoole", 0));



 //===========================================================
//                     Q.23 
// ========================================================

function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('abc'));

 //===========================================================
//                     Q.24
// ========================================================
function addFirstAndLast(str) {
    let a = str.substring(0, 1);
    return a + str + a;
}

console.log(addFirstAndLast('hello')); 


 //===========================================================
//                     Q.25  
// ========================================================
function IsDivisible3Ans7(b){
    if(b % 3 == 0 || b % 7 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(IsDivisible3Ans7(4));

 //===========================================================
//                     Q.26
// ========================================================

function Addlast3intoBoth(str){
    if(str.length >=3){
        str_length= 3;
        b =str.substring(str.length- 3);
        return b+str+ b;
    }
    else{
        return false;
    }
}
console.log(Addlast3intoBoth('hello'));

 //===========================================================
//                     Q.28
// ========================================================

function IsRange50to99(x , y){
    if((x >=50 && y<= 99) || ( y>= 50 && x<=99)){
        return true;
    }
    else{
        return false;
    }
}
console.log(IsRange50to99(12, 60));

 //===========================================================
//                     Q.27
// ========================================================

function IsStringJava(str){
    if( str.length<4){
        return false;
    }
    front = str.substring(0, 4);
    if (front=='java'){
        return trrue;
    }
    else{
        return false;
    }
}
console.log(IsStringJava('this is java '));


 //===========================================================
//                     Q.29
// ========================================================

function RangeChecker( x, y, z){
    return(x>= 50 && x<=99) || (y >=50 && y <=99) ||(z >= 50 && z<=99)

}
console.log(RangeChecker(20, 60, 99));

 //===========================================================
//                     Q.30
// ========================================================

function check_script(str)
{
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
    
  if (str.substring(10, 4) == 'Script') 
    {
    
    result_str = str.substring(0, 4) + str.substring(10,str.length);
      
  }
  return result_str;
}

console.log(check_script("JavaScript"));

 //===========================================================
//                     Q.32
// ========================================================

function closestToHundred(num1, num2){
    const diff1= Math.abs(num1-100);
    const  diff2=Math.abs(num2-100);
    if (diff1<diff2){
        
        return num1;
    }
    else{
        return num2;
    }
    }
console.log(closestToHundred(95,110));


 //===========================================================
//                     Q.33  
// ========================================================

function  checkValue(x , y){

    if((x >= 40 && x<=60 && y >=40 && y <=60)|| (x>=70 && x<=100 && y>=70 && y<=100)){
        return true ;
}
else{
    return false;
}
}
console.log(checkValue(80,90));

 //===========================================================
//                     Q.34
// ========================================================

function IsGreaterChecker(x, y){
    if(x>=40 && x<=60 && y>=40 && y<=60){
        if(x==y){
            console.log( 'the number is same')

        }
    }
        if(x>y){
            console.log('number one is greater');
        }
        else {
            console.log('number two is greater');
       
}
    }

    console.log(IsGreaterChecker(40, 100));


 //===========================================================
//                     Q.35
// ========================================================

function characterBetween2ndAnd4th(str, char) {
  if (str.length < 4) {
    return false;
  }
  const subStr = str.substring(1, 4);
  return subStr.includes(char);
}
const result = characterBetween2ndAnd4th("hello", "l");
console.log(result); 
//===========================================================
//                   Q.36
//===========================================================

function lastDigitsSame(x, y, z) {
  const lastX = x % 10;
  const lastY = y % 10;
  const lastZ = z % 10;
  return lastX === lastY && lastY === lastZ;
}
const same = lastDigitsSame(123, 456, 789);
console.log(same); 
const same2 = lastDigitsSame(123, 453, 789);
console.log(same2); 

//===========================================================
//                     Q.37
// ========================================================


function IsStringChecker(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    let a = str.substring(0, 3).toLowerCase();
    let b = str.substring(3, str.length);
    return a + b;
}

console.log(IsStringChecker("Hello World")); 


//===========================================================
//                     Q.38
// ========================================================

function evaluateMarks(marks, isFinalExam) {
  if (marks >= 89 && marks <= 100) {
    if (isFinalExam && marks < 90) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

let stresult = evaluateMarks(95, false);
console.log(stresult);


 //===========================================================
//                     Q.39 
// ========================================================

function IsPrefactRange(x, y){
    if((x<= 50 && x>= 80)|| (y <= 50 && y>=80)){
        return 65;

    }
    else{
        return 80;
    }
}
console.log(IsPrefactRange(40, 60));

//===========================================================
//                     Q.40 
// ========================================================

function isSumchecker(x , y){
    if((x==8 && y==8)|| (x+y==8)){
        return true;
    }
    else{
        return false;
    }
}
console.log(isSumchecker(12, 12));
//===========================================================
//                   Q.41 & 
// ========================================================

function CheckThreeNumber(x, y, z) {
    if (x == y && y == z) {
        return 30;
    } else if (x == y && y != z) {
        return 40;
    } else {
        return 20;
    }
}

console.log(CheckThreeNumber(20, 20, 20));

//===========================================================
//                     Q.42
// ========================================================
function checkIncreasing(x, y, z) {
  if (x < y && y < z) {
    return 'strict increasing';
  }

  if ((x === y && y < z) || (x < y && y === z)) {
    return 'soft increasing';
  }

  return 'not increasing';
}
console.log(checkIncreasing(10, 15, 31));
//===========================================================
//                     Q.43 
// ========================================================

function sameRightmostDigit(num1, num2, num3) {
    const digit1 = num1 % 10;
    const digit2 = num2 % 10;
    const digit3 = num3 % 10;

    return (digit1 === digit2 || digit1 === digit3 || digit2 === digit3);
}
console.log(sameRightmostDigit(123, 245, 35));

//===========================================================
//                     Q.44
// ========================================================

function evaluateIntegers(x, y, z) {
    return (x >= 20 && (x < y || x < z)) ||
           (y >= 20 && (y < x || y < z)) ||
           (z >= 20 && (z < x || z < y));
}
console.log(evaluateIntegers(15, 25, 30));
//===========================================================
//                     Q.45
// ========================================================

function IsTheSumOrDiff(x, y){
    if((x == 15 && y == 15) || (x + y == 15) || (Math.abs(x - y) == 15)){
        return true;
    }
    else if(x-y==15)  {

        return true;
    }
    else{
        return false;
}

}

console.log(IsTheSumOrDiff(20,40));
//===========================================================
//                     Q.46
// ========================================================

function valCheck(a, b) {
    const aDivisibleBy7Or11 = (a % 7 === 0 || a % 11 === 0);
    const bDivisibleBy7Or11 = (b % 7 === 0 || b % 11 === 0);
    if ((aDivisibleBy7Or11 && !bDivisibleBy7Or11) || (!aDivisibleBy7Or11 && bDivisibleBy7Or11)) {
        return true; 
    } else {
        return false; 
    }
}
console.log(valCheck(18, 9));
//===========================================================
//                     Q.47
// ========================================================

function FindRange(x){
    if(x<40 || x>10000){
        return false;
    }
    else if(x>=40 && x<=10000){
        return true;
    }
}

console.log(FindRange(30));

//===========================================================
//                     Q.48
// ========================================================

function ReverseStr(str){
    Reverse = "";
    for(let i= str.length-1 ; i >=0 ; i-- ){
        Reverse += str[i];
    }
    return Reverse;             
}
console.log(ReverseStr("Hello"));
//===========================================================
//                  Q.49 check two number and show greater then number
//===========================================================

function checkGrater(num1 , num2) {
   if(num1 > num2 ) {
       console.log(`${num1} is greater than ${num2}`);
       }else{
           console.log(`${num2} is greater than ${num1}`);
       }
}   
console.log(checkGrater(23,10));
console.clear();

//===========================================================
//               Q.50 
//===========================================================

// Sample numbers
let num1 = 12;
let num2 = 55;
let num3 = 100;

// Sorting the numbers
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        alert(num1 + ", " + num2 + ", " + num3);
    } else {
        alert(num1 + ", " + num3 + ", " + num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        alert(num2 + ", " + num1 + ", " + num3);
    } else {
        alert(num2 + ", " + num3 + ", " + num1);
    }
} else {
    if (num1 >= num2) {
        alert(num3 + ", " + num1 + ", " + num2);
    } else {
        alert(num3 + ", " + num2 + ", " + num1);
    }
}


//===========================================================
//               Q.51 
//===========================================================

let p = 10;
let q = 12;
let m = 30;
let n = -10;
let o = -2;

if (p > q && p > m && p > n && p > o) {
    console.log(`The ${p} number is greater than all other numbers`);
} else if (q > p && q > m && q > n && q > o) {
    console.log(`The ${q} number is greater than all other numbers`);
} else if (m > p && m > q && m > n && m > o) {
    console.log(`The ${m} number is greater than all other numbers`);
} else if (n > p && n > q && n > m && n > o) {
    console.log(`The ${n} number is greater than all other numbers`);
} else {
    console.log(`The ${o} number is greater than all other numbers`);
}


//===========================================================
//                      Q.52               
//===========================================================

for (let i = 0; i < 15; i++ ) {
 
    if(i % 2 == 0){
       console.log(i+ "Even number");

    }else{
        console.log(i+ 'the number is odd');              
}
}

//===========================================================
//                      Q.53      factorial of number.         
//===========================================================

function factorial(x) 
{ 

  if (x == 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(6));


//===========================================================
//                      Q.54         
//===========================================================

function gdc(){
let x= parseInt(document.getElementById("a").value);
let y= parseInt(document.getElementById("b").value);
for(let i=1;i<=x && i<=y;i++){
    if(x% i== 0 && y%i==0){
        let g=i;
    }
}
return g;
}
document.getElementById("gdc_result").innerHTML = g;


//===========================================================
//                      Q.55        
//===========================================================

let arr = [2, 3, 5, 6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("The sum of the array elements is:", sum);

//===========================================================
//                      Q.56         
//===========================================================
function computeGrade(marks) {
    if (marks < 60) {
        return 'F';
    } else if (marks < 70) {
        return 'D';
    } else if (marks < 80) {
        return 'C';
    } else if (marks < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

function computeAverageMarks(studentMarks) {
    let totalMarks = 0;
    for (let mark of studentMarks) {
        totalMarks += mark;
    }
    return totalMarks / studentMarks.length;
}
let studentMarks = [80, 77, 88, 95, 68];
let averageMarks = computeAverageMarks(studentMarks);
let grade = computeGrade(averageMarks);
console.log("Average Marks:", averageMarks);
console.log("Grade:", grade);
//===========================================================
//                      Q.57        
//===========================================================

for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " ffbb");
    } else if (i % 3 === 0) {
        console.log(i + " fuzz");
    } else if (i % 5 === 0) {
        console.log(i + " buzz");
    } else {
        console.log(i + " there is no devide by 3 & 5");
    }
}
//===========================================================
//                      Q.58        
//===========================================================

const button = document.createElement("button"); 
button.textContent = "Click me"; 
button.addEventListener('click', function() {
    console.log("Clicked Me"); 
});
document.body.appendChild(button); 

//===========================================================
//                      Q.59       
//===========================================================

const dropdownButton = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
dropdownButton.addEventListener('click', function() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
function changeBackgroundColor(elementId, color) {
      const element = document.getElementById(elementId);
      if (element) {
        element.addEventListener('mouseenter', () => {
          element.style.backgroundColor = color;
        });
      }
    }

    // Call the function with element ID and desired color
    changeBackgroundColor('myDiv', 'green');
    //===========================================================
//                      Q.60      
//===========================================================

function validateForm(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form fields by their ids
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    // Check if required fields are empty
    if (nameField.value.trim() === '' || emailField.value.trim() === '') {
        // Display error message
        document.getElementById("errorMessage").textContent = "Please fill in all required fields.";
        document.getElementById("errorMessage").style.display = "block";
    } else {
        // Submit the form
        document.getElementById("myForm").submit();
    }
}

// Add event listener to the form's submit event
document.getElementById("myForm").addEventListener("submit", validateForm);