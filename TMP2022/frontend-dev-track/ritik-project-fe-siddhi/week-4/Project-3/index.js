let isValidated = false;
const validate = () =>
{
    if(form.name.value==='')
    {
        alert("Name cannot be empty")
    }
    else if(!form.male.checked && !form.female.checked && !form.others.checked)
    {
        alert("Please Select your gender")
    }
    else if(form.age.value === '')
    {
        alert("Age cannot be empty")
    }
    else if(form.degree.value === '')
    {
        alert("Degree cannot be empty")
    }
    else if(form.gradYear.value === '')
    {
        alert("Graduation Year cannot be empty")
    }
    else if(form.answer.value === '')
    {
        alert("Introduction cannot be empty")
    }
    else
    {
        isValidated=true;
        alert("Validation Successful! Now you can click on Register to successfully submit your form.")
    }
    
}

const formSubmitHandler = () =>{
    if(!isValidated) 
    {
        alert("Form is not Validated. Please Validate it first")
    }
    else
    {
        alert("Form submitted successfully:)")
    }
}