// Decraracion de variables 
var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();
// Validacion
if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
},1000);

// Fin de la validacion para el formulario
// Decrarcion de funciones
function mostrarFormulario(){
	// Animacion
	$form.slideToggle();
	$list.slideToggle();
	return false;
}
function agregarPost(){
	// Decrarcion de variables
	var titulo = $titulo.val(),
		url = $url.val(),
		$clone = $post.clone();
	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('hret',url);

	$clone.hide();
	$list.prepend($clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val(''); 
	$clone.fadeIn();
	return false;
}

//Eventos
$('#publicar_nav a').click(mostrarFormulario);
$('#formulario').on('submit', agregarPost);