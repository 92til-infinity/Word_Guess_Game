var words = [
    "Ultimate",
    "Playstation",
    "Original",
    "Spider-Gwen",
    "Iron-Spider",
    "Noir-Spider",
    "Spider-Ham",
];
//Empty variables to store values later
var randomWord = "";
var Letters = []
var blanks = 0;
var blankSpace = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 7;

function beginGame() {
    //random word generator
    randomWord = words[Math.floor(Math.random() * words.length)];
    Letters = randomWord.split("");
    blanks = Letters.length;

    //puts the empty spacing for the word from the random array and shows it to html
    for (var i = 0; i < blanks; i++) {
        blankSpace.push("_");
    }

    //showing the "_" in HTML. innerHTML sets/returns the elements HTML
    document.getElementById("currentword").innerHTML = "  " + blankSpace.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(Letters)
    console.log(blanks)
    console.log(blankSpace)
}
// i didnt do audio cause this process confused the hell out of me, so i wanted to get it working first
// below are the image clues
//----------------------------------------------------

function spiderImage() {
    //Ultimate Spider Costume
    //---------------------------
    if (randomWord === words[0]) {
        document.getElementById("image").src = "./assets/images/";
    }
    //Playstation Spider Costume
    //---------------------------
    else if (randomWord === words[1]) {
        document.getElementById("image").src = "./assets/images/";
    }
    //Original Spider Costume
    //---------------------------
    else if (randomWord === words[2]) {
        document.getElementById("image").src = "./assets/images/";
    }
    //Spider-Gwen Spider Costume
    //---------------------------
    else if (randomWord === words[3]) {
        document.getElementById("image").src = "./assets/images/";
    }
    //Iron-Spider Spider Costume
    //---------------------------
    else if (randomWord === words[4]) {
        document.getElementById("image").src = "./assets/images/";
    }
    //Noir-Spider Spider Costume
    //---------------------------
    else if (randomWord === words[5]) {
        document.getElementById("image").src = "./assets/images/";
    }
    //Spider-Ham Spider Costume
    //---------------------------
    else if (randomWord === words[6]) {
        document.getElementById("image").src = "./assets/images/";
    }
};



//----------------------------------------------------
function reset() {
    guessesRemaining = 9;
    wrongGuess = []; //holds the letters when you guess wrong
    blankSpace = [];
    Game()
}

//CHECK LETTERS/COMPARE to see if letter selected matches random word

function checkEL(letter) {
    var letterEL = false;
    //if the generated randomword is equal to the letter entered.then variable is true. more of an explanation to myself than a comment
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterEL = true;
        }
    }
    //if letterEL (false)
    if (letterEL) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blankSpace[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blankSpace);
}

// gameWin FUNCTION. determines win or loss

//if game won
function gameWin() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //alert trigger when the WIN happens
    if (Letters.toString() == blankSpace.toString()) {
        wins++;
        reset();
        document.getElementById("wins").innerHTML = " " + wins;
        alert("YOU WON");

        //alert trigger when the LOSS happens
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        alert("YOU LOSE")
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blankSpace.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


// EXECUTE GAME 


Game();

//check for keyup, and convert to lowercase then store in guesses && check to see if guess entered matches value of random word
document.onkeydown = function (event) {
    var guesses = event.key.toLowerCase();
    checkEL(guesses);
    gameWin();
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("guessedLetters").innerHTML = "  " + wrongGuess.join(" ");
}