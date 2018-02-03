angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    onClick: '<'
  },
  controller: function() {
    this.videos = window.exampleVideoData
  },
  templateUrl: 'src/templates/videoList.html'
});
