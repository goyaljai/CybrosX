/**
* Dashboard controller
* @namespace crowdsource.dashboard.controllers
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.dashboard.controllers')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$window', '$location', '$scope', '$mdToast', 'Dashboard', '$filter', '$routeParams'];

  /**
  * @namespace DashboardController
  */
  function DashboardController($window, $location, $scope, $mdToast, Dashboard, $filter, $routeParams) {
      var self = this;
      self.getSavedTask = getSavedTask;

      //Just a simple example of how to get all tasks that are currently in progress
      //TODO display data in table
      activate();
      function activate() {
        Dashboard.getTasksByStatus().then(
          function success(data, status) {
            self.inProgressTaskWorkers = data[0]['In Progress'];
            self.acceptedTaskWorkers = data[0]['Accepted'];
            self.rejectedTaskWorkers = data[0]['Rejected'];
            self.returnedTaskWorkers = data[0]['Returned'];
          },
          function error(data,status) {
            $mdToast.showSimple('Could not retrieve your tasks');
          }).finally(function(){}
        );
      }

      //TODO process data as html upon click of inprogress task and allow worker to finish/delete task
      //Reroute to task feed or just stay in dashboard???
      function getSavedTask(task_worker_id) {
        Dashboard.getSavedTask(task_worker_id).then(
          function success(data, status) {
            console.log(data[0]);
          },
          function error(data, status) {
            console.log("error in getting saved task");
          }).finally(function () {

          });
      }

      function dropSavedTask(task_worker_id) {
        Dashboard.dropSavedTask(task_worker_id).then(
          function success(data, status) {
            console.log('success');
          },
          function error(data, status) {
            console.log("error in dropping saved task");
          }).finally(function () {

          });
      }
  }
})();