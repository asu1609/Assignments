let str = "cat";
let n=2;
let vowel = ['a','e','i','o','u'];
function check(str,n){
    if(vowel.includes(str[n])){
        return "vowel";
    }
    else{
        return "consonant";
    }
}
console.log(check(str,n-1));