var playerResult1=0 ;
var playerResult2=0 ;


function generate1() {                   // Randomly get card and type of card(Spades, Diamonds, Hearts & Clovers)
  let min=2;
  let max=14 ;
  let typeCard="" ;
  let colorCard="" ;

      let colorCardNumber = Math.floor(Math.random() * 2) + 1;
      document.querySelector("#cardnumber1").style.color = colorCardNumber ;
      switch(colorCardNumber) {
        case 1:
           document.querySelector("#cardnumber1").style.color = "#000000"
           break;
        case 2:
           document.querySelector("#cardnumber1").style.color = "#ff0000"
           break;
      }

      let typeCardNumber = Math.floor(Math.random() * 4) + 1;
      switch(typeCardNumber) {
        case 1:
           typeCard="&spades;"
           break;
        case 2:
            typeCard="&diams;"
           break;
         case 3:
            typeCard="&hearts;"
            break;
        case 4:
           typeCard="&clubs;"
           break;
     }

      let card = Math.floor(Math.random() * (max - min + 1) + min);
      let cardString = card;
      switch(card) {
        case 11:
           cardString="J"
            break;
        case 12:
           cardString="Q"
            break;
         case 13:
            cardString="K"
            break;
         case 14:
            cardString="A"
            break;
       // default:
    }

      document.querySelector("#cardnumber1").innerHTML = `${cardString}<p> ${typeCard}</p>`;
      document.querySelector("#p1go").disabled = true;
      playerResult1=card ;

}

function generate2() {                   // Randomly get card and type of card(Spades, Diamonds, Hearts & Clovers)
  let min=2;
  let max=14 ;
  let typeCard2="" ;
  let colorCard2="" ;

      let colorCardNumber2 = Math.floor(Math.random() * 2) + 1;
      document.querySelector("#cardnumber2").style.color = colorCardNumber2 ;
      switch(colorCardNumber2) {
        case 1:
           document.querySelector("#cardnumber2").style.color = "#000000"
           break;
        case 2:
             document.querySelector("#cardnumber2").style.color = "#ff0000"
           break;
      }

      let typeCardNumber2 = Math.floor(Math.random() * 4) + 1;
      switch(typeCardNumber2) {
        case 1:
           typeCard2="&spades;"
           break;
        case 2:
            typeCard2="&diams;"
           break;
         case 3:
            typeCard2="&hearts;"
            break;
        case 4:
           typeCard2="&clubs;"
           break;
     }

      let card2 = Math.floor(Math.random() * (max - min + 1) + min);
      let card2String = card2 ;

      switch(card2) {
        case 11:
           card2String="J"
            break;
        case 12:
           card2String="Q"
            break;
         case 13:
            card2String="K"
            break;
         case 14:
            card2String="A"
            break;
       // default:
    }

      document.querySelector("#cardnumber2").innerHTML = `${card2}<p>${typeCard2}</p>`;
      document.querySelector("#p2go").disabled = true;
      playerResult2=card2 ;
      console.log(card2)
check();
}


//console.log(playerResult1, playerResult2)

var winner=0;

function check() {

//console.log('checked')


if (playerResult1 > playerResult2) {
    winner=playerResult1 ;
    document.querySelector("#p1go").disabled = false ;
    document.querySelector("#p2go").disabled = false ;
    document.querySelector("#displaywinner").innerHTML = `${winner} <p> is the winner</p>` ;
    console.log(winner);
    winner= 0;


 } else {
        winner=playerResult2 ;
        document.querySelector("#p1go").disabled = false ;
        document.querySelector("#p2go").disabled = false ;
        document.querySelector("#displaywinner").innerHTML = `${winner} <p> is the winner</p>` ;
   console.log("else" + winner);

        winner= 0;


}

}
