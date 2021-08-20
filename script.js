
function doBounce(element, times, distance, speed) {
  for(var i = 0; i < times; i++) {
      element.animate({marginTop: '-='+distance}, speed)
             .animate({marginTop: '+='+distance}, speed);
  }
}

function showMessage(id) {
  var message = $('#message-' + id);
  message.css('display', 'inline-block');
  doBounce(message, 1, '4px', 150);
}

function start() {
  var messages = $('.message');
  var timeOut = 1500;

  messages.each(function(index) {
    index += 1;
    if (index === messages.length) window.setTimeout( function() { writer.remove(); }, timeOut );
    window.setTimeout( function() { showMessage(index); }, timeOut );
    timeOut += 1500;
  });
}

$(document).ready(function() {
  start();
  $('#replay').click(start());
});
