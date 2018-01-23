//aplicamos summernote al modal_enviar

$( document ).ready(function() {
	if ($('#modal_enviar textarea').length) {
		$('#modal_enviar textarea').attr('rows','').summernote({ height: 300 });
	}
});
