var AlbumGroup = (function() {

	var template = JST["group_album_page"]

	function AlbumGroup(data) {
		this.data = data;

	}

	AlbumGroup.prototype = {

			render: function() {

				var $el = $( template() );//building jq element, starting w template

				_.each(this.data, function(photo) {//for each object, or photo

					var myPhoto = new GroupAlbumThumbnail(photo);//instance of GroupAlbumThumbnail

					$el.append( myPhoto.render() );//call render, append to jq element

				});
				return $el;//return jq element
		},

		//for the title of the page - returns the group name
		renderTitle: function() {
			return this.data[0].album_name;
		}



	};

	return AlbumGroup;

})();

