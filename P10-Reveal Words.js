function revealWords (words, sentence) {
    // words - думи за заместване, разделени със запетая и интервал
    const allWords = words.split(', ');
    // allwords - думите за заместване под формата на масив

    // for / of обхожда колекции
    for (const word of allWords) {
        let textForReplace = '*'.repeat(word.length);
        sentence = sentence.replace(textForReplace, word)
        // repeat взима текста и го повтаря толкова пъти, колкото му кажем()
    }

    console.log(sentence);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);