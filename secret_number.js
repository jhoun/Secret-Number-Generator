'use strict';
module.exports = function() {

    //Private variables
    var number = Math.random();


    function secretNumber() {
      return number;
    }
    //Public
    return secretNumber;
};

