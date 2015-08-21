/* globals $ */

/* 

Create a function that takes an id or DOM element and:

 If an id is provided, select the element
 Finds all elements with class button or content within the provided element
 Change the content of all .button elements with "hide"
 When a .button is clicked:
 Find the topmost .content element, that is before another .button and:
 If the .content is visible:
 Hide the .content
 Change the content of the .button to "show"
 If the .content is hidden:
 Show the .content
 Change the content of the .button to "hide"
 If there isn't a .content element after the clicked .button and before other .button, do nothing
 Throws if:
 The provided DOM element is non-existant
 The id is either not a string or does not select any DOM element
*/

function solve() {
    return function (selector,count) {
        function checkDomElement(selector,count) {

            if (typeof(selector) !== 'string') {
                throw 'invalid selector';
            }

            if(isNaN(count) || count < 1) {
                throw 'invalid count';
            }
        }

        function changeContent(change, element) {
            var i,
                len = element.length;
            for (i = 0; i < len; i += 1) {
                element[i].innerHTML = change;
            }
        }

        function buttonClicked(button) {
            button.addEventListener('click', manipulations, false);

            function manipulations(ev) {
                if (button.nextElementSibling.className === 'content') {
                    var content = button.nextElementSibling;
                    if (content.style.display === '') {
                        content.style.display = 'none';
                        button.innerHTML = 'show';
                    }
                    else if (content.style.display === 'none') {
                        content.style.display = '';
                        button.innerHTML = 'hide';
                    }
                }
            }
        }

      checkDomElement(selector,count);

      var buttons = document.getElementsByClassName('button');
      var content = document.getElementsByClassName('content');

      changeContent('hide', buttons);

      for (var i = 0, len = buttons.length; i < len; i += 1){
        var currentButton = buttons[i];
        buttonClicked(currentButton);
      }
    };
  };

module.exports = solve;