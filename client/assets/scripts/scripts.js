(function($){
  $(document).ready(function(){
    // Scroll animation for hero arrow.
    $('.hero .overlay p').click(function() {
      $('html, body').animate({
        scrollTop: $('.about').offset().top
      }, 1500, 'easeInOutQuint');
    });

    // Contact form submission.
    $('form[name="contact"]').on('submit', function(e){
      var valid = true;
      $('.error').hide();
      // Prevent form from submitting.
      e.preventDefault();
      // Validate form name.
      if ($('input[name="name"]').val().length === 0) {
        $('input[name="name"]').next().show();
        valid = false;
      }
      // Validate form email.
      if ($('input[name="email"]').val().length === 0) {
        $('input[name="email"]').next().show();
        valid = false;
      } else if (!/^((?!.*\.\.)[a-z0-9\.\-]+[^\.]@[a-z0-9\-]+(?:\.[a-z]+)+)$/mgi.test($('input[name="email"]').val())) {
        $('input[name="email"]').next().next().show();
        valid = false;
      }
      // Validate form textarea
      if ($('textarea[name="information"]').val().length === 0) {
        $('textarea[name="information"]').next().show();
        valid = false;
      }

      // Form didn't have any errors.
      if (valid) {
        $.ajax({
          type: 'POST',
          url: '/email',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          data: JSON.stringify({
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            information: $('textarea[name="information"]').val()
          }),
          success: function(data){
            console.log('email sent');
          },
          error: function(){
            console.log('email failed');
          }
        });
      }
    });
  });
})(jQuery);
