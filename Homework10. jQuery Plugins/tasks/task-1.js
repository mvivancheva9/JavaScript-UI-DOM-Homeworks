function solve() {
    return function (selector) {
        var $selector = $(selector),
            $body = $('body'),
            $current = $('<div/>').addClass('current'),
            $options = $selector.find('option'),
            $optionsContainer = $('<div/>').addClass('options-container');
        var $dropdown = $('<div/>').addClass('dropdown-list');

        $selector.css({
            display: 'none'
        });
        $optionsContainer.css({
            position: 'absolute',
            display: 'none'
        });
        $current.text('Select a value');

        fillOptions($options);

        $current.append($optionsContainer);
        $dropdown.append($selector);
        $dropdown.append($current);
        $body.append($dropdown);

        $current.on('click', function(){
            if ($optionsContainer.css('display')=== 'none') {
                $optionsContainer.css('display','');
            }
            else {
                $optionsContainer.css('display','none');
            }
        });
        $optionsContainer.on('click', 'div', function(){
            var $this = $(this);
            $('.current').attr('data-value', $this.attr('data-value'));
            $('.current').text($this.text());
            $optionsContainer.css('display','none');

            $selector.val($this.attr('data-value'));
            $selector.attr('value', $selector.val());
        });


        function fillOptions($options){
            var indexOptions,
                len = $options.length;

            for(indexOptions = 0; indexOptions < len; indexOptions += 1){
                $('<div/>').addClass('dropdown-item')
                    .attr({
                        'data-value':  $($options[indexOptions]).val(),
                        'data-index': ''+indexOptions
                    })
                    .text('Option ' + (indexOptions+1))
                    .appendTo($optionsContainer);
            }

        }
    };
}

module.exports = solve;