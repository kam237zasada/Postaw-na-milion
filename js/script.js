const player = {
    name: " ",
    money: 1000000
}
const question = {
    number:1
}

let money = player.money;
document.getElementById("money").innerHTML = `${money} zł`;

function startGame() {

var name = document.getElementById("name").value;
if (name) {
player.name = name;
document.getElementById("hello").innerHTML = `Cześć ${player.name}, czy jesteś gotowy na szaloną rozgrywkę? Masz w tej chwili ${player.money} zł na swoim koncie, jednak przed Tobą aż 7 pytań!`;
document.getElementById("start").style.opacity = "1";
}
else {
    document.getElementById("wizytowka").innerHTML = "You must write your name!";
    document.getElementById("start").style.opacity = "0";
}
}

// funkcja postaw wszystko
function addEverything(answerNumber){
                             
    if (answerNumber === 'answer1') {                 //funkcje dla odpowiedzi 1
        if (document.getElementById("money1").value != 0) {player.money += Number(document.getElementById("money1").value); document.getElementById("money1").value = 0; }   
        if (document.getElementById("money2").value != 0) {player.money += Number(document.getElementById("money2").value); document.getElementById("money2").value = 0; }   
        if (document.getElementById("money3").value != 0) {player.money += Number(document.getElementById("money3").value); document.getElementById("money3").value = 0; }   
        if (document.getElementById("money4").value != 0) {player.money += Number(document.getElementById("money4").value); document.getElementById("money4").value = 0; }   //jeżeli przy odpowiedzi jest kasa, to dodaj ją do kasy ogólnej i zarazem do odowiedzi przypisz 0 zł
    document.getElementById("money1").value = player.money; //przypisz całą kasę gracza do tej odpowiedzi (w tym przypadku 1)
    player.money = 0;                                 // jednocześnie teraz dostępna kasa gracza wynosi 0zł
    var actualmoney = player.money;                       //przypisanie tego do zmiennej 
    document.getElementById("money").innerHTML = actualmoney; 
    }  //wyświetlenie tego w boxie z kasą
        //dalej to samo dla reszty odpowiedzi
    else if (answerNumber === 'answer2') {  
        if (document.getElementById("money1").value != 0) {player.money += Number(document.getElementById("money1").value); document.getElementById("money1").value = 0; }   
        if (document.getElementById("money2").value != 0) {player.money += Number(document.getElementById("money2").value); document.getElementById("money2").value = 0; }   
        if (document.getElementById("money3").value != 0) {player.money += Number(document.getElementById("money3").value); document.getElementById("money3").value = 0; }   
        if (document.getElementById("money4").value != 0) {player.money += Number(document.getElementById("money4").value); document.getElementById("money4").value = 0; }                        
        document.getElementById("money2").value = player.money;
        player.money = 0;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
    }
            else if (answerNumber === 'answer3') {
                if (document.getElementById("money1").value != 0) {player.money += Number(document.getElementById("money1").value); document.getElementById("money1").value = 0; }   
                if (document.getElementById("money2").value != 0) {player.money += Number(document.getElementById("money2").value); document.getElementById("money2").value = 0; }   
                if (document.getElementById("money3").value != 0) {player.money += Number(document.getElementById("money3").value); document.getElementById("money3").value = 0; }   
                if (document.getElementById("money4").value != 0) {player.money += Number(document.getElementById("money4").value); document.getElementById("money4").value = 0; }   
            document.getElementById("money3").value = player.money;
            player.money = 0;
            var actualmoney = player.money;
            document.getElementById("money").innerHTML = actualmoney;
            }
                else if (answerNumber === 'answer4') {
                    if (document.getElementById("money1").value != 0) {player.money += Number(document.getElementById("money1").value); document.getElementById("money1").value = 0; }   
                    if (document.getElementById("money2").value != 0) {player.money += Number(document.getElementById("money2").value); document.getElementById("money2").value = 0; }   
                    if (document.getElementById("money3").value != 0) {player.money += Number(document.getElementById("money3").value); document.getElementById("money3").value = 0; }   
                    if (document.getElementById("money4").value != 0) {player.money += Number(document.getElementById("money4").value); document.getElementById("money4").value = 0; }   
                            document.getElementById("money4").value = player.money;
                            player.money = 0;
                            var actualmoney = player.money;
                            document.getElementById("money").innerHTML = actualmoney;
                            }
                }

// funkcja dodaj 50 000
function add50k(answerNumber){

    if (player.money > 0) {                                 // jeśli gracz ma więcej niż 0 zł, to dodaj 50 000
    if (answerNumber === "answer1") {                     

        var kasa = Number(document.getElementById("money1").value);    //zamiana stringa przechowującego kasę gracza na liczbę i przypisanie tego do zmiennej
        var obecnakasa = kasa + 50000;                                 //zwiększenie wartości przy tej odpowiedzi o 50000
        document.getElementById("money1").value = obecnakasa;
        player.money -= 50000;                                       //jednoczesne zabranie 50 000 z kasy gracza
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;      // i przypisanie tego do boxa wyświetlającego aktualny stan konta
    }
    else if (answerNumber === "answer2") {                             // dalej to samo dla pozostałych odpowiedzi

        var kasa = Number(document.getElementById("money2").value);
        var obecnakasa = kasa + 50000;
        document.getElementById("money2").value = obecnakasa;
        player.money -= 50000;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
    }
    else if (answerNumber === "answer3") {

        var kasa = Number(document.getElementById("money3").value);
        var obecnakasa = kasa + 50000;
        document.getElementById("money3").value = obecnakasa;
        player.money -= 50000;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
    }
    else if (answerNumber === "answer4") {

        var kasa = Number(document.getElementById("money4").value);
        var obecnakasa = kasa + 50000;
        document.getElementById("money4").value = obecnakasa;
        player.money -= 50000;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
    }
}
}

// funkcja zabierz 50 000
function take50k(answerNumber){

                                    
    if (answerNumber === "answer1") {                     

        var kasa = Number(document.getElementById("money1").value);    //zamiana stringa przechowującego kasę gracza na liczbę i przypisanie tego do zmiennej
        if (kasa > 0) {                                                //jeżeli kasa przy odpowiedzi jest większa od 0 zł
        var obecnakasa = kasa - 50000;                                 //zmniejszenie wartości przy tej odpowiedzi o 50000
        document.getElementById("money1").value = obecnakasa;
        player.money += 50000;                                       //jednoczesne doadnie 50 000 z kasy gracza
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney; 
        }     // i przypisanie tego do boxa wyświetlającego aktualny stan konta
    }
    else if (answerNumber === "answer2") {                             // dalej to samo dla pozostałych odpowiedzi

        var kasa = Number(document.getElementById("money2").value);
        if (kasa > 0) {
        var obecnakasa = kasa - 50000;
        document.getElementById("money2").value = obecnakasa;
        player.money += 50000;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
        }
    }
    else if (answerNumber === "answer3") {

        var kasa = Number(document.getElementById("money3").value);
        if (kasa > 0) {
        var obecnakasa = kasa - 50000;
        document.getElementById("money3").value = obecnakasa;
        player.money += 50000;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
        }
    }
    else if (answerNumber === "answer4") {

        var kasa = Number(document.getElementById("money4").value);
        if (kasa > 0) {
        var obecnakasa = kasa - 50000;
        document.getElementById("money4").value = obecnakasa;
        player.money += 50000;
        var actualmoney = player.money;
        document.getElementById("money").innerHTML = actualmoney;
        }
    }
}




