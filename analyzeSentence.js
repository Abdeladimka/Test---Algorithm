function analyzeSentence(sentence) {
    let length = 0;
    let words = 1; 
    let vowels = 0;

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];

        if (ch === '.') {
            break; 
        }

        length++;

        
        if ('aeiouAEIOU'.includes(ch)) {
            vowels++;
        }

        
        if (ch === ' ') {
            words++;
        }
    }

    console.log("Longueur =", length);
    console.log("Mots =", words);
    console.log("Voyelles =", vowels);
}


const sentence = "rajouter des couleurs à votre landing page.";
analyzeSentence(sentence);
