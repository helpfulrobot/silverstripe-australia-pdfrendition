;(function ($) {
	$().ready(function () {
		$('#action_previewpdf').live('click', function () {
			var link = $(this).attr('data-link');
			window.open(link);
			return false;
		});
		
//		
//		$('#right input[name=action_compose]').live('click', function(){
//			var form = $('#right form');
//			var formAction = form.attr('action') + '?' + $(this).fieldSerialize();
//
//			// @todo TinyMCE coupling
//			if(typeof tinyMCE != 'undefined') tinyMCE.triggerSave();
//
//			// Post the data to save
//			$.post(formAction, form.formToArray(), function(result){
//				// @todo TinyMCE coupling
//				tinymce_removeAll();
//
//				$('#right #ModelAdminPanel').html(result);
//
//				if($('#right #ModelAdminPanel form').hasClass('validationerror')) {
//					statusMessage(ss.i18n._t('ModelAdmin.VALIDATIONERROR', 'Validation Error'), 'bad');
//				} else {
//					statusMessage(ss.i18n._t('ModelAdmin.SAVED', 'Saved'), 'good');
//				}
//
//				// TODO/SAM: It seems a bit of a hack to have to list all the little updaters here. 
//				// Is jQuery.live a solution?
//				Behaviour.apply(); // refreshes ComplexTableField
//				if(window.onresize) window.onresize();
//			}, 'html');
//
//			return false;
//		});
	})
	
})(jQuery);