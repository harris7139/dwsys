<?php
	/*
		CONFIGURATION
		Please update and save to your PHP enabled web server.
		This is a standard PHP Mail script, for advanced features and options, I would suggest visiting Envato's Code Canyon.
	*/
	$to = 'example@example.com'; // YOUR email address
	$from = 'example@example.com'; // Who the message will appear to be coming from (to prevent being marked as spam, I suggest using your email)
	$subject = 'Contact Form Message'; // Subject line you will see
	$redirect_to = "./";  // note: use ./ to redirect home.
	
	/* END CONFIGURATION - You do not need to edit below this line. */

	$hasErrors = false;
	if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["message"]))
	{
		$hasErrors = true;
	}else{
		if(preg_match("/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/", $_POST["email"]) == 1) {
			$hasErrors = false;
		}else{
			$hasErrors = true;
		}
	}
	if($hasErrors == false)
	{
		$headers = "From: <".$from . ">";
		$body = "\nContact Form Message:\n\n";
		$body .= "From: " . $_POST["name"] . " (".$_POST['email'].")\n";
		$body .= "Phone: " . $_POST["phone"] . "\n";
		$body .= "\nMessage:\n" . $_POST["message"] . "\n\n";
		mail($to,$subject,$body,$headers);
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Sending Message</title>
	<link rel="stylesheet" type="text/css" href="css/screen.css" media="screen" />
	<?php if($hasErrors == false){ ?><meta http-equiv="refresh" content="2;URL=<?php echo $redirect_to; ?>" /><?php } ?>
	<link rel="shortcut icon" href="favicon.ico" />
	<meta name="robots" content="noindex,follow" />
</head>
<body>
	<?php if($hasErrors == false){ ?>
		<div class="send-status" id="loading"><h4>Message sent!</h4><p>You are being <a href="<?php echo $redirect_to; ?>">redirected</a>.</p></div>
	<?php }else{ ?>
		<div class="send-status" id="error"><h4>Wait!</h4><p>Please go back and make sure you have filled<br/ >out the name, email and message fields.</p></div>
	<?php } ?>
</body>
</html>