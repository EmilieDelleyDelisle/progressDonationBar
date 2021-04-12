$( document ).ready(function() {
    
    // Events will be sent when someone followers
      // Please use event listeners to run functions.
      document.addEventListener('goalLoad', function(obj) {
        // obj.detail will contain information about the current goal
        // this will fire only once when the widget loads
        
        $('#title').html(obj.detail.title);
        $('#goal-current').text(obj.detail.amount.current);
        $('#goal-total').text(obj.detail.amount.target);
        $('#goal-end-date').text(obj.detail.to_go.ends_at);
      });

      document.addEventListener('goalEvent', function(obj) {
        // obj.detail will contain information about the goal
        
        $('#goal-current').text(obj.detail.amount.current);
      });

    $('.text-center').append('$');
    $('.left-text').append('$');
    let total = $("#goal-total").text();
    let current = $("#goal-current").text();

    $('div[name ="goal-current"]').text(current);
    $('div[name ="goal-total"]').text(total);

    /* change string pour number*/
    let currentNumber = parseInt(current);
    let totalNumber = parseInt(total);

    /*current * 100 / total  */
    let rest = currentNumber*100/totalNumber;
    let restInterger = Math.round(rest);

    console.log(restInterger);

    $('#current-state').css("width", ""+ restInterger + "%");

});
