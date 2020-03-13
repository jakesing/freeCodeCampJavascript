function findLongestWordLength(str) {
    let words = str.split(" ");
    let runningMax = 0;
    let result = ''; 

    for (let i = 0; i < words.length; i++){
       
        if (words[i].length > runningMax){
            runningMax = words[i].length;
            result = words[i]; 
        }
    }
    return result;
  
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
