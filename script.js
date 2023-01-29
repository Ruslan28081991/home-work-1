for(var a=''; a.length < 7;)
console.log(a += '#');


var doska = ' # # # # ';
for (var i = 0; i < 8; i++)
   console.log(doska.substr(i % 2));


 while(true) {
   var chislo = prompt("Введите число более 100, или отмена для выхода из игры.");
   if (chislo === null) {
      break;
      } else if (chislo < 100) {
         alert("Вы ввели число менее 100");
      } else {
         alert("Отлично! :)");
         break;
      }
   }