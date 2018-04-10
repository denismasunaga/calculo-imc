$( "#calcular" ).click(function() {
    var result
    var peso = $( "#peso" ).val();
    var altura = $( "#altura" ).val();
    
    if (peso == null || altura == null) {
        result = "Prencha os campos!"
    } else {
        result = (peso/(altura*altura)).toFixed(2);
    }

    alert("Seu IMC é: " + result );
  });