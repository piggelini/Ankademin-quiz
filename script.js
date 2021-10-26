//Global variables
let colorModeButton = document.querySelector("#colorMode");
let checkAnswersButton = document.querySelector("#checkAnswers");
let retryButton = document.querySelector("#retryQuiz");
let radioInputs = document.querySelectorAll("[type = 'radio']");
let checkboxInputs = document.querySelectorAll("[type = 'checkbox']");

//Check answers! button
checkAnswersButton.addEventListener('click', () => {

    let points = 0;
    let resultContainer = document.querySelector("#result-container");
    let result = document.createElement('h2');
    let rightCheckboxes = 0;

    //Radios
    radioInputs.forEach((input) => {
        if (input.checked && input.value === "right"){
            points++;
        }
    });

    // CheckBoxes
    checkboxInputs.forEach((input) => {
        if (input.checked && input.value === "right"){
            rightCheckboxes++;
        }
    });

    if (rightCheckboxes === 4){
        points++;
    }

    //Display result/points in different colors
    if(points === 10){
        result.innerText = "CONGRATULATIONS! " + points + " of 10";
        result.style.color = "lightgreen";
        resultContainer.appendChild(result);
    } else if(points >= 8){
        result.innerText = points + " of 10";
        result.style.color = "lightgreen";
        resultContainer.appendChild(result);
    } else if (points >= 5){
        result.innerText = points + " of 10";
        result.style.color = "orange";
        resultContainer.appendChild(result);

    } else {
        result.innerText = points + " of 10";
        resultContainer.appendChild(result);
    }


    });


//Retry knappen
retryButton.addEventListener('click', () => {
    location.reload();
})

//Dark mode vs Light mode button
colorModeButton.addEventListener('click', () => {
    let bodyColor = document.querySelector('body');
    if (colorModeButton.innerHTML === "Light mode"){
        bodyColor.style.backgroundColor = "white";
        bodyColor.style.color = 'black';
        colorModeButton.innerHTML = 'Dark mode';
    }else{
    bodyColor.style.backgroundColor = "black";
    bodyColor.style.color = 'lightgray';
    colorModeButton.innerHTML = 'Light mode';
    }
});