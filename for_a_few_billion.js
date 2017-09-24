var pay = 0.01;
var days = 30
var tot = 0.00;
for(var i = 0; i <days; i++){
    tot += pay;
    pay *= 2;  
}
console.log("After", days, "days the servant has $", tot);

days = 0;
tot = 0.00;
pay = 0.01;
while(tot < 10000){
    tot += pay;
    pay *= 2;
    days ++;
}
console.log("It took", days, "days to get $10,000");

days = 0;
tot = 0.00;
pay = 0.01;
while(tot < Infinity){
    tot += pay;
    pay *= 2;
    days ++;
}
console.log("It would take", days, "days to get infinite money");