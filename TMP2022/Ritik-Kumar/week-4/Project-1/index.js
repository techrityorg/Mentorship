function calcAge() {
  var birthDate = document.getElementById("date").value;
  var birthMonth = document.getElementById("month").value;
  var birthYear = document.getElementById("year").value;
  var currentDate = new Date();
  var currDate = currentDate.getDate();
  var currMonth = 1 + currentDate.getMonth();
  var currYear = currentDate.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if(birthDate==null || birthMonth==null || birthYear==null)
  {
    alert("Please enter Details");
    return false;
  }
  if (birthDate > currDate) {
    currDate = currDate + month[currMonth - 1];
    currMonth = currMonth - 1;
  }
  if (birthMonth > currMonth) {
    currMonth = currMonth + 12;
    currYear = currYear - 1;
  }
  var d = currDate - birthDate;
  var m = currMonth - birthMonth;
  var y = currYear - birthYear;
  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
