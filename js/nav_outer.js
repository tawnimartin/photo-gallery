
var NavList = (function() {
  var template = JST["nav_outer"]
  function NavList(data) {
  this.data = data;
  }

  NavList.prototype = {
      //removes whatever active classes are on lis
      //and finds the one that matches the group
      //and adds active
      select: function(groupName) {
      $el = $("ul");
      $el.find("li").removeClass("active");
      $el.find("li[data-group-name='"+ groupName +"']")
      .addClass("active");
    },

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