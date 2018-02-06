console.log('main.js');

for(var i = 0; i < 10000; i++ ) {
    var $el = $('<img src="broken.png"/>'); 
    $(document.body).append($el);
    $el.on('mouseover', function() {
      $(this).css('opacity', 0.1);
    });
}
