let searchParams = new URLSearchParams(window.location.search)
var obj = jQuery.parseJSON(searchParams.get('json'));

$('.card-header span').text(obj.text);
$('.first-msg span').text(obj.salutation);

a = jQuery(obj.name).map(e => { 
	return { 
		name: obj.name[e], 
		area: obj.area[e],
		number: obj.phone[e],
		image: 'https://i.pravatar.cc',
	}
});

jQuery(document).ready(function(){	

	var users = a;
	
	if(a.length == 0){
		jQuery('div.home-chat').prepend('<a class="informasi" href="javascript:void" title="Chat Whatsapp"><div class="info-avatar"><img src="'+obj.image+'"></div><div class="info-chat"><span class="chat-label">'+obj.area+'</span><span class="chat-nama">'+obj.name+'</span></div><span class="my-number">'+obj.number+'</span></a>');
	}else{
		jQuery(users).each(function(i, obj) {
			jQuery('div.home-chat').prepend('<a class="informasi" href="javascript:void" title="Chat Whatsapp"><div class="info-avatar"><img src="'+obj.image+'"></div><div class="info-chat"><span class="chat-label">'+obj.area+'</span><span class="chat-nama">'+obj.name+'</span></div><span class="my-number">'+obj.number+'</span></a>');
		});
	}
});

$(function() {
	$(this).find('.py-1').addClass('fa-chevron-up').removeClass('fa-chevron-down');
	$(document).on('click','.chat-expand,.card-header',function(){
		window.parent.postMessage('show_hide', '*');
		return false;
	});
});