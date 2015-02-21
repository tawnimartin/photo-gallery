var App = (function() {


	function App(data) {
		this.data = data;
		this.showAlbums();
		this.addListeners();
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

					//console.log("photo", photo);
					return photo.album_name === albumName;//grab the first photo of that album name

				});

				album.photo_name = photo.photo_name;
				album.photo_url = photo.photo_url;

			});

			return albumData;

		},

		//shows all the albums - cover page
		showAlbums: function() {
		var albumData = this.getAlbumData();
		var collection = new AlbumsCollection(albumData);
			
			$("body").html( collection.render() );
		},


		//shows all the photos of one album
		showAlbum: function(album) {

		//get data and filter out objects that match with album_name
		var appData = app.data;
		var albumData = appData.filter(function(currentItem) {
  	return currentItem.album_name === album;

		});

			//console.log(albumData)
			//AlbumGroup(albumData);

			//show photos in a particular group
      var ag = new AlbumGroup(albumData);
      $("body").html( ag.render() );
      //render title of the page
      $(".test").text( "My " + ag.renderTitle() + " Photos" );


		},


		showNav: function(album) {

			//get albumData from above - this app
			var albumData = this.getAlbumData();
			//instantiate navList - which is nav outer - which iself pulls in nav inner
			var nav = new NavList(albumData);
      $(".sidebar").html( nav.render() );


      //listener needs to be here, after sidebar is rendered
      $(".nav-list").on("click", ".inner-album-name", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var groupName = $clicked.data("group-name");
				alert("Thanks for clicking " + groupName);
      });

		},



		zoomPhoto: function(album) {
		//needs what photo to show
		//here's photo id would come in
		//data attribute of photo id
		//template that renders 

		},

		addListeners: function(album) {
		 //var app = this;
		 //click on album from main cover, showAlbum
		 $(".photos").on("click", ".photo", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var groupName = $clicked.data("group-name");
        app.showAlbum(groupName);
        app.showNav();
      });


		}


	}

	return App;

})();