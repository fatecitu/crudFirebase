document.getElementById('formCliente')
        .addEventListener('submit', function(event){
            event.preventDefault() //evita recarregar
        //efetuando validações
        if(document.getElementById('nome').value.length < 5 ){
            alerta('⚠ O nome é muito curto!','warning')
            document.getElementById('nome').focus()
        } else if(document.getElementById('nome').value.length > 100 ){
            alerta('⚠ O nome é muito longo!','warning')
            document.getElementById('nome').focus()
        }   
        //criando o objeto cliente
        //campo sexo
        let sexoSelecionado = ''
        if(document.getElementById('sexo-0').checked){
            sexoSelecionado = 'Masculino'
        } else {sexoSelecionado = 'Feminino'}
       
        const dadosCliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            nascimento: document.getElementById('nascimento').value,
            peso: document.getElementById('peso').value,
            altura: document.getElementById('altura').value,
            sexo: sexoSelecionado
        } 
        //testando...
        //alert(JSON.stringify(dadosCliente))
        incluir(event, 'clientes', dadosCliente)
        })

async function incluir(event, collection, dados){
    event.preventDefault()
    return await firebase.database().ref(collection).push(dados)
    .then(()=> {
        alerta('✅Cliente incluído com sucesso!','success')
        document.getElementById('formCliente').reset()//limpa
    })
    .catch(error => {
        alerta('❌Falha ao incluir: '+error.message,'danger')
    })
}



/**
 * remover.
 * Remove os dados da collection a partir do id passado.
 * @param {string} db - Nome da collection no Firebase
 * @param {integer} id - Id do registro no Firebase
 * @return {null} - Snapshot atualizado dos dados
 */
async function remover(db, id) {
    if (window.confirm("⚠️Confirma a exclusão do registro?")) {
      let dadoExclusao = await firebase.database().ref().child(db + '/' + id)
      dadoExclusao.remove()
        .then(() => {
          alerta('✅ Registro removido com sucesso!', 'success')
        })
        .catch(error => {
          console.error(error.code)
          console.error(error.message)
          alerta('❌ Falha ao excluir: ' + error.message, 'danger')
        })
    }
  }

/**
 * Filtra os elementos de uma tabela com base no valor inserido em um campo de filtro.
 *
 * @param {string} idFiltro - O ID do campo de filtro de entrada.
 * @param {string} idTabela - O ID da tabela que será filtrada.
 */
function filtrarTabela(idFiltro, idTabela) {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById(idFiltro);
    filter = input.value.toUpperCase();
    table = document.getElementById(idTabela);
    tr = table.getElementsByTagName("tr");
  
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none"; // Oculte todas as linhas do corpo da tabela inicialmente.
      for (j = 0; j < tr[i].cells.length; j++) {
        td = tr[i].cells[j];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ""; // Exiba a linha se houver correspondência.
            break; // Saia do loop interno quando encontrar uma correspondência.
          }
        }
      }
    }
  }