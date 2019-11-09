// Utworzenie wieklowymiarowej tablicy z nazwami kategorii oraz pytaniami

const categories = [
    ["Historia"], ["Kraje Świata"], ["Kto najstarszy"], ["Film"], ["Informatyka"], ["Muzyka"], ["Sport"], ["Zwierzęta"]
];
// Stworzenie funkcji dla tworzenia nowych obiektów (pytań) przy użyciu konstruktowa
function Question (question, answer1, answer2, answer3, answer4, correct) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correct = correct;
};
//stworzenie obiektu za pomocą konstruktora
const pytanie1Historia = new Question ("Który król rządził najwcześniej?", "Władysław Jagielło", "Stanisław August Poniatowski", "Bolesław Chrobry", "Zygmunt Stary", "Bolesław Chrobry");
categories[0].push(pytanie1Historia); // przypisanie do tablicy w kategorii Historia, indeks najważniejszy, żeby nie pomylić kategorii, później przypisze od razu kilka pytań naraz
// i tak dalej...
const pytanie2Historia = new Question ("W którym roku odbyła się sławna Bitwa o Anglię w trakcie II Wojny Światowej?", "1939", "1940", "1941", "1942", "1940");

const pytanie3Historia = new Question ("Ile lat trwała wojna stuletnia?", "100 lat", "99 lat", "101 lat", "116 lat", "116 lat");

const pytanie4Historia = new Question ("W którym roku miał miejsce 3 rozbiór Polski?", "1772", "1791", "1793", "1795", "1795");

const pytanie5Historia = new Question ("Co wydarzyło się w 966 roku w Polsce?", "Pierwsze koronowanie", "Chrzest", "Zjazd Gnieźnieński", "Bitwa pod Racławicami", "Chrzest");


 function categoryDraw() {
    var number1 = Math.floor(Math.random()*8);
    var number2 = Math.floor(Math.random()*8);

     while (number1 === number2) {
        number2 = Math.floor(Math.random()*8);
    }
    document.getElementById("category1").value = categories[number1][0];
    document.getElementById("category2").value = categories[number2][0];
}
const Checker = {
    correctAnswer: ""

}

function questionDraw(categoryName) {
    switch(categoryName) {
        case "Historia":
            var questionnumber = Math.floor(Math.random()*(categories[0].length-1)) +1;
            Checker.correctAnswer = categories[0][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
            document.getElementById("question").innerHTML = categories[0][questionnumber].question;
            var a = categories[0][questionnumber].answer1;
            var b = categories[0][questionnumber].answer2;
            var c = categories[0][questionnumber].answer3;
            var d = categories[0][questionnumber].answer4;
            actualQuestionAnswers = [a, b, c, d];

            document.getElementsByClassName("answers")[1];
            document.getElementsByClassName("answer")[0].innerHTML = a;
            document.getElementsByClassName("answer")[1].innerHTML = b;
            document.getElementsByClassName("answer")[2].innerHTML = c;
            document.getElementsByClassName("answer")[3].innerHTML = d;
            categories[0].splice(questionnumber, 1);
        
        
        case "Kraje Świata":
                var questionnumber = Math.floor(Math.random()*(categories[1].length-1)) +1;
                Checker.correctAnswer = categories[1][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[1][questionnumber].question;
                var a = categories[1][questionnumber].answer1;
                var b = categories[1][questionnumber].answer2;
                var c = categories[1][questionnumber].answer3;
                var d = categories[1][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];
    
                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;

        case "Kto najstarszy":

                var questionnumber = Math.floor(Math.random()*(categories[2].length-1)) +1;
                Checker.correctAnswer = categories[2][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[2][questionnumber].question;
                var a = categories[2][questionnumber].answer1;
                var b = categories[2][questionnumber].answer2;
                var c = categories[2][questionnumber].answer3;
                var d = categories[2][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];

                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;

    
        case "Film":

                var questionnumber = Math.floor(Math.random()*(categories[3].length-1)) +1;
                Checker.correctAnswer = categories[3][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[3][questionnumber].question;
                var a = categories[3][questionnumber].answer1;
                var b = categories[3][questionnumber].answer2;
                var c = categories[3][questionnumber].answer3;
                var d = categories[3][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];

                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;

        case "Informatyka":

                var questionnumber = Math.floor(Math.random()*(categories[4].length-1)) +1;
                Checker.correctAnswer = categories[4][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[4][questionnumber].question;
                var a = categories[4][questionnumber].answer1;
                var b = categories[4][questionnumber].answer2;
                var c = categories[4][questionnumber].answer3;
                var d = categories[4][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];

                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;

        case "Muzyka":

                var questionnumber = Math.floor(Math.random()*(categories[5].length-1)) +1;
                Checker.correctAnswer = categories[5][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[5][questionnumber].question;                        
                var a = categories[5][questionnumber].answer1;
                var b = categories[5][questionnumber].answer2;
                var c = categories[5][questionnumber].answer3;
                var d = categories[5][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];
        
                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;

            case "Sport":

                var questionnumber = Math.floor(Math.random()*(categories[6].length-1)) +1;
                Checker.correctAnswer = categories[6][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[6][questionnumber].question;
                var a = categories[6][questionnumber].answer1;
                var b = categories[6][questionnumber].answer2;
                var c = categories[6][questionnumber].answer3;
                var d = categories[6][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];
        
                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;

                case "Zwierzęta":

                var questionnumber = Math.floor(Math.random()*(categories[7].length-1)) +1;
                Checker.correctAnswer = categories[7][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
                document.getElementById("question").innerHTML = categories[7][questionnumber].question;
                var a = categories[7][questionnumber].answer1;
                var b = categories[7][questionnumber].answer2;
                var c = categories[7][questionnumber].answer3;
                var d = categories[7][questionnumber].answer4;
                actualQuestionAnswers = [a, b, c, d];
        
                document.getElementsByClassName("answers")[1];
                document.getElementsByClassName("answer")[0].innerHTML = a;
                document.getElementsByClassName("answer")[1].innerHTML = b;
                document.getElementsByClassName("answer")[2].innerHTML = c;
                document.getElementsByClassName("answer")[3].innerHTML = d;
        
        
        
            // document.getElementsByClassName("choose_category")[0];                            // ustawienie znikania przxycisków kategorii w celu uniknięcią wielokrotnego losowania przez gracza czyli oszustwa
            // document.getElementsByClassName("category_button")[0].style.opacity = "0";
            // document.getElementsByClassName("category_button")[1].style.opacity = "0";
            default:
                ;

    }
}

function check() {
    moneyOnAnswer = [];
    moneyOnAnswer.push(document.getElementById("money1").value);
    moneyOnAnswer.push(document.getElementById("money2").value);
    moneyOnAnswer.push(document.getElementById("money3").value);
    moneyOnAnswer.push(document.getElementById("money4").value);
    console.log(moneyOnAnswer[0]);
    var emptychecker = moneyOnAnswer.some(function(value) {return value == 0;} );
    if (player.money != 0) {alert("Musisz postawić całą kasę");}

    else if (emptychecker === false) {alert("Conajmniej jedna zapadnia musi być pusta");}
     else checkCorrect();
}

function checkCorrect() {
     var a = Number(document.getElementById("money1").value);
     var b = Number(document.getElementById("money2").value);
     var c = Number(document.getElementById("money3").value);
     var d = Number(document.getElementById("money4").value);

     if (actualQuestionAnswers[0] === Checker.correctAnswer){
        player.money = a;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
}
         else if (actualQuestionAnswers[1] === Checker.correctAnswer){
             player.money = b;
             var actualmoney = player.money;
             document.getElementById("money").innerHTML = actualmoney;
            }
            else if (actualQuestionAnswers[2] === Checker.correctAnswer){
                player.money = c;
                var actualmoney = player.money;
                document.getElementById("money").innerHTML = actualmoney;
               }
               else if (actualQuestionAnswers[3] === Checker.correctAnswer){
                player.money = d;
                var actualmoney = player.money;
                document.getElementById("money").innerHTML = actualmoney;
               }

               if (player.money == 0) {
                   location.assign("lose.html");
               }
               if (question.number === 1) {
                   location.assign("win.html");
               }
         nextQuestion();
}


function nextQuestion() {
     question.number +=1;
     var a = question.number;
     document.getElementById("money1").value = 0;
     document.getElementById("money2").value = 0;
     document.getElementById("money3").value = 0;
     document.getElementById("money4").value = 0;
     document.getElementById("questionNumber").innerHTML = `Pytanie ${a}`;
     categoryDraw();

}

function printWin() {
    document.getElementById("win").innerHTML = ` Brawo! Wygrałeś ${player.money} w Postaw na Milion`;
}