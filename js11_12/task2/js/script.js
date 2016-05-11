$(function () {

    var $profile = $('#profile').html();
    var data = {
        name: 'Лобачёва Мария Олеговна',
        photo: 'img/photo.jpg',
        activity: 'Студентка КНУ им. Т.Г. Шевченко.',
        reasons: ['Нравится;','Присутствует доля творческой работы;'],
        telephone_number: '+380956488168',
        vk_profile: 'vk.com/id41116556',
        feedback: 'Всё могу.'
    }
    
    var content = tmpl($profile, data);
    $('body').append(content);

});