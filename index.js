const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");

const button = document.getElementById("search-btn")

button.addEventListener('click', ()=>{
    var inputWord = document.getElementById("inp-word").value;  
    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
        <h3>${inputWord}</h3>
        <button onclick="playSound()" ><i class="fa-solid fa-volume-high"></i></button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p> ${data[0].phonetic}</p>
    </div>
    <div class="word-meaning">
        <p>
            ${data[0].meanings[0].definitions[0].definition}
        </p>
    </div>
    <div class="word-example">
        <p>
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        
    
    });
   
});
function playSound(){
    sound.play();
}