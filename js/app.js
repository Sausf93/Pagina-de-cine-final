function cargar() {
    var cards = $(".col-md-4");
    var j = 0;
    for (var i in json) {

        var h1 = document.createElement("h1");
        var texto = document.createTextNode(json[i].titulo);
        h1.appendChild(texto);
        cards[j].appendChild(h1);
        var img = document.createElement("img");
        img.setAttribute("src", json[i].link);
        cards[j].appendChild(img);
        if (json[i].horario.lunes != null) {
            $(cards[j]).append("<button onclick='showlunes(this)' type='button'class='btn btn-primary'>L</button" +
                ">");
            for (let h = 0; h < json[i].horario.lunes.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horariolunes")
                    .append("<button type='button'class='btn btn-primary' dia='lunes' name=" + string + " onclick='ampliar(this)'>" + json[i].horario.lunes[h] + "</button>");
            }
        }
        if (json[i].horario.martes != null) {
            $(cards[j]).append("<button onclick='showmartes(this)' type='button'class='btn btn-primary'>M</butto" +
                "n>");
            for (let h = 0; h < json[i].horario.martes.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horariomartes")
                    .append("<button type='button'class='btn btn-primary'dia='martes' name=" + string + " onclick='ampliar(this)'>" + json[i].horario.martes[h] + "</button>");
            }
        }
        if (json[i].horario.miercoles != null) {
            $(cards[j]).append("<button onclick='showmiercoles(this)'  type='button'class='btn btn-primary'>X</bu" +
                "tton>");
            for (let h = 0; h < json[i].horario.miercoles.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horariomiercoles")
                    .append("<button type='button'class='btn btn-primary' dia='miercoles' name=" + string + " onclick='ampliar(this)'>" + json[i].horario.miercoles[h] + "</button>");
            }
        }
        if (json[i].horario.jueves != null) {
            $(cards[j]).append("<button onclick='showjueves(this)' type='button'class='btn btn-primary'>J</butto" +
                "n>");
            for (let h = 0; h < json[i].horario.jueves.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horariojueves")
                    .append("<button type='button'class='btn btn-primary' dia='jueves' name=" + string + " onclick='ampliar(this)'>" + json[i].horario.jueves[h] + "</button>");
            }
        }
        if (json[i].horario.viernes != null) {
            $(cards[j]).append("<button onclick='showviernes(this)' type='button'class='btn btn-primary'>V</butt" +
                "on>");
            for (let h = 0; h < json[i].horario.viernes.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horarioviernes")
                    .append("<button type='button'class='btn btn-primary' dia='viernes' name=" + string + " onclick='ampliar(this)'>" + json[i].horario.viernes[h] + "</button>");
            }
        }
        if (json[i].horario.sabado != null) {
            $(cards[j]).append("<button onclick='showsabado(this)' type='button'class='btn btn-primary'>S</butto" +
                "n>");
            for (let h = 0; h < json[i].horario.sabado.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horariosabado")
                    .append("<button type='button'class='btn btn-primary' dia='sabado'  name=" + string + " onclick='ampliar(this)'>" + json[i].horario.sabado[h] + "</button>");
            }
        }
        if (json[i].horario.domingo != null) {
            $(cards[j]).append("<button onclick='showdomingo(this)' type='button'class='btn btn-primary'>D</butt" +
                "on>");
            for (let h = 0; h < json[i].horario.domingo.length; h++) {
                var string = json[i]
                    .titulo
                    .replace(" ", "-");
                $(cards[j])
                    .children(".horariodomingo")
                    .append("<button type='button'class='btn btn-primary' dia='domingo' name=" + string + " onclick='ampliar(this)'>" + json[i].horario.domingo[h] + "</button>");
            }
        }
        j++;

    }
}

function showlunes(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horariolunes")
        .show();
}

function showmartes(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horariomartes")
        .show();
}

function showmiercoles(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horariomiercoles")
        .show();
}

function showjueves(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horariojueves")
        .show();
}

function showviernes(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horarioviernes")
        .show();
}

function showsabado(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horariosabado")
        .show();
}

function showdomingo(este) {
    $(".horario").hide();
    $(este)
        .siblings(".horariodomingo")
        .show();
}

function ampliar(hola) {
    var actual = new Actual($(hola).text(), $(hola).attr("name"), $(hola).attr("dia"), $(hola).parent().parent().children("img").attr("src"));
    localStorage.setItem("PeliculaSeleccionada", JSON.stringify(actual));
    window.location.href = "pages/Confirmacion.html";
}

Actual = function (hora, nombre, dia, imagen) {
    this.hora = hora;
    this.nombre = nombre;
    this.dia = dia;
    this.imagen = "../" + imagen;
};

function paginados() {
    var pelicula = JSON.parse(localStorage.getItem("PeliculaSeleccionada"));
    $("#pelicula").append("<h1>" + pelicula.nombre + "</h1> <img src='" + pelicula.imagen + "'>");
    $("#hora").append("<h3>" + pelicula.dia + ": " + pelicula.hora + "</h3>");
}

function confirmar() {
    var pelicula = JSON.parse(localStorage.getItem("PeliculaSeleccionada"));
    var reservas = new reserva($("#select").val(), pelicula.hora, pelicula.dia, pelicula.nombre);
    localStorage.setItem("reserva", JSON.stringify(reservas));
    location.href = "asientos.html";

}

reserva = function (entradas, hora, dia, nombrePelicula) {
    this.entradas = entradas;
    this.hora = hora;
    this.dia = dia;
    this.nombrePelicula = nombrePelicula;
};

function activar(asiento) {

    if (document.getElementById(asiento).getAttribute("class") != "ocupado") {
        if (document.getElementById(asiento).getAttribute("class") != "activo") {
            document.getElementById(asiento).setAttribute("style", "");
            document.getElementById(asiento).removeAttribute("class", "inactivo");
            document.getElementById(asiento).setAttribute("class", "activo");
        } else {
            document.getElementById(asiento).setAttribute("style", "");
            document.getElementById(asiento).removeAttribute("class", "activo");
            document.getElementById(asiento).setAttribute("class", "inactivo");
        }
    }
}

ArraySVG = function (clave, array) {
    this.clave = clave;
    this.asientos = array;
};

function pagar() {
    var reserva = JSON.parse(localStorage.getItem("reserva"));
    var asientosSeleccionados = $(".activo");
    var idasientosOcupados = new Array();
    if (JSON.parse(localStorage.getItem("SVG")) != null) {
        var arraySVG = JSON.parse(localStorage.getItem("SVG"));
    } else {
        var arraySVG = new Array();
    }
    for (var i in asientosSeleccionados) {
        if (asientosSeleccionados[i].id != null) {
            idasientosOcupados.push(asientosSeleccionados[i].id);
        }

    }
    if (idasientosOcupados.length != reserva.entradas) {
        alert("Seleccionaste para comprar: " + reserva.entradas + " y solo has ocupado: " + idasientosOcupados.length);
    } else {
        for (var j in asientosSeleccionados) {
            if (j <= asientosSeleccionados.length) {
                asientosSeleccionados[j].removeAttribute("class", "activo");
                asientosSeleccionados[j].setAttribute("class", "ocupado");
            }

        }
        var ocupados = $(".ocupado");
        var existe;
        var arrayOcupados = new Array();
        var aux;
        for (var r in arraySVG) {
            if (arraySVG[r].clave == reserva.dia + reserva.hora + reserva.nombrePelicula) {
                existe = true;
                aux=r;
            }
        }
        if (existe == true) {
            for (var h in ocupados) {
                if (ocupados[h].id != null) {
                    arrayOcupados.push(ocupados[h].id);
                }

            }
            arraySVG[r].asientos=arrayOcupados;
            localStorage.setItem("SVG", JSON.stringify(arraySVG));
            location.href = "formularioFinal.html";
        } else {
            for (var h in ocupados) {
                if (ocupados[h].id != null) {
                    arrayOcupados.push(ocupados[h].id);
                }

            }

            var svg = new ArraySVG(reserva.dia + reserva.hora + reserva.nombrePelicula, arrayOcupados);
            arraySVG.push(svg);
            localStorage.setItem("SVG", JSON.stringify(arraySVG));
            location.href = "formularioFinal.html";
        }

    }



}



function comprobarSVG() {
    
    $(document).ready(function () {
        var comprueba = JSON.parse(localStorage.getItem("reserva"));
        var arrayComprueba = JSON.parse(localStorage.getItem("SVG"));

        for (var w in arrayComprueba) {
            if (comprueba.dia + comprueba.hora + comprueba.nombrePelicula == arrayComprueba[w].clave) {
                var arrayasientos = arrayComprueba[w].asientos;
                for (var g = 0; g < arrayasientos.length; g++) {
                    document.getElementById(arrayasientos[g]).setAttribute("class", "ocupado");
                }
            }
        }
    });
}


function form() {
    $(document).ready(function () {
        $('select').material_select();
    });
}


function Felicidades() {
    
    alert("Felicidades ya ha comprado las entradas");
    location.replace("../index.html");
    setTimeout(redirection(),4000);
}
function redirection(){
    location.href="../index.html";
}