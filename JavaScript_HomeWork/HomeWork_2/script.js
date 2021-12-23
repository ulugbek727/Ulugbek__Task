// Coding Challenge #3 Exercise_1
// const delfinlar_1tur = 96;
// const delfinlar_2tur = 108; 
// const delfinlar_3tur = 89;
// const koalalar_1tur = 88;
// const koalalar_2tur = 91;
// const koalalar_3tur = 110;
// const totalDelfinlar = (delfinlar_1tur + delfinlar_2tur + delfinlar_3tur)/3;
// const totalKoalalar = (koalalar_1tur + koalalar_2tur + koalalar_3tur)/3;
// console.log(totalDelfinlar);
// console.log(totalKoalalar);

// if (totalDelfinlar > totalKoalalar){
//     console.log(`Delfinlar komandasi yuti🏆`)
// }else if (totalDelfinlar < totalKoalalar){
//     console.log(`Koalalar komandasi yuti🏆`)
// }else{
//     console.log(`Durrang 😑`)
// }

// Coding Challenge #3 Exercise_2

// const delfinlar_1tur = 97;
// const delfinlar_2tur = 112; 
// const delfinlar_3tur = 101;
// const koalalar_1tur = 109;
// const koalalar_2tur = 95;
// const koalalar_3tur = 123;
// const totalD = (delfinlar_1tur + delfinlar_2tur + delfinlar_3tur);
// console.log(totalD);
// const totalK = (koalalar_1tur + koalalar_2tur + koalalar_3tur);
// console.log(totalK);

// const victory = totalD > 100 && totalD > totalK
//     ? `Delfinlar ${totalD} bal bilan Koalalarni yutdi 🏆`
//     : totalK > 100 && totalK > totalD
//     ? `Koalalarni ${totalK} bal bilan Delfinal yutdi 🏆`
//     : totalK === totalD
//     ? "Durrang 😑"
//     : "Hechkim yutmadi 🙄";
// console.log(victory);

// Coding Challenge #3 Exercise_3

const delfinlar_1tur = 97;
const delfinlar_2tur = 112; 
const delfinlar_3tur = 101;
const koalalar_1tur = 109;
const koalalar_2tur = 95;
const koalalar_3tur = 106;
const totalD = (delfinlar_1tur + delfinlar_2tur + delfinlar_3tur);
console.log(totalD);
const totalK = (koalalar_1tur + koalalar_2tur + koalalar_3tur);
console.log(totalK);

const victory = totalD > 100 && totalD > totalK
    ? `Delfinlar ${totalD} bal bilan Koalalarni yutdi 🏆`
    : totalK > 100 && totalK > totalD
    ? `Koalalarni ${totalK} bal bilan Delfinal yutdi 🏆`
    : totalK === totalD && totalK > 100 && totalD > 100
    ? "Durrang 😑"
    : "Hechkim yutmadi 🙄";
console.log(victory);

