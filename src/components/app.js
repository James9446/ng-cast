angular.module('video-player')

  .component('app', {
    // TODO
    // bindings: {
    //   videos: '<'
    // },

    controller: function($window) {
      this.selectVideo = () => {},
      this.searchResults = () => {},
      this.currentVideo = {},
      this.videos = $window.exampleVideoData;
      console.log('app.js this.videos:', this.videos)
    },
    templateUrl: 'src/templates/app.html'
  });


