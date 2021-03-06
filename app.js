//Variables for each chaos difficulty. Includes array of available chaos tokens that will be the 'chaos bag'
let easyTokenBag = ['+1', '+1', '0', '0', '0', '-1', '-1', '-1', '-2', '-2', 'skull', 'skull', 'hood', 'broken-tablet', 'tentacles', 'star']
let standardTokenBag = ['+1', '0', '0', '-1', '-1', '-1', '-2', '-2', '-3', '-4', 'skull', 'skull', 'hood', 'broken-tablet', 'tentacles', 'star']
let hardTokenBag = ['0', '0', '0', '-1', '-1', '-2', '-2', '-3', '-3', '-4', '-5', 'skull', 'skull', 'hood', 'broken-tablet', 'tentacles', 'star']
let expertTokenBag = ['0', '-1', '-1', '-2', '-2', '-3', '-3', '-4', '-4', '-5', '-6', '-8', 'skull', 'skull', 'hood', 'broken-tablet', 'tentacles', 'star']
let pastRolls = [];

//Select parent div to add new elements to
const displayTokenDiv = document.createElement('div');
const displayLastToken = document.createElement('div');

//Default the 'previous token' button and icon to be hidden
document.querySelector('.showPreviousToken').style.display = "none";
document.querySelector('.previousTokenModal').style.display = "none";

//Get chaos bag modal element
const chaosBagModal = document.querySelector('.bagModal');
//Get chaos bag modal content element
const chaosBagContent = document.querySelector('.bag-modal-body');
//Get close button
const closeBtn = document.querySelector('.close-button');
//Get previous modal element
const previousModal = document.querySelector('.previousTokenModal');
//Get previous modal content element
const previousModalContent = document.querySelector('.previous-modal-body')

//Add the relevant array of tokens to the modal once they select a difficulty
const difficultySelector = document.getElementById("difficulty-select");
difficultySelector.addEventListener('input', function displayTokens(event){
    //Use the Switch statement to evaluate the difficulty value selected
    switch (event.target.value) {
            case "Easy":
                chaosBagContent.innerHTML = "";
                easyTokenBag.forEach (function(token) {
                    let tokenImage = document.createElement('img');
                    tokenImage.src = "Chaos_Tokens/" + token + ".png";
                    chaosBagContent.appendChild(tokenImage);
                })
                break;
            case "Standard":
                chaosBagContent.innerHTML = "";
                standardTokenBag.forEach (function(token) {
                    let tokenImage = document.createElement('img');
                    tokenImage.src = "Chaos_Tokens/" + token + ".png";
                    chaosBagContent.appendChild(tokenImage);
                })
                break;
            case "Hard":
                chaosBagContent.innerHTML = "";
                hardTokenBag.forEach (function(token) {
                    let tokenImage = document.createElement('img');
                    tokenImage.src = "Chaos_Tokens/" + token + ".png";
                    chaosBagContent.appendChild(tokenImage);
                })
                break;
            case "Expert":
                chaosBagContent.innerHTML = "";
                expertTokenBag.forEach (function(token) {
                    let tokenImage = document.createElement('img');
                    tokenImage.src = "Chaos_Tokens/" + token + ".png";
                    chaosBagContent.appendChild(tokenImage);
                })
        }
    });

//Function to randomly select a token from the bag
function randomToken(tokenBag) {
    return tokenBag[Math.floor(Math.random() * tokenBag.length)];
}

//Depending on difficulty selected, randomly select a token when 'draw chaos token' button is clicked
const drawTokenButton = document.getElementById("draw-token-button");
drawTokenButton.addEventListener('click', function displayAToken(){
    drawTokenButton.before(displayTokenDiv);
    displayTokenDiv.style.height = '150px';
    let currentToken = "";
    switch (difficultySelector.value) {
        case "Easy":
            currentToken = randomToken(easyTokenBag);
            pastRolls.push(currentToken);
            break;
        case "Standard":
            currentToken = randomToken(standardTokenBag);
            pastRolls.push(currentToken);
            break;
        case "Hard":
            currentToken = randomToken(hardTokenBag);
            pastRolls.push(currentToken);
            break;
        case "Expert":
            currentToken = randomToken(expertTokenBag);
            pastRolls.push(currentToken);
    }
    displayTokenDiv.innerHTML = "";

    window.setTimeout (function(){
        let tokenImage = document.createElement('img');
        tokenImage.src = "Chaos_Tokens/" + currentToken + ".png";
        displayTokenDiv.appendChild(tokenImage);
    },500);

    displayTokenDiv.style.padding = '25px';
});

//Function to display the 'Last Drawn Token' button now that a token has been drawn
document.getElementById("draw-token-button").onclick = function showLastTokenButton () {
    document.querySelector('.showPreviousToken').style.display = 'flex';
}

//Button used to display the last drawn token to the user if they keep drawing tokens
const previousTokenButton = document.getElementById("previous-token-button");
previousTokenButton.addEventListener('click', function displayLastDrawnToken(){
    previousModalContent.innerHTML = "";
    let previous = pastRolls[pastRolls.length - 2];
    let tokenImage = document.createElement('img');
    tokenImage.src = "Chaos_Tokens/" + previous + ".png";
    previousModalContent.appendChild(tokenImage);
    previousModal.style.display = 'flex';
});

//Function that makes the bag icon clickable and displays modal
document.getElementById("bagIcon").onclick = function openModal () {
    chaosBagModal.style.display = 'block';
};

//Function that closes the bag modal if the close button is clicked
document.getElementById('bag-close-button').onclick = function closeBagModal () {
    chaosBagModal.style.display = 'none';
};

//Function that closes the previous token modal if the close button is clicked
document.getElementById('previous-close-button').onclick = function closePreviousTokenModal () {
    previousModal.style.display = 'none';
};

//Function that closes the bag modal if user clicks outside the content box
window.onclick = function outsideClick () {
    if (event.target == chaosBagModal){
        chaosBagModal.style.display = 'none';
    }
}

//Function that closes the previous token modal if user clicks outside the content box
window.onclick = function outsideClick () {
    if (event.target == previousModal){
        previousModal.style.display = 'none';
        console.log('test')
    }
}

