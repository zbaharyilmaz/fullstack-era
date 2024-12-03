const countVowels = document.querySelector(".btn");

countVowels.addEventListener("click", ()=> {
    const textArea = document.querySelector("#text").value;
    const vowels = ["a", "e", "i", "ö", "o", "u", "ü", "ı"];
    let vowelCount = 0;

    const lowerText = textArea.toLowerCase();
    for (let i = 0; i < lowerText.length; i++) {
        if(vowels.includes(lowerText[i])) {
            vowelCount++;
            document.querySelector(".number").textContent = vowelCount;
            document.querySelector(".redText").textContent = `${textArea}`
        }
    }
});