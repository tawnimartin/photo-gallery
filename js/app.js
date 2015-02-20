var App = (function() {


	function App(data) {
		this.data = data;
		this.showAlbums();
	}


	App.prototype = {

		getAlbumData: function() {

			var albumData =	_.chain(this.data)
			.pluck("album_name")
			.uniq()
			.map(function(albumName) {
				return {album_name: albumName}; //album data is [{album_name:"Album A"}{...
			})
			.value();

	

			var app = this;

			_.each(albumData, function(album) {
				// {album_name: "Album A"}

				var albumName = album.album_name;

				//"Album A"
				var photo = _.find(app.data, function(photo) {

					console.log("photo", photo);
					return photo.album_name === albumName;//grab the first photo of that album name

				});

				album.photo_name = photo.photo_name;
				album.photo_url = photo.photo_url;

			});

			return albumData;

		},


		showAlbums: function() {
		var albumData = this.getAlbumData();
		var collection = new AlbumsCollection(albumData);
			
			$("body").html( collection.render() );
		},

		showAlbum: function(album) {
//needs what album to show



		},

		zoomPhoto: function(album) {
//needs what photo to show
//here's photo id would come in
//data attribute of photo id
//template that renders 

		},

		addListeners: function(album) {
//attach all the listeners
//event listener - grab that album name - put album name 
//data attr on link
//get album name off it 
//call show album and
//use filter - all my data by album name = this album
//template for this

		}
	}

	return App;

})();