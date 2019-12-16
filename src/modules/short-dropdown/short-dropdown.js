import $ from 'jquery';

$(document).ready(function(){

    $(".short-dropdown__arrow").click(function(){
        $(".short-dropdown__ul").addClass("short-dropdown__ul_open")
    });

    $(".short-dropdown__arrow").click(function(){
        $(".short-dropdown__ul").removeClass("short-dropdown__ul_open")
    });


});