const quizDB = [
    {
         question: "Q1: In Sholay, what was the name of Basanti's horse?",
         a: "Leela",
         b: "Asha",
         c: "Dhano",
         d: "Jay",
         ans: "ans3"
},

{
    question: "Q2:  What was the name of the alien in Koi Mil Gaya?",
    a: "Jadoo",
    b: "Baloo",
    c: "E.T",
    d: "Roy",
    ans: "ans1"
},


{
    question: "Q3:  What kind of movie was Hungama? ",
    a: "Romance",
    b: "Horror",
    c: "Mystery",
    d: "Comedy",
    ans: "ans4"
},


{
    question: "Q4: Who owns Red Chillies Entertainment?  ",
    a: "Salman Khan",
    b: "Amir Khan",
    c: "Shahrukh Khan",
    d: "Saif Ali Khan",
    ans: "ans3"
}


/*{
    question: "Q5: What is the real name of Akshay Kumar?  ",
    a: "Rakesh Bhatt",
    b: "Inderjeet Singh",
    c: "Rajendra Kumar",
    d: "Rajiv Hari Om Bhatia",
    ans: "ans4"
}*/

];

const question = document.querySelector ('.question');
const option1 = document.querySelector ('#option1');
const option2 = document.querySelector ('#option2');
const  option3= document.querySelector ('#option3');
const option4 = document.querySelector ('#option4');
//const question = document.querySelector ('#option5');
const submit = document.querySelector ('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

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

const getCheckAnswer = () => {
   let answer;
answers.forEach((curAnsElem) =>{
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
});
return answer;


};

const deselectALL = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}




submit.addEventListener('click',()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

deselectALL();

    if (questionCount <quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML =`
        <h3> You scored ${score}/${quizDB.length}✌️🎉🎉🎉</h3>
        <button class = "btn" onclick = "location.reload()"> Play Again </button>
        
        
        `;
        showScore.classList.remove('scoreArea');
    }
});























