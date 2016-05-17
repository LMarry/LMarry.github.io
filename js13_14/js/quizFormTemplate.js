$(function(){
    'use strict';
    var $form = _.template($('#quiz').html());
    var questions = [
        {
            question: 'Сколько лап у среднестатистической кошки?',
            answer: ['3','4','5'],
            rightAns: [2]
        },
        {
            question: 'Правильная характеристика зимней погоды в Киеве?',
            answer: ['Мороз','+20','Гололёд'],
            rightAns: [1, 3]
        },
        {
            question: 'Признаки того, что села батарейка?',
            answer: ['Холодный ветер с дождём усилился сто кратно','Ты не его одуванчик','Он не твой Гораций'],
            rightAns: [1]
        }
    ]
    
    for(var i=0; i< questions.length; i++){
        localStorage.setItem('q'+(i+1), JSON.stringify(questions[i].rightAns))
    }    
    console.log('q1 = '+localStorage.getItem('q1'));
    console.log('q2 = '+localStorage.getItem('q2'));
    console.log('q3 = '+localStorage.getItem('q3'));
   
    var formContent = $form({ data: questions });
    $('body').append(formContent);
    
    var back = $('<div class="back"></div>');
    var resultWindow = $('<div class="resultWindow"><p class="results"></p></div>');

    function showResult() {
        $('body').append(back);
        $('body').append(resultWindow);

        back.on('click', function () {
            resultWindow.remove();
            back.remove();
            $('input').removeAttr('checked');

        })
    };
    
    function checkResult() {
        var allTrue = true;
        var checkedAmount = 0;
        var answerIndex = [];
        for (var i = 0; i < questions.length; i++) {
            var getAnswer = localStorage.getItem('q' + (i + 1));
            getAnswer = JSON.parse(getAnswer);
            getAnswer = getAnswer.map(function (ga) {
                return ga - 1 + i * 3;
            })
            answerIndex = answerIndex.concat(getAnswer);
        }

        $('input').each(function (i) {
            if (((answerIndex.indexOf(i)>=0) && this.checked) || (!this.checked && (!answerIndex.indexOf(i)<0)))
                allTrue = false;
            if (this.checked)
                checkedAmount ++;
                
        });
        
        if(!allTrue && (checkedAmount == answerIndex.length)){
            $('.results').html("All right!");
            $('.results').css("color","green");
            
        }
        else{
            $('.results').html("Bad knowledge.");
            $('.results').css("color","red");
        }
            
    };
    
    $('.quizSubmit').on('click', showResult);
    $('.quizSubmit').on('click', checkResult);

})