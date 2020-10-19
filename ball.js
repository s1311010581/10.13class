//计算每队的平均分
let JohnAverage = (89 + 120 + 103) / 3;
let MikeAverage = (116 + 94 + 123) / 3;
console.log("John队的平均分为:"+JohnAverage,"Mike队的平均分为:"+MikeAverage);
//决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
let a = (JohnAverage > MikeAverage ? "John队获胜,平均分为:"+JohnAverage : "Mike队获胜,平均分为:"+MikeAverage);
console.log(a);
//改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
let JohnAverage0 = (100 + 101 + 105) / 3;
let MikeAverage0 = (99 + 100 + 104) / 3;
console.log("John队的平均分为:"+JohnAverage0,"Mike队的平均分为:"+MikeAverage0);
if (JohnAverage0 > MikeAverage0 ) {
    console.log("John队获胜,平均分为:"+JohnAverage0)
} else if (JohnAverage0 < MikeAverage0) {
    console.log("Mike队获胜,平均分为:"+MikeAverage) 
} else {
    console.log("平局!平均分为:"+JohnAverage0)
}
//Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
let MaryAverage = (97 + 134 + 105) / 3;
console.log("John队的平均分为:"+JohnAverage,"Mike队的平均分为:"+MikeAverage,"Mary队的平均分为:"+MaryAverage);
if (JohnAverage > MikeAverage && JohnAverage > MaryAverage) {
    console.log("John队获胜,平均分为:"+JohnAverage)
} else if (MikeAverage > JohnAverage && MikeAverage > MaryAverage) {
    console.log("Mike队获胜,平均分为:"+MikeAverage)
} else if (MaryAverage > JohnAverage && MaryAverage > MikeAverage) {
    console.log("Mary队获胜,平均分为:"+MaryAverage)
} else {
    console.log("平局!平均分为:"+JohnAverage)
}
//像前面一样，改变分数以产生不同的赢家，记住可能会有平局。
let JohnAverage1 = (95 + 119 + 102) / 3;
let MikeAverage1 = (94 + 118 + 101) / 3;
let MaryAverage1 = (93 + 117 + 100) / 3;
console.log("John队的平均分为:"+JohnAverage1,"Mike队的平均分为:"+MikeAverage1,"Mary队的平均分为:"+MaryAverage1);
if (JohnAverage1 > MikeAverage1 && JohnAverage1 > MaryAverage1) {
    console.log("John队获胜,平均分为:"+JohnAverage1)
} else if (MikeAverage1 > JohnAverage1 && MikeAverage1 > MaryAverage1) {
    console.log("Mike队获胜,平均分为:"+MikeAverage1)
} else if (MaryAverage1 > JohnAverage1 && MaryAverage1 > MikeAverage1) {
    console.log("Mary队获胜,平均分为:"+MaryAverage1)
} else {
    console.log("平局!平均分为:"+JohnAverage1)
}