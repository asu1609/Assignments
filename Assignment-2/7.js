let str = "abbcddeikl";
let ordered;
function sort (str,value){
    let arr = str.split("");
    if (value == 'false'){
        ordered = arr.sort().join("");
    }
    else{
        ordered = arr.sort().reverse().join("");
    }
    if(ordered == str){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
sort (str, 'false');