module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/*.ts" },
            { pattern: "test/*.ts"}
        ],
        preprocessors: {
            "./src/*.ts": ["karma-typescript"]
        },
        reporters: ["html", "karma-typescript"],
        htmlReporter: {
            outputFile: "./test/test-results.html"
        },
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ["Chrome", "IE"],
        autoWatch: false,
        singleRun: true
    });
};
