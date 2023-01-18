const DATA = [
    {
        question: 'Какой дом вы хотите построить?',
        answers: [
            {
                id: '0',
                image: './src/image/quiz/firstQ/block.png',
                value: 'Дом из блоков',
                className: 'quiz-questions-item__answers'
            },
            {
                id: '1',
                image: './src/image/quiz/firstQ/carcass.png',
                value: 'Каркасный дом',
                className: 'quiz-questions-item__answers'
            },
            {
                id: '2',
                image: './src/image/quiz/firstQ/brick.png',
                value: 'Дом из блоков',
                className: 'quiz-questions-item__answers'
            },
            {
                id: '3',
                image: './src/image/quiz/firstQ/beam.png',
                value: 'Дом из профилированного бруса',
                className: 'quiz-questions-item__answers'
            },
            {
                id: '4',
                image: './src/image/quiz/firstQ/cylinder.png',
                value: 'Дом из цилиндрированного бруса',
                className: 'quiz-questions-item__answers'
            },
            {
                id: '5',
                image: './src/image/quiz/firstQ/sip.png',
                value: 'Дом из SIP-панелей',
                className: 'quiz-questions-item__answers'
            },
        ]
    },
    {
        question: 'Сколько этажей вам нужно?',
        answers: [
            {
                id: '6',
                value: '1 этаж',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '7',
                value: '2 этажа',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '8',
                value: '3 этажа',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '9',
                value: '1 этаж + мансарда',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '10',
                value: '2 этажа + мансарда',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '11',
                value: 'Еще не определились',
                className: 'quiz-questions-item__answers-second'
            },
        ]
    }
]

let results = {}

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const count = document.getElementById('count');
const nextButton =document.getElementById('next-button');

const renderQuestions = (index) => {
    renderCount(index + 1)

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <label>
                <img src=${answer.image} alt="">
                 <input type="radio" name=${index} value=${answer.id} class="radio">
                 <div class="custom-radio__button"></div>
                 <p>${answer.value}</p>
            </label>
            `
        ).join('');

    questions.innerHTML = `
      <div class="quiz-questions-item">
         <h3 class="quiz-questions-item__question">${DATA[index].question}</h3>
         <div class="quiz-questions-item__answers">${renderAnswers()}</div>
      </div>
    `
}

const renderCount = (currentStep) => {
    count.innerHTML = '0' + `${currentStep}` + ' / 0' + `${DATA.length}`
}

quiz.addEventListener('change', (event) => {
    if(event.target.classList.contains('radio')) {
        console.log('input');
        results[event.target.name] = event.target.value;
        console.log(results);
        nextButton.disabled = false
    }
})

quiz.addEventListener('click', (event) => {
    //count logic
    console.log(event);
    let nextQuestionIndex = Number(questions.dataset.currentStep) + 1
    if (event.target.classList.contains('quiz-calculator__next-button') ||
        event.target.classList.contains('x') ||
        event.target.classList.contains('y')) {


        if(DATA.length === nextQuestionIndex) {
            console.log('tobi pizda');
            //рендер формы
        } else {
            //next question
            renderQuestions(nextQuestionIndex)
        }

        console.log('yes');
    }
})
renderQuestions(0)