(function() {
  angular.module('app').controller('mvCourseListCtrl', MvCourseListCtrl);
  MvCourseListCtrl.$inject = ['mvCachedCoursesSvc'];

  function MvCourseListCtrl(mvCachedCoursesSvc) {
    var vm = this;
    vm.model = {
      sortOptions: [{
        value: 'title',
        text: 'Sort by Title'
      }, {
        value: 'published',
        text: 'Sort by Publish Date'
      }],
      courses: []
    };
    vm.model.sortOrder = vm.model.sortOptions[0].value;

    init();
    function init() {
      var tempCourses = vm.model.courses = mvCachedCoursesSvc.getCoursesFromCache();
      if (tempCourses === undefined) {
        if (mvCachedCoursesSvc.getInitialDataStatus() === 'none') {
          //TODO: need to refactor
          mvCachedCoursesSvc.initialData();
          mvCachedCoursesSvc.query().$promise.then(function(data) {
            vm.model.courses = data;
          }, function(reason) {
            console.log(reason);
            vm.model.courses = [];
          });
        } else {
          vm.model.courses = [];
        }
      }
    }
  }
})();
