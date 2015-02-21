var Nut = {
	key : 'D®[@Gµ#1∆©DsdfiILhiyf8hJKH98fdß∆¢ˆøßs98w'
};

Nut.encrypt = function () {
	if (arguments.length == 0) {
		var incoming_message = this;
	} else if (arguments.length == 1) {
		var incoming_message = arguments[0];
	}
	var encrypted_message = [];
	for (var i = 0; i < incoming_message.length; i++) {
		encrypted_message.push(String.fromCharCode(incoming_message.charCodeAt(i) ^ this.key.charCodeAt(i%this.key.length)));
	};
	return encrypted_message.join('');
}

Nut.decrypt = function () {
	if (arguments.length == 0) {
		var incoming_message = this;
	} else if (arguments.length == 1) {
		var incoming_message = arguments[0];
	}
	var raw_message = (incoming_message).split('');
	for (var i = 0; i < raw_message.length; i++) {
		raw_message[i] = String.fromCharCode(Number(raw_message[i].charCodeAt(0)) ^ this.key.charCodeAt(i%this.key.length));
	};
	return raw_message.join('');
}

String.prototype.key = Nut.key;
String.prototype.encrypt = Nut.encrypt;
String.prototype.decrypt = Nut.decrypt;