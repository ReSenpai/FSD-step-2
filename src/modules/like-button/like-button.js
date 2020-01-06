import $ from 'jquery';

$(document).ready(function() {

    $('.like-button').on('click',function(){
        var counter = parseInt($('.like-button__counter').text());

        var checked = $('.like-button').hasClass('like-button_active');

        switch(checked) {
            case true:
                $('.like-button__counter').text(counter - 1).removeClass('like-button__counter_active');
                $('.like-button__icon').text('favorite_border').removeClass('like-button__icon_active');
                $('.like-button').removeClass('like-button_active');
                break;
            case false:
                $('.like-button__counter').text(counter + 1).addClass('like-button__counter_active');
                $('.like-button__icon').text('favorite').addClass('like-button__icon_active');
                $('.like-button').addClass('like-button_active');
                break;
        }
    });
});