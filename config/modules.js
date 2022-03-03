"use strict";

const fs = require("fs");
const path = require("path");
const paths = require("./paths");
const chalk = require("react-dev-utils/chalk");
const resolve = require("resolve");

/**
 * Get additional module paths based on the baseUrl of a compilerOptions object.
 *
 * @param {Object} options
 */
function getAdditionalModulePaths(options = {}) {
  const baseUrl = options.baseUrl;

  // We need to explicitly check for null and undefined (and not a falsy value) because
  // TypeScript treats an empty string as `.`.
  if (baseUrl == null) {
    // If there's no baseUrl set we respect NODE_PATH
    // Note that NODE_PATH is deprecated and will be removed
    // in the next major release of create-react-app.

    const nodePath = process.env.NODE_PATH || "";
    return nodePath.split(path.delimiter).filter(Boolean);
  }

  const baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  // We don't need to do anything if `baseUrl` is set to `node_modules`. This is
  // the default behavior.
  if (path.relative(paths.appNodeModules, baseUrlResolved) === "") {
    return null;
  }

  // Allow the user set the `baseUrl` to `appSrc`.
  if (path.relative(paths.appSrc, baseUrlResolved) === "") {
    return [paths.appSrc];
  }

  // If the path is equal to the root directory we ignore it here.
  // We don't want to allow importing from the root directly as source files are
  // not transpiled outside of `src`. We do allow importing them with the
  // absolute path (e.g. `src/Components/Button.js`) but we set that up with
  // an alias.
  if (path.relative(paths.appPath, baseUrlResolved) === "") {
    return null;
  }

  // Otherwise, throw an error.
  throw new Error(chalk.red.bold("Your project's `baseUrl` can only be set to `src` or `node_modules`." + " Create React App does not support other values at this time."));
}

/**
 * Get webpack aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getWebpackAliases(options = {}) {
  const baseUrl = options.baseUrl;

  if (!baseUrl) {
    return {};
  }

  const baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  if (path.relative(paths.appPath, baseUrlResolved) === "") {
    return {
      src: paths.appSrc,
    };
  }
}

/**
 * Get jest aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getJestAliases(options = {}) {
  const baseUrl = options.baseUrl;

  if (!baseUrl) {
    return {};
  }

  const baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  if (path.relative(paths.appPath, baseUrlResolved) === "") {
    return {
      "^src/(.*)$": "<rootDir>/src/$1",
    };
  }
}

function getTsAliases(options) {
  const { baseUrl, paths: tsPaths } = options;

  // baseUrl 값이 없으면 tsconfig.json 의 paths 가 제대로 적용되지 않는다.
  // 따라서 해당 값으로 aliases 를 설정할 필요도 없다.
  if (!baseUrl) {
    return {};
  }

  console.log(baseUrl);
  console.log(paths);
  const baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  //  앱의 루트 디렉토리와 baseUrl 이 동일한 디렉토리가 아니라면
  // alias를 설정하지 않는다.
  //  이는 `config/modules.js` 에서도 사용하는 예외처리인데,
  // convention over configuration 을 따르면서
  // 복잡한 예외 처리를 하지 않으려는 의도 같다.
  if (path.relative(paths.appPath, baseUrlResolved) !== "") {
    return {};
  }

  // `"components": ["src/components"],` 형태를
  // `"components": path.resolve(__dirname, `../src/components`)`
  // 형태로 변환
  return Object.keys(tsPaths).reduce((cfg, key) => {
    cfg[key] = path.resolve(__dirname, `../${tsPaths[key][0]}`);
    return cfg;
  }, {});
}

function getModules() {
  // Check if TypeScript is setup
  const hasTsConfig = fs.existsSync(paths.appTsConfig);
  const hasJsConfig = fs.existsSync(paths.appJsConfig);

  if (hasTsConfig && hasJsConfig) {
    throw new Error("You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file.");
  }

  let config;

  // If there's a tsconfig.json we assume it's a
  // TypeScript project and set up the config
  // based on tsconfig.json
  if (hasTsConfig) {
    const ts = require(resolve.sync("typescript", {
      basedir: paths.appNodeModules,
    }));
    config = ts.readConfigFile(paths.appTsConfig, ts.sys.readFile).config;
    // Otherwise we'll check if there is jsconfig.json
    // for non TS projects.
  } else if (hasJsConfig) {
    config = require(paths.appJsConfig);
  }

  config = config || {};
  const options = config.compilerOptions || {};

  const additionalModulePaths = getAdditionalModulePaths(options);

  return {
    additionalModulePaths: additionalModulePaths,
    webpackAliases: getWebpackAliases(options),
    tsConfigAliases: getTsAliases(options),
    jestAliases: getJestAliases(options),
    hasTsConfig,
  };
}

module.exports = getModules();
