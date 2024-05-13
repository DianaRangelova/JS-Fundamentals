function sortNames(namesArray) {
    // namesArray = ["John", "Bob", "Christina", "Ema"]
    // sortedArray = ["Bob", "Christina", "Ema", "John"]
    // array.sort подрежда елементите в масива от най-малко към най-голямо
    // или по азбучен ред, ако са стрингове
    const sortedArray = namesArray.sort((e1, e2) => {
        return e1.localeCompare(e2);
    }); // тук държим сортираните по азбучен ред имена

    for (let index = 0; index < sortedArray.length; index++) {
        console.log(`${index + 1}.${sortedArray[index]}`);
    }
}

sortNames (["John", "Bob", "Christina", "Ema"]);

// localCompare -> сравняване на 2 текста
// резултат от изпълнение на lockalCompare:
// 1 -> първият текст се намира след втория
// 0 -> двата текста са напълно еднакви
// -1 -> първият текст се намира преди втория
// ако sort получи (1), разменя местата на елементите
// ако sort получи (0), не променя местата на елементите, защото елементите са еднакви
// ако sort получи (-1), не променя местата на елементите, защото елементите са подредени в правилната последователност
