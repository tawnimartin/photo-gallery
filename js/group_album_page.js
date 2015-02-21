var AlbumGroup = (function() {

	var template = JST["group_album_page"]

	function AlbumGroup(data) {
		this.data = data;
		
	}

	AlbumGroup.prototype = {

			render: function() {
				var $el = $( template() );

				_.each(this.data, function(album) {

					var myAlbum = new GroupAlbumThumbnail(album);

					$el.append( myAlbum.render() );

				});
				return $el;
		}

	};

	return AlbumGroup;

})();

