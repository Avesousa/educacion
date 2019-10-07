function abrirPdf(pdf,archivo){
    $('#mostradorPdf').attr(
        'src',
        'http://docs.google.com/gview?url=http://jalux.com.ar/v2/multimedia/'+pdf+'/'+archivo+'.pdf&embedded=true');
    $("#overlay").addClass('active');
    $("#popup").addClass('active');
}

function pdfexcel(pdf,archivo){

    swal("¿Qué deseas realizar con la lista?",{
        buttons:{
            defeat: "Descargar Excel",
            catch: {
                text:"Visualizar PDF",
                value: "pdf"
            },
        },
    }).then((value) => {
        switch(value){
            case "defeat":
                window.location = 'http://jalux.com.ar/v2/multimedia/'+pdf+'/'+archivo+'.xlsx';
                swal("Descarga", "¡Haz descargado correctamente " + pdf + "!", "success");
                break;
            case "pdf":
                abrirPdf(pdf,archivo);
                break;
            default:
                cartel("¡Ha ocurrido un error!");
        }
    });

}


$("#btn-cerrar-popup").on({
    click:function(){
        $("#overlay").removeClass("active");
        $("#popup").removeClass("active");
        $("#mostradorPdf").attr("src","");
    }
});

$("#btn-cerrar-popupContacto").on({
    click:function(){
        $("#contactoMovil").removeClass("active");
        $("#popupContacto").removeClass("active");
    }
});

function cartel(texto){
    swal(texto);
}