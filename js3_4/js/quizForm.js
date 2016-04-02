var quizForm = {
    quizForm: document.createElement('form'),
    quizTitle: document.createElement('h4'),
    quizSubmit: document.createElement('button'),
    //amount of created questions
    questionCount: 0,
    answerCount: 0,
    
    createBase: function () {
        this.quizForm.classList.add('quizForm');
        this.quizForm.setAttribute('method', 'GET');
        this.quizTitle.classList.add('quizTitle');
        this.quizTitle.innerHTML = 'Тест по программированию';
        this.quizSubmit.classList.add('quizSubmit');
        this.quizSubmit.setAttribute('form', 'quizForm');
        this.quizSubmit.setAttribute('type', 'submit');
        this.quizSubmit.innerHTML = 'Проверить мои результаты';
        document.body.appendChild(this.quizForm);
        this.quizForm.appendChild(this.quizTitle);
        this.quizForm.appendChild(this.quizSubmit);
    },
    
    createQuestion: function () {
        var questionBlock = document.createElement('div');
        var question = document.createElement('h4');
        var answerCheck;
        var answerLabel;
        
        questionBlock.classList.add('questionBlock');
        question.classList.add('question');
        question.innerHTML = ( (this.questionCount+1) + '. Вопрос №' + (this.questionCount+1) );
        questionBlock.appendChild(question);
        
        this.questionCount++;
        for ( var i = 0; i < 3; i++ ){
            answerCheck = document.createElement('input');
            answerCheck.classList.add('answerCheck');
            answerCheck.setAttribute('type', 'checkbox');
            answerCheck.setAttribute('id', ('qAns' + this.answerCount));
            
            
            answerLabel = document.createElement('label');
            answerLabel.classList.add('answerLabel');
            answerLabel.setAttribute('for', ('qAns' + this.answerCount));
            answerLabel.innerHTML = ('Вариант ответа №'+(i+1) );
            this.answerCount++;
            
            questionBlock.appendChild(answerCheck);
            questionBlock.appendChild(answerLabel);
        }
        
        this.quizForm.insertBefore(questionBlock, this.quizSubmit);
    }
    
    
};

quizForm.createBase();
quizForm.createQuestion();
quizForm.createQuestion();
quizForm.createQuestion();
console.log('Questions amount: ', quizForm.questionCount);
console.log('Answers amount: ', quizForm.answerCount);
