// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

$(document).ready(function(){

    $.ajax(
        {
            'url': 'https://flynn.boolean.careers/exercises/api/array/music',
            'method': 'GET',
            'success': function(risposta){
                console.log(risposta.response);

                // var source = document.getElementById("entry-template").innerHTML;
                var source = $("#entry-template").html();
                var template = Handlebars.compile(source);

                for (var i = 0; i < risposta.response.length; i++) {
                    var cd = risposta.response[i];
                    var html = template(cd);

                    $('.cds-container').append(html);
                }
            },
            'error': function(){
                alert('errore!');
            }
        }
    );

    //****Versione con la funzione****

    // $.ajax(
    //     {
    //         'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    //         'method': 'GET',
    //         'success': function(risposta){
    //             insertCd(risposta);
    //         'error': function(){
    //             alert('errore!');
    //         }
    //     }
    // );
    //functioninsertCd(data){
    //             console.log(risposta.response);
    //
    //             // var source = document.getElementById("entry-template").innerHTML;
    //             var source = $("#entry-template").html();
    //             var template = Handlebars.compile(source);
    //
    //             for (var i = 0; i < risposta.response.length; i++) {
    //                 var cd = risposta.response[i];
    //                 var html = template(cd);
    //
    //                 $('.cds-container').append(html);
    //             }
    //         },
    //}


// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.
    $('#genere option').click(function(){

        var scelta = $(this).val();
        console.log(scelta)

        if (scelta == 'All') {
            $('.cd').show();

        } else {
            $('.cd').hide();
            $('.cd.' + scelta).show();
        }

        // var scelta = $(this.genre).val();
        //
        // if ('#genere' == scelta) {
        //     $('.cd').genre.show(scelta);
        // } else {
        //     $('.cd').genre.hide();
        // }
        // console.log(scelta)

    //     var valore = $(this).val();
    //     var scelta = $('.cd'.genre).click();
    //
    //     // $('.cd').hide();
    //     $(scelta.genre).click().show('cd')
    //     // if ($(this).hasClass('.selected')) {
    //     //     $(valore).show();
    //     // }
    //     console.log(scelta)
    //     //else {
    //     // }
    });
});
