import $ from 'jquery';

//- Поправить цвет границ хедера, что бы при открытие он становился одного цвета с ul. Сделать логику для окончаний названия комнат в зависимости от их количества и так же сделать что то с знаками припинания между ними. Придумать более приемлемую анимацию нажатия кнопок. Сделать область клика для раскрытия дропдауна побольше.

$(document).ready(function(){

    //- dropdown animation

    $('.short-dropdown__arrow').on('click',function(){
        $('.short-dropdown__ul').slideToggle(350);
    });

    
//- dropdown logic

    //- bedrooms

    $('#circlePlusOne').on('click', function(){
        var counter = parseInt($('#counterOne').text()) + 1;   

        if(counter > 10)
        counter = 10

        $('#counterOne').text(counter);

        $('#dropdownBedrooms').text(`${counter} спальни,`);
    }); 
    
    $('#circleMinusOne').on('click', function(){
        var counter = parseInt($('#counterOne').text()) - 1;

        if(counter < 0)
        counter = 0;

        $('#counterOne').text(counter);

        if(counter == 0)
            $('#dropdownBedrooms').text(``)
        else
            $('#dropdownBedrooms').text(`${counter} спальни,`);
    });


    //- bed

    $('#circlePlusTwo').on('click', function(){
        var counter = parseInt($('#counterTwo').text()) + 1;   

        if(counter > 10)
        counter = 10

        $('#counterTwo').text(counter);

        $('#dropdownBed').text(`${counter} кровати,`);
    }); 
    
    $('#circleMinusTwo').on('click', function(){
        var counter = parseInt($('#counterTwo').text()) - 1;

        if(counter < 0)
        counter = 0;

        $('#counterTwo').text(counter);

        if(counter == 0)
            $('#dropdownBed').text(``)
        else
            $('#dropdownBed').text(`${counter} кровати,`);
    });

    //- Bathrooms

    $('#circlePlusThree').on('click', function(){
        var counter = parseInt($('#counterThree').text()) + 1;   

        if(counter > 10)
        counter = 10

        $('#counterThree').text(counter);

        $('#dropdownBathrooms').text(`${counter} ванн,`);
    }); 
    
    $('#circleMinusThree').on('click', function(){
        var counter = parseInt($('#counterThree').text()) - 1;

        if(counter < 0)
        counter = 0;

        $('#counterThree').text(counter);

        if(counter == 0)
            $('#dropdownBathrooms').text(``)
        else
            $('#dropdownBathrooms').text(`${counter} ванн,`);
    });
});

 