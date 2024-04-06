var marks = 70;

if (marks >= 75){
    console.log("A")
}else if (marks >= 65){
    console.log("B")
}else if (marks >= 55 ){
    console.log("C")
}else if (marks >= 35){
    console.log("S")
}else {
    console.log("Fail")
}

var x = (marks >= 75) ? "A" : (marks>=65) ? "B" : (marks >= 55) ? "C" : (marks >=35) ? "S" :"F";
console.log(x)


/*for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}*/

var amo = 0 ;
while (true){
    if (amo % 2 == 0 ){
        console.log(amo)
    }
    if (amo == 100){
        break;
    }
    amo++;
}