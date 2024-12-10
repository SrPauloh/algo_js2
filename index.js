
function controleAlunos(numAlunos) {  
  for (let i = 0; i < numAlunos; i++) {  
      if (i === 0) {  
          console.log("zero " + i);  
      } else if (i % 2 === 0) {  
          console.log("par " + i);  
      } else {  
          console.log("ímpar " + i);  
      }  
  }  
}  

let numeroDeAlunos = 10;
controleAlunos(numeroDeAlunos);