/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

  return function (element, contents) {
    var i,
        elem,
        len = contents.length,
        div,
        fragment,
        divToBeAdded;

    if(typeof(element) !== 'string' && !(element instanceof HTMLElement)){
      throw new Error('The entered element is neither string or existing DOM element');
    }
    if(!element){
      throw new Error('missing element parameter');
    }
    for(i = 0; i < len; i += 1) {
      if (typeof (contents[i]) != 'string' && typeof (contents[i]) != 'number') {
        throw new Error('The type of the contents should ne either a string or a number');
      }
    }
    if(!contents){
      throw new Error('missing contents parameter');
    }
    if (typeof(element) === 'string') {
      elem = document.getElementById(element)
    } else {
      elem = element;
    }

    elem.innerHTML = '';
    div = document.createElement('div');
    fragment = document.createDocumentFragment();

    for(i = 0; i < len; i += 1){
      divToBeAdded = div.cloneNode(true);
      divToBeAdded.innerHTML = contents[i];
      fragment.appendChild(divToBeAdded);
    }

    elem.appendChild(fragment);
  };
};