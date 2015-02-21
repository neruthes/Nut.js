var Nut = {
	key : 'D®[@Gµ#1∆©DsdfiILhiyf8hJKH98fdß∆¢ˆøßs98w'
};

Nut.encrypt = function () {
	if (arguments.length == 0) {
		var incoming_message = this;
	} else if (arguments.length == 1) {
		var incoming_message = arguments[0];
	}
	var encrypted_message = '';
	for (var i = 0; i < incoming_message.length; i++) {
		encrypted_message += String.fromCharCode(incoming_message.charCodeAt(i) ^ this.key.charCodeAt(i%this.key.length));
	};
	return encrypted_message;
}

Nut.decrypt = function () {
	if (arguments.length == 0) {
		var incoming_message = this;
	} else if (arguments.length == 1) {
		var incoming_message = arguments[0];
	}
	var raw_message = '';
	for (var i = 0; i < incoming_message.length; i++) {
		raw_message += String.fromCharCode(Number(incoming_message.charCodeAt(i)) ^ this.key.charCodeAt(i%this.key.length));
	};
	return raw_message;
}

String.prototype.key = Nut.key;
String.prototype.encrypt = Nut.encrypt;
String.prototype.decrypt = Nut.decrypt;