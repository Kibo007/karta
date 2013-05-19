$('.k_wrap p').text( window.localStorage.poruka);


$('#send').on('click', function(e) {
	e.preventDefault;
	
	var input = $('.input').val();
	$('.k_wrap p').text(input);

	localStorage.poruka = input

});

$.ajax({
    url: 'http://www.zetkarte.org/chat/index.php',
    type: 'GET',
    success: function(data) {
        
   $('.hidden').append(data.responseText);
    cleanHidden();
   }
});

function cleanHidden() {
	var zetkarte = $('.hidden').find('.posts')
	$('.hidden').html(zetkarte)
	var karta = $('.posts').find('p').text();
	karta = karta.substr(0, karta.indexOf('\n'));
	$('.k_wrap p').text(karta);
	localStorage.poruka = karta;
}

var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();

var output = ((''+day).length<2 ? '0' : '') + day + '.' +
    ((''+month).length<2 ? '0' : '') + month + '.' +  d.getFullYear();

$('.datum span').text(output);



