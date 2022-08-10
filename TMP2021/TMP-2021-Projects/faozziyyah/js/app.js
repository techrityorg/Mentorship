let darkIcon = document.getElementById('dark'); 
let lightIcon = document.getElementById('light');
let aside = document.getElementById('card');
let main = document.getElementById('main');
let secText = document.getElementById('fh');
let firstText = document.getElementById('sh')

lightIcon.style.display = "none";

darkIcon.onclick = function() {
  document.body.style.backgroundColor = "#171651";
  aside.style.backgroundColor = "#6358CA";
  main.style.backgroundColor = "#070640";
  secText.style.color = "#fff";
  firstText.style.color = "#fff";
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
}

lightIcon.onclick = function() {
  document.body.style.backgroundColor = "#513f85";
  aside.style.backgroundColor = "#dee4e7";
  main.style.backgroundColor = "#898dd1";
  secText.style.color = "black";
  firstText.style.color = "black";
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
}
