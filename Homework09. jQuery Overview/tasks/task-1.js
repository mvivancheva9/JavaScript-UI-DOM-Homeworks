/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve(){

  return function (selector, count) {
    function checkCount(count){
      if(count < 1){
        throw new Error('the count should not be less than 1');
      }
      if(count == 'null' || count == 'undefined'){
        throw new Error('the count is null or undefined');
      }
      if(count.length == 0){
        throw new Error('the count is missing');
      }
      if(isNaN(count)){
        throw new Error('count not a number');
      }
      if(typeof count == 'Object'){
        throw new Error('the entered count is obj');
      }
    }

    function checkSelector(item){
      if(typeof item != 'string'){
        throw new Error('the selector is of type array');
      }
    }

    function createElement(ul, count){
      var i;
      for (i = 0; i < count; i += 1){
        var li = $('<li />', {
          class: 'list-item',
          text: 'List item #' + i
        })
            .appendTo(ul);
      }
    }

    checkSelector(selector);
    checkCount(count);

    var ul = $('<ul />',{
    class: 'items-list',
    text: 'ul'})
      .appendTo(selector);

    createElement(ul, count);
  };
};

module.exports = solve;