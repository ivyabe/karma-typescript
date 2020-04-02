## Prerequisite
Node is installed

## Setup
```bash
git clone https://github.com/ivyabe/karma-typescript.git
```

## Run Test
```bash
npm test
```

## Additional Note :)
If necessary, update karma.conf.js and tsconfig.json for the files you want to test.

<b>karma.conf.js</b>
```bash
module.exports = function(config) {
    config.set({
        ...
        files: [
            { pattern: "src/*.ts" }, //Update
        ],
        preprocessors: {
            "./src/*.ts": ["karma-typescript"] //Update
        },
        htmlReporter: {
            outputFile: "./test/test-results.html" //Update
        },
        ...
    });
};
```

<b>tsconfig.json</b>
```bash
{
  "compileOnSave": false,
  "compilerOptions": {
  ...
  },
  "include": [
     "./src/*.ts", //Update
     "test/src.ts" //Update
  ],
  ...
}
```
