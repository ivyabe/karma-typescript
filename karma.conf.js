module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/enums.ts" },
            { pattern: "test/enums.ts"}
        ],
        preprocessors: {
            "src/enums.ts": ["karma-typescript"]
        },
        reporters: ["progress", "html", "karma-typescript"],
        htmlReporter: {
            outputFile: "test/test-results-enums.html"
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
        autoWatch: false,
        concurrency: Infinity,
        singleRun: true
    });
};
