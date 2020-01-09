import $ from 'jquery';

$(document).ready(function(){
    $('.short-dropdown__header').on('click', function(){
        const checked = $(this).hasClass('short-dropdown__header_active');
        const dropdown = $(this)

        if(checked) {
            $(this).children('.short-dropdown__arrow').removeClass('short-dropdown__arrow_active');
            setTimeout(function(){
                $(dropdown).removeClass('short-dropdown__header_active');
            }, 150);
        } else {
            $(this).children('.short-dropdown__arrow').addClass('short-dropdown__arrow_active');
            $(this).addClass('short-dropdown__header_active');
        }
       
        $(this).siblings('.short-dropdown__ul').slideToggle(250);
    });


    $('.counter__circle').on('click', function(){

        const buttons = $(this).attr('class');
        let counter = parseInt($(this).siblings('.counter__number').text());

        switch(buttons) {
            case 'counter__circle counter__circle_plus':
                if(counter >= 10) {
                    counter = 10
                } else {
                    counter++;
                }    
                break;
            case 'counter__circle counter__circle_minus':
                if(counter <= 0) {
                    counter = 0;
                } else {
                    counter--;
                }
                break;
        }

        let rooms = $(this).parents('.counter').siblings('span').text();
        let bedrooms = 'спальни';
        let bed = 'кровати';
        let bathrooms = 'ванные комнаты';

        const checkedRooms = (checked) => {
            if(counter == 0) {
                return '';
            } else if(counter > 10 && counter <= 20) {
                switch(checked) {
                    case bedrooms:
                        return `${counter} спален`;
                    case bed:
                        return `${counter} кроватей`;
                    case bathrooms:
                        return `${counter} ванных комнат`;
                }
            } else if (counter % 10 === 1) {
                switch(checked) {
                    case bedrooms:
                        return `${counter} спальня`;
                    case bed:
                        return `${counter} кровать`;
                    case bathrooms:
                        return `${counter} ванная комната`;
                }
            } else if (counter % 10 > 0  && counter % 10 < 5) {
                switch(checked) {
                    case bedrooms:
                        return `${counter} спальни`;
                    case bed:
                        return `${counter} кровати`;
                    case bathrooms:
                        return `${counter} ванные комнаты`;
                }
            } else {
                switch(checked) {
                    case bedrooms:
                        return `${counter} спален`;
                    case bed:
                        return `${counter} кроватей`;
                    case bathrooms:
                        return `${counter} ванных комнат`;
                }
            }
        }
        
        switch(rooms) {
            case 'спальни':
                bedrooms = checkedRooms(bedrooms);
                console.log(bedrooms);
                break;
            case 'кровати':
                bed = checkedRooms(bed);
                console.log(bed);
                break;
            case 'ванные комнаты':
                bathrooms = checkedRooms(bathrooms);
                console.log(bathrooms);
                break;
        }

        let firstCom = ',';
        let secondCom = ',';
        let headerText = `${bedrooms + firstCom + bed + secondCom + bathrooms}`

        if(bedrooms == '' && bed == '') {
            firstCom = '';
            secondCom = '';
        } else if(bed == '' && bathrooms == '') {
            firstCom = '';
            secondCom = '';
        } else if(bedrooms == '') {
            firstCom = '';
        } else if(bed == '') {
            secondCom = '';
        }

        $(this).siblings('.counter__number').html(counter);
        console.log($(this).parents('.short-dropdown').find('.short-dropdown__span').text());

        

        console.log(headerText);
        // console.log(rooms);
    });
});

 