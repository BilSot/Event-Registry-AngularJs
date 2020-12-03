//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: '../../app',

        files: [
            'lib/angular/angular.js',
            'app.js',
            'index.html',
            '**/*.html',
            '../node_modules/angular-mocks/*.js',
            '../node_modules/angular-resource/angular-resource.js',
            '../node_modules/angular-route/angular-route.js',
            'js/**/*.js',
            'tests/units/*.js',
            'tests/lib/sinon-1.15.0.js'
        ],

        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            prependPrefix: '/'
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ]

    });
};
