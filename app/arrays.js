exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum=0;
    for(var i =0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
      var filteredArray = arr.filter(function(element){
        if(element !== item){
          return true;
        }else{
          return false;
        }
      });
      return filteredArray;
  },

  removeWithoutCopy : function(arr, item) {
   arr =  this.remove(arr, item);
   return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop(arr.length-1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
var arr3 = arr1.concat(arr2);
return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
