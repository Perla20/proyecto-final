
 var word=(prompt("Escribe una palabra"));
 var code=(word.charCodeAt());
console.log(code);

  
  var cipher=(code-33)% 26;
  console.log( cipher);
 /* function decipher=word.fromCharCode(cipher){
    return decipher;
  }
  console.log(decipher);*/


