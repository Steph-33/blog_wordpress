jQuery('.like__btn').on('click', function(){
    // AJAX call goes to our endpoint url
    jQuery.ajax({
        url: 'http://yourwebsite.dev/wp-json/example/v2/likes/7',
        type: 'post',
        success: function() {
            console.log('works!');
         },
         error: function() {
            console.log('failed!');
          }
      });
    
    // Change the like number in the HTML to add 1
    var updated_likes = parseInt($('.like__number').html()) + 1;

    jQuery('.like__number').html(updated_likes);
    // Make the button disabled
    jQuery(this).attr('disabled', true);
});