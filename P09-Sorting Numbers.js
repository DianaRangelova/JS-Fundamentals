function sortNumbers (array) {
    // array = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]

      let sortedArray = array.sort((e1, e2) => {
        return e1 - e2;
        // 1. e1 - e2 < 0 -> e1 < e2
        // 2. e1 - e2 = 0 -> e1 = e2
        // 1. e1 - e2 > 0 -> e1 > e2
    });
    // след сортировката = [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
    // сортиран масив в нарастващ ред (ascending order)

    let resultedArray = [];
    const length = array.length; // дължина на резултатния
    // resultedArray = [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
    for(let index = 0; index <= length - 1; index++) {
        if (index % 2 == 0) {
            resultedArray.push(sortedArray.shift());
        } else {
            resultedArray.push(sortedArray.pop())
            // pop взима последния елемент и го премахва
        }
    }

    return resultedArray;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);