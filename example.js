jQuery(document).ready(function( $ ){     
    jQuery('#wbk-service-id').val(jQuery('#wbk-service-id option:eq(1)').val());
    jQuery('#wbk-service-id').trigger('change');  
});
jQuery(document).on( 'wbk_picker_initialized', function(event, data) {	
    data = data.disabilities.split(';');
  	data = data[0].split(',');
 	var date = new Date(data[0], data[1], data[2]);
    var picker = jQuery('#wbk-date').pickadate('picker');
    picker.set('select', date);
});
 
