// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Fqy1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gLLPy":[function(require,module,exports,__globalThis) {
var _webSocketClassJs = require("./modules/webSocketClass.js");
var _arbtriageSpreadJs = require("./modules/arbtriageSpread.js");
var _chartjsAdapterDateFns = require("chartjs-adapter-date-fns");
var _locale = require("date-fns/locale");
var _chartJs = require("chart.js");
(0, _chartJs.Chart).register((0, _chartJs.TimeScale), (0, _chartJs.LinearScale), (0, _chartJs.LineController), (0, _chartJs.LineElement), (0, _chartJs.PointElement));
const ctx = document.querySelector("#graph").getContext('2d');
// websockets
const binanceWS = new (0, _webSocketClassJs.binanceWebSocket)();
binanceWS.connect();
const coinbaseWS = new (0, _webSocketClassJs.coinbaseWebSocket)();
coinbaseWS.connect();
function updateData() {
    (0, _arbtriageSpreadJs.updateDashbord)(coinbaseWS.getPrice(), binanceWS.getPrice());
    setTimeout(updateData, 500);
    console.log(`The Spread is: ${(0, _arbtriageSpreadJs.getSpread)()}`);
}
updateData();
const spreadChart = new (0, _chartJs.Chart)(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Stock Price',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'second',
                    tooltipFormat: 'HH:mm:ss'
                },
                adapters: {
                    date: {
                        locale: (0, _locale.enUS)
                    }
                },
                parsing: false
            },
            y: {
                beginAtZero: false
            }
        }
    }
});
// Function to update the chart with new data
function updateChart(chart, label, data) {
    chart.data.labels.push(label); // Add new timestamp
    chart.data.datasets.forEach((dataset)=>{
        dataset.data.push(data); // Add new stock price
    });
    chart.update(); // Redraw the chart
}
setInterval(async ()=>{
    const latestSpread = (0, _arbtriageSpreadJs.getSpread)();
    const currentTime = new Date();
    updateChart(spreadChart, currentTime, latestSpread);
}, 3000);

},{"./modules/webSocketClass.js":"d0kGw","./modules/arbtriageSpread.js":"5fFNp","chartjs-adapter-date-fns":"hmLQz","date-fns/locale":"lASMG","chart.js":"ipU8D"}],"d0kGw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "binanceWebSocket", ()=>binanceWebSocket);
parcelHelpers.export(exports, "coinbaseWebSocket", ()=>coinbaseWebSocket);
const BinancePriceText = document.querySelector(".binBTCText");
const coinbasePriceText = document.querySelector(".coinBTCText");
class webSocketManager {
    constructor(url){
        this.url = url;
        this.ws = null;
        this._reconnectAttempts = 0;
        this._maxReconnectAttempts = 10;
        this._lastUpdated = 0;
        this._updateInterval = 100;
        this._price = 0;
    }
    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = ()=>this.onOpen();
        this.ws.onmessage = (event)=>this.onMessage(event);
        this.ws.onerror = (error)=>this.onError(error);
        this.ws.onclose = (event)=>this.onClose(event);
    }
    onOpen() {
        console.log(`Connected to ${this.url}`);
        this._reconnectAttempts = 0; // Reset attempts on successful connection
    }
    onError(error) {
        console.error("WebSocket error: ", error);
        this.ws.close();
    }
    onClose() {
        console.warn("WebSocket has closed");
        if (this._reconnectAttempts < this._maxReconnectAttempts) {
            let retryDelay = Math.min(5000 * (this._reconnectAttempts + 1), 30000);
            setTimeout(()=>this.connect(), retryDelay);
            this._reconnectAttempts++;
        } else console.warn("Could not reconnect to WebSocket");
    }
    getPrice() {
        return this._price;
    }
}
class binanceWebSocket extends webSocketManager {
    constructor(){
        super('wss://stream.binance.us:9443/ws/btcusdt@ticker');
    }
    onMessage(event) {
        const data = JSON.parse(event.data);
        const currentTime = Date.now();
        if (currentTime - this._lastUpdated > this._updateInterval) {
            if (data.e === "24hrTicker") {
                BinancePriceText.textContent = parseFloat(data.c).toFixed(2);
                this._price = parseFloat(data.c).toFixed(2);
                this._lastUpdated = currentTime;
            }
        }
    }
}
class coinbaseWebSocket extends webSocketManager {
    constructor(){
        super("wss://ws-feed.exchange.coinbase.com");
    }
    onOpen() {
        console.log("Connected to Coinbase WebSocket");
        const subscribeMessage = {
            type: "subscribe",
            channels: [
                {
                    name: "ticker",
                    product_ids: [
                        "BTC-USDT"
                    ]
                }
            ]
        };
        this.ws.send(JSON.stringify(subscribeMessage));
    }
    onMessage(event) {
        const data = JSON.parse(event.data);
        const currentTime = Date.now();
        if (currentTime - this._lastUpdated > this._updateInterval) {
            if (data.type === "ticker") {
                coinbasePriceText.textContent = parseFloat(data.price).toFixed(2);
                this._price = parseFloat(data.price);
                this._lastUpdated = currentTime;
            }
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5fFNp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateDashbord", ()=>updateDashbord);
// Function to get the spread
parcelHelpers.export(exports, "getSpread", ()=>getSpread);
const alertText = document.querySelector(".alert");
const exchangeData = new Map([
    [
        "coinbasePrice",
        0
    ],
    [
        "binancePrice",
        0
    ],
    [
        "buyPrice",
        0
    ],
    [
        "sellPrice",
        0
    ]
]);
function updateDashbord(coinbasePrice, binancePrice) {
    exchangeData.set("coinbasePrice", coinbasePrice);
    exchangeData.set("binancePrice", binancePrice);
    if (coinbasePrice > binancePrice) {
        exchangeData.set("buyPrice", binancePrice);
        exchangeData.set("sellPrice", coinbasePrice);
    } else if (coinbasePrice < binancePrice) {
        exchangeData.set("buyPrice", coinbasePrice);
        exchangeData.set("sellPrice", binancePrice);
    } else {
        alertText.textContent = "No arbitrage opportunity.";
        return;
    }
    // Calculate spread after updating buyPrice & sellPrice
    let spread = (exchangeData.get("sellPrice") - exchangeData.get("buyPrice")) / exchangeData.get("buyPrice") * 100;
    alertText.textContent = `\u{1F514} Profit Opportunity: Buy at ${exchangeData.get("buyPrice")} and Sell at ${exchangeData.get("sellPrice")}. Spread: ${spread.toFixed(2)}%.`;
}
function getSpread() {
    let buyPrice = exchangeData.get("buyPrice");
    let sellPrice = exchangeData.get("sellPrice");
    if (buyPrice === 0) return 0; // Avoid division by zero
    return (sellPrice - buyPrice) / buyPrice * 100;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hmLQz":[function(require,module,exports,__globalThis) {
/*!
 * chartjs-adapter-date-fns v2.0.1
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */ var _chartJs = require("chart.js");
var _dateFns = require("date-fns");
const FORMATS = {
    datetime: 'MMM d, yyyy, h:mm:ss aaaa',
    millisecond: 'h:mm:ss.SSS aaaa',
    second: 'h:mm:ss aaaa',
    minute: 'h:mm aaaa',
    hour: 'ha',
    day: 'MMM d',
    week: 'PP',
    month: 'MMM yyyy',
    quarter: 'qqq - yyyy',
    year: 'yyyy'
};
(0, _chartJs._adapters)._date.override({
    _id: 'date-fns',
    formats: function() {
        return FORMATS;
    },
    parse: function(value, fmt) {
        if (value === null || typeof value === 'undefined') return null;
        const type = typeof value;
        if (type === 'number' || value instanceof Date) value = (0, _dateFns.toDate)(value);
        else if (type === 'string') {
            if (typeof fmt === 'string') value = (0, _dateFns.parse)(value, fmt, new Date(), this.options);
            else value = (0, _dateFns.parseISO)(value, this.options);
        }
        return (0, _dateFns.isValid)(value) ? value.getTime() : null;
    },
    format: function(time, fmt) {
        return (0, _dateFns.format)(time, fmt, this.options);
    },
    add: function(time, amount, unit) {
        switch(unit){
            case 'millisecond':
                return (0, _dateFns.addMilliseconds)(time, amount);
            case 'second':
                return (0, _dateFns.addSeconds)(time, amount);
            case 'minute':
                return (0, _dateFns.addMinutes)(time, amount);
            case 'hour':
                return (0, _dateFns.addHours)(time, amount);
            case 'day':
                return (0, _dateFns.addDays)(time, amount);
            case 'week':
                return (0, _dateFns.addWeeks)(time, amount);
            case 'month':
                return (0, _dateFns.addMonths)(time, amount);
            case 'quarter':
                return (0, _dateFns.addQuarters)(time, amount);
            case 'year':
                return (0, _dateFns.addYears)(time, amount);
            default:
                return time;
        }
    },
    diff: function(max, min, unit) {
        switch(unit){
            case 'millisecond':
                return (0, _dateFns.differenceInMilliseconds)(max, min);
            case 'second':
                return (0, _dateFns.differenceInSeconds)(max, min);
            case 'minute':
                return (0, _dateFns.differenceInMinutes)(max, min);
            case 'hour':
                return (0, _dateFns.differenceInHours)(max, min);
            case 'day':
                return (0, _dateFns.differenceInDays)(max, min);
            case 'week':
                return (0, _dateFns.differenceInWeeks)(max, min);
            case 'month':
                return (0, _dateFns.differenceInMonths)(max, min);
            case 'quarter':
                return (0, _dateFns.differenceInQuarters)(max, min);
            case 'year':
                return (0, _dateFns.differenceInYears)(max, min);
            default:
                return 0;
        }
    },
    startOf: function(time, unit, weekday) {
        switch(unit){
            case 'second':
                return (0, _dateFns.startOfSecond)(time);
            case 'minute':
                return (0, _dateFns.startOfMinute)(time);
            case 'hour':
                return (0, _dateFns.startOfHour)(time);
            case 'day':
                return (0, _dateFns.startOfDay)(time);
            case 'week':
                return (0, _dateFns.startOfWeek)(time);
            case 'isoWeek':
                return (0, _dateFns.startOfWeek)(time, {
                    weekStartsOn: +weekday
                });
            case 'month':
                return (0, _dateFns.startOfMonth)(time);
            case 'quarter':
                return (0, _dateFns.startOfQuarter)(time);
            case 'year':
                return (0, _dateFns.startOfYear)(time);
            default:
                return time;
        }
    },
    endOf: function(time, unit) {
        switch(unit){
            case 'second':
                return (0, _dateFns.endOfSecond)(time);
            case 'minute':
                return (0, _dateFns.endOfMinute)(time);
            case 'hour':
                return (0, _dateFns.endOfHour)(time);
            case 'day':
                return (0, _dateFns.endOfDay)(time);
            case 'week':
                return (0, _dateFns.endOfWeek)(time);
            case 'month':
                return (0, _dateFns.endOfMonth)(time);
            case 'quarter':
                return (0, _dateFns.endOfQuarter)(time);
            case 'year':
                return (0, _dateFns.endOfYear)(time);
            default:
                return time;
        }
    }
});

},{"chart.js":"ipU8D","date-fns":"9yHCA"}],"ipU8D":[function(require,module,exports,__globalThis) {
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Animations", ()=>Animations);
parcelHelpers.export(exports, "ArcElement", ()=>ArcElement);
parcelHelpers.export(exports, "BarController", ()=>BarController);
parcelHelpers.export(exports, "BarElement", ()=>BarElement);
parcelHelpers.export(exports, "BasePlatform", ()=>BasePlatform);
parcelHelpers.export(exports, "BasicPlatform", ()=>BasicPlatform);
parcelHelpers.export(exports, "BubbleController", ()=>BubbleController);
parcelHelpers.export(exports, "CategoryScale", ()=>CategoryScale);
parcelHelpers.export(exports, "Chart", ()=>Chart);
parcelHelpers.export(exports, "Colors", ()=>plugin_colors);
parcelHelpers.export(exports, "DatasetController", ()=>DatasetController);
parcelHelpers.export(exports, "Decimation", ()=>plugin_decimation);
parcelHelpers.export(exports, "DomPlatform", ()=>DomPlatform);
parcelHelpers.export(exports, "DoughnutController", ()=>DoughnutController);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "Filler", ()=>index);
parcelHelpers.export(exports, "Interaction", ()=>Interaction);
parcelHelpers.export(exports, "Legend", ()=>plugin_legend);
parcelHelpers.export(exports, "LineController", ()=>LineController);
parcelHelpers.export(exports, "LineElement", ()=>LineElement);
parcelHelpers.export(exports, "LinearScale", ()=>LinearScale);
parcelHelpers.export(exports, "LogarithmicScale", ()=>LogarithmicScale);
parcelHelpers.export(exports, "PieController", ()=>PieController);
parcelHelpers.export(exports, "PointElement", ()=>PointElement);
parcelHelpers.export(exports, "PolarAreaController", ()=>PolarAreaController);
parcelHelpers.export(exports, "RadarController", ()=>RadarController);
parcelHelpers.export(exports, "RadialLinearScale", ()=>RadialLinearScale);
parcelHelpers.export(exports, "Scale", ()=>Scale);
parcelHelpers.export(exports, "ScatterController", ()=>ScatterController);
parcelHelpers.export(exports, "SubTitle", ()=>plugin_subtitle);
parcelHelpers.export(exports, "Ticks", ()=>(0, _helpersSegmentJs.aL));
parcelHelpers.export(exports, "TimeScale", ()=>TimeScale);
parcelHelpers.export(exports, "TimeSeriesScale", ()=>TimeSeriesScale);
parcelHelpers.export(exports, "Title", ()=>plugin_title);
parcelHelpers.export(exports, "Tooltip", ()=>plugin_tooltip);
parcelHelpers.export(exports, "_adapters", ()=>adapters);
parcelHelpers.export(exports, "_detectPlatform", ()=>_detectPlatform);
parcelHelpers.export(exports, "animator", ()=>animator);
parcelHelpers.export(exports, "controllers", ()=>controllers);
parcelHelpers.export(exports, "defaults", ()=>(0, _helpersSegmentJs.d));
parcelHelpers.export(exports, "elements", ()=>elements);
parcelHelpers.export(exports, "layouts", ()=>layouts);
parcelHelpers.export(exports, "plugins", ()=>plugins);
parcelHelpers.export(exports, "registerables", ()=>registerables);
parcelHelpers.export(exports, "registry", ()=>registry);
parcelHelpers.export(exports, "scales", ()=>scales);
var _helpersSegmentJs = require("./chunks/helpers.segment.js");
var _color = require("@kurkle/color");
class Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart,
                initial: anims.initial,
                numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, _helpersSegmentJs.r).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, 'progress');
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, 'complete');
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), 'complete');
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var animator = /* #__PURE__ */ new Animator();
const transparent = 'transparent';
const interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, _helpersSegmentJs.c)(from || transparent);
        const c1 = c0.valid && (0, _helpersSegmentJs.c)(to || transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class Animation {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, _helpersSegmentJs.a)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, _helpersSegmentJs.a)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || interpolators[cfg.type || typeof from];
        this._easing = (0, _helpersSegmentJs.e)[cfg.easing] || (0, _helpersSegmentJs.e).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, _helpersSegmentJs.a)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, _helpersSegmentJs.a)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res,
                rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? 'res' : 'rej';
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
class Animations {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, _helpersSegmentJs.i)(config)) return;
        const animationOptions = Object.keys((0, _helpersSegmentJs.d).animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, _helpersSegmentJs.i)(cfg)) return;
            const resolved = {};
            for (const option of animationOptions)resolved[option] = cfg[option];
            ((0, _helpersSegmentJs.b)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === '$') continue;
            if (prop === 'options') {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            animator.add(this._chart, animations);
            return true;
        }
    }
}
function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function toClip(value) {
    let t, r, b, l;
    if ((0, _helpersSegmentJs.i)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === 'single';
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    let found = false;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            found = true;
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, _helpersSegmentJs.g)(otherValue) && (singleMode || value === 0 || (0, _helpersSegmentJs.s)(value) === (0, _helpersSegmentJs.s)(otherValue))) value += otherValue;
    }
    if (!found && !options.all) return 0;
    return value;
}
function convertObjectDataToArray(data, meta) {
    const { iScale, vScale } = meta;
    const iAxisKey = iScale.axis === 'x' ? 'x' : 'y';
    const vAxisKey = vScale.axis === 'x' ? 'x' : 'y';
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            [iAxisKey]: key,
            [vAxisKey]: data[key]
        };
    }
    return adata;
}
function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
    const { min, max, minDefined, maxDefined } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function updateStacks(controller, parsed) {
    const { chart, _cachedMeta: meta } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale, vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index, [vAxis]: value } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
        const visualValues = stack._visualValues || (stack._visualValues = {});
        visualValues[datasetIndex] = value;
    }
}
function getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
    return (0, _helpersSegmentJs.j)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index,
        mode: 'default',
        type: 'dataset'
    });
}
function createDataContext(parent, index, element) {
    return (0, _helpersSegmentJs.j)(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element,
        index,
        mode: 'default',
        type: 'data'
    });
}
function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
        if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) delete stacks[axis]._visualValues[datasetIndex];
    }
}
const isDirectUpdateMode = (mode)=>mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: getSortedDatasetIndices(chart, true),
        values: null
    };
class DatasetController {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled('filler')) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === 'x' ? x : axis === 'r' ? r : y;
        const xid = meta.xAxisID = (0, _helpersSegmentJs.v)(dataset.xAxisID, getFirstScaleId(chart, 'x'));
        const yid = meta.yAxisID = (0, _helpersSegmentJs.v)(dataset.yAxisID, getFirstScaleId(chart, 'y'));
        const rid = meta.rAxisID = (0, _helpersSegmentJs.v)(dataset.rAxisID, getFirstScaleId(chart, 'r'));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update('reset');
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, _helpersSegmentJs.u)(this._data, this);
        if (meta._stacked) clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, _helpersSegmentJs.i)(data)) {
            const meta = this._cachedMeta;
            this._data = convertObjectDataToArray(data, meta);
        } else if (_data !== data) {
            if (_data) {
                (0, _helpersSegmentJs.u)(_data, this);
                const meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, _helpersSegmentJs.l)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) {
            updateStacks(this, meta._parsed);
            meta._stacked = isStacked(meta.vScale, meta);
        }
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta, _data: data } = this;
        const { iScale, _stacked } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, _helpersSegmentJs.b)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, _helpersSegmentJs.i)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale, vScale } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale, yScale } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale, yScale } = meta;
        const { xAxisKey = 'x', yAxisKey = 'y' } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse((0, _helpersSegmentJs.f)(item, xAxisKey), index),
                y: yScale.parse((0, _helpersSegmentJs.f)(item, yAxisKey), index)
            };
        }
        return parsed;
    }
    getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
        return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]._visualValues
        };
        return applyStack(stack, value, meta.index, {
            mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, _helpersSegmentJs.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, _helpersSegmentJs.g)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
            value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || 'default');
        meta._clip = toClip((0, _helpersSegmentJs.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index, active) {
        const mode = active ? 'active' : 'default';
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = 'default', index) {
        const active = mode === 'active';
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + '-' + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, _helpersSegmentJs.h)(index);
        if (cached) return cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            'hover',
            elementType,
            ''
        ] : [
            elementType,
            ''
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, _helpersSegmentJs.d).elements[elementType]);
        const context = ()=>this.getContext(index, active, mode);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new Animations(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions,
            includeOptions
        };
    }
    updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, 'active', false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, 'active', true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, 'reset');
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            '_insertElements',
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            '_removeElements',
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            '_removeElements',
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            '_removeElements',
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            '_insertElements',
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            '_insertElements',
            0,
            arguments.length
        ]);
    }
}
function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, _helpersSegmentJs._)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, _helpersSegmentJs.h)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, _helpersSegmentJs.k)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio,
        start: ruler.pixels[index] - size / 2
    };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start
    };
}
function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart,
        barEnd,
        start: startValue,
        end: endValue,
        min,
        max
    };
}
function parseValue(entry, item, vScale, i) {
    if ((0, _helpersSegmentJs.b)(entry)) parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, _helpersSegmentJs.s)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = 'left';
        end = 'right';
    } else {
        reverse = properties.base < properties.y;
        start = 'bottom';
        end = 'top';
    }
    if (reverse) {
        top = 'end';
        bottom = 'start';
    } else {
        top = 'start';
        bottom = 'end';
    }
    return {
        start,
        end,
        reverse,
        top,
        bottom
    };
}
function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start, end, reverse, top, bottom } = borderProps(properties);
    if (edge === 'middle' && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) edge = top;
        else if ((stack._bottom || 0) === index) edge = bottom;
        else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = swap(edge, a, b);
        edge = startEnd(edge, b, a);
    } else edge = startEnd(edge, a, b);
    return edge;
}
function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
    return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, { inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
    static id = 'bar';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'base',
                    'width',
                    'height'
                ]
            }
        }
    };
    static overrides = {
        scales: {
            _index_: {
                type: 'category',
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: 'linear',
                beginAtZero: true
            }
        }
    };
    parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale, vScale } = meta;
        const { xAxisKey = 'x', yAxisKey = 'y' } = this._parsing;
        const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, _helpersSegmentJs.f)(obj, iAxisKey), i);
            parsed.push(parseValue((0, _helpersSegmentJs.f)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale, vScale } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
            value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === 'reset';
        const { index, _cachedMeta: { vScale } } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, _helpersSegmentJs.k)(parsed[vScale.axis]) ? {
                base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const { iScale } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const currentParsed = this._cachedMeta.controller.getParsed(dataIndex);
        const iScaleValue = currentParsed && currentParsed[iScale.axis];
        const skipNull = (meta)=>{
            const parsed = meta._parsed.find((item)=>item[iScale.axis] === iScaleValue);
            const val = parsed && parsed[meta.vScale.axis];
            if ((0, _helpersSegmentJs.k)(val) || isNaN(val)) return true;
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) continue;
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) stacks.push(meta.stack);
            if (meta.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || computeMinSampleSize(meta);
        return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale, _stacked, index: datasetIndex }, options: { base: baseValue, minBarLength } } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, _helpersSegmentJs.s)(value) !== (0, _helpersSegmentJs.s)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, _helpersSegmentJs.k)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
            if (_stacked && !floating) parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, _helpersSegmentJs.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size,
            base,
            head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, _helpersSegmentJs.v)(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null && !rects[i].hidden) rects[i].draw(this._ctx);
    }
}
class BubbleController extends DatasetController {
    static id = 'bubble';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'borderWidth',
                    'radius'
                ]
            }
        }
    };
    static overrides = {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersSegmentJs.v)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersSegmentJs.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale, yScale } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale, vScale } = this._cachedMeta;
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
    }
    resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== 'active') values.radius = 0;
        values.radius += (0, _helpersSegmentJs.v)(parsed && parsed._custom, radius);
        return values;
    }
}
function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, _helpersSegmentJs.T)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, _helpersSegmentJs.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, _helpersSegmentJs.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, _helpersSegmentJs.H), startY, endY);
        const minX = calcMin((0, _helpersSegmentJs.P), startX, endX);
        const minY = calcMin((0, _helpersSegmentJs.P) + (0, _helpersSegmentJs.H), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX,
        ratioY,
        offsetX,
        offsetY
    };
}
class DoughnutController extends DatasetController {
    static id = 'doughnut';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing'
                ]
            }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
    };
    static descriptors = {
        _scriptable: (name)=>name !== 'spacing',
        _indexable: (name)=>name !== 'spacing' && !name.startsWith('borderDash') && !name.startsWith('hoverBorderDash')
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle, color } } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, _helpersSegmentJs.i)(data[start])) {
                const { key = 'value' } = this._parsing;
                getter = (i)=>+(0, _helpersSegmentJs.f)(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i)meta._parsed[i] = getter(i);
        }
    }
    _getRotation() {
        return (0, _helpersSegmentJs.t)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, _helpersSegmentJs.t)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, _helpersSegmentJs.T);
        let max = -(0, _helpersSegmentJs.T);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, _helpersSegmentJs.m)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference, rotation } = this._getRotationExtents();
        const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, _helpersSegmentJs.n)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, _helpersSegmentJs.T));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle,
                endAngle: startAngle + circumference,
                circumference,
                outerRadius,
                innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, _helpersSegmentJs.T) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersSegmentJs.o)(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== 'inner') max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, _helpersSegmentJs.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
class LineController extends DatasetController {
    static id = 'line';
    static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: true,
        spanGaps: false
    };
    static overrides = {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line, data: points = [], _dataset } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start, count } = (0, _helpersSegmentJs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersSegmentJs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps, segment } = this.options;
        const maxGapLength = (0, _helpersSegmentJs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = (0, _helpersSegmentJs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
class PolarAreaController extends DatasetController {
    static id = 'polarArea';
    static defaults = {
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius'
                ]
            }
        },
        indexAxis: 'r',
        startAngle: 0
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle, color } } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: 'radialLinear',
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersSegmentJs.o)(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersSegmentJs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, _helpersSegmentJs.P);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) count++;
        });
        return count;
    }
    _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? (0, _helpersSegmentJs.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}
class PieController extends DoughnutController {
    static id = 'pie';
    static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    };
}
class RadarController extends DatasetController {
    static id = 'radar';
    static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: true,
        elements: {
            line: {
                fill: 'start'
            }
        }
    };
    static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    };
    getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: '' + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersSegmentJs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== 'resize') {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === 'reset';
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x,
                y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
class ScatterController extends DatasetController {
    static id = 'scatter';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        showLine: false,
        fill: false
    };
    static overrides = {
        interaction: {
            mode: 'point'
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale, yScale } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + ')'
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = [] } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start, count } = (0, _helpersSegmentJs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersSegmentJs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            if (!this.datasetElementType) this.addElements();
            const { dataset: line, _dataset } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options
            }, mode);
        } else if (this.datasetElementType) {
            delete meta.dataset;
            this.datasetElementType = false;
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine } = this.options;
        if (!this.datasetElementType && showLine) this.datasetElementType = this.chart.registry.getElement('line');
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps, segment } = this.options;
        const maxGapLength = (0, _helpersSegmentJs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, _helpersSegmentJs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}
var controllers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: BarController,
    BubbleController: BubbleController,
    DoughnutController: DoughnutController,
    LineController: LineController,
    PieController: PieController,
    PolarAreaController: PolarAreaController,
    RadarController: RadarController,
    ScatterController: ScatterController
});
/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function abstract() {
    throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign(DateAdapterBase.prototype, members);
    }
    options;
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return abstract();
    }
    parse() {
        return abstract();
    }
    format() {
        return abstract();
    }
    add() {
        return abstract();
    }
    diff() {
        return abstract();
    }
    startOf() {
        return abstract();
    }
    endOf() {
        return abstract();
    }
}
var adapters = {
    _date: DateAdapterBase
};
function binarySearch(metaset, axis, value, intersect) {
    const { controller, data, _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, _helpersSegmentJs.A) : (0, _helpersSegmentJs.B);
        if (!intersect) return lookupMethod(data, axis, value);
        else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === 'function' && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index, data } = metasets[i];
        const { lo, hi } = binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index, j);
        }
    }
}
function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf('x') !== -1;
    const useY = axis.indexOf('y') !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !(0, _helpersSegmentJs.C)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element,
            datasetIndex,
            index
        });
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle, endAngle } = element.getProps([
            'startAngle',
            'endAngle'
        ], useFinalPosition);
        const { angle } = (0, _helpersSegmentJs.D)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, _helpersSegmentJs.p)(angle, startAngle, endAngle)) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element,
                    datasetIndex,
                    index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var Interaction = {
    evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || 'x';
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) elements.push({
                    element,
                    datasetIndex: meta.index,
                    index
                });
            });
            return elements;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentJs.z)(e, chart);
            return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
        }
    }
};
const STATIC_POSITIONS = [
    'left',
    'top',
    'right',
    'bottom'
];
function filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos, options: { stack, stackWeight = 1 } } = box);
        layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
        });
    }
    return layoutBoxes;
}
function buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack, pos, stackWeight } = wrap;
        if (!stack || !STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function setLayoutDims(layouts, params) {
    const stacks = buildStacks(layouts);
    const { vBoxMaxWidth, hBoxMaxHeight } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
    return {
        fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: filterByPosition(layoutBoxes, 'chartArea'),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
    const { pos, box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, _helpersSegmentJs.i)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        'left',
        'right'
    ]) : marginForPositions([
        'top',
        'bottom'
    ]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
        const { same, other } = updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x, y } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, _helpersSegmentJs.h)(stack.start)) y = stack.start;
            if (box.fullSize) setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height = chartArea.h * weight;
            const width = stack.size || box.width;
            if ((0, _helpersSegmentJs.h)(stack.start)) x = stack.start;
            if (box.fullSize) setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
            else setBoxDims(box, x, chartArea.top + stack.placed, width, height);
            stack.start = x;
            stack.placed += height;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var layouts = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || 'top';
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) chart.boxes.splice(index, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, _helpersSegmentJs.E)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, _helpersSegmentJs.F)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === 'function') box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        updateMaxPadding(maxPadding, (0, _helpersSegmentJs.E)(minPadding));
        const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        fitBoxes(boxes.fullSize, chartArea, params, stacks);
        fitBoxes(verticalBoxes, chartArea, params, stacks);
        if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) fitBoxes(verticalBoxes, chartArea, params, stacks);
        handleMaxPadding(chartArea);
        placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, _helpersSegmentJs.F)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class BasePlatform {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class BasicPlatform extends BasePlatform {
    acquireContext(item) {
        return item && item.getContext && item.getContext('2d') || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
};
const isNullOrEmpty = (value)=>value === null || value === '';
function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute('height');
    const renderWidth = canvas.getAttribute('width');
    canvas[EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || 'block';
    style.boxSizing = style.boxSizing || 'border-box';
    if (isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, _helpersSegmentJs.J)(canvas, 'width');
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if (isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === '') canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, _helpersSegmentJs.J)(canvas, 'height');
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const eventListenerOptions = (0, _helpersSegmentJs.K) ? {
    passive: true
} : false;
function addListener(node, type, listener) {
    if (node) node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
    if (chart && chart.canvas) chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x, y } = (0, _helpersSegmentJs.z)(event, chart);
    return {
        type,
        chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) return;
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) window.addEventListener('resize', onWindowResize);
    drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) window.removeEventListener('resize', onWindowResize);
}
function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, _helpersSegmentJs.I)(canvas);
    if (!container) return;
    const resize = (0, _helpersSegmentJs.L)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === 'resize') unlistenDevicePixelRatioChanges(chart);
}
function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, _helpersSegmentJs.L)((event)=>{
        if (chart.ctx !== null) listener(fromNativeEvent(event, chart));
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
}
class DomPlatform extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext('2d');
        if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[EXPANDO_KEY]) return false;
        const initial = canvas[EXPANDO_KEY].initial;
        [
            'height',
            'width'
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, _helpersSegmentJs.k)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
        };
        const handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
        };
        const handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, _helpersSegmentJs.G)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = canvas && (0, _helpersSegmentJs.I)(canvas);
        return !!(container && container.isConnected);
    }
}
function _detectPlatform(canvas) {
    if (!(0, _helpersSegmentJs.M)() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) return BasicPlatform;
    return DomPlatform;
}
class Element {
    static defaults = {};
    static defaultRoutes = undefined;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
        const { x, y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    hasValue() {
        return (0, _helpersSegmentJs.x)(this.x) && (0, _helpersSegmentJs.x)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) // let's not create an object, if not needed
        return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        skip(ticks, newTicks, spacing, (0, _helpersSegmentJs.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        skip(ticks, newTicks, spacing, last, (0, _helpersSegmentJs.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
}
function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, _helpersSegmentJs.N)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, _helpersSegmentJs.v)(majorStart, 0);
    const end = Math.min((0, _helpersSegmentJs.v)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const reverseAlign = (align)=>align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset)=>edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
const getTicksLimit = (ticksLength, maxTicksLimit)=>Math.min(maxTicksLimit || ticksLength, ticksLength);
function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function garbageCollect(caches, length) {
    (0, _helpersSegmentJs.F)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, _helpersSegmentJs.a0)(options.font, fallback);
    const padding = (0, _helpersSegmentJs.E)(options.padding);
    const lines = (0, _helpersSegmentJs.b)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
    return (0, _helpersSegmentJs.j)(parent, {
        scale,
        type: 'scale'
    });
}
function createTickContext(parent, index, tick) {
    return (0, _helpersSegmentJs.j)(parent, {
        tick,
        index,
        type: 'tick'
    });
}
function titleAlign(align, position, reverse) {
    let ret = (0, _helpersSegmentJs.a1)(align);
    if (reverse && position !== 'right' || !reverse && position === 'right') ret = reverseAlign(ret);
    return ret;
}
function titleArgs(scale, offset, position, align) {
    const { top, left, bottom, right, chart } = scale;
    const { chartArea, scales } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, _helpersSegmentJs.a2)(align, left, right);
        if ((0, _helpersSegmentJs.i)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === 'center') titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, _helpersSegmentJs.i)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
        } else if (position === 'center') titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = offsetFromEdge(scale, position, offset);
        titleY = (0, _helpersSegmentJs.a2)(align, bottom, top);
        rotation = position === 'left' ? -(0, _helpersSegmentJs.H) : (0, _helpersSegmentJs.H);
    }
    return {
        titleX,
        titleY,
        maxWidth,
        rotation
    };
}
class Scale extends Element {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
        _userMin = (0, _helpersSegmentJs.O)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, _helpersSegmentJs.O)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, _helpersSegmentJs.O)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, _helpersSegmentJs.O)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, _helpersSegmentJs.O)(_userMin, _suggestedMin),
            max: (0, _helpersSegmentJs.O)(_userMax, _suggestedMax),
            minDefined: (0, _helpersSegmentJs.g)(_userMin),
            maxDefined: (0, _helpersSegmentJs.g)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min, max, minDefined, maxDefined } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min,
            max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, _helpersSegmentJs.O)(min, (0, _helpersSegmentJs.O)(max, min)),
            max: (0, _helpersSegmentJs.O)(max, (0, _helpersSegmentJs.O)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        return items;
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, _helpersSegmentJs.Q)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero, grace, ticks: tickOpts } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, _helpersSegmentJs.R)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, _helpersSegmentJs.Q)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, _helpersSegmentJs.Q)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, _helpersSegmentJs.Q)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        (0, _helpersSegmentJs.Q)(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        (0, _helpersSegmentJs.Q)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, _helpersSegmentJs.Q)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, _helpersSegmentJs.Q)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, _helpersSegmentJs.Q)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, _helpersSegmentJs.S)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, _helpersSegmentJs.U)(Math.min(Math.asin((0, _helpersSegmentJs.S)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, _helpersSegmentJs.S)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, _helpersSegmentJs.S)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, _helpersSegmentJs.Q)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, _helpersSegmentJs.Q)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first, last, widest, highest } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, _helpersSegmentJs.t)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align, padding }, position } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === 'start') paddingRight = last.width;
            else if (align === 'end') paddingLeft = first.width;
            else if (align !== 'inner') {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === 'start') {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === 'end') {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, _helpersSegmentJs.Q)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis, position } = this.options;
        return position === 'top' || position === 'bottom' || axis === 'x';
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, _helpersSegmentJs.k)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
        const { ctx, _longestTextCache: caches } = this;
        const widths = [];
        const heights = [];
        const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; i += increment){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, _helpersSegmentJs.k)(label) && !(0, _helpersSegmentJs.b)(label)) {
                width = (0, _helpersSegmentJs.V)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, _helpersSegmentJs.b)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, _helpersSegmentJs.k)(nestedLabel) && !(0, _helpersSegmentJs.b)(nestedLabel)) {
                    width = (0, _helpersSegmentJs.V)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, _helpersSegmentJs.W)(this._alignToPixels ? (0, _helpersSegmentJs.X)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min, max } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, _helpersSegmentJs.t)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== 'auto') return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid, position, border } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, _helpersSegmentJs.X)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === 'top') {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === 'bottom') {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === 'left') {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === 'right') {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === 'x') {
            if (position === 'center') borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === 'y') {
            if (position === 'center') borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, _helpersSegmentJs.v)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, _helpersSegmentJs.X)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1,
                ty1,
                tx2,
                ty2,
                x1,
                y1,
                x2,
                y2,
                width: lineWidth,
                color: lineColor,
                borderDash,
                borderDashOffset,
                tickWidth,
                tickColor,
                tickBorderDash,
                tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position, ticks: optionTicks } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align, crossAlign, padding, mirror } = optionTicks;
        const tl = getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, _helpersSegmentJs.t)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = 'middle';
        if (position === 'top') {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'bottom') {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'left') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === 'right') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (axis === 'x') {
            if (position === 'center') y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === 'y') {
            if (position === 'center') x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, _helpersSegmentJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                x = this.chart.scales[positionAxisID].getPixelForValue(value);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === 'y') {
            if (align === 'start') textBaseline = 'top';
            else if (align === 'end') textBaseline = 'bottom';
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, _helpersSegmentJs.b)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === 'inner') {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? 'right' : 'left';
                    else if (i === 0) tickTextAlign = !this.options.reverse ? 'left' : 'right';
                    else tickTextAlign = 'center';
                }
                if (position === 'top') {
                    if (crossAlign === 'near' || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === 'center') textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === 'near' || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === 'center') textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, _helpersSegmentJs.E)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case 'middle':
                        top -= height / 2;
                        break;
                    case 'bottom':
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case 'center':
                        left -= width / 2;
                        break;
                    case 'right':
                        left -= width;
                        break;
                    case 'inner':
                        if (i === ilen - 1) left -= width;
                        else if (i > 0) left -= width / 2;
                        break;
                }
                backdrop = {
                    left,
                    top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                label,
                font,
                textOffset,
                options: {
                    rotation,
                    color,
                    strokeColor,
                    strokeWidth,
                    textAlign: tickTextAlign,
                    textBaseline,
                    translation: [
                        x,
                        y
                    ],
                    backdrop
                }
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position, ticks } = this.options;
        const rotation = -(0, _helpersSegmentJs.t)(this.labelRotation);
        if (rotation) return position === 'top' ? 'left' : 'right';
        let align = 'center';
        if (ticks.align === 'start') align = 'left';
        else if (ticks.align === 'end') align = 'right';
        else if (ticks.align === 'inner') align = 'inner';
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position, ticks: { crossAlign, mirror, padding } } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === 'left') {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === 'near') textAlign = 'left';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === 'near') textAlign = 'right';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x = this.left;
                }
            }
        } else if (position === 'right') {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === 'near') textAlign = 'right';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === 'near') textAlign = 'left';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x = this.right;
                }
            }
        } else textAlign = 'right';
        return {
            textAlign,
            x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === 'left' || position === 'right') return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === 'top' || position === 'bottom') return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx, options: { backgroundColor }, left, top, width, height } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart, ctx, options: { border, grid } } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, _helpersSegmentJs.X)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, _helpersSegmentJs.X)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, _helpersSegmentJs.X)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, _helpersSegmentJs.X)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, _helpersSegmentJs.Y)(ctx, area);
        const items = this.getLabelItems(chartArea);
        for (const item of items){
            const renderTextOptions = item.options;
            const tickFont = item.font;
            const label = item.label;
            const y = item.textOffset;
            (0, _helpersSegmentJs.Z)(ctx, label, 0, y, tickFont, renderTextOptions);
        }
        if (area) (0, _helpersSegmentJs.$)(ctx);
    }
    drawTitle() {
        const { ctx, options: { position, title, reverse } } = this;
        if (!title.display) return;
        const font = (0, _helpersSegmentJs.a0)(title.font);
        const padding = (0, _helpersSegmentJs.E)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === 'bottom' || position === 'center' || (0, _helpersSegmentJs.i)(position)) {
            offset += padding.bottom;
            if ((0, _helpersSegmentJs.b)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
        (0, _helpersSegmentJs.Z)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, _helpersSegmentJs.v)(opts.grid && opts.grid.z, -1);
        const bz = (0, _helpersSegmentJs.v)(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== Scale.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + 'AxisID';
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return (0, _helpersSegmentJs.a0)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if (isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + '.' + id;
        if (!id) throw new Error('class does not have id: ' + item);
        if (id in items) return scope;
        items[id] = item;
        registerDefaults(item, scope, parentScope);
        if (this.override) (0, _helpersSegmentJs.d).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, _helpersSegmentJs.d)[scope]) {
            delete (0, _helpersSegmentJs.d)[scope][id];
            if (this.override) delete (0, _helpersSegmentJs.a3)[id];
        }
    }
}
function registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, _helpersSegmentJs.a4)(Object.create(null), [
        parentScope ? (0, _helpersSegmentJs.d).get(parentScope) : {},
        (0, _helpersSegmentJs.d).get(scope),
        item.defaults
    ]);
    (0, _helpersSegmentJs.d).set(scope, itemDefaults);
    if (item.defaultRoutes) routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, _helpersSegmentJs.d).describe(scope, item.descriptors);
}
function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split('.');
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join('.');
        const parts = routes[property].split('.');
        const targetName = parts.pop();
        const targetScope = parts.join('.');
        (0, _helpersSegmentJs.d).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function isIChartComponent(proto) {
    return 'id' in proto && 'defaults' in proto;
}
class Registry {
    constructor(){
        this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
        this.elements = new TypedRegistry(Element, 'elements');
        this.plugins = new TypedRegistry(Object, 'plugins');
        this.scales = new TypedRegistry(Scale, 'scales');
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each('register', args);
    }
    remove(...args) {
        this._each('unregister', args);
    }
    addControllers(...args) {
        this._each('register', args, this.controllers);
    }
    addElements(...args) {
        this._each('register', args, this.elements);
    }
    addPlugins(...args) {
        this._each('register', args, this.plugins);
    }
    addScales(...args) {
        this._each('register', args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, 'controller');
    }
    getElement(id) {
        return this._get(id, this.elements, 'element');
    }
    getPlugin(id) {
        return this._get(id, this.plugins, 'plugin');
    }
    getScale(id) {
        return this._get(id, this.scales, 'scale');
    }
    removeControllers(...args) {
        this._each('unregister', args, this.controllers);
    }
    removeElements(...args) {
        this._each('unregister', args, this.elements);
    }
    removePlugins(...args) {
        this._each('unregister', args, this.plugins);
    }
    removeScales(...args) {
        this._each('unregister', args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, _helpersSegmentJs.F)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry, component) {
        const camelMethod = (0, _helpersSegmentJs.a5)(method);
        (0, _helpersSegmentJs.Q)(component['before' + camelMethod], [], component);
        registry[method](component);
        (0, _helpersSegmentJs.Q)(component['after' + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + '.');
        return item;
    }
}
var registry = /* #__PURE__ */ new Registry();
class PluginService {
    constructor(){
        this._init = [];
    }
    notify(chart, hook, args, filter) {
        if (hook === 'beforeInit') {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, 'install');
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === 'afterDestroy') {
            this._notify(descriptors, chart, 'stop');
            this._notify(this._init, chart, 'uninstall');
        }
        return result;
    }
    _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, _helpersSegmentJs.Q)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, _helpersSegmentJs.k)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, _helpersSegmentJs.v)(config.options && config.options.plugins, {});
        const plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
        this._notify(diff(descriptors, previousDescriptors), chart, 'start');
    }
}
function allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys(registry.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins.push(registry.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i = 0; i < local.length; i++){
        const plugin = local[i];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins,
        localIds
    };
}
function getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function createDescriptors(chart, { plugins, localIds }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin,
            options: pluginOpts(chart.config, {
                plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function pluginOpts(config, { plugin, local }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) scopes.push(plugin.defaults);
    return config.createResolver(scopes, context, [
        ''
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function getIndexAxis(type, options) {
    const datasetDefaults = (0, _helpersSegmentJs.d).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === '_index_') axis = indexAxis;
    else if (id === '_value_') axis = indexAxis === 'x' ? 'y' : 'x';
    return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? '_index_' : '_value_';
}
function idMatchesAxis(id) {
    if (id === 'x' || id === 'y' || id === 'r') return id;
}
function axisFromPosition(position) {
    if (position === 'top' || position === 'bottom') return 'x';
    if (position === 'left' || position === 'right') return 'y';
}
function determineAxis(id, ...scaleOptions) {
    if (idMatchesAxis(id)) return id;
    for (const opts of scaleOptions){
        const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
        if (axis) return axis;
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
}
function getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + 'AxisID'] === id) return {
        axis
    };
}
function retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
        const boundDs = config.data.datasets.filter((d)=>d.xAxisID === id || d.yAxisID === id);
        if (boundDs.length) return getAxisFromDataset(id, 'x', boundDs[0]) || getAxisFromDataset(id, 'y', boundDs[0]);
    }
    return {};
}
function mergeScaleConfig(config, options) {
    const chartDefaults = (0, _helpersSegmentJs.a3)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, _helpersSegmentJs.i)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), (0, _helpersSegmentJs.d).scales[scaleConf.type]);
        const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = (0, _helpersSegmentJs.ab)(Object.create(null), [
            {
                axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
        const datasetDefaults = (0, _helpersSegmentJs.a3)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + 'AxisID'] || axis;
            scales[id] = scales[id] || Object.create(null);
            (0, _helpersSegmentJs.ab)(scales[id], [
                {
                    axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        (0, _helpersSegmentJs.ab)(scale, [
            (0, _helpersSegmentJs.d).scales[scale.type],
            (0, _helpersSegmentJs.d).scale
        ]);
    });
    return scales;
}
function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, _helpersSegmentJs.v)(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        keyCache.set(cacheKey, keys);
        keysCached.add(keys);
    }
    return keys;
}
const addIfFound = (set, obj, key)=>{
    const opts = (0, _helpersSegmentJs.f)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class Config {
    constructor(config){
        this._config = initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ''
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options, type } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>addIfFound(scopes, options, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentJs.a3)[type] || {}, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentJs.d), key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentJs.a6), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if (keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options, type } = this;
        return [
            options,
            (0, _helpersSegmentJs.a3)[type] || {},
            (0, _helpersSegmentJs.d).datasets[type] || {},
            {
                type
            },
            (0, _helpersSegmentJs.d),
            (0, _helpersSegmentJs.a6)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ''
    ]) {
        const result = {
            $shared: true
        };
        const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if (needContext(resolver, names)) {
            result.$shared = false;
            context = (0, _helpersSegmentJs.a7)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, _helpersSegmentJs.a8)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ''
    ], descriptorDefaults) {
        const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
        return (0, _helpersSegmentJs.i)(context) ? (0, _helpersSegmentJs.a8)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, _helpersSegmentJs.a9)(scopes, prefixes);
        cached = {
            resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes('hover'))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const hasFunction = (value)=>(0, _helpersSegmentJs.i)(value) && Object.getOwnPropertyNames(value).some((key)=>(0, _helpersSegmentJs.a7)(value[key]));
function needContext(proxy, names) {
    const { isScriptable, isIndexable } = (0, _helpersSegmentJs.aa)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, _helpersSegmentJs.a7)(value) || hasFunction(value)) || indexable && (0, _helpersSegmentJs.b)(value)) return true;
    }
    return false;
}
var version = "4.4.7";
const KNOWN_POSITIONS = [
    'top',
    'bottom',
    'left',
    'right',
    'chartArea'
];
function positionIsHorizontal(position, axis) {
    return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins('afterRender');
    (0, _helpersSegmentJs.Q)(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    (0, _helpersSegmentJs.Q)(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
function getCanvas(item) {
    if ((0, _helpersSegmentJs.M)() && typeof item === 'string') item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const instances = {};
const getChart = (key)=>{
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c)=>c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === 'mouseout') return null;
    if (isClick) return lastEvent;
    return e;
}
function getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
}
function getDatasetArea(meta, chartArea) {
    const { xScale, yScale } = meta;
    if (xScale && yScale) return {
        left: getSizeForArea(xScale, chartArea, 'left'),
        right: getSizeForArea(xScale, chartArea, 'right'),
        top: getSizeForArea(yScale, chartArea, 'top'),
        bottom: getSizeForArea(yScale, chartArea, 'bottom')
    };
    return chartArea;
}
class Chart {
    static defaults = (0, _helpersSegmentJs.d);
    static instances = instances;
    static overrides = (0, _helpersSegmentJs.a3);
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
        registry.add(...items);
        invalidatePlugins();
    }
    static unregister(...items) {
        registry.remove(...items);
        invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new Config(userConfig);
        const initialCanvas = getCanvas(item);
        const existingChart = getChart(initialCanvas);
        if (existingChart) throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || _detectPlatform(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, _helpersSegmentJs.ac)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, _helpersSegmentJs.ad)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        animator.listen(this, 'complete', onAnimationsComplete);
        animator.listen(this, 'progress', onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
        if (!(0, _helpersSegmentJs.k)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return registry;
    }
    _initialize() {
        this.notifyPlugins('beforeInit');
        if (this.options.responsive) this.resize();
        else (0, _helpersSegmentJs.ae)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins('afterInit');
        return this;
    }
    clear() {
        (0, _helpersSegmentJs.af)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        animator.stop(this);
        return this;
    }
    resize(width, height) {
        if (!animator.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width,
            height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? 'resize' : 'attach';
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, _helpersSegmentJs.ae)(this, newRatio, true)) return;
        this.notifyPlugins('resize', {
            size: newSize
        });
        (0, _helpersSegmentJs.Q)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, _helpersSegmentJs.F)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = determineAxis(id, scaleOptions);
            const isRadial = axis === 'r';
            const isHorizontal = axis === 'x';
            return {
                options: scaleOptions,
                dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
                dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
            };
        }));
        (0, _helpersSegmentJs.F)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = (0, _helpersSegmentJs.v)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) scale = scales[id];
            else {
                const scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                    id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, _helpersSegmentJs.F)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales[id];
        });
        (0, _helpersSegmentJs.F)(scales, (scale)=>{
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets, data: { datasets } } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = '' + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = registry.getController(type);
                const { datasetElementType, dataElementType } = (0, _helpersSegmentJs.d).datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: registry.getElement(dataElementType),
                    datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, _helpersSegmentJs.F)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins('reset');
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins('beforeUpdate', {
            mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, _helpersSegmentJs.F)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins('afterUpdate', {
            mode
        });
        this._layers.sort(compare2Level('z', '_idx'));
        const { _active, _lastEvent } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, _helpersSegmentJs.F)(this.scales, (scale)=>{
            layouts.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, _helpersSegmentJs.ag)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method, start, count } of changes){
            const move = method === '_removeElements' ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + ',' + c.splice(1).join(',')));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!(0, _helpersSegmentJs.ag)(changeSet, makeSet(i))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(',')).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins('beforeLayout', {
            cancelable: true
        }) === false) return;
        layouts.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, _helpersSegmentJs.F)(this.boxes, (box)=>{
            if (noArea && box.position === 'chartArea') return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins('afterLayout');
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins('beforeDatasetsUpdate', {
            mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._updateDataset(i, (0, _helpersSegmentJs.a7)(mode) ? mode({
            datasetIndex: i
        }) : mode);
        this.notifyPlugins('afterDatasetsUpdate', {
            mode
        });
    }
    _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta,
            index,
            mode,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetUpdate', args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetUpdate', args);
    }
    render() {
        if (this.notifyPlugins('beforeRender', {
            cancelable: true
        }) === false) return;
        if (animator.has(this)) {
            if (this.attached && !animator.running(this)) animator.start(this);
        } else {
            this.draw();
            onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width, height } = this._resizeBeforeDraw;
            this._resizeBeforeDraw = null;
            this._resize(width, height);
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins('beforeDraw', {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = getDatasetArea(meta, this.chartArea);
        const args = {
            meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetDraw', args) === false) return;
        if (useClip) (0, _helpersSegmentJs.Y)(ctx, {
            left: clip.left === false ? 0 : area.left - clip.left,
            right: clip.right === false ? this.width : area.right + clip.right,
            top: clip.top === false ? 0 : area.top - clip.top,
            bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
        meta.controller.draw();
        if (useClip) (0, _helpersSegmentJs.$)(ctx);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetDraw', args);
    }
    isPointInArea(point) {
        return (0, _helpersSegmentJs.C)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = Interaction.modes[mode];
        if (typeof method === 'function') return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, _helpersSegmentJs.j)(null, {
            chart: this,
            type: 'chart'
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? 'show' : 'hide';
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, _helpersSegmentJs.h)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        animator.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas, ctx } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, _helpersSegmentJs.af)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete instances[this.id];
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, _helpersSegmentJs.F)(this.options.events, (type)=>_add(type, listener));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove('attach', attached);
            this.attached = true;
            this.resize();
            _add('resize', listener);
            _add('detach', detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove('resize', listener);
            this._stop();
            this._resize(0, 0);
            _add('attach', attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, _helpersSegmentJs.F)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, _helpersSegmentJs.F)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? 'set' : 'remove';
        let meta, item, i, ilen;
        if (mode === 'dataset') {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller['_' + prefix + 'DatasetHoverStyle']();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex, index })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error('No dataset found at index ' + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersSegmentJs.ah)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins('afterEvent', args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [], options } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, _helpersSegmentJs.ai)(e);
        const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, _helpersSegmentJs.Q)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, _helpersSegmentJs.Q)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, _helpersSegmentJs.ah)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === 'mouseout') return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function invalidatePlugins() {
    return (0, _helpersSegmentJs.F)(Chart.instances, (chart)=>chart._plugins.invalidate());
}
function clipArc(ctx, element, endAngle) {
    const { startAngle, pixelMargin, x, y, outerRadius, innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, _helpersSegmentJs.H), startAngle - (0, _helpersSegmentJs.H));
    ctx.closePath();
    ctx.clip();
}
function toRadiusCorners(value) {
    return (0, _helpersSegmentJs.ak)(value, [
        'outerStart',
        'outerEnd',
        'innerStart',
        'innerEnd'
    ]);
}
/**
 * Parse border radius from the provided options
 */ function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, _helpersSegmentJs.S)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, _helpersSegmentJs.S)(o.innerStart, 0, innerLimit),
        innerEnd: (0, _helpersSegmentJs.S)(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x, y, startAngle: start, pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, _helpersSegmentJs.P)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, _helpersSegmentJs.H));
        }
        // The line from point 3 to point 4
        const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + (0, _helpersSegmentJs.H), innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, _helpersSegmentJs.H));
        }
        // The line from point 7 to point 8
        const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - (0, _helpersSegmentJs.H), outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, _helpersSegmentJs.T) || (0, _helpersSegmentJs.T));
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference, options } = element;
    const { borderWidth, borderJoinStyle, borderDash, borderDashOffset } = options;
    const inner = options.borderAlign === 'inner';
    if (!borderWidth) return;
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || 'round';
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || 'bevel';
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.stroke();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, _helpersSegmentJs.T) || (0, _helpersSegmentJs.T));
    }
    if (inner) clipArc(ctx, element, endAngle);
    if (!fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class ArcElement extends Element {
    static id = 'arc';
    static defaults = {
        borderAlign: 'center',
        borderColor: '#fff',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash'
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        const { angle, distance } = (0, _helpersSegmentJs.D)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'circumference'
        ], useFinalPosition);
        const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
        const _circumference = (0, _helpersSegmentJs.v)(circumference, endAngle - startAngle);
        const nonZeroBetween = (0, _helpersSegmentJs.p)(angle, startAngle, endAngle) && startAngle !== endAngle;
        const betweenAngles = _circumference >= (0, _helpersSegmentJs.T) || nonZeroBetween;
        const withinRadius = (0, _helpersSegmentJs.aj)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x, y, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
            'x',
            'y',
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius'
        ], useFinalPosition);
        const { offset, spacing } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options, circumference } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
        this.fullCircles = circumference > (0, _helpersSegmentJs.T) ? Math.floor(circumference / (0, _helpersSegmentJs.T)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min((0, _helpersSegmentJs.P), circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        drawArc(ctx, this, radiusOffset, spacing, circular);
        drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}
function setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, _helpersSegmentJs.v)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, _helpersSegmentJs.v)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, _helpersSegmentJs.v)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, _helpersSegmentJs.v)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, _helpersSegmentJs.v)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, _helpersSegmentJs.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
    if (options.stepped) return 0, _helpersSegmentJs.ar;
    if (options.tension || options.cubicInterpolationMode === 'monotone') return 0, _helpersSegmentJs.as;
    return lineTo;
}
function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count,
        start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function pathSegment(ctx, line, segment, params) {
    const { points, options } = line;
    const { count, start, loop, ilen } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move = true, reverse } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count, start, ilen } = pathVars(points, segment, params);
    const { move = true, reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
    if (options.stepped) return 0, _helpersSegmentJs.ao;
    if (options.tension || options.cubicInterpolationMode === 'monotone') return 0, _helpersSegmentJs.ap;
    return 0, _helpersSegmentJs.aq;
}
function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
    const { segments, options } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments){
        setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) strokePathWithCache(ctx, line, start, count);
    else strokePathDirect(ctx, line, start, count);
}
class LineElement extends Element {
    static id = 'line';
    static defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: 'default',
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash' && name !== 'fill'
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, _helpersSegmentJs.al)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, _helpersSegmentJs.am)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, _helpersSegmentJs.an)(this, {
            property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = _getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start, end } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = _getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = _getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
    static id = 'point';
    parsed;
    skip;
    stop;
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x, y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, 'x', useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, 'y', useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x, y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, _helpersSegmentJs.C)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, _helpersSegmentJs.at)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}
function getBarBounds(bar, useFinalPosition) {
    const { x, y, base, width, height } = bar.getProps([
        'x',
        'y',
        'base',
        'width',
        'height'
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left,
        top,
        right,
        bottom
    };
}
function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : (0, _helpersSegmentJs.S)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = (0, _helpersSegmentJs.av)(value);
    return {
        t: skipOrLimit(skip.top, o.top, 0, maxH),
        r: skipOrLimit(skip.right, o.right, 0, maxW),
        b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius } = bar.getProps([
        'enableBorderRadius'
    ]);
    const value = bar.options.borderRadius;
    const o = (0, _helpersSegmentJs.aw)(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, _helpersSegmentJs.i)(value);
    return {
        topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, _helpersSegmentJs.aj)(x, bounds.left, bounds.right)) && (skipY || (0, _helpersSegmentJs.aj)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class BarElement extends Element {
    static id = 'bar';
    static defaults = {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: undefined
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount, options: { borderColor, backgroundColor } } = this;
        const { inner, outer } = boundingRects(this);
        const addRectPath = hasRadius(outer.radius) ? (0, _helpersSegmentJs.au) : addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill('evenodd');
        }
        ctx.beginPath();
        addRectPath(ctx, inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x, y, base, horizontal } = this.getProps([
            'x',
            'y',
            'base',
            'horizontal'
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === 'x' ? this.width / 2 : this.height / 2;
    }
}
var elements = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: ArcElement,
    BarElement: BarElement,
    LineElement: LineElement,
    PointElement: PointElement
});
const BORDER_COLORS = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */ BORDER_COLORS.map((color)=>color.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function getBorderColor(i) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);
    return ++i;
}
function colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBorderColor(i++));
    return i;
}
function colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBackgroundColor(i++));
    return i;
}
function getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex)=>{
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        if (controller instanceof DoughnutController) i = colorizeDoughnutDataset(dataset, i);
        else if (controller instanceof PolarAreaController) i = colorizePolarAreaDataset(dataset, i);
        else if (controller) i = colorizeDefaultDataset(dataset, i);
    };
}
function containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) return true;
    }
    return false;
}
function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
function containsDefaultColorsDefenitions() {
    return (0, _helpersSegmentJs.d).borderColor !== 'rgba(0,0,0,0.1)' || (0, _helpersSegmentJs.d).backgroundColor !== 'rgba(0,0,0,0.1)';
}
var plugin_colors = {
    id: 'colors',
    defaults: {
        enabled: true,
        forceOverride: false
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) return;
        const { data: { datasets }, options: chartOptions } = chart.config;
        const { elements } = chartOptions;
        const containsColorDefenition = containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements && containsColorsDefinitions(elements) || containsDefaultColorsDefenitions();
        if (!options.forceOverride && containsColorDefenition) return;
        const colorizer = getColorizer(chart);
        datasets.forEach(colorizer);
    }
};
function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx, y: pointAy } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, _helpersSegmentJs.k)(minIndex) && !(0, _helpersSegmentJs.k)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, 'data', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: data
        });
    }
}
function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        cleanDecimatedDataset(dataset);
    });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale } = meta;
    const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
    if (minDefined) start = (0, _helpersSegmentJs.S)((0, _helpersSegmentJs.B)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, _helpersSegmentJs.S)((0, _helpersSegmentJs.B)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start,
        count
    };
}
var plugin_decimation = {
    id: 'decimation',
    defaults: {
        algorithm: 'min-max',
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data, indexAxis } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, _helpersSegmentJs.a)([
                indexAxis,
                chart.options.indexAxis
            ]) === 'y') return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== 'linear' && xAxis.type !== 'time') return;
            if (chart.options.parsing) return;
            let { start, count } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, _helpersSegmentJs.k)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, 'data', {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case 'lttb':
                    decimated = lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case 'min-max':
                    decimated = minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        cleanDecimatedData(chart);
    }
};
function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start, end } = segment;
        end = _findSegmentEnd(start, end, points);
        const bounds = _getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, _helpersSegmentJs.an)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, _helpersSegmentJs.ax)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: _getEdge(bounds, subBounds, 'start', Math.max)
                },
                end: {
                    [property]: _getEdge(bounds, subBounds, 'end', Math.min)
                }
            });
        }
    }
    return parts;
}
function _getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === 'angle') {
        start = (0, _helpersSegmentJs.ay)(start);
        end = (0, _helpersSegmentJs.ay)(end);
    }
    return {
        property,
        start,
        end
    };
}
function _pointsFromSegments(boundary, line) {
    const { x = null, y = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start, end })=>{
        end = _findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y
            });
            points.push({
                x: last.x,
                y
            });
        } else if (x !== null) {
            points.push({
                x,
                y: first.y
            });
            points.push({
                x,
                y: last.y
            });
        }
    });
    return points;
}
function _findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function _getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, _helpersSegmentJs.b)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = _pointsFromSegments(boundary, line);
    return points.length ? new LineElement({
        points,
        options: {
            tension: 0
        },
        _loop,
        _fullLoop: _loop
    }) : null;
}
function _shouldApplyFill(source) {
    return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) return fill;
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!(0, _helpersSegmentJs.g)(fill)) return fill;
        target = sources[fill];
        if (!target) return false;
        if (target.visible) return fill;
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
function _decodeFill(line, index, count) {
    const fill = parseFillOption(line);
    if ((0, _helpersSegmentJs.i)(fill)) return isNaN(fill.value) ? false : fill;
    let target = parseFloat(fill);
    if ((0, _helpersSegmentJs.g)(target) && Math.floor(target) === target) return decodeTargetIndex(fill[0], index, target, count);
    return [
        'origin',
        'start',
        'end',
        'stack',
        'shape'
    ].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === '-' || firstCh === '+') target = index + target;
    if (target === index || target < 0 || target >= count) return false;
    return target;
}
function _getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === 'start') pixel = scale.bottom;
    else if (fill === 'end') pixel = scale.top;
    else if ((0, _helpersSegmentJs.i)(fill)) pixel = scale.getPixelForValue(fill.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function _getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === 'start') value = startValue;
    else if (fill === 'end') value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, _helpersSegmentJs.i)(fill)) value = fill.value;
    else value = scale.getBaseValue();
    return value;
}
function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = (0, _helpersSegmentJs.v)(fillOption && fillOption.target, fillOption);
    if (fill === undefined) fill = !!options.backgroundColor;
    if (fill === false || fill === null) return false;
    if (fill === true) return 'origin';
    return fill;
}
function _buildStackLine(source) {
    const { scale, index, line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new LineElement({
        points,
        options: {}
    });
}
function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas('line');
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first, last, point } = findPoint(line, sourcePoint, 'x');
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, _helpersSegmentJs.aj)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first,
        last,
        point
    };
}
class simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x, y, radius } = this;
        bounds = bounds || {
            start: 0,
            end: (0, _helpersSegmentJs.T)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x, y, radius } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
        };
    }
}
function _getTarget(source) {
    const { chart, fill, line } = source;
    if ((0, _helpersSegmentJs.g)(fill)) return getLineByIndex(chart, fill);
    if (fill === 'stack') return _buildStackLine(source);
    if (fill === 'shape') return true;
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) return boundary;
    return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return computeCircularBoundary(source);
    return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
    const { scale = {}, fill } = source;
    const pixel = _getTargetPixel(fill, scale);
    if ((0, _helpersSegmentJs.g)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function computeCircularBoundary(source) {
    const { scale, fill } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { line, scale, axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above = color, below = color } = fillOption || {};
    if (target && line.points.length) {
        (0, _helpersSegmentJs.Y)(ctx, area);
        doFill(ctx, {
            line,
            target,
            above,
            below,
            area,
            scale,
            axis
        });
        (0, _helpersSegmentJs.$)(ctx);
    }
}
function doFill(ctx, cfg) {
    const { line, target, above, below, area, scale } = cfg;
    const property = line._loop ? 'angle' : cfg.axis;
    ctx.save();
    if (property === 'x' && below !== above) {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
            line,
            target,
            color: above,
            scale,
            property
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
        line,
        target,
        color: below,
        scale,
        property
    });
    ctx.restore();
}
function clipVertical(ctx, target, clipY) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start, end } = segment;
        const firstPoint = points[start];
        const lastPoint = points[_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function fill(ctx, cfg) {
    const { line, target, property, color, scale } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src, target: tgt, start, end } of segments){
        const { style: { backgroundColor = color } = {} } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? 'evenodd' : 'nonzero');
        ctx.restore();
    }
}
function clipBounds(ctx, scale, bounds) {
    const { top, bottom } = scale.chart.chartArea;
    const { property, start, end } = bounds || {};
    if (property === 'x') {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var index = {
    id: 'filler',
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: _decodeFill(line, i, count),
                chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = _resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === 'beforeDraw';
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) _drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== 'beforeDatasetsDraw') return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) _drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') return;
        _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: 'beforeDatasetDraw'
    }
};
const getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth,
        boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, _helpersSegmentJs.Q)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options, ctx } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, _helpersSegmentJs.a0)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx, maxWidth, options: { labels: { padding } } } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top,
                row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx, maxHeight, options: { labels: { padding } } } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth, itemHeight } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left,
                top: currentColHeight,
                col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
        const rtlHelper = (0, _helpersSegmentJs.az)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox of hitboxes){
                if (hitbox.col !== col) {
                    col = hitbox.col;
                    top = (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox.top = top;
                hitbox.left += this.left + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
                top += hitbox.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, _helpersSegmentJs.Y)(ctx, this);
            this._draw();
            (0, _helpersSegmentJs.$)(ctx);
        }
    }
    _draw() {
        const { options: opts, columnSizes, lineWidths, ctx } = this;
        const { align, labels: labelOpts } = opts;
        const defaultColor = (0, _helpersSegmentJs.d).color;
        const rtlHelper = (0, _helpersSegmentJs.az)(opts.rtl, this.left, this.width);
        const labelFont = (0, _helpersSegmentJs.a0)(labelOpts.font);
        const { padding } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign('left');
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, _helpersSegmentJs.v)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, _helpersSegmentJs.v)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, _helpersSegmentJs.v)(legendItem.lineCap, 'butt');
            ctx.lineDashOffset = (0, _helpersSegmentJs.v)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, _helpersSegmentJs.v)(legendItem.lineJoin, 'miter');
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, _helpersSegmentJs.v)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, _helpersSegmentJs.v)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, _helpersSegmentJs.aD)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, _helpersSegmentJs.aw)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, _helpersSegmentJs.au)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, _helpersSegmentJs.Z)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, _helpersSegmentJs.aA)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, _helpersSegmentJs.a2)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, _helpersSegmentJs.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, _helpersSegmentJs.aB)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else if (typeof legendItem.text !== 'string') {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
            } else cursor.y += lineHeight;
        });
        (0, _helpersSegmentJs.aC)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, _helpersSegmentJs.a0)(titleOpts.font);
        const titlePadding = (0, _helpersSegmentJs.E)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, _helpersSegmentJs.az)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, _helpersSegmentJs.a2)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, _helpersSegmentJs.a2)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, _helpersSegmentJs.a2)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, _helpersSegmentJs.a1)(position));
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, _helpersSegmentJs.Z)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, _helpersSegmentJs.a0)(titleOpts.font);
        const titlePadding = (0, _helpersSegmentJs.E)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, _helpersSegmentJs.aj)(x, this.left, this.right) && (0, _helpersSegmentJs.aj)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, _helpersSegmentJs.aj)(x, hitBox.left, hitBox.left + hitBox.width) && (0, _helpersSegmentJs.aj)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, _helpersSegmentJs.Q)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, _helpersSegmentJs.Q)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, _helpersSegmentJs.Q)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth,
        itemHeight
    };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== 'string') legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== 'string') itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
    if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === 'click' || type === 'mouseup')) return true;
    return false;
}
var plugin_legend = {
    id: 'legend',
    _element: Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, legend, options);
        layouts.addBox(chart, legend);
    },
    stop (chart) {
        layouts.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        layouts.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: 'top',
        align: 'center',
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle, pointStyle, textAlign, color, useBorderRadius, borderRadius } } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, _helpersSegmentJs.E)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: 'center',
            text: ''
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith('on'),
        labels: {
            _scriptable: (name)=>![
                    'generateLabels',
                    'filter',
                    'sort'
                ].includes(name)
        }
    }
};
class Title extends Element {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, _helpersSegmentJs.b)(opts.text) ? opts.text.length : 1;
        this._padding = (0, _helpersSegmentJs.E)(opts.padding);
        const textSize = lineCount * (0, _helpersSegmentJs.a0)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === 'top' || pos === 'bottom';
    }
    _drawArgs(offset) {
        const { top, left, bottom, right, options } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, _helpersSegmentJs.a2)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === 'left') {
                titleX = left + offset;
                titleY = (0, _helpersSegmentJs.a2)(align, bottom, top);
                rotation = (0, _helpersSegmentJs.P) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, _helpersSegmentJs.a2)(align, top, bottom);
                rotation = (0, _helpersSegmentJs.P) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX,
            titleY,
            maxWidth,
            rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, _helpersSegmentJs.a0)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
        (0, _helpersSegmentJs.Z)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: (0, _helpersSegmentJs.a1)(opts.align),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function createTitle(chart, titleOpts) {
    const title = new Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
}
var plugin_title = {
    id: 'title',
    _element: Title,
    start (chart, _args, options) {
        createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'bold'
        },
        fullSize: true,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2000
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const map = new WeakMap();
var plugin_subtitle = {
    id: 'subtitle',
    start (chart, _args, options) {
        const title = new Title({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, title, options);
        layouts.addBox(chart, title);
        map.set(chart, title);
    },
    stop (chart) {
        layouts.removeBox(chart, map.get(chart));
        map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = map.get(chart);
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'normal'
        },
        fullSize: true,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let xSet = new Set();
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                xSet.add(pos.x);
                y += pos.y;
                ++count;
            }
        }
        if (count === 0 || xSet.size === 0) return false;
        const xAverage = [
            ...xSet
        ].reduce((a, b)=>a + b) / xSet.size;
        return {
            x: xAverage,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, _helpersSegmentJs.aE)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x,
            y
        };
    }
};
function pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, _helpersSegmentJs.b)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) return str.split('\n');
    return str;
}
function createTooltipItem(chart, item) {
    const { element, datasetIndex, index } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label, value } = controller.getLabelAndValue(index);
    return {
        chart,
        label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex,
        element
    };
}
function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body, footer, title } = tooltip;
    const { boxWidth, boxHeight } = options;
    const bodyFont = (0, _helpersSegmentJs.a0)(options.bodyFont);
    const titleFont = (0, _helpersSegmentJs.a0)(options.titleFont);
    const footerFont = (0, _helpersSegmentJs.a0)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, _helpersSegmentJs.E)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, _helpersSegmentJs.F)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, _helpersSegmentJs.F)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, _helpersSegmentJs.F)(body, (bodyItem)=>{
        (0, _helpersSegmentJs.F)(bodyItem.before, maxLineWidth);
        (0, _helpersSegmentJs.F)(bodyItem.lines, maxLineWidth);
        (0, _helpersSegmentJs.F)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, _helpersSegmentJs.F)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width,
        height
    };
}
function determineYAlign(chart, size) {
    const { y, height } = size;
    if (y < height / 2) return 'top';
    else if (y > chart.height - height / 2) return 'bottom';
    return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x, width } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === 'left' && x + width + caret > chart.width) return true;
    if (xAlign === 'right' && x - width - caret < 0) return true;
}
function determineXAlign(chart, options, size, yAlign) {
    const { x, width } = size;
    const { width: chartWidth, chartArea: { left, right } } = chart;
    let xAlign = 'center';
    if (yAlign === 'center') xAlign = x <= (left + right) / 2 ? 'left' : 'right';
    else if (x <= width / 2) xAlign = 'left';
    else if (x >= chartWidth - width / 2) xAlign = 'right';
    if (doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = 'center';
    return xAlign;
}
function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
        yAlign
    };
}
function alignX(size, xAlign) {
    let { x, width } = size;
    if (xAlign === 'right') x -= width;
    else if (xAlign === 'center') x -= width / 2;
    return x;
}
function alignY(size, yAlign, paddingAndSize) {
    let { y, height } = size;
    if (yAlign === 'top') y += paddingAndSize;
    else if (yAlign === 'bottom') y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize, caretPadding, cornerRadius } = options;
    const { xAlign, yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft, topRight, bottomLeft, bottomRight } = (0, _helpersSegmentJs.aw)(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === 'center') {
        if (xAlign === 'left') x += paddingAndSize;
        else if (xAlign === 'right') x -= paddingAndSize;
    } else if (xAlign === 'left') x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === 'right') x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, _helpersSegmentJs.S)(x, 0, chart.width - size.width),
        y: (0, _helpersSegmentJs.S)(y, 0, chart.height - size.height)
    };
}
function getAlignedX(tooltip, align, options) {
    const padding = (0, _helpersSegmentJs.E)(options.padding);
    return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, _helpersSegmentJs.j)(parent, {
        tooltip,
        tooltipItems,
        type: 'tooltip'
    });
}
function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
    beforeTitle: (0, _helpersSegmentJs.aF),
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === 'dataset') return item.dataset.label || '';
            else if (item.label) return item.label;
            else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
        }
        return '';
    },
    afterTitle: (0, _helpersSegmentJs.aF),
    beforeBody: (0, _helpersSegmentJs.aF),
    beforeLabel: (0, _helpersSegmentJs.aF),
    label (tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        let label = tooltipItem.dataset.label || '';
        if (label) label += ': ';
        const value = tooltipItem.formattedValue;
        if (!(0, _helpersSegmentJs.k)(value)) label += value;
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: (0, _helpersSegmentJs.aF),
    afterBody: (0, _helpersSegmentJs.aF),
    beforeFooter: (0, _helpersSegmentJs.aF),
    footer: (0, _helpersSegmentJs.aF),
    afterFooter: (0, _helpersSegmentJs.aF)
};
function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === 'undefined') return defaultCallbacks[name].call(ctx, arg);
    return result;
}
class Tooltip extends Element {
    static positioners = positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new Animations(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks } = options;
        const beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
        const title = invokeCallbackWithFallback(callbacks, 'title', this, context);
        const afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks } = options;
        const bodyItems = [];
        (0, _helpersSegmentJs.F)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', this, context)));
            pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', this, context));
            pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks } = options;
        const beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
        const footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
        const afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push(createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, _helpersSegmentJs.F)(tooltipItems, (context)=>{
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', this, context));
            labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', this, context));
            labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign, yAlign } = this;
        const { caretSize, cornerRadius } = options;
        const { topLeft, topRight, bottomLeft, bottomRight } = (0, _helpersSegmentJs.aw)(cornerRadius);
        const { x: ptX, y: ptY } = tooltipPoint;
        const { width, height } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === 'center') {
            y2 = ptY + height / 2;
            if (xAlign === 'left') {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === 'left') x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === 'right') x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === 'top') {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1,
            x2,
            x3,
            y1,
            y2,
            y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, _helpersSegmentJs.az)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = 'middle';
            titleFont = (0, _helpersSegmentJs.a0)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColor = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight, boxWidth } = options;
        const bodyFont = (0, _helpersSegmentJs.a0)(options.bodyFont);
        const colorX = getAlignedX(this, 'left', options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, _helpersSegmentJs.at)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColor.borderColor;
            ctx.fillStyle = labelColor.backgroundColor;
            (0, _helpersSegmentJs.at)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = (0, _helpersSegmentJs.i)(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
            ctx.strokeStyle = labelColor.borderColor;
            ctx.setLineDash(labelColor.borderDash || []);
            ctx.lineDashOffset = labelColor.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
            const borderRadius = (0, _helpersSegmentJs.aw)(labelColor.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, _helpersSegmentJs.au)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.beginPath();
                (0, _helpersSegmentJs.au)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body } = this;
        const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
        const bodyFont = (0, _helpersSegmentJs.a0)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, _helpersSegmentJs.az)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'middle';
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, _helpersSegmentJs.F)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, _helpersSegmentJs.F)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, _helpersSegmentJs.F)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, _helpersSegmentJs.F)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, _helpersSegmentJs.az)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = 'middle';
            footerFont = (0, _helpersSegmentJs.a0)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign, yAlign } = this;
        const { x, y } = pt;
        const { width, height } = tooltipSize;
        const { topLeft, topRight, bottomLeft, bottomRight } = (0, _helpersSegmentJs.aw)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === 'top') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === 'center' && xAlign === 'right') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === 'bottom') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === 'center' && xAlign === 'left') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, _helpersSegmentJs.E)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, _helpersSegmentJs.aA)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, _helpersSegmentJs.aC)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex, index })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error('Cannot find a dataset at index ' + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersSegmentJs.ah)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, _helpersSegmentJs.ah)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === 'mouseout') return [];
        if (!inChartArea) return lastActive.filter((i)=>this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== undefined);
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX, caretY, options } = this;
        const position = positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var plugin_tooltip = {
    id: 'tooltip',
    _element: Tooltip,
    positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new Tooltip({
            chart,
            options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip
            };
            if (chart.notifyPlugins('beforeTooltipDraw', {
                ...args,
                cancelable: true
            }) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins('afterTooltipDraw', args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: {
            weight: 'bold'
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: 'bold'
        },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: true,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: 'easeOutQuart'
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'width',
                    'height',
                    'caretX',
                    'caretY'
                ]
            },
            opacity: {
                easing: 'linear',
                duration: 200
            }
        },
        callbacks: defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: 'font',
        footerFont: 'font',
        titleFont: 'font'
    },
    descriptors: {
        _scriptable: (name)=>name !== 'filter' && name !== 'itemSort' && name !== 'external',
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: 'animation'
        }
    },
    additionalOptionScopes: [
        'interaction'
    ]
};
var plugins = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Colors: plugin_colors,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
});
const addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === 'string') {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index,
            label: raw
        });
    } else if (isNaN(raw)) index = null;
    return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return addIfString(labels, raw, index, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const validIndex = (index, max)=>index === null ? null : (0, _helpersSegmentJs.S)(Math.round(index), 0, max);
function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) return labels[value];
    return value;
}
class CategoryScale extends Scale {
    static id = 'category';
    static defaults = {
        ticks: {
            callback: _getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index, label } of added)if (labels[index] === label) labels.splice(index, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if ((0, _helpersSegmentJs.k)(raw)) return null;
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, (0, _helpersSegmentJs.v)(index, raw), this._addedLabels);
        return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined, maxDefined } = this.getUserBounds();
        let { min, max } = this.getMinMax(true);
        if (this.options.bounds === 'ticks') {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value
        });
        return ticks;
    }
    getLabelForValue(value) {
        return _getLabelForValue.call(this, value);
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== 'number') value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !(0, _helpersSegmentJs.k)(min);
    const maxDefined = !(0, _helpersSegmentJs.k)(max);
    const countDefined = !(0, _helpersSegmentJs.k)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, _helpersSegmentJs.aH)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, _helpersSegmentJs.aH)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, _helpersSegmentJs.k)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === 'ticks') {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, _helpersSegmentJs.aI)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, _helpersSegmentJs.aJ)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, _helpersSegmentJs.aK)(spacing), (0, _helpersSegmentJs.aK)(niceMin));
    factor = Math.pow(10, (0, _helpersSegmentJs.k)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, _helpersSegmentJs.aJ)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j){
        const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
        if (maxDefined && tickValue > max) break;
        ticks.push({
            value: tickValue
        });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, _helpersSegmentJs.aJ)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
    const rad = (0, _helpersSegmentJs.t)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ('' + value).length;
    return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, _helpersSegmentJs.k)(raw)) return null;
        if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero } = this.options;
        const { minDefined, maxDefined } = this.getUserBounds();
        let { min, max } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, _helpersSegmentJs.s)(min);
            const maxSign = (0, _helpersSegmentJs.s)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit, stepSize } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === 'ticks') (0, _helpersSegmentJs.aG)(ticks, this, 'value');
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, _helpersSegmentJs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class LinearScale extends LinearScaleBase {
    static id = 'linear';
    static defaults = {
        ticks: {
            callback: (0, _helpersSegmentJs.aL).formatters.numeric
        }
    };
    determineDataLimits() {
        const { min, max } = this.getMinMax(true);
        this.min = (0, _helpersSegmentJs.g)(min) ? min : 0;
        this.max = (0, _helpersSegmentJs.g)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, _helpersSegmentJs.t)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
const log10Floor = (v)=>Math.floor((0, _helpersSegmentJs.aM)(v));
const changeExponent = (v, m)=>Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
}
function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while(steps(min, max, rangeExp) > 10)rangeExp++;
    while(steps(min, max, rangeExp) < 10)rangeExp--;
    return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, { min, max }) {
    min = (0, _helpersSegmentJs.O)(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = (0, _helpersSegmentJs.O)(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value,
            major: isMajor(value),
            significand
        });
        if (significand >= 10) significand = significand < 15 ? 15 : 20;
        else significand++;
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = (0, _helpersSegmentJs.O)(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: isMajor(lastTick),
        significand
    });
    return ticks;
}
class LogarithmicScale extends Scale {
    static id = 'logarithmic';
    static defaults = {
        ticks: {
            callback: (0, _helpersSegmentJs.aL).formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, _helpersSegmentJs.g)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min, max } = this.getMinMax(true);
        this.min = (0, _helpersSegmentJs.g)(min) ? Math.max(0, min) : null;
        this.max = (0, _helpersSegmentJs.g)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        if (this._zero && this.min !== this._suggestedMin && !(0, _helpersSegmentJs.g)(this._userMin)) this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined, maxDefined } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(changeExponent(min, -1));
                setMax(changeExponent(max, 1));
            }
        }
        if (min <= 0) setMin(changeExponent(max, -1));
        if (max <= 0) setMax(changeExponent(min, 1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = generateTicks(generationOptions, this);
        if (opts.bounds === 'ticks') (0, _helpersSegmentJs.aG)(ticks, this, 'value');
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? '0' : (0, _helpersSegmentJs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, _helpersSegmentJs.aM)(start);
        this._valueRange = (0, _helpersSegmentJs.aM)(this.max) - (0, _helpersSegmentJs.aM)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, _helpersSegmentJs.aM)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, _helpersSegmentJs.E)(tickOpts.backdropPadding);
        return (0, _helpersSegmentJs.v)(tickOpts.font && tickOpts.font.size, (0, _helpersSegmentJs.d).font.size) + padding.height;
    }
    return 0;
}
function measureLabelSize(ctx, font, label) {
    label = (0, _helpersSegmentJs.b)(label) ? label : [
        label
    ];
    return {
        w: (0, _helpersSegmentJs.aN)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, _helpersSegmentJs.P) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, _helpersSegmentJs.a0)(opts.font);
        const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, _helpersSegmentJs.ay)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, _helpersSegmentJs.U)(angleRadians));
        const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function createPointLabelItem(scale, index, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra, additionalAngle, padding, size } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round((0, _helpersSegmentJs.U)((0, _helpersSegmentJs.ay)(pointLabelPosition.angle + (0, _helpersSegmentJs.H))));
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    return {
        visible: true,
        x: pointLabelPosition.x,
        y,
        textAlign,
        left,
        top: y,
        right: left + size.w,
        bottom: y + size.h
    };
}
function isNotOverlapped(item, area) {
    if (!area) return true;
    const { left, top, right, bottom } = item;
    const apexesInArea = (0, _helpersSegmentJs.C)({
        x: left,
        y: top
    }, area) || (0, _helpersSegmentJs.C)({
        x: left,
        y: bottom
    }, area) || (0, _helpersSegmentJs.C)({
        x: right,
        y: top
    }, area) || (0, _helpersSegmentJs.C)({
        x: right,
        y: bottom
    }, area);
    return !apexesInArea;
}
function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels, display } = opts.pointLabels;
    const itemOpts = {
        extra: getTickBackdropHeight(opts) / 2,
        additionalAngle: centerPointLabels ? (0, _helpersSegmentJs.P) / valueCount : 0
    };
    let area;
    for(let i = 0; i < valueCount; i++){
        itemOpts.padding = padding[i];
        itemOpts.size = labelSizes[i];
        const item = createPointLabelItem(scale, i, itemOpts);
        items.push(item);
        if (display === 'auto') {
            item.visible = isNotOverlapped(item, area);
            if (item.visible) area = item;
        }
    }
    return items;
}
function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return 'center';
    else if (angle < 180) return 'left';
    return 'right';
}
function leftForTextAlign(x, w, align) {
    if (align === 'right') x -= w;
    else if (align === 'center') x -= w / 2;
    return x;
}
function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function drawPointLabelBox(ctx, opts, item) {
    const { left, top, right, bottom } = item;
    const { backdropColor } = opts;
    if (!(0, _helpersSegmentJs.k)(backdropColor)) {
        const borderRadius = (0, _helpersSegmentJs.aw)(opts.borderRadius);
        const padding = (0, _helpersSegmentJs.E)(opts.backdropPadding);
        ctx.fillStyle = backdropColor;
        const backdropLeft = left - padding.left;
        const backdropTop = top - padding.top;
        const backdropWidth = right - left + padding.width;
        const backdropHeight = bottom - top + padding.height;
        if (Object.values(borderRadius).some((v)=>v !== 0)) {
            ctx.beginPath();
            (0, _helpersSegmentJs.au)(ctx, {
                x: backdropLeft,
                y: backdropTop,
                w: backdropWidth,
                h: backdropHeight,
                radius: borderRadius
            });
            ctx.fill();
        } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
    }
}
function drawPointLabels(scale, labelCount) {
    const { ctx, options: { pointLabels } } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const item = scale._pointLabelItems[i];
        if (!item.visible) continue;
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        drawPointLabelBox(ctx, optsAtIndex, item);
        const plFont = (0, _helpersSegmentJs.a0)(optsAtIndex.font);
        const { x, y, textAlign } = item;
        (0, _helpersSegmentJs.Z)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: 'middle'
        });
    }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, _helpersSegmentJs.T));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color, lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash || []);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function createPointLabelContext(parent, index, label) {
    return (0, _helpersSegmentJs.j)(parent, {
        label,
        index,
        type: 'pointLabel'
    });
}
class RadialLinearScale extends LinearScaleBase {
    static id = 'radialLinear';
    static defaults = {
        display: true,
        animate: true,
        position: 'chartArea',
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: (0, _helpersSegmentJs.aL).formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    };
    static descriptors = {
        angleLines: {
            _fallback: 'grid'
        }
    };
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, _helpersSegmentJs.E)(getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min, max } = this.getMinMax(false);
        this.min = (0, _helpersSegmentJs.g)(min) && !isNaN(min) ? min : 0;
        this.max = (0, _helpersSegmentJs.g)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = (0, _helpersSegmentJs.Q)(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : '';
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = (0, _helpersSegmentJs.T) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, _helpersSegmentJs.ay)(index * angleMultiplier + (0, _helpersSegmentJs.t)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, _helpersSegmentJs.k)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, _helpersSegmentJs.k)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - (0, _helpersSegmentJs.H) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left, top, right, bottom } = this._pointLabelItems[index];
        return {
            left,
            top,
            right,
            bottom
        };
    }
    drawBackground() {
        const { backgroundColor, grid: { circular } } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines, grid, border } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index)=>{
            if (index !== 0 || index === 0 && this.min < 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const context = this.getContext(index);
                const optsAtIndex = grid.setContext(context);
                const optsAtIndexBorder = border.setContext(context);
                drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color, lineWidth } = optsAtIndex;
                if (!lineWidth || !color) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && this.min >= 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = (0, _helpersSegmentJs.a0)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, _helpersSegmentJs.E)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, _helpersSegmentJs.Z)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color,
                strokeColor: optsAtIndex.textStrokeColor,
                strokeWidth: optsAtIndex.textStrokeWidth
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
const INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const UNITS = /* #__PURE__ */ Object.keys(INTERVALS);
function sorter(a, b) {
    return a - b;
}
function parse(scale, input) {
    if ((0, _helpersSegmentJs.k)(input)) return null;
    const adapter = scale._adapter;
    const { parser, round, isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === 'function') value = parser(value);
    if (!(0, _helpersSegmentJs.g)(value)) value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === 'week' && ((0, _helpersSegmentJs.x)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for(let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = INTERVALS[UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return UNITS[i];
    }
    return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--){
        const unit = UNITS[i];
        if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
    for(let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i){
        if (INTERVALS[UNITS[i]].common) return UNITS[i];
    }
}
function addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo, hi } = (0, _helpersSegmentJs.aP)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) ticks[index].major = true;
    }
    return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
    static id = 'time';
    static defaults = {
        bounds: 'data',
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: 'millisecond',
            displayFormats: {}
        },
        ticks: {
            source: 'auto',
            callback: false,
            major: {
                enabled: false
            }
        }
    };
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = 'day';
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
        adapter.init(opts);
        (0, _helpersSegmentJs.ab)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || 'day';
        let { min, max, minDefined, maxDefined } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') _applyBounds(this.getMinMax(false));
        }
        min = (0, _helpersSegmentJs.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, _helpersSegmentJs.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min,
            max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === 'ticks' && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, _helpersSegmentJs.aO)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, _helpersSegmentJs.S)(start, 0, limit);
        end = (0, _helpersSegmentJs.S)(end, 0, limit);
        this._offsets = {
            start,
            end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, _helpersSegmentJs.v)(options.ticks.stepSize, 1);
        const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, _helpersSegmentJs.x)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, 'isoWeek', weekday);
        first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
        const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)addTick(ticks, time, timestamps);
        if (time === max || options.bounds === 'ticks' || count === 1) addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort(sorter).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const fmt = format || formats[unit];
        return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) return (0, _helpersSegmentJs.Q)(formatter, [
            time,
            index,
            ticks
        ], this);
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, _helpersSegmentJs.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push(parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, _helpersSegmentJs._)(values.sort(sorter));
    }
}
function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo, hi } = (0, _helpersSegmentJs.B)(table, 'pos', val));
        ({ pos: prevSource, time: prevTarget } = table[lo]);
        ({ pos: nextSource, time: nextTarget } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo, hi } = (0, _helpersSegmentJs.B)(table, 'time', val));
        ({ time: prevSource, pos: prevTarget } = table[lo]);
        ({ time: nextSource, pos: nextTarget } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
    static id = 'timeseries';
    static defaults = TimeScale.defaults;
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = interpolate(table, this.min);
        this._tableRange = interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min, max } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _generate() {
        const min = this.min;
        const max = this.max;
        let timestamps = super.getDataTimestamps();
        if (!timestamps.includes(min) || !timestamps.length) timestamps.splice(0, 0, min);
        if (!timestamps.includes(max) || timestamps.length === 1) timestamps.push(max);
        return timestamps.sort((a, b)=>a - b);
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
var scales = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: CategoryScale,
    LinearScale: LinearScale,
    LogarithmicScale: LogarithmicScale,
    RadialLinearScale: RadialLinearScale,
    TimeScale: TimeScale,
    TimeSeriesScale: TimeSeriesScale
});
const registerables = [
    controllers,
    elements,
    plugins,
    scales
];

},{"./chunks/helpers.segment.js":"7oQuk","@kurkle/color":"2aojw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oQuk":[function(require,module,exports,__globalThis) {
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>unclipArea);
parcelHelpers.export(exports, "A", ()=>_rlookupByKey);
parcelHelpers.export(exports, "B", ()=>_lookupByKey);
parcelHelpers.export(exports, "C", ()=>_isPointInArea);
parcelHelpers.export(exports, "D", ()=>getAngleFromPoint);
parcelHelpers.export(exports, "E", ()=>toPadding);
parcelHelpers.export(exports, "F", ()=>each);
parcelHelpers.export(exports, "G", ()=>getMaximumSize);
parcelHelpers.export(exports, "H", ()=>HALF_PI);
parcelHelpers.export(exports, "I", ()=>_getParentNode);
parcelHelpers.export(exports, "J", ()=>readUsedSize);
parcelHelpers.export(exports, "K", ()=>supportsEventListenerOptions);
parcelHelpers.export(exports, "L", ()=>throttled);
parcelHelpers.export(exports, "M", ()=>_isDomSupported);
parcelHelpers.export(exports, "N", ()=>_factorize);
parcelHelpers.export(exports, "O", ()=>finiteOrDefault);
parcelHelpers.export(exports, "P", ()=>PI);
parcelHelpers.export(exports, "Q", ()=>callback);
parcelHelpers.export(exports, "R", ()=>_addGrace);
parcelHelpers.export(exports, "S", ()=>_limitValue);
parcelHelpers.export(exports, "T", ()=>TAU);
parcelHelpers.export(exports, "U", ()=>toDegrees);
parcelHelpers.export(exports, "V", ()=>_measureText);
parcelHelpers.export(exports, "W", ()=>_int16Range);
parcelHelpers.export(exports, "X", ()=>_alignPixel);
parcelHelpers.export(exports, "Y", ()=>clipArea);
parcelHelpers.export(exports, "Z", ()=>renderText);
parcelHelpers.export(exports, "_", ()=>_arrayUnique);
parcelHelpers.export(exports, "a", ()=>resolve);
parcelHelpers.export(exports, "a$", ()=>fontString);
parcelHelpers.export(exports, "a0", ()=>toFont);
parcelHelpers.export(exports, "a1", ()=>_toLeftRightCenter);
parcelHelpers.export(exports, "a2", ()=>_alignStartEnd);
parcelHelpers.export(exports, "a3", ()=>overrides);
parcelHelpers.export(exports, "a4", ()=>merge);
parcelHelpers.export(exports, "a5", ()=>_capitalize);
parcelHelpers.export(exports, "a6", ()=>descriptors);
parcelHelpers.export(exports, "a7", ()=>isFunction);
parcelHelpers.export(exports, "a8", ()=>_attachContext);
parcelHelpers.export(exports, "a9", ()=>_createResolver);
parcelHelpers.export(exports, "aA", ()=>overrideTextDirection);
parcelHelpers.export(exports, "aB", ()=>_textX);
parcelHelpers.export(exports, "aC", ()=>restoreTextDirection);
parcelHelpers.export(exports, "aD", ()=>drawPointLegend);
parcelHelpers.export(exports, "aE", ()=>distanceBetweenPoints);
parcelHelpers.export(exports, "aF", ()=>noop);
parcelHelpers.export(exports, "aG", ()=>_setMinAndMaxByKey);
parcelHelpers.export(exports, "aH", ()=>niceNum);
parcelHelpers.export(exports, "aI", ()=>almostWhole);
parcelHelpers.export(exports, "aJ", ()=>almostEquals);
parcelHelpers.export(exports, "aK", ()=>_decimalPlaces);
parcelHelpers.export(exports, "aL", ()=>Ticks);
parcelHelpers.export(exports, "aM", ()=>log10);
parcelHelpers.export(exports, "aN", ()=>_longestText);
parcelHelpers.export(exports, "aO", ()=>_filterBetween);
parcelHelpers.export(exports, "aP", ()=>_lookup);
parcelHelpers.export(exports, "aQ", ()=>isPatternOrGradient);
parcelHelpers.export(exports, "aR", ()=>getHoverColor);
parcelHelpers.export(exports, "aS", ()=>clone);
parcelHelpers.export(exports, "aT", ()=>_merger);
parcelHelpers.export(exports, "aU", ()=>_mergerIf);
parcelHelpers.export(exports, "aV", ()=>_deprecated);
parcelHelpers.export(exports, "aW", ()=>_splitKey);
parcelHelpers.export(exports, "aX", ()=>toFontString);
parcelHelpers.export(exports, "aY", ()=>splineCurve);
parcelHelpers.export(exports, "aZ", ()=>splineCurveMonotone);
parcelHelpers.export(exports, "a_", ()=>getStyle);
parcelHelpers.export(exports, "aa", ()=>_descriptors);
parcelHelpers.export(exports, "ab", ()=>mergeIf);
parcelHelpers.export(exports, "ac", ()=>uid);
parcelHelpers.export(exports, "ad", ()=>debounce);
parcelHelpers.export(exports, "ae", ()=>retinaScale);
parcelHelpers.export(exports, "af", ()=>clearCanvas);
parcelHelpers.export(exports, "ag", ()=>setsEqual);
parcelHelpers.export(exports, "ah", ()=>_elementsEqual);
parcelHelpers.export(exports, "ai", ()=>_isClickEvent);
parcelHelpers.export(exports, "aj", ()=>_isBetween);
parcelHelpers.export(exports, "ak", ()=>_readValueToProps);
parcelHelpers.export(exports, "al", ()=>_updateBezierControlPoints);
parcelHelpers.export(exports, "am", ()=>_computeSegments);
parcelHelpers.export(exports, "an", ()=>_boundSegments);
parcelHelpers.export(exports, "ao", ()=>_steppedInterpolation);
parcelHelpers.export(exports, "ap", ()=>_bezierInterpolation);
parcelHelpers.export(exports, "aq", ()=>_pointInLine);
parcelHelpers.export(exports, "ar", ()=>_steppedLineTo);
parcelHelpers.export(exports, "as", ()=>_bezierCurveTo);
parcelHelpers.export(exports, "at", ()=>drawPoint);
parcelHelpers.export(exports, "au", ()=>addRoundedRectPath);
parcelHelpers.export(exports, "av", ()=>toTRBL);
parcelHelpers.export(exports, "aw", ()=>toTRBLCorners);
parcelHelpers.export(exports, "ax", ()=>_boundSegment);
parcelHelpers.export(exports, "ay", ()=>_normalizeAngle);
parcelHelpers.export(exports, "az", ()=>getRtlAdapter);
parcelHelpers.export(exports, "b", ()=>isArray);
parcelHelpers.export(exports, "b0", ()=>toLineHeight);
parcelHelpers.export(exports, "b1", ()=>PITAU);
parcelHelpers.export(exports, "b2", ()=>INFINITY);
parcelHelpers.export(exports, "b3", ()=>RAD_PER_DEG);
parcelHelpers.export(exports, "b4", ()=>QUARTER_PI);
parcelHelpers.export(exports, "b5", ()=>TWO_THIRDS_PI);
parcelHelpers.export(exports, "b6", ()=>_angleDiff);
parcelHelpers.export(exports, "c", ()=>color);
parcelHelpers.export(exports, "d", ()=>defaults);
parcelHelpers.export(exports, "e", ()=>effects);
parcelHelpers.export(exports, "f", ()=>resolveObjectKey);
parcelHelpers.export(exports, "g", ()=>isNumberFinite);
parcelHelpers.export(exports, "h", ()=>defined);
parcelHelpers.export(exports, "i", ()=>isObject);
parcelHelpers.export(exports, "j", ()=>createContext);
parcelHelpers.export(exports, "k", ()=>isNullOrUndef);
parcelHelpers.export(exports, "l", ()=>listenArrayEvents);
parcelHelpers.export(exports, "m", ()=>toPercentage);
parcelHelpers.export(exports, "n", ()=>toDimension);
parcelHelpers.export(exports, "o", ()=>formatNumber);
parcelHelpers.export(exports, "p", ()=>_angleBetween);
parcelHelpers.export(exports, "q", ()=>_getStartAndCountOfVisiblePoints);
parcelHelpers.export(exports, "r", ()=>requestAnimFrame);
parcelHelpers.export(exports, "s", ()=>sign);
parcelHelpers.export(exports, "t", ()=>toRadians);
parcelHelpers.export(exports, "u", ()=>unlistenArrayEvents);
parcelHelpers.export(exports, "v", ()=>valueOrDefault);
parcelHelpers.export(exports, "w", ()=>_scaleRangesChanged);
parcelHelpers.export(exports, "x", ()=>isNumber);
parcelHelpers.export(exports, "y", ()=>_parseObjectDataRadialScale);
parcelHelpers.export(exports, "z", ()=>getRelativePosition);
var _color = require("@kurkle/color");
/**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ function noop() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const uid = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isNullOrUndef(value) {
    return value === null || value === undefined;
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function isArray(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') return true;
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function isNumberFinite(value) {
    return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
const toDimension = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') return fn.apply(thisArg, args);
}
function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if (isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function clone(source) {
    if (isArray(source)) return source.map(clone);
    if (isObject(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = clone(source[keys[k]]);
        return target;
    }
    return source;
}
function isValidKey(key) {
    return [
        '__proto__',
        'prototype',
        'constructor'
    ].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function _merger(key, target, source, options) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
    else target[key] = clone(sval);
}
function merge(target, source, options) {
    const sources = isArray(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!isObject(target)) return target;
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!isObject(current)) continue;
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, current, options);
    }
    return target;
}
function mergeIf(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return merge(target, source, {
        merger: _mergerIf
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function _mergerIf(key, target, source) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) mergeIf(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = clone(sval);
}
/**
 * @private
 */ function _deprecated(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
// resolveObjectKey resolver cache
const keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    '': (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function _splitKey(key) {
    const parts = key.split('.');
    const keys = [];
    let tmp = '';
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith('\\')) tmp = tmp.slice(0, -1) + '.';
        else {
            keys.push(tmp);
            tmp = '';
        }
    }
    return keys;
}
function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj)=>{
        for (const k of keys){
            if (k === '') break;
            obj = obj && obj[k];
        }
        return obj;
    };
}
function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value)=>typeof value !== 'undefined';
const isFunction = (value)=>typeof value === 'function';
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function _isClickEvent(e) {
    return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}
/**
 * @alias Chart.helpers.math
 * @namespace
 */ const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function toRadians(degrees) {
    return degrees * (PI / 180);
}
function toDegrees(radians) {
    return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function _decimalPlaces(x) {
    if (!isNumberFinite(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    return {
        angle,
        distance: radialDistanceFromCenter
    };
}
function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */ function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo,
        hi
    };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const _lookupByKey = (table, key, value, last)=>_lookup(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const _rlookupByKey = (table, key, value)=>_lookup(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = [
    'push',
    'pop',
    'shift',
    'splice',
    'unshift'
];
function listenArrayEvents(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, '_chartjs', {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    arrayEvents.forEach((key)=>{
        const method = '_onData' + _capitalize(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === 'function') object[method](...args);
                });
                return res;
            }
        });
    });
}
function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
/**
 * @param items
 */ function _arrayUnique(items) {
    const set = new Set(items);
    if (set.size === items.length) return items;
    return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/ const requestAnimFrame = function() {
    if (typeof window === 'undefined') return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function throttled(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
        // Save the args for use later
        argsToUse = args;
        if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, argsToUse);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const _toLeftRightCenter = (align)=>align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const _alignStartEnd = (align, start, end)=>align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const _textX = (align, left, right, rtl)=>{
    const check = rtl ? 'left' : 'right';
    return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale, _parsed } = meta;
        const axis = iScale.axis;
        const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
        if (minDefined) start = _limitValue(Math.min(_lookupByKey(_parsed, axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
        if (maxDefined) count = _limitValue(Math.max(_lookupByKey(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
        else count = pointCount - start;
    }
    return {
        start,
        count
    };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function _scaleRangesChanged(meta) {
    const { xScale, yScale, _scaleRanges } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
const atEdge = (t)=>t === 0 || t === 1;
const elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const effects = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t)=>Math.sin(t * HALF_PI),
    easeInOutSine: (t)=>-0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - effects.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function isPatternOrGradient(value) {
    if (value && typeof value === 'object') {
        const type = value.toString();
        return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
    }
    return false;
}
function color(value) {
    return isPatternOrGradient(value) ? value : new (0, _color.Color)(value);
}
function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : new (0, _color.Color)(value).saturate(0.5).darken(0.1).hexString();
}
const numbers = [
    'x',
    'y',
    'borderWidth',
    'radius',
    'tension'
];
const colors = [
    'color',
    'borderColor',
    'backgroundColor'
];
function applyAnimationsDefaults(defaults) {
    defaults.set('animation', {
        delay: undefined,
        duration: 1000,
        easing: 'easeOutQuart',
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe('animation', {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== 'onProgress' && name !== 'onComplete' && name !== 'fn'
    });
    defaults.set('animations', {
        colors: {
            type: 'color',
            properties: colors
        },
        numbers: {
            type: 'number',
            properties: numbers
        }
    });
    defaults.describe('animations', {
        _fallback: 'animation'
    });
    defaults.set('transitions', {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    easing: 'linear',
                    fn: (v)=>v | 0
                }
            }
        }
    });
}
function applyLayoutsDefaults(defaults) {
    defaults.set('layout', {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}
const intlCache = new Map();
function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
}
const formatters = {
    values (value) {
        return isArray(value) ? value : '' + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return '0';
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = 'scientific';
            delta = calculateDelta(tickValue, ticks);
        }
        const logDelta = log10(Math.abs(delta));
        const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return formatNumber(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return '0';
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
        return '';
    }
};
function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var Ticks = {
    formatters
};
function applyScaleDefaults(defaults) {
    defaults.set('scale', {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: 'ticks',
        clip: true,
        grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
        },
        title: {
            display: false,
            text: '',
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: true,
            autoSkip: true,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Ticks.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: false,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2
        }
    });
    defaults.route('scale.ticks', 'color', '', 'color');
    defaults.route('scale.grid', 'color', '', 'borderColor');
    defaults.route('scale.border', 'color', '', 'borderColor');
    defaults.route('scale.title', 'color', '', 'color');
    defaults.describe('scale', {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
        _indexable: (name)=>name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash'
    });
    defaults.describe('scales', {
        _fallback: 'scale'
    });
    defaults.describe('scale.ticks', {
        _scriptable: (name)=>name !== 'backdropPadding' && name !== 'callback',
        _indexable: (name)=>name !== 'backdropPadding'
    });
}
const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split('.');
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function set(root, scope, values) {
    if (typeof scope === 'string') return merge(getScope$1(root, scope), values);
    return merge(getScope$1(root, ''), scope);
}
class Defaults {
    constructor(_descriptors, _appliers){
        this.animation = undefined;
        this.backgroundColor = 'rgba(0,0,0,0.1)';
        this.borderColor = 'rgba(0,0,0,0.1)';
        this.color = '#666';
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            'mousemove',
            'mouseout',
            'click',
            'touchstart',
            'touchmove'
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: 'normal',
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>getHoverColor(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>getHoverColor(options.borderColor);
        this.hoverColor = (ctx, options)=>getHoverColor(options.color);
        this.indexAxis = 'x';
        this.interaction = {
            mode: 'nearest',
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
        this.apply(_appliers);
    }
    set(scope, values) {
        return set(this, scope, values);
    }
    get(scope) {
        return getScope$1(this, scope);
    }
    describe(scope, values) {
        return set(descriptors, scope, values);
    }
    override(scope, values) {
        return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = getScope$1(this, scope);
        const targetScopeObject = getScope$1(this, targetScope);
        const privateName = '_' + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if (isObject(local)) return Object.assign({}, target, local);
                    return valueOrDefault(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var defaults = /* #__PURE__ */ new Defaults({
    _scriptable: (name)=>!name.startsWith('on'),
    _indexable: (name)=>name !== 'events',
    hover: {
        _fallback: 'interaction'
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
]);
/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */ function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */ function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        // Undefined strings and arrays should not be measured
        if (thing !== undefined && thing !== null && !isArray(thing)) longest = _measureText(ctx, data, gc, longest, thing);
        else if (isArray(thing)) // if it is an array lets measure each element
        // to do maybe simplify this function a bit so we can do this more recursively?
        for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            // Undefined strings and arrays should not be measured
            if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */ function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */ function clearCanvas(canvas, ctx) {
    if (!ctx && !canvas) return;
    ctx = ctx || canvas.getContext('2d');
    ctx.save();
    // canvas.width and canvas.height do not consider the canvas transform,
    // while clearRect does
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function drawPoint(ctx, options, x, y) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    drawPointLegend(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function drawPointLegend(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === 'object') {
        type = style.toString();
        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        // Default includes circle
        default:
            if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
            else ctx.arc(x, y, radius, 0, TAU);
            ctx.closePath();
            break;
        case 'triangle':
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case 'rectRounded':
            // NOTE: the rounded rect implementation changed to use `arc` instead of
            // `quadraticCurveTo` since it generates better results when rect is
            // almost a circle. 0.516 (instead of 0.5) produces results with visually
            // closer proportion to the previous impl and it is inscribed in the
            // circle with `radius`. For more details, see the following PRs:
            // https://github.com/chartjs/Chart.js/issues/5597
            // https://github.com/chartjs/Chart.js/issues/5858
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;
        case 'rect':
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += QUARTER_PI;
        /* falls through */ case 'rectRot':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case 'crossRot':
            rad += QUARTER_PI;
        /* falls through */ case 'cross':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'star':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += QUARTER_PI;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'line':
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case 'dash':
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
            break;
        case false:
            ctx.closePath();
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */ function _isPointInArea(point, area, margin) {
    margin = margin || 0.5; // margin - default is to match rounded decimals
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function unclipArea(ctx) {
    ctx.restore();
}
/**
 * @private
 */ function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === 'middle') {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === 'after' !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */ function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!isNullOrUndef(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        /**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */ const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */ function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (opts.backdrop) drawBackdrop(ctx, opts.backdrop);
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!isNullOrUndef(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        decorateText(ctx, x, y, line, opts);
        y += Number(font.lineHeight);
    }
    ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */ function addRoundedRectPath(ctx, rect) {
    const { x, y, w, h, radius } = rect;
    // top left arc
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
    // line from top left to bottom left
    ctx.lineTo(x, y + h - radius.bottomLeft);
    // bottom left arc
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    // line from bottom left to bottom right
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    // bottom right arc
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    // line from bottom right to top right
    ctx.lineTo(x + w, y + radius.topRight);
    // top right arc
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    // line from top right to top left
    ctx.lineTo(x + radius.topLeft, y);
}
const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function toLineHeight(value, size) {
    const matches = ('' + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === 'normal') return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case 'px':
            return value;
        case '%':
            value /= 100;
            break;
    }
    return size * value;
}
const numberOrZero = (v)=>+v || 0;
function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop)=>valueOrDefault(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys)ret[prop] = numberOrZero(read(prop));
    return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function toTRBL(value) {
    return _readValueToProps(value, {
        top: 'y',
        right: 'x',
        bottom: 'y',
        left: 'x'
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function toTRBLCorners(value) {
    return _readValueToProps(value, [
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight'
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === 'string') size = parseInt(size, 10);
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !('' + style).match(FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: valueOrDefault(options.family, fallback.family),
        lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
        size,
        style,
        weight: valueOrDefault(options.weight, fallback.weight),
        string: ''
    };
    font.string = toFontString(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function resolve(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === 'function') {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && isArray(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function _addGrace(minmax, grace, beginAtZero) {
    const { min, max } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */ function _createResolver(scopes, prefixes = [
    ''
], rootScopes, fallback, getTarget = ()=>scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === 'undefined') fallback = _resolve('_fallback', scopes);
    const cache = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: finalRootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>_createResolver([
                scope,
                ...scopes
            ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete target._keys; // remove cached keys
            delete scopes[0][prop]; // remove from top level scope
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop) {
            return _cached(target, prop, ()=>_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys (target) {
            return getKeysFromAllScopes(target);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value; // set to top level scope + cache
            delete target._keys; // remove cached keys
            return true;
        }
    });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */ function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: _descriptors(proxy, descriptorDefaults),
        setContext: (ctx)=>_attachContext(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>_attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete proxy[prop]; // remove from proxy
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop, receiver) {
            return _cached(target, prop, ()=>_resolveWithContext(target, prop, receiver));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            proxy[prop] = value; // set to proxy
            delete target[prop]; // remove from cache
            return true;
        }
    });
}
/**
 * @private
 */ function _descriptors(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: isFunction(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: isFunction(_indexable) ? _indexable : ()=>_indexable
    };
}
const readKey = (prefix, name)=>prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value)=>isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop) || prop === 'constructor') return target[prop];
    const value = resolve();
    // cache the resolved value
    target[prop] = value;
    return value;
}
function _resolveWithContext(target, prop, receiver) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors } = target;
    let value = _proxy[prop]; // resolve from proxy
    // resolve with context
    if (isFunction(value) && descriptors.isScriptable(prop)) value = _resolveScriptable(prop, value, target, receiver);
    if (isArray(value) && value.length) value = _resolveArray(prop, value, target, descriptors.isIndexable);
    if (needsSubResolver(prop, value)) // if the resolved value is an object, create a sub resolver for it
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
    return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy, _context, _subProxy, _stack } = target;
    if (_stack.has(prop)) throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) // When scriptable option returns an object, create a resolver on that.
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors } = target;
    if (typeof _context.index !== 'undefined' && isIndexable(prop)) return value[_context.index % value.length];
    else if (isObject(value[0])) {
        // Array of objects, return array or resolvers
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = createSubResolver(scopes, _proxy, prop, item);
            value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent)=>key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = resolveFallback(scope._fallback, key, value);
            if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) // When we reach the descriptor that defines a new _fallback, return that.
            // The fallback will resume to that new scope.
            return fallback;
        } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) // Fallback to `false` results to `false`, when falling back to different key.
        // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
        return null;
    }
    return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if (typeof fallback !== 'undefined' && fallback !== prop) {
        key = addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return _createResolver(Array.from(set), [
        ''
    ], rootScopes, fallback, ()=>subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key)key = addScopes(set, allScopes, key, fallback, item);
    return key;
}
function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if (isArray(target) && isObject(value)) // For array of objects, the object is used to store updated values
    return value;
    return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = _resolve(readKey(prefix, prop), scopes);
        if (typeof value !== 'undefined') return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function _resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if (typeof value !== 'undefined') return value;
    }
}
function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith('_')))set.add(key);
    return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale } = meta;
    const { key = 'r' } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse(resolveObjectKey(item, key), index)
        };
    }
    return parsed;
}
const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis)=>indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function splineCurveMonotone(points, indexAxis = 'x') {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === 'monotone') splineCurveMonotone(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) capBezierPoints(points, area);
}
/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
 * @private
 */ function _isDomSupported() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */ function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === '[object ShadowRoot]') parent = parent.host;
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf('%') !== -1) // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
}
const positions = [
    'top',
    'right',
    'bottom',
    'left'
];
function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? '-' + suffix : '';
    for(let i = 0; i < 4; i++){
        const pos = positions[i];
        result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX, offsetY } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x,
        y,
        box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function getRelativePosition(event, chart) {
    if ('native' in event) return event;
    const { canvas, currentDevicePixelRatio } = chart;
    const style = getComputedStyle(canvas);
    const borderBox = style.boxSizing === 'border-box';
    const paddings = getPositionedStyle(style, 'padding');
    const borders = getPositionedStyle(style, 'border', 'width');
    const { x, y, box } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width, height } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = canvas && _getParentNode(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = getComputedStyle(container);
            const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
            const containerPadding = getPositionedStyle(containerStyle, 'padding');
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
        }
    }
    return {
        width,
        height,
        maxWidth: maxWidth || INFINITY,
        maxHeight: maxHeight || INFINITY
    };
}
const round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle(canvas);
    const margins = getPositionedStyle(style, 'margin');
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width, height } = containerSize;
    if (style.boxSizing === 'content-box') {
        const borders = getPositionedStyle(style, 'border', 'width');
        const paddings = getPositionedStyle(style, 'padding');
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = round1(Math.floor(height * aspectRatio));
    }
    return {
        width,
        height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = Math.floor(chart.height);
    chart.width = Math.floor(chart.width);
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        if (_isDomSupported()) {
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        }
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
/**
 * @private
 */ function _pointInLine(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function _steppedInterpolation(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
}
const getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === 'center') return align;
            return align === 'right' ? 'left' : 'right';
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === 'ltr' || direction === 'rtl') {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue('direction'),
            style.getPropertyPriority('direction')
        ];
        style.setProperty('direction', direction, 'important');
        ctx.prevTextDirection = original;
    }
}
function restoreTextDirection(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
}
function propertyFn(property) {
    if (property === 'angle') return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
    };
    return {
        between: _isBetween,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function normalizeSegment({ start, end, count, loop, style }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style
    };
}
function getSegment(segment, points, bounds) {
    const { property, start: startBound, end: endBound } = bounds;
    const { between, normalize } = propertyFn(property);
    const count = points.length;
    let { start, end, loop } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start,
        end,
        loop,
        style: segment.style
    };
}
function _boundSegment(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare, between, normalize } = propertyFn(property);
    const { start, end, loop, style } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({
                start: subStart,
                end: i,
                loop,
                count,
                style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push(normalizeSegment({
        start: subStart,
        end,
        loop,
        count,
        style
    }));
    return result;
}
function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = _boundSegment(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start,
        end
    };
}
function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop
    });
    return result;
}
function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return splitByStyles(line, [
        {
            start,
            end,
            loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = readStyle(segmentOptions.setContext(createContext(chartContext, {
                type: 'segment',
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex
            })));
            if (styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function styleChanged(style, prevStyle) {
    if (!prevStyle) return false;
    const cache = [];
    const replacer = function(key, value) {
        if (!isPatternOrGradient(value)) return value;
        if (!cache.includes(value)) cache.push(value);
        return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}

},{"@kurkle/color":"2aojw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2aojw":[function(require,module,exports,__globalThis) {
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "b2n", ()=>b2n);
parcelHelpers.export(exports, "b2p", ()=>b2p);
parcelHelpers.export(exports, "default", ()=>index_esm);
parcelHelpers.export(exports, "hexParse", ()=>hexParse);
parcelHelpers.export(exports, "hexString", ()=>hexString);
parcelHelpers.export(exports, "hsl2rgb", ()=>hsl2rgb);
parcelHelpers.export(exports, "hslString", ()=>hslString);
parcelHelpers.export(exports, "hsv2rgb", ()=>hsv2rgb);
parcelHelpers.export(exports, "hueParse", ()=>hueParse);
parcelHelpers.export(exports, "hwb2rgb", ()=>hwb2rgb);
parcelHelpers.export(exports, "lim", ()=>lim);
parcelHelpers.export(exports, "n2b", ()=>n2b);
parcelHelpers.export(exports, "n2p", ()=>n2p);
parcelHelpers.export(exports, "nameParse", ()=>nameParse);
parcelHelpers.export(exports, "p2b", ()=>p2b);
parcelHelpers.export(exports, "rgb2hsl", ()=>rgb2hsl);
parcelHelpers.export(exports, "rgbParse", ()=>rgbParse);
parcelHelpers.export(exports, "rgbString", ()=>rgbString);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "round", ()=>round);
function round(v) {
    return v + 0.5 | 0;
}
const lim = (v, l, h)=>Math.max(Math.min(v, h), l);
function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
}
function b2p(v) {
    return lim(round(v / 2.55), 0, 100);
}
function n2b(v) {
    return lim(round(v * 255), 0, 255);
}
function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
    return lim(round(v * 100), 0, 100);
}
const map$1 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const hex = [
    ...'0123456789ABCDEF'
];
const h1 = (b)=>hex[b & 0xF];
const h2 = (b)=>hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const isShort = (v)=>eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === '#') {
        if (len === 4 || len === 5) ret = {
            r: 255 & map$1[str[1]] * 17,
            g: 255 & map$1[str[2]] * 17,
            b: 255 & map$1[str[3]] * 17,
            a: len === 5 ? map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: map$1[str[1]] << 4 | map$1[str[2]],
            g: map$1[str[3]] << 4 | map$1[str[4]],
            b: map$1[str[5]] << 4 | map$1[str[6]],
            a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
    }
    return ret;
}
const alpha = (a, f)=>a < 255 ? f(a) : '';
function hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function hwb2rgbn(h, w, b) {
    const rgb = hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
    return (h % 360 + 360) % 360;
}
function hueParse(str) {
    const m = HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    const h = hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === 'hwb') v = hwb2rgb(h, p1, p2);
    else if (m[1] === 'hsv') v = hsv2rgb(h, p1, p2);
    else v = hsl2rgb(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function hslString(v) {
    if (!v) return;
    const a = rgb2hsl(v);
    const h = a[0];
    const s = n2p(a[1]);
    const l = n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh'
};
const names$1 = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32'
};
function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, map[k]);
        }
        k = parseInt(names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let names;
function nameParse(str) {
    if (!names) {
        names = unpack();
        names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
    const m = RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
    g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
    b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
    const r = from(b2n(rgb1.r));
    const g = from(b2n(rgb1.g));
    const b = from(b2n(rgb1.b));
    return {
        r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
        g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
        b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function modHSL(v, i, ratio) {
    if (v) {
        let tmp = rgb2hsl(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = hsl2rgb(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = n2b(input[3]);
        }
    } else {
        v = clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = n2b(v.a);
    }
    return v;
}
function functionParse(str) {
    if (str.charAt(0) === 'r') return rgbParse(str);
    return hueParse(str);
}
class Color {
    constructor(input){
        if (input instanceof Color) return input;
        const type = typeof input;
        let v;
        if (type === 'object') v = fromObject(input);
        else if (type === 'string') v = hexParse(input) || nameParse(input) || functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = clone(this._rgb);
        if (v) v.a = b2n(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = fromObject(obj);
    }
    rgbString() {
        return this._valid ? rgbString(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? hexString(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? hslString(this._rgb) : undefined;
    }
    mix(color, weight) {
        if (color) {
            const c1 = this.rgb;
            const c2 = color.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color, t) {
        if (color) this._rgb = interpolate(this._rgb, color._rgb, t);
        return this;
    }
    clone() {
        return new Color(this.rgb);
    }
    alpha(a) {
        this._rgb.a = n2b(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        rotate(this._rgb, deg);
        return this;
    }
}
function index_esm(input) {
    return new Color(input);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yHCA":[function(require,module,exports,__globalThis) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "addBusinessDays", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "addDays", ()=>(0, _indexJsDefault2.default));
parcelHelpers.export(exports, "addHours", ()=>(0, _indexJsDefault3.default));
parcelHelpers.export(exports, "addISOWeekYears", ()=>(0, _indexJsDefault4.default));
parcelHelpers.export(exports, "addMilliseconds", ()=>(0, _indexJsDefault5.default));
parcelHelpers.export(exports, "addMinutes", ()=>(0, _indexJsDefault6.default));
parcelHelpers.export(exports, "addMonths", ()=>(0, _indexJsDefault7.default));
parcelHelpers.export(exports, "addQuarters", ()=>(0, _indexJsDefault8.default));
parcelHelpers.export(exports, "addSeconds", ()=>(0, _indexJsDefault9.default));
parcelHelpers.export(exports, "addWeeks", ()=>(0, _indexJsDefault10.default));
parcelHelpers.export(exports, "addYears", ()=>(0, _indexJsDefault11.default));
parcelHelpers.export(exports, "areIntervalsOverlapping", ()=>(0, _indexJsDefault12.default));
parcelHelpers.export(exports, "clamp", ()=>(0, _indexJsDefault13.default));
parcelHelpers.export(exports, "closestIndexTo", ()=>(0, _indexJsDefault14.default));
parcelHelpers.export(exports, "closestTo", ()=>(0, _indexJsDefault15.default));
parcelHelpers.export(exports, "compareAsc", ()=>(0, _indexJsDefault16.default));
parcelHelpers.export(exports, "compareDesc", ()=>(0, _indexJsDefault17.default));
parcelHelpers.export(exports, "daysToWeeks", ()=>(0, _indexJsDefault18.default));
parcelHelpers.export(exports, "differenceInBusinessDays", ()=>(0, _indexJsDefault19.default));
parcelHelpers.export(exports, "differenceInCalendarDays", ()=>(0, _indexJsDefault20.default));
parcelHelpers.export(exports, "differenceInCalendarISOWeekYears", ()=>(0, _indexJsDefault21.default));
parcelHelpers.export(exports, "differenceInCalendarISOWeeks", ()=>(0, _indexJsDefault22.default));
parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>(0, _indexJsDefault23.default));
parcelHelpers.export(exports, "differenceInCalendarQuarters", ()=>(0, _indexJsDefault24.default));
parcelHelpers.export(exports, "differenceInCalendarWeeks", ()=>(0, _indexJsDefault25.default));
parcelHelpers.export(exports, "differenceInCalendarYears", ()=>(0, _indexJsDefault26.default));
parcelHelpers.export(exports, "differenceInDays", ()=>(0, _indexJsDefault27.default));
parcelHelpers.export(exports, "differenceInHours", ()=>(0, _indexJsDefault28.default));
parcelHelpers.export(exports, "differenceInISOWeekYears", ()=>(0, _indexJsDefault29.default));
parcelHelpers.export(exports, "differenceInMilliseconds", ()=>(0, _indexJsDefault30.default));
parcelHelpers.export(exports, "differenceInMinutes", ()=>(0, _indexJsDefault31.default));
parcelHelpers.export(exports, "differenceInMonths", ()=>(0, _indexJsDefault32.default));
parcelHelpers.export(exports, "differenceInQuarters", ()=>(0, _indexJsDefault33.default));
parcelHelpers.export(exports, "differenceInSeconds", ()=>(0, _indexJsDefault34.default));
parcelHelpers.export(exports, "differenceInWeeks", ()=>(0, _indexJsDefault35.default));
parcelHelpers.export(exports, "differenceInYears", ()=>(0, _indexJsDefault36.default));
parcelHelpers.export(exports, "eachDayOfInterval", ()=>(0, _indexJsDefault37.default));
parcelHelpers.export(exports, "eachHourOfInterval", ()=>(0, _indexJsDefault38.default));
parcelHelpers.export(exports, "eachMinuteOfInterval", ()=>(0, _indexJsDefault39.default));
parcelHelpers.export(exports, "eachMonthOfInterval", ()=>(0, _indexJsDefault40.default));
parcelHelpers.export(exports, "eachQuarterOfInterval", ()=>(0, _indexJsDefault41.default));
parcelHelpers.export(exports, "eachWeekOfInterval", ()=>(0, _indexJsDefault42.default));
parcelHelpers.export(exports, "eachWeekendOfInterval", ()=>(0, _indexJsDefault43.default));
parcelHelpers.export(exports, "eachWeekendOfMonth", ()=>(0, _indexJsDefault44.default));
parcelHelpers.export(exports, "eachWeekendOfYear", ()=>(0, _indexJsDefault45.default));
parcelHelpers.export(exports, "eachYearOfInterval", ()=>(0, _indexJsDefault46.default));
parcelHelpers.export(exports, "endOfDay", ()=>(0, _indexJsDefault47.default));
parcelHelpers.export(exports, "endOfDecade", ()=>(0, _indexJsDefault48.default));
parcelHelpers.export(exports, "endOfHour", ()=>(0, _indexJsDefault49.default));
parcelHelpers.export(exports, "endOfISOWeek", ()=>(0, _indexJsDefault50.default));
parcelHelpers.export(exports, "endOfISOWeekYear", ()=>(0, _indexJsDefault51.default));
parcelHelpers.export(exports, "endOfMinute", ()=>(0, _indexJsDefault52.default));
parcelHelpers.export(exports, "endOfMonth", ()=>(0, _indexJsDefault53.default));
parcelHelpers.export(exports, "endOfQuarter", ()=>(0, _indexJsDefault54.default));
parcelHelpers.export(exports, "endOfSecond", ()=>(0, _indexJsDefault55.default));
parcelHelpers.export(exports, "endOfToday", ()=>(0, _indexJsDefault56.default));
parcelHelpers.export(exports, "endOfTomorrow", ()=>(0, _indexJsDefault57.default));
parcelHelpers.export(exports, "endOfWeek", ()=>(0, _indexJsDefault58.default));
parcelHelpers.export(exports, "endOfYear", ()=>(0, _indexJsDefault59.default));
parcelHelpers.export(exports, "endOfYesterday", ()=>(0, _indexJsDefault60.default));
parcelHelpers.export(exports, "format", ()=>(0, _indexJsDefault61.default));
parcelHelpers.export(exports, "formatDistance", ()=>(0, _indexJsDefault62.default));
parcelHelpers.export(exports, "formatDistanceStrict", ()=>(0, _indexJsDefault63.default));
parcelHelpers.export(exports, "formatDistanceToNow", ()=>(0, _indexJsDefault64.default));
parcelHelpers.export(exports, "formatDistanceToNowStrict", ()=>(0, _indexJsDefault65.default));
parcelHelpers.export(exports, "formatDuration", ()=>(0, _indexJsDefault66.default));
parcelHelpers.export(exports, "formatISO", ()=>(0, _indexJsDefault67.default));
parcelHelpers.export(exports, "formatISO9075", ()=>(0, _indexJsDefault68.default));
parcelHelpers.export(exports, "formatISODuration", ()=>(0, _indexJsDefault69.default));
parcelHelpers.export(exports, "formatRFC3339", ()=>(0, _indexJsDefault70.default));
parcelHelpers.export(exports, "formatRFC7231", ()=>(0, _indexJsDefault71.default));
parcelHelpers.export(exports, "formatRelative", ()=>(0, _indexJsDefault72.default));
parcelHelpers.export(exports, "fromUnixTime", ()=>(0, _indexJsDefault73.default));
parcelHelpers.export(exports, "getDate", ()=>(0, _indexJsDefault74.default));
parcelHelpers.export(exports, "getDay", ()=>(0, _indexJsDefault75.default));
parcelHelpers.export(exports, "getDayOfYear", ()=>(0, _indexJsDefault76.default));
parcelHelpers.export(exports, "getDaysInMonth", ()=>(0, _indexJsDefault77.default));
parcelHelpers.export(exports, "getDaysInYear", ()=>(0, _indexJsDefault78.default));
parcelHelpers.export(exports, "getDecade", ()=>(0, _indexJsDefault79.default));
parcelHelpers.export(exports, "getDefaultOptions", ()=>(0, _indexJsDefault80.default));
parcelHelpers.export(exports, "getHours", ()=>(0, _indexJsDefault81.default));
parcelHelpers.export(exports, "getISODay", ()=>(0, _indexJsDefault82.default));
parcelHelpers.export(exports, "getISOWeek", ()=>(0, _indexJsDefault83.default));
parcelHelpers.export(exports, "getISOWeekYear", ()=>(0, _indexJsDefault84.default));
parcelHelpers.export(exports, "getISOWeeksInYear", ()=>(0, _indexJsDefault85.default));
parcelHelpers.export(exports, "getMilliseconds", ()=>(0, _indexJsDefault86.default));
parcelHelpers.export(exports, "getMinutes", ()=>(0, _indexJsDefault87.default));
parcelHelpers.export(exports, "getMonth", ()=>(0, _indexJsDefault88.default));
parcelHelpers.export(exports, "getOverlappingDaysInIntervals", ()=>(0, _indexJsDefault89.default));
parcelHelpers.export(exports, "getQuarter", ()=>(0, _indexJsDefault90.default));
parcelHelpers.export(exports, "getSeconds", ()=>(0, _indexJsDefault91.default));
parcelHelpers.export(exports, "getTime", ()=>(0, _indexJsDefault92.default));
parcelHelpers.export(exports, "getUnixTime", ()=>(0, _indexJsDefault93.default));
parcelHelpers.export(exports, "getWeek", ()=>(0, _indexJsDefault94.default));
parcelHelpers.export(exports, "getWeekOfMonth", ()=>(0, _indexJsDefault95.default));
parcelHelpers.export(exports, "getWeekYear", ()=>(0, _indexJsDefault96.default));
parcelHelpers.export(exports, "getWeeksInMonth", ()=>(0, _indexJsDefault97.default));
parcelHelpers.export(exports, "getYear", ()=>(0, _indexJsDefault98.default));
parcelHelpers.export(exports, "hoursToMilliseconds", ()=>(0, _indexJsDefault99.default));
parcelHelpers.export(exports, "hoursToMinutes", ()=>(0, _indexJsDefault100.default));
parcelHelpers.export(exports, "hoursToSeconds", ()=>(0, _indexJsDefault101.default));
parcelHelpers.export(exports, "intervalToDuration", ()=>(0, _indexJsDefault102.default));
parcelHelpers.export(exports, "intlFormat", ()=>(0, _indexJsDefault103.default));
parcelHelpers.export(exports, "intlFormatDistance", ()=>(0, _indexJsDefault104.default));
parcelHelpers.export(exports, "isAfter", ()=>(0, _indexJsDefault105.default));
parcelHelpers.export(exports, "isBefore", ()=>(0, _indexJsDefault106.default));
parcelHelpers.export(exports, "isDate", ()=>(0, _indexJsDefault107.default));
parcelHelpers.export(exports, "isEqual", ()=>(0, _indexJsDefault108.default));
parcelHelpers.export(exports, "isExists", ()=>(0, _indexJsDefault109.default));
parcelHelpers.export(exports, "isFirstDayOfMonth", ()=>(0, _indexJsDefault110.default));
parcelHelpers.export(exports, "isFriday", ()=>(0, _indexJsDefault111.default));
parcelHelpers.export(exports, "isFuture", ()=>(0, _indexJsDefault112.default));
parcelHelpers.export(exports, "isLastDayOfMonth", ()=>(0, _indexJsDefault113.default));
parcelHelpers.export(exports, "isLeapYear", ()=>(0, _indexJsDefault114.default));
parcelHelpers.export(exports, "isMatch", ()=>(0, _indexJsDefault115.default));
parcelHelpers.export(exports, "isMonday", ()=>(0, _indexJsDefault116.default));
parcelHelpers.export(exports, "isPast", ()=>(0, _indexJsDefault117.default));
parcelHelpers.export(exports, "isSameDay", ()=>(0, _indexJsDefault118.default));
parcelHelpers.export(exports, "isSameHour", ()=>(0, _indexJsDefault119.default));
parcelHelpers.export(exports, "isSameISOWeek", ()=>(0, _indexJsDefault120.default));
parcelHelpers.export(exports, "isSameISOWeekYear", ()=>(0, _indexJsDefault121.default));
parcelHelpers.export(exports, "isSameMinute", ()=>(0, _indexJsDefault122.default));
parcelHelpers.export(exports, "isSameMonth", ()=>(0, _indexJsDefault123.default));
parcelHelpers.export(exports, "isSameQuarter", ()=>(0, _indexJsDefault124.default));
parcelHelpers.export(exports, "isSameSecond", ()=>(0, _indexJsDefault125.default));
parcelHelpers.export(exports, "isSameWeek", ()=>(0, _indexJsDefault126.default));
parcelHelpers.export(exports, "isSameYear", ()=>(0, _indexJsDefault127.default));
parcelHelpers.export(exports, "isSaturday", ()=>(0, _indexJsDefault128.default));
parcelHelpers.export(exports, "isSunday", ()=>(0, _indexJsDefault129.default));
parcelHelpers.export(exports, "isThisHour", ()=>(0, _indexJsDefault130.default));
parcelHelpers.export(exports, "isThisISOWeek", ()=>(0, _indexJsDefault131.default));
parcelHelpers.export(exports, "isThisMinute", ()=>(0, _indexJsDefault132.default));
parcelHelpers.export(exports, "isThisMonth", ()=>(0, _indexJsDefault133.default));
parcelHelpers.export(exports, "isThisQuarter", ()=>(0, _indexJsDefault134.default));
parcelHelpers.export(exports, "isThisSecond", ()=>(0, _indexJsDefault135.default));
parcelHelpers.export(exports, "isThisWeek", ()=>(0, _indexJsDefault136.default));
parcelHelpers.export(exports, "isThisYear", ()=>(0, _indexJsDefault137.default));
parcelHelpers.export(exports, "isThursday", ()=>(0, _indexJsDefault138.default));
parcelHelpers.export(exports, "isToday", ()=>(0, _indexJsDefault139.default));
parcelHelpers.export(exports, "isTomorrow", ()=>(0, _indexJsDefault140.default));
parcelHelpers.export(exports, "isTuesday", ()=>(0, _indexJsDefault141.default));
parcelHelpers.export(exports, "isValid", ()=>(0, _indexJsDefault142.default));
parcelHelpers.export(exports, "isWednesday", ()=>(0, _indexJsDefault143.default));
parcelHelpers.export(exports, "isWeekend", ()=>(0, _indexJsDefault144.default));
parcelHelpers.export(exports, "isWithinInterval", ()=>(0, _indexJsDefault145.default));
parcelHelpers.export(exports, "isYesterday", ()=>(0, _indexJsDefault146.default));
parcelHelpers.export(exports, "lastDayOfDecade", ()=>(0, _indexJsDefault147.default));
parcelHelpers.export(exports, "lastDayOfISOWeek", ()=>(0, _indexJsDefault148.default));
parcelHelpers.export(exports, "lastDayOfISOWeekYear", ()=>(0, _indexJsDefault149.default));
parcelHelpers.export(exports, "lastDayOfMonth", ()=>(0, _indexJsDefault150.default));
parcelHelpers.export(exports, "lastDayOfQuarter", ()=>(0, _indexJsDefault151.default));
parcelHelpers.export(exports, "lastDayOfWeek", ()=>(0, _indexJsDefault152.default));
parcelHelpers.export(exports, "lastDayOfYear", ()=>(0, _indexJsDefault153.default));
parcelHelpers.export(exports, "lightFormat", ()=>(0, _indexJsDefault154.default));
parcelHelpers.export(exports, "max", ()=>(0, _indexJsDefault155.default));
parcelHelpers.export(exports, "milliseconds", ()=>(0, _indexJsDefault156.default));
parcelHelpers.export(exports, "millisecondsToHours", ()=>(0, _indexJsDefault157.default));
parcelHelpers.export(exports, "millisecondsToMinutes", ()=>(0, _indexJsDefault158.default));
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>(0, _indexJsDefault159.default));
parcelHelpers.export(exports, "min", ()=>(0, _indexJsDefault160.default));
parcelHelpers.export(exports, "minutesToHours", ()=>(0, _indexJsDefault161.default));
parcelHelpers.export(exports, "minutesToMilliseconds", ()=>(0, _indexJsDefault162.default));
parcelHelpers.export(exports, "minutesToSeconds", ()=>(0, _indexJsDefault163.default));
parcelHelpers.export(exports, "monthsToQuarters", ()=>(0, _indexJsDefault164.default));
parcelHelpers.export(exports, "monthsToYears", ()=>(0, _indexJsDefault165.default));
parcelHelpers.export(exports, "nextDay", ()=>(0, _indexJsDefault166.default));
parcelHelpers.export(exports, "nextFriday", ()=>(0, _indexJsDefault167.default));
parcelHelpers.export(exports, "nextMonday", ()=>(0, _indexJsDefault168.default));
parcelHelpers.export(exports, "nextSaturday", ()=>(0, _indexJsDefault169.default));
parcelHelpers.export(exports, "nextSunday", ()=>(0, _indexJsDefault170.default));
parcelHelpers.export(exports, "nextThursday", ()=>(0, _indexJsDefault171.default));
parcelHelpers.export(exports, "nextTuesday", ()=>(0, _indexJsDefault172.default));
parcelHelpers.export(exports, "nextWednesday", ()=>(0, _indexJsDefault173.default));
parcelHelpers.export(exports, "parse", ()=>(0, _indexJsDefault174.default));
parcelHelpers.export(exports, "parseISO", ()=>(0, _indexJsDefault175.default));
parcelHelpers.export(exports, "parseJSON", ()=>(0, _indexJsDefault176.default));
parcelHelpers.export(exports, "previousDay", ()=>(0, _indexJsDefault177.default));
parcelHelpers.export(exports, "previousFriday", ()=>(0, _indexJsDefault178.default));
parcelHelpers.export(exports, "previousMonday", ()=>(0, _indexJsDefault179.default));
parcelHelpers.export(exports, "previousSaturday", ()=>(0, _indexJsDefault180.default));
parcelHelpers.export(exports, "previousSunday", ()=>(0, _indexJsDefault181.default));
parcelHelpers.export(exports, "previousThursday", ()=>(0, _indexJsDefault182.default));
parcelHelpers.export(exports, "previousTuesday", ()=>(0, _indexJsDefault183.default));
parcelHelpers.export(exports, "previousWednesday", ()=>(0, _indexJsDefault184.default));
parcelHelpers.export(exports, "quartersToMonths", ()=>(0, _indexJsDefault185.default));
parcelHelpers.export(exports, "quartersToYears", ()=>(0, _indexJsDefault186.default));
parcelHelpers.export(exports, "roundToNearestMinutes", ()=>(0, _indexJsDefault187.default));
parcelHelpers.export(exports, "secondsToHours", ()=>(0, _indexJsDefault188.default));
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>(0, _indexJsDefault189.default));
parcelHelpers.export(exports, "secondsToMinutes", ()=>(0, _indexJsDefault190.default));
parcelHelpers.export(exports, "set", ()=>(0, _indexJsDefault191.default));
parcelHelpers.export(exports, "setDate", ()=>(0, _indexJsDefault192.default));
parcelHelpers.export(exports, "setDay", ()=>(0, _indexJsDefault193.default));
parcelHelpers.export(exports, "setDayOfYear", ()=>(0, _indexJsDefault194.default));
parcelHelpers.export(exports, "setDefaultOptions", ()=>(0, _indexJsDefault195.default));
parcelHelpers.export(exports, "setHours", ()=>(0, _indexJsDefault196.default));
parcelHelpers.export(exports, "setISODay", ()=>(0, _indexJsDefault197.default));
parcelHelpers.export(exports, "setISOWeek", ()=>(0, _indexJsDefault198.default));
parcelHelpers.export(exports, "setISOWeekYear", ()=>(0, _indexJsDefault199.default));
parcelHelpers.export(exports, "setMilliseconds", ()=>(0, _indexJsDefault200.default));
parcelHelpers.export(exports, "setMinutes", ()=>(0, _indexJsDefault201.default));
parcelHelpers.export(exports, "setMonth", ()=>(0, _indexJsDefault202.default));
parcelHelpers.export(exports, "setQuarter", ()=>(0, _indexJsDefault203.default));
parcelHelpers.export(exports, "setSeconds", ()=>(0, _indexJsDefault204.default));
parcelHelpers.export(exports, "setWeek", ()=>(0, _indexJsDefault205.default));
parcelHelpers.export(exports, "setWeekYear", ()=>(0, _indexJsDefault206.default));
parcelHelpers.export(exports, "setYear", ()=>(0, _indexJsDefault207.default));
parcelHelpers.export(exports, "startOfDay", ()=>(0, _indexJsDefault208.default));
parcelHelpers.export(exports, "startOfDecade", ()=>(0, _indexJsDefault209.default));
parcelHelpers.export(exports, "startOfHour", ()=>(0, _indexJsDefault210.default));
parcelHelpers.export(exports, "startOfISOWeek", ()=>(0, _indexJsDefault211.default));
parcelHelpers.export(exports, "startOfISOWeekYear", ()=>(0, _indexJsDefault212.default));
parcelHelpers.export(exports, "startOfMinute", ()=>(0, _indexJsDefault213.default));
parcelHelpers.export(exports, "startOfMonth", ()=>(0, _indexJsDefault214.default));
parcelHelpers.export(exports, "startOfQuarter", ()=>(0, _indexJsDefault215.default));
parcelHelpers.export(exports, "startOfSecond", ()=>(0, _indexJsDefault216.default));
parcelHelpers.export(exports, "startOfToday", ()=>(0, _indexJsDefault217.default));
parcelHelpers.export(exports, "startOfTomorrow", ()=>(0, _indexJsDefault218.default));
parcelHelpers.export(exports, "startOfWeek", ()=>(0, _indexJsDefault219.default));
parcelHelpers.export(exports, "startOfWeekYear", ()=>(0, _indexJsDefault220.default));
parcelHelpers.export(exports, "startOfYear", ()=>(0, _indexJsDefault221.default));
parcelHelpers.export(exports, "startOfYesterday", ()=>(0, _indexJsDefault222.default));
parcelHelpers.export(exports, "sub", ()=>(0, _indexJsDefault223.default));
parcelHelpers.export(exports, "subBusinessDays", ()=>(0, _indexJsDefault224.default));
parcelHelpers.export(exports, "subDays", ()=>(0, _indexJsDefault225.default));
parcelHelpers.export(exports, "subHours", ()=>(0, _indexJsDefault226.default));
parcelHelpers.export(exports, "subISOWeekYears", ()=>(0, _indexJsDefault227.default));
parcelHelpers.export(exports, "subMilliseconds", ()=>(0, _indexJsDefault228.default));
parcelHelpers.export(exports, "subMinutes", ()=>(0, _indexJsDefault229.default));
parcelHelpers.export(exports, "subMonths", ()=>(0, _indexJsDefault230.default));
parcelHelpers.export(exports, "subQuarters", ()=>(0, _indexJsDefault231.default));
parcelHelpers.export(exports, "subSeconds", ()=>(0, _indexJsDefault232.default));
parcelHelpers.export(exports, "subWeeks", ()=>(0, _indexJsDefault233.default));
parcelHelpers.export(exports, "subYears", ()=>(0, _indexJsDefault234.default));
parcelHelpers.export(exports, "toDate", ()=>(0, _indexJsDefault235.default));
parcelHelpers.export(exports, "weeksToDays", ()=>(0, _indexJsDefault236.default));
parcelHelpers.export(exports, "yearsToMonths", ()=>(0, _indexJsDefault237.default));
parcelHelpers.export(exports, "yearsToQuarters", ()=>(0, _indexJsDefault238.default));
var _indexJs = require("./add/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./addBusinessDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./addDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./addHours/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./addISOWeekYears/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./addMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./addMinutes/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./addMonths/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./addQuarters/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./addSeconds/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./addWeeks/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./addYears/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./areIntervalsOverlapping/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./clamp/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./closestIndexTo/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
var _indexJs15 = require("./closestTo/index.js");
var _indexJsDefault15 = parcelHelpers.interopDefault(_indexJs15);
var _indexJs16 = require("./compareAsc/index.js");
var _indexJsDefault16 = parcelHelpers.interopDefault(_indexJs16);
var _indexJs17 = require("./compareDesc/index.js");
var _indexJsDefault17 = parcelHelpers.interopDefault(_indexJs17);
var _indexJs18 = require("./daysToWeeks/index.js");
var _indexJsDefault18 = parcelHelpers.interopDefault(_indexJs18);
var _indexJs19 = require("./differenceInBusinessDays/index.js");
var _indexJsDefault19 = parcelHelpers.interopDefault(_indexJs19);
var _indexJs20 = require("./differenceInCalendarDays/index.js");
var _indexJsDefault20 = parcelHelpers.interopDefault(_indexJs20);
var _indexJs21 = require("./differenceInCalendarISOWeekYears/index.js");
var _indexJsDefault21 = parcelHelpers.interopDefault(_indexJs21);
var _indexJs22 = require("./differenceInCalendarISOWeeks/index.js");
var _indexJsDefault22 = parcelHelpers.interopDefault(_indexJs22);
var _indexJs23 = require("./differenceInCalendarMonths/index.js");
var _indexJsDefault23 = parcelHelpers.interopDefault(_indexJs23);
var _indexJs24 = require("./differenceInCalendarQuarters/index.js");
var _indexJsDefault24 = parcelHelpers.interopDefault(_indexJs24);
var _indexJs25 = require("./differenceInCalendarWeeks/index.js");
var _indexJsDefault25 = parcelHelpers.interopDefault(_indexJs25);
var _indexJs26 = require("./differenceInCalendarYears/index.js");
var _indexJsDefault26 = parcelHelpers.interopDefault(_indexJs26);
var _indexJs27 = require("./differenceInDays/index.js");
var _indexJsDefault27 = parcelHelpers.interopDefault(_indexJs27);
var _indexJs28 = require("./differenceInHours/index.js");
var _indexJsDefault28 = parcelHelpers.interopDefault(_indexJs28);
var _indexJs29 = require("./differenceInISOWeekYears/index.js");
var _indexJsDefault29 = parcelHelpers.interopDefault(_indexJs29);
var _indexJs30 = require("./differenceInMilliseconds/index.js");
var _indexJsDefault30 = parcelHelpers.interopDefault(_indexJs30);
var _indexJs31 = require("./differenceInMinutes/index.js");
var _indexJsDefault31 = parcelHelpers.interopDefault(_indexJs31);
var _indexJs32 = require("./differenceInMonths/index.js");
var _indexJsDefault32 = parcelHelpers.interopDefault(_indexJs32);
var _indexJs33 = require("./differenceInQuarters/index.js");
var _indexJsDefault33 = parcelHelpers.interopDefault(_indexJs33);
var _indexJs34 = require("./differenceInSeconds/index.js");
var _indexJsDefault34 = parcelHelpers.interopDefault(_indexJs34);
var _indexJs35 = require("./differenceInWeeks/index.js");
var _indexJsDefault35 = parcelHelpers.interopDefault(_indexJs35);
var _indexJs36 = require("./differenceInYears/index.js");
var _indexJsDefault36 = parcelHelpers.interopDefault(_indexJs36);
var _indexJs37 = require("./eachDayOfInterval/index.js");
var _indexJsDefault37 = parcelHelpers.interopDefault(_indexJs37);
var _indexJs38 = require("./eachHourOfInterval/index.js");
var _indexJsDefault38 = parcelHelpers.interopDefault(_indexJs38);
var _indexJs39 = require("./eachMinuteOfInterval/index.js");
var _indexJsDefault39 = parcelHelpers.interopDefault(_indexJs39);
var _indexJs40 = require("./eachMonthOfInterval/index.js");
var _indexJsDefault40 = parcelHelpers.interopDefault(_indexJs40);
var _indexJs41 = require("./eachQuarterOfInterval/index.js");
var _indexJsDefault41 = parcelHelpers.interopDefault(_indexJs41);
var _indexJs42 = require("./eachWeekOfInterval/index.js");
var _indexJsDefault42 = parcelHelpers.interopDefault(_indexJs42);
var _indexJs43 = require("./eachWeekendOfInterval/index.js");
var _indexJsDefault43 = parcelHelpers.interopDefault(_indexJs43);
var _indexJs44 = require("./eachWeekendOfMonth/index.js");
var _indexJsDefault44 = parcelHelpers.interopDefault(_indexJs44);
var _indexJs45 = require("./eachWeekendOfYear/index.js");
var _indexJsDefault45 = parcelHelpers.interopDefault(_indexJs45);
var _indexJs46 = require("./eachYearOfInterval/index.js");
var _indexJsDefault46 = parcelHelpers.interopDefault(_indexJs46);
var _indexJs47 = require("./endOfDay/index.js");
var _indexJsDefault47 = parcelHelpers.interopDefault(_indexJs47);
var _indexJs48 = require("./endOfDecade/index.js");
var _indexJsDefault48 = parcelHelpers.interopDefault(_indexJs48);
var _indexJs49 = require("./endOfHour/index.js");
var _indexJsDefault49 = parcelHelpers.interopDefault(_indexJs49);
var _indexJs50 = require("./endOfISOWeek/index.js");
var _indexJsDefault50 = parcelHelpers.interopDefault(_indexJs50);
var _indexJs51 = require("./endOfISOWeekYear/index.js");
var _indexJsDefault51 = parcelHelpers.interopDefault(_indexJs51);
var _indexJs52 = require("./endOfMinute/index.js");
var _indexJsDefault52 = parcelHelpers.interopDefault(_indexJs52);
var _indexJs53 = require("./endOfMonth/index.js");
var _indexJsDefault53 = parcelHelpers.interopDefault(_indexJs53);
var _indexJs54 = require("./endOfQuarter/index.js");
var _indexJsDefault54 = parcelHelpers.interopDefault(_indexJs54);
var _indexJs55 = require("./endOfSecond/index.js");
var _indexJsDefault55 = parcelHelpers.interopDefault(_indexJs55);
var _indexJs56 = require("./endOfToday/index.js");
var _indexJsDefault56 = parcelHelpers.interopDefault(_indexJs56);
var _indexJs57 = require("./endOfTomorrow/index.js");
var _indexJsDefault57 = parcelHelpers.interopDefault(_indexJs57);
var _indexJs58 = require("./endOfWeek/index.js");
var _indexJsDefault58 = parcelHelpers.interopDefault(_indexJs58);
var _indexJs59 = require("./endOfYear/index.js");
var _indexJsDefault59 = parcelHelpers.interopDefault(_indexJs59);
var _indexJs60 = require("./endOfYesterday/index.js");
var _indexJsDefault60 = parcelHelpers.interopDefault(_indexJs60);
var _indexJs61 = require("./format/index.js");
var _indexJsDefault61 = parcelHelpers.interopDefault(_indexJs61);
var _indexJs62 = require("./formatDistance/index.js");
var _indexJsDefault62 = parcelHelpers.interopDefault(_indexJs62);
var _indexJs63 = require("./formatDistanceStrict/index.js");
var _indexJsDefault63 = parcelHelpers.interopDefault(_indexJs63);
var _indexJs64 = require("./formatDistanceToNow/index.js");
var _indexJsDefault64 = parcelHelpers.interopDefault(_indexJs64);
var _indexJs65 = require("./formatDistanceToNowStrict/index.js");
var _indexJsDefault65 = parcelHelpers.interopDefault(_indexJs65);
var _indexJs66 = require("./formatDuration/index.js");
var _indexJsDefault66 = parcelHelpers.interopDefault(_indexJs66);
var _indexJs67 = require("./formatISO/index.js");
var _indexJsDefault67 = parcelHelpers.interopDefault(_indexJs67);
var _indexJs68 = require("./formatISO9075/index.js");
var _indexJsDefault68 = parcelHelpers.interopDefault(_indexJs68);
var _indexJs69 = require("./formatISODuration/index.js");
var _indexJsDefault69 = parcelHelpers.interopDefault(_indexJs69);
var _indexJs70 = require("./formatRFC3339/index.js");
var _indexJsDefault70 = parcelHelpers.interopDefault(_indexJs70);
var _indexJs71 = require("./formatRFC7231/index.js");
var _indexJsDefault71 = parcelHelpers.interopDefault(_indexJs71);
var _indexJs72 = require("./formatRelative/index.js");
var _indexJsDefault72 = parcelHelpers.interopDefault(_indexJs72);
var _indexJs73 = require("./fromUnixTime/index.js");
var _indexJsDefault73 = parcelHelpers.interopDefault(_indexJs73);
var _indexJs74 = require("./getDate/index.js");
var _indexJsDefault74 = parcelHelpers.interopDefault(_indexJs74);
var _indexJs75 = require("./getDay/index.js");
var _indexJsDefault75 = parcelHelpers.interopDefault(_indexJs75);
var _indexJs76 = require("./getDayOfYear/index.js");
var _indexJsDefault76 = parcelHelpers.interopDefault(_indexJs76);
var _indexJs77 = require("./getDaysInMonth/index.js");
var _indexJsDefault77 = parcelHelpers.interopDefault(_indexJs77);
var _indexJs78 = require("./getDaysInYear/index.js");
var _indexJsDefault78 = parcelHelpers.interopDefault(_indexJs78);
var _indexJs79 = require("./getDecade/index.js");
var _indexJsDefault79 = parcelHelpers.interopDefault(_indexJs79);
var _indexJs80 = require("./getDefaultOptions/index.js");
var _indexJsDefault80 = parcelHelpers.interopDefault(_indexJs80);
var _indexJs81 = require("./getHours/index.js");
var _indexJsDefault81 = parcelHelpers.interopDefault(_indexJs81);
var _indexJs82 = require("./getISODay/index.js");
var _indexJsDefault82 = parcelHelpers.interopDefault(_indexJs82);
var _indexJs83 = require("./getISOWeek/index.js");
var _indexJsDefault83 = parcelHelpers.interopDefault(_indexJs83);
var _indexJs84 = require("./getISOWeekYear/index.js");
var _indexJsDefault84 = parcelHelpers.interopDefault(_indexJs84);
var _indexJs85 = require("./getISOWeeksInYear/index.js");
var _indexJsDefault85 = parcelHelpers.interopDefault(_indexJs85);
var _indexJs86 = require("./getMilliseconds/index.js");
var _indexJsDefault86 = parcelHelpers.interopDefault(_indexJs86);
var _indexJs87 = require("./getMinutes/index.js");
var _indexJsDefault87 = parcelHelpers.interopDefault(_indexJs87);
var _indexJs88 = require("./getMonth/index.js");
var _indexJsDefault88 = parcelHelpers.interopDefault(_indexJs88);
var _indexJs89 = require("./getOverlappingDaysInIntervals/index.js");
var _indexJsDefault89 = parcelHelpers.interopDefault(_indexJs89);
var _indexJs90 = require("./getQuarter/index.js");
var _indexJsDefault90 = parcelHelpers.interopDefault(_indexJs90);
var _indexJs91 = require("./getSeconds/index.js");
var _indexJsDefault91 = parcelHelpers.interopDefault(_indexJs91);
var _indexJs92 = require("./getTime/index.js");
var _indexJsDefault92 = parcelHelpers.interopDefault(_indexJs92);
var _indexJs93 = require("./getUnixTime/index.js");
var _indexJsDefault93 = parcelHelpers.interopDefault(_indexJs93);
var _indexJs94 = require("./getWeek/index.js");
var _indexJsDefault94 = parcelHelpers.interopDefault(_indexJs94);
var _indexJs95 = require("./getWeekOfMonth/index.js");
var _indexJsDefault95 = parcelHelpers.interopDefault(_indexJs95);
var _indexJs96 = require("./getWeekYear/index.js");
var _indexJsDefault96 = parcelHelpers.interopDefault(_indexJs96);
var _indexJs97 = require("./getWeeksInMonth/index.js");
var _indexJsDefault97 = parcelHelpers.interopDefault(_indexJs97);
var _indexJs98 = require("./getYear/index.js");
var _indexJsDefault98 = parcelHelpers.interopDefault(_indexJs98);
var _indexJs99 = require("./hoursToMilliseconds/index.js");
var _indexJsDefault99 = parcelHelpers.interopDefault(_indexJs99);
var _indexJs100 = require("./hoursToMinutes/index.js");
var _indexJsDefault100 = parcelHelpers.interopDefault(_indexJs100);
var _indexJs101 = require("./hoursToSeconds/index.js");
var _indexJsDefault101 = parcelHelpers.interopDefault(_indexJs101);
var _indexJs102 = require("./intervalToDuration/index.js");
var _indexJsDefault102 = parcelHelpers.interopDefault(_indexJs102);
var _indexJs103 = require("./intlFormat/index.js");
var _indexJsDefault103 = parcelHelpers.interopDefault(_indexJs103);
var _indexJs104 = require("./intlFormatDistance/index.js");
var _indexJsDefault104 = parcelHelpers.interopDefault(_indexJs104);
var _indexJs105 = require("./isAfter/index.js");
var _indexJsDefault105 = parcelHelpers.interopDefault(_indexJs105);
var _indexJs106 = require("./isBefore/index.js");
var _indexJsDefault106 = parcelHelpers.interopDefault(_indexJs106);
var _indexJs107 = require("./isDate/index.js");
var _indexJsDefault107 = parcelHelpers.interopDefault(_indexJs107);
var _indexJs108 = require("./isEqual/index.js");
var _indexJsDefault108 = parcelHelpers.interopDefault(_indexJs108);
var _indexJs109 = require("./isExists/index.js");
var _indexJsDefault109 = parcelHelpers.interopDefault(_indexJs109);
var _indexJs110 = require("./isFirstDayOfMonth/index.js");
var _indexJsDefault110 = parcelHelpers.interopDefault(_indexJs110);
var _indexJs111 = require("./isFriday/index.js");
var _indexJsDefault111 = parcelHelpers.interopDefault(_indexJs111);
var _indexJs112 = require("./isFuture/index.js");
var _indexJsDefault112 = parcelHelpers.interopDefault(_indexJs112);
var _indexJs113 = require("./isLastDayOfMonth/index.js");
var _indexJsDefault113 = parcelHelpers.interopDefault(_indexJs113);
var _indexJs114 = require("./isLeapYear/index.js");
var _indexJsDefault114 = parcelHelpers.interopDefault(_indexJs114);
var _indexJs115 = require("./isMatch/index.js");
var _indexJsDefault115 = parcelHelpers.interopDefault(_indexJs115);
var _indexJs116 = require("./isMonday/index.js");
var _indexJsDefault116 = parcelHelpers.interopDefault(_indexJs116);
var _indexJs117 = require("./isPast/index.js");
var _indexJsDefault117 = parcelHelpers.interopDefault(_indexJs117);
var _indexJs118 = require("./isSameDay/index.js");
var _indexJsDefault118 = parcelHelpers.interopDefault(_indexJs118);
var _indexJs119 = require("./isSameHour/index.js");
var _indexJsDefault119 = parcelHelpers.interopDefault(_indexJs119);
var _indexJs120 = require("./isSameISOWeek/index.js");
var _indexJsDefault120 = parcelHelpers.interopDefault(_indexJs120);
var _indexJs121 = require("./isSameISOWeekYear/index.js");
var _indexJsDefault121 = parcelHelpers.interopDefault(_indexJs121);
var _indexJs122 = require("./isSameMinute/index.js");
var _indexJsDefault122 = parcelHelpers.interopDefault(_indexJs122);
var _indexJs123 = require("./isSameMonth/index.js");
var _indexJsDefault123 = parcelHelpers.interopDefault(_indexJs123);
var _indexJs124 = require("./isSameQuarter/index.js");
var _indexJsDefault124 = parcelHelpers.interopDefault(_indexJs124);
var _indexJs125 = require("./isSameSecond/index.js");
var _indexJsDefault125 = parcelHelpers.interopDefault(_indexJs125);
var _indexJs126 = require("./isSameWeek/index.js");
var _indexJsDefault126 = parcelHelpers.interopDefault(_indexJs126);
var _indexJs127 = require("./isSameYear/index.js");
var _indexJsDefault127 = parcelHelpers.interopDefault(_indexJs127);
var _indexJs128 = require("./isSaturday/index.js");
var _indexJsDefault128 = parcelHelpers.interopDefault(_indexJs128);
var _indexJs129 = require("./isSunday/index.js");
var _indexJsDefault129 = parcelHelpers.interopDefault(_indexJs129);
var _indexJs130 = require("./isThisHour/index.js");
var _indexJsDefault130 = parcelHelpers.interopDefault(_indexJs130);
var _indexJs131 = require("./isThisISOWeek/index.js");
var _indexJsDefault131 = parcelHelpers.interopDefault(_indexJs131);
var _indexJs132 = require("./isThisMinute/index.js");
var _indexJsDefault132 = parcelHelpers.interopDefault(_indexJs132);
var _indexJs133 = require("./isThisMonth/index.js");
var _indexJsDefault133 = parcelHelpers.interopDefault(_indexJs133);
var _indexJs134 = require("./isThisQuarter/index.js");
var _indexJsDefault134 = parcelHelpers.interopDefault(_indexJs134);
var _indexJs135 = require("./isThisSecond/index.js");
var _indexJsDefault135 = parcelHelpers.interopDefault(_indexJs135);
var _indexJs136 = require("./isThisWeek/index.js");
var _indexJsDefault136 = parcelHelpers.interopDefault(_indexJs136);
var _indexJs137 = require("./isThisYear/index.js");
var _indexJsDefault137 = parcelHelpers.interopDefault(_indexJs137);
var _indexJs138 = require("./isThursday/index.js");
var _indexJsDefault138 = parcelHelpers.interopDefault(_indexJs138);
var _indexJs139 = require("./isToday/index.js");
var _indexJsDefault139 = parcelHelpers.interopDefault(_indexJs139);
var _indexJs140 = require("./isTomorrow/index.js");
var _indexJsDefault140 = parcelHelpers.interopDefault(_indexJs140);
var _indexJs141 = require("./isTuesday/index.js");
var _indexJsDefault141 = parcelHelpers.interopDefault(_indexJs141);
var _indexJs142 = require("./isValid/index.js");
var _indexJsDefault142 = parcelHelpers.interopDefault(_indexJs142);
var _indexJs143 = require("./isWednesday/index.js");
var _indexJsDefault143 = parcelHelpers.interopDefault(_indexJs143);
var _indexJs144 = require("./isWeekend/index.js");
var _indexJsDefault144 = parcelHelpers.interopDefault(_indexJs144);
var _indexJs145 = require("./isWithinInterval/index.js");
var _indexJsDefault145 = parcelHelpers.interopDefault(_indexJs145);
var _indexJs146 = require("./isYesterday/index.js");
var _indexJsDefault146 = parcelHelpers.interopDefault(_indexJs146);
var _indexJs147 = require("./lastDayOfDecade/index.js");
var _indexJsDefault147 = parcelHelpers.interopDefault(_indexJs147);
var _indexJs148 = require("./lastDayOfISOWeek/index.js");
var _indexJsDefault148 = parcelHelpers.interopDefault(_indexJs148);
var _indexJs149 = require("./lastDayOfISOWeekYear/index.js");
var _indexJsDefault149 = parcelHelpers.interopDefault(_indexJs149);
var _indexJs150 = require("./lastDayOfMonth/index.js");
var _indexJsDefault150 = parcelHelpers.interopDefault(_indexJs150);
var _indexJs151 = require("./lastDayOfQuarter/index.js");
var _indexJsDefault151 = parcelHelpers.interopDefault(_indexJs151);
var _indexJs152 = require("./lastDayOfWeek/index.js");
var _indexJsDefault152 = parcelHelpers.interopDefault(_indexJs152);
var _indexJs153 = require("./lastDayOfYear/index.js");
var _indexJsDefault153 = parcelHelpers.interopDefault(_indexJs153);
var _indexJs154 = require("./lightFormat/index.js");
var _indexJsDefault154 = parcelHelpers.interopDefault(_indexJs154);
var _indexJs155 = require("./max/index.js");
var _indexJsDefault155 = parcelHelpers.interopDefault(_indexJs155);
var _indexJs156 = require("./milliseconds/index.js");
var _indexJsDefault156 = parcelHelpers.interopDefault(_indexJs156);
var _indexJs157 = require("./millisecondsToHours/index.js");
var _indexJsDefault157 = parcelHelpers.interopDefault(_indexJs157);
var _indexJs158 = require("./millisecondsToMinutes/index.js");
var _indexJsDefault158 = parcelHelpers.interopDefault(_indexJs158);
var _indexJs159 = require("./millisecondsToSeconds/index.js");
var _indexJsDefault159 = parcelHelpers.interopDefault(_indexJs159);
var _indexJs160 = require("./min/index.js");
var _indexJsDefault160 = parcelHelpers.interopDefault(_indexJs160);
var _indexJs161 = require("./minutesToHours/index.js");
var _indexJsDefault161 = parcelHelpers.interopDefault(_indexJs161);
var _indexJs162 = require("./minutesToMilliseconds/index.js");
var _indexJsDefault162 = parcelHelpers.interopDefault(_indexJs162);
var _indexJs163 = require("./minutesToSeconds/index.js");
var _indexJsDefault163 = parcelHelpers.interopDefault(_indexJs163);
var _indexJs164 = require("./monthsToQuarters/index.js");
var _indexJsDefault164 = parcelHelpers.interopDefault(_indexJs164);
var _indexJs165 = require("./monthsToYears/index.js");
var _indexJsDefault165 = parcelHelpers.interopDefault(_indexJs165);
var _indexJs166 = require("./nextDay/index.js");
var _indexJsDefault166 = parcelHelpers.interopDefault(_indexJs166);
var _indexJs167 = require("./nextFriday/index.js");
var _indexJsDefault167 = parcelHelpers.interopDefault(_indexJs167);
var _indexJs168 = require("./nextMonday/index.js");
var _indexJsDefault168 = parcelHelpers.interopDefault(_indexJs168);
var _indexJs169 = require("./nextSaturday/index.js");
var _indexJsDefault169 = parcelHelpers.interopDefault(_indexJs169);
var _indexJs170 = require("./nextSunday/index.js");
var _indexJsDefault170 = parcelHelpers.interopDefault(_indexJs170);
var _indexJs171 = require("./nextThursday/index.js");
var _indexJsDefault171 = parcelHelpers.interopDefault(_indexJs171);
var _indexJs172 = require("./nextTuesday/index.js");
var _indexJsDefault172 = parcelHelpers.interopDefault(_indexJs172);
var _indexJs173 = require("./nextWednesday/index.js");
var _indexJsDefault173 = parcelHelpers.interopDefault(_indexJs173);
var _indexJs174 = require("./parse/index.js");
var _indexJsDefault174 = parcelHelpers.interopDefault(_indexJs174);
var _indexJs175 = require("./parseISO/index.js");
var _indexJsDefault175 = parcelHelpers.interopDefault(_indexJs175);
var _indexJs176 = require("./parseJSON/index.js");
var _indexJsDefault176 = parcelHelpers.interopDefault(_indexJs176);
var _indexJs177 = require("./previousDay/index.js");
var _indexJsDefault177 = parcelHelpers.interopDefault(_indexJs177);
var _indexJs178 = require("./previousFriday/index.js");
var _indexJsDefault178 = parcelHelpers.interopDefault(_indexJs178);
var _indexJs179 = require("./previousMonday/index.js");
var _indexJsDefault179 = parcelHelpers.interopDefault(_indexJs179);
var _indexJs180 = require("./previousSaturday/index.js");
var _indexJsDefault180 = parcelHelpers.interopDefault(_indexJs180);
var _indexJs181 = require("./previousSunday/index.js");
var _indexJsDefault181 = parcelHelpers.interopDefault(_indexJs181);
var _indexJs182 = require("./previousThursday/index.js");
var _indexJsDefault182 = parcelHelpers.interopDefault(_indexJs182);
var _indexJs183 = require("./previousTuesday/index.js");
var _indexJsDefault183 = parcelHelpers.interopDefault(_indexJs183);
var _indexJs184 = require("./previousWednesday/index.js");
var _indexJsDefault184 = parcelHelpers.interopDefault(_indexJs184);
var _indexJs185 = require("./quartersToMonths/index.js");
var _indexJsDefault185 = parcelHelpers.interopDefault(_indexJs185);
var _indexJs186 = require("./quartersToYears/index.js");
var _indexJsDefault186 = parcelHelpers.interopDefault(_indexJs186);
var _indexJs187 = require("./roundToNearestMinutes/index.js");
var _indexJsDefault187 = parcelHelpers.interopDefault(_indexJs187);
var _indexJs188 = require("./secondsToHours/index.js");
var _indexJsDefault188 = parcelHelpers.interopDefault(_indexJs188);
var _indexJs189 = require("./secondsToMilliseconds/index.js");
var _indexJsDefault189 = parcelHelpers.interopDefault(_indexJs189);
var _indexJs190 = require("./secondsToMinutes/index.js");
var _indexJsDefault190 = parcelHelpers.interopDefault(_indexJs190);
var _indexJs191 = require("./set/index.js");
var _indexJsDefault191 = parcelHelpers.interopDefault(_indexJs191);
var _indexJs192 = require("./setDate/index.js");
var _indexJsDefault192 = parcelHelpers.interopDefault(_indexJs192);
var _indexJs193 = require("./setDay/index.js");
var _indexJsDefault193 = parcelHelpers.interopDefault(_indexJs193);
var _indexJs194 = require("./setDayOfYear/index.js");
var _indexJsDefault194 = parcelHelpers.interopDefault(_indexJs194);
var _indexJs195 = require("./setDefaultOptions/index.js");
var _indexJsDefault195 = parcelHelpers.interopDefault(_indexJs195);
var _indexJs196 = require("./setHours/index.js");
var _indexJsDefault196 = parcelHelpers.interopDefault(_indexJs196);
var _indexJs197 = require("./setISODay/index.js");
var _indexJsDefault197 = parcelHelpers.interopDefault(_indexJs197);
var _indexJs198 = require("./setISOWeek/index.js");
var _indexJsDefault198 = parcelHelpers.interopDefault(_indexJs198);
var _indexJs199 = require("./setISOWeekYear/index.js");
var _indexJsDefault199 = parcelHelpers.interopDefault(_indexJs199);
var _indexJs200 = require("./setMilliseconds/index.js");
var _indexJsDefault200 = parcelHelpers.interopDefault(_indexJs200);
var _indexJs201 = require("./setMinutes/index.js");
var _indexJsDefault201 = parcelHelpers.interopDefault(_indexJs201);
var _indexJs202 = require("./setMonth/index.js");
var _indexJsDefault202 = parcelHelpers.interopDefault(_indexJs202);
var _indexJs203 = require("./setQuarter/index.js");
var _indexJsDefault203 = parcelHelpers.interopDefault(_indexJs203);
var _indexJs204 = require("./setSeconds/index.js");
var _indexJsDefault204 = parcelHelpers.interopDefault(_indexJs204);
var _indexJs205 = require("./setWeek/index.js");
var _indexJsDefault205 = parcelHelpers.interopDefault(_indexJs205);
var _indexJs206 = require("./setWeekYear/index.js");
var _indexJsDefault206 = parcelHelpers.interopDefault(_indexJs206);
var _indexJs207 = require("./setYear/index.js");
var _indexJsDefault207 = parcelHelpers.interopDefault(_indexJs207);
var _indexJs208 = require("./startOfDay/index.js");
var _indexJsDefault208 = parcelHelpers.interopDefault(_indexJs208);
var _indexJs209 = require("./startOfDecade/index.js");
var _indexJsDefault209 = parcelHelpers.interopDefault(_indexJs209);
var _indexJs210 = require("./startOfHour/index.js");
var _indexJsDefault210 = parcelHelpers.interopDefault(_indexJs210);
var _indexJs211 = require("./startOfISOWeek/index.js");
var _indexJsDefault211 = parcelHelpers.interopDefault(_indexJs211);
var _indexJs212 = require("./startOfISOWeekYear/index.js");
var _indexJsDefault212 = parcelHelpers.interopDefault(_indexJs212);
var _indexJs213 = require("./startOfMinute/index.js");
var _indexJsDefault213 = parcelHelpers.interopDefault(_indexJs213);
var _indexJs214 = require("./startOfMonth/index.js");
var _indexJsDefault214 = parcelHelpers.interopDefault(_indexJs214);
var _indexJs215 = require("./startOfQuarter/index.js");
var _indexJsDefault215 = parcelHelpers.interopDefault(_indexJs215);
var _indexJs216 = require("./startOfSecond/index.js");
var _indexJsDefault216 = parcelHelpers.interopDefault(_indexJs216);
var _indexJs217 = require("./startOfToday/index.js");
var _indexJsDefault217 = parcelHelpers.interopDefault(_indexJs217);
var _indexJs218 = require("./startOfTomorrow/index.js");
var _indexJsDefault218 = parcelHelpers.interopDefault(_indexJs218);
var _indexJs219 = require("./startOfWeek/index.js");
var _indexJsDefault219 = parcelHelpers.interopDefault(_indexJs219);
var _indexJs220 = require("./startOfWeekYear/index.js");
var _indexJsDefault220 = parcelHelpers.interopDefault(_indexJs220);
var _indexJs221 = require("./startOfYear/index.js");
var _indexJsDefault221 = parcelHelpers.interopDefault(_indexJs221);
var _indexJs222 = require("./startOfYesterday/index.js");
var _indexJsDefault222 = parcelHelpers.interopDefault(_indexJs222);
var _indexJs223 = require("./sub/index.js");
var _indexJsDefault223 = parcelHelpers.interopDefault(_indexJs223);
var _indexJs224 = require("./subBusinessDays/index.js");
var _indexJsDefault224 = parcelHelpers.interopDefault(_indexJs224);
var _indexJs225 = require("./subDays/index.js");
var _indexJsDefault225 = parcelHelpers.interopDefault(_indexJs225);
var _indexJs226 = require("./subHours/index.js");
var _indexJsDefault226 = parcelHelpers.interopDefault(_indexJs226);
var _indexJs227 = require("./subISOWeekYears/index.js");
var _indexJsDefault227 = parcelHelpers.interopDefault(_indexJs227);
var _indexJs228 = require("./subMilliseconds/index.js");
var _indexJsDefault228 = parcelHelpers.interopDefault(_indexJs228);
var _indexJs229 = require("./subMinutes/index.js");
var _indexJsDefault229 = parcelHelpers.interopDefault(_indexJs229);
var _indexJs230 = require("./subMonths/index.js");
var _indexJsDefault230 = parcelHelpers.interopDefault(_indexJs230);
var _indexJs231 = require("./subQuarters/index.js");
var _indexJsDefault231 = parcelHelpers.interopDefault(_indexJs231);
var _indexJs232 = require("./subSeconds/index.js");
var _indexJsDefault232 = parcelHelpers.interopDefault(_indexJs232);
var _indexJs233 = require("./subWeeks/index.js");
var _indexJsDefault233 = parcelHelpers.interopDefault(_indexJs233);
var _indexJs234 = require("./subYears/index.js");
var _indexJsDefault234 = parcelHelpers.interopDefault(_indexJs234);
var _indexJs235 = require("./toDate/index.js");
var _indexJsDefault235 = parcelHelpers.interopDefault(_indexJs235);
var _indexJs236 = require("./weeksToDays/index.js");
var _indexJsDefault236 = parcelHelpers.interopDefault(_indexJs236);
var _indexJs237 = require("./yearsToMonths/index.js");
var _indexJsDefault237 = parcelHelpers.interopDefault(_indexJs237);
var _indexJs238 = require("./yearsToQuarters/index.js");
var _indexJsDefault238 = parcelHelpers.interopDefault(_indexJs238);
var _indexJs239 = require("./constants/index.js");
parcelHelpers.exportAll(_indexJs239, exports);

},{"./add/index.js":false,"./addBusinessDays/index.js":false,"./addDays/index.js":"g6fAH","./addHours/index.js":"6s0f5","./addISOWeekYears/index.js":false,"./addMilliseconds/index.js":"7Tp9s","./addMinutes/index.js":"fZ0OC","./addMonths/index.js":"hES3W","./addQuarters/index.js":"c1KfH","./addSeconds/index.js":"foXxx","./addWeeks/index.js":"gPOA0","./addYears/index.js":"g0YQq","./areIntervalsOverlapping/index.js":false,"./clamp/index.js":false,"./closestIndexTo/index.js":false,"./closestTo/index.js":false,"./compareAsc/index.js":false,"./compareDesc/index.js":false,"./daysToWeeks/index.js":false,"./differenceInBusinessDays/index.js":false,"./differenceInCalendarDays/index.js":false,"./differenceInCalendarISOWeekYears/index.js":false,"./differenceInCalendarISOWeeks/index.js":false,"./differenceInCalendarMonths/index.js":false,"./differenceInCalendarQuarters/index.js":false,"./differenceInCalendarWeeks/index.js":false,"./differenceInCalendarYears/index.js":false,"./differenceInDays/index.js":"1mpAo","./differenceInHours/index.js":"9Vac7","./differenceInISOWeekYears/index.js":false,"./differenceInMilliseconds/index.js":"Eb6qZ","./differenceInMinutes/index.js":"4Qv17","./differenceInMonths/index.js":"8lj6Z","./differenceInQuarters/index.js":"55zSJ","./differenceInSeconds/index.js":"5uZgU","./differenceInWeeks/index.js":"8EidL","./differenceInYears/index.js":"2tncr","./eachDayOfInterval/index.js":false,"./eachHourOfInterval/index.js":false,"./eachMinuteOfInterval/index.js":false,"./eachMonthOfInterval/index.js":false,"./eachQuarterOfInterval/index.js":false,"./eachWeekOfInterval/index.js":false,"./eachWeekendOfInterval/index.js":false,"./eachWeekendOfMonth/index.js":false,"./eachWeekendOfYear/index.js":false,"./eachYearOfInterval/index.js":false,"./endOfDay/index.js":"kLkh7","./endOfDecade/index.js":false,"./endOfHour/index.js":"eMgQO","./endOfISOWeek/index.js":false,"./endOfISOWeekYear/index.js":false,"./endOfMinute/index.js":"gw4uA","./endOfMonth/index.js":"4tHlS","./endOfQuarter/index.js":"ajYge","./endOfSecond/index.js":"1JZ5k","./endOfToday/index.js":false,"./endOfTomorrow/index.js":false,"./endOfWeek/index.js":"5zQJ5","./endOfYear/index.js":"kAT7v","./endOfYesterday/index.js":false,"./format/index.js":"lnm6V","./formatDistance/index.js":false,"./formatDistanceStrict/index.js":false,"./formatDistanceToNow/index.js":false,"./formatDistanceToNowStrict/index.js":false,"./formatDuration/index.js":false,"./formatISO/index.js":false,"./formatISO9075/index.js":false,"./formatISODuration/index.js":false,"./formatRFC3339/index.js":false,"./formatRFC7231/index.js":false,"./formatRelative/index.js":false,"./fromUnixTime/index.js":false,"./getDate/index.js":false,"./getDay/index.js":false,"./getDayOfYear/index.js":false,"./getDaysInMonth/index.js":false,"./getDaysInYear/index.js":false,"./getDecade/index.js":false,"./getDefaultOptions/index.js":false,"./getHours/index.js":false,"./getISODay/index.js":false,"./getISOWeek/index.js":false,"./getISOWeekYear/index.js":false,"./getISOWeeksInYear/index.js":false,"./getMilliseconds/index.js":false,"./getMinutes/index.js":false,"./getMonth/index.js":false,"./getOverlappingDaysInIntervals/index.js":false,"./getQuarter/index.js":false,"./getSeconds/index.js":false,"./getTime/index.js":false,"./getUnixTime/index.js":false,"./getWeek/index.js":false,"./getWeekOfMonth/index.js":false,"./getWeekYear/index.js":false,"./getWeeksInMonth/index.js":false,"./getYear/index.js":false,"./hoursToMilliseconds/index.js":false,"./hoursToMinutes/index.js":false,"./hoursToSeconds/index.js":false,"./intervalToDuration/index.js":false,"./intlFormat/index.js":false,"./intlFormatDistance/index.js":false,"./isAfter/index.js":false,"./isBefore/index.js":false,"./isDate/index.js":false,"./isEqual/index.js":false,"./isExists/index.js":false,"./isFirstDayOfMonth/index.js":false,"./isFriday/index.js":false,"./isFuture/index.js":false,"./isLastDayOfMonth/index.js":false,"./isLeapYear/index.js":false,"./isMatch/index.js":false,"./isMonday/index.js":false,"./isPast/index.js":false,"./isSameDay/index.js":false,"./isSameHour/index.js":false,"./isSameISOWeek/index.js":false,"./isSameISOWeekYear/index.js":false,"./isSameMinute/index.js":false,"./isSameMonth/index.js":false,"./isSameQuarter/index.js":false,"./isSameSecond/index.js":false,"./isSameWeek/index.js":false,"./isSameYear/index.js":false,"./isSaturday/index.js":false,"./isSunday/index.js":false,"./isThisHour/index.js":false,"./isThisISOWeek/index.js":false,"./isThisMinute/index.js":false,"./isThisMonth/index.js":false,"./isThisQuarter/index.js":false,"./isThisSecond/index.js":false,"./isThisWeek/index.js":false,"./isThisYear/index.js":false,"./isThursday/index.js":false,"./isToday/index.js":false,"./isTomorrow/index.js":false,"./isTuesday/index.js":false,"./isValid/index.js":"eXoMl","./isWednesday/index.js":false,"./isWeekend/index.js":false,"./isWithinInterval/index.js":false,"./isYesterday/index.js":false,"./lastDayOfDecade/index.js":false,"./lastDayOfISOWeek/index.js":false,"./lastDayOfISOWeekYear/index.js":false,"./lastDayOfMonth/index.js":false,"./lastDayOfQuarter/index.js":false,"./lastDayOfWeek/index.js":false,"./lastDayOfYear/index.js":false,"./lightFormat/index.js":false,"./max/index.js":false,"./milliseconds/index.js":false,"./millisecondsToHours/index.js":false,"./millisecondsToMinutes/index.js":false,"./millisecondsToSeconds/index.js":false,"./min/index.js":false,"./minutesToHours/index.js":false,"./minutesToMilliseconds/index.js":false,"./minutesToSeconds/index.js":false,"./monthsToQuarters/index.js":false,"./monthsToYears/index.js":false,"./nextDay/index.js":false,"./nextFriday/index.js":false,"./nextMonday/index.js":false,"./nextSaturday/index.js":false,"./nextSunday/index.js":false,"./nextThursday/index.js":false,"./nextTuesday/index.js":false,"./nextWednesday/index.js":false,"./parse/index.js":"kVw8O","./parseISO/index.js":"3UpeK","./parseJSON/index.js":false,"./previousDay/index.js":false,"./previousFriday/index.js":false,"./previousMonday/index.js":false,"./previousSaturday/index.js":false,"./previousSunday/index.js":false,"./previousThursday/index.js":false,"./previousTuesday/index.js":false,"./previousWednesday/index.js":false,"./quartersToMonths/index.js":false,"./quartersToYears/index.js":false,"./roundToNearestMinutes/index.js":false,"./secondsToHours/index.js":false,"./secondsToMilliseconds/index.js":false,"./secondsToMinutes/index.js":false,"./set/index.js":false,"./setDate/index.js":false,"./setDay/index.js":false,"./setDayOfYear/index.js":false,"./setDefaultOptions/index.js":false,"./setHours/index.js":false,"./setISODay/index.js":false,"./setISOWeek/index.js":false,"./setISOWeekYear/index.js":false,"./setMilliseconds/index.js":false,"./setMinutes/index.js":false,"./setMonth/index.js":false,"./setQuarter/index.js":false,"./setSeconds/index.js":false,"./setWeek/index.js":false,"./setWeekYear/index.js":false,"./setYear/index.js":false,"./startOfDay/index.js":"4Tvs3","./startOfDecade/index.js":false,"./startOfHour/index.js":"gnPY3","./startOfISOWeek/index.js":false,"./startOfISOWeekYear/index.js":false,"./startOfMinute/index.js":"ScWrF","./startOfMonth/index.js":"6xvSk","./startOfQuarter/index.js":"3J36e","./startOfSecond/index.js":"9ePjK","./startOfToday/index.js":false,"./startOfTomorrow/index.js":false,"./startOfWeek/index.js":"fD46d","./startOfWeekYear/index.js":false,"./startOfYear/index.js":"lgYqj","./startOfYesterday/index.js":false,"./sub/index.js":false,"./subBusinessDays/index.js":false,"./subDays/index.js":false,"./subHours/index.js":false,"./subISOWeekYears/index.js":false,"./subMilliseconds/index.js":false,"./subMinutes/index.js":false,"./subMonths/index.js":false,"./subQuarters/index.js":false,"./subSeconds/index.js":false,"./subWeeks/index.js":false,"./subYears/index.js":false,"./toDate/index.js":"fsust","./weeksToDays/index.js":false,"./yearsToMonths/index.js":false,"./yearsToQuarters/index.js":false,"./constants/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6fAH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addDays);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addDays(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
    date.setDate(date.getDate() + amount);
    return date;
}

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7kKX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toInteger);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsust":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toDate);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function toDate(argument) {
    (0, _indexJsDefault.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || (0, _typeofDefault.default)(argument) === 'object' && argStr === '[object Date]') // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === 'number' || argStr === '[object Number]') return new Date(argument);
    else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
            // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7HWY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_typeof);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wUgQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>requiredArgs);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6s0f5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addHours);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_HOUR = 3600000;
function addHours(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Tp9s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addMilliseconds);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMilliseconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var timestamp = (0, _indexJsDefault1.default)(dirtyDate).getTime();
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return new Date(timestamp + amount);
}

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZ0OC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addMinutes);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_MINUTE = 60000;
function addMinutes(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hES3W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addMonths);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMonths(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
    var dayOfMonth = date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
    else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1KfH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addQuarters);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addQuarters(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    var months = amount * 3;
    return (0, _indexJsDefault1.default)(dirtyDate, months);
}

},{"../_lib/toInteger/index.js":"f7kKX","../addMonths/index.js":"hES3W","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"foXxx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addSeconds);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addSeconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * 1000);
}

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPOA0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addWeeks);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addWeeks(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    var days = amount * 7;
    return (0, _indexJsDefault1.default)(dirtyDate, days);
}

},{"../_lib/toInteger/index.js":"f7kKX","../addDays/index.js":"g6fAH","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0YQq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addYears);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addYears(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * 12);
}

},{"../_lib/toInteger/index.js":"f7kKX","../addMonths/index.js":"hES3W","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h01l4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>compareAsc);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function compareAsc(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    else return diff;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adZXy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInCalendarDays);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_DAY = 86400000;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var startOfDayLeft = (0, _indexJsDefault1.default)(dirtyDateLeft);
    var startOfDayRight = (0, _indexJsDefault1.default)(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - (0, _indexJsDefault.default)(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - (0, _indexJsDefault.default)(startOfDayRight);
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../startOfDay/index.js":"4Tvs3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bc74C":[function(require,module,exports,__globalThis) {
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getTimezoneOffsetInMilliseconds);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Tvs3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfDay);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oypH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInCalendarMonths);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4WIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInCalendarYears);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mpAo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInDays);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js"); // Like `compareAsc` but uses local time not UTC, which is needed
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
    var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    else return diff;
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = compareLocalAsc(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    dateLeft.setDate(dateLeft.getDate() - sign * difference);
    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastDayNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}

},{"../toDate/index.js":"fsust","../differenceInCalendarDays/index.js":"adZXy","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Vac7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInHours);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInHours(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / (0, _indexJs.millisecondsInHour);
    return (0, _indexJs3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

},{"../constants/index.js":"iOhcx","../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOhcx":[function(require,module,exports,__globalThis) {
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
var daysInWeek = 7;
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 86400000;
var millisecondsInMinute = 60000;
var millisecondsInHour = 3600000;
var millisecondsInSecond = 1000;
var minTime = -maxTime;
var minutesInHour = 60;
var monthsInQuarter = 3;
var monthsInYear = 12;
var quartersInYear = 4;
var secondsInHour = 3600;
var secondsInMinute = 60;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Eb6qZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInMilliseconds);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInMilliseconds(dateLeft, dateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    return (0, _indexJsDefault.default)(dateLeft).getTime() - (0, _indexJsDefault.default)(dateRight).getTime();
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilPgA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod);
var roundingMap = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function trunc(value) {
        return value < 0 ? Math.ceil(value) : Math.floor(value);
    } // Math.trunc is not supported by IE
};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
    return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qv17":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInMinutes);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInMinutes(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / (0, _indexJs.millisecondsInMinute);
    return (0, _indexJs3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

},{"../constants/index.js":"iOhcx","../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lj6Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInMonths);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isLastDayOfMonth/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault3.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    var result;
    // Check for the difference of less than month
    if (difference < 1) result = 0;
    else {
        if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        dateLeft.setDate(30);
        dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
        // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        var isLastMonthNotFull = (0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign;
        // Check for cases of one full calendar month
        if ((0, _indexJsDefault4.default)((0, _indexJsDefault.default)(dirtyDateLeft)) && difference === 1 && (0, _indexJsDefault2.default)(dirtyDateLeft, dateRight) === 1) isLastMonthNotFull = false;
        result = sign * (difference - Number(isLastMonthNotFull));
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}

},{"../toDate/index.js":"fsust","../differenceInCalendarMonths/index.js":"8oypH","../compareAsc/index.js":"h01l4","../_lib/requiredArgs/index.js":"9wUgQ","../isLastDayOfMonth/index.js":"1as6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1as6x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLastDayOfMonth);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../endOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function isLastDayOfMonth(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    return (0, _indexJsDefault1.default)(date).getTime() === (0, _indexJsDefault2.default)(date).getTime();
}

},{"../toDate/index.js":"fsust","../endOfDay/index.js":"kLkh7","../endOfMonth/index.js":"4tHlS","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLkh7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfDay);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setHours(23, 59, 59, 999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tHlS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfMonth);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55zSJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInQuarters);
var _indexJs = require("../differenceInMonths/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInQuarters(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 3;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

},{"../differenceInMonths/index.js":"8lj6Z","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uZgU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInSeconds);
var _indexJs = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInSeconds(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 1000;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

},{"../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8EidL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInWeeks);
var _indexJs = require("../differenceInDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInWeeks(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 7;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

},{"../differenceInDays/index.js":"1mpAo","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tncr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>differenceInYears);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault3.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days
    dateLeft.setFullYear(1584);
    dateRight.setFullYear(1584);
    // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastYearNotFull = (0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign;
    var result = sign * (difference - Number(isLastYearNotFull));
    // Prevent negative zero
    return result === 0 ? 0 : result;
}

},{"../toDate/index.js":"fsust","../differenceInCalendarYears/index.js":"f4WIY","../compareAsc/index.js":"h01l4","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMgQO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfHour);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfHour(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMinutes(59, 59, 999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gw4uA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfMinute);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMinute(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setSeconds(59, 999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajYge":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfQuarter);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3 + 3;
    date.setMonth(month, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JZ5k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfSecond);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfSecond(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMilliseconds(999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zQJ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfWeek);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
function endOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault2.default)(1, arguments);
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault1.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
}

},{"../_lib/defaultOptions/index.js":"dWs8l","../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWs8l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
var defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAT7v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>endOfYear);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    date.setFullYear(year + 1, 0, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnm6V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>format);
var _indexJs = require("../isValid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/format/formatters/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/protectedTokens/index.js");
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/defaultOptions/index.js");
var _indexJs10 = require("../_lib/defaultLocale/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs10);
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0, _indexJsDefault7.default)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions = (0, _indexJs9.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault8.default);
    var firstWeekContainsDate = (0, _indexJsDefault6.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var weekStartsOn = (0, _indexJsDefault6.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!locale.localize) throw new RangeError('locale must contain localize property');
    if (!locale.formatLong) throw new RangeError('locale must contain formatLong property');
    var originalDate = (0, _indexJsDefault2.default)(dirtyDate);
    if (!(0, _indexJsDefault.default)(originalDate)) throw new RangeError('Invalid time value');
    // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = (0, _indexJsDefault5.default)(originalDate);
    var utcDate = (0, _indexJsDefault1.default)(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = (0, _indexJsDefault4.default)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join('').match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = (0, _indexJsDefault3.default)[firstCharacter];
        if (formatter) {
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _indexJs6.isProtectedWeekYearToken)(substring)) (0, _indexJs6.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _indexJs6.isProtectedDayOfYearToken)(substring)) (0, _indexJs6.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        return substring;
    }).join('');
    return result;
}
function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace(doubleQuoteRegExp, "'");
}

},{"../isValid/index.js":"eXoMl","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/format/formatters/index.js":"3cYKM","../_lib/format/longFormatters/index.js":"1ztit","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/protectedTokens/index.js":"4R0Xq","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","../_lib/defaultLocale/index.js":"1rVeP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXoMl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isValid);
var _indexJs = require("../isDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isValid(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    if (!(0, _indexJsDefault.default)(dirtyDate) && typeof dirtyDate !== 'number') return false;
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    return !isNaN(Number(date));
}

},{"../isDate/index.js":"kqNhT","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqNhT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isDate);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function isDate(value) {
    (0, _indexJsDefault.default)(1, arguments);
    return value instanceof Date || (0, _typeofDefault.default)(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lL2M9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>subMilliseconds);
var _indexJs = require("../addMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMilliseconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}

},{"../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cYKM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/getUTCDayOfYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/getUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/getUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/getUTCWeek/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../addLeadingZeros/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../lightFormatters/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function G(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
                return localize.era(era, {
                    width: 'abbreviated'
                });
            // A, B
            case 'GGGGG':
                return localize.era(era, {
                    width: 'narrow'
                });
            // Anno Domini, Before Christ
            case 'GGGG':
            default:
                return localize.era(era, {
                    width: 'wide'
                });
        }
    },
    // Year
    y: function y(date, token, localize) {
        // Ordinal number
        if (token === 'yo') {
            var signedYear = date.getUTCFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: 'year'
            });
        }
        return (0, _indexJsDefault6.default).y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize, options) {
        var signedWeekYear = (0, _indexJsDefault4.default)(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === 'YY') {
            var twoDigitYear = weekYear % 100;
            return (0, _indexJsDefault5.default)(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === 'Yo') return localize.ordinalNumber(weekYear, {
            unit: 'year'
        });
        // Padding
        return (0, _indexJsDefault5.default)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
        var isoWeekYear = (0, _indexJsDefault2.default)(date);
        // Padding
        return (0, _indexJsDefault5.default)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
        var year = date.getUTCFullYear();
        return (0, _indexJsDefault5.default)(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'Q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'QQ':
                return (0, _indexJsDefault5.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'Qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'QQQ':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'QQQQQ':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // 1st quarter, 2nd quarter, ...
            case 'QQQQ':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone quarter
    q: function q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'qq':
                return (0, _indexJsDefault5.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'qqq':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'qqqqq':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // 1st quarter, 2nd quarter, ...
            case 'qqqq':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Month
    M: function M(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case 'M':
            case 'MM':
                return (0, _indexJsDefault6.default).M(date, token);
            // 1st, 2nd, ..., 12th
            case 'Mo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'MMM':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // J, F, ..., D
            case 'MMMMM':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // January, February, ..., December
            case 'MMMM':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone month
    L: function L(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case 'L':
                return String(month + 1);
            // 01, 02, ..., 12
            case 'LL':
                return (0, _indexJsDefault5.default)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case 'Lo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'LLL':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // J, F, ..., D
            case 'LLLLL':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // January, February, ..., December
            case 'LLLL':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Local week of year
    w: function w(date, token, localize, options) {
        var week = (0, _indexJsDefault3.default)(date, options);
        if (token === 'wo') return localize.ordinalNumber(week, {
            unit: 'week'
        });
        return (0, _indexJsDefault5.default)(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize) {
        var isoWeek = (0, _indexJsDefault1.default)(date);
        if (token === 'Io') return localize.ordinalNumber(isoWeek, {
            unit: 'week'
        });
        return (0, _indexJsDefault5.default)(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize) {
        if (token === 'do') return localize.ordinalNumber(date.getUTCDate(), {
            unit: 'date'
        });
        return (0, _indexJsDefault6.default).d(date, token);
    },
    // Day of year
    D: function D(date, token, localize) {
        var dayOfYear = (0, _indexJsDefault.default)(date);
        if (token === 'Do') return localize.ordinalNumber(dayOfYear, {
            unit: 'dayOfYear'
        });
        return (0, _indexJsDefault5.default)(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'EEEEE':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'EEEEEE':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'EEEE':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Local day of week
    e: function e(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case 'e':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'ee':
                return (0, _indexJsDefault5.default)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case 'eo':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'eee':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'eeeee':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'eeeeee':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'eeee':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case 'c':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'cc':
                return (0, _indexJsDefault5.default)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case 'co':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'ccc':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // T
            case 'ccccc':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // Tu
            case 'cccccc':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'standalone'
                });
            // Tuesday
            case 'cccc':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // ISO day of week
    i: function i(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case 'i':
                return String(isoDayOfWeek);
            // 02
            case 'ii':
                return (0, _indexJsDefault5.default)(isoDayOfWeek, token.length);
            // 2nd
            case 'io':
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: 'day'
                });
            // Tue
            case 'iii':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'iiiii':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'iiiiii':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'iiii':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM or PM
    a: function a(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'aaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'aaaaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'aaaa':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'b':
            case 'bb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'bbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'bbbbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'bbbb':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case 'B':
            case 'BB':
            case 'BBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'BBBBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'BBBB':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Hour [1-12]
    h: function h(date, token, localize) {
        if (token === 'ho') {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return (0, _indexJsDefault6.default).h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize) {
        if (token === 'Ho') return localize.ordinalNumber(date.getUTCHours(), {
            unit: 'hour'
        });
        return (0, _indexJsDefault6.default).H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === 'Ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return (0, _indexJsDefault5.default)(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === 'ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return (0, _indexJsDefault5.default)(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize) {
        if (token === 'mo') return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: 'minute'
        });
        return (0, _indexJsDefault6.default).m(date, token);
    },
    // Second
    s: function s(date, token, localize) {
        if (token === 'so') return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: 'second'
        });
        return (0, _indexJsDefault6.default).s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
        return (0, _indexJsDefault6.default).S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return 'Z';
        switch(token){
            // Hours and optional minutes
            case 'X':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case 'XXXX':
            case 'XX':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case 'XXXXX':
            case 'XXX':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case 'x':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case 'xxxx':
            case 'xx':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case 'xxxxx':
            case 'xxx':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'O':
            case 'OO':
            case 'OOO':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'OOOO':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'z':
            case 'zz':
            case 'zzz':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'zzzz':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return (0, _indexJsDefault5.default)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return (0, _indexJsDefault5.default)(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + (0, _indexJsDefault5.default)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? '-' : '+';
        return sign + (0, _indexJsDefault5.default)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = (0, _indexJsDefault5.default)(Math.floor(absOffset / 60), 2);
    var minutes = (0, _indexJsDefault5.default)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
exports.default = formatters;

},{"../../../_lib/getUTCDayOfYear/index.js":"7wqIf","../../../_lib/getUTCISOWeek/index.js":"4nEkI","../../../_lib/getUTCISOWeekYear/index.js":"03QaQ","../../../_lib/getUTCWeek/index.js":"b7GgV","../../../_lib/getUTCWeekYear/index.js":"8i6st","../../addLeadingZeros/index.js":"6pP6x","../lightFormatters/index.js":"9oZiA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wqIf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUTCDayOfYear);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nEkI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUTCISOWeek);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date).getTime() - (0, _indexJsDefault2.default)(date).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

},{"../../toDate/index.js":"fsust","../startOfUTCISOWeek/index.js":"3ta4C","../startOfUTCISOWeekYear/index.js":"4u8O6","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ta4C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfUTCISOWeek);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfUTCISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var weekStartsOn = 1;
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4u8O6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfUTCISOWeekYear);
var _indexJs = require("../getUTCISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var year = (0, _indexJsDefault.default)(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(fourthOfJanuary);
    return date;
}

},{"../getUTCISOWeekYear/index.js":"03QaQ","../startOfUTCISOWeek/index.js":"3ta4C","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03QaQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUTCISOWeekYear);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getUTCISOWeekYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault2.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault2.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7GgV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUTCWeek);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date, options).getTime() - (0, _indexJsDefault2.default)(date, options).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

},{"../../toDate/index.js":"fsust","../startOfUTCWeek/index.js":"dDZbE","../startOfUTCWeekYear/index.js":"bJAVl","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDZbE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfUTCWeek);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../defaultOptions/index.js");
function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJAVl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfUTCWeekYear);
var _indexJs = require("../getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../defaultOptions/index.js");
function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = (0, _indexJsDefault.default)(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault2.default)(firstWeek, options);
    return date;
}

},{"../getUTCWeekYear/index.js":"8i6st","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8i6st":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUTCWeekYear);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../defaultOptions/index.js");
function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault2.default)(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault2.default)(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pP6x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addLeadingZeros);
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = '0' + output;
    return sign + output;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oZiA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../addLeadingZeros/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function y(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _indexJsDefault.default)(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === 'M' ? String(month + 1) : (0, _indexJsDefault.default)(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return dayPeriodEnumValue.toUpperCase();
            case 'aaa':
                return dayPeriodEnumValue;
            case 'aaaaa':
                return dayPeriodEnumValue[0];
            case 'aaaa':
            default:
                return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _indexJsDefault.default)(fractionalSeconds, token.length);
    }
};
exports.default = formatters;

},{"../../addLeadingZeros/index.js":"6pP6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ztit":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'P':
            return formatLong.date({
                width: 'short'
            });
        case 'PP':
            return formatLong.date({
                width: 'medium'
            });
        case 'PPP':
            return formatLong.date({
                width: 'long'
            });
        case 'PPPP':
        default:
            return formatLong.date({
                width: 'full'
            });
    }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'p':
            return formatLong.time({
                width: 'short'
            });
        case 'pp':
            return formatLong.time({
                width: 'medium'
            });
        case 'ppp':
            return formatLong.time({
                width: 'long'
            });
        case 'pppp':
        default:
            return formatLong.time({
                width: 'full'
            });
    }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case 'P':
            dateTimeFormat = formatLong.dateTime({
                width: 'short'
            });
            break;
        case 'PP':
            dateTimeFormat = formatLong.dateTime({
                width: 'medium'
            });
            break;
        case 'PPP':
            dateTimeFormat = formatLong.dateTime({
                width: 'long'
            });
            break;
        case 'PPPP':
        default:
            dateTimeFormat = formatLong.dateTime({
                width: 'full'
            });
            break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
exports.default = longFormatters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4R0Xq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken);
parcelHelpers.export(exports, "throwProtectedError", ()=>throwProtectedError);
var protectedDayOfYearTokens = [
    'D',
    'DD'
];
var protectedWeekYearTokens = [
    'YY',
    'YYYY'
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === 'YYYY') throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === 'YY') throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === 'D') throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === 'DD') throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rVeP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../locale/en-US/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default);

},{"../../locale/en-US/index.js":"8XKCq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XKCq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: 'en-US',
    formatDistance: (0, _indexJsDefault.default),
    formatLong: (0, _indexJsDefault1.default),
    formatRelative: (0, _indexJsDefault2.default),
    localize: (0, _indexJsDefault3.default),
    match: (0, _indexJsDefault4.default),
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"lLrcE","./_lib/formatLong/index.js":"cA6Xb","./_lib/formatRelative/index.js":"9QlMp","./_lib/localize/index.js":"jv1Fa","./_lib/match/index.js":"1wA2o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLrcE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXWeeks: {
        one: 'about 1 week',
        other: 'about {{count}} weeks'
    },
    xWeeks: {
        one: '1 week',
        other: '{{count}} weeks'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === 'string') result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace('{{count}}', count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return 'in ' + result;
        else return result + ' ago';
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cA6Xb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: (0, _indexJsDefault.default)({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: (0, _indexJsDefault.default)({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: (0, _indexJsDefault.default)({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"h1FGd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1FGd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFormatLongFn);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QlMp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1Fa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        'B',
        'A'
    ],
    abbreviated: [
        'BC',
        'AD'
    ],
    wide: [
        'Before Christ',
        'Anno Domini'
    ]
};
var quarterValues = {
    narrow: [
        '1',
        '2',
        '3',
        '4'
    ],
    abbreviated: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
    ],
    wide: [
        '1st quarter',
        '2nd quarter',
        '3rd quarter',
        '4th quarter'
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D'
    ],
    abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    wide: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
var dayValues = {
    narrow: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],
    short: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ],
    abbreviated: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ],
    wide: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + 'st';
        case 2:
            return number + 'nd';
        case 3:
            return number + 'rd';
    }
    return number + 'th';
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: (0, _indexJsDefault.default)({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: (0, _indexJsDefault.default)({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: (0, _indexJsDefault.default)({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"5l2rZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5l2rZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildLocalizeFn);
function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wA2o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: (0, _indexJsDefault1.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: (0, _indexJsDefault.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: (0, _indexJsDefault.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function valueCallback(index) {
            return index + 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: (0, _indexJsDefault.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
exports.default = match;

},{"../../../_lib/buildMatchFn/index.js":"2nEf9","../../../_lib/buildMatchPatternFn/index.js":"4GjCS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nEf9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildMatchFn);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GjCS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildMatchPatternFn);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVw8O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parse);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _createForOfIteratorHelper = require("@babel/runtime/helpers/esm/createForOfIteratorHelper");
var _createForOfIteratorHelperDefault = parcelHelpers.interopDefault(_createForOfIteratorHelper);
var _indexJs = require("../_lib/defaultLocale/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/assign/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/protectedTokens/index.js");
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _setterJs = require("./_lib/Setter.js");
var _indexJs9 = require("./_lib/parsers/index.js");
var _indexJs10 = require("../_lib/defaultOptions/index.js"); // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0, _indexJsDefault7.default)(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var defaultOptions = (0, _indexJs10.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault.default);
    if (!locale.match) throw new RangeError('locale must contain match property');
    var firstWeekContainsDate = (0, _indexJsDefault6.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var weekStartsOn = (0, _indexJsDefault6.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (formatString === '') {
        if (dateString === '') return (0, _indexJsDefault2.default)(dirtyReferenceDate);
        else return new Date(NaN);
    }
    var subFnOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale
    };
    // If timezone isn't specified, it will be set to the system timezone
    var setters = [
        new (0, _setterJs.DateToSystemTimezoneSetter)()
    ];
    var tokens = formatString.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter in (0, _indexJsDefault4.default)) {
            var longFormatter = (0, _indexJsDefault4.default)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join('').match(formattingTokensRegExp);
    var usedTokens = [];
    var _iterator = (0, _createForOfIteratorHelperDefault.default)(tokens), _step;
    try {
        var _loop = function _loop() {
            var token = _step.value;
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _indexJs6.isProtectedWeekYearToken)(token)) (0, _indexJs6.throwProtectedError)(token, formatString, dirtyDateString);
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _indexJs6.isProtectedDayOfYearToken)(token)) (0, _indexJs6.throwProtectedError)(token, formatString, dirtyDateString);
            var firstCharacter = token[0];
            var parser = (0, _indexJs9.parsers)[firstCharacter];
            if (parser) {
                var incompatibleTokens = parser.incompatibleTokens;
                if (Array.isArray(incompatibleTokens)) {
                    var incompatibleToken = usedTokens.find(function(usedToken) {
                        return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
                    });
                    if (incompatibleToken) throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
                } else if (parser.incompatibleTokens === '*' && usedTokens.length > 0) throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
                usedTokens.push({
                    token: firstCharacter,
                    fullToken: token
                });
                var parseResult = parser.run(dateString, token, locale.match, subFnOptions);
                if (!parseResult) return {
                    v: new Date(NaN)
                };
                setters.push(parseResult.setter);
                dateString = parseResult.rest;
            } else {
                if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
                // Replace two single quote characters with one single quote character
                if (token === "''") token = "'";
                else if (firstCharacter === "'") token = cleanEscapedString(token);
                // Cut token from string, or, if string doesn't match the token, return Invalid Date
                if (dateString.indexOf(token) === 0) dateString = dateString.slice(token.length);
                else return {
                    v: new Date(NaN)
                };
            }
        };
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var _ret = _loop();
            if ((0, _typeofDefault.default)(_ret) === "object") return _ret.v;
        }
    // Check if the remaining input contains something other than whitespace
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) return new Date(NaN);
    var uniquePrioritySetters = setters.map(function(setter) {
        return setter.priority;
    }).sort(function(a, b) {
        return b - a;
    }).filter(function(priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function(priority) {
        return setters.filter(function(setter) {
            return setter.priority === priority;
        }).sort(function(a, b) {
            return b.subPriority - a.subPriority;
        });
    }).map(function(setterArray) {
        return setterArray[0];
    });
    var date = (0, _indexJsDefault2.default)(dirtyReferenceDate);
    if (isNaN(date.getTime())) return new Date(NaN);
    // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    var utcDate = (0, _indexJsDefault1.default)(date, (0, _indexJsDefault5.default)(date));
    var flags = {};
    var _iterator2 = (0, _createForOfIteratorHelperDefault.default)(uniquePrioritySetters), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var setter = _step2.value;
            if (!setter.validate(utcDate, subFnOptions)) return new Date(NaN);
            var result = setter.set(utcDate, flags, subFnOptions);
            // Result is tuple (date, flags)
            if (Array.isArray(result)) {
                utcDate = result[0];
                (0, _indexJsDefault3.default)(flags, result[1]);
            // Result is date
            } else utcDate = result;
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    return utcDate;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/createForOfIteratorHelper":"fC04H","../_lib/defaultLocale/index.js":"1rVeP","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/assign/index.js":"hBuJM","../_lib/format/longFormatters/index.js":"1ztit","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/protectedTokens/index.js":"4R0Xq","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","./_lib/Setter.js":"iIumE","./_lib/parsers/index.js":"k4V8j","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fC04H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_createForOfIteratorHelper);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = (0, _unsupportedIterableToArrayJsDefault.default)(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var _n = 0, F = function F() {};
            return {
                s: F,
                n: function n() {
                    return _n >= r.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: r[_n++]
                    };
                },
                e: function e(r) {
                    throw r;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, u = !1;
    return {
        s: function s() {
            t = t.call(r);
        },
        n: function n() {
            var r = t.next();
            return a = r.done, r;
        },
        e: function e(r) {
            u = !0, o = r;
        },
        f: function f() {
            try {
                a || null == t["return"] || t["return"]();
            } finally{
                if (u) throw o;
            }
        }
    };
}

},{"./unsupportedIterableToArray.js":"1TZRB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TZRB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_unsupportedIterableToArray);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return (0, _arrayLikeToArrayJsDefault.default)(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, _arrayLikeToArrayJsDefault.default)(r, a) : void 0;
    }
}

},{"./arrayLikeToArray.js":"gvgr8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvgr8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayLikeToArray);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBuJM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>assign);
function assign(target, object) {
    if (target == null) throw new TypeError('assign requires that input parameter not be null or undefined');
    for(var property in object)if (Object.prototype.hasOwnProperty.call(object, property)) target[property] = object[property];
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iIumE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Setter", ()=>Setter);
parcelHelpers.export(exports, "ValueSetter", ()=>ValueSetter);
parcelHelpers.export(exports, "DateToSystemTimezoneSetter", ()=>DateToSystemTimezoneSetter);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/ function() {
    function Setter() {
        (0, _classCallCheckDefault.default)(this, Setter);
        (0, _definePropertyDefault.default)(this, "priority", void 0);
        (0, _definePropertyDefault.default)(this, "subPriority", 0);
    }
    (0, _createClassDefault.default)(Setter, [
        {
            key: "validate",
            value: function validate(_utcDate, _options) {
                return true;
            }
        }
    ]);
    return Setter;
}();
var ValueSetter = /*#__PURE__*/ function(_Setter) {
    (0, _inheritsDefault.default)(ValueSetter, _Setter);
    var _super = (0, _createSuperDefault.default)(ValueSetter);
    function ValueSetter(value, validateValue, setValue, priority, subPriority) {
        var _this;
        (0, _classCallCheckDefault.default)(this, ValueSetter);
        _this = _super.call(this);
        _this.value = value;
        _this.validateValue = validateValue;
        _this.setValue = setValue;
        _this.priority = priority;
        if (subPriority) _this.subPriority = subPriority;
        return _this;
    }
    (0, _createClassDefault.default)(ValueSetter, [
        {
            key: "validate",
            value: function validate(utcDate, options) {
                return this.validateValue(utcDate, this.value, options);
            }
        },
        {
            key: "set",
            value: function set(utcDate, flags, options) {
                return this.setValue(utcDate, flags, this.value, options);
            }
        }
    ]);
    return ValueSetter;
}(Setter);
var DateToSystemTimezoneSetter = /*#__PURE__*/ function(_Setter2) {
    (0, _inheritsDefault.default)(DateToSystemTimezoneSetter, _Setter2);
    var _super2 = (0, _createSuperDefault.default)(DateToSystemTimezoneSetter);
    function DateToSystemTimezoneSetter() {
        var _this2;
        (0, _classCallCheckDefault.default)(this, DateToSystemTimezoneSetter);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this2 = _super2.call.apply(_super2, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this2), "subPriority", -1);
        return _this2;
    }
    (0, _createClassDefault.default)(DateToSystemTimezoneSetter, [
        {
            key: "set",
            value: function set(date, flags) {
                if (flags.timestampIsSet) return date;
                var convertedDate = new Date(0);
                convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
                return convertedDate;
            }
        }
    ]);
    return DateToSystemTimezoneSetter;
}(Setter);

},{"@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iy3su":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_assertThisInitialized);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drFw3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_inherits);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && (0, _setPrototypeOfJsDefault.default)(t, e);
}

},{"./setPrototypeOf.js":"3XDFA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XDFA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_setPrototypeOf);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hp3mc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_createSuper);
var _getPrototypeOfJs = require("./getPrototypeOf.js");
var _getPrototypeOfJsDefault = parcelHelpers.interopDefault(_getPrototypeOfJs);
var _isNativeReflectConstructJs = require("./isNativeReflectConstruct.js");
var _isNativeReflectConstructJsDefault = parcelHelpers.interopDefault(_isNativeReflectConstructJs);
var _possibleConstructorReturnJs = require("./possibleConstructorReturn.js");
var _possibleConstructorReturnJsDefault = parcelHelpers.interopDefault(_possibleConstructorReturnJs);
function _createSuper(t) {
    var r = (0, _isNativeReflectConstructJsDefault.default)();
    return function() {
        var e, o = (0, _getPrototypeOfJsDefault.default)(t);
        if (r) {
            var s = (0, _getPrototypeOfJsDefault.default)(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return (0, _possibleConstructorReturnJsDefault.default)(this, e);
    };
}

},{"./getPrototypeOf.js":"edBWC","./isNativeReflectConstruct.js":"6LwWg","./possibleConstructorReturn.js":"jIBiB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edBWC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_getPrototypeOf);
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LwWg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isNativeReflectConstruct);
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIBiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_possibleConstructorReturn);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _assertThisInitializedJs = require("./assertThisInitialized.js");
var _assertThisInitializedJsDefault = parcelHelpers.interopDefault(_assertThisInitializedJs);
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == (0, _typeofJsDefault.default)(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, _assertThisInitializedJsDefault.default)(t);
}

},{"./typeof.js":"i7HWY","./assertThisInitialized.js":"iy3su","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNx1x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_classCallCheck);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZyth":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_createClass);
var _toPropertyKeyJs = require("./toPropertyKey.js");
var _toPropertyKeyJsDefault = parcelHelpers.interopDefault(_toPropertyKeyJs);
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, _toPropertyKeyJsDefault.default)(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}

},{"./toPropertyKey.js":"cviYI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cviYI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toPropertyKey);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _toPrimitiveJs = require("./toPrimitive.js");
var _toPrimitiveJsDefault = parcelHelpers.interopDefault(_toPrimitiveJs);
function toPropertyKey(t) {
    var i = (0, _toPrimitiveJsDefault.default)(t, "string");
    return "symbol" == (0, _typeofJsDefault.default)(i) ? i : i + "";
}

},{"./typeof.js":"i7HWY","./toPrimitive.js":"497Dv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"497Dv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toPrimitive);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
function toPrimitive(t, r) {
    if ("object" != (0, _typeofJsDefault.default)(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, _typeofJsDefault.default)(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}

},{"./typeof.js":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbmCA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_defineProperty);
var _toPropertyKeyJs = require("./toPropertyKey.js");
var _toPropertyKeyJsDefault = parcelHelpers.interopDefault(_toPropertyKeyJs);
function _defineProperty(e, r, t) {
    return (r = (0, _toPropertyKeyJsDefault.default)(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

},{"./toPropertyKey.js":"cviYI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4V8j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parsers", ()=>parsers);
var _eraParserJs = require("./EraParser.js");
var _yearParserJs = require("./YearParser.js");
var _localWeekYearParserJs = require("./LocalWeekYearParser.js");
var _isoweekYearParserJs = require("./ISOWeekYearParser.js");
var _extendedYearParserJs = require("./ExtendedYearParser.js");
var _quarterParserJs = require("./QuarterParser.js");
var _standAloneQuarterParserJs = require("./StandAloneQuarterParser.js");
var _monthParserJs = require("./MonthParser.js");
var _standAloneMonthParserJs = require("./StandAloneMonthParser.js");
var _localWeekParserJs = require("./LocalWeekParser.js");
var _isoweekParserJs = require("./ISOWeekParser.js");
var _dateParserJs = require("./DateParser.js");
var _dayOfYearParserJs = require("./DayOfYearParser.js");
var _dayParserJs = require("./DayParser.js");
var _localDayParserJs = require("./LocalDayParser.js");
var _standAloneLocalDayParserJs = require("./StandAloneLocalDayParser.js");
var _isodayParserJs = require("./ISODayParser.js");
var _ampmparserJs = require("./AMPMParser.js");
var _ampmmidnightParserJs = require("./AMPMMidnightParser.js");
var _dayPeriodParserJs = require("./DayPeriodParser.js");
var _hour1To12ParserJs = require("./Hour1to12Parser.js");
var _hour0To23ParserJs = require("./Hour0to23Parser.js");
var _hour0To11ParserJs = require("./Hour0To11Parser.js");
var _hour1To24ParserJs = require("./Hour1To24Parser.js");
var _minuteParserJs = require("./MinuteParser.js");
var _secondParserJs = require("./SecondParser.js");
var _fractionOfSecondParserJs = require("./FractionOfSecondParser.js");
var _isotimezoneWithZParserJs = require("./ISOTimezoneWithZParser.js");
var _isotimezoneParserJs = require("./ISOTimezoneParser.js");
var _timestampSecondsParserJs = require("./TimestampSecondsParser.js");
var _timestampMillisecondsParserJs = require("./TimestampMillisecondsParser.js");
var parsers = {
    G: new (0, _eraParserJs.EraParser)(),
    y: new (0, _yearParserJs.YearParser)(),
    Y: new (0, _localWeekYearParserJs.LocalWeekYearParser)(),
    R: new (0, _isoweekYearParserJs.ISOWeekYearParser)(),
    u: new (0, _extendedYearParserJs.ExtendedYearParser)(),
    Q: new (0, _quarterParserJs.QuarterParser)(),
    q: new (0, _standAloneQuarterParserJs.StandAloneQuarterParser)(),
    M: new (0, _monthParserJs.MonthParser)(),
    L: new (0, _standAloneMonthParserJs.StandAloneMonthParser)(),
    w: new (0, _localWeekParserJs.LocalWeekParser)(),
    I: new (0, _isoweekParserJs.ISOWeekParser)(),
    d: new (0, _dateParserJs.DateParser)(),
    D: new (0, _dayOfYearParserJs.DayOfYearParser)(),
    E: new (0, _dayParserJs.DayParser)(),
    e: new (0, _localDayParserJs.LocalDayParser)(),
    c: new (0, _standAloneLocalDayParserJs.StandAloneLocalDayParser)(),
    i: new (0, _isodayParserJs.ISODayParser)(),
    a: new (0, _ampmparserJs.AMPMParser)(),
    b: new (0, _ampmmidnightParserJs.AMPMMidnightParser)(),
    B: new (0, _dayPeriodParserJs.DayPeriodParser)(),
    h: new (0, _hour1To12ParserJs.Hour1to12Parser)(),
    H: new (0, _hour0To23ParserJs.Hour0to23Parser)(),
    K: new (0, _hour0To11ParserJs.Hour0To11Parser)(),
    k: new (0, _hour1To24ParserJs.Hour1To24Parser)(),
    m: new (0, _minuteParserJs.MinuteParser)(),
    s: new (0, _secondParserJs.SecondParser)(),
    S: new (0, _fractionOfSecondParserJs.FractionOfSecondParser)(),
    X: new (0, _isotimezoneWithZParserJs.ISOTimezoneWithZParser)(),
    x: new (0, _isotimezoneParserJs.ISOTimezoneParser)(),
    t: new (0, _timestampSecondsParserJs.TimestampSecondsParser)(),
    T: new (0, _timestampMillisecondsParserJs.TimestampMillisecondsParser)()
};

},{"./EraParser.js":"aXnT0","./YearParser.js":"ahFj6","./LocalWeekYearParser.js":"65m4R","./ISOWeekYearParser.js":"6p6Sa","./ExtendedYearParser.js":"4rJp8","./QuarterParser.js":"lkQmG","./StandAloneQuarterParser.js":"9zxhy","./MonthParser.js":"7gzbd","./StandAloneMonthParser.js":"itoh7","./LocalWeekParser.js":"dcoE4","./ISOWeekParser.js":"fppkm","./DateParser.js":"lnbjC","./DayOfYearParser.js":"al32L","./DayParser.js":"aov76","./LocalDayParser.js":"hc8LA","./StandAloneLocalDayParser.js":"6igat","./ISODayParser.js":"2kwtL","./AMPMParser.js":"2zbXB","./AMPMMidnightParser.js":"jb5BD","./DayPeriodParser.js":"9kE14","./Hour1to12Parser.js":"gzNEC","./Hour0to23Parser.js":"j3kuC","./Hour0To11Parser.js":"73sgE","./Hour1To24Parser.js":"3WDRF","./MinuteParser.js":"eALta","./SecondParser.js":"1nVjx","./FractionOfSecondParser.js":"46M6Z","./ISOTimezoneWithZParser.js":"b1yp4","./ISOTimezoneParser.js":"bDXkg","./TimestampSecondsParser.js":"kPdA3","./TimestampMillisecondsParser.js":"gy8e8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXnT0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EraParser", ()=>EraParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var EraParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(EraParser, _Parser);
    var _super = (0, _createSuperDefault.default)(EraParser);
    function EraParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, EraParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 140);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'R',
            'u',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(EraParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // AD, BC
                    case 'G':
                    case 'GG':
                    case 'GGG':
                        return match.era(dateString, {
                            width: 'abbreviated'
                        }) || match.era(dateString, {
                            width: 'narrow'
                        });
                    // A, B
                    case 'GGGGG':
                        return match.era(dateString, {
                            width: 'narrow'
                        });
                    // Anno Domini, Before Christ
                    case 'GGGG':
                    default:
                        return match.era(dateString, {
                            width: 'wide'
                        }) || match.era(dateString, {
                            width: 'abbreviated'
                        }) || match.era(dateString, {
                            width: 'narrow'
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                flags.era = value;
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return EraParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoGZr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Parser", ()=>Parser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _setterJs = require("./Setter.js");
var Parser = /*#__PURE__*/ function() {
    function Parser() {
        (0, _classCallCheckDefault.default)(this, Parser);
        (0, _definePropertyDefault.default)(this, "incompatibleTokens", void 0);
        (0, _definePropertyDefault.default)(this, "priority", void 0);
        (0, _definePropertyDefault.default)(this, "subPriority", void 0);
    }
    (0, _createClassDefault.default)(Parser, [
        {
            key: "run",
            value: function run(dateString, token, match, options) {
                var result = this.parse(dateString, token, match, options);
                if (!result) return null;
                return {
                    setter: new (0, _setterJs.ValueSetter)(result.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: result.rest
                };
            }
        },
        {
            key: "validate",
            value: function validate(_utcDate, _value, _options) {
                return true;
            }
        }
    ]);
    return Parser;
}();

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/defineProperty":"hbmCA","./Setter.js":"iIumE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahFj6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "YearParser", ()=>YearParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var YearParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(YearParser, _Parser);
    var _super = (0, _createSuperDefault.default)(YearParser);
    function YearParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, YearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 130);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'u',
            'w',
            'I',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(YearParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(year) {
                    return {
                        year: year,
                        isTwoDigitYear: token === 'yy'
                    };
                };
                switch(token){
                    case 'y':
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(4, dateString), valueCallback);
                    case 'yo':
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: 'year'
                        }), valueCallback);
                    default:
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                var currentYear = date.getUTCFullYear();
                if (value.isTwoDigitYear) {
                    var normalizedTwoDigitYear = (0, _utilsJs.normalizeTwoDigitYear)(value.year, currentYear);
                    date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                    date.setUTCHours(0, 0, 0, 0);
                    return date;
                }
                var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
                date.setUTCFullYear(year, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return YearParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5y8M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapValue", ()=>mapValue);
parcelHelpers.export(exports, "parseNumericPattern", ()=>parseNumericPattern);
parcelHelpers.export(exports, "parseTimezonePattern", ()=>parseTimezonePattern);
parcelHelpers.export(exports, "parseAnyDigitsSigned", ()=>parseAnyDigitsSigned);
parcelHelpers.export(exports, "parseNDigits", ()=>parseNDigits);
parcelHelpers.export(exports, "parseNDigitsSigned", ()=>parseNDigitsSigned);
parcelHelpers.export(exports, "dayPeriodEnumToHours", ()=>dayPeriodEnumToHours);
parcelHelpers.export(exports, "normalizeTwoDigitYear", ()=>normalizeTwoDigitYear);
parcelHelpers.export(exports, "isLeapYearIndex", ()=>isLeapYearIndex);
var _indexJs = require("../../constants/index.js");
var _constantsJs = require("./constants.js");
function mapValue(parseFnResult, mapFn) {
    if (!parseFnResult) return parseFnResult;
    return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest
    };
}
function parseNumericPattern(pattern, dateString) {
    var matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, dateString) {
    var matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    // Input is 'Z'
    if (matchResult[0] === 'Z') return {
        value: 0,
        rest: dateString.slice(1)
    };
    var sign = matchResult[1] === '+' ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * (0, _indexJs.millisecondsInHour) + minutes * (0, _indexJs.millisecondsInMinute) + seconds * (0, _indexJs.millisecondsInSecond)),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(dateString) {
    return parseNumericPattern((0, _constantsJs.numericPatterns).anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
    switch(n){
        case 1:
            return parseNumericPattern((0, _constantsJs.numericPatterns).singleDigit, dateString);
        case 2:
            return parseNumericPattern((0, _constantsJs.numericPatterns).twoDigits, dateString);
        case 3:
            return parseNumericPattern((0, _constantsJs.numericPatterns).threeDigits, dateString);
        case 4:
            return parseNumericPattern((0, _constantsJs.numericPatterns).fourDigits, dateString);
        default:
            return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), dateString);
    }
}
function parseNDigitsSigned(n, dateString) {
    switch(n){
        case 1:
            return parseNumericPattern((0, _constantsJs.numericPatterns).singleDigitSigned, dateString);
        case 2:
            return parseNumericPattern((0, _constantsJs.numericPatterns).twoDigitsSigned, dateString);
        case 3:
            return parseNumericPattern((0, _constantsJs.numericPatterns).threeDigitsSigned, dateString);
        case 4:
            return parseNumericPattern((0, _constantsJs.numericPatterns).fourDigitsSigned, dateString);
        default:
            return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), dateString);
    }
}
function dayPeriodEnumToHours(dayPeriod) {
    switch(dayPeriod){
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        case 'am':
        case 'midnight':
        case 'night':
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0;
    // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;
    if (absCurrentYear <= 50) result = twoDigitYear || 100;
    else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

},{"../../constants/index.js":"iOhcx","./constants.js":"dtRjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtRjG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numericPatterns", ()=>numericPatterns);
parcelHelpers.export(exports, "timezonePatterns", ()=>timezonePatterns);
var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65m4R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalWeekYearParser", ()=>LocalWeekYearParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var LocalWeekYearParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(LocalWeekYearParser, _Parser);
    var _super = (0, _createSuperDefault.default)(LocalWeekYearParser);
    function LocalWeekYearParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, LocalWeekYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 130);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'y',
            'R',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(LocalWeekYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(year) {
                    return {
                        year: year,
                        isTwoDigitYear: token === 'YY'
                    };
                };
                switch(token){
                    case 'Y':
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(4, dateString), valueCallback);
                    case 'Yo':
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: 'year'
                        }), valueCallback);
                    default:
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
            }
        },
        {
            key: "set",
            value: function set(date, flags, value, options) {
                var currentYear = (0, _indexJsDefault.default)(date, options);
                if (value.isTwoDigitYear) {
                    var normalizedTwoDigitYear = (0, _utilsJs.normalizeTwoDigitYear)(value.year, currentYear);
                    date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
                    date.setUTCHours(0, 0, 0, 0);
                    return (0, _indexJsDefault1.default)(date, options);
                }
                var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
                date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return (0, _indexJsDefault1.default)(date, options);
            }
        }
    ]);
    return LocalWeekYearParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/getUTCWeekYear/index.js":"8i6st","../../../_lib/startOfUTCWeek/index.js":"dDZbE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6p6Sa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOWeekYearParser", ()=>ISOWeekYearParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/startOfUTCISOWeek/index.js"); // ISO week-numbering year
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var ISOWeekYearParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(ISOWeekYearParser, _Parser);
    var _super = (0, _createSuperDefault.default)(ISOWeekYearParser);
    function ISOWeekYearParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, ISOWeekYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 130);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'G',
            'y',
            'Y',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(ISOWeekYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                if (token === 'R') return (0, _utilsJs.parseNDigitsSigned)(4, dateString);
                return (0, _utilsJs.parseNDigitsSigned)(token.length, dateString);
            }
        },
        {
            key: "set",
            value: function set(_date, _flags, value) {
                var firstWeekOfYear = new Date(0);
                firstWeekOfYear.setUTCFullYear(value, 0, 4);
                firstWeekOfYear.setUTCHours(0, 0, 0, 0);
                return (0, _indexJsDefault.default)(firstWeekOfYear);
            }
        }
    ]);
    return ISOWeekYearParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rJp8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtendedYearParser", ()=>ExtendedYearParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var ExtendedYearParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(ExtendedYearParser, _Parser);
    var _super = (0, _createSuperDefault.default)(ExtendedYearParser);
    function ExtendedYearParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, ExtendedYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 130);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'G',
            'y',
            'Y',
            'R',
            'w',
            'I',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(ExtendedYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                if (token === 'u') return (0, _utilsJs.parseNDigitsSigned)(4, dateString);
                return (0, _utilsJs.parseNDigitsSigned)(token.length, dateString);
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return ExtendedYearParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkQmG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuarterParser", ()=>QuarterParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var QuarterParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(QuarterParser, _Parser);
    var _super = (0, _createSuperDefault.default)(QuarterParser);
    function QuarterParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, QuarterParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 120);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(QuarterParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // 1, 2, 3, 4
                    case 'Q':
                    case 'QQ':
                        // 01, 02, 03, 04
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                    // 1st, 2nd, 3rd, 4th
                    case 'Qo':
                        return match.ordinalNumber(dateString, {
                            unit: 'quarter'
                        });
                    // Q1, Q2, Q3, Q4
                    case 'QQQ':
                        return match.quarter(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.quarter(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                    case 'QQQQQ':
                        return match.quarter(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // 1st quarter, 2nd quarter, ...
                    case 'QQQQ':
                    default:
                        return match.quarter(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.quarter(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.quarter(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 4;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return QuarterParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zxhy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneQuarterParser", ()=>StandAloneQuarterParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var StandAloneQuarterParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(StandAloneQuarterParser, _Parser);
    var _super = (0, _createSuperDefault.default)(StandAloneQuarterParser);
    function StandAloneQuarterParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, StandAloneQuarterParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 120);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(StandAloneQuarterParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // 1, 2, 3, 4
                    case 'q':
                    case 'qq':
                        // 01, 02, 03, 04
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                    // 1st, 2nd, 3rd, 4th
                    case 'qo':
                        return match.ordinalNumber(dateString, {
                            unit: 'quarter'
                        });
                    // Q1, Q2, Q3, Q4
                    case 'qqq':
                        return match.quarter(dateString, {
                            width: 'abbreviated',
                            context: 'standalone'
                        }) || match.quarter(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                    case 'qqqqq':
                        return match.quarter(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // 1st quarter, 2nd quarter, ...
                    case 'qqqq':
                    default:
                        return match.quarter(dateString, {
                            width: 'wide',
                            context: 'standalone'
                        }) || match.quarter(dateString, {
                            width: 'abbreviated',
                            context: 'standalone'
                        }) || match.quarter(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 4;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return StandAloneQuarterParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gzbd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MonthParser", ()=>MonthParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _utilsJs = require("../utils.js");
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var MonthParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(MonthParser, _Parser);
    var _super = (0, _createSuperDefault.default)(MonthParser);
    function MonthParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, MonthParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'q',
            'Q',
            'L',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 110);
        return _this;
    }
    (0, _createClassDefault.default)(MonthParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                    return value - 1;
                };
                switch(token){
                    // 1, 2, ..., 12
                    case 'M':
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).month, dateString), valueCallback);
                    // 01, 02, ..., 12
                    case 'MM':
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(2, dateString), valueCallback);
                    // 1st, 2nd, ..., 12th
                    case 'Mo':
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: 'month'
                        }), valueCallback);
                    // Jan, Feb, ..., Dec
                    case 'MMM':
                        return match.month(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.month(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // J, F, ..., D
                    case 'MMMMM':
                        return match.month(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // January, February, ..., December
                    case 'MMMM':
                    default:
                        return match.month(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.month(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.month(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return MonthParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../utils.js":"d5y8M","../Parser.js":"eoGZr","../constants.js":"dtRjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itoh7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneMonthParser", ()=>StandAloneMonthParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var StandAloneMonthParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(StandAloneMonthParser, _Parser);
    var _super = (0, _createSuperDefault.default)(StandAloneMonthParser);
    function StandAloneMonthParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, StandAloneMonthParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 110);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(StandAloneMonthParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                    return value - 1;
                };
                switch(token){
                    // 1, 2, ..., 12
                    case 'L':
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).month, dateString), valueCallback);
                    // 01, 02, ..., 12
                    case 'LL':
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(2, dateString), valueCallback);
                    // 1st, 2nd, ..., 12th
                    case 'Lo':
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: 'month'
                        }), valueCallback);
                    // Jan, Feb, ..., Dec
                    case 'LLL':
                        return match.month(dateString, {
                            width: 'abbreviated',
                            context: 'standalone'
                        }) || match.month(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // J, F, ..., D
                    case 'LLLLL':
                        return match.month(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // January, February, ..., December
                    case 'LLLL':
                    default:
                        return match.month(dateString, {
                            width: 'wide',
                            context: 'standalone'
                        }) || match.month(dateString, {
                            width: 'abbreviated',
                            context: 'standalone'
                        }) || match.month(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return StandAloneMonthParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcoE4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalWeekParser", ()=>LocalWeekParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/startOfUTCWeek/index.js"); // Local week of year
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var LocalWeekParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(LocalWeekParser, _Parser);
    var _super = (0, _createSuperDefault.default)(LocalWeekParser);
    function LocalWeekParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, LocalWeekParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 100);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(LocalWeekParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'w':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).week, dateString);
                    case 'wo':
                        return match.ordinalNumber(dateString, {
                            unit: 'week'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 53;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                return (0, _indexJsDefault1.default)((0, _indexJsDefault.default)(date, value, options), options);
            }
        }
    ]);
    return LocalWeekParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","../../../_lib/setUTCWeek/index.js":"knxjU","../../../_lib/startOfUTCWeek/index.js":"dDZbE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knxjU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setUTCWeek);
var _indexJs = require("../toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setUTCWeek(dirtyDate, dirtyWeek, options) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var week = (0, _indexJsDefault.default)(dirtyWeek);
    var diff = (0, _indexJsDefault2.default)(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}

},{"../toInteger/index.js":"f7kKX","../../toDate/index.js":"fsust","../getUTCWeek/index.js":"b7GgV","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fppkm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOWeekParser", ()=>ISOWeekParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCISOWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/startOfUTCISOWeek/index.js"); // ISO week of year
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var ISOWeekParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(ISOWeekParser, _Parser);
    var _super = (0, _createSuperDefault.default)(ISOWeekParser);
    function ISOWeekParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, ISOWeekParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 100);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(ISOWeekParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'I':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).week, dateString);
                    case 'Io':
                        return match.ordinalNumber(dateString, {
                            unit: 'week'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 53;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                return (0, _indexJsDefault1.default)((0, _indexJsDefault.default)(date, value));
            }
        }
    ]);
    return ISOWeekParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","../../../_lib/setUTCISOWeek/index.js":"7CSIN","../../../_lib/startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CSIN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setUTCISOWeek);
var _indexJs = require("../toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var isoWeek = (0, _indexJsDefault.default)(dirtyISOWeek);
    var diff = (0, _indexJsDefault2.default)(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}

},{"../toInteger/index.js":"f7kKX","../../toDate/index.js":"fsust","../getUTCISOWeek/index.js":"4nEkI","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnbjC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateParser", ()=>DateParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _utilsJs = require("../utils.js");
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DateParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(DateParser, _Parser);
    var _super = (0, _createSuperDefault.default)(DateParser);
    function DateParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, DateParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 90);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "subPriority", 1);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'q',
            'Q',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(DateParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'd':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).date, dateString);
                    case 'do':
                        return match.ordinalNumber(dateString, {
                            unit: 'date'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = (0, _utilsJs.isLeapYearIndex)(year);
                var month = date.getUTCMonth();
                if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
                else return value >= 1 && value <= DAYS_IN_MONTH[month];
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCDate(value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return DateParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../utils.js":"d5y8M","../Parser.js":"eoGZr","../constants.js":"dtRjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"al32L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayOfYearParser", ()=>DayOfYearParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var DayOfYearParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(DayOfYearParser, _Parser);
    var _super = (0, _createSuperDefault.default)(DayOfYearParser);
    function DayOfYearParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, DayOfYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 90);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "subpriority", 1);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'E',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(DayOfYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'D':
                    case 'DD':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).dayOfYear, dateString);
                    case 'Do':
                        return match.ordinalNumber(dateString, {
                            unit: 'date'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = (0, _utilsJs.isLeapYearIndex)(year);
                if (isLeapYear) return value >= 1 && value <= 366;
                else return value >= 1 && value <= 365;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(0, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return DayOfYearParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aov76":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayParser", ()=>DayParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _indexJs = require("../../../_lib/setUTCDay/index.js"); // Day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var DayParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(DayParser, _Parser);
    var _super = (0, _createSuperDefault.default)(DayParser);
    function DayParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, DayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 90);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(DayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // Tue
                    case 'E':
                    case 'EE':
                    case 'EEE':
                        return match.day(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // T
                    case 'EEEEE':
                        return match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // Tu
                    case 'EEEEEE':
                        return match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // Tuesday
                    case 'EEEE':
                    default:
                        return match.day(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = (0, _indexJsDefault.default)(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return DayParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../../../_lib/setUTCDay/index.js":"gbld5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbld5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setUTCDay);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../defaultOptions/index.js");
function setUTCDay(dirtyDate, dirtyDay, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(2, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = (0, _indexJsDefault2.default)(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hc8LA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalDayParser", ()=>LocalDayParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCDay/index.js"); // Local day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var LocalDayParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(LocalDayParser, _Parser);
    var _super = (0, _createSuperDefault.default)(LocalDayParser);
    function LocalDayParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, LocalDayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 90);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'E',
            'i',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(LocalDayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match, options) {
                var valueCallback = function valueCallback(value) {
                    var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                    return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
                };
                switch(token){
                    // 3
                    case 'e':
                    case 'ee':
                        // 03
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                    // 3rd
                    case 'eo':
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: 'day'
                        }), valueCallback);
                    // Tue
                    case 'eee':
                        return match.day(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // T
                    case 'eeeee':
                        return match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // Tu
                    case 'eeeeee':
                        return match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    // Tuesday
                    case 'eeee':
                    default:
                        return match.day(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = (0, _indexJsDefault.default)(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return LocalDayParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/setUTCDay/index.js":"gbld5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6igat":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneLocalDayParser", ()=>StandAloneLocalDayParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCDay/index.js"); // Stand-alone local day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var StandAloneLocalDayParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(StandAloneLocalDayParser, _Parser);
    var _super = (0, _createSuperDefault.default)(StandAloneLocalDayParser);
    function StandAloneLocalDayParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, StandAloneLocalDayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 90);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'E',
            'i',
            'e',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(StandAloneLocalDayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match, options) {
                var valueCallback = function valueCallback(value) {
                    var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                    return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
                };
                switch(token){
                    // 3
                    case 'c':
                    case 'cc':
                        // 03
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                    // 3rd
                    case 'co':
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: 'day'
                        }), valueCallback);
                    // Tue
                    case 'ccc':
                        return match.day(dateString, {
                            width: 'abbreviated',
                            context: 'standalone'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'standalone'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // T
                    case 'ccccc':
                        return match.day(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // Tu
                    case 'cccccc':
                        return match.day(dateString, {
                            width: 'short',
                            context: 'standalone'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                    // Tuesday
                    case 'cccc':
                    default:
                        return match.day(dateString, {
                            width: 'wide',
                            context: 'standalone'
                        }) || match.day(dateString, {
                            width: 'abbreviated',
                            context: 'standalone'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'standalone'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'standalone'
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = (0, _indexJsDefault.default)(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return StandAloneLocalDayParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/setUTCDay/index.js":"gbld5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kwtL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISODayParser", ()=>ISODayParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCISODay/index.js"); // ISO day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var ISODayParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(ISODayParser, _Parser);
    var _super = (0, _createSuperDefault.default)(ISODayParser);
    function ISODayParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, ISODayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 90);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'E',
            'e',
            'c',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(ISODayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                    if (value === 0) return 7;
                    return value;
                };
                switch(token){
                    // 2
                    case 'i':
                    case 'ii':
                        // 02
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                    // 2nd
                    case 'io':
                        return match.ordinalNumber(dateString, {
                            unit: 'day'
                        });
                    // Tue
                    case 'iii':
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        }), valueCallback);
                    // T
                    case 'iiiii':
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        }), valueCallback);
                    // Tu
                    case 'iiiiii':
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        }), valueCallback);
                    // Tuesday
                    case 'iiii':
                    default:
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'short',
                            context: 'formatting'
                        }) || match.day(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        }), valueCallback);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 7;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date = (0, _indexJsDefault.default)(date, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return ISODayParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/setUTCISODay/index.js":"c12Xt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c12Xt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setUTCISODay);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setUTCISODay(dirtyDate, dirtyDay) {
    (0, _indexJsDefault1.default)(2, arguments);
    var day = (0, _indexJsDefault2.default)(dirtyDay);
    if (day % 7 === 0) day = day - 7;
    var weekStartsOn = 1;
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zbXB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AMPMParser", ()=>AMPMParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var AMPMParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(AMPMParser, _Parser);
    var _super = (0, _createSuperDefault.default)(AMPMParser);
    function AMPMParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, AMPMParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 80);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'b',
            'B',
            'H',
            'k',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(AMPMParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'a':
                    case 'aa':
                    case 'aaa':
                        return match.dayPeriod(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    case 'aaaaa':
                        return match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    case 'aaaa':
                    default:
                        return match.dayPeriod(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
                return date;
            }
        }
    ]);
    return AMPMParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jb5BD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AMPMMidnightParser", ()=>AMPMMidnightParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var AMPMMidnightParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(AMPMMidnightParser, _Parser);
    var _super = (0, _createSuperDefault.default)(AMPMMidnightParser);
    function AMPMMidnightParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, AMPMMidnightParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 80);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'a',
            'B',
            'H',
            'k',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(AMPMMidnightParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'b':
                    case 'bb':
                    case 'bbb':
                        return match.dayPeriod(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    case 'bbbbb':
                        return match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    case 'bbbb':
                    default:
                        return match.dayPeriod(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
                return date;
            }
        }
    ]);
    return AMPMMidnightParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kE14":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayPeriodParser", ()=>DayPeriodParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js"); // in the morning, in the afternoon, in the evening, at night
var DayPeriodParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(DayPeriodParser, _Parser);
    var _super = (0, _createSuperDefault.default)(DayPeriodParser);
    function DayPeriodParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, DayPeriodParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 80);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'a',
            'b',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(DayPeriodParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'B':
                    case 'BB':
                    case 'BBB':
                        return match.dayPeriod(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    case 'BBBBB':
                        return match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                    case 'BBBB':
                    default:
                        return match.dayPeriod(dateString, {
                            width: 'wide',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'abbreviated',
                            context: 'formatting'
                        }) || match.dayPeriod(dateString, {
                            width: 'narrow',
                            context: 'formatting'
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
                return date;
            }
        }
    ]);
    return DayPeriodParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzNEC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour1to12Parser", ()=>Hour1to12Parser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var Hour1to12Parser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(Hour1to12Parser, _Parser);
    var _super = (0, _createSuperDefault.default)(Hour1to12Parser);
    function Hour1to12Parser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, Hour1to12Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 70);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'H',
            'K',
            'k',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(Hour1to12Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'h':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour12h, dateString);
                    case 'ho':
                        return match.ordinalNumber(dateString, {
                            unit: 'hour'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 12;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
                else if (!isPM && value === 12) date.setUTCHours(0, 0, 0, 0);
                else date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour1to12Parser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3kuC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour0to23Parser", ()=>Hour0to23Parser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var Hour0to23Parser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(Hour0to23Parser, _Parser);
    var _super = (0, _createSuperDefault.default)(Hour0to23Parser);
    function Hour0to23Parser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, Hour0to23Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 70);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'a',
            'b',
            'h',
            'K',
            'k',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(Hour0to23Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'H':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour23h, dateString);
                    case 'Ho':
                        return match.ordinalNumber(dateString, {
                            unit: 'hour'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 23;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour0to23Parser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73sgE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour0To11Parser", ()=>Hour0To11Parser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var Hour0To11Parser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(Hour0To11Parser, _Parser);
    var _super = (0, _createSuperDefault.default)(Hour0To11Parser);
    function Hour0To11Parser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, Hour0To11Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 70);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'h',
            'H',
            'k',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(Hour0To11Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'K':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour11h, dateString);
                    case 'Ko':
                        return match.ordinalNumber(dateString, {
                            unit: 'hour'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
                else date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour0To11Parser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WDRF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour1To24Parser", ()=>Hour1To24Parser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var Hour1To24Parser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(Hour1To24Parser, _Parser);
    var _super = (0, _createSuperDefault.default)(Hour1To24Parser);
    function Hour1To24Parser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, Hour1To24Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 70);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            'a',
            'b',
            'h',
            'H',
            'K',
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(Hour1To24Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'k':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour24h, dateString);
                    case 'ko':
                        return match.ordinalNumber(dateString, {
                            unit: 'hour'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 24;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                var hours = value <= 24 ? value % 24 : value;
                date.setUTCHours(hours, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour1To24Parser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eALta":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MinuteParser", ()=>MinuteParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var MinuteParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(MinuteParser, _Parser);
    var _super = (0, _createSuperDefault.default)(MinuteParser);
    function MinuteParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, MinuteParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 60);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(MinuteParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 'm':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).minute, dateString);
                    case 'mo':
                        return match.ordinalNumber(dateString, {
                            unit: 'minute'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 59;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMinutes(value, 0, 0);
                return date;
            }
        }
    ]);
    return MinuteParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nVjx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SecondParser", ()=>SecondParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var SecondParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(SecondParser, _Parser);
    var _super = (0, _createSuperDefault.default)(SecondParser);
    function SecondParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, SecondParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 50);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(SecondParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case 's':
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).second, dateString);
                    case 'so':
                        return match.ordinalNumber(dateString, {
                            unit: 'second'
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 59;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCSeconds(value, 0);
                return date;
            }
        }
    ]);
    return SecondParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46M6Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FractionOfSecondParser", ()=>FractionOfSecondParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var FractionOfSecondParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(FractionOfSecondParser, _Parser);
    var _super = (0, _createSuperDefault.default)(FractionOfSecondParser);
    function FractionOfSecondParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, FractionOfSecondParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 30);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            't',
            'T'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(FractionOfSecondParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                var valueCallback = function valueCallback(value) {
                    return Math.floor(value * Math.pow(10, -token.length + 3));
                };
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMilliseconds(value);
                return date;
            }
        }
    ]);
    return FractionOfSecondParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1yp4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOTimezoneWithZParser", ()=>ISOTimezoneWithZParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js"); // Timezone (ISO-8601. +00:00 is `'Z'`)
var ISOTimezoneWithZParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(ISOTimezoneWithZParser, _Parser);
    var _super = (0, _createSuperDefault.default)(ISOTimezoneWithZParser);
    function ISOTimezoneWithZParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, ISOTimezoneWithZParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 10);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            't',
            'T',
            'x'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(ISOTimezoneWithZParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                switch(token){
                    case 'X':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalMinutes, dateString);
                    case 'XX':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basic, dateString);
                    case 'XXXX':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalSeconds, dateString);
                    case 'XXXXX':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extendedOptionalSeconds, dateString);
                    case 'XXX':
                    default:
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extended, dateString);
                }
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                if (flags.timestampIsSet) return date;
                return new Date(date.getTime() - value);
            }
        }
    ]);
    return ISOTimezoneWithZParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDXkg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOTimezoneParser", ()=>ISOTimezoneParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js"); // Timezone (ISO-8601)
var ISOTimezoneParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(ISOTimezoneParser, _Parser);
    var _super = (0, _createSuperDefault.default)(ISOTimezoneParser);
    function ISOTimezoneParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, ISOTimezoneParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 10);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", [
            't',
            'T',
            'X'
        ]);
        return _this;
    }
    (0, _createClassDefault.default)(ISOTimezoneParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                switch(token){
                    case 'x':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalMinutes, dateString);
                    case 'xx':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basic, dateString);
                    case 'xxxx':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalSeconds, dateString);
                    case 'xxxxx':
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extendedOptionalSeconds, dateString);
                    case 'xxx':
                    default:
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extended, dateString);
                }
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                if (flags.timestampIsSet) return date;
                return new Date(date.getTime() - value);
            }
        }
    ]);
    return ISOTimezoneParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPdA3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimestampSecondsParser", ()=>TimestampSecondsParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var TimestampSecondsParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(TimestampSecondsParser, _Parser);
    var _super = (0, _createSuperDefault.default)(TimestampSecondsParser);
    function TimestampSecondsParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, TimestampSecondsParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 40);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", '*');
        return _this;
    }
    (0, _createClassDefault.default)(TimestampSecondsParser, [
        {
            key: "parse",
            value: function parse(dateString) {
                return (0, _utilsJs.parseAnyDigitsSigned)(dateString);
            }
        },
        {
            key: "set",
            value: function set(_date, _flags, value) {
                return [
                    new Date(value * 1000),
                    {
                        timestampIsSet: true
                    }
                ];
            }
        }
    ]);
    return TimestampSecondsParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gy8e8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimestampMillisecondsParser", ()=>TimestampMillisecondsParser);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var TimestampMillisecondsParser = /*#__PURE__*/ function(_Parser) {
    (0, _inheritsDefault.default)(TimestampMillisecondsParser, _Parser);
    var _super = (0, _createSuperDefault.default)(TimestampMillisecondsParser);
    function TimestampMillisecondsParser() {
        var _this;
        (0, _classCallCheckDefault.default)(this, TimestampMillisecondsParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "priority", 20);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "incompatibleTokens", '*');
        return _this;
    }
    (0, _createClassDefault.default)(TimestampMillisecondsParser, [
        {
            key: "parse",
            value: function parse(dateString) {
                return (0, _utilsJs.parseAnyDigitsSigned)(dateString);
            }
        },
        {
            key: "set",
            value: function set(_date, _flags, value) {
                return [
                    new Date(value),
                    {
                        timestampIsSet: true
                    }
                ];
            }
        }
    ]);
    return TimestampMillisecondsParser;
}((0, _parserJs.Parser));

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@babel/runtime/helpers/esm/defineProperty":"hbmCA","../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UpeK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseISO);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
function parseISO(argument, options) {
    var _options$additionalDi;
    (0, _indexJsDefault.default)(1, arguments);
    var additionalDigits = (0, _indexJsDefault1.default)((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) throw new RangeError('additionalDigits must be 0, 1 or 2');
    if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) return new Date(NaN);
    var dateStrings = splitDateString(argument);
    var date;
    if (dateStrings.date) {
        var parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (!date || isNaN(date.getTime())) return new Date(NaN);
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time)) return new Date(NaN);
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) return new Date(NaN);
    } else {
        var dirtyDate = new Date(timestamp + time);
        // js parsed string assuming it's in UTC timezone
        // but we need it to be parsed in our timezone
        // so we use utc values to build date in our timezone.
        // Year values from 0 to 99 map to the years 1900 to 1999
        // so set year explicitly with setFullYear.
        var result = new Date(0);
        result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
        result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
        return result;
    }
    return new Date(timestamp + time + offset);
}
var patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns.dateTimeDelimiter);
    var timeString;
    // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) return dateStrings;
    if (/:/.test(array[0])) timeString = array[0];
    else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
    var captures = dateString.match(regex);
    // Invalid ISO-formatted year
    if (!captures) return {
        year: NaN,
        restDateString: ''
    };
    var year = captures[1] ? parseInt(captures[1]) : null;
    var century = captures[2] ? parseInt(captures[2]) : null;
    // either year or century is null, not both
    return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return new Date(NaN);
    var captures = dateString.match(dateRegex);
    // Invalid ISO-formatted string
    if (!captures) return new Date(NaN);
    var isWeekDate = !!captures[4];
    var dayOfYear = parseDateUnit(captures[1]);
    var month = parseDateUnit(captures[2]) - 1;
    var day = parseDateUnit(captures[3]);
    var week = parseDateUnit(captures[4]);
    var dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        var date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    var captures = timeString.match(timeRegex);
    if (!captures) return NaN; // Invalid ISO-formatted time
    var hours = parseTimeUnit(captures[1]);
    var minutes = parseTimeUnit(captures[2]);
    var seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) return NaN;
    return hours * (0, _indexJs.millisecondsInHour) + minutes * (0, _indexJs.millisecondsInMinute) + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === 'Z') return 0;
    var captures = timezoneString.match(timezoneRegex);
    if (!captures) return 0;
    var sign = captures[1] === '+' ? -1 : 1;
    var hours = parseInt(captures[2]);
    var minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) return NaN;
    return sign * (hours * (0, _indexJs.millisecondsInHour) + minutes * (0, _indexJs.millisecondsInMinute));
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
// February is null to handle the leap year (using ||)
var daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) return minutes === 0 && seconds === 0;
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}

},{"../constants/index.js":"iOhcx","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnPY3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfHour);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfHour(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMinutes(0, 0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ScWrF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfMinute);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfMinute(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setSeconds(0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xvSk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfMonth);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3J36e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfQuarter);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3;
    date.setMonth(month, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ePjK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfSecond);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfSecond(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMilliseconds(0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fD46d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfWeek);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/defaultOptions/index.js");
function startOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault2.default)(1, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault1.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgYqj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>startOfYear);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var cleanDate = (0, _indexJsDefault.default)(dirtyDate);
    var date = new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lASMG":[function(require,module,exports,__globalThis) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "af", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "ar", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "arDZ", ()=>(0, _indexJsDefault2.default));
parcelHelpers.export(exports, "arEG", ()=>(0, _indexJsDefault3.default));
parcelHelpers.export(exports, "arMA", ()=>(0, _indexJsDefault4.default));
parcelHelpers.export(exports, "arSA", ()=>(0, _indexJsDefault5.default));
parcelHelpers.export(exports, "arTN", ()=>(0, _indexJsDefault6.default));
parcelHelpers.export(exports, "az", ()=>(0, _indexJsDefault7.default));
parcelHelpers.export(exports, "be", ()=>(0, _indexJsDefault8.default));
parcelHelpers.export(exports, "beTarask", ()=>(0, _indexJsDefault9.default));
parcelHelpers.export(exports, "bg", ()=>(0, _indexJsDefault10.default));
parcelHelpers.export(exports, "bn", ()=>(0, _indexJsDefault11.default));
parcelHelpers.export(exports, "bs", ()=>(0, _indexJsDefault12.default));
parcelHelpers.export(exports, "ca", ()=>(0, _indexJsDefault13.default));
parcelHelpers.export(exports, "cs", ()=>(0, _indexJsDefault14.default));
parcelHelpers.export(exports, "cy", ()=>(0, _indexJsDefault15.default));
parcelHelpers.export(exports, "da", ()=>(0, _indexJsDefault16.default));
parcelHelpers.export(exports, "de", ()=>(0, _indexJsDefault17.default));
parcelHelpers.export(exports, "deAT", ()=>(0, _indexJsDefault18.default));
parcelHelpers.export(exports, "el", ()=>(0, _indexJsDefault19.default));
parcelHelpers.export(exports, "enAU", ()=>(0, _indexJsDefault20.default));
parcelHelpers.export(exports, "enCA", ()=>(0, _indexJsDefault21.default));
parcelHelpers.export(exports, "enGB", ()=>(0, _indexJsDefault22.default));
parcelHelpers.export(exports, "enIE", ()=>(0, _indexJsDefault23.default));
parcelHelpers.export(exports, "enIN", ()=>(0, _indexJsDefault24.default));
parcelHelpers.export(exports, "enNZ", ()=>(0, _indexJsDefault25.default));
parcelHelpers.export(exports, "enUS", ()=>(0, _indexJsDefault26.default));
parcelHelpers.export(exports, "enZA", ()=>(0, _indexJsDefault27.default));
parcelHelpers.export(exports, "eo", ()=>(0, _indexJsDefault28.default));
parcelHelpers.export(exports, "es", ()=>(0, _indexJsDefault29.default));
parcelHelpers.export(exports, "et", ()=>(0, _indexJsDefault30.default));
parcelHelpers.export(exports, "eu", ()=>(0, _indexJsDefault31.default));
parcelHelpers.export(exports, "faIR", ()=>(0, _indexJsDefault32.default));
parcelHelpers.export(exports, "fi", ()=>(0, _indexJsDefault33.default));
parcelHelpers.export(exports, "fr", ()=>(0, _indexJsDefault34.default));
parcelHelpers.export(exports, "frCA", ()=>(0, _indexJsDefault35.default));
parcelHelpers.export(exports, "frCH", ()=>(0, _indexJsDefault36.default));
parcelHelpers.export(exports, "fy", ()=>(0, _indexJsDefault37.default));
parcelHelpers.export(exports, "gd", ()=>(0, _indexJsDefault38.default));
parcelHelpers.export(exports, "gl", ()=>(0, _indexJsDefault39.default));
parcelHelpers.export(exports, "gu", ()=>(0, _indexJsDefault40.default));
parcelHelpers.export(exports, "he", ()=>(0, _indexJsDefault41.default));
parcelHelpers.export(exports, "hi", ()=>(0, _indexJsDefault42.default));
parcelHelpers.export(exports, "hr", ()=>(0, _indexJsDefault43.default));
parcelHelpers.export(exports, "ht", ()=>(0, _indexJsDefault44.default));
parcelHelpers.export(exports, "hu", ()=>(0, _indexJsDefault45.default));
parcelHelpers.export(exports, "hy", ()=>(0, _indexJsDefault46.default));
parcelHelpers.export(exports, "id", ()=>(0, _indexJsDefault47.default));
parcelHelpers.export(exports, "is", ()=>(0, _indexJsDefault48.default));
parcelHelpers.export(exports, "it", ()=>(0, _indexJsDefault49.default));
parcelHelpers.export(exports, "itCH", ()=>(0, _indexJsDefault50.default));
parcelHelpers.export(exports, "ja", ()=>(0, _indexJsDefault51.default));
parcelHelpers.export(exports, "jaHira", ()=>(0, _indexJsDefault52.default));
parcelHelpers.export(exports, "ka", ()=>(0, _indexJsDefault53.default));
parcelHelpers.export(exports, "kk", ()=>(0, _indexJsDefault54.default));
parcelHelpers.export(exports, "km", ()=>(0, _indexJsDefault55.default));
parcelHelpers.export(exports, "kn", ()=>(0, _indexJsDefault56.default));
parcelHelpers.export(exports, "ko", ()=>(0, _indexJsDefault57.default));
parcelHelpers.export(exports, "lb", ()=>(0, _indexJsDefault58.default));
parcelHelpers.export(exports, "lt", ()=>(0, _indexJsDefault59.default));
parcelHelpers.export(exports, "lv", ()=>(0, _indexJsDefault60.default));
parcelHelpers.export(exports, "mk", ()=>(0, _indexJsDefault61.default));
parcelHelpers.export(exports, "mn", ()=>(0, _indexJsDefault62.default));
parcelHelpers.export(exports, "ms", ()=>(0, _indexJsDefault63.default));
parcelHelpers.export(exports, "mt", ()=>(0, _indexJsDefault64.default));
parcelHelpers.export(exports, "nb", ()=>(0, _indexJsDefault65.default));
parcelHelpers.export(exports, "nl", ()=>(0, _indexJsDefault66.default));
parcelHelpers.export(exports, "nlBE", ()=>(0, _indexJsDefault67.default));
parcelHelpers.export(exports, "nn", ()=>(0, _indexJsDefault68.default));
parcelHelpers.export(exports, "oc", ()=>(0, _indexJsDefault69.default));
parcelHelpers.export(exports, "pl", ()=>(0, _indexJsDefault70.default));
parcelHelpers.export(exports, "pt", ()=>(0, _indexJsDefault71.default));
parcelHelpers.export(exports, "ptBR", ()=>(0, _indexJsDefault72.default));
parcelHelpers.export(exports, "ro", ()=>(0, _indexJsDefault73.default));
parcelHelpers.export(exports, "ru", ()=>(0, _indexJsDefault74.default));
parcelHelpers.export(exports, "sk", ()=>(0, _indexJsDefault75.default));
parcelHelpers.export(exports, "sl", ()=>(0, _indexJsDefault76.default));
parcelHelpers.export(exports, "sq", ()=>(0, _indexJsDefault77.default));
parcelHelpers.export(exports, "sr", ()=>(0, _indexJsDefault78.default));
parcelHelpers.export(exports, "srLatn", ()=>(0, _indexJsDefault79.default));
parcelHelpers.export(exports, "sv", ()=>(0, _indexJsDefault80.default));
parcelHelpers.export(exports, "ta", ()=>(0, _indexJsDefault81.default));
parcelHelpers.export(exports, "te", ()=>(0, _indexJsDefault82.default));
parcelHelpers.export(exports, "th", ()=>(0, _indexJsDefault83.default));
parcelHelpers.export(exports, "tr", ()=>(0, _indexJsDefault84.default));
parcelHelpers.export(exports, "ug", ()=>(0, _indexJsDefault85.default));
parcelHelpers.export(exports, "uk", ()=>(0, _indexJsDefault86.default));
parcelHelpers.export(exports, "uz", ()=>(0, _indexJsDefault87.default));
parcelHelpers.export(exports, "uzCyrl", ()=>(0, _indexJsDefault88.default));
parcelHelpers.export(exports, "vi", ()=>(0, _indexJsDefault89.default));
parcelHelpers.export(exports, "zhCN", ()=>(0, _indexJsDefault90.default));
parcelHelpers.export(exports, "zhHK", ()=>(0, _indexJsDefault91.default));
parcelHelpers.export(exports, "zhTW", ()=>(0, _indexJsDefault92.default));
var _indexJs = require("./af/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./ar/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./ar-DZ/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./ar-EG/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./ar-MA/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./ar-SA/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./ar-TN/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./az/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./be/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./be-tarask/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./bg/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./bn/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./bs/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./ca/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./cs/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
var _indexJs15 = require("./cy/index.js");
var _indexJsDefault15 = parcelHelpers.interopDefault(_indexJs15);
var _indexJs16 = require("./da/index.js");
var _indexJsDefault16 = parcelHelpers.interopDefault(_indexJs16);
var _indexJs17 = require("./de/index.js");
var _indexJsDefault17 = parcelHelpers.interopDefault(_indexJs17);
var _indexJs18 = require("./de-AT/index.js");
var _indexJsDefault18 = parcelHelpers.interopDefault(_indexJs18);
var _indexJs19 = require("./el/index.js");
var _indexJsDefault19 = parcelHelpers.interopDefault(_indexJs19);
var _indexJs20 = require("./en-AU/index.js");
var _indexJsDefault20 = parcelHelpers.interopDefault(_indexJs20);
var _indexJs21 = require("./en-CA/index.js");
var _indexJsDefault21 = parcelHelpers.interopDefault(_indexJs21);
var _indexJs22 = require("./en-GB/index.js");
var _indexJsDefault22 = parcelHelpers.interopDefault(_indexJs22);
var _indexJs23 = require("./en-IE/index.js");
var _indexJsDefault23 = parcelHelpers.interopDefault(_indexJs23);
var _indexJs24 = require("./en-IN/index.js");
var _indexJsDefault24 = parcelHelpers.interopDefault(_indexJs24);
var _indexJs25 = require("./en-NZ/index.js");
var _indexJsDefault25 = parcelHelpers.interopDefault(_indexJs25);
var _indexJs26 = require("./en-US/index.js");
var _indexJsDefault26 = parcelHelpers.interopDefault(_indexJs26);
var _indexJs27 = require("./en-ZA/index.js");
var _indexJsDefault27 = parcelHelpers.interopDefault(_indexJs27);
var _indexJs28 = require("./eo/index.js");
var _indexJsDefault28 = parcelHelpers.interopDefault(_indexJs28);
var _indexJs29 = require("./es/index.js");
var _indexJsDefault29 = parcelHelpers.interopDefault(_indexJs29);
var _indexJs30 = require("./et/index.js");
var _indexJsDefault30 = parcelHelpers.interopDefault(_indexJs30);
var _indexJs31 = require("./eu/index.js");
var _indexJsDefault31 = parcelHelpers.interopDefault(_indexJs31);
var _indexJs32 = require("./fa-IR/index.js");
var _indexJsDefault32 = parcelHelpers.interopDefault(_indexJs32);
var _indexJs33 = require("./fi/index.js");
var _indexJsDefault33 = parcelHelpers.interopDefault(_indexJs33);
var _indexJs34 = require("./fr/index.js");
var _indexJsDefault34 = parcelHelpers.interopDefault(_indexJs34);
var _indexJs35 = require("./fr-CA/index.js");
var _indexJsDefault35 = parcelHelpers.interopDefault(_indexJs35);
var _indexJs36 = require("./fr-CH/index.js");
var _indexJsDefault36 = parcelHelpers.interopDefault(_indexJs36);
var _indexJs37 = require("./fy/index.js");
var _indexJsDefault37 = parcelHelpers.interopDefault(_indexJs37);
var _indexJs38 = require("./gd/index.js");
var _indexJsDefault38 = parcelHelpers.interopDefault(_indexJs38);
var _indexJs39 = require("./gl/index.js");
var _indexJsDefault39 = parcelHelpers.interopDefault(_indexJs39);
var _indexJs40 = require("./gu/index.js");
var _indexJsDefault40 = parcelHelpers.interopDefault(_indexJs40);
var _indexJs41 = require("./he/index.js");
var _indexJsDefault41 = parcelHelpers.interopDefault(_indexJs41);
var _indexJs42 = require("./hi/index.js");
var _indexJsDefault42 = parcelHelpers.interopDefault(_indexJs42);
var _indexJs43 = require("./hr/index.js");
var _indexJsDefault43 = parcelHelpers.interopDefault(_indexJs43);
var _indexJs44 = require("./ht/index.js");
var _indexJsDefault44 = parcelHelpers.interopDefault(_indexJs44);
var _indexJs45 = require("./hu/index.js");
var _indexJsDefault45 = parcelHelpers.interopDefault(_indexJs45);
var _indexJs46 = require("./hy/index.js");
var _indexJsDefault46 = parcelHelpers.interopDefault(_indexJs46);
var _indexJs47 = require("./id/index.js");
var _indexJsDefault47 = parcelHelpers.interopDefault(_indexJs47);
var _indexJs48 = require("./is/index.js");
var _indexJsDefault48 = parcelHelpers.interopDefault(_indexJs48);
var _indexJs49 = require("./it/index.js");
var _indexJsDefault49 = parcelHelpers.interopDefault(_indexJs49);
var _indexJs50 = require("./it-CH/index.js");
var _indexJsDefault50 = parcelHelpers.interopDefault(_indexJs50);
var _indexJs51 = require("./ja/index.js");
var _indexJsDefault51 = parcelHelpers.interopDefault(_indexJs51);
var _indexJs52 = require("./ja-Hira/index.js");
var _indexJsDefault52 = parcelHelpers.interopDefault(_indexJs52);
var _indexJs53 = require("./ka/index.js");
var _indexJsDefault53 = parcelHelpers.interopDefault(_indexJs53);
var _indexJs54 = require("./kk/index.js");
var _indexJsDefault54 = parcelHelpers.interopDefault(_indexJs54);
var _indexJs55 = require("./km/index.js");
var _indexJsDefault55 = parcelHelpers.interopDefault(_indexJs55);
var _indexJs56 = require("./kn/index.js");
var _indexJsDefault56 = parcelHelpers.interopDefault(_indexJs56);
var _indexJs57 = require("./ko/index.js");
var _indexJsDefault57 = parcelHelpers.interopDefault(_indexJs57);
var _indexJs58 = require("./lb/index.js");
var _indexJsDefault58 = parcelHelpers.interopDefault(_indexJs58);
var _indexJs59 = require("./lt/index.js");
var _indexJsDefault59 = parcelHelpers.interopDefault(_indexJs59);
var _indexJs60 = require("./lv/index.js");
var _indexJsDefault60 = parcelHelpers.interopDefault(_indexJs60);
var _indexJs61 = require("./mk/index.js");
var _indexJsDefault61 = parcelHelpers.interopDefault(_indexJs61);
var _indexJs62 = require("./mn/index.js");
var _indexJsDefault62 = parcelHelpers.interopDefault(_indexJs62);
var _indexJs63 = require("./ms/index.js");
var _indexJsDefault63 = parcelHelpers.interopDefault(_indexJs63);
var _indexJs64 = require("./mt/index.js");
var _indexJsDefault64 = parcelHelpers.interopDefault(_indexJs64);
var _indexJs65 = require("./nb/index.js");
var _indexJsDefault65 = parcelHelpers.interopDefault(_indexJs65);
var _indexJs66 = require("./nl/index.js");
var _indexJsDefault66 = parcelHelpers.interopDefault(_indexJs66);
var _indexJs67 = require("./nl-BE/index.js");
var _indexJsDefault67 = parcelHelpers.interopDefault(_indexJs67);
var _indexJs68 = require("./nn/index.js");
var _indexJsDefault68 = parcelHelpers.interopDefault(_indexJs68);
var _indexJs69 = require("./oc/index.js");
var _indexJsDefault69 = parcelHelpers.interopDefault(_indexJs69);
var _indexJs70 = require("./pl/index.js");
var _indexJsDefault70 = parcelHelpers.interopDefault(_indexJs70);
var _indexJs71 = require("./pt/index.js");
var _indexJsDefault71 = parcelHelpers.interopDefault(_indexJs71);
var _indexJs72 = require("./pt-BR/index.js");
var _indexJsDefault72 = parcelHelpers.interopDefault(_indexJs72);
var _indexJs73 = require("./ro/index.js");
var _indexJsDefault73 = parcelHelpers.interopDefault(_indexJs73);
var _indexJs74 = require("./ru/index.js");
var _indexJsDefault74 = parcelHelpers.interopDefault(_indexJs74);
var _indexJs75 = require("./sk/index.js");
var _indexJsDefault75 = parcelHelpers.interopDefault(_indexJs75);
var _indexJs76 = require("./sl/index.js");
var _indexJsDefault76 = parcelHelpers.interopDefault(_indexJs76);
var _indexJs77 = require("./sq/index.js");
var _indexJsDefault77 = parcelHelpers.interopDefault(_indexJs77);
var _indexJs78 = require("./sr/index.js");
var _indexJsDefault78 = parcelHelpers.interopDefault(_indexJs78);
var _indexJs79 = require("./sr-Latn/index.js");
var _indexJsDefault79 = parcelHelpers.interopDefault(_indexJs79);
var _indexJs80 = require("./sv/index.js");
var _indexJsDefault80 = parcelHelpers.interopDefault(_indexJs80);
var _indexJs81 = require("./ta/index.js");
var _indexJsDefault81 = parcelHelpers.interopDefault(_indexJs81);
var _indexJs82 = require("./te/index.js");
var _indexJsDefault82 = parcelHelpers.interopDefault(_indexJs82);
var _indexJs83 = require("./th/index.js");
var _indexJsDefault83 = parcelHelpers.interopDefault(_indexJs83);
var _indexJs84 = require("./tr/index.js");
var _indexJsDefault84 = parcelHelpers.interopDefault(_indexJs84);
var _indexJs85 = require("./ug/index.js");
var _indexJsDefault85 = parcelHelpers.interopDefault(_indexJs85);
var _indexJs86 = require("./uk/index.js");
var _indexJsDefault86 = parcelHelpers.interopDefault(_indexJs86);
var _indexJs87 = require("./uz/index.js");
var _indexJsDefault87 = parcelHelpers.interopDefault(_indexJs87);
var _indexJs88 = require("./uz-Cyrl/index.js");
var _indexJsDefault88 = parcelHelpers.interopDefault(_indexJs88);
var _indexJs89 = require("./vi/index.js");
var _indexJsDefault89 = parcelHelpers.interopDefault(_indexJs89);
var _indexJs90 = require("./zh-CN/index.js");
var _indexJsDefault90 = parcelHelpers.interopDefault(_indexJs90);
var _indexJs91 = require("./zh-HK/index.js");
var _indexJsDefault91 = parcelHelpers.interopDefault(_indexJs91);
var _indexJs92 = require("./zh-TW/index.js");
var _indexJsDefault92 = parcelHelpers.interopDefault(_indexJs92);

},{"./af/index.js":false,"./ar/index.js":false,"./ar-DZ/index.js":false,"./ar-EG/index.js":false,"./ar-MA/index.js":false,"./ar-SA/index.js":false,"./ar-TN/index.js":false,"./az/index.js":false,"./be/index.js":false,"./be-tarask/index.js":false,"./bg/index.js":false,"./bn/index.js":false,"./bs/index.js":false,"./ca/index.js":false,"./cs/index.js":false,"./cy/index.js":false,"./da/index.js":false,"./de/index.js":false,"./de-AT/index.js":false,"./el/index.js":false,"./en-AU/index.js":false,"./en-CA/index.js":false,"./en-GB/index.js":false,"./en-IE/index.js":false,"./en-IN/index.js":false,"./en-NZ/index.js":false,"./en-US/index.js":"8XKCq","./en-ZA/index.js":false,"./eo/index.js":false,"./es/index.js":false,"./et/index.js":false,"./eu/index.js":false,"./fa-IR/index.js":false,"./fi/index.js":false,"./fr/index.js":false,"./fr-CA/index.js":false,"./fr-CH/index.js":false,"./fy/index.js":false,"./gd/index.js":false,"./gl/index.js":false,"./gu/index.js":false,"./he/index.js":false,"./hi/index.js":false,"./hr/index.js":false,"./ht/index.js":false,"./hu/index.js":false,"./hy/index.js":false,"./id/index.js":false,"./is/index.js":false,"./it/index.js":false,"./it-CH/index.js":false,"./ja/index.js":false,"./ja-Hira/index.js":false,"./ka/index.js":false,"./kk/index.js":false,"./km/index.js":false,"./kn/index.js":false,"./ko/index.js":false,"./lb/index.js":false,"./lt/index.js":false,"./lv/index.js":false,"./mk/index.js":false,"./mn/index.js":false,"./ms/index.js":false,"./mt/index.js":false,"./nb/index.js":false,"./nl/index.js":false,"./nl-BE/index.js":false,"./nn/index.js":false,"./oc/index.js":false,"./pl/index.js":false,"./pt/index.js":false,"./pt-BR/index.js":false,"./ro/index.js":false,"./ru/index.js":false,"./sk/index.js":false,"./sl/index.js":false,"./sq/index.js":false,"./sr/index.js":false,"./sr-Latn/index.js":false,"./sv/index.js":false,"./ta/index.js":false,"./te/index.js":false,"./th/index.js":false,"./tr/index.js":false,"./ug/index.js":false,"./uk/index.js":false,"./uz/index.js":false,"./uz-Cyrl/index.js":false,"./vi/index.js":false,"./zh-CN/index.js":false,"./zh-HK/index.js":false,"./zh-TW/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1Fqy1","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
