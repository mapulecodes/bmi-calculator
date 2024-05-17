const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    const bmi = weight / (height * height);

    let message;

    if (bmi < 18.5) {
        message = "eat something please";
    } else if (bmi >= 18.5 && bmi < 25) {
        message = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        message = "overweight";
    } else {
        message = "stop it get some help"
    }

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)}. ${message}`;
}

calculateBtn.addEventListener('click', calculateBMI);