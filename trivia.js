
let nameInputScreen = document.querySelector("#name-input-slide");
let loadingScreenSlide = document.querySelector("#loading-screen-slide");
let optionSelectSlide = document.querySelector("#options-select-slide");
let playerName;
let nameInput = document.getElementById("games-input");
let nameValidator = document.querySelector("#input-validation");
let startBtn = document.querySelector("#game-btn");
let optionsBtn = document.querySelector("#options-btn");
let dotOne = document.querySelector("#loading-dot-1");
let dotTwo = document.querySelector("#loading-dot-2");
let dotThree = document.querySelector("#loading-dot-3");
let loadingPercent = document.querySelector("#loading-percent");
let loadingFunText = document.querySelector("#loading-fun-text");

let option1 = document.querySelector("#topic1");
let option2 = document.querySelector("#topic2");
let option3 = document.querySelector("#topic3");
let option4 = document.querySelector("#topic4");
let option5 = document.querySelector("#topic5");
let option6 = document.querySelector("#topic6");
let option7 = document.querySelector("#topic7");
let option8 = document.querySelector("#topic8");
let option9 = document.querySelector("#topic9");
let option10 = document.querySelector("#topic10");
let topicsSelect = document.querySelectorAll(".quiz-options")
let difficulty1 = document.querySelector("#difficulty1");
let difficulty2 = document.querySelector("#difficulty2");
let difficulty3 = document.querySelector("#difficulty3");
let difficultySelect = document.querySelectorAll(".quiz-difficulty");

let quizFetchTopics = "";
let quizFetchDifficulty = "";

let questionsContainer = document.querySelector("#questions-container");
let slideIndex = 1;
let slides = document.getElementsByClassName("question-slides");
let playerNameText = document.querySelector("#player-name");
let playerScoreText = document.querySelector("#player-score");
let congratsText = document.querySelector(".congrats-text");
let gameStartTime;
let questionTimer;
let nextQuestionTimer;
let timeLoaded;
let clickTime;
let bonusTime;
let pointsAchieved = 0;
let answerOne;
let answerTwo;
let answerThree;
let answerFour;
let answerFive;
let countDowns;
let secondsCountdownOne;
let secondsCountdownTwo;
let secondsCountdownThree;
let secondsCountdownFour;
let secondsCountdownFive;
let stopSecondsCountdownOne;
let stopSecondsCountdownTwo;
let stopSecondsCountdownThree;
let stopSecondsCountdownFour;
let stopSecondsCountdownFive;
let millisecondsCountdownOne;
let millisecondsCountdownTwo;
let millisecondsCountdownThree;
let millisecondsCountdownFour;
let millisecondsCountdownFive;
let secondsOne = 10;
let secondsTwo = 10;
let secondsThree = 10;
let secondsFour = 10;
let secondsFive = 10;
let millisecondsOne = 1000;
let millisecondsTwo = 1000;
let millisecondsThree = 1000;
let millisecondsFour = 1000;
let millisecondsFive = 1000;
let countdownCircle = document.querySelectorAll(".countdown-wrap");
let countdownText = document.querySelectorAll(".timer");
let secondsText = document.querySelectorAll(".timer-seconds");
let millisecondsText = document.querySelectorAll(".timer-milliseconds");
let trackOne = document.querySelectorAll(".question-track-1");
let trackTwo = document.querySelectorAll(".question-track-2");
let trackThree = document.querySelectorAll(".question-track-3");
let trackFour = document.querySelectorAll(".question-track-4");
let trackFive = document.querySelectorAll(".question-track-5");
let funTexts = ["Fetching random questions from the internet", "Sourcing the answers from random places", "Filling in some wrong options to confuse you", "Sending you off to battle"];

let HTMLQuestionsArray = document.querySelectorAll(".questions-text");
let q1Options = document.querySelectorAll(".q1-options-text");
let q2Options = document.querySelectorAll(".q2-options-text");
let q3Options = document.querySelectorAll(".q3-options-text");
let q4Options = document.querySelectorAll(".q4-options-text");
let q5Options = document.querySelectorAll(".q5-options-text");
let q1Radios = document.querySelectorAll(".q1-options");
let q2Radios = document.querySelectorAll(".q2-options");
let q3Radios = document.querySelectorAll(".q3-options");
let q4Radios = document.querySelectorAll(".q4-options");
let q5Radios = document.querySelectorAll(".q5-options");
let HTMLOptionsArray = [q1Options, q2Options, q3Options, q4Options, q5Options];
let HTMLRadiosArray = [q1Radios, q2Radios, q3Radios, q4Radios, q5Radios];

window.addEventListener("load", () => {
    loadingScreenSlide.style.display = "none";
    questionsContainer.style.display = "none";
    optionSelectSlide.style.display = "none";
    // nameInputScreen.style.display = "none";
})

nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9a-zA-Z\-\_]/g, '').slice(0, 10);

    if (e.target.value.length < 2 || e.target.value.length > 10) {
        nameValidator.classList.replace("bg-black", "bg-red");
        nameValidator.classList.replace("bg-green", "bg-red");
    } else if (e.target.value.toUpperCase() == "GIYU" || e.target.value.toUpperCase() == "CODEGIYU") {
        nameValidator.classList.replace("bg-black", "bg-red");
        nameValidator.classList.replace("bg-green", "bg-red");
    } else {
        nameValidator.classList.replace("bg-black", "bg-green");
        nameValidator.classList.replace("bg-red", "bg-green");
    }

    if (nameValidator.classList.contains("bg-green")) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
})

startBtn.addEventListener("click", () => {
    playerName = nameInput.value;

   nameInputScreen.style.display = "none";
   optionSelectSlide.style.display = "block";
   console.log("to options select")
})

topicsSelect.forEach(topic => {
    topic.addEventListener("change", () => {
        if (topicSelected() && difficultySelected()) {
            optionsBtn.disabled = false;
            console.log("enabled")
        } else {
            optionsBtn.disabled = true;
            console.log("disabled")
        }
    })
})

function topicSelected() {
    for (let i = 0; i < topicsSelect.length; i++) {
        if (topicsSelect[i].checked) return true;
    }

    return false;
}

difficultySelect.forEach(difficulty => {
    difficulty.addEventListener("change", () => {
        if (topicSelected() && difficultySelected()) {
            optionsBtn.disabled = false;
            console.log("enabled")
        } else {
            optionsBtn.disabled = true;
            console.log("disabled")
        }
    })
})

function difficultySelected() {
    for (let i = 0; i < difficultySelect.length; i++) {
        if (difficultySelect[i].checked) return true;
    }

    return false;
}

optionsBtn.addEventListener("click", () => {
    for (let i = 0; i < topicsSelect.length; i++) {
        if (topicsSelect[i].checked) {
            if (quizFetchTopics === "") {
                quizFetchTopics += topicsSelect[i].value;
            } else {
                quizFetchTopics += `,${topicsSelect[i].value}`;
            }
            console.log(quizFetchTopics);
        }
    }

    for (let i = 0; i < difficultySelect.length; i++) {
        if (difficultySelect[i].checked) {
            quizFetchDifficulty = difficultySelect[i].value;
        }
        console.log(quizFetchDifficulty);
    }
    

    optionSelectSlide.style.display = "none";
    loadingScreenSlide.style.display = "block";
    getQuestions();
    loadingScreen();
})

function loadingScreen() {
    dotsCycleOne();
    setTimeout( () => {
        dotsCycleTwo();
    }, 2000);
    setTimeout( () => {
        dotsCycleThree();
    }, 4000);
    setTimeout( () => {
        dotsCycleFour();
    }, 6000);
    setTimeout( () => {
        // showSlides(3);
        loadingScreenSlide.style.display = "none";
        questionsContainer.style.display = "block";
        showSlides(slideIndex);
        
        // questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
    }, 8000);
}

function dotsCycleOne() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[0];
    loadingCountUp(15);

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function dotsCycleTwo() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[1];
    loadingCountUp(45);

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function dotsCycleThree() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[2];
    loadingCountUp(80);

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function dotsCycleFour() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[3];

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
        loadingCountUp(100);
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function loadingCountUp(n) {
    let countUp = setInterval( () => {
        let currentNumber = loadingPercent.innerHTML;
        if (currentNumber < n) {
            // 
            currentNumber++;
        }
        loadingPercent.innerHTML = currentNumber;
        if (currentNumber == n) {
            clearInterval(countUp);
        }
    }, 25)
}

let questionsArray = [];
let newQuestionsArray = [];
let newOptionsArray = [];

function getQuestions() {
    fetch(`https://the-trivia-api.com/api/questions?categories=${quizFetchTopics}&limit=50&difficulty=${quizFetchDifficulty}`)
        .then((response) => response.json())
        .then((data) => {
            
    console.log(`https://the-trivia-api.com/api/questions?categories=${quizFetchTopics}&limit=50&difficulty=${quizFetchDifficulty}`)
            //    
            questionsArray = data;
            let Q1 = questionsArray[Math.floor(Math.random() * questionsArray.length)];
            let secondQuestionsArray = questionsArray.filter(data => data != Q1);
            let Q2 = secondQuestionsArray[Math.floor(Math.random() * secondQuestionsArray.length)];
            let thirdQuestionsArray = secondQuestionsArray.filter(data => data != Q2);
            let Q3 = thirdQuestionsArray[Math.floor(Math.random() * thirdQuestionsArray.length)];
            let fourthQuestionsArray = thirdQuestionsArray.filter(data => data != Q3);
            let Q4 = fourthQuestionsArray[Math.floor(Math.random() * fourthQuestionsArray.length)];
            let fifthQuestionsArray = fourthQuestionsArray.filter(data => data != Q4);
            let Q5 = fifthQuestionsArray[Math.floor(Math.random() * fifthQuestionsArray.length)];

            newQuestionsArray = [Q1, Q2, Q3, Q4, Q5];

            answerOne = newQuestionsArray[0].correctAnswer;
            answerTwo = newQuestionsArray[1].correctAnswer;
            answerThree = newQuestionsArray[2].correctAnswer;
            answerFour = newQuestionsArray[3].correctAnswer;
            answerFive = newQuestionsArray[4].correctAnswer;

            let optionsOneArray = newQuestionsArray[0].incorrectAnswers.push(answerOne);
            let optionsTwoArray = newQuestionsArray[1].incorrectAnswers.push(answerTwo);
            let optionsThreeArray = newQuestionsArray[2].incorrectAnswers.push(answerThree);
            let optionsFourArray = newQuestionsArray[3].incorrectAnswers.push(answerFour);
            let optionsFiveArray = newQuestionsArray[4].incorrectAnswers.push(answerFive);
            
            
            let questionOneOptionsNumbers = [0,1,2,3];
            let q1OpNum1 = questionOneOptionsNumbers[Math.floor(Math.random() * 4)];
            let secondQuestionOneOptionsNumbers = questionOneOptionsNumbers.filter(data => data != q1OpNum1);
            let q1OpNum2 = secondQuestionOneOptionsNumbers[Math.floor(Math.random() * 3)];
            let thirdQuestionOneOptionsNumbers = secondQuestionOneOptionsNumbers.filter(data => data != q1OpNum2);
            let q1OpNum3 = thirdQuestionOneOptionsNumbers[Math.floor(Math.random() * 2)];
            let q1OpNum4 = thirdQuestionOneOptionsNumbers.filter(data => data != q1OpNum3)[0];
            

            let questionTwoOptionsNumbers = [0,1,2,3];
            let q2OpNum1 = questionTwoOptionsNumbers[Math.floor(Math.random() * 4)];
            let secondQuestionTwoOptionsNumbers = questionTwoOptionsNumbers.filter(data => data != q2OpNum1);
            let q2OpNum2 = secondQuestionTwoOptionsNumbers[Math.floor(Math.random() * 3)];
            let thirdQuestionTwoOptionsNumbers = secondQuestionTwoOptionsNumbers.filter(data => data != q2OpNum2);
            let q2OpNum3 = thirdQuestionTwoOptionsNumbers[Math.floor(Math.random() * 2)];
            let q2OpNum4 = thirdQuestionTwoOptionsNumbers.filter(data => data != q2OpNum3)[0];

            let questionThreeOptionsNumbers = [0,1,2,3];
            let q3OpNum1 = questionThreeOptionsNumbers[Math.floor(Math.random() * 4)];
            let secondQuestionThreeOptionsNumbers = questionThreeOptionsNumbers.filter(data => data != q3OpNum1);
            let q3OpNum2 = secondQuestionThreeOptionsNumbers[Math.floor(Math.random() * 3)];
            let thirdQuestionThreeOptionsNumbers = secondQuestionThreeOptionsNumbers.filter(data => data != q3OpNum2);
            let q3OpNum3 = thirdQuestionThreeOptionsNumbers[Math.floor(Math.random() * 2)];
            let q3OpNum4 = thirdQuestionThreeOptionsNumbers.filter(data => data != q3OpNum3)[0];

            let questionFourOptionsNumbers = [0,1,2,3];
            let q4OpNum1 = questionFourOptionsNumbers[Math.floor(Math.random() * 4)];
            let secondQuestionFourOptionsNumbers = questionFourOptionsNumbers.filter(data => data != q4OpNum1);
            let q4OpNum2 = secondQuestionFourOptionsNumbers[Math.floor(Math.random() * 3)];
            let thirdQuestionFourOptionsNumbers = secondQuestionFourOptionsNumbers.filter(data => data != q4OpNum2);
            let q4OpNum3 = thirdQuestionFourOptionsNumbers[Math.floor(Math.random() * 2)];
            let q4OpNum4 = thirdQuestionFourOptionsNumbers.filter(data => data != q4OpNum3)[0];

            let questionFiveOptionsNumbers = [0,1,2,3];
            let q5OpNum1 = questionFiveOptionsNumbers[Math.floor(Math.random() * 4)];
            let secondQuestionFiveOptionsNumbers = questionFiveOptionsNumbers.filter(data => data != q5OpNum1);
            let q5OpNum2 = secondQuestionFiveOptionsNumbers[Math.floor(Math.random() * 3)];
            let thirdQuestionFiveOptionsNumbers = secondQuestionFiveOptionsNumbers.filter(data => data != q5OpNum2);
            let q5OpNum3 = thirdQuestionFiveOptionsNumbers[Math.floor(Math.random() * 2)];
            let q5OpNum4 = thirdQuestionFiveOptionsNumbers.filter(data => data != q5OpNum3)[0];

            let newOptionsOneArray = [newQuestionsArray[0].incorrectAnswers[q1OpNum1], newQuestionsArray[0].incorrectAnswers[q1OpNum2], newQuestionsArray[0].incorrectAnswers[q1OpNum3], newQuestionsArray[0].incorrectAnswers[q1OpNum4]];
            let newOptionsTwoArray = [newQuestionsArray[1].incorrectAnswers[q2OpNum1], newQuestionsArray[1].incorrectAnswers[q2OpNum2], newQuestionsArray[1].incorrectAnswers[q2OpNum3], newQuestionsArray[1].incorrectAnswers[q2OpNum4]];
            let newOptionsThreeArray = [newQuestionsArray[2].incorrectAnswers[q3OpNum1], newQuestionsArray[2].incorrectAnswers[q3OpNum2], newQuestionsArray[2].incorrectAnswers[q3OpNum3], newQuestionsArray[2].incorrectAnswers[q3OpNum4]];
            let newOptionsFourArray = [newQuestionsArray[3].incorrectAnswers[q4OpNum1], newQuestionsArray[3].incorrectAnswers[q4OpNum2], newQuestionsArray[3].incorrectAnswers[q4OpNum3], newQuestionsArray[3].incorrectAnswers[q4OpNum4]];
            let newOptionsFiveArray = [newQuestionsArray[4].incorrectAnswers[q5OpNum1], newQuestionsArray[4].incorrectAnswers[q5OpNum2], newQuestionsArray[4].incorrectAnswers[q5OpNum3], newQuestionsArray[4].incorrectAnswers[q5OpNum4]];

            newOptionsArray = [newOptionsOneArray, newOptionsTwoArray, newOptionsThreeArray, newOptionsFourArray, newOptionsFiveArray];
            
            displayQuestions(newQuestionsArray);
        }) 
}

function displayQuestions(arr) {
    
    

    for (let x = 0; x < arr.length; x++) {
        HTMLQuestionsArray[x].innerHTML = arr[x].question;

        for (let y = 0; y < 4; y++) {
            HTMLOptionsArray[x][y].innerHTML = newOptionsArray[x][y];
            HTMLRadiosArray[x][y].value = newOptionsArray[x][y];
        }
    }
}


function showSlides(n) {
    let i;
    
    if (n == slides.length + 1) {
        clearInterval(questionTimer);
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slides[n-1].style.display = "block";

        timeLoaded = new Date();
        if (n == 1) {
            gameStartTime = timeLoaded;
            
        }
        

        if (n > 0 && n < 7) {
            clearInterval(questionTimer);
            questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
            
        } else {
            
            clearInterval(questionTimer);
        }
    }
    
    countDowns = setTimeout( () => {
        if (slideIndex == 1) {
            secondsCountdownOne = setInterval(function() {
                countdownCircle[0].classList.replace("grey-border", "green-border");
                countdownText[0].classList.replace("text-white", "text-green");
                secondsOne--;
                if (secondsOne == 0) {
                    clearInterval(secondsCountdownOne);
                }
                if (secondsOne == 4) {
                    countdownCircle[0].classList.replace("green-border", "red-border");
                    countdownText[0].classList.replace("text-green", "text-red");
                }
                secondsText[0].innerHTML = secondsOne;
            }, 1000);
        } else if (slideIndex == 2) {
            secondsCountdownTwo = setInterval(function() {
                countdownCircle[1].classList.replace("grey-border", "green-border");
                countdownText[1].classList.replace("text-white", "text-green");
                secondsTwo--;
                if (secondsTwo == 0) {
                    clearInterval(secondsCountdownTwo);
                }
                if (secondsTwo == 4) {
                    countdownCircle[1].classList.replace("green-border", "red-border");
                    countdownText[1].classList.replace("text-green", "text-red");
                }
                secondsText[1].innerHTML = secondsTwo;
            }, 1000);
        } else if (slideIndex == 3) {
            secondsCountdownThree = setInterval(function() {
                countdownCircle[2].classList.replace("grey-border", "green-border");
                countdownText[2].classList.replace("text-white", "text-green");
                secondsThree--;
                if (secondsThree == 0) {
                    clearInterval(secondsCountdownThree);
                }
                if (secondsThree == 4) {
                    countdownCircle[2].classList.replace("green-border", "red-border");
                    countdownText[2].classList.replace("text-green", "text-red");
                }
                secondsText[2].innerHTML = secondsThree;
            }, 1000);
        } else if (slideIndex == 4) {
            secondsCountdownFour = setInterval(function() {
                countdownCircle[3].classList.replace("grey-border", "green-border");
                countdownText[3].classList.replace("text-white", "text-green");
                secondsFour--;
                if (secondsFour == 0) {
                    clearInterval(secondsCountdownFour);
                }
                if (secondsFour == 4) {
                    countdownCircle[3].classList.replace("green-border", "red-border");
                    countdownText[3].classList.replace("text-green", "text-red");
                }
                secondsText[3].innerHTML = secondsFour;
            }, 1000);
        } else if (slideIndex == 5) {
            secondsCountdownFive = setInterval(function() {
                countdownCircle[4].classList.replace("grey-border", "green-border");
                countdownText[4].classList.replace("text-white", "text-green");
                secondsFive--;
                if (secondsFive == 0) {
                    clearInterval(secondsCountdownFive);
                }
                if (secondsFive == 4) {
                    countdownCircle[4].classList.replace("green-border", "red-border");
                    countdownText[4].classList.replace("text-green", "text-red");
                }
                secondsText[4].innerHTML = secondsFive;
            }, 1000);
        }
    }, 3000);
}

function showAnswer(n) {
    clearInterval(questionTimer);
    
    let allOptions = document.querySelectorAll(`.q${n}-options`);
    allOptions.forEach(option => {
        option.checked = true;
        option.parentElement.classList.replace("dark-grey-border", "red-border");
        option.previousElementSibling.classList.replace("text-grey-2", "text-red");
        option.style.backgroundImage = "url('img/redx-1.png')";
    })
    
    console
    if (n == 1) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerOne}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackOne.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 2) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerTwo}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackTwo.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 3) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerThree}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackThree.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 4) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerFour}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackFour.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 5) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerFive}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackFive.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
        
        if (pointsAchieved < 150) {
            congratsText.innerHTML = "What type of playing is this?🤡"
        } else if (pointsAchieved >= 150 && pointsAchieved < 300) {
            congratsText.innerHTML = "Is this playing?🙄"
        } else if (pointsAchieved >= 300 && pointsAchieved < 500) {
            congratsText.innerHTML = "Failure is success in progress🙂"
        } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
            congratsText.innerHTML = "Congratulations!😎"
        } else {
            congratsText.innerHTML = "You're an inspiration!🤩"
        }
         
        playerNameText.innerHTML = playerName;
        playerScoreText.innerHTML = pointsAchieved;
        if (pointsAchieved < 500) {
            playerScoreText.classList.add("text-red");
        } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
            playerScoreText.classList.add("text-blue");
        } else {
            playerScoreText.classList.add("text-green");
        }
    }
    
    if (slideIndex < 6) {
        
        nextQuestionTimer = setTimeout( () => { nextQuestion(2)}, 2000);
    }
}

function nextQuestion(n) {
    clearInterval(questionTimer);
    clearTimeout(nextQuestionTimer);
    
    showSlides(slideIndex += 1);
}

let radios = document.querySelectorAll('.quiz-checkbox');
radios.forEach(radio => {
    radio.addEventListener("click", () => {
        let radioName = radio.getAttribute("class").split(" ")[1];
        let radioQuestion = radioName.charAt(1);

        if (radioQuestion == 1) {
            stopSecondsCountdownOne = clearInterval(secondsCountdownOne);
        } else if (radioQuestion == 2) {
            stopSecondsCountdownTwo = clearInterval(secondsCountdownTwo);
        } else if (radioQuestion == 3) {
            stopSecondsCountdownThree = clearInterval(secondsCountdownThree);
        } else if (radioQuestion == 4) {
            stopSecondsCountdownFour = clearInterval(secondsCountdownFour);
        } else if (radioQuestion == 5) {
            stopSecondsCountdownFive = clearInterval(secondsCountdownFive);
            clearTimeout(countDowns);
        }
        
        radio.parentElement.classList.replace("dark-grey-border", "blue-border");
        radio.previousElementSibling.classList.replace("text-grey-2", "text-blue");

        let radioGroup = document.getElementsByClassName(radioName);

        for (let i = 0; i < radioGroup.length; i++) {
            radioGroup[i].disabled = true;
        }

        clickTime = new Date();
        bonusTime = clickTime - timeLoaded;

        

        
        
        clearInterval(questionTimer);
        nextQuestionTimer = setTimeout( () => { nextQuestion(2)}, 3000);

        setTimeout( () => {
            if (radioQuestion == 1) {
                if (radio.value == answerOne) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 150;
                    trackOne.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                    if (bonusTime - 3000 < 0) {
                        pointsAchieved += 50;
                    } else {
                        pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 200);
                    }
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerOne}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackOne.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }
            } else if (radioQuestion == 2) {
                if (radio.value == answerTwo) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 150;
                    trackTwo.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                    if (bonusTime - 3000 < 0) {
                        pointsAchieved += 50;
                    } else {
                        pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 200);
                    }
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerTwo}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackTwo.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 3) {
                if (radio.value == answerThree) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 150;
                    trackThree.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                    if (bonusTime - 3000 < 0) {
                        pointsAchieved += 50;
                    } else {
                        pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 200);
                    }
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerThree}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackThree.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 4) {
                if (radio.value == answerFour) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 150;
                    trackFour.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                    if (bonusTime - 3000 < 0) {
                        pointsAchieved += 50;
                    } else {
                        pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 200);
                    }
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerFour}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackFour.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 5) {
                if (radio.value == answerFive) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 150;
                    trackFive.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                    if (bonusTime - 3000 < 0) {
                        pointsAchieved += 50;
                    } else {
                        pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 200);
                    }
                    if (pointsAchieved < 150) {
                        congratsText.innerHTML = "What type of playing is this?🤡"
                    } else if (pointsAchieved >= 150 && pointsAchieved < 300) {
                        congratsText.innerHTML = "Is this playing?🙄"
                    } else if (pointsAchieved >= 300 && pointsAchieved < 500) {
                        congratsText.innerHTML = "Failure is success in progress🙂"
                    } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
                        congratsText.innerHTML = "Congratulations!😎"
                    } else {
                        congratsText.innerHTML = "You're an inspiration!🤩"
                    }
                    
                    playerNameText.innerHTML = playerName;
                    playerScoreText.innerHTML = pointsAchieved;
                    if (pointsAchieved < 500) {
                        playerScoreText.classList.add("text-red");
                    } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
                        playerScoreText.classList.add("text-blue");
                    } else {
                        playerScoreText.classList.add("text-green");
                    }
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerFive}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackFive.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                    if (pointsAchieved < 150) {
                        congratsText.innerHTML = "What type of playing is this?🤡"
                    } else if (pointsAchieved >= 150 && pointsAchieved < 300) {
                        congratsText.innerHTML = "Is this playing?🙄"
                    } else if (pointsAchieved >= 300 && pointsAchieved < 500) {
                        congratsText.innerHTML = "Failure is success in progress🙂"
                    } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
                        congratsText.innerHTML = "Congratulations!😎"
                    } else {
                        congratsText.innerHTML = "You're an inspiration!🤩"
                    }
                    
                    playerNameText.innerHTML = playerName;
                    playerScoreText.innerHTML = pointsAchieved;
                    if (pointsAchieved < 500) {
                        playerScoreText.classList.add("text-red");
                    } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
                        playerScoreText.classList.add("text-blue");
                    } else {
                        playerScoreText.classList.add("text-green");
                    }
                }            
            }
        }, 1000)
    })
})
