//aplicamos summernote al modal_enviar

$( document ).ready(function() {
	if ($('#modal_enviar textarea').length) {
		$('#modal_enviar textarea').attr('rows','').summernote({ 
			toolbar: [
				['style', ['style']],
				['fontsize', ['fontsize']],
				['font', ['bold', 'italic', 'underline', 'clear']],
				['fontname', ['fontname']],
				['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['height', ['height']],
				['insert', ['picture', 'hr']],
				['table', ['table']]
			],		
			height: 300
		});
	}
	if ($('#panel_email #plantillas textarea').length) {
		$('textarea[name^="mail_"]').attr('rows','').summernote({ 
			toolbar: [
				['style', ['style']],
				['fontsize', ['fontsize']],
				['font', ['bold', 'italic', 'underline', 'clear']],
				['fontname', ['fontname']],
				['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['height', ['height']],
				['insert', ['picture', 'hr']],
				['table', ['table']]
			],
			height: 150 });
	}
});
