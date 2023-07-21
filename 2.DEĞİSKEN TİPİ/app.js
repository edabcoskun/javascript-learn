// var/let/const değişkenismi = değişkenin değeri




// function selamVer(){
//     var selam = "herkese selam"; //function scope
//     console.log(selam)
//     if(true){
//         var a = 2;
//     }
//     console.log(a)
// }
// selamVer();

//* var a=3;
//* var a=4;
//* console.log(a);

// if(true){
//     let b = 2; // let' teaynı anda iki tane değer veremezsin b ye .
//     let b = 3;
//     console.log(b);
// }

//? let b = 7;
//?b = 8;//olur
//?console.log(b);

//?const c = 1;
//?c = 4; // olmaz ,değişemezsin 
//?console.log(c);

const user = {  // const değeri değişmez.let olursa değişir
    password : "123" ,
    name : "buse"
}
user = {} // olmaz
user.name = "buse eda "; // olur
console.log(user);



