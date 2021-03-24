const quizDB = [
  
    {
        question: "Q1: what is the full form of HTML?",
        a: "hello to my land",
        b: "het text mark of language",
        c: "hypertext markup language",
        d: "hey text of language",
        ans: "ans4"
    },
    {

        question: "Q2: what is the full form of CSS?",
        a: "hello to my land",
        b: "het text mark of language",
        c: "hypertext markup language",
        d: "hey text of language",
        ans: "ans4"
    },
    {

        question: "Q3: what is the full form of HTTP?",
        a: "hello to my land",
        b: "het text mark of language",
        c: "hypertext markup language",
        d: "hey text of language",
        ans: "ans3"
    },
    {

        question: "Q4: what is the full form of JS?",
        a: "hello to my land",
        b: "het text mark of language",
        c: "hypertext markup language",
        d: "hey text of language",
        ans: "ans4"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
 
     question.innerText = questionList.question;

     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;



}

loadQuestion();


 const getCheckAnswer = () =>{

     let answer;
answers.forEach ((curAnsElem) => {
if (curAnsElem.checked){
    answer = curAnsElem.id;
}
});

return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}


submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
if (checkedAnswer == quizDB[questionCount].ans){
score++;
};
questionCount++;
if(questionCount < quizDB.length){
    loadQuestion();
} else{
showscore.innerHTML = `	
<h3> your scored ${score}/${quizDB.length}</h3>
<button class"btn" onclick="location.reload()">Play Again</button>`;
showscore.classList.remove('scorearea');	
}

} );