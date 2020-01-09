import $ from 'jquery';

$(document).ready(function() {

    $('.like-button').on('click',function(){
        var counter = parseInt($(this).find('.like-button__counter').text());

        var checked = $(this).hasClass('like-button_active');

        switch(checked) {
            case true:
                $(this).find('.like-button__counter').text(counter - 1).removeClass('like-button__counter_active');
                $(this).find('.like-button__icon').text('favorite_border').removeClass('like-button__icon_active');
                $(this).removeClass('like-button_active');
                break;
            case false:
                $(this).find('.like-button__counter').text(counter + 1).addClass('like-button__counter_active');
                $(this).find('.like-button__icon').text('favorite').addClass('like-button__icon_active');
                $(this).addClass('like-button_active');
                break;
        }
    });
});