var path = require('path');

module.exports = function (config) {

    var filesCollection = [
        'node_modules/lodash/create.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-bootstrap/dist/ui-bootstrap.js',
        'node_modules/socket.io-client/socket.io.js',
        'public/main.js',
        'node_modules/sinon/pkg/sinon.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'tests/browser/**/*.js'
    ];

    var excludeFiles = [
        'tests/browser/karma.conf.js'
    ];

    var configObj = {
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai'],
        basePath: path.join(__dirname, '../../'),
        files: filesCollection,
        exclude: excludeFiles
    };

    config.set(configObj);

};