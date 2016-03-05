exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var tempStr = "";
  	var identifiedChars = [];
    for(var i=0;i<str.length ;i++){
    	var char = str.charAt(i);
    	if(char===str.charAt(i+1) && identifiedChars.indexOf(char) === -1 ){
    		tempStr+=Array(amount+1).join(char);
    		identifiedChars.push(char);
    	}
    	else if(identifiedChars.indexOf(char) === -1){
    		tempStr +=char;
    	}
    }
    return tempStr;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
