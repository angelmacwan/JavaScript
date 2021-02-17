// https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple


let cat = 11
let dif = "easy"
let questions
let currNum = 1
let ans = ""
let score = 0

const loadQuestions = () => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${dif}&type=multiple`)
    .then(response => response.json())
    .then(data => {
        questions = data.results
        score = 0
        ans = ""
        currNum = 1
        nextQuestion()
    });
}

const nextQuestion = () => {
    if (currNum <= 10){
        let q = questions[currNum-1]
        ans = q.correct_answer
        let allOptions = shuffleArray([q.incorrect_answers[0],
                                    q.incorrect_answers[1],
                                    q.incorrect_answers[2],
                                    q.correct_answer])

        let card = `<div class="card">
                <p class="question neo">
                ${q.question}
                </p>
                <br>
                <p class="options">
                <button class="btn neo" onclick="check('${allOptions[0]}')"> ${allOptions[0]} </button>
                <button class="btn neo" onclick="check('${allOptions[1]}')"> ${allOptions[1]} </button>
                <button class="btn neo" onclick="check('${allOptions[2]}')"> ${allOptions[2]} </button>
                <button class="btn neo" onclick="check('${allOptions[3]}')"> ${allOptions[3]} </button>
                
                </p>
            </div>`
        document.querySelector(".main").innerHTML = card
        currNum += 1
    }else{
        let card = `<div class="card">
                <p class="question neo">
                END OF THE QUIZ <br>
                YOU SCORED ${score} / 10
                </p>                
            </div>`
        document.querySelector(".main").innerHTML = card
    }
    
}

const setParameters = () => {
    cat = document.querySelector("#category").value
    dif = document.querySelector("#difficulty").value
    currNum = 1
    score = 0
    loadQuestions()
    options(0)
}

const options = (status) => {
    if (status == 1) document.querySelector(".menu").style.left="0"
    else document.querySelector(".menu").style.left="200%"
}

const check = (c) => {
    if (c == ans){
        score += 1
        document.querySelector("#TRUE").style.left = "0"
    }else{
        document.querySelector("#FALSE").style.left = "0"
    }
    setTimeout(() => {
        console.log(score)
        document.querySelector(".score").innerHTML = `SCORE ${score}` 
        document.querySelector("#TRUE").style.left = "200%"
        document.querySelector("#FALSE").style.left = "200%"
        nextQuestion()
    }, 1500);
    
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

loadQuestions()
