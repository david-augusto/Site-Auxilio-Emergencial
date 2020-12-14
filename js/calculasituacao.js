var salarioMinimo = document.querySelector(".SalMin");
salarioMinimo.textContent = 3.135;

var pessoas = document.querySelectorAll(".pessoa");

  for(var i=0;i<pessoas.length;i++){    
    var pessoa=pessoas[i];       
    var tdrenda = pessoa.querySelector(".info-renda");
    var renda =tdrenda.textContent;
    var tdsituacao = pessoa.querySelector(".info-situacao");
    var situacao = calculasituacao(renda);
    tdsituacao.textContent= situacao;
  }

    function calculasituacao(renda){
   
    if (renda>=3135){
         console.log("negado!!");
        return "NEGADO!!";
     }

     if (renda < 3135){
        console.log("aprovado!!");
        return "APROVADO!!";
    }   
  }
