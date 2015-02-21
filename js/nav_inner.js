var Nav = (function() {

	var template = JST["nav_inner"]

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