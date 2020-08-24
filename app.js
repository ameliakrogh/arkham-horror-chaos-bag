//Get images for individual tokens
const positiveOne = document.getElementById('+1');
const zero = document.getElementById('0');
const negativeOne = document.getElementById('-1');
const negativeTwo = document.getElementById('-2');
const negativeThree = document.getElementById('-3');
const negativeFour = document.getElementById('-4');
const negativeFive = document.getElementById('-5');
const negativeSix = document.getElementById('-6');
const negativeSeven = document.getElementById('-7');
const negativeEight = document.getElementById('-8');
const brokenTablet = document.getElementById('broken-tablet');
const cthulu = document.getElementById('cthulu');
const hood= document.getElementById('hood');
const skull = document.getElementById('skull');
const star = document.getElementById('star');
const tentacles = document.getElementById('tentacles');

//Variables for each chaos difficulty. Includes array of available chaos tokens that will be the 'chaos bag'
let easyTokenBag = [positiveOne, positiveOne, zero, zero, zero, negativeOne, negativeOne, negativeOne, negativeTwo, negativeTwo, skull, skull, hood, brokenTablet, tentacles, star]
let standardTokenBag = [positiveOne, zero, zero, negativeOne, negativeOne, negativeOne, negativeTwo, negativeTwo, negativeThree, negativeFour, skull, skull, hood, brokenTablet, tentacles, star]
let hardTokenBag = [zero, zero, zero, negativeOne, negativeOne, negativeTwo, negativeTwo, negativeThree, negativeThree, negativeFour, negativeFive, skull, skull, hood, brokenTablet, tentacles, star]
let expertTokenBag = [zero, negativeOne, negativeOne, negativeTwo, negativeTwo, negativeThree, negativeThree, negativeFour, negativeFour, negativeFive, negativeSix, negativeEight, skull, skull, hood, brokenTablet, tentacles, star]
let tokens = [];

//Select main container to add new elements to
const divContainer = document.querySelector('.container');
const displayTokenDiv = document.createElement('div');
const displayLastToken = document.createElement('div');

//Default the 'last drawn token' button to be hidden
document.getElementById("last-drawn-token-button").style.display = "none";

//Get modal element
const chaosBagModal = document.querySelector('.modal');
//Get modal content element
const chaosBagContent = document.querySelector('.modal-body');
//Get close button
const closeBtn = document.querySelector('.close-button');

//Add the relevant array of tokens to the modal once they select a difficulty
const difficultySelector = document.getElementById("difficulty-select");
difficultySelector.addEventListener('input', function displayTokens(event){
    //Use the Switch statement to evaluate the difficulty value selected
    switch (event.target.value) {
            case "Easy":
                chaosBagContent.textContent = easyTokenBag;
                break;
            case "Standard":
                chaosBagContent.textContent = standardTokenBag;
                break;
            case "Hard":
                chaosBagContent.textContent = hardTokenBag;
                break;
            case "Expert":
                chaosBagContent.textContent = expertTokenBag;
        }
    });

//Function to randomly select a token from the bag
function randomToken(tokenBag) {
    return tokenBag[Math.floor(Math.random() * tokenBag.length)];
}

//Depending on difficulty selected, randomly select a token when 'draw chaos token' button is clicked
const drawTokenButton = document.getElementById("draw-token-button");
drawTokenButton.addEventListener('click', function displayAToken(){
    difficultySelector.after(displayTokenDiv);
    switch (difficultySelector.value) {
        case "Easy":
            currentToken = randomToken(easyTokenBag);
            tokens.push(currentToken);
            break;
        case "Standard":
            currentToken = randomToken(standardTokenBag);
            tokens.push(currentToken);
            break;
        case "Hard":
            currentToken = randomToken(hardTokenBag);
            tokens.push(currentToken);
            break;
        case "Expert":
            currentToken = randomToken(expertTokenBag);
            tokens.push(currentToken);
    }
    displayTokenDiv.appendChild(currentToken);
});

//Function to display the 'Last Drawn Token' button now that a token has been drawn
document.getElementById("draw-token-button").onclick = function showLastTokenButton () {
    document.getElementById("last-drawn-token-button").style.display = 'block';
}

//Button used to display the last drawn token to the user if they keep drawing tokens
const lastDrawnTokenButton = document.getElementById("last-drawn-token-button");
lastDrawnTokenButton.addEventListener('click', function displayLastDrawnToken(){
    lastDrawnTokenButton.after(displayLastToken);
    let previous = tokens[tokens.length - 2];
    displayLastToken.textContent = previous;
});

//Function that makes the bag icon clickable
document.getElementById("bagIcon").onclick = function openModal () {
    chaosBagModal.style.display = 'block';
};

//Listen for click on modal close button
closeBtn.addEventListener('click', closeModal);

//Function to close modal if close button is clicked
function closeModal () {
    chaosBagModal.style.display = 'none';
};

//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to close modal if window is clicked
function outsideClick () {
    if (event.target == chaosBagModal){
        chaosBagModal.style.display = 'none';
    }
}

//TODO: display to the user, the randomly selected token (instead of printing text)
