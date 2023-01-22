const DATA = [
    {
        question: 'Какой дом вы хотите построить?',
        answers: [
            {
                id: '1',
                image: './src/image/quiz/firstQ/block.png',
                alt: 'Дом из блоков',
                value: 'Дом из блоков',
            },
            {
                id: '2',
                image: './src/image/quiz/firstQ/carcass.png',
                alt: 'Каркасный дом',
                value: 'Каркасный дом',
            },
            {
                id: '3',
                image: './src/image/quiz/firstQ/brick.png',
                alt: 'Дом из блоков',
                value: 'Дом из блоков',
            },
            {
                id: '4',
                image: './src/image/quiz/firstQ/beam.png',
                alt: 'Дом из профилированного бруса',
                value: 'Дом из профилированного бруса',
            },
            {
                id: '5',
                image: './src/image/quiz/firstQ/cylinder.png',
                alt: 'Дом из цилиндрированного бруса',
                value: 'Дом из цилиндрированного бруса',
            },
            {
                id: '6',
                image: './src/image/quiz/firstQ/sip.png',
                alt: 'Дом из SIP-панелей',
                value: 'Дом из SIP-панелей',
            },
        ]
    },
    {
        question: 'Сколько этажей вам нужно?',
        answers: [
            {
                id: '1',
                value: '1 этаж'
            },
            {
                id: '2',
                value: '2 этажа'
            },
            {
                id: '3',
                value: '3 этажа'
            },
            {
                id: '4',
                value: '1 этаж + мансарда'
            },
            {
                id: '5',
                value: '2 этажа + мансарда'
            },
            {
                id: '6',
                value: 'Еще не определились'
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
                alt: 'Шале',
                value: 'Шале'
            },
            {
                id: '2',
                image: './src/image/quiz/house_style/fin.png',
                alt: 'Финская классика',
                value: 'Финская классика',
            },
            {
                id: '3',
                image: './src/image/quiz/house_style/rait.png',
                alt: 'Райт',
                value: 'Райт',

            },
            {
                id: '4',
                image: './src/image/quiz/house_style/modern.png',
                alt: 'Модерн',
                value: 'Модерн'
            },
            {
                id: '5',
                image: './src/image/quiz/house_style/barn.png',
                alt: 'Баухаус',
                value: 'Баухаус'
            },
            {
                id: '6',
                image: './src/image/quiz/house_style/american.png',
                alt: 'Американский стиль',
                value: 'Американский стиль'

            },
            {
                id: '7',
                image: './src/image/quiz/house_style/fahverh.png',
                alt: 'Фахверк',
                value: 'Фахверк'
            },
            {
                id: '8',
                image: './src/image/quiz/house_style/classic.png',
                alt: 'Классический стиль',
                value: 'Классический стиль'
            }
        ]
    },
    {
        question: 'Нужны ли дополнительные строения на участке?',
        answers: [
            {
                id: '1',
                image: './src/image/quiz/outbuilding/garage.png',
                alt: 'Гараж',
                value: 'Гараж'
            },
            {
                id: '2',
                image: './src/image/quiz/outbuilding/sauna.png',
                alt: 'Сауна',
                value: 'Сауна'
            },
            {
                id: '3',
                image: './src/image/quiz/outbuilding/bath.png',
                alt: 'Баня',
                value: 'Баня'
            }
        ]
    },
    {
        title: 'Мы получили данные и приступаем к расчетам',
        subtitle: 'Укажите куда выслать расчет стоимости?',
        answers: [
            {
                id: '1',
                value: 'Telegram',
                image: './src/image/quiz/form/telegram.svg',
                alt: 'Telegram',
            },
            {
                id: '2',
                image: './src/image/quiz/form/viber.svg',
                value: 'Viber',
                alt: 'Viber'
            },
            {
                id: '3',
                image: './src/image/quiz/form/whatsApp.svg',
                value: "What\'s App",
                alt: 'What\'s App'
            }
        ]
    }

]

let results = {}
const customRadioButtons = document.getElementsByClassName('custom-radio__button');
const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const count = document.getElementById('count');
const nextButton = document.getElementById('next-button');
const nextBlock = document.getElementById('next-block')
const feedbackForm = document.getElementById('feedback-form');
const progressBar = document.getElementById('progress-bar');
const pagination = document.getElementById('pagination');


// const renderForm = (index) => {
//     questions.dataset.currentStep = index;
//
//     const renderAnswers = () => DATA[index].answers
//         .map((answer) => `
//             <label>
//                 <img src=${answer.image} alt="">
//                  <input type="radio" name=${index} value=${answer.id} class="radio" >
//                  <div class="custom-radio__form-button" id="custom-radio"></div>
//                  <p>${answer.value}</p>
//             </label>
//             `
//         ).join('');
//
//     questions.innerHTML = `
//         <div class="quiz-questions">
//
//                 <h2 class= "quiz-feedback-form__title">${DATA[index].title}</h2>
//                    <p class= "quiz-feedback-form__subtitle">${DATA[index].subtitle}</p>
//                    <div class="quiz-questions-item__answers">${renderAnswers()}</div>
//                    <div class= "quiz-feedback-form__buttons">
//                    <div class= "quiz-feedback-form__buttons-button">
//                    <div class= "quiz-feedback-form__buttons-button">
//                    <div class= "quiz-feedback-form__buttons-button">
//                 </div>
//                 </div>
//     `
// }

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

const sixthSlideRender = (index) => {
    renderCount(index + 1)

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <label>
                <img src=${answer.image} alt=${answer.alt}>
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
                <img src=${answer.image} alt=${answer.alt}>
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
    count.innerHTML = '0' + `${currentStep}` + ' / 0' + `${DATA.length - 1}`
}

quiz.addEventListener('change', (event) => {
    if(event.target.classList.contains('radio') || event.target.classList.contains('form-radio')) {
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


        if (DATA.length === nextQuestionIndex + 1) {
            //рендер формы
            console.log('There will be a feedback form');
            pagination.style.display = 'none';
            questions.style.display = 'none';
            feedbackForm.style.display = 'flex';

        } else if (nextQuestionIndex === 1
            || nextQuestionIndex === 2
            || nextQuestionIndex === 3
            || nextQuestionIndex === 4) {

            //функция рендера слайдов с другими стилями

            mainSlideRender(nextQuestionIndex)

        } else if (nextQuestionIndex === 5) {
            sixthSlideRender(nextQuestionIndex)
        } else if (nextQuestionIndex === 6) {

            renderQuestions(nextQuestionIndex)
            for (let button in customRadioButtons) {
                customRadioButtons[button].style = "top:-20px";
            }
        } else if (nextQuestionIndex === 0) {
            renderQuestions(nextQuestionIndex)
        }
    }
})
renderQuestions(0)

const phoneValidator = (phone) => {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489]\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    return regex.test(phone);
}



const sub = () => {
    const tel = document.getElementById('telephone').value;
    console.log(tel);
    if (!phoneValidator(tel)) {
       alert('Не правильно набран номер')
    } else {
        console.log('Valid')
    }
}
