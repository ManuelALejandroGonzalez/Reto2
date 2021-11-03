function traerInformacion() {
    $.ajax({
        url: "https://g0dfc25f9d5bd2a-db202109232119.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function pintarRespuesta(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].rooms + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
};

function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
};


function editarInformacion() {
    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
};

function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
};

function informacionCliente() {
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta2(respuesta.items)
        }

    });
}

function pintarRespuesta2(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarCliente(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
};

function guardarNuevoCliente() {
    let myData = {
        id: $("#id2").val(),
        name: $("#name2").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id2").val("");
            $("#name2").val("");
            $("#email").val("");
            $("#age").val("");
            informacionCliente();
            alert("se ha guardado el dato")
        }
    });
};

function cambiarDatos() {
    let myData = {
        id: $("#id2").val(),
        name: $("#name2").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id2").val("");
            $("#name2").val("");
            $("#email").val("");
            $("#age").val("");
            informacionCliente();
            alert("se ha Actualizado")
        }
    });
};

function borrarCliente(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            informacionCliente();
            alert("Se ha Eliminado.")
        }
    });
};



function historialMensajes() {
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta3(respuesta.items)
        }

    });
}

function pintarRespuesta3(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarMensaje(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
};

function guardarMensaje() {
    let myData = {
        id: $("#id3").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id3").val("");
            $("#messagetext").val("");
            historialMensajes();
            alert("se ha guardado el dato")
        }
    });
};

function cambiarMensaje() {
    let myData = {
        id: $("#id3").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id3").val("");
            $("#messagetext").val("");
            historialMensajes();
            alert("se ha Actualizado")
        }
    });
};

function borrarMensaje(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g61d3cabcc88f86-cabinbd.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            historialMensajes();
            alert("Se ha Eliminado.")
        }
    });
};