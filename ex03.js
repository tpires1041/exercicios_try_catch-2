class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try {
            return this.atributos();
        } catch (erro){
            console.log(erro.stack)
        }
  }

 atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      }
      } else {
            throw new Error("Está faltando o estudante, cosplay ou nota do cosplay.")
        }
    }
  }

const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

