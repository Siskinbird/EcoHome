const DATA = [
    {
        question: 'Какой дом вы хотите построить?',
        answers: [
            {
                id: '1',
                image: './src/image/quiz/firstQ/block.png',
                value: 'Дом из блоков',
            },
            {
                id: '2',
                image: './src/image/quiz/firstQ/carcass.png',
                value: 'Каркасный дом',
            },
            {
                id: '3',
                image: './src/image/quiz/firstQ/brick.png',
                value: 'Дом из блоков',
            },
            {
                id: '4',
                image: './src/image/quiz/firstQ/beam.png',
                value: 'Дом из профилированного бруса',
            },
            {
                id: '5',
                image: './src/image/quiz/firstQ/cylinder.png',
                value: 'Дом из цилиндрированного бруса',
            },
            {
                id: '6',
                image: './src/image/quiz/firstQ/sip.png',
                value: 'Дом из SIP-панелей',
            },
        ]
    },
    {
        question: 'Сколько этажей вам нужно?',
        answers: [
            {
                id: '1',
                value: '1 этаж',
                className: ''
            },
            {
                id: '2',
                value: '2 этажа',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '3',
                value: '3 этажа',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '4',
                value: '1 этаж + мансарда',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '5',
                value: '2 этажа + мансарда',
                className: 'quiz-questions-item__answers-second'
            },
            {
                id: '6',
                value: 'Еще не определились',
            },
        ]
    },
    {
        question: 'Есть ли у вас участок?',
        answers: [
            {
                id: '1',
                value: 'Участок есть, в черте города',
            },
            {
                id: '2',
                value: 'Участок есть за городом до 100 км',
            },
            {
                id: '3',
                value: 'Участок есть за городом далее 100 км',
            },
            {
                id: '4',
                value: 'Участка нет',
            }
        ]
    },
    {
        question: 'Выберете желаемые размеры дома',
        answers: [
            {
                id: '1',
                value: 'Дом до 100 кв.м',
            },
            {
                id: '2',
                value: 'До 150-200 кв.м',
            },
            {
                id: '3',
                value: 'До 100-150 кв.м',
            },
            {
                id: '4',
                value: 'Более 200 кв.м.',
            }
        ]
    },
    {
        question: 'Когда планируете строительство?',
        answers: [
            {
                id: '1',
                value: 'В ближайшее время',
            },
            {
                id: '2',
                value: 'В следующем году',
            },
            {
                id: '3',
                value: 'В этом году',
            },
            {
                id: '4',
                value: 'Еще не определились',
            }
        ]
    },
    {
        question: 'Какой стиль ближе?',
        answers: [
            {
                id: '1',
                image: './src/image/quiz/house_style/shale.png',
                value: 'Шале',
                className: '-styles'
            },
            {
                id: '2',
                image: './src/image/quiz/house_style/fin.png',
                value: 'Финская классика',
            },
            {
                id: '3',
                image: './src/image/quiz/house_style/rait.png',
                value: 'Райт',
                className: '-styles'
            },
            {
                id: '4',
                image: './src/image/quiz/house_style/modern.png',
                value: 'Модерн',
                className: '-styles'
            },
            {
                id: '5',
                image: './src/image/quiz/house_style/barn.png',
                value: 'Баухаус',
                className: '-styles'
            },
            {
                id: '6',
                image: './src/image/quiz/house_style/american.png',
                value: 'Американский стиль',
                className: '-styles'

            },
            {
                id: '7',
                image: './src/image/quiz/house_style/fahverh.png',
                value: 'Фахверк',
                className: '-styles'
            },
            {
                id: '8',
                image: './src/image/quiz/house_style/classic.png',
                value: 'Классический стиль',
                className: '-styles'
            }
        ]
    },
    {
        question: 'Нужны ли дополнительные строения на участке?',
        answers: [
            {
                id: '1',
                image: './src/image/quiz/outbuilding/garage.png',
                value: 'Гараж',
            },
            {
                id: '2',
                image: './src/image/quiz/outbuilding/sauna.png',
                value: 'Сауна',
            },
            {
                id: '3',
                image: './src/image/quiz/outbuilding/bath.png',
                value: 'Баня',
            }
        ]
    },
]

let results = {}
const customRadioButton = document.getElementById('custom-radio');
const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const count = document.getElementById('count');
const nextButton =document.getElementById('next-button');

const mainSlideRender = index => {
    renderCount(index + 1)

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <label>
            <p>${answer.value}</p>
                 <input type="radio" name=${index} value=${answer.id} class="radio">
                 <div class="custom-radio__button-additional"></div>        
            </label>
            `
        ).join('');

    questions.innerHTML = `
      <div class="quiz-questions-item">
         <h3 class="quiz-questions-item__question">${DATA[index].question}</h3>
         <div class="quiz-questions-item__answers-additional">${renderAnswers()}</div>
      </div>
    `
}

const sixthSlideRender = index => {
    renderCount(index + 1)

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <label>
                <img src=${answer.image} alt="">
                 <input type="radio" name=${index} value=${answer.id} class="radio">
                 <div class="custom-radio__button-styles"></div>
                 <p>${answer.value}</p>
            </label>
            `
        ).join('');

    questions.innerHTML = `
      <div class="quiz-questions-item">
         <h3 class="quiz-questions-item__question">${DATA[index].question}</h3>
         <div class="quiz-questions-item__answers-styles">${renderAnswers()}</div>
      </div>
    `
}


const renderQuestions = (index) => {
    renderCount(index + 1)

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <label>
                <img src=${answer.image} alt="">
                 <input type="radio" name=${index} value=${answer.id} class="radio" >
                 <div class="custom-radio__button" id="custom-radio"></div>
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
        results[event.target.name] = event.target.value;
        console.log(results);
        nextButton.disabled = false
    }
})



quiz.addEventListener('click', (event) => {
    //count logic

    let nextQuestionIndex = Number(questions.dataset.currentStep) + 1
    if (event.target.classList.contains('quiz-calculator__next-button') ||
        event.target.classList.contains('x') ||
        event.target.classList.contains('y')) {


        if(DATA.length === nextQuestionIndex) {
            console.log('There will be a feedback form');
            //рендер формы
        } else if (nextQuestionIndex === 1
            || nextQuestionIndex === 2
            || nextQuestionIndex === 3
            || nextQuestionIndex === 4) {

            //функция рендера слайдов с другими стилями

            mainSlideRender(nextQuestionIndex)

        } else if(nextQuestionIndex === 5) {
            sixthSlideRender(nextQuestionIndex)
        } else if (nextQuestionIndex === 6) {

            renderQuestions(nextQuestionIndex)
            document.getElementsByClassName('custom-radio__button')[0].style= "top:-20px";
            document.getElementsByClassName('custom-radio__button')[1].style= "top:-20px";
            document.getElementsByClassName('custom-radio__button')[2].style= "top:-20px";
            //customRadioButton.style = 'top: -12px;'
        }

        else if(nextQuestionIndex === 0) {
            renderQuestions(nextQuestionIndex)
        }
        console.log('yes');
    }
})
renderQuestions(0)