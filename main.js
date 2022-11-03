document.write("Este es mi primer programa de condicionante if");
document.write("<br>");
document.write("Este es un atuendo que puedes usar de acuerdo al clima que seleccionaste");
document.write("<br>");
var clima=prompt("El clima es templado hoy?(Contestar Si o No)");
if(clima=="Si"){
    document.write("Templado:");
    document.write("<br>");
    document.write("<img src='https://static.ar13.cl/sites/default/files/styles/manualcrop_850x475/public/ar13/field-imagen/2019-10/tipsmoda.jpg.jpeg?itok=_2BGTI85'>");
}   else{
        var clima=prompt("El clima es calido hoy?(Contestar Si o No)");
        if(clima=="Si"){
            document.write("Calido:");
            document.write("<br>");
            document.write("<img src='https://comoorganizarlacasa.com/wp-content/uploads/2021/07/como-vestir-en-clima-calido-y-verte-chic.jpg'>");
        }   else{
                var clima=prompt("El clima es frio hoy?(Contestar Si o No)");
                if(clima=="Si"){
                    document.write("Frio:");
                    document.write("<br>");
                    document.write("<img src='https://www.lolitamoda.com/uploads/ckeditor/pictures/430/content_viste-estilo-invierno.jpg'>");
                }   else{
                        var clima=prompt("El clima es gelido hoy?(Contestar Si o No)");
                        if(clima=="Si"){
                            document.write("Gelido:");
                            document.write("<br>");    
                            document.write("<img src='https://www.revistamasviajes.com/wp-content/uploads/2021/01/invierno-frio-nieve-abrigo-bosque-mujer.jpg'>");    
                        }   else{
                                var clima=prompt("El clima es lluvioso hoy?(Contestar Si o No)");
                                if(clima=="Si"){
                                    document.write("Lluvioso:");
                                    document.write("<br>");    
                                    document.write("<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1095689348.jpg?crop=1xw:1xh;center,top&resize=980:*'>");    
                                }   else{
                                        document.write("No tenemos ninguna opcion que darte hoy.");
                                        document.write("<br>");
                                        document.write("<img src='https://i.pinimg.com/564x/85/c4/00/85c4001a3285981c565ca2ca73a91986.jpg'>");
                                    }   
                            }
                    }
            }
    }