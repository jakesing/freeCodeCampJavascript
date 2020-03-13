function reverseString(str){
    let result = ''
    //start at the end and add each character to the result
    for (let i = str.length - 1; i >= 0 ; i --){
        result += str[i]
    }
    return result
}

console.log(reverseString('jake'));