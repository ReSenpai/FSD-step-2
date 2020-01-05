import $ from 'jquery';

$(document).ready(function(){
    $('.dropdown__header-container').on('click',function(){
        $('.dropdown__main-container').slideToggle(250);
    });
});