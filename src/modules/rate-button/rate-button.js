import $ from 'jquery';

$(document).ready(function(){
    $('#star01,#star02,#star03,#star04,#star05').on('click',function(){
        var star = this.id;
        var boolean = $(`#${star}`).text();

        if(boolean === 'star') {
            switch(star) {
                case 'star01':
                    $('#star01,#star02,#star03,#star04,#star05').text('star_border');
                    break;
                case 'star02':
                    $('#star02,#star03,#star04,#star05').text('star_border');
                    break;
                case 'star03':
                    $('#star03,#star04,#star05').text('star_border');
                    break;
                case 'star04':
                    $('#star04,#star05').text('star_border');
                    break;
                case 'star05':
                    $('#star05').text('star_border');
                    break;
            }
        } else if(boolean === 'star_border') {
            switch(star) {
                case 'star01':
                    $('#star01').text('star');
                    break;
                case 'star02':
                    $('#star01,#star02').text('star');
                    break;
                case 'star03':
                    $('#star01,#star02,#star03').text('star');
                    break;
                case 'star04':
                    $('#star01,#star02,#star03,#star04').text('star');
                    break;
                case 'star05':
                    $('#star01,#star02,#star03,#star04,#star05').text('star');
                    break;
            }
        }
    });
});