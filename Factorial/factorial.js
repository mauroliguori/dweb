let num = 4
console.log("El factorial de " + num + " es: " + factorial(num))



function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1)
      return answer;

    if(n < 0)
        return "El número tiene que ser positivo."

    for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
    return answer;
}