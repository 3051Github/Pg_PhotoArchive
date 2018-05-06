var indicefoto = 1;


function gotohome()
{
    location.href ='home.html';
}


function askfunzione(idfunzione)
{
    switch(idfunzione)
    {
        case 1:
            location.href='elencoauto.html';
            break;
        case 2:
            location.href='nuovasosta.html';
            break;
    }
        
}

function gotothumbs()
{    
    
    //alert($("#txttarga").val());
    
    if($("#txttarga").val()=='')
    {
        alert("IMMETTERE LA TARGA");
    }
    else
    {    
        nuovalabel = $(".titolofotografie").html() + "<br/>" + $("#txttarga").val().replace(/ /g,'');
        //alert(nuovalabel);
        
        $(".titolofotografie").html(nuovalabel);
        
        $("#pnltarga").addClass("hide");    
        $("#pnlthumbnails").removeClass("hide");
        $(".synk").fadeIn();
    }
}

function newphoto()
{    
    $("#pnlthumbnails").addClass("hide");
    $("#pnlnewphoto").removeClass("hide");
}

$(document).ready(function(){

    
    
});

function capturePhotoWithFile() {
        navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 70, destinationType: Camera.DestinationType.FILE_URI });
    }    
    