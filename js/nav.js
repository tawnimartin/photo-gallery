var Nav = (function() {

	var template = JST["nav"]

	function Nav(data) {
		this.data = data;
}

	Nav.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

	return Nav;

})();

var NavList = (function() {

	var template = JST["nav"]

	function NavList(data) {
	this.data = data;
	}

  NavList.prototype = {

			render: function() {
				var $el = $( template() );

				_.each(this.data, function(album) {

					var thumbnail = new Nav(album);
					$el.append( thumbnail.render() );

				});
				return $el;
		}

	};

  return NavList;

})();