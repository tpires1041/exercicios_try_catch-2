class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  } 

 atributos() {
  if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    };
  } else {
    throw new MeuErro("Deu erro")
  }
}
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

