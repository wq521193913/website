/**
 * Created by wq on 2016/4/29.
 */
var app = angular.module("app",[
    'ui.router',
    'oc.lazyLoad'
]).config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;
            app.constant   = $provide.constant;
            app.value      = $provide.value;
        }
    ]);
app.config(
    ['$stateProvider','$urlRouterProvider',
        function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise('/app');
            var pageList = routes.pageList;
            var prefix = routes.prefix;
            for (var i = 0;i< pageList.length;i++){
                var page = pageList[i];
                $stateProvider.state(page.serf,{
                    url:page.url,
                    templateUrl:prefix+page.templateUrl,
                    controller:page.controller,
                    resolve:{
                        deps:['$ocLazyLoad',function($ocLazyLoad){
                            if(undefined != page.lzLoadJs && "" != page.lzLoadJs){
                                return $ocLazyLoad.load(['js/'+page.lzLoadJs]);
                            }

                        }]
                    }
                })
            }
        }
    ]
);
