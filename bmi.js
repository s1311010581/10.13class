//存储Mark,John体重身高
let Mmass = 65, Mheight = 1.83;
let Jmass = 70, Jheight = 1.80;
//存储Mark,JohnBMI
let MBMI = Mmass / (Mheight * Mheight);
let JBMI = Jmass / (Jheight * Jheight);
//输出Mark.JohnBMI
console.log("Mark的BMI值:"+MBMI);
console.log("John的BMI值:"+JBMI);
//比较Mark的BMI是否比John更高
let a = (MBMI > JBMI) ? true : false; 
console.log(a);
//打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
console.log("Mark的BMI是否比John更高？"+String(a));