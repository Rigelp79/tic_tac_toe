$(function() {
    
   var player = 1;
   
   
    $('.square').on('click', function(ev){
        
        var squareSelected = $(this);

        if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
            alert('This square is taken!');
        } else {
            if(player === 1 ) {
                squareSelected.addClass('ex');
                if (checkWinner('ex')) {
                    alert('Congrats! Player ' + player + ' has won!');
                } else {
                    player = 2;
                }
            } else {
                squareSelected.addClass('oh');
               if (checkWinner('oh')) {
                    alert('Congrats! Player ' + player + ' has won!');
                } else {
                    player = 1;
                }
            }
            
        }
    })
    
    function checkWinner(symbol) {

        if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
          return true;
        } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
          return true;
        } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
          return true
        } else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
          return true;
        } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
          return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
          return true
        } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
          return true
        } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
          return true
        } else {
          return false;
        }

    }


});