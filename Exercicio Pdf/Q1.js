function endereço() {
    var dados1 = {
        rua:"Rua dos Pinheiros",
        numero:1293,
        beirro:"Centro",
        cidade:"São Paulo",
        uf:"Sp"
    }
    console.log("O usuario mora em " + dados1.cidade + "/" + dados1.uf + ", no bairro "+ dados1.beirro + ", "+ "\"" +dados1.rua +"\"" + " com n° "+ dados1.numero +"." );
}

endereço();