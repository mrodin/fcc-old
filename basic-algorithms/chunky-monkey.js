// https://www.freecodecamp.com/challenges/chunky-monkey

function chunkArrayInGroups(arr, size) {
    var result = [];

    for (i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);