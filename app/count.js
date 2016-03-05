exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var intr = setInterval(function(){
  		 start++;
  		 if(start==end){
  		 	clearInterval(intr);
  		 	
  		 }
  	}, 100);
  }
};
