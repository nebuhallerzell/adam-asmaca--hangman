const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const skipButton = document.getElementById("skipButton");
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

skipButton.addEventListener("click", () => {
    getRandomWord();
});

let usedWords = [];

const getRandomWord = () => {
    if (usedWords.length === wordList.length) {
        usedWords = [];
    }

    let randomWordIndex;
    let wordAlreadyUsed;

    do {
        randomWordIndex = Math.floor(Math.random() * wordList.length);
        wordAlreadyUsed = usedWords.includes(randomWordIndex);
    } while (wordAlreadyUsed);

    const { word, hint } = wordList[randomWordIndex];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
    usedWords.push(randomWordIndex);
}

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomImage = (isVictory) => {
    const victoryImages = ['victory.gif', 'victory1.gif', 'victory2.gif', 'victory3.gif']; 
    const lostImages = ['lost.gif', 'lost1.gif', 'lost2.gif', 'lost3.gif', 'lost4.gif', 'lost5.gif']; 
    const images = isVictory ? victoryImages : lostImages;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const getRandomHeading = (isVictory) => {
    const victoryHeadings = ['BRAVO!', 'Yeni Einstein!', 'Böyle Devam!', 'Mükemmelsin']; 
    const lostHeadings = ['KAYBETTİN!!', 'Pes Etme!', 'Tekrar Dene!', 'Bir Dahaki Sefere', 'Nasıl Bilemedin????']; 
    const headings = isVictory ? victoryHeadings : lostHeadings;
    const randomIndex = Math.floor(Math.random() * headings.length);
    return headings[randomIndex];
}

const gameOver = (isVictory) => {
    const modalText = isVictory ? `Kelimeyi Buldun:` : 'Doğru Kelime:';
    const randomImage = getRandomImage(isVictory);
    const randomHeading = getRandomHeading(isVictory);
    gameModal.querySelector("img").src = `images/${randomImage}`;
    gameModal.querySelector("h4").innerText = randomHeading;
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; 
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

const turkishCharacters = ['\u015F', '\u00FC', '\u00F6', '\u00E7', '\u0131', '\u011F'];
for (let i = 0; i < turkishCharacters.length; i++) {
    const button = document.createElement("button");
    button.innerText = turkishCharacters[i];
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, turkishCharacters[i]));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
