
var NavList = (function() {
  var template = JST["nav_outer"]
  function NavList(data) {
  this.data = data;
  }
  NavList.prototype = {

      render: function() {
        var $el = $( template() );
        _.each(this.data, function(album) {
          var nav = new Nav(album);
          $el.append( nav.render() );
        });
        return $el;
    }
  };
  return NavList;
})();