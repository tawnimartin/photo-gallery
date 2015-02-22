var App = (function() {

  function App(data) {
    this.data = data;
    this.showAlbums();
    this.addListeners();
  }

  App.prototype = {
    getAlbumData: function() {

      var albumData = _.chain(this.data)
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
      $(".test").text( ag.renderTitle() + "." );

      //listener for the small individual photos - calls zoomphoto
      $(".main").on("click", ".photo", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var myPhotoId = $clicked.data("photo-id");
        //call zoomPhoto
        app.zoomPhoto(myPhotoId);
      
      });
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
        $(".main").html( app.showAlbum(groupName) );
        //$(".sidebar").html( nav.render() );
        app.showNav();
      });
    },


    zoomPhoto: function(photoId) {
      //alert("my photo id is " + photoId);
      //out of all the data in this.data
      var photoData = _.find(this.data, function(photo) {
        //find the one where photo id = passed id, put in photoData
        return photo.photo_id === photoId;
      });

      //instantiate BigPhotoData, pass our photoData
      var myBigPhoto = new BigPhotoData(photoData);
      //console.log(myBigPhoto.render());
      $("body").html( myBigPhoto.render() );

      //listener for back btn
      $("body").on("click", ".back-btn", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var thisPhotoGroup = photoData.album_name;
        app.showAlbum(thisPhotoGroup);
        app.showNav(thisPhotoGroup);
      });
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