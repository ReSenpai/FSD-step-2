import $ from 'jquery';

$(document).ready(function(){
    $('.dropdown__header-container').on('click',function(){
        const checked = $('.dropdown__header-container').hasClass('dropdown__header-container_active')

        switch(checked) {
            case false:
                $('.dropdown__header-icon').addClass('dropdown__header-icon_active');
                $('.dropdown__header-container').addClass('dropdown__header-container_active');
                break;
            case true:
                $('.dropdown__header-icon').removeClass('dropdown__header-icon_active');
                setTimeout(function () {
                    $('.dropdown__header-container').removeClass('dropdown__header-container_active')
                    }, 250); 
                break;
        }
        
        $('.dropdown__main-container').slideToggle(250);
    });

    $('#circlePlus1, #circlePlus2, #circlePlus3, #circleMinus1, #circleMinus2, #circleMinus3, #clearButton, #applyButton').on('click', function(){

        const id = this.id;
        const idNumber = id.slice(-1);
        let counter = parseInt($(`#counter${idNumber}`).text());
        let guests = 0;

        if(id == 'clearButton') {
            counter = 0;
            $('#counter1, #counter2, #counter3').text(counter);
        } else if(id == `circlePlus${idNumber}`) {
            if(counter >= 10) {
                counter = 10
            } else {
                counter++;
            }    
        } else {
            if(counter <= 0) {
                counter = 0;
            } else {
                counter--;
            }
        }

        $(`#counter${idNumber}`).text(counter);

        for(let i = 1; i <= 3; i++) {
            guests += parseInt($(`#counter${i}`).text());
        }

        if(guests > 0) {
            clearButton('show');
        } else {
            clearButton('hide');
        }

        if(guests === 0) {
            guests = 'Сколько гостей';
        } else if(guests > 10 && guests <= 20) {
            guests += ' гостей';
        } else if (guests % 10 === 1) {
            guests += ' гость';
        } else if (guests % 10 > 0  && guests % 10 < 5) {
            guests += ' гостя';
        } else {
            guests += ' гостей';
        }

        $('#dropdownHeaderText').text(guests);
    });

    const clearButton = (state) => {
        const lower = 'dropdown__lower-buttons';
        const clear = 'dropdown__clear-button';
        if(state == 'show') {
            $(`.${lower}`).addClass(`${lower}_show-clear-button`);
            $(`.${clear}`).addClass(`${clear}_show`);
        } else if(state == 'hide') {
            $(`.${lower}`).removeClass(`${lower}_show-clear-button`);
            $(`.${clear}`).removeClass(`${clear}_show`);
        }
    }
        
});

