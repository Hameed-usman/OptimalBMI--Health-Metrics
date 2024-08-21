const form = document.querySelector('.form-full-box form');

form.addEventListener('submit', function (e) {
    e.preventDefault();


    const height = parseInt(document.querySelector('#height-cm').value);
    const weight = parseInt(document.querySelector('#weight-kg').value);
    const result = document.querySelector('#bmi-result');

 
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerText = "Please Enter Valid Height and Weight";
    } else {
       
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2); 


        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        result.innerHTML = `<span>Your BMI is ${bmi}. You are classified as: ${category}.</span>`;
        result.classList.add('show');
    }
});
