//1
function extractValue(arr, key) {
    const values = arr.reduce(function(accum, obj){
        accum.push(obj[key]);
        return accum;
    }, [])
    return values;
}

//2
function vowelCount(str) {
    const letters = str.toLowerCase().split("");
    const vowels = "aeiou";
    const count = letters.reduce(function(accum, letter){
        if(vowels.includes(letter)){
            if(accum[letter]){
                accum[letter]++;
            } else{
                accum[letter] = 1;
            }
        }
        return accum;
    }, {})
    return count;
}

//3
function addKeyAndValue(arr, key, value) {
    const updatedObjects = arr.reduce(function(accum, obj, i){
        accum[i][key] = value;
        return accum;
    }, arr)
    return updatedObjects;
}

//4
function partition(arr, callback) {
    const partitionedArray = arr.reduce(function(accum, value){
        if(callback(value)){
            accum[0].push(value);
        } else {
            accum[1].push(value);
        }
        return accum;
    }, [[],[]])
    return partitionedArray;
}
