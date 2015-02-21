var GroupAlbumThumbnail = (function() {

	var template = JST["group_album_thumbnail"]

	function GroupAlbumThumbnail(data) {
		this.data = data;
	}

	GroupAlbumThumbnail.prototype = {
		render: function() {
			return $( template(this.data) );

		}
	}

	return GroupAlbumThumbnail;

})();