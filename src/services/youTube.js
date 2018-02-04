angular.module('video-player')

.service('youTube', function($http, $window) {
  this.bob = function(func, query) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 5,
      key: $window.YOUTUBE_API_KEY,
      videoEmbeddable: 'true'
    }
  }).then(function(data){
    func(data.data.items);
  })

  }
  
});