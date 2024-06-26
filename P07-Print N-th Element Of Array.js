function printElement (array, step) {
    // array ['5', '20', '31', '4', '20'], 
    // step 2
    // начало: позиция 0 (първа позиция)
    // край: дължината на масива - 1 (последната позиция)
    // повтарям: отпечатвам елемента на дадената позиция

    let resultArray = []; // масив за елементите, които ще отпечатваме

    for (let index = 0; index <= array.length - 1; index += step) {
    // array.length показва дължината на масива и последния индекс
    resultArray.push(array[index]);
    }
    return resultArray;
}
// В JavaScript свойството дължина(length) на масива показва броя на елементите в масива.
// Това е вградено свойство на масивите и се актуализира автоматично,
// когато елементи се добавят или премахват от масива.
