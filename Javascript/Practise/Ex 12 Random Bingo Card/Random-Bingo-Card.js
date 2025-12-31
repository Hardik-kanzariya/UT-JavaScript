console.log("12-random-bingo-card!");

window.onload = createBingoCard;

function createBingoCard(){
    // console.log("createBingoCard");

    for (var i = 1 ; i <= 24; i++) {
        var randomNumber = Math.floor(Math.random() * 75);
        console.log(randomNumber);
        document.getElementById("Square" + i).innerText = randomNumber;
    }
}