//jshint esversion:6
const correctAnswers = ['B', 'A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoreResult = document.querySelector('span');
form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    
    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score +=20;
        }
    });
    scrollTo(0,0);
    
    result.classList.remove('d-none'); 

    let output = 0;
    const timer = setInterval(()=>{
        scoreResult.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10);
});