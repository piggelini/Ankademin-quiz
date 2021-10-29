//Global variables
let colorModeButton = document.querySelector("#colorMode");
let checkAnswersButton = document.querySelector("#checkAnswers");
let retryButton = document.querySelector("#retryQuiz");
let radioInputs = document.querySelectorAll("[type = 'radio']");
let checkboxInputs = document.querySelectorAll("[type = 'checkbox']");
let resultContainer = document.querySelector("#result-container");
let bodyColor = document.querySelector('body');
let questions = document.querySelectorAll('li');

//Check answers! button
checkAnswersButton.addEventListener('click', () => {
    resultContainer.innerHTML = "";

    let points = 0;
    let result = document.createElement('h2');
    let rightCheckboxes = 0;
    let wrongCheckboxes = 0;

    


    //Radios - counts the right answers.
    radioInputs.forEach((input) => {
        if (input.checked && input.value === "right"){
            points++;
    //If the answer is right the label turns green.
            input.className = "greenlabel";
        } else if(input.checked && input.value === "wrong") {
    //If the answer is wrong the label turns red.
            input.className = "redlabel";
        }
        //Disables the radios.
        input.disabled = true;
    });

    //CheckBoxes - counts the number of the right checkboxes checked.
    checkboxInputs.forEach((input) => {
        if (input.checked && input.value === "right"){
            rightCheckboxes++;
        //Counts the number of the wrong checkboxes checked.
        } else if (input.checked && input.value === "wrong"){
            wrongCheckboxes++;
        }
        //Disables the checkboxes.
        input.disabled = true;
    });
    //Checks if all the right Checkboxes are checked.  
    if (rightCheckboxes === 4 && wrongCheckboxes === 0){
        points++;
        checkboxInputs.forEach((input) => {
    //The labels only gets green when all 4 right boxes are checked.
            if (input.checked && input.value === "right"){
            input.className = "greenlabel";
            }
        });
    }

    //Display result/points in different styles
    if(points === 10){
        result.innerText = "WELL DONE! " + points + " of 10";
        result.style.color = "limegreen";
        resultContainer.className = "result";
        resultContainer.appendChild(result);
    } else if(points >= 8){
        result.innerText = points + " of 10";
        resultContainer.className = "result";
        result.style.color = "limegreen";
        resultContainer.appendChild(result);
    } else if (points >= 5){
        result.innerText = points + " of 10";
        result.style.color = "orange";
        resultContainer.className = "result";
        resultContainer.appendChild(result);
    } else {
        result.innerText = points + " of 10";
        resultContainer.className = "result";
        resultContainer.appendChild(result);
    }
    //Scrolls to bottom of page to show result.
    window.scrollTo(0,document.body.scrollHeight);

    });


//Retry button
retryButton.addEventListener('click', () => {
    location.reload();
});

//Dark mode vs Light mode button
colorModeButton.addEventListener('click', () => {
    if (colorModeButton.innerHTML === "Light mode"){
        bodyColor.style.backgroundColor = "white";
        bodyColor.style.color = 'black';
        colorModeButton.innerHTML = 'Dark mode';
    }else{
    bodyColor.style.backgroundColor = "#272C30";
    bodyColor.style.color = 'lightgray';
    colorModeButton.innerHTML = 'Light mode';
    }
});