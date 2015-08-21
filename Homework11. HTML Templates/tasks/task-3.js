function solve(){
  return function(){
    $.fn.listview = function(data){
      var $this = $(this),
          templateHolderId = $this.attr('data-template'),
          templateHTML = $('#' + templateHolderId).html(),
          compiled = handlebars.compile(templateHTML),
          i,
          len = data.length;
      for(i = 0; i < len; i += 1){
        this.append(compiled(data[i]));
      }

      return this;
    };
  };
}

module.exports = solve;