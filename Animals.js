let trivia = document.getElementById("trivia");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

const image = document.createElement('img');

image.setAttribute('src', 'panda.png');
image.setAttribute('alt', 'Giant Panda Sleeping in Bamboo');
image.setAttribute('width', 130);
image.setAttribute('height', 100);
const panda_image = document.getElementById("panda_image");
panda_image.appendChild(image);

const url = `https://opentdb.com/api.php?amount=10&category=27&type=boolean`;

const getTrivia = async () => {
  try {

    const response = await fetch(url);
    const jsonData = await response.json();
    
    const animalQuestion = document.createElement('article');
    animalQuestion.innerHTML = jsonData.results[0].question; 

    button.addEventListener(
      'click', () => {
        button.innerHTML = `<button onclick="location.reload()">${jsonData.results[0].correct_answer}</button>`;
      });
      
    trivia.appendChild(animalQuestion)

} catch (error) {
  console.log('Error:', error);
}
};

getTrivia()

