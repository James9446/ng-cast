angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      onClick: '<',
      video: '<'
    },
    controller: () => {
      // this.selectVideo = () => {}
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
