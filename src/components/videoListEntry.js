angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      video: '<',
      videoselect: '<',
    },
    controller: function() {
      // this.selectVideo = () => {}
    },
    // templateUrl: 'src/templates/videoListEntry.html'
    template: `
      <li class="video-list-entry media">
        <div class="media-left">
          <img class="media-object" src={{$ctrl.video.snippet.thumbnails.default.url}} />
        </div>
        <div class="media-body">
          <div ng-click="$ctrl.videoselect($ctrl.video)" id={{$ctrl.video.id.videoId}} class="video-list-entry-title">{{$ctrl.video.snippet.title}}</div>
          <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
        </div>
    </li>
   `
  });
