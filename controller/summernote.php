<?php

class summernote extends fs_controller{
	
	public function __construct() {
		parent::__construct(__CLASS__, 'summernote','admin', FALSE, FALSE, FALSE);
	}
	
	protected function private_core()
	{
		$this->share_extensions();
	}
	
	private function share_extensions() {

		$extensiones = array (
			array (
			'name' => 'summernote_css',
			'page_from' => __CLASS__,
			'page_to' => null,
			'type' => 'head',
			'text' => '<link rel="stylesheet" href="plugins/summernote/view/css/summernote.css" />',
			'params' => null
			),
			array (
			'name' => 'summernote_custom',
			'page_from' => __CLASS__,
			'page_to' => null,
			'type' => 'head',
			'text' => '<script src="plugins/summernote/view/js/custom.js"></script>',
			'params' => null
			),
			array (
			'name' => 'summernote_js',
			'page_from' => __CLASS__,
			'page_to' => null,
			'type' => 'head',
			'text' => '<script src="plugins/summernote/view/js/summernote.min.js"></script>',
			'params' => null
			),
		);
		
		foreach ($extensiones as $ext) {
           $fsext = new fs_extension($ext);
           if (!$fsext->save()) {
             $this->new_error_msg('Error al guardar la extensión ' . $ext['name']);
           }
        }
	}
}