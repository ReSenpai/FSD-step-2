import $ from 'jquery';

$(document).ready(function(){

    $('.checkbox-list').on('click',function(){
        $('.checkbox-list__ul').slideToggle(350);
    });
});