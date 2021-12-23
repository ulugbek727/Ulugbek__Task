const pythonMember1 = 7, pythonMember2 = 6, pythonMember3 = 8,  pythonMember4 = 3,  pythonMember5 = 4, pythonMember6 = 2,  pythonMember7 = 1,
pythonMember8 = 6,  pythonMember9 = 5,  pythonMember10 = 2,
javaScriptMember1 = 5, javaScriptMember2 = 6, javaScriptMember3 = 8,  javaScriptMember4 = 9,  javaScriptMember5 = 10, 
javaScriptMember6 = 7,  javaScriptMember7 = 9,  javaScriptMember8 = 9, javaScriptMember9 = 10, javaScriptMember10 = 10;

let JavaScript = javaScriptMember1 + javaScriptMember2 + javaScriptMember3 + javaScriptMember4 + javaScriptMember5 + 
javaScriptMember6 + javaScriptMember7 + javaScriptMember8 + javaScriptMember9 + javaScriptMember10;
console.log("Umumiy JavaScript toplagan ball " + JavaScript);
let Python = pythonMember1 + pythonMember2 + pythonMember3 + pythonMember4 + pythonMember5 + pythonMember6 + pythonMember7 + pythonMember8 +
pythonMember9 + pythonMember10;
console.log("Umumiy Python toplagan ball " + Python);

let totalJavaScript = JavaScript / 10;
console.log("JavaScript o'rtacha balli " + totalJavaScript);

let totalPython = Python / 10;
console.log("Python o'rtacha balli " + totalPython);

if (totalJavaScript > 2 * totalPython) {
    console.log(`JavaScript jamaosi ${totalJavaScript} Python jamoasidan ${totalPython} ustun keldi`)
} else if (totalPython > 2 * totalJavaScript) {
    console.log(`Python jamaosi ${totalPython} JavaScript jamoasidan ${totalJavaScript} ustun keldi`)
} else if (totalJavaScript === totalPython) {
    console.log('Durrang')
} else {
    console.log("Hech kim yutmadi")
}
