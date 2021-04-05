let countOfDroid = prompt("How many droids you want to buy","");
let totalPrice = 0;

if (countOfDroid === null) {
    console.log("Отменено пользователем!");
} else {
@@ -26,4 +28,6 @@ if (countOfDroid === null) {
        credits -=totalPrice;
        console.log(`Вы купили ${countOfDroid} дроидов, на счету осталось ${credits} кредитов.`)
    }