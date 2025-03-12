// const nome = "Renata"; //

// try {
//     nome = "Oliveira";
// } catch (e) { //encerra a linha do try e inicia o catch 
//     console.error("Ops! A váriavel somente leitura 'nome não pode ser alterada. Veja o erro: " + e); //vai mandar uma mensagem de erro no console 
// } //encerra o bloco de códigos do catch

// console.log("Teste");

// nome = "Renata"; //quando tenta executar um código ilegal, ele imterrompe na hora, elen~so deixa                    
// console.log("Teste2");

function fazerLogin() { //declara a função fazer login e abre o bloco de códigos da função 
    let usuario = document.getElementById("txtLogin"); //declara a váriavel usuaraio 
    let senha = document.getElementById("txtSenha"); //declara a função senha 
    try { //inicia a tentativa de exeução que tudo que tiver dentro do bloco do "try"
        if (usuario.value !== "usuario123") { //verifica o valor do elemento usuario quando tem "!" no operador que comparação significa que é diferente e não igual
            throw new Error ("Erro: Usuário inválido.");
        }
        if (senha.value !== "senha123") { //vereifica o elemento  "senha" quando tem "!" no operador que comparação significa que é diferente e não igual
            throw new Error("Erro: Senha incorreta."); //lança um novo erro 
        } //encerra o bloco de códigos do "if" da senha
        console.log("Login realizado com sucesso."); //exi
    } catch (erro) {
        console.error(erro.message);
    }
}      