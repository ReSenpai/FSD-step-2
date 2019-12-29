import $ from 'jquery';

$(document).ready(function(){

    $('.checkbox-list').on('click',function(){
        $('.checkbox-list__ul').slideToggle(300);

        var arrow = $('.checkbox-list__arrow').text();
        
        switch(arrow) {
            case 'expand_less':
                arrow = 'expand_more';
                break;
            case 'expand_more':
                arrow = 'expand_less';
                break;
        }

        $('.checkbox-list__arrow').text(arrow);
    });   
});