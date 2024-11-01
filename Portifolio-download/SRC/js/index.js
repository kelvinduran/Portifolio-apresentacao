// passo 1 - pegar o botão mostrar mais no js pra poder verificar quando o usuário clicar em cima dele

 const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
 const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
  projetosInativos.forEach(projetoInativo => {
    console.log(projetoInativo);
  })
})