module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/proj/StdViewManager.ts",
            "test/StdViewManager.ts"
        ],
        preprocessors: {
            "src/proj/StdViewManager.ts": ["karma-typescript"]
        },
        reporters: ["progress", "dots", "html", "karma-typescript"],
        htmlReporter: {
            outputFile: "test/test-results.html"
        },
        mime: {
            "text/x-typescript": ["ts", "tsx"]
        },
        port: 9876,  // karma web server port
        colors: true,
        client: {
            clearContext: false
        },
        logLevel: config.LOG_INFO,
        browsers: ["Chrome", "IE"],
        singleRun: true
    });
};
