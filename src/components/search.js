angular.module('video-player')

  .component('search', {
    // TODO
    bindings: {
      onClick: '<',
      value: '='
    },
    controller: function() {
      // this.input = $('input').val()
    //  console.log('this:',this)
    },
    
    // templateUrl: 'src/templates/search.html'
    template: `
      <div class="search-bar form-inline">
        <input ng-model="$ctrl.value" class="form-control" type="text" ng-change="$ctrl.onClick($ctrl.value)" ng-model-options="{debounce: 500}"/>
        <button class="btn" ng-click="$ctrl.onClick($ctrl.value)">
          <span class="glyphicon glyphicon-search"></span>
        </button>
      </div>
    `
  });
