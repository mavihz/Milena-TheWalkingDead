let url = "dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("character").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado"></p> <img class="foto" src="'+ $(this).find("id").text() +'.png"><p class="name"></p> <p class="name">'+ $(this).find("name").text() +'</p><p>'+ $(this).find("").text()+'</a> </p><\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });

var url_string = window.location.href;
var url1 = new URL(url_string);
var id = parseInt(url1.searchParams.get("id"));

$.ajax(url)
    .done(function(xml){
        $(xml).find("character").each(function(){
            var pos = parseInt($(this).find("id").text());
            if(id === pos){
                $("#individual").append('<div class="card"><p class="procurado"></p> <img class="foto" src="'+ $(this).find("id").text() +'.png" ><p class="vivo"></p> <p class="name">'+ $(this).find("name").text() +'</p> <p>'+ $(this).find("nome_real").text() +'<\p> <p class="rec">Descrição:'+ $(this).find("description").text()+' </p><p>'+ $(this).find("").text()+' </p><\div>');
            }
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });