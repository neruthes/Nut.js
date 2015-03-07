/* nut.js
 * Copyright (C) 2015 Alex Cai <t9cai@uwaterloo.ca> & Joy Neop <i@joyneop.com>
 * Released under MIT License.
 * Distribuée sous la licence MIT.
 */
 
(function (window, configKey) {
	var Nut = {
		nutKey : configKey
	};

	Nut.crypt = function () {
		var incomingMessage = (arguments.length) ? arguments[0] : this;
		var rawMessage = '';

		for (var i = 0; i < incomingMessage.length; i++) {
			rawMessage += String.fromCharCode(Number(incomingMessage.charCodeAt(i)) ^ Nut.nutKey.charCodeAt(i%Nut.nutKey.length));
		}
		return rawMessage;
	}

	Nut.encrypt = Nut.crypt;
	Nut.decrypt = Nut.crypt;

	String.prototype.encrypt = Nut.crypt;
	String.prototype.decrypt = Nut.crypt;
	String.prototype.crypt = Nut.crypt;

	window.Nut = Nut;
})(window, 'D®[@Gµ#1∆©DsdfiILhiyf8hJKH98fdß∆¢ˆøßs98w');
