let daysHolder = document.getElementById("date"); 
let monthHolder = document.getElementById("month"); 
let yearsHolder = document.getElementById("year"); 
let showAge = document.getElementById("show-age"); 
const calcBtn = document.getElementById("calc-btn"); 

var today = new Date();

let yourDays = today.getDate();
let yourMonth = today.getMonth() + 1;
let yourYear = today.getFullYear();

let maxDays = 0;
let monthNum = 1;

calcBtn.addEventListener("click", (days, month, year) => {
    days = daysHolder.value;
    month = monthHolder.value;
    year = yearsHolder.value;

    if(daysHolder.value == "" || monthHolder.value == "" || yearsHolder.value == "") {
        alert("Please enter your valid Date of Birth");
    }

    if(yourMonth == 1) {
        maxDays = 31;
        monthNum = 1;
    } else if (yourMonth == 2) {
         maxDays = 28;
         monthNum = 2;
    } else if (yourMonth == 3) {
         maxDays = 31;
         monthNum = 3;
    } else if (yourMonth == 4) {
         maxDays = 30;
         monthNum = 4;
    } else if (yourMonth == 5) {
         maxDays = 31;
         monthNum = 5;
    } else if (yourMonth == 6) {
         maxDays = 30;
         monthNum = 6;
    } else if (yourMonth == 7) {
         maxDays = 31;
         monthNum = 7;
    } else if (yourMonth == 8) {
         maxDays = 31;
         monthNum = 8;
    } else if (yourMonth == 9) {
         maxDays = 30;
         monthNum = 9;
    } else if (yourMonth == 10) {
         maxDays = 31;
         monthNum = 10;
    } else if (yourMonth == 11) {
         maxDays = 30;
         monthNum = 11;
    } else {
         maxDays = 31;
         monthNum = 12;
    }


   var ageYears = yourYear - year;

   if(yourMonth <= month) {
       yourMonth = yourMonth + 12
   }

   var ageMonths = yourMonth - month

   var ageDays = (maxDays - yourDays) + parseInt(days);

   showAge.innerHTML = `Your age is ${ageYears} years, ${ageMonths} month, ${ageDays} days`;
});
console.log(`Current Date: ${yourDays} ${yourMonth} ${yourYear}`);
























