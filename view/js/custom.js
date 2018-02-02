//aplicamos summernote al modal_enviar

$( document ).ready(function() {
	if ($('#modal_enviar textarea').length) {
		$('#modal_enviar textarea').attr('rows','').summernote({ height: 300 });
	}
	if ($('#panel_email #plantillas textarea').length) {
		$('textarea[name^="mail_"]').attr('rows','').summernote({ height: 150 });
	}
});
