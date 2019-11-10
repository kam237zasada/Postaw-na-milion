// Utworzenie wieklowymiarowej tablicy z nazwami kategorii oraz pytaniami

const categories = [
    ["Historia"], ["Kraje Świata"], ["Najstarszy"], ["Film"], ["Informatyka"], ["Muzyka"], ["Sport"], ["Zwierzęta"]
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

////////////////////////

//stworzenie obiektu (pytania) za pomocą konstruktora
const pytanie1Historia = new Question ("Który król rządził najwcześniej?", "Władysław Jagielło", "Stanisław August Poniatowski", "Bolesław Chrobry", "Zygmunt Stary", "Bolesław Chrobry");
const pytanie2Historia = new Question ("W którym roku odbyła się sławna Bitwa o Anglię w trakcie II Wojny Światowej?", "1939", "1940", "1941", "1942", "1940");
const pytanie3Historia = new Question ("Ile lat trwała wojna stuletnia?", "100 lat", "99 lat", "101 lat", "116 lat", "116 lat");
const pytanie4Historia = new Question ("W którym roku miał miejsce 3 rozbiór Polski?", "1772", "1791", "1793", "1795", "1795");
const pytanie5Historia = new Question ("Co wydarzyło się w 966 roku w Polsce?", "Pierwsze koronowanie", "Chrzest", "Zjazd Gnieźnieński", "Bitwa pod Racławicami", "Chrzest");
const pytanie6Historia = new Question ("W którym roku miała miejsce wielka Bitwa Pod grunwaldem?", "1939", "1918", "1410", "1837", "1410");
const pytanie7Historia = new Question ("W jakim wieku zmarł Józef Stalin", "70", "74", "63", "85", "74"); //musi być minimum 7 pytań w kategorii, ponieważ gra ma 7 pytań i można ciągle wylosować i wybrać tę samą kategorię (baaaardzo mało prawdopodobne, ale jednak) i gdyby było mniej, to mogłoby wywalić błąd 
categories[0].push(pytanie1Historia, pytanie2Historia, pytanie3Historia, pytanie4Historia, pytanie5Historia, pytanie6Historia, pytanie7Historia); // przypisanie pytań (obiektów) do tablicy w kategorii Historia, indeks najważniejszy, żeby nie pomylić kategorii

////////////////////////

const pytanie1KrajeSwiata = new Question ("Który z tych krajów jest największy?", "Brazylia", "Kanada", "Chiny", "USA", "Kanada");
const pytanie2KrajeSwiata = new Question ("Który spośród wymienionych krajów zamieszkiwała największa ilość ludzi w 2018 roku?", "Rosja", "Indonezja", "Japonia", "Etiopia", "Indonezja");
const pytanie3KrajeSwiata = new Question ("W którym spośród tych krajów władza nie jest wybierana demokratycznie?", "Polska", "Rosja", "Białoruś", "Arabia Saudyjska", "Arabia Saudyjska");
const pytanie4KrajeSwiata = new Question ("Który z kontynentów posiada największą ilośc niezależnych państw?", "Europa", "Azja", "Afryka", "Ameryka Południowa", "Afryka" );
const pytanie5KrajeSwiata = new Question ("W którym z krajów żyje się najlepiej wg najnowszych badań rankingu HSBC Expat Annual League Table?", "Kanada", "Australia", "Singapur", "Szwajcaria", "Szwajcaria");
const pytanie6KrajeSwiata = new Question ("W którym spośród wymienionych europejskich krajów było największe przeciętne wynagrodzenie w 2019 roku?", "Polska", "Holandia", "Niemcy", "Finlandia", "Finlandia");
const pytanie7KrajeSwiata = new Question ("Który z tych krajów azjatyckich nie ma dostępu do morza lub oceanu", "Mongolia", "Iran", "Pakistan", "Kazachstan", "Mongolia");
categories[1].push(pytanie1KrajeSwiata, pytanie2KrajeSwiata, pytanie3KrajeSwiata, pytanie4KrajeSwiata, pytanie5KrajeSwiata, pytanie6KrajeSwiata, pytanie7KrajeSwiata);

//////////////////////////

const pytanie1Najstarszy = new Question ("Który z budynków jest najstarszy", "Wieża Eifflea w Paryżu", "Statua Wolności w Nowym Jorku", "Pałac Kultury i Nauki w Warszawie", "Hala Stulecia we Wrocławiu", "Statua Wolności w Nowym Jorku");
const pytanie2Najstarszy = new Question ("Ile lat miał najstarszy pies na świecie wg księgi Rekordów Guinessa?", "41", "29", "21", "18", "29");
const pytanie3Najstarszy = new Question ("Ile lat miał najstarszy człowiek na świecie?", "122", "115", "108", "131", "122");
const pytanie4Najstarszy = new Question ("Które z tych polskich miast ma najdłużej prawa miejskie?", "Katowice", "Poznań", "Kraków", "Wrocław", "Wrocław");
const pytanie5Najstarszy = new Question ("Który spośród wymienionych papieży był najstarszy w trakcie ukończenia swojego pontyfikatu?", "Jan Paweł II", "Benedykt XVI", "Jan Paweł I", "Paweł VI", "Benedykt XVI");
const pytanie6Najstarszy = new Question ("Który z tych polskich filmów jest najstarszy?", "Miś", "Jak rozpętałem drugą wojnę światową?", "Sami Swoi", "Seksmisja", "Sami Swoi");
const pytanie7Najstarszy = new Question ("Jak ma na imię najstarsze drzewo w Polsce?", "Bolesław", "Bartek", "Chrobry", "Poganin", "Bolesław");
categories[2].push(pytanie1Najstarszy, pytanie2Najstarszy, pytanie3Najstarszy, pytanie4Najstarszy, pytanie5Najstarszy, pytanie6Najstarszy, pytanie7Najstarszy);

////////////////////////

const pytanie1Film = new Question ("Który z tych aktorów dostał najwięcej Oscarów?", "Leonardo DiCaprio", "Tom Hanks", "Gary Oldman", "Nicolas Cage", "Tom Hanks");
const pytanie2Film = new Question ("Który z tych filmów przyniósł największy dochód (dane na listopad 2019)?", "Jurrasic World", "Avatar", "Gwiezdne Wojny: Przebudzenie Mocy", "Król Lew", "Avatar");
const pytanie3Film = new Question ("Który spośród następujących filmów miał największy budżet?", "Król Lew (2019)", "Titanic", "Avengers: Czas Ultrona", "Minionki", "Avengers: Czas Ultrona");
const pytanie4Film = new Question ("Który film spośród podanych miał największą ilość nominacji do Oscara?", "Avatar", "Władca Pierścieni: Powrót Króla", "La La Land", "Gwiezdne Wojny: Część IV - Nowa Nadzieja", "La La Land");
const pytanie5Film = new Question ("Którego z tych filmów NIE wyreżyserował Quentin Tarantino?", "Django", "Pulp Fiction", "Cztery Pokoje", "Od Zmierzchu Do Świtu", "Od Zmierzchu Do Świtu");
const pytanie6Film = new Question ("Jaki znak szczególny miał bohater grany przez Al'a Pacino w filmie 'Zapach Kobiety'?", "Był niewidomy", "Miał tatuaż", "Był głuchoniemy", "Nie miał węchu", "Był niewidomy");
const pytanie7Film = new Question ("Który spośród wymienionych Polaków nie zdobył statuetki Oscara?", "Roman Polanski", "Krzysztof Kieślowski", "Andrzej Wajda", "Jan A.P.Kaczmarek", "Krzysztof Kieślowski");
categories[3].push(pytanie1Film, pytanie2Film, pytanie3Film, pytanie4Film, pytanie5Film, pytanie6Film, pytanie7Film);

////////////////////////

const pytanie1Informatyka = new Question ("W któym roku został wydany pierwszy komputer marki Apple - Apple I?", "1995", "1976", "1990", "1984", "1976");
const pytanie2Informatyka = new Question ("Termin, który określa rozwój technologiczny w tempie wykładniczym, nazywa się Prawem ....?", "Moore'a", "Pascala", "Jobsa", "Gatesa", "Moore'a");
const pytanie3Informatyka = new Question ("W którym roku został wydany pierwszy system Windows - 1.01?", "1982", "1985", "1990", "1995", "1985");
const pytanie4Informatyka = new Question ("Który z poniższych języków programowania zawiera tzw. wskaźniki?", "Java", "C++", "C#", "Ruby", "C++");
const pytanie5Informatyka = new Question ("Jak nazywa się tablet wydany przez firmę Apple?", "MacBook", "ITab", "IPad", "IPhone", "Ipad");
const pytanie6Informatyka = new Question ("Ile megabajtów ma jeden gigabajt?", "1024", "1000", "1000000", "512", "1024");
const pytanie7Informatyka = new Question ("Kto jest założycielem firmy Microsoft?", "Steve Jobs", "Steve Wozniak", "Linus Torvalds", "Bill Gates", "Bill Gates");
categories[4].push(pytanie1Informatyka, pytanie2Informatyka, pytanie3Informatyka, pytanie4Informatyka, pytanie5Informatyka, pytanie6Informatyka, pytanie7Informatyka);

/////////////////////////

const pytanie1Muzyka = new Question ("Z jakiego kraju pochodził Wolfgang Amadaues Mozart?", "Szwajcaria", "Niemcy", "Austria", "Dania", "Austria");
const pytanie2Muzyka = new Question ("Czego nie ma w popularnej piosence Dawida Podsiadło?", "Dzikich plaż", "Wakacji", "Fal", "Słońca", "Fal");
const pytanie3Muzyka = new Question ("Jak się nazywa album wydany przez Michaela Jacksona, na którym znajdziemy takie hity jak 'Smooth Criminal' czy 'Dirty Diana'?", "Bad", "Thriller", "Dangerous", "Invincible", "Bad");
const pytanie4Muzyka = new Question ("Czym wypływał w rejs Krzysztof Krawczyk w swojej piosence?", "Titaniciem", "Tratwą", "Pontonem", "Parostatkiem", "Parostatkiem");
const pytanie5Muzyka = new Question ("Który z podanych zespołów nie jest z Wielkiej Brytanii?", "The Beatles", "ZZ Top", "The Rolling Stones", "Dire Straits", "ZZ Top");
const pytanie6Muzyka = new Question ("Jaki pseudonim artystyczny ma Olga Sipowicz?", "Doda", "Ruda", "Kora", "Mandaryna", "Kora");
const pytanie7Muzyka = new Question ("Która z piosenkarek wykonuje utwór 'Poker Face'?", "Katy Perry", "Rihanna", "Beyonce", "Lady Gaga", "Lady Gaga");
categories[5].push(pytanie1Muzyka, pytanie2Muzyka, pytanie3Muzyka, pytanie4Muzyka, pytanie5Muzyka, pytanie6Muzyka, pytanie7Muzyka);

///////////////////////////

const pytanie1Sport = new Question ("Z jakiego kraju pochodzi sprinter i rekordzista świata Usain Bolt?", "Trynidad i Tobago", "USA", "Jamajka", "Etiopia", "Jamajka");
const pytanie2Sport = new Question (" Z ilu zawodników składa się drużyna w piłce siatkowej plażowej?", "2", "3", "4", "6", "2");
const pytanie3Sport = new Question ("Do ilu punktów gra się set w tenisie ziemnym?", "Do 4", "Do 10", "Do 25", "Do 45", "Do 45");
const pytanie4Sport = new Question ("Ile goli strzelił Grzegorz Lato na Mistrzostwach Świata w piłce nożnej w 1974 roku?", "0", "5", "7", "10", "7");
const pytanie5Sport = new Question ("Ile minut trwa 1 kwarta w NBA, najbardziej prestiżowej lidze koszykówki na świecie?", "20 minut", "15 minut", "12 minut", "10 minut", "12 minut");
const pytanie6Sport = new Question ("Ile metrów długości ma pełnowymiarowy basen olimpijski?", "25", "50", "75", "100", "50");
const pytanie7Sport = new Question ("Z ilu metrów wykonywany jest rzut karny w piłce ręcznej?", "5 metrów", "7 metrów", "9 metrów", "11 metrów", "7 metrów");
categories[6].push(pytanie1Sport, pytanie2Sport, pytanie3Sport, pytanie4Sport, pytanie5Sport, pytanie6Sport, pytanie7Sport);

///////////////////////////

const pytanie1Zwierzeta = new Question ("Które z tych zwierząt biega najszybciej?", "Lew", "Antylopa", "Gepard", "Struś", "Gepard");
const pytanie2Zwierzeta = new Question ("Który z tych ptaków nie odlatuje na zimę z Polski", "Bocian", "Jaskółka", "Dudek", "Sikorka", "Sikorka");
const pytanie3Zwierzeta = new Question ("Które z tych zwierząt jest gadem?", "Żaba", "Salamandra", "Wąż", "Traszka", "Wąż");
const pytanie4Zwierzeta = new Question ("Która z ryb jest drapieżnikiem?", "Karp", "Płoć", "Lin", "Lipień", "Lipień");
const pytanie5Zwierzeta = new Question ("Jak nazywa się największy ssak żyjący na lądzie?", "Orka", "Słoń Afrykański", "Płetwal Błękitny", "Krokodyl Różańcowy", "Słoń Afrykański");
const pytanie6Zwierzeta = new Question ("Któergo z podanych zwierząt raczej nie spotkasz w Polsce w naturalnym środowisku?", "Orzeł Bielik", "Żmija Zygzakowata", "Zebra", "Puchacz Zwyczajny", "Zebra");
const pytanie7Zwierzeta = new Question ("Dzieckiem jakiego dorosłego osobnika jest jagnię?", "Krowy", "Owcy", "Kury", "Świni", "Owcy");
categories[7].push(pytanie1Zwierzeta, pytanie2Zwierzeta, pytanie3Zwierzeta, pytanie4Zwierzeta, pytanie5Zwierzeta, pytanie6Zwierzeta, pytanie7Zwierzeta);




//losowanie kategorii
 function categoryDraw() {
    var number1 = Math.floor(Math.random()*categories.length); //losowanie liczby losowej, zakres od 0 do ilości elementów w tablicy categories
    var number2 = Math.floor(Math.random()*categories.length);

     while (number1 === number2) {                         //losuj tak długo, aż będą dwie różne liczby
        number2 = Math.floor(Math.random()*categories.length);
    }
    document.getElementById("category1").value = categories[number1][0];
    document.getElementById("category2").value = categories[number2][0];        // wypisz nazwy kategorii
}

//obiekt wykorzystywany do przypisania aktualnej poprawnej odpowiedzi
const Checker = {
    correctAnswer: ""

}
//losowanie pytania
function questionDraw(categoryName) {  //przekazywana jest nazwa kategorii, którą wybrano
    switch(categoryName) {    //poprzez wykorzystanie switcha wybieramy kategorię
        case "Historia":
            var questionnumber = Math.floor(Math.random()*(categories[0].length-1)) +1;     // losowanie liczby losowej jako numeru pytania, zakres to od 1 do długości tablicy (od 1 ponieważ element [0] to nazwa kategorii), indeks [0] ponieważ kategoria Historia jest jako element [0] w tablicy categories
            Checker.correctAnswer = categories[0][questionnumber].correct; //zapisanie aktualnej dobrej odpowiedzi do obiektu Checker
            document.getElementById("question").innerHTML = categories[0][questionnumber].question;
            var a = categories[0][questionnumber].answer1;
            var b = categories[0][questionnumber].answer2;
            var c = categories[0][questionnumber].answer3;
            var d = categories[0][questionnumber].answer4;   //przypisanie odpowiedzi, które są zapisane w obiekcie pytania stworzonym przy pomocy konstruktora "Question", do zmiennych
            actualQuestionAnswers = [a, b, c, d]; //zapisanie aktualnych odpowiedzi do tablicy

            document.getElementsByClassName("answers")[1];
            document.getElementsByClassName("answer")[0].innerHTML = a;
            document.getElementsByClassName("answer")[1].innerHTML = b;
            document.getElementsByClassName("answer")[2].innerHTML = c;
            document.getElementsByClassName("answer")[3].innerHTML = d;   // wypisanie odpowiedzi w przeglądarce
            categories[0].splice(questionnumber, 1);  // bardzo ważna rzecz, usunięcie wylosowanego pytania z tablicy, żeby się już w trakcie gry nie powtórzyło
        break;
        //to samo dla każdej kategorii, bardzo ważny indeks przy tablicy categories
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
break;
        case "Najstarszy":

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
break;
    
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
break;
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
break;
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
break;
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
break;
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
        break;
        
        
            document.getElementsByClassName("choose_category")[0];                            // ustawienie znikania przxycisków kategorii w celu uniknięcią wielokrotnego losowania przez gracza czyli oszustwa, jeszcze niegotowe
            document.getElementsByClassName("category_button")[0].style.opacity = "0";
            document.getElementsByClassName("category_button")[1].style.opacity = "0";
            default:
                ;

    }
}

// funkcja sprawdzająca czy spełnione zostały reguły
function check() {
    moneyOnAnswer = [];
    moneyOnAnswer.push(document.getElementById("money1").value);
    moneyOnAnswer.push(document.getElementById("money2").value);
    moneyOnAnswer.push(document.getElementById("money3").value);
    moneyOnAnswer.push(document.getElementById("money4").value);   //przypisanie każdej z kwot na każdej zapadni do tablicy
    var emptychecker = moneyOnAnswer.some(function(value) {return value == 0;} );      // wykorzystanie metody .some, żeby sprawdzić czy minimum jedna zapadnia jest bez kasy i zwrocenie wyniku do zmiennej emptychecker
    if (player.money != 0) {alert("Musisz postawić całą kasę");} // jeżeli kasa gracza nie jest równa 0, to wyświetla komunikat o błędzie

    else if (emptychecker === false) {alert("Conajmniej jedna zapadnia musi być pusta");} // jeżeli emptychecker jest równy fałsz, oznacza, że nie ma pustej zapadni, wyświetlenie błędu
     else checkCorrect(); // jeżeli wszystko okej, sprawdzamy czy odpowiedź jest prawidłowa
}
//funkcja do sprawdzania poprawności odpowiedzi
function checkCorrect() {
     var a = Number(document.getElementById("money1").value);     //zamiana wartości przy każdej odpoweidzi ze stringa na liczbę i przypisanie jej do zmiennej
     var b = Number(document.getElementById("money2").value);
     var c = Number(document.getElementById("money3").value);
     var d = Number(document.getElementById("money4").value);

     if (actualQuestionAnswers[0] === Checker.correctAnswer){   //sprawdzanie czy dana odpowiedź jest prawidłowa
        player.money = a;                                       // przypisanie kasy z zapadni (jeżeli odpowiedź prawidłowa) z powrotem do gracza
        var actualmoney = player.money;                         
        document.getElementById("money").innerHTML = actualmoney;   // wypisanie tego do góry ekranu
}           // dalej to samo, musimy sprawdzić każdą odpowiedź pod kątem poprawności
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

                // jeżeli po pytaniu zostaje 0 zł, to koniec gry
               if (player.money == 0) {    
                   location.assign("lose.html");
               }
               // jeżeli 7 pytanie, to koniec gry
               if (question.number === 7) {
                   location.assign("win.html");
               }
         nextQuestion();
}

//funkcja wywoływana gdy gracz odpowie poprawnie na pytanie i nie jest to ostatnie pytanie 
function nextQuestion() {
     question.number +=1;
     var a = question.number;    // licznik pytań
     document.getElementById("money1").value = 0;     
     document.getElementById("money2").value = 0;
     document.getElementById("money3").value = 0;
     document.getElementById("money4").value = 0;         // ustawienie 0zł do każdej zapadni
     document.getElementById("questionNumber").innerHTML = `Pytanie ${a}`;     // zmiana numeru pytania, który się wyświetla do góry
     categoryDraw();          // ponowne losowanie kategorii

}
function printWin() {
    document.getElementById("win").innerHTML = ` Brawo! Wygrałeś ${player.money} w Postaw na Milion`;
}