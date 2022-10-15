const validate = () => {
    if(form.name.value==='') {
        alert("Please enter your name.")
    }
    else if(form.age.value==='') {
        alert("Please enter your age.")
    }
    else if(!form.male.checked && !form.female.checked && !form.others.checked) {
        alert("Please select your gender.")
    }
    else if(form.degree.value==='') {
        alert("Please enter your degree.")
    }
    else if(form.graduationYear.value==='') {
        alert("Please enter your graduation year.")
    }
    else if(form.answer.value==='') {
        alert("Please enter your answer for the Introduction.")
    }
    else if(!form.termsConditions.checked) {
        alert("Please agree to terms and conditions.")
    }
    else {
        alert("Form is submitted successfully.")
        form.name.value='';
        form.age.value='';
        form.male.checked=false;
        form.female.checked=false;
        form.others.checked=false;
        form.degree.value='';
        form.graduationYear .value='';
        form.answer.value='';
        form.termsConditions.checked=false;
    }
 }


