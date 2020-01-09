

(function($){  
    $.fn.rateButton = function(){
  
      function setCountStars(target){
        let starNum = Number(target.data('rating'));
        let starsCount = target.children('.rate-button__item');
        for (let i=0; i<starNum; i++){
          if(starsCount[i].classList.contains('rate-button__item'))
            starsCount[i].classList.add('rate-button__item_rated');
          else
            starsCount[i].classList.remove('rate-button__item_rated');
        }
      }
  
      function clear(target){
        let starsCount = target.children('.rate-button__item');
        for (let i=0; i<5; i++)
            starsCount[i].classList.remove('rate-button__item_rated');
      }
  
      $(this).on('click', function(e){
        let target = e.target;
        let starNum = Number($(target).data('star-num'));
        $(this).data('rating', starNum);
        console.log(starNum);
        clear($(this));
        setCountStars($(this));
      });
  
      this.each(function(){
        setCountStars($(this));
      });
  
      return this;
    };
  
      $(function() {
        $(".rate-button").rateButton();
      });
  
  }(jQuery));