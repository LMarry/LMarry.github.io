$(function () {
    var Human = {
        name: 'Mary'
        , age: '21'
        , sex: 'female'
        , height: '167'
        , weight: '55'
    }

    function Worker(work, salary) {
        this.__proto__ = Human;
        this.work = work;
        this.salary = salary;
        this.doJob = function () {
            console.log('I do my job!');
        };
    }

    function Student(institute, grant) {
        this.__proto__ = Human;
        this.institute = institute;
        this.grant = grant;
        this.watchMovies = function () {
            console.log('I love Dexter!');
        };
    }
    var worker = new Worker('epam', '400$');
    console.log(worker);
    worker.doJob();
    
    var student = new Student('KNU', '29$');
    console.log(student);
    student.watchMovies();
});