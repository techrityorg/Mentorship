
let dis = document.getElementById("display");
let wow = document.getElementById("wow");
function calci(){
    let current_year = document.getElementById("year");
    const date = current_year.value;
    let current_date= (new Date()).getFullYear();
    if ((current_date-date)<=0)
    {
        dis.innerHTML="Invalid data ♥";
        
    }
    else if (date === '')
    {
        wow.innerHTML="Enter something and then try!"
    }
    else {
        if(current_date-date >=100){
            console.log(current_date);
            console.log(date);
            wow.innerHTML="Oho amazing you Reached century this year"
        }
        else if (current_date-date >0 && current_date-date != 18)
        {
            wow.innerHTML="Keep Up the hard work you are "+(current_date-date);
        }
        else 
        {
            wow.innerHTML="Congrats hmm you Turned 18 this Year."; 
        }
    }
}
