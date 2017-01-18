	var $name = "";
			
	function playerInfo(player) {
		$name = player.name;
	}

	jcmp.CallEvent('userinfo', function(data) {
		playerInfo($.parseJSON(data));
	});
	
	$('#playerName').html($name);

	jcmp.CallEvent('toggle_cursor', false);
	jcmp.ShowCursor();		
	$('#eventLogin').hide();
	$('#register-form').hide();
	
	$('#btnRegisterTog').click(function() {
		$('#eventLogin').show();
		$('#eventRegister').hide();
		$('#register-form').show();
		$('#login-form').hide();
	});
		
	$('#btnLoginTog').click(function() {
		$('#eventLogin').hide();
		$('#eventRegister').show();
		$('#register-form').hide();
		$('#login-form').show();
	});