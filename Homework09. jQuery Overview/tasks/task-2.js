/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
   return function (selector) {

     function checkDomElement(selector) {

       if (typeof(selector) !== 'string') {
         throw Error('The selected element is not of type string');
       }
       var domElement = $(selector);
       if(!domElement.length){
         throw new Error('No such element');
       }
     }
    checkDomElement(selector);

    var buttons = $('.button')
        .text('hide')
        .on('click', function(){
          var clicked = $(this);
          var next = clicked.nextAll('.content').first();
          if (next.css('display') === 'none') {
            next.css('display', '');
            clicked.text('hide');
          }
          else {
            next.css('display', 'none');
            clicked.text('show');
          }
        });
  };
}

module.exports = solve;