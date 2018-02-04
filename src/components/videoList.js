angular.module('video-player')
  .component('videoList', {
    // TODO
    
    bindings: {
      onClick: '<',
      videos: '<'
    },
    controller: function() {
      // console.log('video list this:', $ctrl.videos);
      // this.videos = videos;
      this.$onInit = () => {
        console.log('videoList this.videos:', this.videos);
      }
     
       
      // debugger;
    },
    // templateUrl: 'src/templates/videoList.html'
    template: `
      <ul class="video-list">
        <video-list-entry videoselect="$ctrl.onClick" video="video" ng-repeat="video in $ctrl.videos"/>
      </ul>
    `
  });
