var cadena;
var parentesis = 0;
var brackets = 0;
var corchetes = 0;
function balanced(cadena){
  for (var i = 0; i <= cadena.length; i++){
  	if( cadena[i] === "[" || cadena[i] === "]"){
  		brackets++
  	}
  	if( cadena[i] === "(" || cadena[i] === ")"){
  		parentesis++
  	}
  	if( cadena[i] === "{" || cadena[i] === "}"){
  		corchetes++
  	}
  }
  if(brackets%2==0 && parentesis%2 ==0 && corchetes%2==0){
  	console.log(true);
  }else{
  	console.log(false);
  }
}
balanced("[[[[]]]]");
balanced("{()]");
