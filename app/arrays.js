if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      /*
      if (Array.prototype.indexOf) { return arr.indexOf(item); }
      */

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },


    sum : function(arr) {

    },

    remove : function(arr, item) {

    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

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
});
