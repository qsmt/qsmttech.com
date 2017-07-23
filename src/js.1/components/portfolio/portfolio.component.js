(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('qsmt')
        .component('portfolio', {
            template: require('./portfolio.component.html'),
            //templateUrl: 'templateUrl',
            controller: PortfolioController,
            bindings: {
                Binding: '=',
            },
        })
        .config(['$stateProvider', function($stateProvider) {
            const portfolio = {
                name: 'portfolio',
                url: '/portfolio',
                template: '<portfolio></portfolio>'
            };
            $stateProvider.state(portfolio);

        }]);

    PortfolioController.$inject = ['$scope', 'postsService'];

    function PortfolioController($scope, postsService) {
        var categoryId = 3;
        var $ctrl = this;
        $ctrl.currentPage = 1;
        $ctrl.pagesize = 6;
        $ctrl.loading = true;


        function updatePages() {
            $ctrl.totalpage = $ctrl.totalItems / $ctrl.pagesize;
        }

        function updateData() {
            $ctrl.loading = true;
            postsService.getPostsPaging(categoryId, $ctrl.currentPage, $ctrl.pagesize).then(function(response) {
                $ctrl.totalItems = response.headers('X-WP-Total');
                $ctrl.portfolios = response.data;
                updatePages();
                $ctrl.loading = false;
            })
        }

        $ctrl.pageChanged = function() {
            updateData();
        }

        ////////////////

        $ctrl.$onInit = function() {
            updateData();
        };
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();