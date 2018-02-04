angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      onClick: '<',
      // videos: '<',
      video: '<',
    },
    controller: function() {
      // console.log('video list this:', $ctrl.videos);
      // this.videos = videos;
      // this.checkVideo;
      // this.$onInit = () => {
      //   console.log('videoPlayer this.video:', this.video);
      //   if (this.video) {
      //   console.log('there IS a video')
      //   this.checkVideo = "https://www.youtube.com/embed/" + this.video.id.videoId;
      // } else {
      //   this.checkVideo = "";
      //   console.log('there is no video bitch!');
      // }
      // }
      // if (this.video) {
      //   console.log('there is no video bitch!');
      //   this.checkVideo = "https://www.youtube.com/embed/" + this.video.id.videoId;
      // } else {
      //   this.checkVideo = ""
      //   console.log('there IS a video')
      // }
    },
    // templateUrl: 'src/templates/videoPlayer.html'
    template: `
      <div class="video-player">
        <div class="embed-responsive embed-responsive-16by9" ng-model="$ctrl.checkVideo">
          <iframe class="embed-responsive-item" src={{"https://www.youtube.com/embed/"+$ctrl.video.id.videoId}} allowFullScreen></iframe>
        </div>
        <div class="video-player-details">
          <h3>{{$ctrl.video.snippet.title}}</h3>
          <div>{{$ctrl.video.snippet.description}}</div>
        </div>
      </div>
    `
  })
