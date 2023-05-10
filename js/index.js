// inputs
var date = document.getElementById('date');

// label tag before input
var label = document.getElementById('heading')

// outputs
var dateOutput = document.getElementById('days_results');
var monthOutput = document.getElementById('months_results');
var yrsOutput = document.getElementById('years_results');


function submitForm(event) {
    event.preventDefault();


    // Get the birth date from the user
    var birthDate = new Date(date.value);

    // Get the current date
    var currentDate = new Date();


    if (
        (birthDate.getFullYear() > currentDate.getFullYear())
        || (birthDate.getFullYear() == currentDate.getFullYear() && birthDate.getMonth() > currentDate.getMonth())
        || (birthDate.getFullYear() == currentDate.getFullYear() && birthDate.getMonth() == currentDate.getMonth() && birthDate.getDate() > currentDate.getDate())
    ) {
        label.innerHTML = `<p style="color: red">Wrong inputs !</p>`

        dateOutput.innerHTML= "--"
        monthOutput.innerHTML= "--"
        yrsOutput.innerHTML= "--"

        return;
    }

    if(birthDate == NaN) {
        yrsOutput.innerHTML = "" ;
        monthOutput.innerHTML = "" ;
        dateOutput.innerHTML = "" ;

        return;
    }



    // Calculate the difference in years
    var ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

    // Calculate the difference in months
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0) {
        ageInYears--;
        monthDiff = 12 + monthDiff;
    }

    // Calculate the difference in days
    var dayDiff = currentDate.getDate() - birthDate.getDate();
    if (dayDiff < 0) {
        monthDiff--;
        dayDiff = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() + dayDiff; 
    }

    label.innerHTML= "Enter your birthday"

    yrsOutput.innerHTML = "" + ageInYears;
    monthOutput.innerHTML = "" + monthDiff;
    dateOutput.innerHTML = "" + dayDiff;

}
