/**
 */

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
        $scope.renderers = [{
                id: 'area',
                name: 'Area'
            }, {
                id: 'line',
                name: 'Line'
            }, {
                id: 'bar',
                name: 'Bar'
            }, {
                id: 'scatterplot',
                name: 'Scatterplot'
            }];
        $scope.palettes = [
            'spectrum14',
            'spectrum2000',
            'spectrum2001',
            'colorwheel',
            'cool',
            'classic9',
            'munin'
        ];

        $scope.rendererChanged = function(id) {
            if (!$scope['options' + id]) {
                $scope['options' + id] = {};
            }
            $scope['options' + id].renderer = $scope['renderer' + id].id;
        };

        $scope.paletteChanged = function(id) {
            if (!$scope['features' + id]) {
                $scope['features' + id] = {};
            }
            $scope['features' + id].palette = $scope['palette' + id];
        };
        
        $scope.legendChanged = function(id) {
            if (!$scope['features' + id]) {
                $scope['features' + id] = {};
            }
            if ($scope['legend' + id]) {
                $scope['features' + id].legend = {
                    toggle: true,
                    highlight: true
                };
            }
            else {
                delete $scope['features' + id].legend;
            }
        }

        $scope.changeSeriesData = function(id) {
            var seriesList = [];
            for (var i = 0; i < 3; i++) {
                var series = {
                    name: 'Series ' + (i + 1),
                    data: []
                };
                for (var j = 0; j < 10; j++) {
                    series.data.push({x: j, y: Math.random() * 20});
                }
                seriesList.push(series);
                $scope['series' + id][i] = series;
            }
            //$scope['series' + id] = seriesList;
        };

        $scope.options1 = {
            renderer: 'area'
        };
        $scope.series1 = [{
                name: 'Series 1',
                color: 'steelblue',
                data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
            }, {
                name: 'Series 2',
                color: 'lightblue',
                data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
            }];

        $scope.options2 = {
            renderer: 'line'
        };
        $scope.features2 = {
            hover: {
                xFormatter: function(x) {
                    return 't=' + x;
                },
                yFormatter: function(y) {
                    return '$' + y;
                }
            }
        };
        $scope.series2 = [{
                name: 'Series 1',
                color: 'steelblue',
                data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
            }, {
                name: 'Series 2',
                color: 'lightblue',
                data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
            }];

        $scope.options3 = {
            renderer: 'bar'
        };
        $scope.features3 = {
            palette: 'colorwheel'
        };
        $scope.series3 = [{
                name: 'Series 1',
                data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
            }, {
                name: 'Series 2',
                data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
            }];

        $scope.options4 = {
            renderer: 'bar'
        };
        $scope.features4 = {
            palette: 'colorwheel',
            xAxis: {
                timeUnit: 'hour'
            }
        };
        $scope.series4 = [{
                name: 'Series 1',
                data: [{x: 0 * 60, y: 230}, {x: 30 * 60, y: 1500}, {x: 60 * 60, y: 790}, {x: 90 * 60, y: 310}, {x: 120 * 60, y: 600}]
            }, {
                name: 'Series 2',
                data: [{x: 0 * 60, y: 300}, {x: 30 * 60, y: 2000}, {x: 60 * 60, y: 640}, {x: 90 * 60, y: 500}, {x: 120 * 60, y: 150}]
            }];

        $scope.options5 = {
            renderer: 'bar'
        };
        $scope.features5 = {
            palette: 'colorwheel',
            yAxis: {
                tickFormat: 'formatKMBT'
            }
        };
        $scope.series5 = [{
                name: 'Series 1',
                data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
            }, {
                name: 'Series 2',
                data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
            }];

        $scope.options6 = {
            renderer: 'line'
        };
        $scope.features6 = {
            palette: 'colorwheel',
            legend: {
                toggle: true,
                highlight: true
            }
        };
        $scope.series6 = [{
                name: 'Series 1',
                data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
            },
            {
                name: 'Series 2',
                data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
            }];

        $scope.series0 = [];

        $scope.options0 = {
            renderer: 'area'
        };
        $scope.renderer0 = $scope.renderers[0];
        $scope.palette0 = $scope.palettes[0];

        $scope.rendererChanged(0);
        $scope.paletteChanged(0);
        $scope.changeSeriesData(0);
    }]);