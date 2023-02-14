let str = "axedzpq";
function sort (str,value){
    let arr = str.split("");
    if (value == 'false'){
        console.log(arr.sort().join(""));
    }
    else{
        console.log(arr.sort().reverse().join(""));
    }
}
sort (str, true);