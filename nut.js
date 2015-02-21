/* nut.js
 * Copyright (C) 2015 Alex Cai. <t9cai@uwaterloo.ca>
 * Released under MIT License.
 * Distribuée sous la licence MIT.
 */
 
(function (window, undefined){
  var Nut = {
    key : 'D®[@Gµ#1∆©DsdfiILhiyf8hJKH98fdß∆¢ˆøßs98w'
  };

  Nut.encrypt = function () {
  	var incomingMessage = (arguments.length) ? arguments[0] : this;
  	var encryptedMessage = "";
  	
  	for (var i = 0, c=''; c = incomingMessage.charCodeAt(i); i++) {
  		encryptedMessage += String.fromCharCode(c ^ this.key.charCodeAt(i%this.key.length));
  	}
  	return encryptedMessage;
  }

  Nut.decrypt = function () {
  	var incomingMessage = (arguments.length) ? arguments[0] : this;
  	var rawMessage = "";
  	
  	for (var i = 0, c=''; c = incomingMessage.charCodeAt(i); i++) {
  		rawMessage += String.fromCharCode(Number(c)) ^ this.key.charCodeAt(i%this.key.length);
  	}
  	
  	return rawMessage;
  }

  if (!String.prototype.encrypt && !String.prototype.decrypt) {
    String.prototype.encrypt = Nut.encrypt;
    String.prototype.decrypt = Nut.decrypt;
  }
  
  window.nut = Nut;
})(window, undefined);
