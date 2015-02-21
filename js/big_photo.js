var BigPhotoData = (function() {

	var template = JST["big_photo"]

	function BigPhotoData(data) {
		this.data = data;
	}

	BigPhotoData.prototype = {
		render: function() {
			return $( template(this.data) );

		}
	}

	return BigPhotoData;

})();