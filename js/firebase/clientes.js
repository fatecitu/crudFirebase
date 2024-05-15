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
    return await firebase.database().ref(collection).push({
        dados
    })
    .then(()=> {
        alerta('✅Cliente incluído com sucesso!','success')
        document.getElementById('formCliente').reset()//limpa
    })
    .catch(error => {
        alerta('❌Falha ao incluir: '+error.message,'danger')
    })
}