1. //Напишите функцию преобразования цвета из 10-ного представления в 16-ный...
dec2hex = function(d) {
    if(d > 15) {
        return d.toString(16);
    } else {
        return "0" + d.toString(16);
    } 
}

rgb=function(r, g, b){ 
	if (r > 255 || g > 255 || b > 255){ 
		return console.log("Ошибка. Число должно быть не больше 255");
	} else {
    	return "#" + dec2hex(r) + dec2hex(g) + dec2hex(b);
  }
}
console.log(rgb(255, 16, 213)) // #ff10d5
===========================================================================================
2. //Напишите функцию преобразующую число в объект...
function num2Obj(num) {
  if(num > 999 || num < 0) {
		console.log('Ошибка');
	} else {
	  var number=['единицы','десятки','сотни'];
	  var obj={};
	  var i=0;
	  for(var i=0; num!=0; i++){
	    obj[number[i]]=num%10;
	    num=(num-num%10)/10;
		}
	}	
	return obj;
}
console.log(num2Obj(123))

