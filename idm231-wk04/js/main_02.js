//
// Declare global variables outside of functions here
var firstName;
var birthDayObj;
//
var WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//
var lastName;

function calZodiac() {
  //
  // Name and date error checking not needed when using Chrome browser

  firstName = document.getElementById('fname').value;
  birthDayObj = new Date(document.getElementById('bday').value);

  lastName = document.getElementById('lname').value;

  //
  // DATE CHECKER FOR SAFARI! This check will NOT catch Feb 30
  console.log('birthDayObj parsed is ' + Date.parse(birthDayObj));
  if (isNaN(Date.parse(birthDayObj))) {
    alert('Invalid date. Please retry');
    // Exit/Jump out of this function
    return false;
  }

  var whichDayNdx = birthDayObj.getUTCDay();
  console.log('whichDayNdx is ' + whichDayNdx);

  //
  // Calculate zodic sign

  var whichMonth = birthDayObj.getUTCMonth();
  console.log('whichMonth is ' + whichMonth);

  var whichDayOfMonth = birthDayObj.getUTCDate();
  console.log('whichDayOfMonth is ' + whichDayOfMonth);

  //
  // Add 1 for readabilty
  whichMonth++;
  whichDayOfMonth++;

  var AstroSign;

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

  //
  // Figure out user age, call a function, pass parameters, return result
  var currAge = calculate_age(birthDayObj.getUTCMonth(), birthDayObj.getUTCDate(), birthDayObj.getUTCFullYear());

  var outputArea = document.getElementById('displayMsg');
  var msg = '';
  msg += '<p>Hello ' + firstName + ' ' + lastName + '.</p>';
  msg += '<p>Your zodiac sign is ' + AstroSign + '.</p>';
  msg += '<p>You are <strong>' + currAge + '</strong> years old.</p>';

  //
  // Add candles
  msg += '<p>CANDLES: ';
  for (lp = 0; lp < currAge; lp++) {
    msg += 'i ';
  }
  msg += '</p>';
  outputArea.innerHTML = msg;

  //
  //  return false to prevent form from resetting 
  return false;
}


function calculate_age(bMonth, bDay, bYear) {
  var today_date = new Date();
  var today_year = today_date.getUTCFullYear();
  var today_month = today_date.getUTCMonth();
  var today_day = today_date.getUTCDate();

  console.log('bMonth is ' + bMonth);
  console.log('today_month is ' + today_month);
  
  console.log('bDay is ' + bDay);
  console.log('today_day is ' + today_day);
  
  console.log('bYear is ' + bYear);
  console.log('today_year is ' + today_year);
  
  var age = today_year - bYear;
  
  console.log('age is ' + age);

  if (today_month < bMonth) {
    age--;
  }
  if ((today_month == bMonth) && (today_day < bDay)) {
    age--;
  }
  
  console.log('adjusted age is ' + age);
  
  return age;
} // Close calculate_age
