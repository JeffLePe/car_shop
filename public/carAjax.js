
$(document).ready(function(){
	//$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'post',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'localhost:3000/svenda',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
		    //Adicionando registros retornados na tabela
            document.getElementById("objeto").innerHTML(dados);
			//$('#objeto').append('<p>Placa: '+dados.placa+'</p><p> Marca'+dados.marca+'</p><p>Modelo:'+dados.modelo+'</p><p>Ano:'+dados.ano+'</p><p>Nome do Cliente:'+dados.nome_cliente+'</p><p>rg: '+dados.rg+'</p><p>CPF: '+dados.cpf+'</p><p>Endereco: '+dados.endereco+'</p>');
		}
	});
});

/*(function(){
	//$('#tabela').empty(); //Limpando a tabela
	
    function pegaCarro(placa){
        $.ajax({
            type:'GET',		//Definimos o método HTTP usado
            //dataType: 'json',	//Definimos o tipo de retorno
            url: '/svenda/' + placa  //Definindo o arquivo onde serão buscados os dados
        })
        .done(function onResponse(dados){
            $("#placa_carro").val()
            $('#objeto').append('<p>Placa: '+dados.placa+'</p><p> Marca'+dados.marca+'</p><p>Modelo:'+dados.modelo+'</p><p>Ano:'+dados.ano+'</p><p>Nome do Cliente:'+dados.nome_cliente+'</p><p>rg: '+dados.rg+'</p><p>CPF: '+dados.cpf+'</p><p>Endereco: '+dados.endereco+'</p>');
            //document.getElementById("objeto").innerHTML(dados);
        })
    }
    $("form").on("submit", event => {
        var placa = $("#placa_carro").val()
        pegaCarro(placa)
        return false
    })
});*/