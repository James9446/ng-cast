angular.module('video-player')

  .component('app', {
    // TODO


    controller: function($window, $http, youTube) {
      this.videos = $window.exampleVideoData,
      this.currentVideo = this.videos[0],
      this.searchinput = ''

      this.selectVideo = () => {},
      this.videoselection = (video) => {

        this.currentVideo = video;
      },
      this.changeshit = (data)=> {
        this.videos = data;
      },
      this.searchResults= () => {
        youTube.bob(this.changeshit, this.searchinput);

      };
      

    },
    // templateUrl: 'src/templates/app.html'
    template: `
      <div id="app container">
        <nav class="navbar">
          <div class="col-md-6 col-md-offset-3">
            <search on-click="$ctrl.searchResults" ng-model="$ctrl.videos" value="$ctrl.searchinput" />
          </div>
        </nav>
        <div class="row">
          <div class="col-md-7">
            <video-player video="$ctrl.currentVideo"/>
          </div>
          <div class="col-md-5">
            <video-list on-click="$ctrl.videoselection" videos="$ctrl.videos" />
          </div>
        <div>
      </div>
    `
  });


