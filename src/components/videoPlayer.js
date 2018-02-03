angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      onClick: '<',
      // videos: '<',
      video: '<'
    },
    controller: function() {
      // console.log('video list this:', $ctrl.videos);
      // this.videos = videos;
      this.$onInit = () => {
        console.log('videoPlayer this.video:', this.video);
      }
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
