$(".form").submit(function(e) {

    e.preventDefault();

    var trajeto = $('input[name="trajeto"]:checked').val();
    var combustivel = $('input[name="combustivel"]:checked').val();
    var distancia = $('input[name="distancia"]').val();
    var valor = $('input[name="valor"]').val();

    if (trajeto === "ubarno") {
        if (combustivel === "etanol") {
            var autonomia = 7;
        } else if (combustivel === "gasolina") {
            var autonomia = 10.9;
        }
    } else if(trajeto === "rodoviario") {
        if (combustivel === "etanol") {
            var autonomia = 8.5;
        } else if (combustivel === "gasolina") {
            var autonomia = 13.2;
        }
    }

    var consumo = (distancia/autonomia);
    var gasto = (consumo*valor);

    console.log(gasto);
    alert("Resumo do trajeto\n\nTipo: "+trajeto+"\nDistância: "+distancia+" km\nAutonomia: "+autonomia+" km/l\nCombustível: "+combustivel+"\nQuantidade: "+(consumo).toFixed(2)+" litros\nValor por litro: R$ "+valor+"\n\n\nCusto do trajeto: R$ "+(gasto).toFixed(2));
});
