function rotateArray (array, countRotations) {
    // countRotations - брой колко пъти се извърършва ротация 
    // (първият елемент става последен)
    for(let count = 1; count <= countRotations; count++) {
        // повтаряме: първият елемент става последен
        let firstElement = array.shift();
        array.push(firstElement);
        // shift взима първия елемент и го маха от масива
        // push добавя първия елемант на края на масива
    }
    console.log(array.join(" "));
    // join взима всеки един елемент от масива, превръща го в текст 
    // и слага интервал след всеки един от елементите
    // получаваме елементите на масива, разделени с интервал
}

rotateArray ([51, 47, 32, 61, 21], 2);