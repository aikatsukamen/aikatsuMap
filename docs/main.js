/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers.png);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers-2x.png);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(images/marker-icon.png);\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/map.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/css/map.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n}\n\n#map {\n  width: 100vw;\n  height: 100vh;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/leaflet.heat/dist/leaflet-heat.js":
/*!********************************************************!*\
  !*** ./node_modules/leaflet.heat/dist/leaflet-heat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
!function(){"use strict";function t(i){return this instanceof t?(this._canvas=i="string"==typeof i?document.getElementById(i):i,this._ctx=i.getContext("2d"),this._width=i.width,this._height=i.height,this._max=1,void this.clear()):new t(i)}t.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t,i){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,i){i=i||15;var a=this._circle=document.createElement("canvas"),s=a.getContext("2d"),e=this._r=t+i;return a.width=a.height=2*e,s.shadowOffsetX=s.shadowOffsetY=200,s.shadowBlur=i,s.shadowColor="black",s.beginPath(),s.arc(e-200,e-200,t,0,2*Math.PI,!0),s.closePath(),s.fill(),this},gradient:function(t){var i=document.createElement("canvas"),a=i.getContext("2d"),s=a.createLinearGradient(0,0,0,256);i.width=1,i.height=256;for(var e in t)s.addColorStop(e,t[e]);return a.fillStyle=s,a.fillRect(0,0,1,256),this._grad=a.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var i=this._ctx;i.clearRect(0,0,this._width,this._height);for(var a,s=0,e=this._data.length;e>s;s++)a=this._data[s],i.globalAlpha=Math.max(a[2]/this._max,t||.05),i.drawImage(this._circle,a[0]-this._r,a[1]-this._r);var n=i.getImageData(0,0,this._width,this._height);return this._colorize(n.data,this._grad),i.putImageData(n,0,0),this},_colorize:function(t,i){for(var a,s=3,e=t.length;e>s;s+=4)a=4*t[s],a&&(t[s-3]=i[a],t[s-2]=i[a+1],t[s-1]=i[a+2])}},window.simpleheat=t}(),/*
 (c) 2014, Vladimir Agafonkin
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/Leaflet/Leaflet.heat
*/
L.HeatLayer=(L.Layer?L.Layer:L.Class).extend({initialize:function(t,i){this._latlngs=t,L.setOptions(this,i)},setLatLngs:function(t){return this._latlngs=t,this.redraw()},addLatLng:function(t){return this._latlngs.push(t),this.redraw()},setOptions:function(t){return L.setOptions(this,t),this._heat&&this._updateOptions(),this.redraw()},redraw:function(){return!this._heat||this._frame||this._map._animating||(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this},onAdd:function(t){this._map=t,this._canvas||this._initCanvas(),t._panes.overlayPane.appendChild(this._canvas),t.on("moveend",this._reset,this),t.options.zoomAnimation&&L.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._canvas),t.off("moveend",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},_initCanvas:function(){var t=this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer leaflet-layer"),i=L.DomUtil.testProp(["transformOrigin","WebkitTransformOrigin","msTransformOrigin"]);t.style[i]="50% 50%";var a=this._map.getSize();t.width=a.x,t.height=a.y;var s=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(t,"leaflet-zoom-"+(s?"animated":"hide")),this._heat=simpleheat(t),this._updateOptions()},_updateOptions:function(){this._heat.radius(this.options.radius||this._heat.defaultRadius,this.options.blur),this.options.gradient&&this._heat.gradient(this.options.gradient),this.options.max&&this._heat.max(this.options.max)},_reset:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t);var i=this._map.getSize();this._heat._width!==i.x&&(this._canvas.width=this._heat._width=i.x),this._heat._height!==i.y&&(this._canvas.height=this._heat._height=i.y),this._redraw()},_redraw:function(){var t,i,a,s,e,n,h,o,r,d=[],_=this._heat._r,l=this._map.getSize(),m=new L.Bounds(L.point([-_,-_]),l.add([_,_])),c=void 0===this.options.max?1:this.options.max,u=void 0===this.options.maxZoom?this._map.getMaxZoom():this.options.maxZoom,f=1/Math.pow(2,Math.max(0,Math.min(u-this._map.getZoom(),12))),g=_/2,p=[],v=this._map._getMapPanePos(),w=v.x%g,y=v.y%g;for(t=0,i=this._latlngs.length;i>t;t++)if(a=this._map.latLngToContainerPoint(this._latlngs[t]),m.contains(a)){e=Math.floor((a.x-w)/g)+2,n=Math.floor((a.y-y)/g)+2;var x=void 0!==this._latlngs[t].alt?this._latlngs[t].alt:void 0!==this._latlngs[t][2]?+this._latlngs[t][2]:1;r=x*f,p[n]=p[n]||[],s=p[n][e],s?(s[0]=(s[0]*s[2]+a.x*r)/(s[2]+r),s[1]=(s[1]*s[2]+a.y*r)/(s[2]+r),s[2]+=r):p[n][e]=[a.x,a.y,r]}for(t=0,i=p.length;i>t;t++)if(p[t])for(h=0,o=p[t].length;o>h;h++)s=p[t][h],s&&d.push([Math.round(s[0]),Math.round(s[1]),Math.min(s[2],c)]);this._heat.data(d).draw(this.options.minOpacity),this._frame=null},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),a=this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());L.DomUtil.setTransform?L.DomUtil.setTransform(this._canvas,a,i):this._canvas.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(a)+" scale("+i+")"}}),L.heatLayer=function(t,i){return new L.HeatLayer(t,i)};

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.4.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

var version = "1.4.0";

/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */

var freeze = Object.freeze;
Object.freeze = function (obj) { return obj; };

// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function extend(dest) {
	var i, j, len, src;

	for (j = 1, len = arguments.length; j < len; j++) {
		src = arguments[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var create = Object.create || (function () {
	function F() {}
	return function (proto) {
		F.prototype = proto;
		return new F();
	};
})();

// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function bind(fn, obj) {
	var slice = Array.prototype.slice;

	if (fn.bind) {
		return fn.bind.apply(fn, slice.call(arguments, 1));
	}

	var args = slice.call(arguments, 2);

	return function () {
		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
	};
}

// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var lastId = 0;

// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function stamp(obj) {
	/*eslint-disable */
	obj._leaflet_id = obj._leaflet_id || ++lastId;
	return obj._leaflet_id;
	/* eslint-enable */
}

// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function throttle(fn, time, context) {
	var lock, args, wrapperFn, later;

	later = function () {
		// reset lock and call if queued
		lock = false;
		if (args) {
			wrapperFn.apply(context, args);
			args = false;
		}
	};

	wrapperFn = function () {
		if (lock) {
			// called too soon, queue to call later
			args = arguments;

		} else {
			// call and lock until later
			fn.apply(context, arguments);
			setTimeout(later, time);
			lock = true;
		}
	};

	return wrapperFn;
}

// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function wrapNum(x, range, includeMax) {
	var max = range[1],
	    min = range[0],
	    d = max - min;
	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}

// @function falseFn(): Function
// Returns a function which always returns `false`.
function falseFn() { return false; }

// @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
function formatNum(num, digits) {
	var pow = Math.pow(10, (digits === undefined ? 6 : digits));
	return Math.round(num * pow) / pow;
}

// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function trim(str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function splitWords(str) {
	return trim(str).split(/\s+/);
}

// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function setOptions(obj, options) {
	if (!obj.hasOwnProperty('options')) {
		obj.options = obj.options ? create(obj.options) : {};
	}
	for (var i in options) {
		obj.options[i] = options[i];
	}
	return obj.options;
}

// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function getParamString(obj, existingUrl, uppercase) {
	var params = [];
	for (var i in obj) {
		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
	}
	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
}

var templateRe = /\{ *([\w_-]+) *\}/g;

// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function template(str, data) {
	return str.replace(templateRe, function (str, key) {
		var value = data[key];

		if (value === undefined) {
			throw new Error('No value provided for variable ' + str);

		} else if (typeof value === 'function') {
			value = value(data);
		}
		return value;
	});
}

// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var isArray = Array.isArray || function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Array]');
};

// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function indexOf(array, el) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === el) { return i; }
	}
	return -1;
}

// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

function getPrefixed(name) {
	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
}

var lastTime = 0;

// fallback for IE 7-8
function timeoutDefer(fn) {
	var time = +new Date(),
	    timeToCall = Math.max(0, 16 - (time - lastTime));

	lastTime = time + timeToCall;
	return window.setTimeout(fn, timeToCall);
}

var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function requestAnimFrame(fn, context, immediate) {
	if (immediate && requestFn === timeoutDefer) {
		fn.call(context);
	} else {
		return requestFn.call(window, bind(fn, context));
	}
}

// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function cancelAnimFrame(id) {
	if (id) {
		cancelFn.call(window, id);
	}
}


var Util = (Object.freeze || Object)({
	freeze: freeze,
	extend: extend,
	create: create,
	bind: bind,
	lastId: lastId,
	stamp: stamp,
	throttle: throttle,
	wrapNum: wrapNum,
	falseFn: falseFn,
	formatNum: formatNum,
	trim: trim,
	splitWords: splitWords,
	setOptions: setOptions,
	getParamString: getParamString,
	template: template,
	isArray: isArray,
	indexOf: indexOf,
	emptyImageUrl: emptyImageUrl,
	requestFn: requestFn,
	cancelFn: cancelFn,
	requestAnimFrame: requestAnimFrame,
	cancelAnimFrame: cancelAnimFrame
});

// @class Class
// @aka L.Class

// @section
// @uninheritable

// Thanks to John Resig and Dean Edwards for inspiration!

function Class() {}

Class.extend = function (props) {

	// @function extend(props: Object): Function
	// [Extends the current class](#class-inheritance) given the properties to be included.
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto = NewClass.__super__ = this.prototype;

	var proto = create(parentProto);
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	// inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		checkDeprecatedMixinEvents(props.includes);
		extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = extend(create(proto.options), props.options);
	}

	// mix given properties into the prototype
	extend(proto, props);

	proto._initHooks = [];

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Class.include = function (props) {
	extend(this.prototype, props);
	return this;
};

// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Class.mergeOptions = function (options) {
	extend(this.prototype.options, options);
	return this;
};

// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
	return this;
};

function checkDeprecatedMixinEvents(includes) {
	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

	includes = isArray(includes) ? includes : [includes];

	for (var i = 0; i < includes.length; i++) {
		if (includes[i] === L.Mixin.Events) {
			console.warn('Deprecated include of L.Mixin.Events: ' +
				'this property will be removed in future releases, ' +
				'please inherit from L.Evented instead.', new Error().stack);
		}
	}
}

/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */

var Events = {
	/* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */
	on: function (types, fn, context) {

		// types can be a map of types/handlers
		if (typeof types === 'object') {
			for (var type in types) {
				// we don't process space-separated events here for performance;
				// it's a hot path since Layer uses the on(obj) syntax
				this._on(type, types[type], fn);
			}

		} else {
			// types can be a string of space-separated words
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(types[i], fn, context);
			}
		}

		return this;
	},

	/* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object.
	 */
	off: function (types, fn, context) {

		if (!types) {
			// clear all listeners if called without arguments
			delete this._events;

		} else if (typeof types === 'object') {
			for (var type in types) {
				this._off(type, types[type], fn);
			}

		} else {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(types[i], fn, context);
			}
		}

		return this;
	},

	// attach listener (without syntactic sugar now)
	_on: function (type, fn, context) {
		this._events = this._events || {};

		/* get/init listeners for type */
		var typeListeners = this._events[type];
		if (!typeListeners) {
			typeListeners = [];
			this._events[type] = typeListeners;
		}

		if (context === this) {
			// Less memory footprint.
			context = undefined;
		}
		var newListener = {fn: fn, ctx: context},
		    listeners = typeListeners;

		// check if fn already there
		for (var i = 0, len = listeners.length; i < len; i++) {
			if (listeners[i].fn === fn && listeners[i].ctx === context) {
				return;
			}
		}

		listeners.push(newListener);
	},

	_off: function (type, fn, context) {
		var listeners,
		    i,
		    len;

		if (!this._events) { return; }

		listeners = this._events[type];

		if (!listeners) {
			return;
		}

		if (!fn) {
			// Set all removed listeners to noop so they are not called if remove happens in fire
			for (i = 0, len = listeners.length; i < len; i++) {
				listeners[i].fn = falseFn;
			}
			// clear all listeners for a type if function isn't specified
			delete this._events[type];
			return;
		}

		if (context === this) {
			context = undefined;
		}

		if (listeners) {

			// find fn and remove it
			for (i = 0, len = listeners.length; i < len; i++) {
				var l = listeners[i];
				if (l.ctx !== context) { continue; }
				if (l.fn === fn) {

					// set the removed listener to noop so that's not called if remove happens in fire
					l.fn = falseFn;

					if (this._firingCount) {
						/* copy array in case events are being fired */
						this._events[type] = listeners = listeners.slice();
					}
					listeners.splice(i, 1);

					return;
				}
			}
		}
	},

	// @method fire(type: String, data?: Object, propagate?: Boolean): this
	// Fires an event of the specified type. You can optionally provide an data
	// object — the first argument of the listener function will contain its
	// properties. The event can optionally be propagated to event parents.
	fire: function (type, data, propagate) {
		if (!this.listens(type, propagate)) { return this; }

		var event = extend({}, data, {
			type: type,
			target: this,
			sourceTarget: data && data.sourceTarget || this
		});

		if (this._events) {
			var listeners = this._events[type];

			if (listeners) {
				this._firingCount = (this._firingCount + 1) || 1;
				for (var i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					l.fn.call(l.ctx || this, event);
				}

				this._firingCount--;
			}
		}

		if (propagate) {
			// propagate the event to parents (set with addEventParent)
			this._propagateEvent(event);
		}

		return this;
	},

	// @method listens(type: String): Boolean
	// Returns `true` if a particular event type has any listeners attached to it.
	listens: function (type, propagate) {
		var listeners = this._events && this._events[type];
		if (listeners && listeners.length) { return true; }

		if (propagate) {
			// also check parents for listeners if event propagates
			for (var id in this._eventParents) {
				if (this._eventParents[id].listens(type, propagate)) { return true; }
			}
		}
		return false;
	},

	// @method once(…): this
	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
	once: function (types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this.once(type, types[type], fn);
			}
			return this;
		}

		var handler = bind(function () {
			this
			    .off(types, fn, context)
			    .off(types, handler, context);
		}, this);

		// add a listener that's executed once and removed after that
		return this
		    .on(types, fn, context)
		    .on(types, handler, context);
	},

	// @method addEventParent(obj: Evented): this
	// Adds an event parent - an `Evented` that will receive propagated events
	addEventParent: function (obj) {
		this._eventParents = this._eventParents || {};
		this._eventParents[stamp(obj)] = obj;
		return this;
	},

	// @method removeEventParent(obj: Evented): this
	// Removes an event parent, so it will stop receiving propagated events
	removeEventParent: function (obj) {
		if (this._eventParents) {
			delete this._eventParents[stamp(obj)];
		}
		return this;
	},

	_propagateEvent: function (e) {
		for (var id in this._eventParents) {
			this._eventParents[id].fire(e.type, extend({
				layer: e.target,
				propagatedFrom: e.target
			}, e), true);
		}
	}
};

// aliases; we should ditch those eventually

// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
Events.addEventListener = Events.on;

// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)

// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
Events.removeEventListener = Events.clearAllEventListeners = Events.off;

// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
Events.addOneTimeEventListener = Events.once;

// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
Events.fireEvent = Events.fire;

// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
Events.hasEventListeners = Events.listens;

var Evented = Class.extend(Events);

/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Point(x, y, round) {
	// @property x: Number; The `x` coordinate of the point
	this.x = (round ? Math.round(x) : x);
	// @property y: Number; The `y` coordinate of the point
	this.y = (round ? Math.round(y) : y);
}

var trunc = Math.trunc || function (v) {
	return v > 0 ? Math.floor(v) : Math.ceil(v);
};

Point.prototype = {

	// @method clone(): Point
	// Returns a copy of the current point.
	clone: function () {
		return new Point(this.x, this.y);
	},

	// @method add(otherPoint: Point): Point
	// Returns the result of addition of the current and the given points.
	add: function (point) {
		// non-destructive, returns a new point
		return this.clone()._add(toPoint(point));
	},

	_add: function (point) {
		// destructive, used directly for performance in situations where it's safe to modify existing point
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	// @method subtract(otherPoint: Point): Point
	// Returns the result of subtraction of the given point from the current.
	subtract: function (point) {
		return this.clone()._subtract(toPoint(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	// @method divideBy(num: Number): Point
	// Returns the result of division of the current point by the given number.
	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	// @method multiplyBy(num: Number): Point
	// Returns the result of multiplication of the current point by the given number.
	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	// @method scaleBy(scale: Point): Point
	// Multiply each coordinate of the current point by each coordinate of
	// `scale`. In linear algebra terms, multiply the point by the
	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
	// defined by `scale`.
	scaleBy: function (point) {
		return new Point(this.x * point.x, this.y * point.y);
	},

	// @method unscaleBy(scale: Point): Point
	// Inverse of `scaleBy`. Divide each coordinate of the current point by
	// each coordinate of `scale`.
	unscaleBy: function (point) {
		return new Point(this.x / point.x, this.y / point.y);
	},

	// @method round(): Point
	// Returns a copy of the current point with rounded coordinates.
	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	// @method floor(): Point
	// Returns a copy of the current point with floored coordinates (rounded down).
	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	// @method ceil(): Point
	// Returns a copy of the current point with ceiled coordinates (rounded up).
	ceil: function () {
		return this.clone()._ceil();
	},

	_ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	},

	// @method trunc(): Point
	// Returns a copy of the current point with truncated coordinates (rounded towards zero).
	trunc: function () {
		return this.clone()._trunc();
	},

	_trunc: function () {
		this.x = trunc(this.x);
		this.y = trunc(this.y);
		return this;
	},

	// @method distanceTo(otherPoint: Point): Number
	// Returns the cartesian distance between the current and the given points.
	distanceTo: function (point) {
		point = toPoint(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	// @method equals(otherPoint: Point): Boolean
	// Returns `true` if the given point has the same coordinates.
	equals: function (point) {
		point = toPoint(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	// @method contains(otherPoint: Point): Boolean
	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
	contains: function (point) {
		point = toPoint(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	// @method toString(): String
	// Returns a string representation of the point for debugging purposes.
	toString: function () {
		return 'Point(' +
		        formatNum(this.x) + ', ' +
		        formatNum(this.y) + ')';
	}
};

// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.

// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function toPoint(x, y, round) {
	if (x instanceof Point) {
		return x;
	}
	if (isArray(x)) {
		return new Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	if (typeof x === 'object' && 'x' in x && 'y' in x) {
		return new Point(x.x, x.y);
	}
	return new Point(x, y, round);
}

/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Bounds(a, b) {
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
}

Bounds.prototype = {
	// @method extend(point: Point): this
	// Extends the bounds to contain the given point.
	extend: function (point) { // (Point)
		point = toPoint(point);

		// @property min: Point
		// The top left corner of the rectangle.
		// @property max: Point
		// The bottom right corner of the rectangle.
		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	// @method getCenter(round?: Boolean): Point
	// Returns the center point of the bounds.
	getCenter: function (round) {
		return new Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	// @method getBottomLeft(): Point
	// Returns the bottom-left point of the bounds.
	getBottomLeft: function () {
		return new Point(this.min.x, this.max.y);
	},

	// @method getTopRight(): Point
	// Returns the top-right point of the bounds.
	getTopRight: function () { // -> Point
		return new Point(this.max.x, this.min.y);
	},

	// @method getTopLeft(): Point
	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
	getTopLeft: function () {
		return this.min; // left, top
	},

	// @method getBottomRight(): Point
	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
	getBottomRight: function () {
		return this.max; // right, bottom
	},

	// @method getSize(): Point
	// Returns the size of the given bounds
	getSize: function () {
		return this.max.subtract(this.min);
	},

	// @method contains(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle contains the given one.
	// @alternative
	// @method contains(point: Point): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) {
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof Point) {
			obj = toPoint(obj);
		} else {
			obj = toBounds(obj);
		}

		if (obj instanceof Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	// @method intersects(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds
	// intersect if they have at least one point in common.
	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
	// overlap if their intersection is an area.
	overlaps: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

		return xOverlaps && yOverlaps;
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};


// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function toBounds(a, b) {
	if (!a || a instanceof Bounds) {
		return a;
	}
	return new Bounds(a, b);
}

/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
	if (!corner1) { return; }

	var latlngs = corner2 ? [corner1, corner2] : corner1;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
}

LatLngBounds.prototype = {

	// @method extend(latlng: LatLng): this
	// Extend the bounds to contain the given point

	// @alternative
	// @method extend(otherBounds: LatLngBounds): this
	// Extend the bounds to contain the given bounds
	extend: function (obj) {
		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLng) {
			sw2 = obj;
			ne2 = obj;

		} else if (obj instanceof LatLngBounds) {
			sw2 = obj._southWest;
			ne2 = obj._northEast;

			if (!sw2 || !ne2) { return this; }

		} else {
			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
		}

		if (!sw && !ne) {
			this._southWest = new LatLng(sw2.lat, sw2.lng);
			this._northEast = new LatLng(ne2.lat, ne2.lng);
		} else {
			sw.lat = Math.min(sw2.lat, sw.lat);
			sw.lng = Math.min(sw2.lng, sw.lng);
			ne.lat = Math.max(ne2.lat, ne.lat);
			ne.lng = Math.max(ne2.lng, ne.lng);
		}

		return this;
	},

	// @method pad(bufferRatio: Number): LatLngBounds
	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
	// Negative values will retract the bounds.
	pad: function (bufferRatio) {
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new LatLngBounds(
		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	// @method getCenter(): LatLng
	// Returns the center point of the bounds.
	getCenter: function () {
		return new LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	// @method getSouthWest(): LatLng
	// Returns the south-west point of the bounds.
	getSouthWest: function () {
		return this._southWest;
	},

	// @method getNorthEast(): LatLng
	// Returns the north-east point of the bounds.
	getNorthEast: function () {
		return this._northEast;
	},

	// @method getNorthWest(): LatLng
	// Returns the north-west point of the bounds.
	getNorthWest: function () {
		return new LatLng(this.getNorth(), this.getWest());
	},

	// @method getSouthEast(): LatLng
	// Returns the south-east point of the bounds.
	getSouthEast: function () {
		return new LatLng(this.getSouth(), this.getEast());
	},

	// @method getWest(): Number
	// Returns the west longitude of the bounds
	getWest: function () {
		return this._southWest.lng;
	},

	// @method getSouth(): Number
	// Returns the south latitude of the bounds
	getSouth: function () {
		return this._southWest.lat;
	},

	// @method getEast(): Number
	// Returns the east longitude of the bounds
	getEast: function () {
		return this._northEast.lng;
	},

	// @method getNorth(): Number
	// Returns the north latitude of the bounds
	getNorth: function () {
		return this._northEast.lat;
	},

	// @method contains(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle contains the given one.

	// @alternative
	// @method contains (latlng: LatLng): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
			obj = toLatLng(obj);
		} else {
			obj = toLatLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	// @method intersects(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
	intersects: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
	overlaps: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

		return latOverlaps && lngOverlaps;
	},

	// @method toBBoxString(): String
	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (bounds, maxMargin) {
		if (!bounds) { return false; }

		bounds = toLatLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
	},

	// @method isValid(): Boolean
	// Returns `true` if the bounds are properly initialized.
	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

// TODO International date line?

// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function toLatLngBounds(a, b) {
	if (a instanceof LatLngBounds) {
		return a;
	}
	return new LatLngBounds(a, b);
}

/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLng(lat, lng, alt) {
	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	// @property lat: Number
	// Latitude in degrees
	this.lat = +lat;

	// @property lng: Number
	// Longitude in degrees
	this.lng = +lng;

	// @property alt: Number
	// Altitude in meters (optional)
	if (alt !== undefined) {
		this.alt = +alt;
	}
}

LatLng.prototype = {
	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (obj, maxMargin) {
		if (!obj) { return false; }

		obj = toLatLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	},

	// @method toString(): String
	// Returns a string representation of the point (for debugging purposes).
	toString: function (precision) {
		return 'LatLng(' +
		        formatNum(this.lat, precision) + ', ' +
		        formatNum(this.lng, precision) + ')';
	},

	// @method distanceTo(otherLatLng: LatLng): Number
	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
	distanceTo: function (other) {
		return Earth.distance(this, toLatLng(other));
	},

	// @method wrap(): LatLng
	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
	wrap: function () {
		return Earth.wrapLatLng(this);
	},

	// @method toBounds(sizeInMeters: Number): LatLngBounds
	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
	toBounds: function (sizeInMeters) {
		var latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return toLatLngBounds(
		        [this.lat - latAccuracy, this.lng - lngAccuracy],
		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
	},

	clone: function () {
		return new LatLng(this.lat, this.lng, this.alt);
	}
};



// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

function toLatLng(a, b, c) {
	if (a instanceof LatLng) {
		return a;
	}
	if (isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new LatLng(a[0], a[1]);
		}
		return null;
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
	}
	if (b === undefined) {
		return null;
	}
	return new LatLng(a, b, c);
}

/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */

var CRS = {
	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
	// Projects geographical coordinates into pixel coordinates for a given zoom.
	latLngToPoint: function (latlng, zoom) {
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// @method pointToLatLng(point: Point, zoom: Number): LatLng
	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
	// zoom into geographical coordinates.
	pointToLatLng: function (point, zoom) {
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// @method project(latlng: LatLng): Point
	// Projects geographical coordinates into coordinates in units accepted for
	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
	project: function (latlng) {
		return this.projection.project(latlng);
	},

	// @method unproject(point: Point): LatLng
	// Given a projected coordinate returns the corresponding LatLng.
	// The inverse of `project`.
	unproject: function (point) {
		return this.projection.unproject(point);
	},

	// @method scale(zoom: Number): Number
	// Returns the scale used when transforming projected coordinates into
	// pixel coordinates for a particular zoom. For example, it returns
	// `256 * 2^zoom` for Mercator-based CRS.
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	// @method zoom(scale: Number): Number
	// Inverse of `scale()`, returns the zoom level corresponding to a scale
	// factor of `scale`.
	zoom: function (scale) {
		return Math.log(scale / 256) / Math.LN2;
	},

	// @method getProjectedBounds(zoom: Number): Bounds
	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
	getProjectedBounds: function (zoom) {
		if (this.infinite) { return null; }

		var b = this.projection.bounds,
		    s = this.scale(zoom),
		    min = this.transformation.transform(b.min, s),
		    max = this.transformation.transform(b.max, s);

		return new Bounds(min, max);
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates.

	// @property code: String
	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
	//
	// @property wrapLng: Number[]
	// An array of two numbers defining whether the longitude (horizontal) coordinate
	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
	//
	// @property wrapLat: Number[]
	// Like `wrapLng`, but for the latitude (vertical) axis.

	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// @property infinite: Boolean
	// If true, the coordinate space will be unbounded (infinite in both axes)
	infinite: false,

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where lat and lng has been wrapped according to the
	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
	wrapLatLng: function (latlng) {
		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
		    alt = latlng.alt;

		return new LatLng(lat, lng, alt);
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring
	// that its center is within the CRS's bounds.
	// Only accepts actual `L.LatLngBounds` instances, not arrays.
	wrapLatLngBounds: function (bounds) {
		var center = bounds.getCenter(),
		    newCenter = this.wrapLatLng(center),
		    latShift = center.lat - newCenter.lat,
		    lngShift = center.lng - newCenter.lng;

		if (latShift === 0 && lngShift === 0) {
			return bounds;
		}

		var sw = bounds.getSouthWest(),
		    ne = bounds.getNorthEast(),
		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

		return new LatLngBounds(newSw, newNe);
	}
};

/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

var Earth = extend({}, CRS, {
	wrapLng: [-180, 180],

	// Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see http://rosettacode.org/wiki/Haversine_formula
	R: 6371000,

	// distance between two geographical points using spherical law of cosines approximation
	distance: function (latlng1, latlng2) {
		var rad = Math.PI / 180,
		    lat1 = latlng1.lat * rad,
		    lat2 = latlng2.lat * rad,
		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return this.R * c;
	}
});

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

var SphericalMercator = {

	R: 6378137,
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng) {
		var d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
			this.R * latlng.lng * d,
			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	unproject: function (point) {
		var d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		var d = 6378137 * Math.PI;
		return new Bounds([-d, -d], [d, d]);
	})()
};

/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */


// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function Transformation(a, b, c, d) {
	if (isArray(a)) {
		// use array properties
		this._a = a[0];
		this._b = a[1];
		this._c = a[2];
		this._d = a[3];
		return;
	}
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
}

Transformation.prototype = {
	// @method transform(point: Point, scale?: Number): Point
	// Returns a transformed point, optionally multiplied by the given scale.
	// Only accepts actual `L.Point` instances, not arrays.
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	// @method untransform(point: Point, scale?: Number): Point
	// Returns the reverse transformation of the given point, optionally divided
	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
	untransform: function (point, scale) {
		scale = scale || 1;
		return new Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};

// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.

// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

function toTransformation(a, b, c, d) {
	return new Transformation(a, b, c, d);
}

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */

var EPSG3857 = extend({}, Earth, {
	code: 'EPSG:3857',
	projection: SphericalMercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * SphericalMercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

var EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
});

// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:

// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function svgCreate(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function pointsToPath(rings, closed) {
	var str = '',
	i, j, len, len2, points, p;

	for (i = 0, len = rings.length; i < len; i++) {
		points = rings[i];

		for (j = 0, len2 = points.length; j < len2; j++) {
			p = points[j];
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}

		// closes the ring for polygons; "x" is VML syntax
		str += closed ? (svg ? 'z' : 'x') : '';
	}

	// SVG complains about empty path strings
	return str || 'M0 0';
}

/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */

var style$1 = document.documentElement.style;

// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
var ie = 'ActiveXObject' in window;

// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
var ielt9 = ie && !document.addEventListener;

// @property edge: Boolean; `true` for the Edge web browser.
var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

// @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
var webkit = userAgentContains('webkit');

// @property android: Boolean
// `true` for any browser running on an Android platform.
var android = userAgentContains('android');

// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
var android23 = userAgentContains('android 2') || userAgentContains('android 3');

/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */
var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
// @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)
var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);

// @property opera: Boolean; `true` for the Opera browser
var opera = !!window.opera;

// @property chrome: Boolean; `true` for the Chrome browser.
var chrome = userAgentContains('chrome');

// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

// @property safari: Boolean; `true` for the Safari browser.
var safari = !chrome && userAgentContains('safari');

var phantom = userAgentContains('phantom');

// @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).
var opera12 = 'OTransition' in style$1;

// @property win: Boolean; `true` when the browser is running in a Windows platform
var win = navigator.platform.indexOf('Win') === 0;

// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
var ie3d = ie && ('transition' in style$1);

// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
var gecko3d = 'MozPerspective' in style$1;

// @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.
var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

// @property mobile: Boolean; `true` for all browsers running in a mobile device.
var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
var mobileWebkit = mobile && webkit;

// @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
var mobileWebkit3d = mobile && webkit3d;

// @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).
var msPointer = !window.PointerEvent && window.MSPointerEvent;

// @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
var pointer = !!(window.PointerEvent || msPointer);

// @property touch: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// This does not necessarily mean that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.
var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch));

// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
var mobileOpera = mobile && opera;

// @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.
var mobileGecko = mobile && gecko;

// @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;


// @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
var canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

// @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

// @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
var vml = !svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());


function userAgentContains(str) {
	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}


var Browser = (Object.freeze || Object)({
	ie: ie,
	ielt9: ielt9,
	edge: edge,
	webkit: webkit,
	android: android,
	android23: android23,
	androidStock: androidStock,
	opera: opera,
	chrome: chrome,
	gecko: gecko,
	safari: safari,
	phantom: phantom,
	opera12: opera12,
	win: win,
	ie3d: ie3d,
	webkit3d: webkit3d,
	gecko3d: gecko3d,
	any3d: any3d,
	mobile: mobile,
	mobileWebkit: mobileWebkit,
	mobileWebkit3d: mobileWebkit3d,
	msPointer: msPointer,
	pointer: pointer,
	touch: touch,
	mobileOpera: mobileOpera,
	mobileGecko: mobileGecko,
	retina: retina,
	canvas: canvas,
	svg: svg,
	vml: vml
});

/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */


var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];

var _pointers = {};
var _pointerDocListener = false;

// DomEvent.DoubleTap needs to know about this
var _pointersCount = 0;

// Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

function addPointerListener(obj, type, handler, id) {
	if (type === 'touchstart') {
		_addPointerStart(obj, handler, id);

	} else if (type === 'touchmove') {
		_addPointerMove(obj, handler, id);

	} else if (type === 'touchend') {
		_addPointerEnd(obj, handler, id);
	}

	return this;
}

function removePointerListener(obj, type, id) {
	var handler = obj['_leaflet_' + type + id];

	if (type === 'touchstart') {
		obj.removeEventListener(POINTER_DOWN, handler, false);

	} else if (type === 'touchmove') {
		obj.removeEventListener(POINTER_MOVE, handler, false);

	} else if (type === 'touchend') {
		obj.removeEventListener(POINTER_UP, handler, false);
		obj.removeEventListener(POINTER_CANCEL, handler, false);
	}

	return this;
}

function _addPointerStart(obj, handler, id) {
	var onDown = bind(function (e) {
		if (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
			// In IE11, some touch events needs to fire for form controls, or
			// the controls will stop working. We keep a whitelist of tag names that
			// need these events. For other target tags, we prevent default on the event.
			if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
				preventDefault(e);
			} else {
				return;
			}
		}

		_handlePointer(e, handler);
	});

	obj['_leaflet_touchstart' + id] = onDown;
	obj.addEventListener(POINTER_DOWN, onDown, false);

	// need to keep track of what pointers and how many are active to provide e.touches emulation
	if (!_pointerDocListener) {
		// we listen documentElement as any drags that end by moving the touch off the screen get fired there
		document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
		document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
		document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
		document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

		_pointerDocListener = true;
	}
}

function _globalPointerDown(e) {
	_pointers[e.pointerId] = e;
	_pointersCount++;
}

function _globalPointerMove(e) {
	if (_pointers[e.pointerId]) {
		_pointers[e.pointerId] = e;
	}
}

function _globalPointerUp(e) {
	delete _pointers[e.pointerId];
	_pointersCount--;
}

function _handlePointer(e, handler) {
	e.touches = [];
	for (var i in _pointers) {
		e.touches.push(_pointers[i]);
	}
	e.changedTouches = [e];

	handler(e);
}

function _addPointerMove(obj, handler, id) {
	var onMove = function (e) {
		// don't fire touch moves when mouse isn't down
		if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

		_handlePointer(e, handler);
	};

	obj['_leaflet_touchmove' + id] = onMove;
	obj.addEventListener(POINTER_MOVE, onMove, false);
}

function _addPointerEnd(obj, handler, id) {
	var onUp = function (e) {
		_handlePointer(e, handler);
	};

	obj['_leaflet_touchend' + id] = onUp;
	obj.addEventListener(POINTER_UP, onUp, false);
	obj.addEventListener(POINTER_CANCEL, onUp, false);
}

/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
var _pre = '_leaflet_';

// inspired by Zepto touch code by Thomas Fuchs
function addDoubleTapListener(obj, handler, id) {
	var last, touch$$1,
	    doubleTap = false,
	    delay = 250;

	function onTouchStart(e) {
		var count;

		if (pointer) {
			if ((!edge) || e.pointerType === 'mouse') { return; }
			count = _pointersCount;
		} else {
			count = e.touches.length;
		}

		if (count > 1) { return; }

		var now = Date.now(),
		    delta = now - (last || now);

		touch$$1 = e.touches ? e.touches[0] : e;
		doubleTap = (delta > 0 && delta <= delay);
		last = now;
	}

	function onTouchEnd(e) {
		if (doubleTap && !touch$$1.cancelBubble) {
			if (pointer) {
				if ((!edge) || e.pointerType === 'mouse') { return; }
				// work around .type being readonly with MSPointer* events
				var newTouch = {},
				    prop, i;

				for (i in touch$$1) {
					prop = touch$$1[i];
					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
				}
				touch$$1 = newTouch;
			}
			touch$$1.type = 'dblclick';
			handler(touch$$1);
			last = null;
		}
	}

	obj[_pre + _touchstart + id] = onTouchStart;
	obj[_pre + _touchend + id] = onTouchEnd;
	obj[_pre + 'dblclick' + id] = handler;

	obj.addEventListener(_touchstart, onTouchStart, false);
	obj.addEventListener(_touchend, onTouchEnd, false);

	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
	// the browser doesn't fire touchend/pointerup events but does fire
	// native dblclicks. See #4127.
	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
	obj.addEventListener('dblclick', handler, false);

	return this;
}

function removeDoubleTapListener(obj, id) {
	var touchstart = obj[_pre + _touchstart + id],
	    touchend = obj[_pre + _touchend + id],
	    dblclick = obj[_pre + 'dblclick' + id];

	obj.removeEventListener(_touchstart, touchstart, false);
	obj.removeEventListener(_touchend, touchend, false);
	if (!edge) {
		obj.removeEventListener('dblclick', dblclick, false);
	}

	return this;
}

/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */


// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var TRANSFORM = testProp(
	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

// @property TRANSITION: String
// Vendor-prefixed transition style name.
var TRANSITION = testProp(
	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

// @property TRANSITION_END: String
// Vendor-prefixed transitionend event name.
var TRANSITION_END =
	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function get(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function getStyle(el, style) {
	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

	if ((!value || value === 'auto') && document.defaultView) {
		var css = document.defaultView.getComputedStyle(el, null);
		value = css ? css[style] : null;
	}
	return value === 'auto' ? null : value;
}

// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function create$1(tagName, className, container) {
	var el = document.createElement(tagName);
	el.className = className || '';

	if (container) {
		container.appendChild(el);
	}
	return el;
}

// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function remove(el) {
	var parent = el.parentNode;
	if (parent) {
		parent.removeChild(el);
	}
}

// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function empty(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function toFront(el) {
	var parent = el.parentNode;
	if (parent && parent.lastChild !== el) {
		parent.appendChild(el);
	}
}

// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function toBack(el) {
	var parent = el.parentNode;
	if (parent && parent.firstChild !== el) {
		parent.insertBefore(el, parent.firstChild);
	}
}

// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function hasClass(el, name) {
	if (el.classList !== undefined) {
		return el.classList.contains(name);
	}
	var className = getClass(el);
	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
}

// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function addClass(el, name) {
	if (el.classList !== undefined) {
		var classes = splitWords(name);
		for (var i = 0, len = classes.length; i < len; i++) {
			el.classList.add(classes[i]);
		}
	} else if (!hasClass(el, name)) {
		var className = getClass(el);
		setClass(el, (className ? className + ' ' : '') + name);
	}
}

// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function removeClass(el, name) {
	if (el.classList !== undefined) {
		el.classList.remove(name);
	} else {
		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
	}
}

// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function setClass(el, name) {
	if (el.className.baseVal === undefined) {
		el.className = name;
	} else {
		// in case of SVG element
		el.className.baseVal = name;
	}
}

// @function getClass(el: HTMLElement): String
// Returns the element's class.
function getClass(el) {
	// Check if the element is an SVGElementInstance and use the correspondingElement instead
	// (Required for linked SVG elements in IE11.)
	if (el.correspondingElement) {
		el = el.correspondingElement;
	}
	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
}

// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function setOpacity(el, value) {
	if ('opacity' in el.style) {
		el.style.opacity = value;
	} else if ('filter' in el.style) {
		_setOpacityIE(el, value);
	}
}

function _setOpacityIE(el, value) {
	var filter = false,
	    filterName = 'DXImageTransform.Microsoft.Alpha';

	// filters collection throws an error if we try to retrieve a filter that doesn't exist
	try {
		filter = el.filters.item(filterName);
	} catch (e) {
		// don't set opacity to 1 if we haven't already set an opacity,
		// it isn't needed and breaks transparent pngs.
		if (value === 1) { return; }
	}

	value = Math.round(value * 100);

	if (filter) {
		filter.Enabled = (value !== 100);
		filter.Opacity = value;
	} else {
		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
	}
}

// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function testProp(props) {
	var style = document.documentElement.style;

	for (var i = 0; i < props.length; i++) {
		if (props[i] in style) {
			return props[i];
		}
	}
	return false;
}

// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function setTransform(el, offset, scale) {
	var pos = offset || new Point(0, 0);

	el.style[TRANSFORM] =
		(ie3d ?
			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
		(scale ? ' scale(' + scale + ')' : '');
}

// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function setPosition(el, point) {

	/*eslint-disable */
	el._leaflet_pos = point;
	/* eslint-enable */

	if (any3d) {
		setTransform(el, point);
	} else {
		el.style.left = point.x + 'px';
		el.style.top = point.y + 'px';
	}
}

// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function getPosition(el) {
	// this method is only used for elements previously positioned using setPosition,
	// so it's safe to cache the position for performance

	return el._leaflet_pos || new Point(0, 0);
}

// @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.

// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
var disableTextSelection;
var enableTextSelection;
var _userSelect;
if ('onselectstart' in document) {
	disableTextSelection = function () {
		on(window, 'selectstart', preventDefault);
	};
	enableTextSelection = function () {
		off(window, 'selectstart', preventDefault);
	};
} else {
	var userSelectProperty = testProp(
		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	disableTextSelection = function () {
		if (userSelectProperty) {
			var style = document.documentElement.style;
			_userSelect = style[userSelectProperty];
			style[userSelectProperty] = 'none';
		}
	};
	enableTextSelection = function () {
		if (userSelectProperty) {
			document.documentElement.style[userSelectProperty] = _userSelect;
			_userSelect = undefined;
		}
	};
}

// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function disableImageDrag() {
	on(window, 'dragstart', preventDefault);
}

// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function enableImageDrag() {
	off(window, 'dragstart', preventDefault);
}

var _outlineElement;
var _outlineStyle;
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function preventOutline(element) {
	while (element.tabIndex === -1) {
		element = element.parentNode;
	}
	if (!element.style) { return; }
	restoreOutline();
	_outlineElement = element;
	_outlineStyle = element.style.outline;
	element.style.outline = 'none';
	on(window, 'keydown', restoreOutline);
}

// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function restoreOutline() {
	if (!_outlineElement) { return; }
	_outlineElement.style.outline = _outlineStyle;
	_outlineElement = undefined;
	_outlineStyle = undefined;
	off(window, 'keydown', restoreOutline);
}

// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function getSizedParentNode(element) {
	do {
		element = element.parentNode;
	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
	return element;
}

// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function getScale(element) {
	var rect = element.getBoundingClientRect(); // Read-only in old browsers.

	return {
		x: rect.width / element.offsetWidth || 1,
		y: rect.height / element.offsetHeight || 1,
		boundingClientRect: rect
	};
}


var DomUtil = (Object.freeze || Object)({
	TRANSFORM: TRANSFORM,
	TRANSITION: TRANSITION,
	TRANSITION_END: TRANSITION_END,
	get: get,
	getStyle: getStyle,
	create: create$1,
	remove: remove,
	empty: empty,
	toFront: toFront,
	toBack: toBack,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	setClass: setClass,
	getClass: getClass,
	setOpacity: setOpacity,
	testProp: testProp,
	setTransform: setTransform,
	setPosition: setPosition,
	getPosition: getPosition,
	disableTextSelection: disableTextSelection,
	enableTextSelection: enableTextSelection,
	disableImageDrag: disableImageDrag,
	enableImageDrag: enableImageDrag,
	preventOutline: preventOutline,
	restoreOutline: restoreOutline,
	getSizedParentNode: getSizedParentNode,
	getScale: getScale
});

/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */

// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).

// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function on(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			addOne(obj, type, types[type], fn);
		}
	} else {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			addOne(obj, types[i], fn, context);
		}
	}

	return this;
}

var eventsKey = '_leaflet_events';

// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.

// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function off(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			removeOne(obj, type, types[type], fn);
		}
	} else if (types) {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			removeOne(obj, types[i], fn, context);
		}
	} else {
		for (var j in obj[eventsKey]) {
			removeOne(obj, j, obj[eventsKey][j]);
		}
		delete obj[eventsKey];
	}

	return this;
}

function addOne(obj, type, fn, context) {
	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

	var handler = function (e) {
		return fn.call(context || obj, e || window.event);
	};

	var originalHandler = handler;

	if (pointer && type.indexOf('touch') === 0) {
		// Needs DomEvent.Pointer.js
		addPointerListener(obj, type, handler, id);

	} else if (touch && (type === 'dblclick') && addDoubleTapListener &&
	           !(pointer && chrome)) {
		// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
		// See #5180
		addDoubleTapListener(obj, handler, id);

	} else if ('addEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

		} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
			handler = function (e) {
				e = e || window.event;
				if (isExternalTarget(obj, e)) {
					originalHandler(e);
				}
			};
			obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

		} else {
			if (type === 'click' && android) {
				handler = function (e) {
					filterClick(e, originalHandler);
				};
			}
			obj.addEventListener(type, handler, false);
		}

	} else if ('attachEvent' in obj) {
		obj.attachEvent('on' + type, handler);
	}

	obj[eventsKey] = obj[eventsKey] || {};
	obj[eventsKey][id] = handler;
}

function removeOne(obj, type, fn, context) {

	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
	    handler = obj[eventsKey] && obj[eventsKey][id];

	if (!handler) { return this; }

	if (pointer && type.indexOf('touch') === 0) {
		removePointerListener(obj, type, id);

	} else if (touch && (type === 'dblclick') && removeDoubleTapListener &&
	           !(pointer && chrome)) {
		removeDoubleTapListener(obj, id);

	} else if ('removeEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

		} else {
			obj.removeEventListener(
				type === 'mouseenter' ? 'mouseover' :
				type === 'mouseleave' ? 'mouseout' : type, handler, false);
		}

	} else if ('detachEvent' in obj) {
		obj.detachEvent('on' + type, handler);
	}

	obj[eventsKey][id] = null;
}

// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function stopPropagation(e) {

	if (e.stopPropagation) {
		e.stopPropagation();
	} else if (e.originalEvent) {  // In case of Leaflet event.
		e.originalEvent._stopped = true;
	} else {
		e.cancelBubble = true;
	}
	skipped(e);

	return this;
}

// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
function disableScrollPropagation(el) {
	addOne(el, 'mousewheel', stopPropagation);
	return this;
}

// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function disableClickPropagation(el) {
	on(el, 'mousedown touchstart dblclick', stopPropagation);
	addOne(el, 'click', fakeStop);
	return this;
}

// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function preventDefault(e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	return this;
}

// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function stop(e) {
	preventDefault(e);
	stopPropagation(e);
	return this;
}

// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function getMousePosition(e, container) {
	if (!container) {
		return new Point(e.clientX, e.clientY);
	}

	var scale = getScale(container),
	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

	return new Point(
		// offset.left/top values are in page scale (like clientX/Y),
		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
		(e.clientX - offset.left) / scale.x - container.clientLeft,
		(e.clientY - offset.top) / scale.y - container.clientTop
	);
}

// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels
var wheelPxFactor =
	(win && chrome) ? 2 * window.devicePixelRatio :
	gecko ? window.devicePixelRatio : 1;

// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function getWheelDelta(e) {
	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
	       0;
}

var skipEvents = {};

function fakeStop(e) {
	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
	skipEvents[e.type] = true;
}

function skipped(e) {
	var events = skipEvents[e.type];
	// reset when checking, as it's only used in map container and propagates outside of the map
	skipEvents[e.type] = false;
	return events;
}

// check if element really left/entered the event target (for mouseenter/mouseleave)
function isExternalTarget(el, e) {

	var related = e.relatedTarget;

	if (!related) { return true; }

	try {
		while (related && (related !== el)) {
			related = related.parentNode;
		}
	} catch (err) {
		return false;
	}
	return (related !== el);
}

var lastClick;

// this is a horrible workaround for a bug in Android where a single touch triggers two click events
function filterClick(e, handler) {
	var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
	    elapsed = lastClick && (timeStamp - lastClick);

	// are they closer together than 500ms yet more than 100ms?
	// Android typically triggers them ~300ms apart while multiple listeners
	// on the same event should be triggered far faster;
	// or check if click is simulated on the element, and if it is, reject any non-simulated events

	if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
		stop(e);
		return;
	}
	lastClick = timeStamp;

	handler(e);
}




var DomEvent = (Object.freeze || Object)({
	on: on,
	off: off,
	stopPropagation: stopPropagation,
	disableScrollPropagation: disableScrollPropagation,
	disableClickPropagation: disableClickPropagation,
	preventDefault: preventDefault,
	stop: stop,
	getMousePosition: getMousePosition,
	getWheelDelta: getWheelDelta,
	fakeStop: fakeStop,
	skipped: skipped,
	isExternalTarget: isExternalTarget,
	addListener: on,
	removeListener: off
});

/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */

var PosAnimation = Evented.extend({

	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
	// Run an animation of a given element to a new position, optionally setting
	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
	// `0.5` by default).
	run: function (el, newPos, duration, easeLinearity) {
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		// @event start: Event
		// Fired when the animation starts
		this.fire('start');

		this._animate();
	},

	// @method stop()
	// Stops the animation (if currently running).
	stop: function () {
		if (!this._inProgress) { return; }

		this._step(true);
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function (round) {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration), round);
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress, round) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		if (round) {
			pos._round();
		}
		setPosition(this._el, pos);

		// @event step: Event
		// Fired continuously during the animation.
		this.fire('step');
	},

	_complete: function () {
		cancelAnimFrame(this._animId);

		this._inProgress = false;
		// @event end: Event
		// Fired when the animation ends.
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});

/*
 * @class Map
 * @aka L.Map
 * @inherits Evented
 *
 * The central class of the API — it is used to create a map on a page and manipulate it.
 *
 * @example
 *
 * ```js
 * // initialize the map on the "map" div with a given center and zoom
 * var map = L.map('map', {
 * 	center: [51.505, -0.09],
 * 	zoom: 13
 * });
 * ```
 *
 */

var Map = Evented.extend({

	options: {
		// @section Map State Options
		// @option crs: CRS = L.CRS.EPSG3857
		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
		// sure what it means.
		crs: EPSG3857,

		// @option center: LatLng = undefined
		// Initial geographic center of the map
		center: undefined,

		// @option zoom: Number = undefined
		// Initial map zoom level
		zoom: undefined,

		// @option minZoom: Number = *
		// Minimum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the lowest of their `minZoom` options will be used instead.
		minZoom: undefined,

		// @option maxZoom: Number = *
		// Maximum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the highest of their `maxZoom` options will be used instead.
		maxZoom: undefined,

		// @option layers: Layer[] = []
		// Array of layers that will be added to the map initially
		layers: [],

		// @option maxBounds: LatLngBounds = null
		// When this option is set, the map restricts the view to the given
		// geographical bounds, bouncing the user back if the user tries to pan
		// outside the view. To set the restriction dynamically, use
		// [`setMaxBounds`](#map-setmaxbounds) method.
		maxBounds: undefined,

		// @option renderer: Renderer = *
		// The default method for drawing vector layers on the map. `L.SVG`
		// or `L.Canvas` by default depending on browser support.
		renderer: undefined,


		// @section Animation Options
		// @option zoomAnimation: Boolean = true
		// Whether the map zoom animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		zoomAnimation: true,

		// @option zoomAnimationThreshold: Number = 4
		// Won't animate zoom if the zoom difference exceeds this value.
		zoomAnimationThreshold: 4,

		// @option fadeAnimation: Boolean = true
		// Whether the tile fade animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		fadeAnimation: true,

		// @option markerZoomAnimation: Boolean = true
		// Whether markers animate their zoom with the zoom animation, if disabled
		// they will disappear for the length of the animation. By default it's
		// enabled in all browsers that support CSS3 Transitions except Android.
		markerZoomAnimation: true,

		// @option transform3DLimit: Number = 2^23
		// Defines the maximum size of a CSS translation transform. The default
		// value should not be changed unless a web browser positions layers in
		// the wrong place after doing a large `panBy`.
		transform3DLimit: 8388608, // Precision limit of a 32-bit float

		// @section Interaction Options
		// @option zoomSnap: Number = 1
		// Forces the map's zoom level to always be a multiple of this, particularly
		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
		// By default, the zoom level snaps to the nearest integer; lower values
		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
		zoomSnap: 1,

		// @option zoomDelta: Number = 1
		// Controls how much the map's zoom level will change after a
		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
		zoomDelta: 1,

		// @option trackResize: Boolean = true
		// Whether the map automatically handles browser window resize to update itself.
		trackResize: true
	},

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = setOptions(this, options);

		// Make sure to assign internal flags at the beginning,
		// to avoid inconsistent state in some edge cases.
		this._handlers = [];
		this._layers = {};
		this._zoomBoundLayers = {};
		this._sizeChanged = true;

		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = bind(this._onResize, this);

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.zoom !== undefined) {
			this._zoom = this._limitZoom(options.zoom);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(toLatLng(options.center), options.zoom, {reset: true});
		}

		this.callInitHooks();

		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
				this.options.zoomAnimation;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {
			this._createAnimProxy();
			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
		}

		this._addLayers(this.options.layers);
	},


	// @section Methods for modifying map state

	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) with the given
	// animation options.
	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
		options = options || {};

		this._stop();

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = extend({animate: options.animate}, options.zoom);
				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
			}

			// try animating pan or zoom
			var moved = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (moved) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
	// Sets the zoom of the map.
	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = zoom;
			return this;
		}
		return this.setView(this.getCenter(), zoom, {zoom: options});
	},

	// @method zoomIn(delta?: Number, options?: Zoom options): this
	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomIn: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom + delta, options);
	},

	// @method zoomOut(delta?: Number, options?: Zoom options): this
	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomOut: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom - delta, options);
	},

	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified geographical point on the map
	// stationary (e.g. used internally for scroll zoom and double-click zoom).
	// @alternative
	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	_getBoundsCenterZoom: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

		if (zoom === Infinity) {
			return {
				center: bounds.getCenter(),
				zoom: zoom
			};
		}

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return {
			center: center,
			zoom: zoom
		};
	},

	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets a map view that contains the given geographical bounds with the
	// maximum zoom level possible.
	fitBounds: function (bounds, options) {

		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			throw new Error('Bounds are not valid.');
		}

		var target = this._getBoundsCenterZoom(bounds, options);
		return this.setView(target.center, target.zoom, options);
	},

	// @method fitWorld(options?: fitBounds options): this
	// Sets a map view that mostly contains the whole world with the maximum
	// zoom level possible.
	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	// @method panTo(latlng: LatLng, options?: Pan options): this
	// Pans the map to a given center.
	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	// @method panBy(offset: Point, options?: Pan options): this
	// Pans the map by a given number of pixels (animated).
	panBy: function (offset, options) {
		offset = toPoint(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this.fire('moveend');
		}
		// If we pan too far, Chrome gets issues with tiles
		// and makes them disappear or appear in the wrong place (slightly offset) #2602
		if (options.animate !== true && !this.getSize().contains(offset)) {
			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan unless animate: false specified
		if (options.animate !== false) {
			addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset).round();
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) performing a smooth
	// pan-zoom animation.
	flyTo: function (targetCenter, targetZoom, options) {

		options = options || {};
		if (options.animate === false || !any3d) {
			return this.setView(targetCenter, targetZoom, options);
		}

		this._stop();

		var from = this.project(this.getCenter()),
		    to = this.project(targetCenter),
		    size = this.getSize(),
		    startZoom = this._zoom;

		targetCenter = toLatLng(targetCenter);
		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

		var w0 = Math.max(size.x, size.y),
		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
		    u1 = (to.distanceTo(from)) || 1,
		    rho = 1.42,
		    rho2 = rho * rho;

		function r(i) {
			var s1 = i ? -1 : 1,
			    s2 = i ? w1 : w0,
			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
			    b1 = 2 * s2 * rho2 * u1,
			    b = t1 / b1,
			    sq = Math.sqrt(b * b + 1) - b;

			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
			    // thus triggering an infinite loop in flyTo
			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

			return log;
		}

		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
		function tanh(n) { return sinh(n) / cosh(n); }

		var r0 = r(0);

		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

		var start = Date.now(),
		    S = (r(1) - r0) / rho,
		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

		function frame() {
			var t = (Date.now() - start) / duration,
			    s = easeOut(t) * S;

			if (t <= 1) {
				this._flyToFrame = requestAnimFrame(frame, this);

				this._move(
					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
					this.getScaleZoom(w0 / w(s), startZoom),
					{flyTo: true});

			} else {
				this
					._move(targetCenter, targetZoom)
					._moveEnd(true);
			}
		}

		this._moveStart(true, options.noMoveStart);

		frame.call(this);
		return this;
	},

	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
	flyToBounds: function (bounds, options) {
		var target = this._getBoundsCenterZoom(bounds, options);
		return this.flyTo(target.center, target.zoom, options);
	},

	// @method setMaxBounds(bounds: Bounds): this
	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
	setMaxBounds: function (bounds) {
		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			this.options.maxBounds = null;
			return this.off('moveend', this._panInsideMaxBounds);
		} else if (this.options.maxBounds) {
			this.off('moveend', this._panInsideMaxBounds);
		}

		this.options.maxBounds = bounds;

		if (this._loaded) {
			this._panInsideMaxBounds();
		}

		return this.on('moveend', this._panInsideMaxBounds);
	},

	// @method setMinZoom(zoom: Number): this
	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
	setMinZoom: function (zoom) {
		var oldZoom = this.options.minZoom;
		this.options.minZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() < this.options.minZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method setMaxZoom(zoom: Number): this
	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
	setMaxZoom: function (zoom) {
		var oldZoom = this.options.maxZoom;
		this.options.maxZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() > this.options.maxZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
	panInsideBounds: function (bounds, options) {
		this._enforcingBounds = true;
		var center = this.getCenter(),
		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

		if (!center.equals(newCenter)) {
			this.panTo(newCenter, options);
		}

		this._enforcingBounds = false;
		return this;
	},

	// @method panInside(latlng: LatLng, options?: options): this
	// Pans the map the minimum amount to make the `latlng` visible. Use
	// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
	// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
	// If `latlng` is already within the (optionally padded) display bounds,
	// the map will not be panned.
	panInside: function (latlng, options) {
		options = options || {};

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
		    center = this.getCenter(),
		    pixelCenter = this.project(center),
		    pixelPoint = this.project(latlng),
		    pixelBounds = this.getPixelBounds(),
		    halfPixelBounds = pixelBounds.getSize().divideBy(2),
		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

		if (!paddedBounds.contains(pixelPoint)) {
			this._enforcingBounds = true;
			var diff = pixelCenter.subtract(pixelPoint),
			    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

			if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
				newCenter.x = pixelCenter.x - diff.x;
				if (diff.x > 0) {
					newCenter.x += halfPixelBounds.x - paddingTL.x;
				} else {
					newCenter.x -= halfPixelBounds.x - paddingBR.x;
				}
			}
			if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
				newCenter.y = pixelCenter.y - diff.y;
				if (diff.y > 0) {
					newCenter.y += halfPixelBounds.y - paddingTL.y;
				} else {
					newCenter.y -= halfPixelBounds.y - paddingBR.y;
				}
			}
			this.panTo(this.unproject(newCenter), options);
			this._enforcingBounds = false;
		}
		return this;
	},

	// @method invalidateSize(options: Zoom/pan options): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default. If `options.pan` is `false`, panning will not occur.
	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
	// that it doesn't happen often even if the method is called many
	// times in a row.

	// @alternative
	// @method invalidateSize(animate: Boolean): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default.
	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = extend({
			animate: false,
			pan: true
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;
		this._lastCenter = null;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		// @section Map state change events
		// @event resize: ResizeEvent
		// Fired when the map is resized.
		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	// @section Methods for modifying map state
	// @method stop(): this
	// Stops the currently running `panTo` or `flyTo` animation, if any.
	stop: function () {
		this.setZoom(this._limitZoom(this._zoom));
		if (!this.options.zoomSnap) {
			this.fire('viewreset');
		}
		return this._stop();
	},

	// @section Geolocation methods
	// @method locate(options?: Locate options): this
	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
	// and optionally sets the map view to the user's location with respect to
	// detection accuracy (or to the world view if geolocation failed).
	// Note that, if your page doesn't use HTTPS, this method will fail in
	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
	// See `Locate options` for more details.
	locate: function (options) {

		options = this._locateOptions = extend({
			timeout: 10000,
			watch: false
			// setView: false
			// maxZoom: <Number>
			// maximumAge: 0
			// enableHighAccuracy: false
		}, options);

		if (!('geolocation' in navigator)) {
			this._handleGeolocationError({
				code: 0,
				message: 'Geolocation not supported.'
			});
			return this;
		}

		var onResponse = bind(this._handleGeolocationResponse, this),
		    onError = bind(this._handleGeolocationError, this);

		if (options.watch) {
			this._locationWatchId =
			        navigator.geolocation.watchPosition(onResponse, onError, options);
		} else {
			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
		}
		return this;
	},

	// @method stopLocate(): this
	// Stops watching location previously initiated by `map.locate({watch: true})`
	// and aborts resetting the map view if map.locate was called with
	// `{setView: true}`.
	stopLocate: function () {
		if (navigator.geolocation && navigator.geolocation.clearWatch) {
			navigator.geolocation.clearWatch(this._locationWatchId);
		}
		if (this._locateOptions) {
			this._locateOptions.setView = false;
		}
		return this;
	},

	_handleGeolocationError: function (error) {
		var c = error.code,
		    message = error.message ||
		            (c === 1 ? 'permission denied' :
		            (c === 2 ? 'position unavailable' : 'timeout'));

		if (this._locateOptions.setView && !this._loaded) {
			this.fitWorld();
		}

		// @section Location events
		// @event locationerror: ErrorEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
		this.fire('locationerror', {
			code: c,
			message: 'Geolocation error: ' + message + '.'
		});
	},

	_handleGeolocationResponse: function (pos) {
		var lat = pos.coords.latitude,
		    lng = pos.coords.longitude,
		    latlng = new LatLng(lat, lng),
		    bounds = latlng.toBounds(pos.coords.accuracy * 2),
		    options = this._locateOptions;

		if (options.setView) {
			var zoom = this.getBoundsZoom(bounds);
			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
		}

		var data = {
			latlng: latlng,
			bounds: bounds,
			timestamp: pos.timestamp
		};

		for (var i in pos.coords) {
			if (typeof pos.coords[i] === 'number') {
				data[i] = pos.coords[i];
			}
		}

		// @event locationfound: LocationEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method)
		// went successfully.
		this.fire('locationfound', data);
	},

	// TODO Appropriate docs section?
	// @section Other Methods
	// @method addHandler(name: String, HandlerClass: Function): this
	// Adds a new `Handler` to the map, given its name and constructor function.
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		return this;
	},

	// @method remove(): this
	// Destroys the map and clears all related event listeners.
	remove: function () {

		this._initEvents(true);

		if (this._containerId !== this._container._leaflet_id) {
			throw new Error('Map container is being reused by another instance');
		}

		try {
			// throws error in IE6-8
			delete this._container._leaflet_id;
			delete this._containerId;
		} catch (e) {
			/*eslint-disable */
			this._container._leaflet_id = undefined;
			/* eslint-enable */
			this._containerId = undefined;
		}

		if (this._locationWatchId !== undefined) {
			this.stopLocate();
		}

		this._stop();

		remove(this._mapPane);

		if (this._clearControlPos) {
			this._clearControlPos();
		}
		if (this._resizeRequest) {
			cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = null;
		}

		this._clearHandlers();

		if (this._loaded) {
			// @section Map state change events
			// @event unload: Event
			// Fired when the map is destroyed with [remove](#map-remove) method.
			this.fire('unload');
		}

		var i;
		for (i in this._layers) {
			this._layers[i].remove();
		}
		for (i in this._panes) {
			remove(this._panes[i]);
		}

		this._layers = [];
		this._panes = [];
		delete this._mapPane;
		delete this._renderer;

		return this;
	},

	// @section Other Methods
	// @method createPane(name: String, container?: HTMLElement): HTMLElement
	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
	// then returns it. The pane is created as a child of `container`, or
	// as a child of the main map pane if not set.
	createPane: function (name, container) {
		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
		    pane = create$1('div', className, container || this._mapPane);

		if (name) {
			this._panes[name] = pane;
		}
		return pane;
	},

	// @section Methods for Getting Map State

	// @method getCenter(): LatLng
	// Returns the geographical center of the map view
	getCenter: function () {
		this._checkIfLoaded();

		if (this._lastCenter && !this._moved()) {
			return this._lastCenter;
		}
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	// @method getZoom(): Number
	// Returns the current zoom level of the map view
	getZoom: function () {
		return this._zoom;
	},

	// @method getBounds(): LatLngBounds
	// Returns the geographical bounds visible in the current map view
	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new LatLngBounds(sw, ne);
	},

	// @method getMinZoom(): Number
	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
	getMinZoom: function () {
		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
	},

	// @method getMaxZoom(): Number
	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
	// Returns the maximum zoom level on which the given bounds fit to the map
	// view in its entirety. If `inside` (optional) is set to `true`, the method
	// instead returns the minimum zoom level on which the map view fits into
	// the given bounds in its entirety.
	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = toLatLngBounds(bounds);
		padding = toPoint(padding || [0, 0]);

		var zoom = this.getZoom() || 0,
		    min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),
		    size = this.getSize().subtract(padding),
		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
		    snap = any3d ? this.options.zoomSnap : 1,
		    scalex = size.x / boundsSize.x,
		    scaley = size.y / boundsSize.y,
		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

		zoom = this.getScaleZoom(scale, zoom);

		if (snap) {
			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
		}

		return Math.max(min, Math.min(max, zoom));
	},

	// @method getSize(): Point
	// Returns the current size of the map container (in pixels).
	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new Point(
				this._container.clientWidth || 0,
				this._container.clientHeight || 0);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	// @method getPixelBounds(): Bounds
	// Returns the bounds of the current map view in projected pixel
	// coordinates (sometimes useful in layer and overlay implementations).
	getPixelBounds: function (center, zoom) {
		var topLeftPoint = this._getTopLeftPoint(center, zoom);
		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
	// the map pane? "left point of the map layer" can be confusing, specially
	// since there can be negative offsets.
	// @method getPixelOrigin(): Point
	// Returns the projected pixel coordinates of the top left point of
	// the map layer (useful in custom layer and overlay implementations).
	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._pixelOrigin;
	},

	// @method getPixelWorldBounds(zoom?: Number): Bounds
	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
	// If `zoom` is omitted, the map's current zoom level is used.
	getPixelWorldBounds: function (zoom) {
		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
	},

	// @section Other Methods

	// @method getPane(pane: String|HTMLElement): HTMLElement
	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
	getPane: function (pane) {
		return typeof pane === 'string' ? this._panes[pane] : pane;
	},

	// @method getPanes(): Object
	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
	// the panes as values.
	getPanes: function () {
		return this._panes;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the map.
	getContainer: function () {
		return this._container;
	},


	// @section Conversion Methods

	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
	// Returns the scale factor to be applied to a map transition from zoom level
	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
	getZoomScale: function (toZoom, fromZoom) {
		// TODO replace with universal implementation after refactoring projections
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return crs.scale(toZoom) / crs.scale(fromZoom);
	},

	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
	// level and everything is scaled by a factor of `scale`. Inverse of
	// [`getZoomScale`](#map-getZoomScale).
	getScaleZoom: function (scale, fromZoom) {
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		var zoom = crs.zoom(scale * crs.scale(fromZoom));
		return isNaN(zoom) ? Infinity : zoom;
	},

	// @method project(latlng: LatLng, zoom: Number): Point
	// Projects a geographical coordinate `LatLng` according to the projection
	// of the map's CRS, then scales it according to `zoom` and the CRS's
	// `Transformation`. The result is pixel coordinate relative to
	// the CRS origin.
	project: function (latlng, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
	},

	// @method unproject(point: Point, zoom: Number): LatLng
	// Inverse of [`project`](#map-project).
	unproject: function (point, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(toPoint(point), zoom);
	},

	// @method layerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding geographical coordinate (for the current zoom level).
	layerPointToLatLng: function (point) {
		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	// @method latLngToLayerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the [origin pixel](#map-getpixelorigin).
	latLngToLayerPoint: function (latlng) {
		var projectedPoint = this.project(toLatLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
	// CRS's bounds.
	// By default this means longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees.
	wrapLatLng: function (latlng) {
		return this.options.crs.wrapLatLng(toLatLng(latlng));
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
	// its center is within the CRS's bounds.
	// By default this means the center longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees, and the majority of the bounds
	// overlaps the CRS's bounds.
	wrapLatLngBounds: function (latlng) {
		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates according to
	// the map's CRS. By default this measures distance in meters.
	distance: function (latlng1, latlng2) {
		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
	},

	// @method containerPointToLayerPoint(point: Point): Point
	// Given a pixel coordinate relative to the map container, returns the corresponding
	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
	containerPointToLayerPoint: function (point) { // (Point)
		return toPoint(point).subtract(this._getMapPanePos());
	},

	// @method layerPointToContainerPoint(point: Point): Point
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding pixel coordinate relative to the map container.
	layerPointToContainerPoint: function (point) { // (Point)
		return toPoint(point).add(this._getMapPanePos());
	},

	// @method containerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the map container, returns
	// the corresponding geographical coordinate (for the current zoom level).
	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
		return this.layerPointToLatLng(layerPoint);
	},

	// @method latLngToContainerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the map container.
	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
	},

	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to the
	// map container where the event took place.
	mouseEventToContainerPoint: function (e) {
		return getMousePosition(e, this._container);
	},

	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to
	// the [origin pixel](#map-getpixelorigin) where the event took place.
	mouseEventToLayerPoint: function (e) {
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
	// Given a MouseEvent object, returns geographical coordinate where the
	// event took place.
	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},


	// map initialization methods

	_initContainer: function (id) {
		var container = this._container = get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet_id) {
			throw new Error('Map container is already initialized.');
		}

		on(container, 'scroll', this._onScroll, this);
		this._containerId = stamp(container);
	},

	_initLayout: function () {
		var container = this._container;

		this._fadeAnimated = this.options.fadeAnimation && any3d;

		addClass(container, 'leaflet-container' +
			(touch ? ' leaflet-touch' : '') +
			(retina ? ' leaflet-retina' : '') +
			(ielt9 ? ' leaflet-oldie' : '') +
			(safari ? ' leaflet-safari' : '') +
			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

		var position = getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'relative';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};
		this._paneRenderers = {};

		// @section
		//
		// Panes are DOM elements used to control the ordering of layers on the map. You
		// can access panes with [`map.getPane`](#map-getpane) or
		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
		// [`map.createPane`](#map-createpane) method.
		//
		// Every map has the following default panes that differ only in zIndex.
		//
		// @pane mapPane: HTMLElement = 'auto'
		// Pane that contains all other map panes

		this._mapPane = this.createPane('mapPane', this._container);
		setPosition(this._mapPane, new Point(0, 0));

		// @pane tilePane: HTMLElement = 200
		// Pane for `GridLayer`s and `TileLayer`s
		this.createPane('tilePane');
		// @pane overlayPane: HTMLElement = 400
		// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
		this.createPane('shadowPane');
		// @pane shadowPane: HTMLElement = 500
		// Pane for overlay shadows (e.g. `Marker` shadows)
		this.createPane('overlayPane');
		// @pane markerPane: HTMLElement = 600
		// Pane for `Icon`s of `Marker`s
		this.createPane('markerPane');
		// @pane tooltipPane: HTMLElement = 650
		// Pane for `Tooltip`s.
		this.createPane('tooltipPane');
		// @pane popupPane: HTMLElement = 700
		// Pane for `Popup`s.
		this.createPane('popupPane');

		if (!this.options.markerZoomAnimation) {
			addClass(panes.markerPane, 'leaflet-zoom-hide');
			addClass(panes.shadowPane, 'leaflet-zoom-hide');
		}
	},


	// private methods that modify map state

	// @section Map state change events
	_resetView: function (center, zoom) {
		setPosition(this._mapPane, new Point(0, 0));

		var loading = !this._loaded;
		this._loaded = true;
		zoom = this._limitZoom(zoom);

		this.fire('viewprereset');

		var zoomChanged = this._zoom !== zoom;
		this
			._moveStart(zoomChanged, false)
			._move(center, zoom)
			._moveEnd(zoomChanged);

		// @event viewreset: Event
		// Fired when the map needs to redraw its content (this usually happens
		// on map zoom or load). Very useful for creating custom overlays.
		this.fire('viewreset');

		// @event load: Event
		// Fired when the map is initialized (when its center and zoom are set
		// for the first time).
		if (loading) {
			this.fire('load');
		}
	},

	_moveStart: function (zoomChanged, noMoveStart) {
		// @event zoomstart: Event
		// Fired when the map zoom is about to change (e.g. before zoom animation).
		// @event movestart: Event
		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
		if (zoomChanged) {
			this.fire('zoomstart');
		}
		if (!noMoveStart) {
			this.fire('movestart');
		}
		return this;
	},

	_move: function (center, zoom, data) {
		if (zoom === undefined) {
			zoom = this._zoom;
		}
		var zoomChanged = this._zoom !== zoom;

		this._zoom = zoom;
		this._lastCenter = center;
		this._pixelOrigin = this._getNewPixelOrigin(center);

		// @event zoom: Event
		// Fired repeatedly during any change in zoom level, including zoom
		// and fly animations.
		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
			this.fire('zoom', data);
		}

		// @event move: Event
		// Fired repeatedly during any movement of the map, including pan and
		// fly animations.
		return this.fire('move', data);
	},

	_moveEnd: function (zoomChanged) {
		// @event zoomend: Event
		// Fired when the map has changed, after any animations.
		if (zoomChanged) {
			this.fire('zoomend');
		}

		// @event moveend: Event
		// Fired when the center of the map stops changing (e.g. user stopped
		// dragging the map).
		return this.fire('moveend');
	},

	_stop: function () {
		cancelAnimFrame(this._flyToFrame);
		if (this._panAnim) {
			this._panAnim.stop();
		}
		return this;
	},

	_rawPanBy: function (offset) {
		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_panInsideMaxBounds: function () {
		if (!this._enforcingBounds) {
			this.panInsideBounds(this.options.maxBounds);
		}
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// DOM event handling

	// @section Interaction events
	_initEvents: function (remove$$1) {
		this._targets = {};
		this._targets[stamp(this._container)] = this;

		var onOff = remove$$1 ? off : on;

		// @event click: MouseEvent
		// Fired when the user clicks (or taps) the map.
		// @event dblclick: MouseEvent
		// Fired when the user double-clicks (or double-taps) the map.
		// @event mousedown: MouseEvent
		// Fired when the user pushes the mouse button on the map.
		// @event mouseup: MouseEvent
		// Fired when the user releases the mouse button on the map.
		// @event mouseover: MouseEvent
		// Fired when the mouse enters the map.
		// @event mouseout: MouseEvent
		// Fired when the mouse leaves the map.
		// @event mousemove: MouseEvent
		// Fired while the mouse moves over the map.
		// @event contextmenu: MouseEvent
		// Fired when the user pushes the right mouse button on the map, prevents
		// default browser context menu from showing if there are listeners on
		// this event. Also fired on mobile when the user holds a single touch
		// for a second (also called long press).
		// @event keypress: KeyboardEvent
		// Fired when the user presses a key from the keyboard while the map is focused.
		onOff(this._container, 'click dblclick mousedown mouseup ' +
			'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);

		if (this.options.trackResize) {
			onOff(window, 'resize', this._onResize, this);
		}

		if (any3d && this.options.transform3DLimit) {
			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
		}
	},

	_onResize: function () {
		cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = requestAnimFrame(
		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
	},

	_onScroll: function () {
		this._container.scrollTop  = 0;
		this._container.scrollLeft = 0;
	},

	_onMoveEnd: function () {
		var pos = this._getMapPanePos();
		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
			this._resetView(this.getCenter(), this.getZoom());
		}
	},

	_findEventTargets: function (e, type) {
		var targets = [],
		    target,
		    isHover = type === 'mouseout' || type === 'mouseover',
		    src = e.target || e.srcElement,
		    dragging = false;

		while (src) {
			target = this._targets[stamp(src)];
			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
				// Prevent firing click after you just dragged an object.
				dragging = true;
				break;
			}
			if (target && target.listens(type, true)) {
				if (isHover && !isExternalTarget(src, e)) { break; }
				targets.push(target);
				if (isHover) { break; }
			}
			if (src === this._container) { break; }
			src = src.parentNode;
		}
		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
			targets = [this];
		}
		return targets;
	},

	_handleDOMEvent: function (e) {
		if (!this._loaded || skipped(e)) { return; }

		var type = e.type;

		if (type === 'mousedown' || type === 'keypress') {
			// prevents outline when clicking on keyboard-focusable element
			preventOutline(e.target || e.srcElement);
		}

		this._fireDOMEvent(e, type);
	},

	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

	_fireDOMEvent: function (e, type, targets) {

		if (e.type === 'click') {
			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
			// @event preclick: MouseEvent
			// Fired before mouse click on the map (sometimes useful when you
			// want something to happen on click before any existing click
			// handlers start running).
			var synth = extend({}, e);
			synth.type = 'preclick';
			this._fireDOMEvent(synth, synth.type, targets);
		}

		if (e._stopped) { return; }

		// Find the layer the event is propagating from and its parents.
		targets = (targets || []).concat(this._findEventTargets(e, type));

		if (!targets.length) { return; }

		var target = targets[0];
		if (type === 'contextmenu' && target.listens(type, true)) {
			preventDefault(e);
		}

		var data = {
			originalEvent: e
		};

		if (e.type !== 'keypress') {
			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
			data.containerPoint = isMarker ?
				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
		}

		for (var i = 0; i < targets.length; i++) {
			targets[i].fire(type, data, true);
			if (data.originalEvent._stopped ||
				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
		}
	},

	_draggableMoved: function (obj) {
		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	// @section Other Methods

	// @method whenReady(fn: Function, context?: Object): this
	// Runs the given function `fn` when the map gets initialized with
	// a view (center and zoom) and at least one layer, or immediately
	// if it's already initialized, optionally passing a function context.
	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, {target: this});
		} else {
			this.on('load', callback, context);
		}
		return this;
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return getPosition(this._mapPane) || new Point(0, 0);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function (center, zoom) {
		var pixelOrigin = center && zoom !== undefined ?
			this._getNewPixelOrigin(center, zoom) :
			this.getPixelOrigin();
		return pixelOrigin.subtract(this._getMapPanePos());
	},

	_getNewPixelOrigin: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
	},

	_latLngToNewLayerPoint: function (latlng, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return this.project(latlng, zoom)._subtract(topLeft);
	},

	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return toBounds([
			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
		]);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		// If offset is less than a pixel, ignore.
		// This prevents unstable projections from getting into
		// an infinite loop of tiny offsets.
		if (offset.round().equals([0, 0])) {
			return center;
		}

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var projectedMaxBounds = toBounds(
		        this.project(maxBounds.getNorthEast(), zoom),
		        this.project(maxBounds.getSouthWest(), zoom)
		    ),
		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

		    dx = this._rebound(minOffset.x, -maxOffset.x),
		    dy = this._rebound(minOffset.y, -maxOffset.y);

		return new Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    snap = any3d ? this.options.zoomSnap : 1;
		if (snap) {
			zoom = Math.round(zoom / snap) * snap;
		}
		return Math.max(min, Math.min(max, zoom));
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._trunc();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return true;
	},

	_createAnimProxy: function () {

		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
		this._panes.mapPane.appendChild(proxy);

		this.on('zoomanim', function (e) {
			var prop = TRANSFORM,
			    transform = this._proxy.style[prop];

			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

			// workaround for case when transform is the same and so transitionend event is not fired
			if (transform === this._proxy.style[prop] && this._animatingZoom) {
				this._onZoomTransitionEnd();
			}
		}, this);

		this.on('load moveend', function () {
			var c = this.getCenter(),
			    z = this.getZoom();
			setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
		}, this);

		this._on('unload', this._destroyAnimProxy, this);
	},

	_destroyAnimProxy: function () {
		remove(this._proxy);
		delete this._proxy;
	},

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		requestAnimFrame(function () {
			this
			    ._moveStart(true, false)
			    ._animateZoom(center, zoom, true);
		}, this);

		return true;
	},

	_animateZoom: function (center, zoom, startAnim, noUpdate) {
		if (!this._mapPane) { return; }

		if (startAnim) {
			this._animatingZoom = true;

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			addClass(this._mapPane, 'leaflet-zoom-anim');
		}

		// @event zoomanim: ZoomAnimEvent
		// Fired at least once per zoom animation. For continous zoom, like pinch zooming, fired once per frame during zoom.
		this.fire('zoomanim', {
			center: center,
			zoom: zoom,
			noUpdate: noUpdate
		});

		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
	},

	_onZoomTransitionEnd: function () {
		if (!this._animatingZoom) { return; }

		if (this._mapPane) {
			removeClass(this._mapPane, 'leaflet-zoom-anim');
		}

		this._animatingZoom = false;

		this._move(this._animateToCenter, this._animateToZoom);

		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
		requestAnimFrame(function () {
			this._moveEnd(true);
		}, this);
	}
});

// @section

// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function createMap(id, options) {
	return new Map(id, options);
}

/*
 * @class Control
 * @aka L.Control
 * @inherits Class
 *
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

var Control = Class.extend({
	// @section
	// @aka Control options
	options: {
		// @option position: String = 'topright'
		// The position of the control (one of the map corners). Possible values are `'topleft'`,
		// `'topright'`, `'bottomleft'` or `'bottomright'`
		position: 'topright'
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	/* @section
	 * Classes extending L.Control will inherit the following methods:
	 *
	 * @method getPosition: string
	 * Returns the position of the control.
	 */
	getPosition: function () {
		return this.options.position;
	},

	// @method setPosition(position: string): this
	// Sets the position of the control.
	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTMLElement that contains the control.
	getContainer: function () {
		return this._container;
	},

	// @method addTo(map: Map): this
	// Adds the control to the given map.
	addTo: function (map) {
		this.remove();
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		return this;
	},

	// @method remove: this
	// Removes the control from the map it is currently active on.
	remove: function () {
		if (!this._map) {
			return this;
		}

		remove(this._container);

		if (this.onRemove) {
			this.onRemove(this._map);
		}

		this._map = null;

		return this;
	},

	_refocusOnMap: function (e) {
		// if map exists and event is not a keyboard event
		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
			this._map.getContainer().focus();
		}
	}
});

var control = function (options) {
	return new Control(options);
};

/* @section Extension methods
 * @uninheritable
 *
 * Every control should extend from `L.Control` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): HTMLElement
 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
 *
 * @method onRemove(map: Map)
 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
 */

/* @namespace Map
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addControl(control: Control): this
	// Adds the given control to the map
	addControl: function (control) {
		control.addTo(this);
		return this;
	},

	// @method removeControl(control: Control): this
	// Removes the given control from the map
	removeControl: function (control) {
		control.remove();
		return this;
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            create$1('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = create$1('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		for (var i in this._controlCorners) {
			remove(this._controlCorners[i]);
		}
		remove(this._controlContainer);
		delete this._controlCorners;
		delete this._controlContainer;
	}
});

/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```js
 * var baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * var overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```js
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```js
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */

var Layers = Control.extend({
	// @section
	// @aka Control.Layers options
	options: {
		// @option collapsed: Boolean = true
		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
		collapsed: true,
		position: 'topright',

		// @option autoZIndex: Boolean = true
		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
		autoZIndex: true,

		// @option hideSingleBase: Boolean = false
		// If `true`, the base layers in the control will be hidden when there is only one.
		hideSingleBase: false,

		// @option sortLayers: Boolean = false
		// Whether to sort the layers. When `false`, layers will keep the order
		// in which they were added to the control.
		sortLayers: false,

		// @option sortFunction: Function = *
		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		// that will be used for sorting the layers, when `sortLayers` is `true`.
		// The function receives both the `L.Layer` instances and their names, as in
		// `sortFunction(layerA, layerB, nameA, nameB)`.
		// By default, it sorts layers alphabetically by their name.
		sortFunction: function (layerA, layerB, nameA, nameB) {
			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
		}
	},

	initialize: function (baseLayers, overlays, options) {
		setOptions(this, options);

		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		this._map = map;
		map.on('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.on('add remove', this._onLayerChange, this);
		}

		return this._container;
	},

	addTo: function (map) {
		Control.prototype.addTo.call(this, map);
		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
		return this._expandIfNotCollapsed();
	},

	onRemove: function () {
		this._map.off('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.off('add remove', this._onLayerChange, this);
		}
	},

	// @method addBaseLayer(layer: Layer, name: String): this
	// Adds a base layer (radio button entry) with the given name to the control.
	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return (this._map) ? this._update() : this;
	},

	// @method addOverlay(layer: Layer, name: String): this
	// Adds an overlay (checkbox entry) with the given name to the control.
	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return (this._map) ? this._update() : this;
	},

	// @method removeLayer(layer: Layer): this
	// Remove the given layer from the control.
	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		var obj = this._getLayer(stamp(layer));
		if (obj) {
			this._layers.splice(this._layers.indexOf(obj), 1);
		}
		return (this._map) ? this._update() : this;
	},

	// @method expand(): this
	// Expand the control container if collapsed.
	expand: function () {
		addClass(this._container, 'leaflet-control-layers-expanded');
		this._section.style.height = null;
		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._section.clientHeight) {
			addClass(this._section, 'leaflet-control-layers-scrollbar');
			this._section.style.height = acceptableHeight + 'px';
		} else {
			removeClass(this._section, 'leaflet-control-layers-scrollbar');
		}
		this._checkDisabledLayers();
		return this;
	},

	// @method collapse(): this
	// Collapse the control container if expanded.
	collapse: function () {
		removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = create$1('div', className),
		    collapsed = this.options.collapsed;

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		disableClickPropagation(container);
		disableScrollPropagation(container);

		var section = this._section = create$1('section', className + '-list');

		if (collapsed) {
			this._map.on('click', this.collapse, this);

			if (!android) {
				on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}

		var link = this._layersLink = create$1('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';

		if (touch) {
			on(link, 'click', stop);
			on(link, 'click', this.expand, this);
		} else {
			on(link, 'focus', this.expand, this);
		}

		if (!collapsed) {
			this.expand();
		}

		this._baseLayersList = create$1('div', className + '-base', section);
		this._separator = create$1('div', className + '-separator', section);
		this._overlaysList = create$1('div', className + '-overlays', section);

		container.appendChild(section);
	},

	_getLayer: function (id) {
		for (var i = 0; i < this._layers.length; i++) {

			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
				return this._layers[i];
			}
		}
	},

	_addLayer: function (layer, name, overlay) {
		if (this._map) {
			layer.on('add remove', this._onLayerChange, this);
		}

		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});

		if (this.options.sortLayers) {
			this._layers.sort(bind(function (a, b) {
				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
			}, this));
		}

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}

		this._expandIfNotCollapsed();
	},

	_update: function () {
		if (!this._container) { return this; }

		empty(this._baseLayersList);
		empty(this._overlaysList);

		this._layerControlInputs = [];
		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (i = 0; i < this._layers.length; i++) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		var obj = this._getLayer(stamp(e.target));

		// @namespace Map
		// @section Layer events
		// @event baselayerchange: LayersControlEvent
		// Fired when the base layer is changed through the [layer control](#control-layers).
		// @event overlayadd: LayersControlEvent
		// Fired when an overlay is selected through the [layer control](#control-layers).
		// @event overlayremove: LayersControlEvent
		// Fired when an overlay is deselected through the [layer control](#control-layers).
		// @namespace Control.Layers
		var type = obj.overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}

		this._layerControlInputs.push(input);
		input.layerId = stamp(obj.layer);

		on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		// Helps from preventing layer control flicker when checkboxes are disabled
		// https://github.com/Leaflet/Leaflet/issues/2771
		var holder = document.createElement('div');

		label.appendChild(holder);
		holder.appendChild(input);
		holder.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		this._checkDisabledLayers();
		return label;
	},

	_onInputClick: function () {
		var inputs = this._layerControlInputs,
		    input, layer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;

			if (input.checked) {
				addedLayers.push(layer);
			} else if (!input.checked) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			if (this._map.hasLayer(removedLayers[i])) {
				this._map.removeLayer(removedLayers[i]);
			}
		}
		for (i = 0; i < addedLayers.length; i++) {
			if (!this._map.hasLayer(addedLayers[i])) {
				this._map.addLayer(addedLayers[i]);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_checkDisabledLayers: function () {
		var inputs = this._layerControlInputs,
		    input,
		    layer,
		    zoom = this._map.getZoom();

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

		}
	},

	_expandIfNotCollapsed: function () {
		if (this._map && !this.options.collapsed) {
			this.expand();
		}
		return this;
	},

	_expand: function () {
		// Backward compatibility, remove me in 1.1.
		return this.expand();
	},

	_collapse: function () {
		// Backward compatibility, remove me in 1.1.
		return this.collapse();
	}

});


// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
var layers = function (baseLayers, overlays, options) {
	return new Layers(baseLayers, overlays, options);
};

/*
 * @class Control.Zoom
 * @aka L.Control.Zoom
 * @inherits Control
 *
 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
 */

var Zoom = Control.extend({
	// @section
	// @aka Control.Zoom options
	options: {
		position: 'topleft',

		// @option zoomInText: String = '+'
		// The text set on the 'zoom in' button.
		zoomInText: '+',

		// @option zoomInTitle: String = 'Zoom in'
		// The title set on the 'zoom in' button.
		zoomInTitle: 'Zoom in',

		// @option zoomOutText: String = '&#x2212;'
		// The text set on the 'zoom out' button.
		zoomOutText: '&#x2212;',

		// @option zoomOutTitle: String = 'Zoom out'
		// The title set on the 'zoom out' button.
		zoomOutTitle: 'Zoom out'
	},

	onAdd: function (map) {
		var zoomName = 'leaflet-control-zoom',
		    container = create$1('div', zoomName + ' leaflet-bar'),
		    options = this.options;

		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
		        zoomName + '-in',  container, this._zoomIn);
		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
		        zoomName + '-out', container, this._zoomOut);

		this._updateDisabled();
		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	disable: function () {
		this._disabled = true;
		this._updateDisabled();
		return this;
	},

	enable: function () {
		this._disabled = false;
		this._updateDisabled();
		return this;
	},

	_zoomIn: function (e) {
		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_zoomOut: function (e) {
		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_createButton: function (html, title, className, container, fn) {
		var link = create$1('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		/*
		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
		 */
		link.setAttribute('role', 'button');
		link.setAttribute('aria-label', title);

		disableClickPropagation(link);
		on(link, 'click', stop);
		on(link, 'click', fn, this);
		on(link, 'click', this._refocusOnMap, this);

		return link;
	},

	_updateDisabled: function () {
		var map = this._map,
		    className = 'leaflet-disabled';

		removeClass(this._zoomInButton, className);
		removeClass(this._zoomOutButton, className);

		if (this._disabled || map._zoom === map.getMinZoom()) {
			addClass(this._zoomOutButton, className);
		}
		if (this._disabled || map._zoom === map.getMaxZoom()) {
			addClass(this._zoomInButton, className);
		}
	}
});

// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Map.mergeOptions({
	zoomControl: true
});

Map.addInitHook(function () {
	if (this.options.zoomControl) {
		// @section Controls
		// @property zoomControl: Control.Zoom
		// The default zoom control (only available if the
		// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
		this.zoomControl = new Zoom();
		this.addControl(this.zoomControl);
	}
});

// @namespace Control.Zoom
// @factory L.control.zoom(options: Control.Zoom options)
// Creates a zoom control
var zoom = function (options) {
	return new Zoom(options);
};

/*
 * @class Control.Scale
 * @aka L.Control.Scale
 * @inherits Control
 *
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
 *
 * @example
 *
 * ```js
 * L.control.scale().addTo(map);
 * ```
 */

var Scale = Control.extend({
	// @section
	// @aka Control.Scale options
	options: {
		position: 'bottomleft',

		// @option maxWidth: Number = 100
		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
		maxWidth: 100,

		// @option metric: Boolean = True
		// Whether to show the metric scale line (m/km).
		metric: true,

		// @option imperial: Boolean = True
		// Whether to show the imperial scale line (mi/ft).
		imperial: true

		// @option updateWhenIdle: Boolean = false
		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
	},

	onAdd: function (map) {
		var className = 'leaflet-control-scale',
		    container = create$1('div', className),
		    options = this.options;

		this._addScales(options, className + '-line', container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = create$1('div', className, container);
		}
		if (options.imperial) {
			this._iScale = create$1('div', className, container);
		}
	},

	_update: function () {
		var map = this._map,
		    y = map.getSize().y / 2;

		var maxMeters = map.distance(
			map.containerPointToLatLng([0, y]),
			map.containerPointToLatLng([this.options.maxWidth, y]));

		this._updateScales(maxMeters);
	},

	_updateScales: function (maxMeters) {
		if (this.options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}
		if (this.options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters),
		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

		this._updateScale(this._mScale, label, meters / maxMeters);
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);
			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

		} else {
			feet = this._getRoundNum(maxFeet);
			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
		}
	},

	_updateScale: function (scale, text, ratio) {
		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
		scale.innerHTML = text;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 :
		    d >= 5 ? 5 :
		    d >= 3 ? 3 :
		    d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});


// @factory L.control.scale(options?: Control.Scale options)
// Creates an scale control with the given options.
var scale = function (options) {
	return new Scale(options);
};

/*
 * @class Control.Attribution
 * @aka L.Control.Attribution
 * @inherits Control
 *
 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
 */

var Attribution = Control.extend({
	// @section
	// @aka Control.Attribution options
	options: {
		position: 'bottomright',

		// @option prefix: String = 'Leaflet'
		// The HTML text shown before the attributions. Pass `false` to disable.
		prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		setOptions(this, options);

		this._attributions = {};
	},

	onAdd: function (map) {
		map.attributionControl = this;
		this._container = create$1('div', 'leaflet-control-attribution');
		disableClickPropagation(this._container);

		// TODO ugly, refactor
		for (var i in map._layers) {
			if (map._layers[i].getAttribution) {
				this.addAttribution(map._layers[i].getAttribution());
			}
		}

		this._update();

		return this._container;
	},

	// @method setPrefix(prefix: String): this
	// Sets the text before the attributions.
	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	// @method addAttribution(text: String): this
	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
	addAttribution: function (text) {
		if (!text) { return this; }

		if (!this._attributions[text]) {
			this._attributions[text] = 0;
		}
		this._attributions[text]++;

		this._update();

		return this;
	},

	// @method removeAttribution(text: String): this
	// Removes an attribution text.
	removeAttribution: function (text) {
		if (!text) { return this; }

		if (this._attributions[text]) {
			this._attributions[text]--;
			this._update();
		}

		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		var attribs = [];

		for (var i in this._attributions) {
			if (this._attributions[i]) {
				attribs.push(i);
			}
		}

		var prefixAndAttribs = [];

		if (this.options.prefix) {
			prefixAndAttribs.push(this.options.prefix);
		}
		if (attribs.length) {
			prefixAndAttribs.push(attribs.join(', '));
		}

		this._container.innerHTML = prefixAndAttribs.join(' | ');
	}
});

// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Map.mergeOptions({
	attributionControl: true
});

Map.addInitHook(function () {
	if (this.options.attributionControl) {
		new Attribution().addTo(this);
	}
});

// @namespace Control.Attribution
// @factory L.control.attribution(options: Control.Attribution options)
// Creates an attribution control.
var attribution = function (options) {
	return new Attribution(options);
};

Control.Layers = Layers;
Control.Zoom = Zoom;
Control.Scale = Scale;
Control.Attribution = Attribution;

control.layers = layers;
control.zoom = zoom;
control.scale = scale;
control.attribution = attribution;

/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

var Handler = Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	// @method enable(): this
	// Enables the handler
	enable: function () {
		if (this._enabled) { return this; }

		this._enabled = true;
		this.addHooks();
		return this;
	},

	// @method disable(): this
	// Disables the handler
	disable: function () {
		if (!this._enabled) { return this; }

		this._enabled = false;
		this.removeHooks();
		return this;
	},

	// @method enabled(): Boolean
	// Returns `true` if the handler is enabled
	enabled: function () {
		return !!this._enabled;
	}

	// @section Extension methods
	// Classes inheriting from `Handler` must implement the two following methods:
	// @method addHooks()
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.
});

// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
Handler.addTo = function (map, name) {
	map.addHandler(name, this);
	return this;
};

var Mixin = {Events: Events};

/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */

var START = touch ? 'touchstart mousedown' : 'mousedown';
var END = {
	mousedown: 'mouseup',
	touchstart: 'touchend',
	pointerdown: 'touchend',
	MSPointerDown: 'touchend'
};
var MOVE = {
	mousedown: 'mousemove',
	touchstart: 'touchmove',
	pointerdown: 'touchmove',
	MSPointerDown: 'touchmove'
};


var Draggable = Evented.extend({

	options: {
		// @section
		// @aka Draggable options
		// @option clickTolerance: Number = 3
		// The max number of pixels a user can shift the mouse pointer during a click
		// for it to be considered a valid click (as opposed to a mouse drag).
		clickTolerance: 3
	},

	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
		setOptions(this, options);

		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
		this._preventOutline = preventOutline$$1;
	},

	// @method enable()
	// Enables the dragging ability
	enable: function () {
		if (this._enabled) { return; }

		on(this._dragStartTarget, START, this._onDown, this);

		this._enabled = true;
	},

	// @method disable()
	// Disables the dragging ability
	disable: function () {
		if (!this._enabled) { return; }

		// If we're currently dragging this draggable,
		// disabling it counts as first ending the drag.
		if (Draggable._dragging === this) {
			this.finishDrag();
		}

		off(this._dragStartTarget, START, this._onDown, this);

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		this._moved = false;

		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

		if (this._preventOutline) {
			preventOutline(this._element);
		}

		disableImageDrag();
		disableTextSelection();

		if (this._moving) { return; }

		// @event down: Event
		// Fired when a drag is about to start.
		this.fire('down');

		var first = e.touches ? e.touches[0] : e,
		    sizedParent = getSizedParentNode(this._element);

		this._startPoint = new Point(first.clientX, first.clientY);

		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
		this._parentScale = getScale(sizedParent);

		on(document, MOVE[e.type], this._onMove, this);
		on(document, END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

		if (!offset.x && !offset.y) { return; }
		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

		// We assume that the parent container's position, border and scale do not change for the duration of the drag.
		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
		// and we can use the cached value for the scale.
		offset.x /= this._parentScale.x;
		offset.y /= this._parentScale.y;

		preventDefault(e);

		if (!this._moved) {
			// @event dragstart: Event
			// Fired when a drag starts
			this.fire('dragstart');

			this._moved = true;
			this._startPos = getPosition(this._element).subtract(offset);

			addClass(document.body, 'leaflet-dragging');

			this._lastTarget = e.target || e.srcElement;
			// IE and Edge do not give the <use> element, so fetch it
			// if necessary
			if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
				this._lastTarget = this._lastTarget.correspondingUseElement;
			}
			addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		cancelAnimFrame(this._animRequest);
		this._lastEvent = e;
		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
	},

	_updatePosition: function () {
		var e = {originalEvent: this._lastEvent};

		// @event predrag: Event
		// Fired continuously during dragging *before* each corresponding
		// update of the element's position.
		this.fire('predrag', e);
		setPosition(this._element, this._newPos);

		// @event drag: Event
		// Fired continuously during dragging.
		this.fire('drag', e);
	},

	_onUp: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }
		this.finishDrag();
	},

	finishDrag: function () {
		removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in MOVE) {
			off(document, MOVE[i], this._onMove, this);
			off(document, END[i], this._onUp, this);
		}

		enableImageDrag();
		enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			cancelAnimFrame(this._animRequest);

			// @event dragend: DragEndEvent
			// Fired when the drag ends.
			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		}

		this._moving = false;
		Draggable._dragging = false;
	}

});

/*
 * @namespace LineUtil
 *
 * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
 */

// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.

// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
function simplify(points, tolerance) {
	if (!tolerance || !points.length) {
		return points.slice();
	}

	var sqTolerance = tolerance * tolerance;

	    // stage 1: vertex reduction
	    points = _reducePoints(points, sqTolerance);

	    // stage 2: Douglas-Peucker simplification
	    points = _simplifyDP(points, sqTolerance);

	return points;
}

// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function pointToSegmentDistance(p, p1, p2) {
	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
}

// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function closestPointOnSegment(p, p1, p2) {
	return _sqClosestPointOnSegment(p, p1, p2);
}

// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
function _simplifyDP(points, sqTolerance) {

	var len = points.length,
	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
	    markers = new ArrayConstructor(len);

	    markers[0] = markers[len - 1] = 1;

	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

	var i,
	    newPoints = [];

	for (i = 0; i < len; i++) {
		if (markers[i]) {
			newPoints.push(points[i]);
		}
	}

	return newPoints;
}

function _simplifyDPStep(points, markers, sqTolerance, first, last) {

	var maxSqDist = 0,
	index, i, sqDist;

	for (i = first + 1; i <= last - 1; i++) {
		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

		if (sqDist > maxSqDist) {
			index = i;
			maxSqDist = sqDist;
		}
	}

	if (maxSqDist > sqTolerance) {
		markers[index] = 1;

		_simplifyDPStep(points, markers, sqTolerance, first, index);
		_simplifyDPStep(points, markers, sqTolerance, index, last);
	}
}

// reduce points that are too close to each other to a single point
function _reducePoints(points, sqTolerance) {
	var reducedPoints = [points[0]];

	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
		if (_sqDist(points[i], points[prev]) > sqTolerance) {
			reducedPoints.push(points[i]);
			prev = i;
		}
	}
	if (prev < len - 1) {
		reducedPoints.push(points[len - 1]);
	}
	return reducedPoints;
}

var _lastCode;

// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function clipSegment(a, b, bounds, useLastCode, round) {
	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
	    codeB = _getBitCode(b, bounds),

	    codeOut, p, newCode;

	    // save 2nd code to avoid calculating it on the next segment
	    _lastCode = codeB;

	while (true) {
		// if a,b is inside the clip window (trivial accept)
		if (!(codeA | codeB)) {
			return [a, b];
		}

		// if a,b is outside the clip window (trivial reject)
		if (codeA & codeB) {
			return false;
		}

		// other cases
		codeOut = codeA || codeB;
		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
		newCode = _getBitCode(p, bounds);

		if (codeOut === codeA) {
			a = p;
			codeA = newCode;
		} else {
			b = p;
			codeB = newCode;
		}
	}
}

function _getEdgeIntersection(a, b, code, bounds, round) {
	var dx = b.x - a.x,
	    dy = b.y - a.y,
	    min = bounds.min,
	    max = bounds.max,
	    x, y;

	if (code & 8) { // top
		x = a.x + dx * (max.y - a.y) / dy;
		y = max.y;

	} else if (code & 4) { // bottom
		x = a.x + dx * (min.y - a.y) / dy;
		y = min.y;

	} else if (code & 2) { // right
		x = max.x;
		y = a.y + dy * (max.x - a.x) / dx;

	} else if (code & 1) { // left
		x = min.x;
		y = a.y + dy * (min.x - a.x) / dx;
	}

	return new Point(x, y, round);
}

function _getBitCode(p, bounds) {
	var code = 0;

	if (p.x < bounds.min.x) { // left
		code |= 1;
	} else if (p.x > bounds.max.x) { // right
		code |= 2;
	}

	if (p.y < bounds.min.y) { // bottom
		code |= 4;
	} else if (p.y > bounds.max.y) { // top
		code |= 8;
	}

	return code;
}

// square distance (to avoid unnecessary Math.sqrt calls)
function _sqDist(p1, p2) {
	var dx = p2.x - p1.x,
	    dy = p2.y - p1.y;
	return dx * dx + dy * dy;
}

// return closest point on segment or distance to that point
function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
	var x = p1.x,
	    y = p1.y,
	    dx = p2.x - x,
	    dy = p2.y - y,
	    dot = dx * dx + dy * dy,
	    t;

	if (dot > 0) {
		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

		if (t > 1) {
			x = p2.x;
			y = p2.y;
		} else if (t > 0) {
			x += dx * t;
			y += dy * t;
		}
	}

	dx = p.x - x;
	dy = p.y - y;

	return sqDist ? dx * dx + dy * dy : new Point(x, y);
}


// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function isFlat(latlngs) {
	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
}

function _flat(latlngs) {
	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
	return isFlat(latlngs);
}


var LineUtil = (Object.freeze || Object)({
	simplify: simplify,
	pointToSegmentDistance: pointToSegmentDistance,
	closestPointOnSegment: closestPointOnSegment,
	clipSegment: clipSegment,
	_getEdgeIntersection: _getEdgeIntersection,
	_getBitCode: _getBitCode,
	_sqClosestPointOnSegment: _sqClosestPointOnSegment,
	isFlat: isFlat,
	_flat: _flat
});

/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */

/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a separate method for it.
 */
function clipPolygon(points, bounds, round) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = _getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = _getEdgeIntersection(b, a, edge, bounds, round);
					p._code = _getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = _getEdgeIntersection(b, a, edge, bounds, round);
				p._code = _getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
}


var PolyUtil = (Object.freeze || Object)({
	clipPolygon: clipPolygon
});

/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

var LonLat = {
	project: function (latlng) {
		return new Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new LatLng(point.y, point.x);
	},

	bounds: new Bounds([-180, -90], [180, 90])
};

/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
 */

var Mercator = {
	R: 6378137,
	R_MINOR: 6356752.314245179,

	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

	project: function (latlng) {
		var d = Math.PI / 180,
		    r = this.R,
		    y = latlng.lat * d,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    con = e * Math.sin(y);

		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
		y = -r * Math.log(Math.max(ts, 1E-10));

		return new Point(latlng.lng * d * r, y);
	},

	unproject: function (point) {
		var d = 180 / Math.PI,
		    r = this.R,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    ts = Math.exp(-point.y / r),
		    phi = Math.PI / 2 - 2 * Math.atan(ts);

		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
			con = e * Math.sin(phi);
			con = Math.pow((1 - con) / (1 + con), e / 2);
			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
			phi += dphi;
		}

		return new LatLng(phi * d, point.x * d / r);
	}
};

/*
 * @class Projection

 * An object with methods for projecting geographical coordinates of the world onto
 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

 * @property bounds: Bounds
 * The bounds (specified in CRS units) where the projection is valid

 * @method project(latlng: LatLng): Point
 * Projects geographical coordinates into a 2D point.
 * Only accepts actual `L.LatLng` instances, not arrays.

 * @method unproject(point: Point): LatLng
 * The inverse of `project`. Projects a 2D point into a geographical location.
 * Only accepts actual `L.Point` instances, not arrays.

 * Note that the projection instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.

 */




var index = (Object.freeze || Object)({
	LonLat: LonLat,
	Mercator: Mercator,
	SphericalMercator: SphericalMercator
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */
var EPSG3395 = extend({}, Earth, {
	code: 'EPSG:3395',
	projection: Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * Mercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG4326
 *
 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
 *
 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
 */

var EPSG4326 = extend({}, Earth, {
	code: 'EPSG:4326',
	projection: LonLat,
	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
});

/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

var Simple = extend({}, CRS, {
	projection: LonLat,
	transformation: toTransformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(2, zoom);
	},

	zoom: function (scale) {
		return Math.log(scale) / Math.LN2;
	},

	distance: function (latlng1, latlng2) {
		var dx = latlng2.lng - latlng1.lng,
		    dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});

CRS.Earth = Earth;
CRS.EPSG3395 = EPSG3395;
CRS.EPSG3857 = EPSG3857;
CRS.EPSG900913 = EPSG900913;
CRS.EPSG4326 = EPSG4326;
CRS.Simple = Simple;

/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.Marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */


var Layer = Evented.extend({

	// Classes extending `L.Layer` will inherit the following options:
	options: {
		// @option pane: String = 'overlayPane'
		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
		pane: 'overlayPane',

		// @option attribution: String = null
		// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
		attribution: null,

		bubblingMouseEvents: true
	},

	/* @section
	 * Classes extending `L.Layer` will inherit the following methods:
	 *
	 * @method addTo(map: Map|LayerGroup): this
	 * Adds the layer to the given map or layer group.
	 */
	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	// @method remove: this
	// Removes the layer from the map it is currently active on.
	remove: function () {
		return this.removeFrom(this._map || this._mapToAdd);
	},

	// @method removeFrom(map: Map): this
	// Removes the layer from the given map
	removeFrom: function (obj) {
		if (obj) {
			obj.removeLayer(this);
		}
		return this;
	},

	// @method getPane(name? : String): HTMLElement
	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
	getPane: function (name) {
		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
	},

	addInteractiveTarget: function (targetEl) {
		this._map._targets[stamp(targetEl)] = this;
		return this;
	},

	removeInteractiveTarget: function (targetEl) {
		delete this._map._targets[stamp(targetEl)];
		return this;
	},

	// @method getAttribution: String
	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
	getAttribution: function () {
		return this.options.attribution;
	},

	_layerAdd: function (e) {
		var map = e.target;

		// check in case layer gets added and then removed before the map is ready
		if (!map.hasLayer(this)) { return; }

		this._map = map;
		this._zoomAnimated = map._zoomAnimated;

		if (this.getEvents) {
			var events = this.getEvents();
			map.on(events, this);
			this.once('remove', function () {
				map.off(events, this);
			}, this);
		}

		this.onAdd(map);

		if (this.getAttribution && map.attributionControl) {
			map.attributionControl.addAttribution(this.getAttribution());
		}

		this.fire('add');
		map.fire('layeradd', {layer: this});
	}
});

/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */


/* @namespace Map
 * @section Layer events
 *
 * @event layeradd: LayerEvent
 * Fired when a new layer is added to the map.
 *
 * @event layerremove: LayerEvent
 * Fired when some layer is removed from the map
 *
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addLayer(layer: Layer): this
	// Adds the given layer to the map
	addLayer: function (layer) {
		if (!layer._layerAdd) {
			throw new Error('The provided object is not a Layer.');
		}

		var id = stamp(layer);
		if (this._layers[id]) { return this; }
		this._layers[id] = layer;

		layer._mapToAdd = this;

		if (layer.beforeAdd) {
			layer.beforeAdd(this);
		}

		this.whenReady(layer._layerAdd, layer);

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the map.
	removeLayer: function (layer) {
		var id = stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		if (layer.getAttribution && this.attributionControl) {
			this.attributionControl.removeAttribution(layer.getAttribution());
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
			layer.fire('remove');
		}

		layer._map = layer._mapToAdd = null;

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the map
	hasLayer: function (layer) {
		return !!layer && (stamp(layer) in this._layers);
	},

	/* @method eachLayer(fn: Function, context?: Object): this
	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
	 * ```
	 * map.eachLayer(function(layer){
	 *     layer.bindPopup('Hello');
	 * });
	 * ```
	 */
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	_addLayers: function (layers) {
		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},

	_addZoomLimit: function (layer) {
		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
			this._zoomBoundLayers[stamp(layer)] = layer;
			this._updateZoomLevels();
		}
	},

	_removeZoomLimit: function (layer) {
		var id = stamp(layer);

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}
	},

	_updateZoomLevels: function () {
		var minZoom = Infinity,
		    maxZoom = -Infinity,
		    oldZoomSpan = this._getZoomSpan();

		for (var i in this._zoomBoundLayers) {
			var options = this._zoomBoundLayers[i].options;

			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
		}

		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

		// @section Map state change events
		// @event zoomlevelschange: Event
		// Fired when the number of zoomlevels on the map is changed due
		// to adding or removing a layer.
		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}

		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
			this.setZoom(this._layersMaxZoom);
		}
		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
			this.setZoom(this._layersMinZoom);
		}
	}
});

/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */

var LayerGroup = Layer.extend({

	initialize: function (layers, options) {
		setOptions(this, options);

		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	// @method addLayer(layer: Layer): this
	// Adds the given layer to the group.
	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the group.
	// @alternative
	// @method removeLayer(id: Number): this
	// Removes the layer with the given internal ID from the group.
	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the group.
	// @alternative
	// @method hasLayer(id: Number): Boolean
	// Returns `true` if the given internal ID is currently added to the group.
	hasLayer: function (layer) {
		return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	// @method clearLayers(): this
	// Removes all the layers from the group.
	clearLayers: function () {
		return this.eachLayer(this.removeLayer, this);
	},

	// @method invoke(methodName: String, …): this
	// Calls `methodName` on every layer contained in this group, passing any
	// additional parameters. Has no effect if the layers contained do not
	// implement `methodName`.
	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		this.eachLayer(map.addLayer, map);
	},

	onRemove: function (map) {
		this.eachLayer(map.removeLayer, map);
	},

	// @method eachLayer(fn: Function, context?: Object): this
	// Iterates over the layers of the group, optionally specifying context of the iterator function.
	// ```js
	// group.eachLayer(function (layer) {
	// 	layer.bindPopup('Hello');
	// });
	// ```
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	// @method getLayer(id: Number): Layer
	// Returns the layer with the given internal ID.
	getLayer: function (id) {
		return this._layers[id];
	},

	// @method getLayers(): Layer[]
	// Returns an array of all the layers added to the group.
	getLayers: function () {
		var layers = [];
		this.eachLayer(layers.push, layers);
		return layers;
	},

	// @method setZIndex(zIndex: Number): this
	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	// @method getLayerId(layer: Layer): Number
	// Returns the internal ID for a layer
	getLayerId: function (layer) {
		return stamp(layer);
	}
});


// @factory L.layerGroup(layers?: Layer[], options?: Object)
// Create a layer group, optionally given an initial set of layers and an `options` object.
var layerGroup = function (layers, options) {
	return new LayerGroup(layers, options);
};

/*
 * @class FeatureGroup
 * @aka L.FeatureGroup
 * @inherits LayerGroup
 *
 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
 * handler, it will handle events from any of the layers. This includes mouse events
 * and custom events.
 *  * Has `layeradd` and `layerremove` events
 *
 * @example
 *
 * ```js
 * L.featureGroup([marker1, marker2, polyline])
 * 	.bindPopup('Hello world!')
 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
 * 	.addTo(map);
 * ```
 */

var FeatureGroup = LayerGroup.extend({

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		layer.addEventParent(this);

		LayerGroup.prototype.addLayer.call(this, layer);

		// @event layeradd: LayerEvent
		// Fired when a layer is added to this `FeatureGroup`
		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		layer.removeEventParent(this);

		LayerGroup.prototype.removeLayer.call(this, layer);

		// @event layerremove: LayerEvent
		// Fired when a layer is removed from this `FeatureGroup`
		return this.fire('layerremove', {layer: layer});
	},

	// @method setStyle(style: Path options): this
	// Sets the given path options to each layer of the group that has a `setStyle` method.
	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	// @method bringToFront(): this
	// Brings the layer group to the top of all other layers
	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	// @method bringToBack(): this
	// Brings the layer group to the back of all other layers
	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	// @method getBounds(): LatLngBounds
	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
	getBounds: function () {
		var bounds = new LatLngBounds();

		for (var id in this._layers) {
			var layer = this._layers[id];
			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
		}
		return bounds;
	}
});

// @factory L.featureGroup(layers: Layer[])
// Create a feature group, optionally given an initial set of layers.
var featureGroup = function (layers) {
	return new FeatureGroup(layers);
};

/*
 * @class Icon
 * @aka L.Icon
 *
 * Represents an icon to provide when creating a marker.
 *
 * @example
 *
 * ```js
 * var myIcon = L.icon({
 *     iconUrl: 'my-icon.png',
 *     iconRetinaUrl: 'my-icon@2x.png',
 *     iconSize: [38, 95],
 *     iconAnchor: [22, 94],
 *     popupAnchor: [-3, -76],
 *     shadowUrl: 'my-icon-shadow.png',
 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
 *     shadowSize: [68, 95],
 *     shadowAnchor: [22, 94]
 * });
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
 *
 */

var Icon = Class.extend({

	/* @section
	 * @aka Icon options
	 *
	 * @option iconUrl: String = null
	 * **(required)** The URL to the icon image (absolute or relative to your script path).
	 *
	 * @option iconRetinaUrl: String = null
	 * The URL to a retina sized version of the icon image (absolute or relative to your
	 * script path). Used for Retina screen devices.
	 *
	 * @option iconSize: Point = null
	 * Size of the icon image in pixels.
	 *
	 * @option iconAnchor: Point = null
	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
	 * will be aligned so that this point is at the marker's geographical location. Centered
	 * by default if size is specified, also can be set in CSS with negative margins.
	 *
	 * @option popupAnchor: Point = [0, 0]
	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
	 *
	 * @option tooltipAnchor: Point = [0, 0]
	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
	 *
	 * @option shadowUrl: String = null
	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
	 *
	 * @option shadowRetinaUrl: String = null
	 *
	 * @option shadowSize: Point = null
	 * Size of the shadow image in pixels.
	 *
	 * @option shadowAnchor: Point = null
	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
	 * as iconAnchor if not specified).
	 *
	 * @option className: String = ''
	 * A custom class name to assign to both icon and shadow images. Empty by default.
	 */

	options: {
		popupAnchor: [0, 0],
		tooltipAnchor: [0, 0]
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
	// Called internally when the icon has to be shown, returns a `<img>` HTML element
	// styled according to the options.
	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
	// As `createIcon`, but for the shadow beneath it.
	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options;
		var sizeOption = options[name + 'Size'];

		if (typeof sizeOption === 'number') {
			sizeOption = [sizeOption, sizeOption];
		}

		var size = toPoint(sizeOption),
		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.divideBy(2, true));

		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
	}
});


// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function icon(options) {
	return new Icon(options);
}

/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */

var IconDefault = Icon.extend({

	options: {
		iconUrl:       'marker-icon.png',
		iconRetinaUrl: 'marker-icon-2x.png',
		shadowUrl:     'marker-shadow.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {
		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
			IconDefault.imagePath = this._detectIconPath();
		}

		// @option imagePath: String
		// `Icon.Default` will try to auto-detect the location of the
		// blue icon images. If you are placing these images in a non-standard
		// way, set this option to point to the right path.
		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
	},

	_detectIconPath: function () {
		var el = create$1('div',  'leaflet-default-icon-path', document.body);
		var path = getStyle(el, 'background-image') ||
		           getStyle(el, 'backgroundImage');	// IE8

		document.body.removeChild(el);

		if (path === null || path.indexOf('url') !== 0) {
			path = '';
		} else {
			path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
		}

		return path;
	}
});

/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */


/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */

var MarkerDrag = Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;

		if (!this._draggable) {
			this._draggable = new Draggable(icon, icon, true);
		}

		this._draggable.on({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).enable();

		addClass(icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable.off({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).disable();

		if (this._marker._icon) {
			removeClass(this._marker._icon, 'leaflet-marker-draggable');
		}
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_adjustPan: function (e) {
		var marker = this._marker,
		    map = marker._map,
		    speed = this._marker.options.autoPanSpeed,
		    padding = this._marker.options.autoPanPadding,
		    iconPos = getPosition(marker._icon),
		    bounds = map.getPixelBounds(),
		    origin = map.getPixelOrigin();

		var panBounds = toBounds(
			bounds.min._subtract(origin).add(padding),
			bounds.max._subtract(origin).subtract(padding)
		);

		if (!panBounds.contains(iconPos)) {
			// Compute incremental movement
			var movement = toPoint(
				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
			).multiplyBy(speed);

			map.panBy(movement, {animate: false});

			this._draggable._newPos._add(movement);
			this._draggable._startPos._add(movement);

			setPosition(marker._icon, this._draggable._newPos);
			this._onDrag(e);

			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDragStart: function () {
		// @section Dragging events
		// @event dragstart: Event
		// Fired when the user starts dragging the marker.

		// @event movestart: Event
		// Fired when the marker starts moving (because of dragging).

		this._oldLatLng = this._marker.getLatLng();
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onPreDrag: function (e) {
		if (this._marker.options.autoPan) {
			cancelAnimFrame(this._panRequest);
			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDrag: function (e) {
		var marker = this._marker,
		    shadow = marker._shadow,
		    iconPos = getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;
		e.latlng = latlng;
		e.oldLatLng = this._oldLatLng;

		// @event drag: Event
		// Fired repeatedly while the user drags the marker.
		marker
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onDragEnd: function (e) {
		// @event dragend: DragEndEvent
		// Fired when the user stops dragging the marker.

		 cancelAnimFrame(this._panRequest);

		// @event moveend: Event
		// Fired when the marker stops moving (because of dragging).
		delete this._oldLatLng;
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	}
});

/*
 * @class Marker
 * @inherits Interactive layer
 * @aka L.Marker
 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.marker([50.5, 30.5]).addTo(map);
 * ```
 */

var Marker = Layer.extend({

	// @section
	// @aka Marker options
	options: {
		// @option icon: Icon = *
		// Icon instance to use for rendering the marker.
		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
		// If not specified, a common instance of `L.Icon.Default` is used.
		icon: new IconDefault(),

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option keyboard: Boolean = true
		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
		keyboard: true,

		// @option title: String = ''
		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
		title: '',

		// @option alt: String = ''
		// Text for the `alt` attribute of the icon image (useful for accessibility).
		alt: '',

		// @option zIndexOffset: Number = 0
		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
		zIndexOffset: 0,

		// @option opacity: Number = 1.0
		// The opacity of the marker.
		opacity: 1,

		// @option riseOnHover: Boolean = false
		// If `true`, the marker will get on top of others when you hover the mouse over it.
		riseOnHover: false,

		// @option riseOffset: Number = 250
		// The z-index offset used for the `riseOnHover` feature.
		riseOffset: 250,

		// @option pane: String = 'markerPane'
		// `Map pane` where the markers icon will be added.
		pane: 'markerPane',

		// @option bubblingMouseEvents: Boolean = false
		// When `true`, a mouse event on this marker will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: false,

		// @section Draggable marker options
		// @option draggable: Boolean = false
		// Whether the marker is draggable with mouse/touch or not.
		draggable: false,

		// @option autoPan: Boolean = false
		// Whether to pan the map when dragging this marker near its edge or not.
		autoPan: false,

		// @option autoPanPadding: Point = Point(50, 50)
		// Distance (in pixels to the left/right and to the top/bottom) of the
		// map edge to start panning the map.
		autoPanPadding: [50, 50],

		// @option autoPanSpeed: Number = 10
		// Number of pixels the map should pan by.
		autoPanSpeed: 10
	},

	/* @section
	 *
	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
	 */

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

		if (this._zoomAnimated) {
			map.on('zoomanim', this._animateZoom, this);
		}

		this._initIcon();
		this.update();
	},

	onRemove: function (map) {
		if (this.dragging && this.dragging.enabled()) {
			this.options.draggable = true;
			this.dragging.removeHooks();
		}
		delete this.dragging;

		if (this._zoomAnimated) {
			map.off('zoomanim', this._animateZoom, this);
		}

		this._removeIcon();
		this._removeShadow();
	},

	getEvents: function () {
		return {
			zoom: this.update,
			viewreset: this.update
		};
	},

	// @method getLatLng: LatLng
	// Returns the current geographical position of the marker.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Changes the marker position to the given point.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.update();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method setZIndexOffset(offset: Number): this
	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		return this.update();
	},

	// @method setIcon(icon: Icon): this
	// Changes the marker icon.
	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup, this._popup.options);
		}

		return this;
	},

	getElement: function () {
		return this._icon;
	},

	update: function () {

		if (this._icon && this._map) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(pos);
		}

		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		var icon = options.icon.createIcon(this._icon),
		    addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (icon.tagName === 'IMG') {
				icon.alt = options.alt || '';
			}
		}

		addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		if (options.riseOnHover) {
			this.on({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		var newShadow = options.icon.createShadow(this._shadow),
		    addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			addClass(newShadow, classToAdd);
			newShadow.alt = '';
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		if (addIcon) {
			this.getPane().appendChild(this._icon);
		}
		this._initInteraction();
		if (newShadow && addShadow) {
			this.getPane('shadowPane').appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			this.off({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		remove(this._icon);
		this.removeInteractiveTarget(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			remove(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {
		setPosition(this._icon, pos);

		if (this._shadow) {
			setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		this._icon.style.zIndex = this._zIndex + offset;
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.interactive) { return; }

		addClass(this._icon, 'leaflet-interactive');

		this.addInteractiveTarget(this._icon);

		if (MarkerDrag) {
			var draggable = this.options.draggable;
			if (this.dragging) {
				draggable = this.dragging.enabled();
				this.dragging.disable();
			}

			this.dragging = new MarkerDrag(this);

			if (draggable) {
				this.dragging.enable();
			}
		}
	},

	// @method setOpacity(opacity: Number): this
	// Changes the opacity of the marker.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		setOpacity(this._icon, opacity);

		if (this._shadow) {
			setOpacity(this._shadow, opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	},

	_getPopupAnchor: function () {
		return this.options.icon.options.popupAnchor;
	},

	_getTooltipAnchor: function () {
		return this.options.icon.options.tooltipAnchor;
	}
});


// factory L.marker(latlng: LatLng, options? : Marker options)

// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function marker(latlng, options) {
	return new Marker(latlng, options);
}

/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */

var Path = Layer.extend({

	// @section
	// @aka Path options
	options: {
		// @option stroke: Boolean = true
		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
		stroke: true,

		// @option color: String = '#3388ff'
		// Stroke color
		color: '#3388ff',

		// @option weight: Number = 3
		// Stroke width in pixels
		weight: 3,

		// @option opacity: Number = 1.0
		// Stroke opacity
		opacity: 1,

		// @option lineCap: String= 'round'
		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
		lineCap: 'round',

		// @option lineJoin: String = 'round'
		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
		lineJoin: 'round',

		// @option dashArray: String = null
		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashArray: null,

		// @option dashOffset: String = null
		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashOffset: null,

		// @option fill: Boolean = depends
		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
		fill: false,

		// @option fillColor: String = *
		// Fill color. Defaults to the value of the [`color`](#path-color) option
		fillColor: null,

		// @option fillOpacity: Number = 0.2
		// Fill opacity.
		fillOpacity: 0.2,

		// @option fillRule: String = 'evenodd'
		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
		fillRule: 'evenodd',

		// className: '',

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option bubblingMouseEvents: Boolean = true
		// When `true`, a mouse event on this path will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: true
	},

	beforeAdd: function (map) {
		// Renderer is set here because we need to call renderer.getEvents
		// before this.getEvents.
		this._renderer = map.getRenderer(this);
	},

	onAdd: function () {
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);
	},

	onRemove: function () {
		this._renderer._removePath(this);
	},

	// @method redraw(): this
	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
	redraw: function () {
		if (this._map) {
			this._renderer._updatePath(this);
		}
		return this;
	},

	// @method setStyle(style: Path options): this
	// Changes the appearance of a Path based on the options in the `Path options` object.
	setStyle: function (style) {
		setOptions(this, style);
		if (this._renderer) {
			this._renderer._updateStyle(this);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all path layers.
	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all path layers.
	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	getElement: function () {
		return this._path;
	},

	_reset: function () {
		// defined in child classes
		this._project();
		this._update();
	},

	_clickTolerance: function () {
		// used when doing hit detection for Canvas layers
		return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
	}
});

/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */

var CircleMarker = Path.extend({

	// @section
	// @aka CircleMarker options
	options: {
		fill: true,

		// @option radius: Number = 10
		// Radius of the circle marker, in pixels
		radius: 10
	},

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
		this._radius = this.options.radius;
	},

	// @method setLatLng(latLng: LatLng): this
	// Sets the position of a circle marker to a new location.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		this.redraw();
		return this.fire('move', {latlng: this._latlng});
	},

	// @method getLatLng(): LatLng
	// Returns the current geographical position of the circle marker
	getLatLng: function () {
		return this._latlng;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle marker. Units are in pixels.
	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of the circle
	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		    r2 = this._radiusY || r,
		    w = this._clickTolerance(),
		    p = [r + w, r2 + w];
		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateCircle(this);
	},

	_empty: function () {
		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
	}
});


// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function circleMarker(latlng, options) {
	return new CircleMarker(latlng, options);
}

/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */

var Circle = CircleMarker.extend({

	initialize: function (latlng, options, legacyOptions) {
		if (typeof options === 'number') {
			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
			options = extend({}, legacyOptions, {radius: options});
		}
		setOptions(this, options);
		this._latlng = toLatLng(latlng);

		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

		// @section
		// @aka Circle options
		// @option radius: Number; Radius of the circle, in meters.
		this._mRadius = this.options.radius;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle. Units are in meters.
	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of a circle. Units are in meters.
	getRadius: function () {
		return this._mRadius;
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		var half = [this._radius, this._radiusY || this._radius];

		return new LatLngBounds(
			this._map.layerPointToLatLng(this._point.subtract(half)),
			this._map.layerPointToLatLng(this._point.add(half)));
	},

	setStyle: Path.prototype.setStyle,

	_project: function () {

		var lng = this._latlng.lng,
		    lat = this._latlng.lat,
		    map = this._map,
		    crs = map.options.crs;

		if (crs.distance === Earth.distance) {
			var d = Math.PI / 180,
			    latR = (this._mRadius / Earth.R) / d,
			    top = map.project([lat + latR, lng]),
			    bottom = map.project([lat - latR, lng]),
			    p = top.add(bottom).divideBy(2),
			    lat2 = map.unproject(p).lat,
			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

			if (isNaN(lngR) || lngR === 0) {
				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
			}

			this._point = p.subtract(map.getPixelOrigin());
			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
			this._radiusY = p.y - top.y;

		} else {
			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

			this._point = map.latLngToLayerPoint(this._latlng);
			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
		}

		this._updateBounds();
	}
});

// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function circle(latlng, options, legacyOptions) {
	return new Circle(latlng, options, legacyOptions);
}

/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */


var Polyline = Path.extend({

	// @section
	// @aka Polyline options
	options: {
		// @option smoothFactor: Number = 1.0
		// How much to simplify the polyline on each zoom level. More means
		// better performance and smoother look, and less means more accurate representation.
		smoothFactor: 1.0,

		// @option noClip: Boolean = false
		// Disable polyline clipping.
		noClip: false
	},

	initialize: function (latlngs, options) {
		setOptions(this, options);
		this._setLatLngs(latlngs);
	},

	// @method getLatLngs(): LatLng[]
	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
	getLatLngs: function () {
		return this._latlngs;
	},

	// @method setLatLngs(latlngs: LatLng[]): this
	// Replaces all the points in the polyline with the given array of geographical points.
	setLatLngs: function (latlngs) {
		this._setLatLngs(latlngs);
		return this.redraw();
	},

	// @method isEmpty(): Boolean
	// Returns `true` if the Polyline has no LatLngs.
	isEmpty: function () {
		return !this._latlngs.length;
	},

	// @method closestLayerPoint(p: Point): Point
	// Returns the point closest to `p` on the Polyline.
	closestLayerPoint: function (p) {
		var minDistance = Infinity,
		    minPoint = null,
		    closest = _sqClosestPointOnSegment,
		    p1, p2;

		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
			var points = this._parts[j];

			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];

				var sqDist = closest(p, p1, p2, true);

				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = closest(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	// @method getCenter(): LatLng
	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, halfDist, segDist, dist, p1, p2, ratio,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polyline centroid algorithm; only uses the first ring if there are multiple

		for (i = 0, halfDist = 0; i < len - 1; i++) {
			halfDist += points[i].distanceTo(points[i + 1]) / 2;
		}

		// The line is so small in the current view that all points are on the same pixel.
		if (halfDist === 0) {
			return this._map.layerPointToLatLng(points[0]);
		}

		for (i = 0, dist = 0; i < len - 1; i++) {
			p1 = points[i];
			p2 = points[i + 1];
			segDist = p1.distanceTo(p2);
			dist += segDist;

			if (dist > halfDist) {
				ratio = (dist - halfDist) / segDist;
				return this._map.layerPointToLatLng([
					p2.x - ratio * (p2.x - p1.x),
					p2.y - ratio * (p2.y - p1.y)
				]);
			}
		}
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		return this._bounds;
	},

	// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
	// Adds a given point to the polyline. By default, adds to the first ring of
	// the polyline in case of a multi-polyline, but can be overridden by passing
	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
	addLatLng: function (latlng, latlngs) {
		latlngs = latlngs || this._defaultShape();
		latlng = toLatLng(latlng);
		latlngs.push(latlng);
		this._bounds.extend(latlng);
		return this.redraw();
	},

	_setLatLngs: function (latlngs) {
		this._bounds = new LatLngBounds();
		this._latlngs = this._convertLatLngs(latlngs);
	},

	_defaultShape: function () {
		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
	},

	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
	_convertLatLngs: function (latlngs) {
		var result = [],
		    flat = isFlat(latlngs);

		for (var i = 0, len = latlngs.length; i < len; i++) {
			if (flat) {
				result[i] = toLatLng(latlngs[i]);
				this._bounds.extend(result[i]);
			} else {
				result[i] = this._convertLatLngs(latlngs[i]);
			}
		}

		return result;
	},

	_project: function () {
		var pxBounds = new Bounds();
		this._rings = [];
		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

		var w = this._clickTolerance(),
		    p = new Point(w, w);

		if (this._bounds.isValid() && pxBounds.isValid()) {
			pxBounds.min._subtract(p);
			pxBounds.max._add(p);
			this._pxBounds = pxBounds;
		}
	},

	// recursively turns latlngs into a set of rings with projected coordinates
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var flat = latlngs[0] instanceof LatLng,
		    len = latlngs.length,
		    i, ring;

		if (flat) {
			ring = [];
			for (i = 0; i < len; i++) {
				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
				projectedBounds.extend(ring[i]);
			}
			result.push(ring);
		} else {
			for (i = 0; i < len; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// clip polyline by renderer bounds so that we have less to render for performance
	_clipPoints: function () {
		var bounds = this._renderer._bounds;

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		var parts = this._parts,
		    i, j, k, len, len2, segment, points;

		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
			points = this._rings[i];

			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

				if (!segment) { continue; }

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		}
	},

	// simplify each clipped part of the polyline for performance
	_simplifyPoints: function () {
		var parts = this._parts,
		    tolerance = this.options.smoothFactor;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = simplify(parts[i], tolerance);
		}
	},

	_update: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();
		this._updatePath();
	},

	_updatePath: function () {
		this._renderer._updatePoly(this);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, part,
		    w = this._clickTolerance();

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// hit detection for polylines
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) { continue; }

				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
					return true;
				}
			}
		}
		return false;
	}
});

// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function polyline(latlngs, options) {
	return new Polyline(latlngs, options);
}

// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
Polyline._flat = _flat;

/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */

var Polygon = Polyline.extend({

	options: {
		fill: true
	},

	isEmpty: function () {
		return !this._latlngs.length || !this._latlngs[0].length;
	},

	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, j, p1, p2, f, area, x, y, center,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polygon centroid algorithm; only uses the first ring if there are multiple

		area = x = y = 0;

		for (i = 0, j = len - 1; i < len; j = i++) {
			p1 = points[i];
			p2 = points[j];

			f = p1.y * p2.x - p2.y * p1.x;
			x += (p1.x + p2.x) * f;
			y += (p1.y + p2.y) * f;
			area += f * 3;
		}

		if (area === 0) {
			// Polygon is so small that all points are on same pixel.
			center = points[0];
		} else {
			center = [x / area, y / area];
		}
		return this._map.layerPointToLatLng(center);
	},

	_convertLatLngs: function (latlngs) {
		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
		    len = result.length;

		// remove last point if it equals first one
		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
			result.pop();
		}
		return result;
	},

	_setLatLngs: function (latlngs) {
		Polyline.prototype._setLatLngs.call(this, latlngs);
		if (isFlat(this._latlngs)) {
			this._latlngs = [this._latlngs];
		}
	},

	_defaultShape: function () {
		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
	},

	_clipPoints: function () {
		// polygons need a different clipping algorithm so we redefine that

		var bounds = this._renderer._bounds,
		    w = this.options.weight,
		    p = new Point(w, w);

		// increase clip padding by stroke width to avoid stroke on clip edges
		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
			clipped = clipPolygon(this._rings[i], bounds, true);
			if (clipped.length) {
				this._parts.push(clipped);
			}
		}
	},

	_updatePath: function () {
		this._renderer._updatePoly(this, true);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2, i, j, k, len, len2;

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// ray casting algorithm for detecting if point is in polygon
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		// also check if it's on polygon stroke
		return inside || Polyline.prototype._containsPoint.call(this, p, true);
	}

});


// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function polygon(latlngs, options) {
	return new Polygon(latlngs, options);
}

/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */

var GeoJSON = FeatureGroup.extend({

	/* @section
	 * @aka GeoJSON options
	 *
	 * @option pointToLayer: Function = *
	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
	 * The default is to spawn a default `Marker`:
	 * ```js
	 * function(geoJsonPoint, latlng) {
	 * 	return L.marker(latlng);
	 * }
	 * ```
	 *
	 * @option style: Function = *
	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
	 * called internally when data is added.
	 * The default value is to not override any defaults:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return {}
	 * }
	 * ```
	 *
	 * @option onEachFeature: Function = *
	 * A `Function` that will be called once for each created `Feature`, after it has
	 * been created and styled. Useful for attaching events and popups to features.
	 * The default is to do nothing with the newly created layers:
	 * ```js
	 * function (feature, layer) {}
	 * ```
	 *
	 * @option filter: Function = *
	 * A `Function` that will be used to decide whether to include a feature or not.
	 * The default is to include all features:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return true;
	 * }
	 * ```
	 * Note: dynamically changing the `filter` option will have effect only on newly
	 * added data. It will _not_ re-evaluate already included features.
	 *
	 * @option coordsToLatLng: Function = *
	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
	 * The default is the `coordsToLatLng` static method.
	 */

	initialize: function (geojson, options) {
		setOptions(this, options);

		this._layers = {};

		if (geojson) {
			this.addData(geojson);
		}
	},

	// @method addData( <GeoJSON> data ): this
	// Adds a GeoJSON object to the layer.
	addData: function (geojson) {
		var features = isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(feature);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return this; }

		var layer = geometryToLayer(geojson, options);
		if (!layer) {
			return this;
		}
		layer.feature = asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	},

	// @method resetStyle( <Path> layer ): this
	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
	resetStyle: function (layer) {
		// reset any custom styles
		layer.options = extend({}, layer.defaultOptions);
		this._setLayerStyle(layer, this.options.style);
		return this;
	},

	// @method setStyle( <Function> style ): this
	// Changes styles of GeoJSON vector layers with the given style function.
	setStyle: function (style) {
		return this.eachLayer(function (layer) {
			this._setLayerStyle(layer, style);
		}, this);
	},

	_setLayerStyle: function (layer, style) {
		if (typeof style === 'function') {
			style = style(layer.feature);
		}
		if (layer.setStyle) {
			layer.setStyle(style);
		}
	}
});

// @section
// There are several static functions which can be called without instantiating L.GeoJSON:

// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function geometryToLayer(geojson, options) {

	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
	    coords = geometry ? geometry.coordinates : null,
	    layers = [],
	    pointToLayer = options && options.pointToLayer,
	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
	    latlng, latlngs, i, len;

	if (!coords && !geometry) {
		return null;
	}

	switch (geometry.type) {
	case 'Point':
		latlng = _coordsToLatLng(coords);
		return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);

	case 'MultiPoint':
		for (i = 0, len = coords.length; i < len; i++) {
			latlng = _coordsToLatLng(coords[i]);
			layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
		}
		return new FeatureGroup(layers);

	case 'LineString':
	case 'MultiLineString':
		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
		return new Polyline(latlngs, options);

	case 'Polygon':
	case 'MultiPolygon':
		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
		return new Polygon(latlngs, options);

	case 'GeometryCollection':
		for (i = 0, len = geometry.geometries.length; i < len; i++) {
			var layer = geometryToLayer({
				geometry: geometry.geometries[i],
				type: 'Feature',
				properties: geojson.properties
			}, options);

			if (layer) {
				layers.push(layer);
			}
		}
		return new FeatureGroup(layers);

	default:
		throw new Error('Invalid GeoJSON object.');
	}
}

// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function coordsToLatLng(coords) {
	return new LatLng(coords[1], coords[0], coords[2]);
}

// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
	var latlngs = [];

	for (var i = 0, len = coords.length, latlng; i < len; i++) {
		latlng = levelsDeep ?
			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
			(_coordsToLatLng || coordsToLatLng)(coords[i]);

		latlngs.push(latlng);
	}

	return latlngs;
}

// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
function latLngToCoords(latlng, precision) {
	precision = typeof precision === 'number' ? precision : 6;
	return latlng.alt !== undefined ?
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
}

// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
	var coords = [];

	for (var i = 0, len = latlngs.length; i < len; i++) {
		coords.push(levelsDeep ?
			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
			latLngToCoords(latlngs[i], precision));
	}

	if (!levelsDeep && closed) {
		coords.push(coords[0]);
	}

	return coords;
}

function getFeature(layer, newGeometry) {
	return layer.feature ?
		extend({}, layer.feature, {geometry: newGeometry}) :
		asFeature(newGeometry);
}

// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function asFeature(geojson) {
	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
		return geojson;
	}

	return {
		type: 'Feature',
		properties: {},
		geometry: geojson
	};
}

var PointToGeoJSON = {
	toGeoJSON: function (precision) {
		return getFeature(this, {
			type: 'Point',
			coordinates: latLngToCoords(this.getLatLng(), precision)
		});
	}
};

// @namespace Marker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
Marker.include(PointToGeoJSON);

// @namespace CircleMarker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
Circle.include(PointToGeoJSON);
CircleMarker.include(PointToGeoJSON);


// @namespace Polyline
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
Polyline.include({
	toGeoJSON: function (precision) {
		var multi = !isFlat(this._latlngs);

		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'LineString',
			coordinates: coords
		});
	}
});

// @namespace Polygon
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
Polygon.include({
	toGeoJSON: function (precision) {
		var holes = !isFlat(this._latlngs),
		    multi = holes && !isFlat(this._latlngs[0]);

		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

		if (!holes) {
			coords = [coords];
		}

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'Polygon',
			coordinates: coords
		});
	}
});


// @namespace LayerGroup
LayerGroup.include({
	toMultiPoint: function (precision) {
		var coords = [];

		this.eachLayer(function (layer) {
			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
		});

		return getFeature(this, {
			type: 'MultiPoint',
			coordinates: coords
		});
	},

	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
	toGeoJSON: function (precision) {

		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

		if (type === 'MultiPoint') {
			return this.toMultiPoint(precision);
		}

		var isGeometryCollection = type === 'GeometryCollection',
		    jsons = [];

		this.eachLayer(function (layer) {
			if (layer.toGeoJSON) {
				var json = layer.toGeoJSON(precision);
				if (isGeometryCollection) {
					jsons.push(json.geometry);
				} else {
					var feature = asFeature(json);
					// Squash nested feature collections
					if (feature.type === 'FeatureCollection') {
						jsons.push.apply(jsons, feature.features);
					} else {
						jsons.push(feature);
					}
				}
			}
		});

		if (isGeometryCollection) {
			return getFeature(this, {
				geometries: jsons,
				type: 'GeometryCollection'
			});
		}

		return {
			type: 'FeatureCollection',
			features: jsons
		};
	}
});

// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function geoJSON(geojson, options) {
	return new GeoJSON(geojson, options);
}

// Backward compatibility.
var geoJson = geoJSON;

/*
 * @class ImageOverlay
 * @aka L.ImageOverlay
 * @inherits Interactive layer
 *
 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
 * ```
 */

var ImageOverlay = Layer.extend({

	// @section
	// @aka ImageOverlay options
	options: {
		// @option opacity: Number = 1.0
		// The opacity of the image overlay.
		opacity: 1,

		// @option alt: String = ''
		// Text for the `alt` attribute of the image (useful for accessibility).
		alt: '',

		// @option interactive: Boolean = false
		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
		interactive: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the image.
		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false,

		// @option errorOverlayUrl: String = ''
		// URL to the overlay image to show in place of the overlay that failed to load.
		errorOverlayUrl: '',

		// @option zIndex: Number = 1
		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
		zIndex: 1,

		// @option className: String = ''
		// A custom class name to assign to the image. Empty by default.
		className: ''
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = toLatLngBounds(bounds);

		setOptions(this, options);
	},

	onAdd: function () {
		if (!this._image) {
			this._initImage();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}

		if (this.options.interactive) {
			addClass(this._image, 'leaflet-interactive');
			this.addInteractiveTarget(this._image);
		}

		this.getPane().appendChild(this._image);
		this._reset();
	},

	onRemove: function () {
		remove(this._image);
		if (this.options.interactive) {
			this.removeInteractiveTarget(this._image);
		}
	},

	// @method setOpacity(opacity: Number): this
	// Sets the opacity of the overlay.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._image) {
			this._updateOpacity();
		}
		return this;
	},

	setStyle: function (styleOpts) {
		if (styleOpts.opacity) {
			this.setOpacity(styleOpts.opacity);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all overlays.
	bringToFront: function () {
		if (this._map) {
			toFront(this._image);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all overlays.
	bringToBack: function () {
		if (this._map) {
			toBack(this._image);
		}
		return this;
	},

	// @method setUrl(url: String): this
	// Changes the URL of the image.
	setUrl: function (url) {
		this._url = url;

		if (this._image) {
			this._image.src = url;
		}
		return this;
	},

	// @method setBounds(bounds: LatLngBounds): this
	// Update the bounds that this ImageOverlay covers
	setBounds: function (bounds) {
		this._bounds = toLatLngBounds(bounds);

		if (this._map) {
			this._reset();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			zoom: this._reset,
			viewreset: this._reset
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @method setZIndex(value: Number): this
	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
	setZIndex: function (value) {
		this.options.zIndex = value;
		this._updateZIndex();
		return this;
	},

	// @method getBounds(): LatLngBounds
	// Get the bounds that this ImageOverlay covers
	getBounds: function () {
		return this._bounds;
	},

	// @method getElement(): HTMLElement
	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
	// used by this overlay.
	getElement: function () {
		return this._image;
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'IMG';
		var img = this._image = wasElementSupplied ? this._url : create$1('img');

		addClass(img, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(img, this.options.className); }

		img.onselectstart = falseFn;
		img.onmousemove = falseFn;

		// @event load: Event
		// Fired when the ImageOverlay layer has loaded its image
		img.onload = bind(this.fire, this, 'load');
		img.onerror = bind(this._overlayOnError, this, 'error');

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		if (this.options.zIndex) {
			this._updateZIndex();
		}

		if (wasElementSupplied) {
			this._url = img.src;
			return;
		}

		img.src = this._url;
		img.alt = this.options.alt;
	},

	_animateZoom: function (e) {
		var scale = this._map.getZoomScale(e.zoom),
		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

		setTransform(this._image, offset, scale);
	},

	_reset: function () {
		var image = this._image,
		    bounds = new Bounds(
		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		    size = bounds.getSize();

		setPosition(image, bounds.min);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_updateOpacity: function () {
		setOpacity(this._image, this.options.opacity);
	},

	_updateZIndex: function () {
		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._image.style.zIndex = this.options.zIndex;
		}
	},

	_overlayOnError: function () {
		// @event error: Event
		// Fired when the ImageOverlay layer fails to load its image
		this.fire('error');

		var errorUrl = this.options.errorOverlayUrl;
		if (errorUrl && this._url !== errorUrl) {
			this._url = errorUrl;
			this._image.src = errorUrl;
		}
	}
});

// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
// Instantiates an image overlay object given the URL of the image and the
// geographical bounds it is tied to.
var imageOverlay = function (url, bounds, options) {
	return new ImageOverlay(url, bounds, options);
};

/*
 * @class VideoOverlay
 * @aka L.VideoOverlay
 * @inherits ImageOverlay
 *
 * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
 *
 * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
 * HTML5 element.
 *
 * @example
 *
 * ```js
 * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
 * 	videoBounds = [[ 32, -130], [ 13, -100]];
 * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
 * ```
 */

var VideoOverlay = ImageOverlay.extend({

	// @section
	// @aka VideoOverlay options
	options: {
		// @option autoplay: Boolean = true
		// Whether the video starts playing automatically when loaded.
		autoplay: true,

		// @option loop: Boolean = true
		// Whether the video will loop back to the beginning when played.
		loop: true
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'VIDEO';
		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

		addClass(vid, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }

		vid.onselectstart = falseFn;
		vid.onmousemove = falseFn;

		// @event load: Event
		// Fired when the video has finished loading the first frame
		vid.onloadeddata = bind(this.fire, this, 'load');

		if (wasElementSupplied) {
			var sourceElements = vid.getElementsByTagName('source');
			var sources = [];
			for (var j = 0; j < sourceElements.length; j++) {
				sources.push(sourceElements[j].src);
			}

			this._url = (sourceElements.length > 0) ? sources : [vid.src];
			return;
		}

		if (!isArray(this._url)) { this._url = [this._url]; }

		vid.autoplay = !!this.options.autoplay;
		vid.loop = !!this.options.loop;
		for (var i = 0; i < this._url.length; i++) {
			var source = create$1('source');
			source.src = this._url[i];
			vid.appendChild(source);
		}
	}

	// @method getElement(): HTMLVideoElement
	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
	// used by this overlay.
});


// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.

function videoOverlay(video, bounds, options) {
	return new VideoOverlay(video, bounds, options);
}

/*
 * @class DivOverlay
 * @inherits Layer
 * @aka L.DivOverlay
 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
 */

// @namespace DivOverlay
var DivOverlay = Layer.extend({

	// @section
	// @aka DivOverlay options
	options: {
		// @option offset: Point = Point(0, 7)
		// The offset of the popup position. Useful to control the anchor
		// of the popup when opening it on some overlays.
		offset: [0, 7],

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: '',

		// @option pane: String = 'popupPane'
		// `Map pane` where the popup will be added.
		pane: 'popupPane'
	},

	initialize: function (options, source) {
		setOptions(this, options);

		this._source = source;
	},

	onAdd: function (map) {
		this._zoomAnimated = map._zoomAnimated;

		if (!this._container) {
			this._initLayout();
		}

		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
		}

		clearTimeout(this._removeTimeout);
		this.getPane().appendChild(this._container);
		this.update();

		if (map._fadeAnimated) {
			setOpacity(this._container, 1);
		}

		this.bringToFront();
	},

	onRemove: function (map) {
		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
		} else {
			remove(this._container);
		}
	},

	// @namespace Popup
	// @method getLatLng: LatLng
	// Returns the geographical point of popup.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Sets the geographical point where the popup will open.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	// @method getContent: String|HTMLElement
	// Returns the content of the popup.
	getContent: function () {
		return this._content;
	},

	// @method setContent(htmlContent: String|HTMLElement|Function): this
	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	// @method getElement: String|HTMLElement
	// Alias for [getContent()](#popup-getcontent)
	getElement: function () {
		return this._container;
	},

	// @method update: null
	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	getEvents: function () {
		var events = {
			zoom: this._updatePosition,
			viewreset: this._updatePosition
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		return events;
	},

	// @method isOpen: Boolean
	// Returns `true` when the popup is visible on the map.
	isOpen: function () {
		return !!this._map && this._map.hasLayer(this);
	},

	// @method bringToFront: this
	// Brings this popup in front of other popups (in the same map pane).
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings this popup to the back of other popups (in the same map pane).
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
		}
		return this;
	},

	_updateContent: function () {
		if (!this._content) { return; }

		var node = this._contentNode;
		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

		if (typeof content === 'string') {
			node.innerHTML = content;
		} else {
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(content);
		}
		this.fire('contentupdate');
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (this._zoomAnimated) {
			setPosition(this._container, pos.add(anchor));
		} else {
			offset = offset.add(pos).add(anchor);
		}

		var bottom = this._containerBottom = -offset.y,
		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = bottom + 'px';
		this._container.style.left = left + 'px';
	},

	_getAnchor: function () {
		return [0, 0];
	}

});

/*
 * @class Popup
 * @inherits DivOverlay
 * @aka L.Popup
 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
 * open popups while making sure that only one popup is open at one time
 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
 *
 * @example
 *
 * If you want to just bind a popup to marker click and then open it, it's really easy:
 *
 * ```js
 * marker.bindPopup(popupContent).openPopup();
 * ```
 * Path overlays like polylines also have a `bindPopup` method.
 * Here's a more complicated way to open a popup on a map:
 *
 * ```js
 * var popup = L.popup()
 * 	.setLatLng(latlng)
 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 * 	.openOn(map);
 * ```
 */


// @namespace Popup
var Popup = DivOverlay.extend({

	// @section
	// @aka Popup options
	options: {
		// @option maxWidth: Number = 300
		// Max width of the popup, in pixels.
		maxWidth: 300,

		// @option minWidth: Number = 50
		// Min width of the popup, in pixels.
		minWidth: 50,

		// @option maxHeight: Number = null
		// If set, creates a scrollable container of the given height
		// inside a popup if its content exceeds it.
		maxHeight: null,

		// @option autoPan: Boolean = true
		// Set it to `false` if you don't want the map to do panning animation
		// to fit the opened popup.
		autoPan: true,

		// @option autoPanPaddingTopLeft: Point = null
		// The margin between the popup and the top left corner of the map
		// view after autopanning was performed.
		autoPanPaddingTopLeft: null,

		// @option autoPanPaddingBottomRight: Point = null
		// The margin between the popup and the bottom right corner of the map
		// view after autopanning was performed.
		autoPanPaddingBottomRight: null,

		// @option autoPanPadding: Point = Point(5, 5)
		// Equivalent of setting both top left and bottom right autopan padding to the same value.
		autoPanPadding: [5, 5],

		// @option keepInView: Boolean = false
		// Set it to `true` if you want to prevent users from panning the popup
		// off of the screen while it is open.
		keepInView: false,

		// @option closeButton: Boolean = true
		// Controls the presence of a close button in the popup.
		closeButton: true,

		// @option autoClose: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the popup closing when another popup is opened.
		autoClose: true,

		// @option closeOnEscapeKey: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the ESC key for closing of the popup.
		closeOnEscapeKey: true,

		// @option closeOnClick: Boolean = *
		// Set it if you want to override the default behavior of the popup closing when user clicks
		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: ''
	},

	// @namespace Popup
	// @method openOn(map: Map): this
	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupopen: PopupEvent
		// Fired when a popup is opened in the map
		map.fire('popupopen', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup bound to this layer is opened
			this._source.fire('popupopen', {popup: this}, true);
			// For non-path layers, we toggle the popup when clicking
			// again the layer, so prevent the map to reopen it.
			if (!(this._source instanceof Path)) {
				this._source.on('preclick', stopPropagation);
			}
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupclose: PopupEvent
		// Fired when a popup in the map is closed
		map.fire('popupclose', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup bound to this layer is closed
			this._source.fire('popupclose', {popup: this}, true);
			if (!(this._source instanceof Path)) {
				this._source.off('preclick', stopPropagation);
			}
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}

		if (this.options.keepInView) {
			events.moveend = this._adjustPan;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
		    container = this._container = create$1('div',
			prefix + ' ' + (this.options.className || '') +
			' leaflet-zoom-animated');

		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
		this._contentNode = create$1('div', prefix + '-content', wrapper);

		disableClickPropagation(wrapper);
		disableScrollPropagation(this._contentNode);
		on(wrapper, 'contextmenu', stopPropagation);

		this._tipContainer = create$1('div', prefix + '-tip-container', container);
		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

		if (this.options.closeButton) {
			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';

			on(closeButton, 'click', this._onCloseButtonClick, this);
		}
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			addClass(container, scrolledClass);
		} else {
			removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
		    anchor = this._getAnchor();
		setPosition(this._container, pos.add(anchor));
	},

	_adjustPan: function () {
		if (!this.options.autoPan) { return; }
		if (this._map._panAnim) { this._map._panAnim.stop(); }

		var map = this._map,
		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
		    containerHeight = this._container.offsetHeight + marginBottom,
		    containerWidth = this._containerWidth,
		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

		layerPos._add(getPosition(this._container));

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = toPoint(this.options.autoPanPadding),
		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		// @namespace Map
		// @section Popup events
		// @event autopanstart: Event
		// Fired when the map starts autopanning when opening a popup.
		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		stop(e);
	},

	_getAnchor: function () {
		// Where should we anchor the popup on the source layer?
		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
	}

});

// @namespace Popup
// @factory L.popup(options?: Popup options, source?: Layer)
// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
var popup = function (options, source) {
	return new Popup(options, source);
};


/* @namespace Map
 * @section Interaction Options
 * @option closePopupOnClick: Boolean = true
 * Set it to `false` if you don't want popups to close when user clicks the map.
 */
Map.mergeOptions({
	closePopupOnClick: true
});


// @namespace Map
// @section Methods for Layers and Controls
Map.include({
	// @method openPopup(popup: Popup): this
	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
	// @alternative
	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
	// Creates a popup with the specified content and options and opens it in the given point on a map.
	openPopup: function (popup, latlng, options) {
		if (!(popup instanceof Popup)) {
			popup = new Popup(options).setContent(popup);
		}

		if (latlng) {
			popup.setLatLng(latlng);
		}

		if (this.hasLayer(popup)) {
			return this;
		}

		if (this._popup && this._popup.options.autoClose) {
			this.closePopup();
		}

		this._popup = popup;
		return this.addLayer(popup);
	},

	// @method closePopup(popup?: Popup): this
	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
		}
		return this;
	}
});

/*
 * @namespace Layer
 * @section Popup methods example
 *
 * All layers share a set of methods convenient for binding popups to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
 * layer.openPopup();
 * layer.closePopup();
 * ```
 *
 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
 */

// @section Popup methods
Layer.include({

	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
	// Binds a popup to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindPopup: function (content, options) {

		if (content instanceof Popup) {
			setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			if (!this._popup || options) {
				this._popup = new Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = true;
		}

		return this;
	},

	// @method unbindPopup(): this
	// Removes the popup previously bound with `bindPopup`.
	unbindPopup: function () {
		if (this._popup) {
			this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = false;
			this._popup = null;
		}
		return this;
	},

	// @method openPopup(latlng?: LatLng): this
	// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
	openPopup: function (layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = this;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in this._layers) {
				layer = this._layers[id];
				break;
			}
		}

		if (!latlng) {
			latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
		}

		if (this._popup && this._map) {
			// set popup source to this layer
			this._popup._source = layer;

			// update the popup (content, layout, ect...)
			this._popup.update();

			// open the popup on the map
			this._map.openPopup(this._popup, latlng);
		}

		return this;
	},

	// @method closePopup(): this
	// Closes the popup bound to this layer if it is open.
	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	// @method togglePopup(): this
	// Opens or closes the popup bound to this layer depending on its current state.
	togglePopup: function (target) {
		if (this._popup) {
			if (this._popup._map) {
				this.closePopup();
			} else {
				this.openPopup(target);
			}
		}
		return this;
	},

	// @method isPopupOpen(): boolean
	// Returns `true` if the popup bound to this layer is currently open.
	isPopupOpen: function () {
		return (this._popup ? this._popup.isOpen() : false);
	},

	// @method setPopupContent(content: String|HTMLElement|Popup): this
	// Sets the content of the popup bound to this layer.
	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	// @method getPopup(): Popup
	// Returns the popup bound to this layer.
	getPopup: function () {
		return this._popup;
	},

	_openPopup: function (e) {
		var layer = e.layer || e.target;

		if (!this._popup) {
			return;
		}

		if (!this._map) {
			return;
		}

		// prevent map click
		stop(e);

		// if this inherits from Path its a vector and we can just
		// open the popup at the new location
		if (layer instanceof Path) {
			this.openPopup(e.layer || e.target, e.latlng);
			return;
		}

		// otherwise treat it like a marker and figure out
		// if we should toggle it open/closed
		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
			this.closePopup();
		} else {
			this.openPopup(layer, e.latlng);
		}
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	},

	_onKeyPress: function (e) {
		if (e.originalEvent.keyCode === 13) {
			this._openPopup(e);
		}
	}
});

/*
 * @class Tooltip
 * @inherits DivOverlay
 * @aka L.Tooltip
 * Used to display small texts on top of map layers.
 *
 * @example
 *
 * ```js
 * marker.bindTooltip("my tooltip text").openTooltip();
 * ```
 * Note about tooltip offset. Leaflet takes two options in consideration
 * for computing tooltip offsetting:
 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
 *   move it to the bottom. Negatives will move to the left and top.
 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
 *   should adapt this value if you use a custom icon.
 */


// @namespace Tooltip
var Tooltip = DivOverlay.extend({

	// @section
	// @aka Tooltip options
	options: {
		// @option pane: String = 'tooltipPane'
		// `Map pane` where the tooltip will be added.
		pane: 'tooltipPane',

		// @option offset: Point = Point(0, 0)
		// Optional offset of the tooltip position.
		offset: [0, 0],

		// @option direction: String = 'auto'
		// Direction where to open the tooltip. Possible values are: `right`, `left`,
		// `top`, `bottom`, `center`, `auto`.
		// `auto` will dynamically switch between `right` and `left` according to the tooltip
		// position on the map.
		direction: 'auto',

		// @option permanent: Boolean = false
		// Whether to open the tooltip permanently or only on mouseover.
		permanent: false,

		// @option sticky: Boolean = false
		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
		sticky: false,

		// @option interactive: Boolean = false
		// If true, the tooltip will listen to the feature events.
		interactive: false,

		// @option opacity: Number = 0.9
		// Tooltip container opacity.
		opacity: 0.9
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);
		this.setOpacity(this.options.opacity);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipopen: TooltipEvent
		// Fired when a tooltip is opened in the map.
		map.fire('tooltipopen', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip bound to this layer is opened.
			this._source.fire('tooltipopen', {tooltip: this}, true);
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipclose: TooltipEvent
		// Fired when a tooltip in the map is closed.
		map.fire('tooltipclose', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip bound to this layer is closed.
			this._source.fire('tooltipclose', {tooltip: this}, true);
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (touch && !this.options.permanent) {
			events.preclick = this._close;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closeTooltip(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-tooltip',
		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		this._contentNode = this._container = create$1('div', className);
	},

	_updateLayout: function () {},

	_adjustPan: function () {},

	_setPosition: function (pos) {
		var map = this._map,
		    container = this._container,
		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
		    tooltipPoint = map.layerPointToContainerPoint(pos),
		    direction = this.options.direction,
		    tooltipWidth = container.offsetWidth,
		    tooltipHeight = container.offsetHeight,
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (direction === 'top') {
			pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
		} else if (direction === 'bottom') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
		} else if (direction === 'center') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
		} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
			direction = 'right';
			pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
		} else {
			direction = 'left';
			pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
		}

		removeClass(container, 'leaflet-tooltip-right');
		removeClass(container, 'leaflet-tooltip-left');
		removeClass(container, 'leaflet-tooltip-top');
		removeClass(container, 'leaflet-tooltip-bottom');
		addClass(container, 'leaflet-tooltip-' + direction);
		setPosition(container, pos);
	},

	_updatePosition: function () {
		var pos = this._map.latLngToLayerPoint(this._latlng);
		this._setPosition(pos);
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._container) {
			setOpacity(this._container, opacity);
		}
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
		this._setPosition(pos);
	},

	_getAnchor: function () {
		// Where should we anchor the tooltip on the source layer?
		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
	}

});

// @namespace Tooltip
// @factory L.tooltip(options?: Tooltip options, source?: Layer)
// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
var tooltip = function (options, source) {
	return new Tooltip(options, source);
};

// @namespace Map
// @section Methods for Layers and Controls
Map.include({

	// @method openTooltip(tooltip: Tooltip): this
	// Opens the specified tooltip.
	// @alternative
	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
	// Creates a tooltip with the specified content and options and open it.
	openTooltip: function (tooltip, latlng, options) {
		if (!(tooltip instanceof Tooltip)) {
			tooltip = new Tooltip(options).setContent(tooltip);
		}

		if (latlng) {
			tooltip.setLatLng(latlng);
		}

		if (this.hasLayer(tooltip)) {
			return this;
		}

		return this.addLayer(tooltip);
	},

	// @method closeTooltip(tooltip?: Tooltip): this
	// Closes the tooltip given as parameter.
	closeTooltip: function (tooltip) {
		if (tooltip) {
			this.removeLayer(tooltip);
		}
		return this;
	}

});

/*
 * @namespace Layer
 * @section Tooltip methods example
 *
 * All layers share a set of methods convenient for binding tooltips to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
 * layer.openTooltip();
 * layer.closeTooltip();
 * ```
 */

// @section Tooltip methods
Layer.include({

	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
	// Binds a tooltip to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindTooltip: function (content, options) {

		if (content instanceof Tooltip) {
			setOptions(content, options);
			this._tooltip = content;
			content._source = this;
		} else {
			if (!this._tooltip || options) {
				this._tooltip = new Tooltip(options, this);
			}
			this._tooltip.setContent(content);

		}

		this._initTooltipInteractions();

		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
			this.openTooltip();
		}

		return this;
	},

	// @method unbindTooltip(): this
	// Removes the tooltip previously bound with `bindTooltip`.
	unbindTooltip: function () {
		if (this._tooltip) {
			this._initTooltipInteractions(true);
			this.closeTooltip();
			this._tooltip = null;
		}
		return this;
	},

	_initTooltipInteractions: function (remove$$1) {
		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
		var onOff = remove$$1 ? 'off' : 'on',
		    events = {
			remove: this.closeTooltip,
			move: this._moveTooltip
		    };
		if (!this._tooltip.options.permanent) {
			events.mouseover = this._openTooltip;
			events.mouseout = this.closeTooltip;
			if (this._tooltip.options.sticky) {
				events.mousemove = this._moveTooltip;
			}
			if (touch) {
				events.click = this._openTooltip;
			}
		} else {
			events.add = this._openTooltip;
		}
		this[onOff](events);
		this._tooltipHandlersAdded = !remove$$1;
	},

	// @method openTooltip(latlng?: LatLng): this
	// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
	openTooltip: function (layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = this;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in this._layers) {
				layer = this._layers[id];
				break;
			}
		}

		if (!latlng) {
			latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
		}

		if (this._tooltip && this._map) {

			// set tooltip source to this layer
			this._tooltip._source = layer;

			// update the tooltip (content, layout, ect...)
			this._tooltip.update();

			// open the tooltip on the map
			this._map.openTooltip(this._tooltip, latlng);

			// Tooltip container may not be defined if not permanent and never
			// opened.
			if (this._tooltip.options.interactive && this._tooltip._container) {
				addClass(this._tooltip._container, 'leaflet-clickable');
				this.addInteractiveTarget(this._tooltip._container);
			}
		}

		return this;
	},

	// @method closeTooltip(): this
	// Closes the tooltip bound to this layer if it is open.
	closeTooltip: function () {
		if (this._tooltip) {
			this._tooltip._close();
			if (this._tooltip.options.interactive && this._tooltip._container) {
				removeClass(this._tooltip._container, 'leaflet-clickable');
				this.removeInteractiveTarget(this._tooltip._container);
			}
		}
		return this;
	},

	// @method toggleTooltip(): this
	// Opens or closes the tooltip bound to this layer depending on its current state.
	toggleTooltip: function (target) {
		if (this._tooltip) {
			if (this._tooltip._map) {
				this.closeTooltip();
			} else {
				this.openTooltip(target);
			}
		}
		return this;
	},

	// @method isTooltipOpen(): boolean
	// Returns `true` if the tooltip bound to this layer is currently open.
	isTooltipOpen: function () {
		return this._tooltip.isOpen();
	},

	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
	// Sets the content of the tooltip bound to this layer.
	setTooltipContent: function (content) {
		if (this._tooltip) {
			this._tooltip.setContent(content);
		}
		return this;
	},

	// @method getTooltip(): Tooltip
	// Returns the tooltip bound to this layer.
	getTooltip: function () {
		return this._tooltip;
	},

	_openTooltip: function (e) {
		var layer = e.layer || e.target;

		if (!this._tooltip || !this._map) {
			return;
		}
		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
	},

	_moveTooltip: function (e) {
		var latlng = e.latlng, containerPoint, layerPoint;
		if (this._tooltip.options.sticky && e.originalEvent) {
			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
			latlng = this._map.layerPointToLatLng(layerPoint);
		}
		this._tooltip.setLatLng(latlng);
	}
});

/*
 * @class DivIcon
 * @aka L.DivIcon
 * @inherits Icon
 *
 * Represents a lightweight icon for markers that uses a simple `<div>`
 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
 *
 * @example
 * ```js
 * var myIcon = L.divIcon({className: 'my-div-icon'});
 * // you can set .my-div-icon styles in CSS
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
 */

var DivIcon = Icon.extend({
	options: {
		// @section
		// @aka DivIcon options
		iconSize: [12, 12], // also can be set through CSS

		// iconAnchor: (Point),
		// popupAnchor: (Point),

		// @option html: String = ''
		// Custom HTML code to put inside the div element, empty by default.
		html: false,

		// @option bgPos: Point = [0, 0]
		// Optional relative position of the background, in pixels
		bgPos: null,

		className: 'leaflet-div-icon'
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		div.innerHTML = options.html !== false ? options.html : '';

		if (options.bgPos) {
			var bgPos = toPoint(options.bgPos);
			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
		}
		this._setIconStyles(div, 'icon');

		return div;
	},

	createShadow: function () {
		return null;
	}
});

// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function divIcon(options) {
	return new DivIcon(options);
}

Icon.Default = IconDefault;

/*
 * @class GridLayer
 * @inherits Layer
 * @aka L.GridLayer
 *
 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
 *
 *
 * @section Synchronous usage
 * @example
 *
 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords){
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
 *         var ctx = tile.getContext('2d');
 *
 *         // return the tile so it can be rendered on screen
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section Asynchronous usage
 * @example
 *
 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords, done){
 *         var error;
 *
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // draw something asynchronously and pass the tile to the done() callback
 *         setTimeout(function() {
 *             done(error, tile);
 *         }, 1000);
 *
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section
 */


var GridLayer = Layer.extend({

	// @section
	// @aka GridLayer options
	options: {
		// @option tileSize: Number|Point = 256
		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
		tileSize: 256,

		// @option opacity: Number = 1.0
		// Opacity of the tiles. Can be used in the `createTile()` function.
		opacity: 1,

		// @option updateWhenIdle: Boolean = (depends)
		// Load new tiles only when panning ends.
		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
		updateWhenIdle: mobile,

		// @option updateWhenZooming: Boolean = true
		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
		updateWhenZooming: true,

		// @option updateInterval: Number = 200
		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
		updateInterval: 200,

		// @option zIndex: Number = 1
		// The explicit zIndex of the tile layer.
		zIndex: 1,

		// @option bounds: LatLngBounds = undefined
		// If set, tiles will only be loaded inside the set `LatLngBounds`.
		bounds: null,

		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = undefined
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: undefined,

		// @option maxNativeZoom: Number = undefined
		// Maximum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
		// from `maxNativeZoom` level and auto-scaled.
		maxNativeZoom: undefined,

		// @option minNativeZoom: Number = undefined
		// Minimum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
		// from `minNativeZoom` level and auto-scaled.
		minNativeZoom: undefined,

		// @option noWrap: Boolean = false
		// Whether the layer is wrapped around the antimeridian. If `true`, the
		// GridLayer will only be displayed once at low zoom levels. Has no
		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
		// tiles outside the CRS limits.
		noWrap: false,

		// @option pane: String = 'tilePane'
		// `Map pane` where the grid layer will be added.
		pane: 'tilePane',

		// @option className: String = ''
		// A custom class name to assign to the tile layer. Empty by default.
		className: '',

		// @option keepBuffer: Number = 2
		// When panning the map, keep this many rows and columns of tiles before unloading them.
		keepBuffer: 2
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	onAdd: function () {
		this._initContainer();

		this._levels = {};
		this._tiles = {};

		this._resetView();
		this._update();
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
	},

	onRemove: function (map) {
		this._removeAllTiles();
		remove(this._container);
		map._removeZoomLimit(this);
		this._container = null;
		this._tileZoom = undefined;
	},

	// @method bringToFront: this
	// Brings the tile layer to the top of all tile layers.
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
			this._setAutoZIndex(Math.max);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings the tile layer to the bottom of all tile layers.
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
			this._setAutoZIndex(Math.min);
		}
		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the tiles for this layer.
	getContainer: function () {
		return this._container;
	},

	// @method setOpacity(opacity: Number): this
	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		this._updateOpacity();
		return this;
	},

	// @method setZIndex(zIndex: Number): this
	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	// @method isLoading: Boolean
	// Returns `true` if any tile in the grid layer has not finished loading.
	isLoading: function () {
		return this._loading;
	},

	// @method redraw: this
	// Causes the layer to clear all the tiles and request them again.
	redraw: function () {
		if (this._map) {
			this._removeAllTiles();
			this._update();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			viewprereset: this._invalidateAll,
			viewreset: this._resetView,
			zoom: this._resetView,
			moveend: this._onMoveEnd
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			if (!this._onMove) {
				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
			}

			events.move = this._onMove;
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @section Extension methods
	// Layers extending `GridLayer` shall reimplement the following method.
	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, must be overridden by classes extending `GridLayer`.
	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
	// is specified, it must be called when the tile has finished loading and drawing.
	createTile: function () {
		return document.createElement('div');
	},

	// @section
	// @method getTileSize: Point
	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
	getTileSize: function () {
		var s = this.options.tileSize;
		return s instanceof Point ? s : new Point(s, s);
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (compare) {
		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

		var layers = this.getPane().children,
		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

			zIndex = layers[i].style.zIndex;

			if (layers[i] !== this._container && zIndex) {
				edgeZIndex = compare(edgeZIndex, +zIndex);
			}
		}

		if (isFinite(edgeZIndex)) {
			this.options.zIndex = edgeZIndex + compare(-1, 1);
			this._updateZIndex();
		}
	},

	_updateOpacity: function () {
		if (!this._map) { return; }

		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
		if (ielt9) { return; }

		setOpacity(this._container, this.options.opacity);

		var now = +new Date(),
		    nextFrame = false,
		    willPrune = false;

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			if (!tile.current || !tile.loaded) { continue; }

			var fade = Math.min(1, (now - tile.loaded) / 200);

			setOpacity(tile.el, fade);
			if (fade < 1) {
				nextFrame = true;
			} else {
				if (tile.active) {
					willPrune = true;
				} else {
					this._onOpaqueTile(tile);
				}
				tile.active = true;
			}
		}

		if (willPrune && !this._noPrune) { this._pruneTiles(); }

		if (nextFrame) {
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		}
	},

	_onOpaqueTile: falseFn,

	_initContainer: function () {
		if (this._container) { return; }

		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
		this._updateZIndex();

		if (this.options.opacity < 1) {
			this._updateOpacity();
		}

		this.getPane().appendChild(this._container);
	},

	_updateLevels: function () {

		var zoom = this._tileZoom,
		    maxZoom = this.options.maxZoom;

		if (zoom === undefined) { return undefined; }

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				this._onUpdateLevel(z);
			} else {
				remove(this._levels[z].el);
				this._removeTilesAtZoom(z);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
		    map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			this._setZoomTransform(level, map.getCenter(), map.getZoom());

			// force the browser to consider the newly added element for transition
			falseFn(level.el.offsetWidth);

			this._onCreateLevel(level);
		}

		this._level = level;

		return level;
	},

	_onUpdateLevel: falseFn,

	_onRemoveLevel: falseFn,

	_onCreateLevel: falseFn,

	_pruneTiles: function () {
		if (!this._map) {
			return;
		}

		var key, tile;

		var zoom = this._map.getZoom();
		if (zoom > this.options.maxZoom ||
			zoom < this.options.minZoom) {
			this._removeAllTiles();
			return;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			tile.retain = tile.current;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			if (tile.current && !tile.active) {
				var coords = tile.coords;
				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
				}
			}
		}

		for (key in this._tiles) {
			if (!this._tiles[key].retain) {
				this._removeTile(key);
			}
		}
	},

	_removeTilesAtZoom: function (zoom) {
		for (var key in this._tiles) {
			if (this._tiles[key].coords.z !== zoom) {
				continue;
			}
			this._removeTile(key);
		}
	},

	_removeAllTiles: function () {
		for (var key in this._tiles) {
			this._removeTile(key);
		}
	},

	_invalidateAll: function () {
		for (var z in this._levels) {
			remove(this._levels[z].el);
			this._onRemoveLevel(z);
			delete this._levels[z];
		}
		this._removeAllTiles();

		this._tileZoom = undefined;
	},

	_retainParent: function (x, y, z, minZoom) {
		var x2 = Math.floor(x / 2),
		    y2 = Math.floor(y / 2),
		    z2 = z - 1,
		    coords2 = new Point(+x2, +y2);
		coords2.z = +z2;

		var key = this._tileCoordsToKey(coords2),
		    tile = this._tiles[key];

		if (tile && tile.active) {
			tile.retain = true;
			return true;

		} else if (tile && tile.loaded) {
			tile.retain = true;
		}

		if (z2 > minZoom) {
			return this._retainParent(x2, y2, z2, minZoom);
		}

		return false;
	},

	_retainChildren: function (x, y, z, maxZoom) {

		for (var i = 2 * x; i < 2 * x + 2; i++) {
			for (var j = 2 * y; j < 2 * y + 2; j++) {

				var coords = new Point(i, j);
				coords.z = z + 1;

				var key = this._tileCoordsToKey(coords),
				    tile = this._tiles[key];

				if (tile && tile.active) {
					tile.retain = true;
					continue;

				} else if (tile && tile.loaded) {
					tile.retain = true;
				}

				if (z + 1 < maxZoom) {
					this._retainChildren(i, j, z + 1, maxZoom);
				}
			}
		}
	},

	_resetView: function (e) {
		var animating = e && (e.pinch || e.flyTo);
		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
	},

	_animateZoom: function (e) {
		this._setView(e.center, e.zoom, true, e.noUpdate);
	},

	_clampZoom: function (zoom) {
		var options = this.options;

		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
			return options.minNativeZoom;
		}

		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
			return options.maxNativeZoom;
		}

		return zoom;
	},

	_setView: function (center, zoom, noPrune, noUpdate) {
		var tileZoom = this._clampZoom(Math.round(zoom));
		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
			tileZoom = undefined;
		}

		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

		if (!noUpdate || tileZoomChanged) {

			this._tileZoom = tileZoom;

			if (this._abortLoading) {
				this._abortLoading();
			}

			this._updateLevels();
			this._resetGrid();

			if (tileZoom !== undefined) {
				this._update(center);
			}

			if (!noPrune) {
				this._pruneTiles();
			}

			// Flag to prevent _updateOpacity from pruning tiles during
			// a zoom anim or a pinch gesture
			this._noPrune = !!noPrune;
		}

		this._setZoomTransforms(center, zoom);
	},

	_setZoomTransforms: function (center, zoom) {
		for (var i in this._levels) {
			this._setZoomTransform(this._levels[i], center, zoom);
		}
	},

	_setZoomTransform: function (level, center, zoom) {
		var scale = this._map.getZoomScale(zoom, level.zoom),
		    translate = level.origin.multiplyBy(scale)
		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

		if (any3d) {
			setTransform(level.el, translate, scale);
		} else {
			setPosition(level.el, translate);
		}
	},

	_resetGrid: function () {
		var map = this._map,
		    crs = map.options.crs,
		    tileSize = this._tileSize = this.getTileSize(),
		    tileZoom = this._tileZoom;

		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
		if (bounds) {
			this._globalTileRange = this._pxBoundsToTileRange(bounds);
		}

		this._wrapX = crs.wrapLng && !this.options.noWrap && [
			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
		];
		this._wrapY = crs.wrapLat && !this.options.noWrap && [
			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
		];
	},

	_onMoveEnd: function () {
		if (!this._map || this._map._animatingZoom) { return; }

		this._update();
	},

	_getTiledPixelBounds: function (center) {
		var map = this._map,
		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
		    scale = map.getZoomScale(mapZoom, this._tileZoom),
		    pixelCenter = map.project(center, this._tileZoom).floor(),
		    halfSize = map.getSize().divideBy(scale * 2);

		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
	},

	// Private method to load tiles in the grid's active zoom level according to map bounds
	_update: function (center) {
		var map = this._map;
		if (!map) { return; }
		var zoom = this._clampZoom(map.getZoom());

		if (center === undefined) { center = map.getCenter(); }
		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

		var pixelBounds = this._getTiledPixelBounds(center),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    tileCenter = tileRange.getCenter(),
		    queue = [],
		    margin = this.options.keepBuffer,
		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
		                              tileRange.getTopRight().add([margin, -margin]));

		// Sanity check: panic if the tile range contains Infinity somewhere.
		if (!(isFinite(tileRange.min.x) &&
		      isFinite(tileRange.min.y) &&
		      isFinite(tileRange.max.x) &&
		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

		for (var key in this._tiles) {
			var c = this._tiles[key].coords;
			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
				this._tiles[key].current = false;
			}
		}

		// _update just loads more tiles. If the tile zoom level differs too much
		// from the map's, let _setView reset levels and prune old tiles.
		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				var coords = new Point(i, j);
				coords.z = this._tileZoom;

				if (!this._isValidTile(coords)) { continue; }

				var tile = this._tiles[this._tileCoordsToKey(coords)];
				if (tile) {
					tile.current = true;
				} else {
					queue.push(coords);
				}
			}
		}

		// sort tile queue to load tiles in order of their distance to center
		queue.sort(function (a, b) {
			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
		});

		if (queue.length !== 0) {
			// if it's the first batch of tiles to load
			if (!this._loading) {
				this._loading = true;
				// @event loading: Event
				// Fired when the grid layer starts loading tiles.
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();

			for (i = 0; i < queue.length; i++) {
				this._addTile(queue[i], fragment);
			}

			this._level.el.appendChild(fragment);
		}
	},

	_isValidTile: function (coords) {
		var crs = this._map.options.crs;

		if (!crs.infinite) {
			// don't load tile if it's out of bounds and not wrapped
			var bounds = this._globalTileRange;
			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
		}

		if (!this.options.bounds) { return true; }

		// don't load tile if it doesn't intersect the bounds in options
		var tileBounds = this._tileCoordsToBounds(coords);
		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
	},

	_keyToBounds: function (key) {
		return this._tileCoordsToBounds(this._keyToTileCoords(key));
	},

	_tileCoordsToNwSe: function (coords) {
		var map = this._map,
		    tileSize = this.getTileSize(),
		    nwPoint = coords.scaleBy(tileSize),
		    sePoint = nwPoint.add(tileSize),
		    nw = map.unproject(nwPoint, coords.z),
		    se = map.unproject(sePoint, coords.z);
		return [nw, se];
	},

	// converts tile coordinates to its geographical bounds
	_tileCoordsToBounds: function (coords) {
		var bp = this._tileCoordsToNwSe(coords),
		    bounds = new LatLngBounds(bp[0], bp[1]);

		if (!this.options.noWrap) {
			bounds = this._map.wrapLatLngBounds(bounds);
		}
		return bounds;
	},
	// converts tile coordinates to key for the tile cache
	_tileCoordsToKey: function (coords) {
		return coords.x + ':' + coords.y + ':' + coords.z;
	},

	// converts tile cache key to coordinates
	_keyToTileCoords: function (key) {
		var k = key.split(':'),
		    coords = new Point(+k[0], +k[1]);
		coords.z = +k[2];
		return coords;
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		remove(tile.el);

		delete this._tiles[key];

		// @event tileunload: TileEvent
		// Fired when a tile is removed (e.g. when a tile goes off the screen).
		this.fire('tileunload', {
			tile: tile.el,
			coords: this._keyToTileCoords(key)
		});
	},

	_initTile: function (tile) {
		addClass(tile, 'leaflet-tile');

		var tileSize = this.getTileSize();
		tile.style.width = tileSize.x + 'px';
		tile.style.height = tileSize.y + 'px';

		tile.onselectstart = falseFn;
		tile.onmousemove = falseFn;

		// update opacity on tiles in IE7-8 because of filter inheritance problems
		if (ielt9 && this.options.opacity < 1) {
			setOpacity(tile, this.options.opacity);
		}

		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (android && !android23) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
	},

	_addTile: function (coords, container) {
		var tilePos = this._getTilePos(coords),
		    key = this._tileCoordsToKey(coords);

		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

		this._initTile(tile);

		// if createTile is defined with a second argument ("done" callback),
		// we know that tile is async and will be ready later; otherwise
		if (this.createTile.length < 2) {
			// mark tile as ready, but delay one frame for opacity animation to happen
			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
		}

		setPosition(tile, tilePos);

		// save tile in cache
		this._tiles[key] = {
			el: tile,
			coords: coords,
			current: true
		};

		container.appendChild(tile);
		// @event tileloadstart: TileEvent
		// Fired when a tile is requested and starts loading.
		this.fire('tileloadstart', {
			tile: tile,
			coords: coords
		});
	},

	_tileReady: function (coords, err, tile) {
		if (err) {
			// @event tileerror: TileErrorEvent
			// Fired when there is an error loading a tile.
			this.fire('tileerror', {
				error: err,
				tile: tile,
				coords: coords
			});
		}

		var key = this._tileCoordsToKey(coords);

		tile = this._tiles[key];
		if (!tile) { return; }

		tile.loaded = +new Date();
		if (this._map._fadeAnimated) {
			setOpacity(tile.el, 0);
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		} else {
			tile.active = true;
			this._pruneTiles();
		}

		if (!err) {
			addClass(tile.el, 'leaflet-tile-loaded');

			// @event tileload: TileEvent
			// Fired when a tile loads.
			this.fire('tileload', {
				tile: tile.el,
				coords: coords
			});
		}

		if (this._noTilesToLoad()) {
			this._loading = false;
			// @event load: Event
			// Fired when the grid layer loaded all visible tiles.
			this.fire('load');

			if (ielt9 || !this._map._fadeAnimated) {
				requestAnimFrame(this._pruneTiles, this);
			} else {
				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
				// to trigger a pruning.
				setTimeout(bind(this._pruneTiles, this), 250);
			}
		}
	},

	_getTilePos: function (coords) {
		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
	},

	_wrapCoords: function (coords) {
		var newCoords = new Point(
			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
		newCoords.z = coords.z;
		return newCoords;
	},

	_pxBoundsToTileRange: function (bounds) {
		var tileSize = this.getTileSize();
		return new Bounds(
			bounds.min.unscaleBy(tileSize).floor(),
			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
	},

	_noTilesToLoad: function () {
		for (var key in this._tiles) {
			if (!this._tiles[key].loaded) { return false; }
		}
		return true;
	}
});

// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function gridLayer(options) {
	return new GridLayer(options);
}

/*
 * @class TileLayer
 * @inherits GridLayer
 * @aka L.TileLayer
 * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
 *
 * @example
 *
 * ```js
 * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
 * ```
 *
 * @section URL template
 * @example
 *
 * A string of the following form:
 *
 * ```
 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
 * ```
 *
 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
 *
 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
 *
 * ```
 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
 * ```
 */


var TileLayer = GridLayer.extend({

	// @section
	// @aka TileLayer options
	options: {
		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = 18
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: 18,

		// @option subdomains: String|String[] = 'abc'
		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
		subdomains: 'abc',

		// @option errorTileUrl: String = ''
		// URL to the tile image to show in place of the tile that failed to load.
		errorTileUrl: '',

		// @option zoomOffset: Number = 0
		// The zoom number used in tile URLs will be offset with this value.
		zoomOffset: 0,

		// @option tms: Boolean = false
		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
		tms: false,

		// @option zoomReverse: Boolean = false
		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
		zoomReverse: false,

		// @option detectRetina: Boolean = false
		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
		detectRetina: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the tiles.
		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false
	},

	initialize: function (url, options) {

		this._url = url;

		options = setOptions(this, options);

		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);

			if (!options.zoomReverse) {
				options.zoomOffset++;
				options.maxZoom--;
			} else {
				options.zoomOffset--;
				options.minZoom++;
			}

			options.minZoom = Math.max(0, options.minZoom);
		}

		if (typeof options.subdomains === 'string') {
			options.subdomains = options.subdomains.split('');
		}

		// for https://github.com/Leaflet/Leaflet/issues/137
		if (!android) {
			this.on('tileunload', this._onTileRemove);
		}
	},

	// @method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	// If the URL does not change, the layer will not be redrawn unless
	// the noRedraw parameter is set to false.
	setUrl: function (url, noRedraw) {
		if (this._url === url && noRedraw === undefined) {
			noRedraw = true;
		}

		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}
		return this;
	},

	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
	// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
	// callback is called when the tile has been loaded.
	createTile: function (coords, done) {
		var tile = document.createElement('img');

		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
		on(tile, 'error', bind(this._tileOnError, this, done, tile));

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/
		tile.alt = '';

		/*
		 Set role="presentation" to force screen readers to ignore this
		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
		*/
		tile.setAttribute('role', 'presentation');

		tile.src = this.getTileUrl(coords);

		return tile;
	},

	// @section Extension methods
	// @uninheritable
	// Layers extending `TileLayer` might reimplement the following method.
	// @method getTileUrl(coords: Object): String
	// Called only internally, returns the URL for a tile given its coordinates.
	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
	getTileUrl: function (coords) {
		var data = {
			r: retina ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: this._getZoomForUrl()
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) {
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		return template(this._url, extend(data, this.options));
	},

	_tileOnLoad: function (done, tile) {
		// For https://github.com/Leaflet/Leaflet/issues/3332
		if (ielt9) {
			setTimeout(bind(done, this, null, tile), 0);
		} else {
			done(null, tile);
		}
	},

	_tileOnError: function (done, tile, e) {
		var errorUrl = this.options.errorTileUrl;
		if (errorUrl && tile.getAttribute('src') !== errorUrl) {
			tile.src = errorUrl;
		}
		done(e, tile);
	},

	_onTileRemove: function (e) {
		e.tile.onload = null;
	},

	_getZoomForUrl: function () {
		var zoom = this._tileZoom,
		maxZoom = this.options.maxZoom,
		zoomReverse = this.options.zoomReverse,
		zoomOffset = this.options.zoomOffset;

		if (zoomReverse) {
			zoom = maxZoom - zoom;
		}

		return zoom + zoomOffset;
	},

	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},

	// stops loading all tiles in the background layer
	_abortLoading: function () {
		var i, tile;
		for (i in this._tiles) {
			if (this._tiles[i].coords.z !== this._tileZoom) {
				tile = this._tiles[i].el;

				tile.onload = falseFn;
				tile.onerror = falseFn;

				if (!tile.complete) {
					tile.src = emptyImageUrl;
					remove(tile);
					delete this._tiles[i];
				}
			}
		}
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		// Cancels any pending http requests associated with the tile
		// unless we're on Android's stock browser,
		// see https://github.com/Leaflet/Leaflet/issues/137
		if (!androidStock) {
			tile.el.setAttribute('src', emptyImageUrl);
		}

		return GridLayer.prototype._removeTile.call(this, key);
	},

	_tileReady: function (coords, err, tile) {
		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {
			return;
		}

		return GridLayer.prototype._tileReady.call(this, coords, err, tile);
	}
});


// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.

function tileLayer(url, options) {
	return new TileLayer(url, options);
}

/*
 * @class TileLayer.WMS
 * @inherits TileLayer
 * @aka L.TileLayer.WMS
 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
 *
 * @example
 *
 * ```js
 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
 * 	layers: 'nexrad-n0r-900913',
 * 	format: 'image/png',
 * 	transparent: true,
 * 	attribution: "Weather data © 2012 IEM Nexrad"
 * });
 * ```
 */

var TileLayerWMS = TileLayer.extend({

	// @section
	// @aka TileLayer.WMS options
	// If any custom options not documented here are used, they will be sent to the
	// WMS server as extra parameters in each request URL. This can be useful for
	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',

		// @option layers: String = ''
		// **(required)** Comma-separated list of WMS layers to show.
		layers: '',

		// @option styles: String = ''
		// Comma-separated list of WMS styles.
		styles: '',

		// @option format: String = 'image/jpeg'
		// WMS image format (use `'image/png'` for layers with transparency).
		format: 'image/jpeg',

		// @option transparent: Boolean = false
		// If `true`, the WMS service will return images with transparency.
		transparent: false,

		// @option version: String = '1.1.1'
		// Version of the WMS service to use
		version: '1.1.1'
	},

	options: {
		// @option crs: CRS = null
		// Coordinate Reference System to use for the WMS requests, defaults to
		// map CRS. Don't change this if you're not sure what it means.
		crs: null,

		// @option uppercase: Boolean = false
		// If `true`, WMS request parameter keys will be uppercase.
		uppercase: false
	},

	initialize: function (url, options) {

		this._url = url;

		var wmsParams = extend({}, this.defaultWmsParams);

		// all keys that are not TileLayer options go to WMS params
		for (var i in options) {
			if (!(i in this.options)) {
				wmsParams[i] = options[i];
			}
		}

		options = setOptions(this, options);

		var realRetina = options.detectRetina && retina ? 2 : 1;
		var tileSize = this.getTileSize();
		wmsParams.width = tileSize.x * realRetina;
		wmsParams.height = tileSize.y * realRetina;

		this.wmsParams = wmsParams;
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;
		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (coords) {

		var tileBounds = this._tileCoordsToNwSe(coords),
		    crs = this._crs,
		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
		    min = bounds.min,
		    max = bounds.max,
		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
		    [min.y, min.x, max.y, max.x] :
		    [min.x, min.y, max.x, max.y]).join(','),
		    url = TileLayer.prototype.getTileUrl.call(this, coords);
		return url +
			getParamString(this.wmsParams, url, this.options.uppercase) +
			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
	},

	// @method setParams(params: Object, noRedraw?: Boolean): this
	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
	setParams: function (params, noRedraw) {

		extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});


// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function tileLayerWMS(url, options) {
	return new TileLayerWMS(url, options);
}

TileLayer.WMS = TileLayerWMS;
tileLayer.wms = tileLayerWMS;

/*
 * @class Renderer
 * @inherits Layer
 * @aka L.Renderer
 *
 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
 * DOM container of the renderer, its bounds, and its zoom animation.
 *
 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
 * itself can be added or removed to the map. All paths use a renderer, which can
 * be implicit (the map will decide the type of renderer and use it automatically)
 * or explicit (using the [`renderer`](#path-renderer) option of the path).
 *
 * Do not use this class directly, use `SVG` and `Canvas` instead.
 *
 * @event update: Event
 * Fired when the renderer updates its bounds, center and zoom, for example when
 * its map has moved
 */

var Renderer = Layer.extend({

	// @section
	// @aka Renderer options
	options: {
		// @option padding: Number = 0.1
		// How much to extend the clip area around the map view (relative to its size)
		// e.g. 0.1 would be 10% of map view in each direction
		padding: 0.1,

		// @option tolerance: Number = 0
		// How much to extend click tolerance round a path/object on the map
		tolerance : 0
	},

	initialize: function (options) {
		setOptions(this, options);
		stamp(this);
		this._layers = this._layers || {};
	},

	onAdd: function () {
		if (!this._container) {
			this._initContainer(); // defined by renderer implementations

			if (this._zoomAnimated) {
				addClass(this._container, 'leaflet-zoom-animated');
			}
		}

		this.getPane().appendChild(this._container);
		this._update();
		this.on('update', this._updatePaths, this);
	},

	onRemove: function () {
		this.off('update', this._updatePaths, this);
		this._destroyContainer();
	},

	getEvents: function () {
		var events = {
			viewreset: this._reset,
			zoom: this._onZoom,
			moveend: this._update,
			zoomend: this._onZoomEnd
		};
		if (this._zoomAnimated) {
			events.zoomanim = this._onAnimZoom;
		}
		return events;
	},

	_onAnimZoom: function (ev) {
		this._updateTransform(ev.center, ev.zoom);
	},

	_onZoom: function () {
		this._updateTransform(this._map.getCenter(), this._map.getZoom());
	},

	_updateTransform: function (center, zoom) {
		var scale = this._map.getZoomScale(zoom, this._zoom),
		    position = getPosition(this._container),
		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
		    currentCenterPoint = this._map.project(this._center, zoom),
		    destCenterPoint = this._map.project(center, zoom),
		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

		if (any3d) {
			setTransform(this._container, topLeftOffset, scale);
		} else {
			setPosition(this._container, topLeftOffset);
		}
	},

	_reset: function () {
		this._update();
		this._updateTransform(this._center, this._zoom);

		for (var id in this._layers) {
			this._layers[id]._reset();
		}
	},

	_onZoomEnd: function () {
		for (var id in this._layers) {
			this._layers[id]._project();
		}
	},

	_updatePaths: function () {
		for (var id in this._layers) {
			this._layers[id]._update();
		}
	},

	_update: function () {
		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
		// Subclasses are responsible of firing the 'update' event.
		var p = this.options.padding,
		    size = this._map.getSize(),
		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

		this._center = this._map.getCenter();
		this._zoom = this._map.getZoom();
	}
});

/*
 * @class Canvas
 * @inherits Renderer
 * @aka L.Canvas
 *
 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
 * available in all web browsers, notably IE8, and overlapping geometries might
 * not display properly in some edge cases.
 *
 * @example
 *
 * Use Canvas by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.canvas()
 * });
 * ```
 *
 * Use a Canvas renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.canvas({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var Canvas = Renderer.extend({
	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.viewprereset = this._onViewPreReset;
		return events;
	},

	_onViewPreReset: function () {
		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
		this._postponeUpdatePaths = true;
	},

	onAdd: function () {
		Renderer.prototype.onAdd.call(this);

		// Redraw vectors since canvas is cleared upon removal,
		// in case of removing the renderer itself from the map.
		this._draw();
	},

	_initContainer: function () {
		var container = this._container = document.createElement('canvas');

		on(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);
		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
		on(container, 'mouseout', this._handleMouseOut, this);

		this._ctx = container.getContext('2d');
	},

	_destroyContainer: function () {
		cancelAnimFrame(this._redrawRequest);
		delete this._ctx;
		remove(this._container);
		off(this._container);
		delete this._container;
	},

	_updatePaths: function () {
		if (this._postponeUpdatePaths) { return; }

		var layer;
		this._redrawBounds = null;
		for (var id in this._layers) {
			layer = this._layers[id];
			layer._update();
		}
		this._redraw();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    container = this._container,
		    size = b.getSize(),
		    m = retina ? 2 : 1;

		setPosition(container, b.min);

		// set canvas size (also clearing it); use double size on retina
		container.width = m * size.x;
		container.height = m * size.y;
		container.style.width = size.x + 'px';
		container.style.height = size.y + 'px';

		if (retina) {
			this._ctx.scale(2, 2);
		}

		// translate so we use the same path coordinates after canvas element moves
		this._ctx.translate(-b.min.x, -b.min.y);

		// Tell paths to redraw themselves
		this.fire('update');
	},

	_reset: function () {
		Renderer.prototype._reset.call(this);

		if (this._postponeUpdatePaths) {
			this._postponeUpdatePaths = false;
			this._updatePaths();
		}
	},

	_initPath: function (layer) {
		this._updateDashArray(layer);
		this._layers[stamp(layer)] = layer;

		var order = layer._order = {
			layer: layer,
			prev: this._drawLast,
			next: null
		};
		if (this._drawLast) { this._drawLast.next = order; }
		this._drawLast = order;
		this._drawFirst = this._drawFirst || this._drawLast;
	},

	_addPath: function (layer) {
		this._requestRedraw(layer);
	},

	_removePath: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			this._drawLast = prev;
		}
		if (prev) {
			prev.next = next;
		} else {
			this._drawFirst = next;
		}

		delete layer._order;

		delete this._layers[stamp(layer)];

		this._requestRedraw(layer);
	},

	_updatePath: function (layer) {
		// Redraw the union of the layer's old pixel
		// bounds and the new pixel bounds.
		this._extendRedrawBounds(layer);
		layer._project();
		layer._update();
		// The redraw will extend the redraw bounds
		// with the new pixel bounds.
		this._requestRedraw(layer);
	},

	_updateStyle: function (layer) {
		this._updateDashArray(layer);
		this._requestRedraw(layer);
	},

	_updateDashArray: function (layer) {
		if (typeof layer.options.dashArray === 'string') {
			var parts = layer.options.dashArray.split(/[, ]+/),
			    dashArray = [],
			    dashValue,
			    i;
			for (i = 0; i < parts.length; i++) {
				dashValue = Number(parts[i]);
				// Ignore dash array containing invalid lengths
				if (isNaN(dashValue)) { return; }
				dashArray.push(dashValue);
			}
			layer.options._dashArray = dashArray;
		} else {
			layer.options._dashArray = layer.options.dashArray;
		}
	},

	_requestRedraw: function (layer) {
		if (!this._map) { return; }

		this._extendRedrawBounds(layer);
		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
	},

	_extendRedrawBounds: function (layer) {
		if (layer._pxBounds) {
			var padding = (layer.options.weight || 0) + 1;
			this._redrawBounds = this._redrawBounds || new Bounds();
			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
		}
	},

	_redraw: function () {
		this._redrawRequest = null;

		if (this._redrawBounds) {
			this._redrawBounds.min._floor();
			this._redrawBounds.max._ceil();
		}

		this._clear(); // clear layers in redraw bounds
		this._draw(); // draw layers

		this._redrawBounds = null;
	},

	_clear: function () {
		var bounds = this._redrawBounds;
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
		} else {
			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
		}
	},

	_draw: function () {
		var layer, bounds = this._redrawBounds;
		this._ctx.save();
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.beginPath();
			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
			this._ctx.clip();
		}

		this._drawing = true;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
				layer._updatePath();
			}
		}

		this._drawing = false;

		this._ctx.restore();  // Restore state before clipping.
	},

	_updatePoly: function (layer, closed) {
		if (!this._drawing) { return; }

		var i, j, len2, p,
		    parts = layer._parts,
		    len = parts.length,
		    ctx = this._ctx;

		if (!len) { return; }

		ctx.beginPath();

		for (i = 0; i < len; i++) {
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				p = parts[i][j];
				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
			}
			if (closed) {
				ctx.closePath();
			}
		}

		this._fillStroke(ctx, layer);

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_updateCircle: function (layer) {

		if (!this._drawing || layer._empty()) { return; }

		var p = layer._point,
		    ctx = this._ctx,
		    r = Math.max(Math.round(layer._radius), 1),
		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

		if (s !== 1) {
			ctx.save();
			ctx.scale(1, s);
		}

		ctx.beginPath();
		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

		if (s !== 1) {
			ctx.restore();
		}

		this._fillStroke(ctx, layer);
	},

	_fillStroke: function (ctx, layer) {
		var options = layer.options;

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fillStyle = options.fillColor || options.color;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke && options.weight !== 0) {
			if (ctx.setLineDash) {
				ctx.setLineDash(layer.options && layer.options._dashArray || []);
			}
			ctx.globalAlpha = options.opacity;
			ctx.lineWidth = options.weight;
			ctx.strokeStyle = options.color;
			ctx.lineCap = options.lineCap;
			ctx.lineJoin = options.lineJoin;
			ctx.stroke();
		}
	},

	// Canvas obviously doesn't have mouse events for individual drawn objects,
	// so we emulate that by calculating what's under the mouse on mousemove/click manually

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e);
		this._handleMouseHover(e, point);
	},


	_handleMouseOut: function (e) {
		var layer = this._hoveredLayer;
		if (layer) {
			// if we're leaving the layer, fire mouseout
			removeClass(this._container, 'leaflet-interactive');
			this._fireEvent([layer], e, 'mouseout');
			this._hoveredLayer = null;
		}
	},

	_handleMouseHover: function (e, point) {
		var layer, candidateHoveredLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point)) {
				candidateHoveredLayer = layer;
			}
		}

		if (candidateHoveredLayer !== this._hoveredLayer) {
			this._handleMouseOut(e);

			if (candidateHoveredLayer) {
				addClass(this._container, 'leaflet-interactive'); // change cursor
				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
				this._hoveredLayer = candidateHoveredLayer;
			}
		}

		if (this._hoveredLayer) {
			this._fireEvent([this._hoveredLayer], e);
		}
	},

	_fireEvent: function (layers, e, type) {
		this._map._fireDOMEvent(e, type || e.type, layers);
	},

	_bringToFront: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			// Already last
			return;
		}
		if (prev) {
			prev.next = next;
		} else if (next) {
			// Update first entry unless this is the
			// single entry
			this._drawFirst = next;
		}

		order.prev = this._drawLast;
		this._drawLast.next = order;

		order.next = null;
		this._drawLast = order;

		this._requestRedraw(layer);
	},

	_bringToBack: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (prev) {
			prev.next = next;
		} else {
			// Already first
			return;
		}
		if (next) {
			next.prev = prev;
		} else if (prev) {
			// Update last entry unless this is the
			// single entry
			this._drawLast = prev;
		}

		order.prev = null;

		order.next = this._drawFirst;
		this._drawFirst.prev = order;
		this._drawFirst = order;

		this._requestRedraw(layer);
	}
});

// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function canvas$1(options) {
	return canvas ? new Canvas(options) : null;
}

/*
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */


var vmlCreate = (function () {
	try {
		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
		return function (name) {
			return document.createElement('<lvml:' + name + ' class="lvml">');
		};
	} catch (e) {
		return function (name) {
			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
		};
	}
})();


/*
 * @class SVG
 *
 *
 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
 * with old versions of Internet Explorer.
 */

// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
var vmlMixin = {

	_initContainer: function () {
		this._container = create$1('div', 'leaflet-vml-container');
	},

	_update: function () {
		if (this._map._animatingZoom) { return; }
		Renderer.prototype._update.call(this);
		this.fire('update');
	},

	_initPath: function (layer) {
		var container = layer._container = vmlCreate('shape');

		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

		container.coordsize = '1 1';

		layer._path = vmlCreate('path');
		container.appendChild(layer._path);

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		var container = layer._container;
		this._container.appendChild(container);

		if (layer.options.interactive) {
			layer.addInteractiveTarget(container);
		}
	},

	_removePath: function (layer) {
		var container = layer._container;
		remove(container);
		layer.removeInteractiveTarget(container);
		delete this._layers[stamp(layer)];
	},

	_updateStyle: function (layer) {
		var stroke = layer._stroke,
		    fill = layer._fill,
		    options = layer.options,
		    container = layer._container;

		container.stroked = !!options.stroke;
		container.filled = !!options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = layer._stroke = vmlCreate('stroke');
			}
			container.appendChild(stroke);
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			stroke.endcap = options.lineCap.replace('butt', 'flat');
			stroke.joinstyle = options.lineJoin;

		} else if (stroke) {
			container.removeChild(stroke);
			layer._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = layer._fill = vmlCreate('fill');
			}
			container.appendChild(fill);
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			layer._fill = null;
		}
	},

	_updateCircle: function (layer) {
		var p = layer._point.round(),
		    r = Math.round(layer._radius),
		    r2 = Math.round(layer._radiusY || r);

		this._setPath(layer, layer._empty() ? 'M0 0' :
			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
	},

	_setPath: function (layer, path) {
		layer._path.v = path;
	},

	_bringToFront: function (layer) {
		toFront(layer._container);
	},

	_bringToBack: function (layer) {
		toBack(layer._container);
	}
};

var create$2 = vml ? vmlCreate : svgCreate;

/*
 * @class SVG
 * @inherits Renderer
 * @aka L.SVG
 *
 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
 * available in all web browsers, notably Android 2.x and 3.x.
 *
 * Although SVG is not available on IE7 and IE8, these browsers support
 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
 * (a now deprecated technology), and the SVG renderer will fall back to VML in
 * this case.
 *
 * @example
 *
 * Use SVG by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.svg()
 * });
 * ```
 *
 * Use a SVG renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.svg({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var SVG = Renderer.extend({

	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.zoomstart = this._onZoomStart;
		return events;
	},

	_initContainer: function () {
		this._container = create$2('svg');

		// makes it possible to click through svg root; we'll reset it back in individual paths
		this._container.setAttribute('pointer-events', 'none');

		this._rootGroup = create$2('g');
		this._container.appendChild(this._rootGroup);
	},

	_destroyContainer: function () {
		remove(this._container);
		off(this._container);
		delete this._container;
		delete this._rootGroup;
		delete this._svgSize;
	},

	_onZoomStart: function () {
		// Drag-then-pinch interactions might mess up the center and zoom.
		// In this case, the easiest way to prevent this is re-do the renderer
		//   bounds and padding when the zooming starts.
		this._update();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    size = b.getSize(),
		    container = this._container;

		// set size of svg-container if changed
		if (!this._svgSize || !this._svgSize.equals(size)) {
			this._svgSize = size;
			container.setAttribute('width', size.x);
			container.setAttribute('height', size.y);
		}

		// movement: update container viewBox so that we don't have to change coordinates of individual layers
		setPosition(container, b.min);
		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

		this.fire('update');
	},

	// methods below are called by vector layers implementations

	_initPath: function (layer) {
		var path = layer._path = create$2('path');

		// @namespace Path
		// @option className: String = null
		// Custom class name set on an element. Only for SVG renderer.
		if (layer.options.className) {
			addClass(path, layer.options.className);
		}

		if (layer.options.interactive) {
			addClass(path, 'leaflet-interactive');
		}

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		if (!this._rootGroup) { this._initContainer(); }
		this._rootGroup.appendChild(layer._path);
		layer.addInteractiveTarget(layer._path);
	},

	_removePath: function (layer) {
		remove(layer._path);
		layer.removeInteractiveTarget(layer._path);
		delete this._layers[stamp(layer)];
	},

	_updatePath: function (layer) {
		layer._project();
		layer._update();
	},

	_updateStyle: function (layer) {
		var path = layer._path,
		    options = layer.options;

		if (!path) { return; }

		if (options.stroke) {
			path.setAttribute('stroke', options.color);
			path.setAttribute('stroke-opacity', options.opacity);
			path.setAttribute('stroke-width', options.weight);
			path.setAttribute('stroke-linecap', options.lineCap);
			path.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				path.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				path.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				path.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				path.removeAttribute('stroke-dashoffset');
			}
		} else {
			path.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			path.setAttribute('fill', options.fillColor || options.color);
			path.setAttribute('fill-opacity', options.fillOpacity);
			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			path.setAttribute('fill', 'none');
		}
	},

	_updatePoly: function (layer, closed) {
		this._setPath(layer, pointsToPath(layer._parts, closed));
	},

	_updateCircle: function (layer) {
		var p = layer._point,
		    r = Math.max(Math.round(layer._radius), 1),
		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

		// drawing a circle with two half-arcs
		var d = layer._empty() ? 'M0 0' :
			'M' + (p.x - r) + ',' + p.y +
			arc + (r * 2) + ',0 ' +
			arc + (-r * 2) + ',0 ';

		this._setPath(layer, d);
	},

	_setPath: function (layer, path) {
		layer._path.setAttribute('d', path);
	},

	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
	_bringToFront: function (layer) {
		toFront(layer._path);
	},

	_bringToBack: function (layer) {
		toBack(layer._path);
	}
});

if (vml) {
	SVG.include(vmlMixin);
}

// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function svg$1(options) {
	return svg || vml ? new SVG(options) : null;
}

Map.include({
	// @namespace Map; @method getRenderer(layer: Path): Renderer
	// Returns the instance of `Renderer` that should be used to render the given
	// `Path`. It will ensure that the `renderer` options of the map and paths
	// are respected, and that the renderers do exist on the map.
	getRenderer: function (layer) {
		// @namespace Path; @option renderer: Renderer
		// Use this specific instance of `Renderer` for this path. Takes
		// precedence over the map's [default renderer](#map-renderer).
		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

		if (!renderer) {
			renderer = this._renderer = this._createRenderer();
		}

		if (!this.hasLayer(renderer)) {
			this.addLayer(renderer);
		}
		return renderer;
	},

	_getPaneRenderer: function (name) {
		if (name === 'overlayPane' || name === undefined) {
			return false;
		}

		var renderer = this._paneRenderers[name];
		if (renderer === undefined) {
			renderer = this._createRenderer({pane: name});
			this._paneRenderers[name] = renderer;
		}
		return renderer;
	},

	_createRenderer: function (options) {
		// @namespace Map; @option preferCanvas: Boolean = false
		// Whether `Path`s should be rendered on a `Canvas` renderer.
		// By default, all `Path`s are rendered in a `SVG` renderer.
		return (this.options.preferCanvas && canvas$1(options)) || svg$1(options);
	}
});

/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

/*
 * @class Rectangle
 * @aka L.Rectangle
 * @inherits Polygon
 *
 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
 *
 * @example
 *
 * ```js
 * // define rectangle geographical bounds
 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
 *
 * // create an orange rectangle
 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
 *
 * // zoom the map to the rectangle bounds
 * map.fitBounds(bounds);
 * ```
 *
 */


var Rectangle = Polygon.extend({
	initialize: function (latLngBounds, options) {
		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	// @method setBounds(latLngBounds: LatLngBounds): this
	// Redraws the rectangle with the passed bounds.
	setBounds: function (latLngBounds) {
		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = toLatLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});


// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function rectangle(latLngBounds, options) {
	return new Rectangle(latLngBounds, options);
}

SVG.create = create$2;
SVG.pointsToPath = pointsToPath;

GeoJSON.geometryToLayer = geometryToLayer;
GeoJSON.coordsToLatLng = coordsToLatLng;
GeoJSON.coordsToLatLngs = coordsToLatLngs;
GeoJSON.latLngToCoords = latLngToCoords;
GeoJSON.latLngsToCoords = latLngsToCoords;
GeoJSON.getFeature = getFeature;
GeoJSON.asFeature = asFeature;

/*
 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
 * (zoom to a selected bounding box), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option boxZoom: Boolean = true
	// Whether the map can be zoomed to a rectangular area specified by
	// dragging the mouse while pressing the shift key.
	boxZoom: true
});

var BoxZoom = Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
		this._resetStateTimeout = 0;
		map.on('unload', this._destroy, this);
	},

	addHooks: function () {
		on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		off(this._container, 'mousedown', this._onMouseDown, this);
	},

	moved: function () {
		return this._moved;
	},

	_destroy: function () {
		remove(this._pane);
		delete this._pane;
	},

	_resetState: function () {
		this._resetStateTimeout = 0;
		this._moved = false;
	},

	_clearDeferredResetState: function () {
		if (this._resetStateTimeout !== 0) {
			clearTimeout(this._resetStateTimeout);
			this._resetStateTimeout = 0;
		}
	},

	_onMouseDown: function (e) {
		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

		// Clear the deferred resetState if it hasn't executed yet, otherwise it
		// will interrupt the interaction and orphan a box element in the container.
		this._clearDeferredResetState();
		this._resetState();

		disableTextSelection();
		disableImageDrag();

		this._startPoint = this._map.mouseEventToContainerPoint(e);

		on(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._moved = true;

			this._box = create$1('div', 'leaflet-zoom-box', this._container);
			addClass(this._container, 'leaflet-crosshair');

			this._map.fire('boxzoomstart');
		}

		this._point = this._map.mouseEventToContainerPoint(e);

		var bounds = new Bounds(this._point, this._startPoint),
		    size = bounds.getSize();

		setPosition(this._box, bounds.min);

		this._box.style.width  = size.x + 'px';
		this._box.style.height = size.y + 'px';
	},

	_finish: function () {
		if (this._moved) {
			remove(this._box);
			removeClass(this._container, 'leaflet-crosshair');
		}

		enableTextSelection();
		enableImageDrag();

		off(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseUp: function (e) {
		if ((e.which !== 1) && (e.button !== 1)) { return; }

		this._finish();

		if (!this._moved) { return; }
		// Postpone to next JS tick so internal click event handling
		// still see it as "moved".
		this._clearDeferredResetState();
		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

		var bounds = new LatLngBounds(
		        this._map.containerPointToLatLng(this._startPoint),
		        this._map.containerPointToLatLng(this._point));

		this._map
			.fitBounds(bounds)
			.fire('boxzoomend', {boxZoomBounds: bounds});
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

// @namespace Map
// @section Interaction Options

Map.mergeOptions({
	// @option doubleClickZoom: Boolean|String = true
	// Whether the map can be zoomed in by double clicking on it and
	// zoomed out by double clicking while holding shift. If passed
	// `'center'`, double-click zoom will zoom to the center of the
	//  view regardless of where the mouse was.
	doubleClickZoom: true
});

var DoubleClickZoom = Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    oldZoom = map.getZoom(),
		    delta = map.options.zoomDelta,
		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option dragging: Boolean = true
	// Whether the map be draggable with mouse/touch or not.
	dragging: true,

	// @section Panning Inertia Options
	// @option inertia: Boolean = *
	// If enabled, panning of the map will have an inertia effect where
	// the map builds momentum while dragging and continues moving in
	// the same direction for some time. Feels especially nice on touch
	// devices. Enabled by default unless running on old Android devices.
	inertia: !android23,

	// @option inertiaDeceleration: Number = 3000
	// The rate with which the inertial movement slows down, in pixels/second².
	inertiaDeceleration: 3400, // px/s^2

	// @option inertiaMaxSpeed: Number = Infinity
	// Max speed of the inertial movement, in pixels/second.
	inertiaMaxSpeed: Infinity, // px/s

	// @option easeLinearity: Number = 0.2
	easeLinearity: 0.2,

	// TODO refactor, move to CRS
	// @option worldCopyJump: Boolean = false
	// With this option enabled, the map tracks when you pan to another "copy"
	// of the world and seamlessly jumps to the original one so that all overlays
	// like markers and vector layers are still visible.
	worldCopyJump: false,

	// @option maxBoundsViscosity: Number = 0.0
	// If `maxBounds` is set, this option will control how solid the bounds
	// are when dragging the map around. The default value of `0.0` allows the
	// user to drag outside the bounds at normal speed, higher values will
	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
	// solid, preventing the user from dragging outside the bounds.
	maxBoundsViscosity: 0.0
});

var Drag = Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new Draggable(map._mapPane, map._container);

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this);

			this._draggable.on('predrag', this._onPreDragLimit, this);
			if (map.options.worldCopyJump) {
				this._draggable.on('predrag', this._onPreDragWrap, this);
				map.on('zoomend', this._onZoomEnd, this);

				map.whenReady(this._onZoomEnd, this);
			}
		}
		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
		this._draggable.enable();
		this._positions = [];
		this._times = [];
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-grab');
		removeClass(this._map._container, 'leaflet-touch-drag');
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	moving: function () {
		return this._draggable && this._draggable._moving;
	},

	_onDragStart: function () {
		var map = this._map;

		map._stop();
		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
			var bounds = toLatLngBounds(this._map.options.maxBounds);

			this._offsetLimit = toBounds(
				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
					.add(this._map.getSize()));

			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
		} else {
			this._offsetLimit = null;
		}

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function (e) {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			this._prunePositions(time);
		}

		this._map
		    .fire('move', e)
		    .fire('drag', e);
	},

	_prunePositions: function (time) {
		while (this._positions.length > 1 && time - this._times[0] > 50) {
			this._positions.shift();
			this._times.shift();
		}
	},

	_onZoomEnd: function () {
		var pxCenter = this._map.getSize().divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
	},

	_viscousLimit: function (value, threshold) {
		return value - (value - threshold) * this._viscosity;
	},

	_onPreDragLimit: function () {
		if (!this._viscosity || !this._offsetLimit) { return; }

		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

		var limit = this._offsetLimit;
		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

		this._draggable._newPos = this._draggable._startPos.add(offset);
	},

	_onPreDragWrap: function () {
		// TODO refactor to be able to adjust map pane position after zoom
		var worldWidth = this._worldWidth,
		    halfWidth = Math.round(worldWidth / 2),
		    dx = this._initialWorldOffset,
		    x = this._draggable._newPos.x,
		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._absPos = this._draggable._newPos.clone();
		this._draggable._newPos.x = newX;
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,

		    noInertia = !options.inertia || this._times.length < 2;

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');

		} else {
			this._prunePositions(+new Date());

			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x && !offset.y) {
				map.fire('moveend');

			} else {
				offset = map._limitOffset(offset, map.options.maxBounds);

				requestAnimFrame(function () {
					map.panBy(offset, {
						duration: decelerationDuration,
						easeLinearity: ease,
						noMoveStart: true,
						animate: true
					});
				});
			}
		}
	}
});

// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Map.addInitHook('addHandler', 'dragging', Drag);

/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

// @namespace Map
// @section Keyboard Navigation Options
Map.mergeOptions({
	// @option keyboard: Boolean = true
	// Makes the map focusable and allows users to navigate the map with keyboard
	// arrows and `+`/`-` keys.
	keyboard: true,

	// @option keyboardPanDelta: Number = 80
	// Amount of pixels to pan when pressing an arrow key.
	keyboardPanDelta: 80
});

var Keyboard = Handler.extend({

	keyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 54, 173]
	},

	initialize: function (map) {
		this._map = map;

		this._setPanDelta(map.options.keyboardPanDelta);
		this._setZoomDelta(map.options.zoomDelta);
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex <= 0) {
			container.tabIndex = '0';
		}

		on(container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.on({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	removeHooks: function () {
		this._removeHooks();

		off(this._map._container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.off({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	_onMouseDown: function () {
		if (this._focused) { return; }

		var body = document.body,
		    docEl = document.documentElement,
		    top = body.scrollTop || docEl.scrollTop,
		    left = body.scrollLeft || docEl.scrollLeft;

		this._map._container.focus();

		window.scrollTo(left, top);
	},

	_onFocus: function () {
		this._focused = true;
		this._map.fire('focus');
	},

	_onBlur: function () {
		this._focused = false;
		this._map.fire('blur');
	},

	_setPanDelta: function (panDelta) {
		var keys = this._panKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * panDelta, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [panDelta, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, panDelta];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * panDelta];
		}
	},

	_setZoomDelta: function (zoomDelta) {
		var keys = this._zoomKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoomDelta;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoomDelta;
		}
	},

	_addHooks: function () {
		on(document, 'keydown', this._onKeyDown, this);
	},

	_removeHooks: function () {
		off(document, 'keydown', this._onKeyDown, this);
	},

	_onKeyDown: function (e) {
		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

		var key = e.keyCode,
		    map = this._map,
		    offset;

		if (key in this._panKeys) {
			if (!map._panAnim || !map._panAnim._inProgress) {
				offset = this._panKeys[key];
				if (e.shiftKey) {
					offset = toPoint(offset).multiplyBy(3);
				}

				map.panBy(offset);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}
			}
		} else if (key in this._zoomKeys) {
			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
			map.closePopup();

		} else {
			return;
		}

		stop(e);
	}
});

// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Map.addInitHook('addHandler', 'keyboard', Keyboard);

/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Mousewheel options
	// @option scrollWheelZoom: Boolean|String = true
	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
	// it will zoom to the center of the view regardless of where the mouse was.
	scrollWheelZoom: true,

	// @option wheelDebounceTime: Number = 40
	// Limits the rate at which a wheel can fire (in milliseconds). By default
	// user can't zoom via wheel more often than once per 40 ms.
	wheelDebounceTime: 40,

	// @option wheelPxPerZoomLevel: Number = 60
	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
	// mean a change of one full zoom level. Smaller values will make wheel-zooming
	// faster (and vice versa).
	wheelPxPerZoomLevel: 60
});

var ScrollWheelZoom = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'mousewheel', this._onWheelScroll, this);

		this._delta = 0;
	},

	removeHooks: function () {
		off(this._map._container, 'mousewheel', this._onWheelScroll, this);
	},

	_onWheelScroll: function (e) {
		var delta = getWheelDelta(e);

		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(bind(this._performZoom, this), left);

		stop(e);
	},

	_performZoom: function () {
		var map = this._map,
		    zoom = map.getZoom(),
		    snap = this._map.options.zoomSnap || 0;

		map._stop(); // stop panning and fly animations if any

		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			map.setZoom(zoom + delta);
		} else {
			map.setZoomAround(this._lastMousePos, zoom + delta);
		}
	}
});

// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option tap: Boolean = true
	// Enables mobile hacks for supporting instant taps (fixing 200ms click
	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
	tap: true,

	// @option tapTolerance: Number = 15
	// The max number of pixels a user can shift his finger during touch
	// for it to be considered a valid tap.
	tapTolerance: 15
});

var Tap = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onDown: function (e) {
		if (!e.touches) { return; }

		preventDefault(e);

		this._fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			this._fireClick = false;
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    el = first.target;

		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (el.tagName && el.tagName.toLowerCase() === 'a') {
			addClass(el, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		this._holdTimeout = setTimeout(bind(function () {
			if (this._isTapValid()) {
				this._fireClick = false;
				this._onUp();
				this._simulateEvent('contextmenu', first);
			}
		}, this), 1000);

		this._simulateEvent('mousedown', first);

		on(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);
	},

	_onUp: function (e) {
		clearTimeout(this._holdTimeout);

		off(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);

		if (this._fireClick && e && e.changedTouches) {

			var first = e.changedTouches[0],
			    el = first.target;

			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
				removeClass(el, 'leaflet-active');
			}

			this._simulateEvent('mouseup', first);

			// simulate click if the touch didn't move too much
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		this._newPos = new Point(first.clientX, first.clientY);
		this._simulateEvent('mousemove', first);
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		e.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
		        type, true, true, window, 1,
		        e.screenX, e.screenY,
		        e.clientX, e.clientY,
		        false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});

// @section Handlers
// @property tap: Handler
// Mobile touch hacks (quick tap and touch hold) handler.
if (touch && !pointer) {
	Map.addInitHook('addHandler', 'tap', Tap);
}

/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option touchZoom: Boolean|String = *
	// Whether the map can be zoomed by touch-dragging with two fingers. If
	// passed `'center'`, it will zoom to the center of the view regardless of
	// where the touch events (fingers) were. Enabled for touch-capable web
	// browsers except for old Androids.
	touchZoom: touch && !android23,

	// @option bounceAtZoomLimits: Boolean = true
	// Set it to false if you don't want the map to zoom beyond min/max zoom
	// and then bounce back when pinch-zooming.
	bounceAtZoomLimits: true
});

var TouchZoom = Handler.extend({
	addHooks: function () {
		addClass(this._map._container, 'leaflet-touch-zoom');
		on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-touch-zoom');
		off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;
		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

		this._centerPoint = map.getSize()._divideBy(2);
		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
		if (map.options.touchZoom !== 'center') {
			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
		}

		this._startDist = p1.distanceTo(p2);
		this._startZoom = map.getZoom();

		this._moved = false;
		this._zooming = true;

		map._stop();

		on(document, 'touchmove', this._onTouchMove, this);
		on(document, 'touchend', this._onTouchEnd, this);

		preventDefault(e);
	},

	_onTouchMove: function (e) {
		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var map = this._map,
		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
		    scale = p1.distanceTo(p2) / this._startDist;

		this._zoom = map.getScaleZoom(scale, this._startZoom);

		if (!map.options.bounceAtZoomLimits && (
			(this._zoom < map.getMinZoom() && scale < 1) ||
			(this._zoom > map.getMaxZoom() && scale > 1))) {
			this._zoom = map._limitZoom(this._zoom);
		}

		if (map.options.touchZoom === 'center') {
			this._center = this._startLatLng;
			if (scale === 1) { return; }
		} else {
			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
		}

		if (!this._moved) {
			map._moveStart(true, false);
			this._moved = true;
		}

		cancelAnimFrame(this._animRequest);

		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
		this._animRequest = requestAnimFrame(moveFn, this, true);

		preventDefault(e);
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		this._zooming = false;
		cancelAnimFrame(this._animRequest);

		off(document, 'touchmove', this._onTouchMove);
		off(document, 'touchend', this._onTouchEnd);

		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
		if (this._map.options.zoomAnimation) {
			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
		} else {
			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
		}
	}
});

// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

Map.BoxZoom = BoxZoom;
Map.DoubleClickZoom = DoubleClickZoom;
Map.Drag = Drag;
Map.Keyboard = Keyboard;
Map.ScrollWheelZoom = ScrollWheelZoom;
Map.Tap = Tap;
Map.TouchZoom = TouchZoom;

Object.freeze = freeze;

exports.version = version;
exports.Control = Control;
exports.control = control;
exports.Browser = Browser;
exports.Evented = Evented;
exports.Mixin = Mixin;
exports.Util = Util;
exports.Class = Class;
exports.Handler = Handler;
exports.extend = extend;
exports.bind = bind;
exports.stamp = stamp;
exports.setOptions = setOptions;
exports.DomEvent = DomEvent;
exports.DomUtil = DomUtil;
exports.PosAnimation = PosAnimation;
exports.Draggable = Draggable;
exports.LineUtil = LineUtil;
exports.PolyUtil = PolyUtil;
exports.Point = Point;
exports.point = toPoint;
exports.Bounds = Bounds;
exports.bounds = toBounds;
exports.Transformation = Transformation;
exports.transformation = toTransformation;
exports.Projection = index;
exports.LatLng = LatLng;
exports.latLng = toLatLng;
exports.LatLngBounds = LatLngBounds;
exports.latLngBounds = toLatLngBounds;
exports.CRS = CRS;
exports.GeoJSON = GeoJSON;
exports.geoJSON = geoJSON;
exports.geoJson = geoJson;
exports.Layer = Layer;
exports.LayerGroup = LayerGroup;
exports.layerGroup = layerGroup;
exports.FeatureGroup = FeatureGroup;
exports.featureGroup = featureGroup;
exports.ImageOverlay = ImageOverlay;
exports.imageOverlay = imageOverlay;
exports.VideoOverlay = VideoOverlay;
exports.videoOverlay = videoOverlay;
exports.DivOverlay = DivOverlay;
exports.Popup = Popup;
exports.popup = popup;
exports.Tooltip = Tooltip;
exports.tooltip = tooltip;
exports.Icon = Icon;
exports.icon = icon;
exports.DivIcon = DivIcon;
exports.divIcon = divIcon;
exports.Marker = Marker;
exports.marker = marker;
exports.TileLayer = TileLayer;
exports.tileLayer = tileLayer;
exports.GridLayer = GridLayer;
exports.gridLayer = gridLayer;
exports.SVG = SVG;
exports.svg = svg$1;
exports.Renderer = Renderer;
exports.Canvas = Canvas;
exports.canvas = canvas$1;
exports.Path = Path;
exports.CircleMarker = CircleMarker;
exports.circleMarker = circleMarker;
exports.Circle = Circle;
exports.circle = circle;
exports.Polyline = Polyline;
exports.polyline = polyline;
exports.Polygon = Polygon;
exports.polygon = polygon;
exports.Rectangle = Rectangle;
exports.rectangle = rectangle;
exports.Map = Map;
exports.map = createMap;

var oldL = window.L;
exports.noConflict = function() {
	window.L = oldL;
	return this;
}

// Always export us to window global (see #2364)
window.L = exports;

})));
//# sourceMappingURL=leaflet-src.js.map


/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-1!./leaflet.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/leaflet/dist/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/css/map.css":
/*!*************************!*\
  !*** ./src/css/map.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./map.css */ "./node_modules/css-loader/dist/cjs.js?!./src/css/map.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/data/store.json":
/*!*****************************!*\
  !*** ./src/data/store.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, default */
/***/ (function(module) {

module.exports = [{"name":"モーリーファンタジー三笠店","address":"北海道三笠市岡山１０５９－１ イオン三笠１階","grid":[43.24406,141.805287],"machineNum":2,"prefId":1},{"name":"ちびっこ遊園地ジョイランドイオン伊達","address":"北海道伊達市末永町８－１ イオン伊達２Ｆ","grid":[42.473643,140.862474],"machineNum":1,"prefId":1},{"name":"イオン伊達店","address":"北海道伊達市末永町８－１ イオン伊達","grid":[42.473643,140.862474],"machineNum":1,"prefId":1},{"name":"ディノスパーク伊達店","address":"北海道伊達市末永町66番地1 ディノスパーク伊達","grid":[42.474037,140.867551],"machineNum":1,"prefId":1},{"name":"MEGAドン・キホーテ函館店","address":"北海道函館市美原１－７－１ ＭＥＧＡドン・キホーテ函館","grid":[41.813309,140.756333],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー函館店","address":"北海道函館市美原１－３－１ イトーヨーカドー函館","grid":[41.813432,140.757907],"machineNum":2,"prefId":1},{"name":"ディノスパーク函館昭和","address":"北海道函館市昭和３丁目２４－１８ ゲオパーク函館昭和１階","grid":[41.819269,140.734364],"machineNum":2,"prefId":1},{"name":"トイザらス函館店","address":"北海道函館市石川町５２－１５ ＣＥＮＴＲＥＭＡＲＵＹＡＭＡ","grid":[41.82465,140.7375],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー湯川店","address":"北海道函館市湯川町3-14-5 イオン湯川2F","grid":[41.777645,140.794043],"machineNum":1,"prefId":1},{"name":"宝島 函館店","address":"北海道函館市美原1-7-1 MEGAドン・キホーテ函館2階","grid":[41.813309,140.756333],"machineNum":1,"prefId":1},{"name":"ディノスパーク上磯","address":"北海道北斗市七重浜７－１４－１ スーパーセンタートライアル上磯","grid":[41.820699,140.696782],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー上磯店","address":"北海道北斗市七重浜4-44-1 イオン上磯1階","grid":[41.821483,140.712353],"machineNum":3,"prefId":1},{"name":"イオン北見店","address":"北海道北見市北進町１－１－１ イオン北見","grid":[43.808473,143.875571],"machineNum":2,"prefId":1},{"name":"イトーヨーカドー北見店","address":"北海道北見市光西町１８５ イトーヨーカドー北見","grid":[43.798328,143.870174],"machineNum":1,"prefId":1},{"name":"イーストモール","address":"北海道北見市端野町三区５７２－１ 東武イーストモール橋野","grid":[43.841309,143.928588],"machineNum":1,"prefId":1},{"name":"ディノスパーク北見","address":"北海道北見市西三輪５―１―１６ ディノスパーク北見","grid":[43.796597,143.842609],"machineNum":1,"prefId":1},{"name":"東武端野店アミューズメントシティ","address":"北海道北見市端野町三区５７２－１ 東武イーストモール橋野","grid":[43.841309,143.928588],"machineNum":1,"prefId":1},{"name":"アピナ新千歳空港店","address":"北海道千歳市美々１２９２番地３３ アピナ新千歳空港４Ｆ","grid":[42.787499,141.681109],"machineNum":1,"prefId":1},{"name":"イオン千歳キッズ・パーク","address":"北海道千歳市栄町６－６１ イオン千歳","grid":[42.82904,141.648664],"machineNum":1,"prefId":1},{"name":"イオン千歳店","address":"北海道千歳市栄町６－５１ イオン千歳","grid":[42.828909,141.648409],"machineNum":2,"prefId":1},{"name":"ディノスパークちとせモール","address":"北海道千歳市勇舞8丁目1番地1","grid":[42.854081,141.626543],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー名寄店","address":"北海道名寄市字徳田８０番地１ イオン名寄ショッピングセンター２階","grid":[44.338687,142.452831],"machineNum":1,"prefId":1},{"name":"イオン室蘭アミューズメントランド","address":"北海道室蘭市東町2丁目4-32 イオン室蘭","grid":[42.345163,141.026219],"machineNum":1,"prefId":1},{"name":"スーパーアークス中島店","address":"北海道室蘭市中島本町１－４－４ スーパーアークス中島","grid":[42.352807,141.012821],"machineNum":1,"prefId":1},{"name":"ディノスパーク室蘭中央","address":"北海道室蘭市中央町1-8","grid":[42.319013,140.970696],"machineNum":1,"prefId":1},{"name":"長崎屋室蘭中島店","address":"北海道室蘭市中島町１－１９－１１ 長崎屋室蘭中島","grid":[42.353786,141.017536],"machineNum":1,"prefId":1},{"name":"イオン小樽店","address":"北海道小樽市築港１１－６ ウイングベイ小樽","grid":[43.184392,141.021713],"machineNum":1,"prefId":1},{"name":"ナムコランド小樽","address":"北海道小樽市築港１１番５号 ウイングベイ小樽２階","grid":[43.183769,141.023161],"machineNum":1,"prefId":1},{"name":"長崎屋小樽店","address":"北海道小樽市稲穂２－２０－１ 長崎屋小樽","grid":[43.197369,140.995284],"machineNum":1,"prefId":1},{"name":"イオン岩見沢店","address":"北海道岩見沢市大和４条８－１ イオン岩見沢","grid":[43.184503,141.741088],"machineNum":1,"prefId":1},{"name":"MEGAドン・キホーテ西帯広店","address":"北海道帯広市西２１条南４－１ ＭＥＧＡドン・キホーテ西帯広","grid":[42.91191,143.143822],"machineNum":1,"prefId":1},{"name":"イオン帯広キッズ・パーク","address":"北海道帯広市西４条南２０丁目 イオン帯広","grid":[42.908836,143.200688],"machineNum":1,"prefId":1},{"name":"イオン帯広店","address":"北海道帯広市西４条南２０－１ イオン帯広","grid":[42.908825,143.20039],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー帯広店","address":"北海道帯広市稲田町南８線西１０－１ イトーヨーカドー帯広","grid":[42.890478,143.199847],"machineNum":1,"prefId":1},{"name":"ディノスパーク帯広","address":"北海道帯広市白樺１６条西２丁目 ドリームタウン白樺","grid":[42.9187,143.173276],"machineNum":1,"prefId":1},{"name":"ディノスパーク帯広稲田","address":"北海道帯広市稲田町南８線西１２－１ 帯広スズランボウル","grid":[42.890167,143.196327],"machineNum":1,"prefId":1},{"name":"ファンタジープラザ帯広店","address":"北海道帯広市西四条南１２－３ 長崎屋帯広２階","grid":[42.917987,143.199072],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー恵庭店","address":"北海道恵庭市恵み野西２－１ イトーヨーカドー恵庭","grid":[42.901473,141.575308],"machineNum":1,"prefId":1},{"name":"MEGAドン・キホーテ旭川店","address":"北海道旭川市春光１条８－１－６５ ＭＥＧＡドン・キホーテ旭川","grid":[43.798509,142.378234],"machineNum":1,"prefId":1},{"name":"SOYU Game Field 旭川西店","address":"北海道旭川市緑町２３－２１６１－３ イオン旭川西３階","grid":[43.793759,142.326937],"machineNum":1,"prefId":1},{"name":"おもちゃのヨシダ","address":"北海道旭川市本町３－４３７－２３８ おもちゃのヨシダ","grid":[43.78097,142.355906],"machineNum":1,"prefId":1},{"name":"イオン旭川永山店","address":"北海道旭川市永山３条１２－２－１１ イオン旭川永山","grid":[43.801531,142.421503],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー旭川店","address":"北海道旭川市六条１４－６４ イトーヨーカドー旭川","grid":[43.770883,142.365008],"machineNum":1,"prefId":1},{"name":"ソユーゲームフィールド旭川駅前","address":"北海道旭川市宮下通７－２－５ イオンモール旭川駅前４階","grid":[43.763693,142.357372],"machineNum":1,"prefId":1},{"name":"ディノスパーク旭川","address":"北海道旭川市大雪通り５丁目４９６－５ ディノスパーク旭川","grid":[43.779446,142.386955],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー旭川パルプ店","address":"北海道旭川市パルプ町1条2丁目505番2 ショッピングセンターパルプタウン1F","grid":[43.774159,142.385687],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー旭川西店","address":"北海道旭川市緑町２３－２１６１－３ イオン旭川西２階","grid":[43.793759,142.326937],"machineNum":4,"prefId":1},{"name":"遊ランド西御料店","address":"北海道旭川市西御料５条２丁目６４－１９ 遊ランド西御料","grid":[43.723805,142.369005],"machineNum":1,"prefId":1},{"name":"MAXIM HERO","address":"北海道札幌市北区北六条西６丁目 ＪＲ札幌駅高架下","grid":[43.067952,141.346007],"machineNum":1,"prefId":1},{"name":"MEGAドン・キホーテ新川店","address":"北海道札幌市北区新川２条７－３－２０ ＭＥＧＡドン・キホーテ新川","grid":[43.102691,141.310354],"machineNum":1,"prefId":1},{"name":"SOYU Game Field札幌苗穂店","address":"北海道札幌市東区東苗穂二条３－１－１ イオン札幌苗穂１階","grid":[43.080063,141.403285],"machineNum":1,"prefId":1},{"name":"namcoアリオ札幌","address":"北海道札幌市東区北七条東9-2-20","grid":[43.071551,141.370388],"machineNum":1,"prefId":1},{"name":"namco札幌エスタ店","address":"北海道札幌市中央区北5条西2丁目1番地1 札幌エスタ9階","grid":[43.06752,141.352831],"machineNum":3,"prefId":1},{"name":"げーむぱーくぎゃらくしー","address":"北海道札幌市白石区東札幌三条１丁目１－１ イーアス札幌２Ｆ","grid":[43.054045,141.383411],"machineNum":1,"prefId":1},{"name":"げーむぱーくぎゃらくしー西友西町店","address":"北海道札幌市西区西町南6-1-1","grid":[43.078122,141.288882],"machineNum":1,"prefId":1},{"name":"アドアーズ札幌北42条店","address":"北海道札幌市東区北42条東7丁目1-1","grid":[43.112087,141.355085],"machineNum":1,"prefId":1},{"name":"イオン札幌藻岩店","address":"北海道札幌市南区川沿２条２－１－１ イオン札幌藻岩","grid":[42.999335,141.336401],"machineNum":2,"prefId":1},{"name":"イトーヨーカドーアリオ札幌キッズ・パーク","address":"北海道札幌市東区北七条東９－２－２０ アリオ札幌３階","grid":[43.071551,141.370388],"machineNum":1,"prefId":1},{"name":"イトーヨーカドーアリオ札幌店","address":"北海道札幌市東区北7条東9-2-20 アリオ札幌","grid":[43.071551,141.370388],"machineNum":2,"prefId":1},{"name":"イトーヨーカドー屯田グルグル","address":"北海道札幌市北区屯田８条３－５－１ イトーヨカドー屯田","grid":[43.140249,141.340839],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー屯田店","address":"北海道札幌市北区屯田八条３－５－１ イトーヨカドー屯田","grid":[43.140249,141.340839],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー琴似店","address":"北海道札幌市西区琴似２条１－４－１ イトーヨーカドー琴似","grid":[43.080715,141.305971],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー福住店","address":"北海道札幌市豊平区福住二条１－２－５ イトーヨーカドー福住","grid":[43.019872,141.403495],"machineNum":2,"prefId":1},{"name":"キャッツアイ新川店","address":"北海道札幌市北区新川二条７丁目１－７ キャッツアイ新川","grid":[43.107865,141.319805],"machineNum":2,"prefId":1},{"name":"キャッツアイ新札幌店","address":"北海道札幌市厚別区厚別東五条１丁目２９８－７ キャッツアイ新札幌","grid":[43.046127,141.474788],"machineNum":2,"prefId":1},{"name":"キャッツアイ清田店","address":"北海道札幌市清田区清田一条一丁目２０－１ キャッツアイ清田","grid":[43.004084,141.435274],"machineNum":1,"prefId":1},{"name":"キャッツアイ篠路店","address":"北海道札幌市北区篠路一条４丁目６－３０ キャッツアイ篠路","grid":[43.140638,141.357187],"machineNum":1,"prefId":1},{"name":"ゲームランド新さっぽろ店","address":"北海道札幌市厚別区厚別中央二条5丁目 カテプリさっぽろ 3F","grid":[43.038284,141.47224],"machineNum":2,"prefId":1},{"name":"コジマXビックカメラ イオン西岡店","address":"北海道札幌市豊平区 西岡3条3-4-1","grid":[43.018257,141.387557],"machineNum":1,"prefId":1},{"name":"ソユーゲームフィールド札幌発寒店","address":"北海道札幌市西区発寒八条１２－１－１ イオン札幌発寒ＳＣ３Ｆ","grid":[43.096062,141.277576],"machineNum":2,"prefId":1},{"name":"タイトーステーション　イオン札幌平岡店","address":"北海道札幌市清田区平岡三条５－２７６－１ イオン札幌平岡２Ｆ","grid":[42.998853,141.45809],"machineNum":1,"prefId":1},{"name":"タイトーステーション札幌狸小路2丁目店","address":"北海道札幌市中央区南三条西2-14","grid":[43.057331,141.355471],"machineNum":1,"prefId":1},{"name":"ディノスパーク札幌手稲店","address":"北海道札幌市手稲区前田１条１１丁目 ディノスパーク札幌手稲３階","grid":[43.121107,141.245189],"machineNum":2,"prefId":1},{"name":"ビックカメラ札幌店","address":"北海道札幌市中央区北５条西２－１ 札幌エスタ","grid":[43.067435,141.352881],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー手稲山口店","address":"北海道札幌市手稲区明日風６丁目１番１号 イオンスーパーセンター手稲山口１階","grid":[43.142097,141.233657],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌元町店","address":"北海道札幌市東区北３１条東１５丁目１－１ イオン札幌元町３階","grid":[43.101007,141.369228],"machineNum":4,"prefId":1},{"name":"モーリーファンタジー札幌平岡店","address":"北海道札幌市清田区平岡３条５丁目３－１ イオン札幌平岡２階","grid":[42.997065,141.458557],"machineNum":4,"prefId":1},{"name":"モーリーファンタジー札幌桑園店","address":"北海道札幌市中央区北８条西１４丁目２８番地 イオン札幌桑園２階","grid":[43.068386,141.333216],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー札幌琴似店","address":"北海道札幌市西区琴似2条4-2-2","grid":[43.076733,141.302882],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー札幌発寒店","address":"北海道札幌市西区発寒８条１２丁目１－１ イオン札幌発寒ＳＣ３階","grid":[43.096062,141.277576],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー札幌苗穂店","address":"北海道札幌市東区東苗穂２条３丁目１番１号 イオン札幌苗穂２階","grid":[43.080063,141.403285],"machineNum":4,"prefId":1},{"name":"モーリーファンタジー札幌麻生店","address":"北海道札幌市北区北39条西4-1-5 ダイエー麻生4F","grid":[43.10729,141.339721],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー東札幌店","address":"北海道札幌市白石区東札幌3条2-1 イオン東札幌2F","grid":[43.052227,141.385402],"machineNum":1,"prefId":1},{"name":"ヨドバシカメラマルチメディア札幌","address":"北海道札幌市北区北６条西５－１－２２ ヨドバシカメラマルチメディア札幌","grid":[43.068294,141.347586],"machineNum":2,"prefId":1},{"name":"西友厚別店","address":"北海道札幌市厚別区厚別西４条６－７００－１２６ 西友厚別","grid":[43.053658,141.469174],"machineNum":1,"prefId":1},{"name":"ｎａｍｃｏサッポロファクトリー店","address":"北海道札幌市中央区北１条東４丁目１番地１ サッポロファクトリー","grid":[43.064437,141.362332],"machineNum":1,"prefId":1},{"name":"PALO江別店","address":"北海道江別市幸町35 イオン江別3階","grid":[43.096737,141.533932],"machineNum":2,"prefId":1},{"name":"PALO滝川店","address":"北海道滝川市東町2-29-1 イオン滝川1階","grid":[43.554237,141.931274],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー登別店","address":"北海道登別市若山町４－３３－１ イオン登別３階","grid":[42.381293,141.068585],"machineNum":2,"prefId":1},{"name":"モーリーファンタジー石狩緑苑台店","address":"北海道石狩市緑苑台中央１丁目２番 イオンスーパーセンター石狩緑苑台１階","grid":[43.158609,141.335347],"machineNum":3,"prefId":1},{"name":"光速憧路","address":"北海道稚内市港５－８－１５ 光速憧路","grid":[45.400741,141.68089],"machineNum":1,"prefId":1},{"name":"西條 稚内店","address":"北海道稚内市大黒4-7-1 西條稚内","grid":[45.397626,141.69218],"machineNum":1,"prefId":1},{"name":"PALO網走店","address":"北海道網走市駒場北5-83 駒場ショッピングタウン","grid":[44.002138,144.284227],"machineNum":1,"prefId":1},{"name":"MEGAドン・キホーテ苫小牧店","address":"北海道苫小牧市木場町１－６－１ ＭＥＧＡドン・キホーテ苫小牧","grid":[42.641211,141.595172],"machineNum":1,"prefId":1},{"name":"PALO苫小牧店","address":"北海道苫小牧市糸井135-1 トライアル苫小牧G棟","grid":[42.613753,141.523616],"machineNum":1,"prefId":1},{"name":"ディノスパーク苫小牧","address":"北海道苫小牧市柳町３丁目１－２０ イオン苫小牧２階","grid":[42.656167,141.64231],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー苫小牧店","address":"北海道苫小牧市柳町3-1-20 イオン苫小牧","grid":[42.656167,141.64231],"machineNum":4,"prefId":1},{"name":"タイトーステーションイオン釧路昭和店","address":"北海道釧路市昭和中央４－１８－１ イオン釧路昭和２Ｆ","grid":[43.026652,144.360011],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー釧路昭和店","address":"北海道釧路市昭和中央４－１８－１ イオン釧路昭和２階","grid":[43.026652,144.360011],"machineNum":3,"prefId":1},{"name":"イオン静内店","address":"北海道日高郡新ひだか町静内末広町２－２－１ イオン静内","grid":[42.343053,142.355538],"machineNum":1,"prefId":1},{"name":"キャッツアイ静内","address":"北海道日高郡新ひだか町静内木場町2-1-41","grid":[42.341484,142.354297],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー中標津店","address":"北海道標津郡中標津町南町3-10 東武サウスヒルズ1階","grid":[43.535813,144.978104],"machineNum":2,"prefId":1},{"name":"トイザらス帯広音更店","address":"北海道河東郡音更町木野大通西１７－１ スーパーオーケーセンター音更","grid":[42.971154,143.206642],"machineNum":1,"prefId":1},{"name":"PALO釧路店","address":"北海道釧路郡釧路町桂木１－１－７ イオン釧路２階","grid":[43.009194,144.404659],"machineNum":3,"prefId":1},{"name":"プラサカプコンつがる柏店","address":"青森県つがる市柏稲盛幾世４１ イオンモールつがる柏シネマ棟内１階","grid":[40.802423,140.416547],"machineNum":1,"prefId":2},{"name":"モーリーファンタジーつがる柏店","address":"青森県つがる市柏稲盛幾世４１－１ イオンモールつがる柏１階","grid":[40.803652,140.415956],"machineNum":1,"prefId":2},{"name":"PALOむつ店","address":"青森県むつ市中央2-7-8","grid":[41.286918,141.183732],"machineNum":2,"prefId":2},{"name":"モーリーファンタジー三沢店","address":"青森県三沢市松園町3-10-1 ビードルプラザ1階","grid":[40.675,141.363142],"machineNum":2,"prefId":2},{"name":"PALO五所川原店","address":"青森県五所川原市大字唐笠柳字藤巻641番1 アクロスプラザ五所川原","grid":[40.800867,140.461427],"machineNum":2,"prefId":2},{"name":"namcoエルムの街ショッピングセンター店","address":"青森県五所川原市大字唐笠柳字藤巻５１７－１ エルムの街ＳＣＣ棟２Ｆ","grid":[40.798686,140.453916],"machineNum":1,"prefId":2},{"name":"イトーヨーカドー八戸沼館店","address":"青森県八戸市沼館４－７－１１１ ピアドゥ八戸","grid":[40.52815,141.497482],"machineNum":2,"prefId":2},{"name":"ソピア八戸店","address":"青森県八戸市沼館４－７－１１２ ピアドゥ八戸Ｂ棟２階","grid":[40.527769,141.49726],"machineNum":1,"prefId":2},{"name":"ファンタジードーム八戸","address":"青森県八戸市江陽２－１４－１ ラピア八戸別棟","grid":[40.521879,141.503361],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー三春屋店","address":"青森県八戸市十三日町13 三春屋5F","grid":[40.508985,141.489367],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー八戸田向店","address":"青森県八戸市大字田向字毘沙門平２７－１ イオン八戸田向","grid":[40.491954,141.509531],"machineNum":2,"prefId":2},{"name":"モーリーファンタジー十和田店","address":"青森県十和田市大字相坂字六日町山１６６番１ イオンスーパーセンター十和田１階","grid":[40.603141,141.256951],"machineNum":2,"prefId":2},{"name":"モーリーファンタジー平賀店","address":"青森県平川市小和森上松岡１９３－１ マックスバリュ平賀１階","grid":[40.590663,140.566281],"machineNum":1,"prefId":2},{"name":"イトーヨーカドー弘前店","address":"青森県弘前市大字駅前３－２－１ イトーヨーカドー弘前","grid":[40.599741,140.481073],"machineNum":2,"prefId":2},{"name":"インフィニ店","address":"青森県弘前市城東北３－１０－１ さくら野百貨４階","grid":[40.606709,140.495914],"machineNum":1,"prefId":2},{"name":"ゲームフィールド弘前樋の口店","address":"青森県弘前市樋の口２－９－６ イオンタウン弘前樋の口","grid":[40.602726,140.444168],"machineNum":1,"prefId":2},{"name":"セガ弘前","address":"青森県弘前市末広１－３－３ セガワールドアクティバ","grid":[40.604114,140.499911],"machineNum":1,"prefId":2},{"name":"イオン青森店","address":"青森県青森市緑３－９－２ イオン青森","grid":[40.807586,140.75328],"machineNum":1,"prefId":2},{"name":"イトーヨーカドー青森店","address":"青森県青森市浜田１－１４－１ イトーヨーカドー青森","grid":[40.800853,140.748941],"machineNum":1,"prefId":2},{"name":"タイトーステーション青森アムゼ店","address":"青森県青森市緑３－９－２ イオン青森","grid":[40.807586,140.75328],"machineNum":1,"prefId":2},{"name":"タイトーステーション青森ガーラモール店","address":"青森県青森市三好２－３－１９ ガーラタウン２Ｆ","grid":[40.833023,140.702636],"machineNum":1,"prefId":2},{"name":"プレイランド青森店","address":"青森県青森市浜田１－１４－１ イトーヨーカドー青森２階","grid":[40.800847,140.749049],"machineNum":1,"prefId":2},{"name":"ラウンドワンスタジアム青森店","address":"青森県青森市浜田3-1-1 ラウンドワン青森","grid":[40.798685,140.748324],"machineNum":1,"prefId":2},{"name":"ラ・セラキッズ","address":"青森県青森市八重田４―２―１ ラ・セラ東バイパス","grid":[40.827516,140.800289],"machineNum":1,"prefId":2},{"name":"青森メトロポリス","address":"青森県青森市三好１－１５－８ ガーラタウン","grid":[40.834866,140.702444],"machineNum":1,"prefId":2},{"name":"PALO黒石店","address":"青森県黒石市富士見103番地3 アクロスプラザ黒石","grid":[40.667216,140.601473],"machineNum":2,"prefId":2},{"name":"モーリーファンタジー下田店","address":"青森県上北郡おいらせ町中野平４０－１ イオン下田２階","grid":[40.602358,141.416901],"machineNum":3,"prefId":2},{"name":"ユーズランド下田店","address":"青森県上北郡おいらせ町中野平４０－１ イオン下田１階","grid":[40.602358,141.416901],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー鶴田店","address":"青森県北津軽郡鶴田町大字鶴田字中泉245番地1 鶴田フットリバーモール1F","grid":[40.764421,140.441532],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー藤崎店","address":"青森県南津軽郡藤崎町大字西豊田１－７－１ イオン藤崎２階","grid":[40.656762,140.502139],"machineNum":2,"prefId":2},{"name":"モーリーファンタジースーパーセンター一関店","address":"岩手県一関市狐禅寺字石ノ瀬１１番１ イオンスーパーセンター一関１階","grid":[38.93961,141.153555],"machineNum":3,"prefId":3},{"name":"モーリーファンタジー一関店","address":"岩手県一関市山目字泥田８９－１ イオン一関２階","grid":[38.936962,141.112946],"machineNum":1,"prefId":3},{"name":"PALO久慈店","address":"岩手県久慈市長内町第30地割32-2 久慈ショッピングセンター1階","grid":[40.189799,141.785562],"machineNum":1,"prefId":3},{"name":"ニコアプレイランド","address":"岩手県二戸市米沢荒谷25 二戸ニコアショッピングセンター","grid":[40.283178,141.294276],"machineNum":1,"prefId":3},{"name":"アミューズメントゾーン北上店","address":"岩手県北上市本通り２丁目２－１ さくら野百貨北上４階","grid":[39.288685,141.115981],"machineNum":1,"prefId":3},{"name":"アメリカンパラダイス北上店","address":"岩手県北上市北鬼柳３２－４４ アメリカンパラダイス北上","grid":[39.286149,141.104755],"machineNum":1,"prefId":3},{"name":"イオン江釣子店","address":"岩手県北上市北鬼柳１９－６８ 江釣子パルショッピングセンター","grid":[39.293122,141.093884],"machineNum":1,"prefId":3},{"name":"イオンスーパーセンター水沢桜屋敷店","address":"岩手県奥州市水沢区字桜屋敷西２８－１０ イオンスーパーセンター水沢桜屋敷","grid":[39.124412,141.123521],"machineNum":1,"prefId":3},{"name":"サンキング","address":"岩手県奥州市水沢区横町2-1 メイプル4階","grid":[39.140747,141.141174],"machineNum":1,"prefId":3},{"name":"セガワールド水沢","address":"岩手県奥州市水沢区佐倉河字鐙田４－１ セガワールド水沢","grid":[39.152711,141.149348],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー前沢店","address":"岩手県奥州市前沢区向田２丁目８５ イオン前沢２階","grid":[39.052424,141.129671],"machineNum":2,"prefId":3},{"name":"DORAキッズ宮古店","address":"岩手県宮古市小山田2丁目2-1 マリンコープDORA2階","grid":[39.632114,141.942087],"machineNum":1,"prefId":3},{"name":"カバロ宮古店","address":"岩手県宮古市栄町３－３５ キャトル宮古４階　キッズキャトル内","grid":[39.64106,141.945988],"machineNum":1,"prefId":3},{"name":"ソユーゲームフィールド盛岡南店","address":"岩手県盛岡市本宮７－１－１ イオン盛岡南１Ｆ","grid":[39.684069,141.128553],"machineNum":1,"prefId":3},{"name":"タイトーステーション盛岡マッハランド店","address":"岩手県盛岡市上堂１－２－３８ タイトーステーション盛岡マッハランド","grid":[39.723757,141.126913],"machineNum":1,"prefId":3},{"name":"プラサカプコン盛岡店","address":"岩手県盛岡市上厨川前潟４－７－１ イオンモール盛岡","grid":[39.711477,141.098578],"machineNum":1,"prefId":3},{"name":"モーリーファンタジーイオン盛岡南店","address":"岩手県盛岡市本宮７－１－１ イオン盛岡南３階","grid":[39.684069,141.128553],"machineNum":4,"prefId":3},{"name":"モーリーファンタジー盛岡南店","address":"岩手県盛岡市津志田西２－１７－５０ 盛岡南ショッピングセンターサンサ１階","grid":[39.661956,141.148188],"machineNum":2,"prefId":3},{"name":"モーリーファンタジー盛岡店","address":"岩手県盛岡市前潟4-7-1 イオン盛岡","grid":[39.7116,141.098857],"machineNum":3,"prefId":3},{"name":"モーリーファンタジー盛岡渋民店","address":"岩手県盛岡市玉山区渋民字鶴飼２０番地－１ イオンスーパーセンター盛岡渋民１階","grid":[39.849976,141.172806],"machineNum":2,"prefId":3},{"name":"アルテマルカン桜台店","address":"岩手県花巻市桜台1-12-12 アルテマルカン桜台","grid":[39.39855,141.108132],"machineNum":1,"prefId":3},{"name":"イトーヨーカドー花巻店","address":"岩手県花巻市下小舟渡１１８－１ イトーヨーカドー花巻","grid":[39.393513,141.117825],"machineNum":1,"prefId":3},{"name":"ソユーファミリーゲームフィールド花巻店","address":"岩手県花巻市高木第１６地割６８－６ 銀河モール花巻","grid":[39.386047,141.135754],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー遠野店","address":"岩手県遠野市新穀町１－１１ 遠野ショッピングセンターとぴあ２階","grid":[39.330993,141.531956],"machineNum":1,"prefId":3},{"name":"ソユーゲームフィールド釜石店","address":"岩手県釜石市港町二丁目１－１ イオンタウン釜石３階","grid":[39.271386,141.881167],"machineNum":1,"prefId":3},{"name":"アミューズメントパークアルコ","address":"岩手県紫波郡矢巾町南矢幅7-425-3 ショッピングモールアルコ","grid":[39.611014,141.152417],"machineNum":1,"prefId":3},{"name":"ゲームランドプレーゴ金ヶ崎店","address":"岩手県胆沢郡金ケ崎町三ケ尻荒巻165 イオンスーパーセンター金ケ崎","grid":[39.219458,141.110267],"machineNum":1,"prefId":3},{"name":"GAMEBANK仙台泉","address":"宮城県仙台市泉区大沢２－５－４ ＧＡＭＥＢＡＮＫ仙台泉","grid":[38.352753,140.877403],"machineNum":1,"prefId":4},{"name":"namcoアリオ仙台泉店","address":"宮城県仙台市泉区泉中央一丁目五番地 アリオ仙台泉","grid":[38.324648,140.882228],"machineNum":1,"prefId":4},{"name":"イオン仙台店","address":"宮城県仙台市青葉区中央2-3-6","grid":[38.26066,140.875891],"machineNum":1,"prefId":4},{"name":"イトーヨーカドーアリオ仙台泉店","address":"宮城県仙台市泉区泉中央1-5-1 アリオ仙台泉","grid":[38.324605,140.882271],"machineNum":1,"prefId":4},{"name":"ゲームコーナー東部","address":"宮城県仙台市若林区六丁の目中町２６－６０ 斎喜東部ビル２階","grid":[38.250951,140.944025],"machineNum":1,"prefId":4},{"name":"ゲームフィールド仙台長町店","address":"宮城県仙台市太白区長町7-20-3","grid":[38.225644,140.876877],"machineNum":1,"prefId":4},{"name":"スイーツ・ハート仙台泉店","address":"宮城県仙台市泉区大沢１丁目５－１ イオン泉大沢ショッピングセンター２Ｆ","grid":[38.350076,140.880937],"machineNum":1,"prefId":4},{"name":"セガ仙台コロナワールド","address":"宮城県仙台市宮城野区福室字田中前一番５３－１ セガ仙台コロナワールド","grid":[38.260102,140.968677],"machineNum":1,"prefId":4},{"name":"タイトーステーション仙台クリスロード店","address":"宮城県仙台市青葉区中央２－３－２５","grid":[38.260987,140.875646],"machineNum":1,"prefId":4},{"name":"タイトーステーション仙台ベガロポリス店","address":"宮城県仙台市太白区西多賀５－２４－１ ベガロポリス","grid":[38.219414,140.848952],"machineNum":1,"prefId":4},{"name":"トイザらス仙台泉大沢店","address":"宮城県仙台市泉区大沢１－５－１ イオン泉大沢ショッピングセンター","grid":[38.350076,140.880937],"machineNum":1,"prefId":4},{"name":"ビーカム松森店","address":"宮城県仙台市泉区松森斎兵衛58-1 ビーカム松森","grid":[38.304542,140.909849],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー仙台中山店","address":"宮城県仙台市泉区南中山1-35-40 イオン仙台中山","grid":[38.298532,140.824754],"machineNum":3,"prefId":4},{"name":"モーリーファンタジー鈎取店","address":"宮城県仙台市太白区鈎取本町1-21-1 鈎取ショッピングセンター","grid":[38.21976,140.837661],"machineNum":1,"prefId":4},{"name":"ヨドバシカメラマルチメディア仙台","address":"宮城県仙台市宮城野区榴岡１－２－１３ ヨドバシカメラマルチメディア仙台","grid":[38.259136,140.885225],"machineNum":2,"prefId":4},{"name":"仙台レジャーランド一番町店","address":"宮城県仙台市青葉区一番町４－３－２７ ガレリア一番町ビル","grid":[38.263004,140.871025],"machineNum":1,"prefId":4},{"name":"namcoイオンモール名取店","address":"宮城県名取市杜せきのした5-3-1 イオンモール名取","grid":[38.163912,140.895966],"machineNum":1,"prefId":4},{"name":"こころっこ名取店","address":"宮城県名取市愛島塩手字前野田４８－１０ ホームセンタームサシ名取２階プレビプレイランドコーナー","grid":[38.161172,140.857693],"machineNum":2,"prefId":4},{"name":"セガワールドセッツウイングス","address":"宮城県名取市飯野坂土城堀５７－１ セガワールドセッツウイングス","grid":[38.156556,140.888379],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー新名取店","address":"宮城県名取市杜せきのした5丁目3番地の1 イオンモール名取","grid":[38.163912,140.895966],"machineNum":3,"prefId":4},{"name":"モーリーファンタジー塩釜店","address":"宮城県塩釜市海岸通１５番１００号 イオンタウン塩釜ショッピングセンター２階","grid":[38.318637,141.024535],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー多賀城店","address":"宮城県多賀城市町前４－１－１ イオン多賀城３階","grid":[38.282427,141.004647],"machineNum":3,"prefId":4},{"name":"PALO古川店","address":"宮城県大崎市古川沢田字筒場浦15 ザ・ビッグ古川店1F","grid":[38.59753,140.972887],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー古川店","address":"宮城県大崎市古川旭二丁目２－１ イオン古川２階","grid":[38.567085,140.972878],"machineNum":3,"prefId":4},{"name":"トイザらス石巻矢本店","address":"宮城県東松島市小松字上浮足４３ イオンタウン矢本","grid":[38.425629,141.204177],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー栗原志波姫店","address":"宮城県栗原市志波姫新熊谷１１番 イオンスーパーセンター栗原志波姫１階","grid":[38.748899,141.068234],"machineNum":2,"prefId":4},{"name":"モーリーファンタジー気仙沼店","address":"宮城県気仙沼市字赤岩舘下６－１外 イオン気仙沼２階","grid":[38.888995,141.573096],"machineNum":1,"prefId":4},{"name":"イオンスーパーセンター佐沼店","address":"宮城県登米市南方町新島前４６－１ イオンタウン佐沼","grid":[38.682793,141.182642],"machineNum":1,"prefId":4},{"name":"ゲームランド佐沼店","address":"宮城県登米市南方町新島前４６－１ イオンタウン佐沼１階","grid":[38.681745,141.181752],"machineNum":1,"prefId":4},{"name":"ファミリーランド加賀野店","address":"宮城県登米市中田町石森字加賀野３－６－１ 宮城生協加賀野店 １Ｆ","grid":[38.696867,141.211207],"machineNum":1,"prefId":4},{"name":"イトーヨーカドー石巻あけぼの店","address":"宮城県石巻市あけぼの１－１－２ イトーヨーカドー石巻あけぼの","grid":[38.448379,141.273464],"machineNum":1,"prefId":4},{"name":"プラサカプコン石巻店","address":"宮城県石巻市蛇田新金沼１７０ イオン石巻２階","grid":[38.445903,141.267402],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー石巻店","address":"宮城県石巻市茜平4丁目104番地 イオン石巻2階","grid":[38.448129,141.265925],"machineNum":2,"prefId":4},{"name":"モーリーファンタジー石巻東店","address":"宮城県石巻市流留字七勺１番１ イオンスーパーセンター石巻東１階","grid":[38.428303,141.375814],"machineNum":1,"prefId":4},{"name":"namcoイオンモール富谷店","address":"宮城県黒川郡富谷市大清水1丁目33-1","grid":[38.364737,140.875154],"machineNum":1,"prefId":4},{"name":"スーパーノバ仙台利府店","address":"宮城県宮城郡利府町加瀬前谷地５５－１ 利府ベアガーデン","grid":[38.318036,140.986091],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー利府店","address":"宮城県宮城郡利府町字新屋田前２２ イオンモール利府２階","grid":[38.326849,140.971978],"machineNum":4,"prefId":4},{"name":"ｎａｍｃｏイオン利府店","address":"宮城県宮城郡利府町利府字新屋田前２２ イオンモール利府２階","grid":[38.326849,140.971978],"machineNum":1,"prefId":4},{"name":"あそびの広場 新宝島 船岡店","address":"宮城県柴田郡柴田町西船迫２－１－１５ イオン船岡２階","grid":[38.06389,140.762961],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー涌谷店","address":"宮城県遠田郡涌谷町字洞ヶ崎５番地 イオンスーパーセンター湧谷１階","grid":[38.536858,141.147365],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー富谷店","address":"宮城県黒川郡富谷町大清水1-33-1 イオン富谷","grid":[38.364737,140.875154],"machineNum":3,"prefId":4},{"name":"ヨークベニマル大和吉岡店プレビプレイランド","address":"宮城県黒川郡大和町吉岡東１－２－１ ヨークベニマル大和吉岡プレビプレイランドコーナー","grid":[38.436698,140.89305],"machineNum":1,"prefId":4},{"name":"プラサカプコン大曲店","address":"秋田県大仙市和合坪立１７７ イオン大曲２階","grid":[39.437664,140.50916],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー中仙店","address":"秋田県大仙市北長野字袴田１８８ イオン中仙２階","grid":[39.551249,140.551185],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー大曲店","address":"秋田県大仙市和合字坪立１７７番地 イオン大曲２階","grid":[39.437664,140.50916],"machineNum":2,"prefId":5},{"name":"メルヘンランド大館店","address":"秋田県大館市御成町三丁目7-58 いとく大館ショッピングセンター3階","grid":[40.280812,140.560413],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー大館店","address":"秋田県大館市大田面２３８ イオンスーパーセンター大館１階","grid":[40.286381,140.577066],"machineNum":2,"prefId":5},{"name":"ゲームフィールド十文字店","address":"秋田県横手市十文字町仁井田東22-1 スーパーモールラッキー","grid":[39.216122,140.520771],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー横手店","address":"秋田県横手市安田字向田１４７ イオン横手２階","grid":[39.298781,140.553646],"machineNum":2,"prefId":5},{"name":"イオンスーパーセンター本荘店","address":"秋田県由利本荘市石脇字田中１３８ イオンスーパーセンター本荘","grid":[39.391632,140.027388],"machineNum":1,"prefId":5},{"name":"SOYU Game Field 御所野店","address":"秋田県秋田市御所野地蔵田１－１－１ イオンモール秋田２階","grid":[39.663262,140.160741],"machineNum":2,"prefId":5},{"name":"イオン土崎港店","address":"秋田県秋田市土崎港南２－３－４１ イオン土崎港","grid":[39.747171,140.072817],"machineNum":1,"prefId":5},{"name":"ファンタジープラザ秋田","address":"秋田県秋田市旭北錦町４－５８ ドン・キホーテ秋田２階","grid":[39.714759,140.109363],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー御所野店","address":"秋田県秋田市御所野地蔵田1-1-1 イオン御所野3階","grid":[39.663262,140.160741],"machineNum":2,"prefId":5},{"name":"モーリーファンタジー秋田中央店","address":"秋田県秋田市楢山川口境５－１１ イオン秋田中央３階","grid":[39.704145,140.109557],"machineNum":2,"prefId":5},{"name":"秋田OPAアミューズパーク","address":"秋田県秋田市千秋久保田町4-2","grid":[39.717897,140.128197],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー能代店","address":"秋田県能代市柳町１１－１ イオン能代３階","grid":[40.209071,140.024633],"machineNum":2,"prefId":5},{"name":"ソユープレイランドソピアいとくアクロス能代店","address":"秋田県能代市寺向７０ いとくアクロス能代","grid":[40.182897,140.053459],"machineNum":1,"prefId":5},{"name":"ソユープレイランドソピアいとく鹿角店","address":"秋田県鹿角市花輪下夕町１６４－１ いとく鹿角ショッピングセンター","grid":[40.199643,140.793115],"machineNum":1,"prefId":5},{"name":"DORAキッズ南陽店","address":"山形県南陽市郡山塚田578 ヤマザワ南陽ショッピングプラザ","grid":[38.043703,140.150457],"machineNum":1,"prefId":6},{"name":"スーパーノバ天童店","address":"山形県天童市南町１―５―２６ らら・パーク天童","grid":[38.342851,140.374175],"machineNum":1,"prefId":6},{"name":"ソユーゲームフィールド天童店","address":"山形県天童市芳賀土地区画整理事業地内３４街区 イオン天童２階","grid":[38.361999,140.377038],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー天童店","address":"山形県天童市芳賀タウン北4丁目1番1号 イオン天童2階","grid":[38.344223,140.363197],"machineNum":3,"prefId":6},{"name":"namcoイオンモール山形南店","address":"山形県山形市若宮三丁目7-8 イオン山形南SC2F","grid":[38.22667,140.30547],"machineNum":1,"prefId":6},{"name":"わくわくランドバイパス店","address":"山形県山形市上山家町760-1","grid":[38.270405,140.362015],"machineNum":1,"prefId":6},{"name":"トイザらス山形店","address":"山形県山形市若宮３－７－８ イオン山形南ＳＣ１Ｆ","grid":[38.22667,140.30547],"machineNum":1,"prefId":6},{"name":"パルケデアミーゴ","address":"山形県山形市嶋北1-3-1","grid":[38.28368,140.321682],"machineNum":1,"prefId":6},{"name":"ビーカム成沢店","address":"山形県山形市成沢西5-3-27 ビーカム成沢","grid":[38.208548,140.317727],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー山形北店","address":"山形県山形市馬見ケ崎２－１２－１９ イオン山形北２階","grid":[38.282866,140.330841],"machineNum":3,"prefId":6},{"name":"モーリーファンタジー山形南店","address":"山形県山形市若宮３－７－８ イオン山形南ＳＣ２階","grid":[38.22667,140.30547],"machineNum":2,"prefId":6},{"name":"わくわくランド新庄店","address":"山形県新庄市金沢字大道上2033番の4 ヤマザワ新庄","grid":[38.753228,140.309339],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー東根店","address":"山形県東根市さくらんぼ駅前３－７－１５ イオン東根２階","grid":[38.427257,140.387369],"machineNum":3,"prefId":6},{"name":"セガワールド米沢","address":"山形県米沢市大字花沢字タナコ原１７７ セガワールド米沢","grid":[37.910947,140.133663],"machineNum":1,"prefId":6},{"name":"プレビプレイランドコーナー米沢店","address":"山形県米沢市駅前３－１－１８ ヨークベニマル米沢１階プレビプレイランド","grid":[37.912181,140.125068],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー米沢店","address":"山形県米沢市春日２－１３－４ イオン米沢２階","grid":[37.923358,140.108943],"machineNum":3,"prefId":6},{"name":"モーリーファンタジー酒田南店","address":"山形県酒田市あきほ町１２０－１ イオン酒田南１階","grid":[38.891977,139.852595],"machineNum":3,"prefId":6},{"name":"アピナ鶴岡店","address":"山形県鶴岡市文下字広野１－１ アピナ鶴岡","grid":[38.758078,139.84438],"machineNum":1,"prefId":6},{"name":"ナムコランドＳ－ＭＡＬＬ店","address":"山形県鶴岡市錦町２－２１ Ｓ－ＭＡＬＬ２階","grid":[38.73912,139.831938],"machineNum":1,"prefId":6},{"name":"SOYU Game Field三川店","address":"山形県東田川郡三川町猪子和田庫１２８－１ イオンモール三川１階","grid":[38.81523,139.837442],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー三川店","address":"山形県東田川郡三川町大字猪子字和田庫１２８－１ イオンモール三川２階","grid":[38.81523,139.837442],"machineNum":1,"prefId":6},{"name":"こころっこ白鷹店","address":"山形県西置賜郡白鷹町荒砥乙字田中道535-1 マックスバリュ白鷹店内","grid":[38.183095,140.098438],"machineNum":1,"prefId":6},{"name":"ちびっこザウルス","address":"福島県いわき市小名浜大原東田96 ヨークタウンアクロスプラザ大原1階","grid":[36.966549,140.88938],"machineNum":1,"prefId":7},{"name":"イトーヨーカドー平店","address":"福島県いわき市平６－６－２ イトーヨーカドー平","grid":[37.057884,140.889868],"machineNum":1,"prefId":7},{"name":"セガワールド勿来","address":"福島県いわき市勿来町四沢鍵田１３ セガワールド勿来","grid":[36.889029,140.784542],"machineNum":1,"prefId":7},{"name":"セガ小名浜","address":"福島県いわき市小名浜林城字塚前１８－１ セガ小名浜","grid":[36.985959,140.897148],"machineNum":1,"prefId":7},{"name":"トイザらスいわき店","address":"福島県いわき市平谷川瀬字双藤町５３－１ トイザらスいわき","grid":[37.046333,140.900553],"machineNum":1,"prefId":7},{"name":"ドリームファクトリーいわき店","address":"福島県いわき市中央台飯野4-1 MEGAドン・キホーテラパークいわき","grid":[37.012951,140.916821],"machineNum":1,"prefId":7},{"name":"モーリーファンタジーいわき店","address":"福島県いわき市平字三倉６８－１ イオンいわき３階","grid":[37.050585,140.898555],"machineNum":2,"prefId":7},{"name":"ヨークベニマル泉店内プレビプレイランド店","address":"福島県いわき市泉町滝尻折返５７ ヨークベニマルいわき泉１階プレビプレイランド","grid":[36.953542,140.861245],"machineNum":1,"prefId":7},{"name":"鹿島エブリアプレビプレイランド","address":"福島県いわき市鹿島町米田日渡５ 鹿島ショッピングセンターエブリア２階プレビプレイランド","grid":[36.994175,140.905215],"machineNum":1,"prefId":7},{"name":"イトーヨーカドー平店内プレビプレイランド店","address":"福島県いわき市平６－６－２ イトーヨーカドー平４階プレビプレイランド","grid":[37.057683,140.899042],"machineNum":1,"prefId":7},{"name":"ソユーゲームフィールド小名浜店","address":"福島県いわき都市計画小名浜港背後地震災復興土地区画整理事業地内 イオンモールいわき小名浜3階","grid":[37.050506,140.887744],"machineNum":1,"prefId":7},{"name":"アピタ会津若松店","address":"福島県会津若松市神指町南四合幕内南１５４ アピタ会津若松","grid":[37.48397,139.903826],"machineNum":2,"prefId":7},{"name":"スウィーツファクトリーパックン会津若松店","address":"福島県会津若松市神指町南四合１５４ アピタ会津若松２階","grid":[37.483936,139.904434],"machineNum":1,"prefId":7},{"name":"スーパーノバ会津インター店","address":"福島県会津若松市町北町上荒久田宮下１４２ スーパーノバ会津インター","grid":[37.518384,139.922101],"machineNum":1,"prefId":7},{"name":"イオンスーパーセンター南相馬店","address":"福島県南相馬市原町区大木戸金場７７ イオンスーパーセンター南相馬","grid":[37.637731,140.943508],"machineNum":1,"prefId":7},{"name":"ジャスモールファンタジー","address":"福島県南相馬市原町区大木戸金場77 イオンスーパーセンター南相馬","grid":[37.637731,140.943508],"machineNum":1,"prefId":7},{"name":"PALO喜多方店","address":"福島県喜多方市字押切南2丁目42-1","grid":[37.6468,139.859584],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー相馬店","address":"福島県相馬市馬場野字雨田５１ イオン相馬２階","grid":[37.787641,140.930435],"machineNum":2,"prefId":7},{"name":"イトーヨーカドー福島店","address":"福島県福島市太田町１３－４ イトーヨーカドー福島","grid":[37.754032,140.456878],"machineNum":1,"prefId":7},{"name":"ザ・サードプラネットピボット福島店","address":"福島県福島市栄町１－１ パワーシティピボット","grid":[37.754528,140.458769],"machineNum":1,"prefId":7},{"name":"スーパーノバ福島店","address":"福島県福島市黒岩中島７－２ スーパーノバ福島","grid":[37.727782,140.467141],"machineNum":1,"prefId":7},{"name":"セガワールド福島","address":"福島県福島市本内中井６－１ セガワールド福島","grid":[37.785212,140.487518],"machineNum":1,"prefId":7},{"name":"トイザらス福島店","address":"福島県福島市森合字清水７ コープマートいずみ２Ｆ","grid":[37.772103,140.44145],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー福島店","address":"福島県福島市南矢野目字西荒田50-17 イオン福島","grid":[37.788476,140.457016],"machineNum":3,"prefId":7},{"name":"モーリーファンタジーいわき小名浜店","address":"福島県福島県いわき市小名浜港背後地土地区画整理事業地内 イオンいわき小名浜店4階","grid":[36.946757,140.902507],"machineNum":2,"prefId":7},{"name":"namcoイオンタウン郡山店","address":"福島県郡山市松木町2-88 イオンタウン郡山","grid":[37.389948,140.388889],"machineNum":1,"prefId":7},{"name":"namco郡山西部プラザ店","address":"福島県郡山市西ノ内２丁目１１－３５ 西部プラザ","grid":[37.407317,140.362793],"machineNum":1,"prefId":7},{"name":"イトーヨーカドー郡山店","address":"福島県郡山市西ノ内２－１１－４０ イトーヨーカドー郡山","grid":[37.407629,140.36411],"machineNum":1,"prefId":7},{"name":"ゲームプラザAGS","address":"福島県郡山市西ノ内２－１１－４０ イトーヨーカドー郡山４階","grid":[37.407629,140.36411],"machineNum":1,"prefId":7},{"name":"セガワールド日和田","address":"福島県郡山市日和田町字西中島７－１ セガワールド日和田","grid":[37.44819,140.380408],"machineNum":1,"prefId":7},{"name":"タイトーアミューズメントシティ郡山","address":"福島県郡山市南2-38 フレスポ郡山","grid":[37.368743,140.372147],"machineNum":1,"prefId":7},{"name":"タイトーステーション郡山オリエントパーク","address":"福島県郡山市安積町荒井字大久保35-10 タイトーステーション郡山オリエントパーク","grid":[37.374479,140.348772],"machineNum":1,"prefId":7},{"name":"トイザらス郡山店","address":"福島県郡山市松木町２－８８ イオンタウン郡山","grid":[37.389948,140.388889],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー郡山フェスタ店","address":"福島県郡山市日和田町字小原１ イオン郡山フェスタ１階","grid":[37.444665,140.376336],"machineNum":3,"prefId":7},{"name":"ヨドバシカメラマルチメディア郡山","address":"福島県郡山市駅前１－１６－７ ヨドバシカメラマルチメディア郡山","grid":[37.397154,140.387625],"machineNum":2,"prefId":7},{"name":"西友ザ・モール 郡山店","address":"福島県郡山市長者１－１－５６ 西友ザ・モール郡山","grid":[37.397355,140.370486],"machineNum":1,"prefId":7},{"name":"ソユーエンターテイメントスタジオ須賀川店","address":"福島県須賀川市古河１０５番 イオンタウン須賀川Ｂ棟内","grid":[37.298205,140.385319],"machineNum":1,"prefId":7},{"name":"PLANT-5大玉店","address":"福島県安達郡大玉村大山字仲江２７１ ＰＬＡＮＴ－５大玉","grid":[37.541612,140.395428],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー鏡石店","address":"福島県岩瀬郡鏡石町桜岡３７５－９ イオンスーパーセンター鏡石１階","grid":[37.242415,140.333753],"machineNum":2,"prefId":7},{"name":"モーリーファンタジー白河西郷店","address":"福島県西白河郡西郷村大字小田倉字岩下11-1 イオン白河西郷","grid":[37.121565,140.177307],"machineNum":3,"prefId":7},{"name":"namco iiasつくば店","address":"茨城県つくば市研究学園Ｃ－５０街区１ イーアスつくば２Ｆ　２１９０","grid":[36.08388,140.08168],"machineNum":2,"prefId":8},{"name":"namcoイオンモールつくば店","address":"茨城県つくば市稲岡６６－１ イオンモールつくば３Ｆ","grid":[36.035055,140.133179],"machineNum":2,"prefId":8},{"name":"アミューズメントジャムジャムつくば店","address":"茨城県つくば市竹園1-9-2 デイズタウンB1F","grid":[36.077984,140.114807],"machineNum":2,"prefId":8},{"name":"モーリーファンタジーつくば店","address":"茨城県つくば市稲岡６６－１ イオンモールつくば３階","grid":[36.035055,140.133179],"machineNum":3,"prefId":8},{"name":"MEGAドン・キホーテ勝田店","address":"茨城県ひたちなか市石川町１－１ 長崎屋勝田","grid":[36.393123,140.527466],"machineNum":1,"prefId":8},{"name":"アミューズメントジャムジャムひたちなか本店新館","address":"茨城県ひたちなか市田中後40-11","grid":[36.347547,140.580343],"machineNum":2,"prefId":8},{"name":"宝島 勝田店","address":"茨城県ひたちなか市石川町1-1 長崎屋勝田2階","grid":[36.393123,140.527466],"machineNum":1,"prefId":8},{"name":"ゲームグース下妻店","address":"茨城県下妻市堀篭972-1 イオンモール下妻2階","grid":[36.189545,139.990167],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー下妻店","address":"茨城県下妻市堀籠９７２－１ イオンモール下妻２階","grid":[36.184333,139.96739],"machineNum":3,"prefId":8},{"name":"ゲームパドック・プラスワン古河店","address":"茨城県古河市小堤１９１６－１ ゲームパドック・プラスワン古河","grid":[36.206764,139.757937],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー古河店","address":"茨城県古河市旭町１－２－１７ 古河イオン２階","grid":[36.197037,139.720193],"machineNum":2,"prefId":8},{"name":"ＦＥＳＴＡ古河店","address":"茨城県古河市松並２－１８－１０ マーケットシティ古河","grid":[36.210101,139.708421],"machineNum":1,"prefId":8},{"name":"ゲームパニックつくば","address":"茨城県土浦市中村東1-1-10298-43-8295 サンタスワールド","grid":[36.046468,140.168053],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー土浦店","address":"茨城県土浦市上高津３６７番 イオン土浦３階","grid":[36.080546,140.17975],"machineNum":4,"prefId":8},{"name":"エムランド坂東","address":"茨城県坂東市辺田1517","grid":[36.04341,139.890483],"machineNum":1,"prefId":8},{"name":"タイトーFステーション坂東","address":"茨城県坂東市辺田1104番地1","grid":[36.036815,139.890412],"machineNum":1,"prefId":8},{"name":"WonderGOO守谷店","address":"茨城県守谷市松ヶ丘6-6-4","grid":[35.968251,139.95846],"machineNum":1,"prefId":8},{"name":"ソユートイズニューヨーク守谷","address":"茨城県守谷市百合ケ丘３―２４９―１ イオンタウン守谷２階","grid":[35.944738,139.990552],"machineNum":2,"prefId":8},{"name":"ハローズ 守谷テラス店","address":"茨城県守谷市久保ヶ丘2-1-1","grid":[35.967846,139.974375],"machineNum":1,"prefId":8},{"name":"ハローズエコス小川-","address":"茨城県小美玉市野田354-1 エコス小川一階","grid":[36.192775,140.380601],"machineNum":1,"prefId":8},{"name":"イオン常陸大宮店","address":"茨城県常陸大宮市下村田２３８７ イオン常陸大宮","grid":[36.522323,140.430617],"machineNum":2,"prefId":8},{"name":"プレビ常陸大宮ショッピングセンターピサーロ-","address":"茨城県常陸大宮市下村田2387","grid":[36.522323,140.430617],"machineNum":2,"prefId":8},{"name":"こころっこ日立","address":"茨城県日立市幸町１－１６－１ イトーヨーカドー日立５階プレビプレイランド","grid":[36.59171,140.659296],"machineNum":1,"prefId":8},{"name":"こころっこ日立城南店","address":"茨城県日立市城南町３－４－３ ゼビオ日立城南","grid":[36.584382,140.640667],"machineNum":1,"prefId":8},{"name":"イトーヨーカドー日立店","address":"茨城県日立市幸町１－１６－１ イトーヨーカドー日立","grid":[36.591738,140.659053],"machineNum":1,"prefId":8},{"name":"ピンクパンサー日立店","address":"茨城県日立市東多賀町５－１０－１０ ピンクパンサー日立","grid":[36.548229,140.63049],"machineNum":1,"prefId":8},{"name":"夢大陸日立南店","address":"茨城県日立市森山町４－１０－３２ 夢大陸日立南","grid":[36.516734,140.613862],"machineNum":1,"prefId":8},{"name":"スタジオプリモマイム水戸","address":"茨城県水戸市宮町１－２－４ マイム水戸１階","grid":[36.371377,140.477467],"machineNum":1,"prefId":8},{"name":"ビックカメラ水戸駅店","address":"茨城県水戸市宮町１－７－３１ エクセルみなみ４Ｆ・５Ｆ","grid":[36.3701,140.477018],"machineNum":1,"prefId":8},{"name":"ピンクパンサー水戸けやき台店","address":"茨城県水戸市酒門町３２７６－１ ピンクパンサー水戸けやき台","grid":[36.338057,140.483278],"machineNum":2,"prefId":8},{"name":"ファンタジープラザ上水戸","address":"茨城県水戸市上水戸２－９－１０ ＭＥＧＡドン・キホーテ上水戸２階","grid":[36.389664,140.445392],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー水戸内原店","address":"茨城県水戸市内原2丁目1番地 イオン水戸内原3階","grid":[36.37454,140.359419],"machineNum":4,"prefId":8},{"name":"ユーズランド水戸内原店","address":"茨城県水戸市内原２丁目１番地 イオン水戸内原２階","grid":[36.37454,140.359419],"machineNum":1,"prefId":8},{"name":"西友ひたち野うしく店","address":"茨城県牛久市ひたち野東１－２３－１ 西友ひたち野うしく","grid":[36.008991,140.159847],"machineNum":1,"prefId":8},{"name":"ＡＧスクエア石岡店","address":"茨城県石岡市東大橋中峯１９７６－１ ウェルサイト石岡","grid":[36.198615,140.303357],"machineNum":2,"prefId":8},{"name":"ファミリーランド 神栖店","address":"茨城県神栖市大野原４－８－６７ ベイシア神栖","grid":[35.899642,140.636435],"machineNum":2,"prefId":8},{"name":"アピタ佐原東店","address":"茨城県稲敷市西代字東田１４８０ パルナ","grid":[35.918065,140.485104],"machineNum":1,"prefId":8},{"name":"ハローズガーデン江戸崎店","address":"茨城県稲敷市江戸崎甲４８３６番地 江戸崎ショッピングセンター１階","grid":[35.959176,140.315639],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー佐原東店","address":"茨城県稲敷市西代１４９５ パルナ２階","grid":[35.917483,140.488954],"machineNum":2,"prefId":8},{"name":"イオン笠間店","address":"茨城県笠間市赤坂８ イオン笠間","grid":[36.391685,140.251768],"machineNum":1,"prefId":8},{"name":"ジャングルパーク　笠間店","address":"茨城県笠間市赤坂８ イオン笠間１Ｆ","grid":[36.391685,140.251768],"machineNum":1,"prefId":8},{"name":"アピナ下館店","address":"茨城県筑西市玉戸１０１２－３ アピナ下館","grid":[36.29541,139.945714],"machineNum":1,"prefId":8},{"name":"ファミリーランド あそびのくに玉造店","address":"茨城県行方市玉造甲６４２－１ ベイシア電気玉造甲","grid":[36.101136,140.415865],"machineNum":1,"prefId":8},{"name":"アミューズメントパークドリームランド那珂","address":"茨城県那珂市菅谷１６１８－２ サンモリノ那珂","grid":[36.429584,140.512632],"machineNum":1,"prefId":8},{"name":"ベイシア高萩モール店","address":"茨城県高萩市下手綱手ヤワコ田１０５８ ベイシア高萩モール","grid":[36.727917,140.7162],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー高萩店","address":"茨城県高萩市安良川２３１ イオン高萩","grid":[36.705943,140.708138],"machineNum":1,"prefId":8},{"name":"宝島 鹿嶋店","address":"茨城県鹿嶋市宮中290-1 ショッピングセンターチェリオ1階","grid":[35.960043,140.644038],"machineNum":1,"prefId":8},{"name":"イトーヨーカドー竜ヶ崎店","address":"茨城県龍ヶ崎市小柴５－１－２ イトーヨーカドー竜ヶ崎","grid":[35.933244,140.160022],"machineNum":1,"prefId":8},{"name":"トイザらス龍ヶ崎店","address":"茨城県龍ヶ崎市小柴１－７ トイザらス龍ヶ崎","grid":[35.931053,140.16405],"machineNum":1,"prefId":8},{"name":"ハローズガーデン竜ヶ崎店","address":"茨城県龍ヶ崎市小柴５－１－２ イトーヨーカドー竜ヶ崎２階","grid":[35.932962,140.160322],"machineNum":1,"prefId":8},{"name":"イオンタウン水戸南店","address":"茨城県東茨城郡茨城町長岡３４８０－１０１ イオンタウン水戸南","grid":[36.31121,140.441162],"machineNum":1,"prefId":8},{"name":"タイトーFステーションロックシティ水戸南店","address":"茨城県東茨城郡茨城町長岡３４８０－１０１ イオンタウン水戸南","grid":[36.31121,140.441162],"machineNum":1,"prefId":8},{"name":"ドリームファクトリーVuiVui境町","address":"茨城県猿島郡境町1327-1 ドリームファクトリーVuiVui境町","grid":[36.102222,139.79765],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー東海店","address":"茨城県那珂郡東海村舟石川駅東四丁目１番１号 イオン東海２階","grid":[36.463291,140.566786],"machineNum":2,"prefId":8},{"name":"モーリーファンタジーさくら店","address":"栃木県さくら市桜野１５５５－１ ザ・ビッグエクストラさくら１階","grid":[36.689618,139.979317],"machineNum":3,"prefId":9},{"name":"PALO石橋店","address":"栃木県下野市下古山3362-1 ヨークタウン石橋","grid":[36.468546,139.868341],"machineNum":2,"prefId":9},{"name":"タイトーステーション佐野新都市店","address":"栃木県佐野市高萩町１３２４－１ イオンモール佐野新都市２階","grid":[36.299642,139.606642],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー佐野新都市店","address":"栃木県佐野市高萩町１３２４－１ イオンモール佐野新都市２階","grid":[36.299104,139.606386],"machineNum":2,"prefId":9},{"name":"KOGUMA Hobby 上三川店","address":"栃木県宇都宮市インターパーク６－１－１ インターパーク宇都宮南","grid":[36.490548,139.906607],"machineNum":1,"prefId":9},{"name":"KOGUMA Hobby 宇都宮店","address":"栃木県宇都宮市今泉町２３７ 福田屋ショッピングプラザ宇都宮","grid":[36.573646,139.900294],"machineNum":1,"prefId":9},{"name":"アピタ宇都宮店","address":"栃木県宇都宮市江曽島本町２２－７ アピタ宇都宮","grid":[36.531593,139.866942],"machineNum":1,"prefId":9},{"name":"イトーヨーカドー宇都宮店","address":"栃木県宇都宮市陽東６－２－１ ベルモール","grid":[36.555037,139.928387],"machineNum":1,"prefId":9},{"name":"インターパークプラスワン宇都宮店","address":"栃木県宇都宮市インターパーク６丁目５－１ インターパーク宇都宮南","grid":[36.488103,139.905616],"machineNum":2,"prefId":9},{"name":"スコナランドトライアル宇都宮店","address":"栃木県宇都宮市睦町5-5 スーパーセンタートライアル宇都宮店1F","grid":[36.561868,139.862886],"machineNum":1,"prefId":9},{"name":"セガワールド宇都宮","address":"栃木県宇都宮市東宿郷５－１－７ セガワールド宇都宮","grid":[36.558178,139.908862],"machineNum":1,"prefId":9},{"name":"タイトーステーション宇都宮ベルモール店","address":"栃木県宇都宮市陽東６丁目２－１ ベルモール２Ｆ","grid":[36.555058,139.928244],"machineNum":2,"prefId":9},{"name":"テクモピアパルテロン宇都宮店","address":"栃木県宇都宮市今泉町２３７番地 福田屋ショッピングプラザ宇都宮２階","grid":[36.573646,139.900294],"machineNum":2,"prefId":9},{"name":"テクモピアロックダムインターパーク店","address":"栃木県宇都宮市インターパーク６－１－１ インターパーク宇都宮南２階","grid":[36.490548,139.906607],"machineNum":2,"prefId":9},{"name":"ファンタジーランドガルー宇都宮店","address":"栃木県宇都宮市江曽島本町２２－７ アピタ宇都宮２階","grid":[36.531593,139.866942],"machineNum":1,"prefId":9},{"name":"プラボ宇都宮店","address":"栃木県宇都宮市簗瀬町１６０６番地１ Ｐ＆Ｄビル","grid":[36.543944,139.891517],"machineNum":1,"prefId":9},{"name":"ヨドバシカメラマルチメディア宇都宮","address":"栃木県宇都宮市駅前通り１－４－６ ララスクエア宇都宮８Ｆ","grid":[36.560507,139.897055],"machineNum":2,"prefId":9},{"name":"ヨークベニマル御幸ケ原店内プレビプレイランド","address":"栃木県宇都宮市御幸ケ原町５０－１ ヨークベニマル御幸ヶ原","grid":[36.592498,139.928162],"machineNum":1,"prefId":9},{"name":"KOKADO TOWN小山店","address":"栃木県小山市中久喜１４６７－１ イオンモール小山２Ｆ","grid":[36.321806,139.840817],"machineNum":3,"prefId":9},{"name":"namcoロブレ小山店","address":"栃木県小山市 中央町3-7-1ロブレ小山店4階","grid":[36.312562,139.805235],"machineNum":1,"prefId":9},{"name":"アピナ小山店","address":"栃木県小山市駅南町４－２７－１８ アピナ小山","grid":[36.300248,139.80908],"machineNum":1,"prefId":9},{"name":"イトーヨーカドー小山店","address":"栃木県小山市駅東通り２－３－１５ イトーヨーカドー小山","grid":[36.313701,139.808896],"machineNum":1,"prefId":9},{"name":"タイトーFステーション小山店","address":"栃木県小山市喜沢1475 おやまゆうえんハーヴェストウォーク","grid":[36.335483,139.807858],"machineNum":2,"prefId":9},{"name":"モーリーファンタジー小山店","address":"栃木県小山市中久喜１４６７－１ イオンモール小山２階","grid":[36.322069,139.84097],"machineNum":3,"prefId":9},{"name":"モーリーファンタジー今市店","address":"栃木県日光市豊田字若林７９－１ イオン今市２階","grid":[36.735099,139.703902],"machineNum":2,"prefId":9},{"name":"namcoイオン栃木店","address":"栃木県栃木市箱森町37-9","grid":[36.394951,139.723957],"machineNum":1,"prefId":9},{"name":"イオン栃木店","address":"栃木県栃木市箱森町37番9号","grid":[36.394951,139.723957],"machineNum":1,"prefId":9},{"name":"ザ・ビッグエクストラ真岡店","address":"栃木県真岡市台町２６６８ ザ・ビッグエクストラ真岡","grid":[36.430794,140.000231],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー真岡店","address":"栃木県真岡市台町２６６８ ザ・ビッグエクストラ真岡１階","grid":[36.430794,140.000231],"machineNum":2,"prefId":9},{"name":"ベイシア矢板店","address":"栃木県矢板市末広町25-1 ベイシア矢板","grid":[36.804078,139.934336],"machineNum":1,"prefId":9},{"name":"PALO足利店","address":"栃木県足利市朝倉2-21-16 ヨークタウン足利1F","grid":[36.316191,139.445156],"machineNum":1,"prefId":9},{"name":"アピタ足利店","address":"栃木県足利市朝倉町２４５－１ コムファーストショッピングセンター","grid":[36.320235,139.449619],"machineNum":1,"prefId":9},{"name":"ドラマ足利店","address":"栃木県足利市朝倉町２４４－１ ドラマ足利","grid":[36.322514,139.450117],"machineNum":1,"prefId":9},{"name":"ファンファン足利店","address":"栃木県足利市朝倉町２４５ コムファーストショッピングセンター４Ｆ","grid":[36.319961,139.450312],"machineNum":1,"prefId":9},{"name":"MEGAドン・キホーテ黒磯店","address":"栃木県那須塩原市材木町３－５ ＭＥＧＡドン・キホーテ黒磯","grid":[36.974261,140.049191],"machineNum":1,"prefId":9},{"name":"セガワールドクロノス","address":"栃木県那須塩原市南郷屋２－１０６－２７ セガワールドクロノス","grid":[36.895097,139.982327],"machineNum":1,"prefId":9},{"name":"ファンファン那須塩原店","address":"栃木県那須塩原市豊浦12-1 ビバモールC棟 3号","grid":[36.954382,140.054202],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー那須塩原店","address":"栃木県那須塩原市島方４５５ イオンタウン那須塩原１階","grid":[36.92965,140.006846],"machineNum":3,"prefId":9},{"name":"ベイシア烏山店ファミリーランドあそびのくに","address":"栃木県那須烏山市城東１８８０ ベイシア烏山","grid":[36.66209,140.158164],"machineNum":1,"prefId":9},{"name":"テクモピア鹿沼店","address":"栃木県鹿沼市東末広町１０７３ 福田屋百貨鹿沼３階","grid":[36.56478,139.752099],"machineNum":2,"prefId":9},{"name":"ドリームファクトリーアロハ店","address":"栃木県鹿沼市睦町川西城下287-1 ビバモール鹿沼","grid":[36.571874,139.753069],"machineNum":1,"prefId":9},{"name":"宝島大間々店","address":"群馬県みどり市大間々町大間々４０ さくらもーる２階","grid":[36.413877,139.281372],"machineNum":1,"prefId":10},{"name":"アミュージアム伊勢崎店","address":"群馬県伊勢崎市連取町１５０７ イトーヨーカドー伊勢崎２Ｆ","grid":[36.316347,139.181862],"machineNum":2,"prefId":10},{"name":"イトーヨーカドー伊勢崎店","address":"群馬県伊勢崎市連取町１５０７ イトーヨーカドー伊勢崎","grid":[36.316347,139.181862],"machineNum":1,"prefId":10},{"name":"トイザらス・ベビーザらス伊勢崎店","address":"群馬県伊勢崎市連取町３０２５－２ トイザらス・ベビーザらス伊勢崎","grid":[36.324583,139.170053],"machineNum":1,"prefId":10},{"name":"ハローズガーデン伊勢崎東店","address":"群馬県伊勢崎市三室町５３３０ アピタ伊勢崎東","grid":[36.329025,139.233825],"machineNum":1,"prefId":10},{"name":"ファミリーランド あそびのくに 西部モール店","address":"群馬県伊勢崎市宮子町３４２３－１５ ベイシア西部モール","grid":[36.331251,139.161962],"machineNum":1,"prefId":10},{"name":"プレビ劇場ＩＳＥＳＡＫＩ","address":"群馬県伊勢崎市西小保方町３４６－３ スマーク伊勢崎３階プレビ劇場ＩＳＥＳ","grid":[36.339644,139.232667],"machineNum":2,"prefId":10},{"name":"モーリーファンタジーミスターマックス伊勢崎店","address":"群馬県伊勢崎市宮子町３５５６－１ ＭｒＭａｘ伊勢崎１階","grid":[36.329868,139.151965],"machineNum":2,"prefId":10},{"name":"群馬レジャーランド伊勢崎店","address":"群馬県伊勢崎市連取町３０６６－１ 群馬レジャーランド伊勢崎","grid":[36.31823,139.172355],"machineNum":2,"prefId":10},{"name":"namcoけやきウォーク前橋店","address":"群馬県前橋市文京町２－１－１ けやきウォーク前橋ＳＣ２階","grid":[36.379102,139.078091],"machineNum":2,"prefId":10},{"name":"アピタ前橋店","address":"群馬県前橋市文京町２－１－１ けやきウォーク前橋ＳＣ","grid":[36.379139,139.078084],"machineNum":2,"prefId":10},{"name":"ハローズガーデン前橋店","address":"群馬県前橋市文京町２－１－１ けやきウォーク前橋ＳＣ２階","grid":[36.379102,139.078091],"machineNum":1,"prefId":10},{"name":"モーリーファンタジーガーデン前橋店","address":"群馬県前橋市小屋原町472-1 ガーデン前橋","grid":[36.355895,139.129841],"machineNum":1,"prefId":10},{"name":"こころっこ新田プレビプレイランド","address":"群馬県太田市新田市野井町５９２－１３ ニコモール新田１階プレイランド","grid":[36.302662,139.301607],"machineNum":1,"prefId":10},{"name":"アピナ太田店","address":"群馬県太田市内ケ島町９０７－１ アピナ太田","grid":[36.28294,139.398121],"machineNum":1,"prefId":10},{"name":"トイザらス太田店","address":"群馬県太田市飯塚町１９３３－２ トイザらス太田","grid":[36.28279,139.376118],"machineNum":1,"prefId":10},{"name":"モーリーファンタジー太田店","address":"群馬県太田市石原町８１番地 イオンモール太田２階","grid":[36.294681,139.400509],"machineNum":4,"prefId":10},{"name":"ユーズランド太田店","address":"群馬県太田市石原町８１番地 イオンモール太田２階","grid":[36.294681,139.400509],"machineNum":1,"prefId":10},{"name":"群馬レジャーランド太田店","address":"群馬県太田市西矢島町１６２番地２ 群馬レジャーランド太田","grid":[36.268001,139.37614],"machineNum":2,"prefId":10},{"name":"MEGAドン・キホーテ桐生店","address":"群馬県桐生市永楽町５－１０ ＭＥＧＡドン・キホーテ桐生","grid":[36.412476,139.335905],"machineNum":1,"prefId":10},{"name":"宝島 桐生店","address":"群馬県桐生市永楽町 5-10","grid":[36.412457,139.335972],"machineNum":1,"prefId":10},{"name":"セガワールド沼田","address":"群馬県沼田市下久屋町１１００－１ セガワールド沼田","grid":[36.656763,139.078073],"machineNum":1,"prefId":10},{"name":"ファミリーランド あそびのくに 渋川店","address":"群馬県渋川市行幸田字砂田２９６ ファミリーランドあそびのくに渋川","grid":[36.472269,139.000113],"machineNum":1,"prefId":10},{"name":"群馬レジャーランド渋川店","address":"群馬県渋川市八木原１３６４ 群馬レジャーランド渋川","grid":[36.47418,139.015464],"machineNum":1,"prefId":10},{"name":"群馬レジャーランド藤岡","address":"群馬県藤岡市中２００２－１ ピット１００２階","grid":[36.274313,139.071793],"machineNum":1,"prefId":10},{"name":"セガワールド館林","address":"群馬県館林市小桑原町大道西９４９－１ セガワールド館林","grid":[36.235016,139.520541],"machineNum":1,"prefId":10},{"name":"ファンタジーランドガルー館林店","address":"群馬県館林市楠町３６４８－１ アピタ館林２階","grid":[36.242274,139.56906],"machineNum":1,"prefId":10},{"name":"アピタ高崎店","address":"群馬県高崎市矢中町６６８－１ アピタ高崎","grid":[36.309907,139.054331],"machineNum":2,"prefId":10},{"name":"ナムコランドアカマル店","address":"群馬県高崎市中尾町字鳥羽前４４－１ アカマル","grid":[36.370223,139.027431],"machineNum":1,"prefId":10},{"name":"モーリーファンタジー倉賀野店","address":"群馬県高崎市倉賀野町４６９１－１ ＭｒＭａｘ倉賀野","grid":[36.30081,139.053445],"machineNum":2,"prefId":10},{"name":"モーリーファンタジー高崎店","address":"群馬県高崎市棟高町1400 イオン高崎","grid":[36.39049,139.00675],"machineNum":4,"prefId":10},{"name":"ユーズランド高崎店","address":"群馬県高崎市棟高町１４００ イオン高崎２階","grid":[36.39049,139.00675],"machineNum":1,"prefId":10},{"name":"群馬レジャーランド高崎駅東口店","address":"群馬県高崎市江木町333-1 アークコミュニティータウン","grid":[36.329847,139.012856],"machineNum":2,"prefId":10},{"name":"プレビ ジョイフル本田千代田店","address":"群馬県邑楽郡千代田町千代田町萱野813-1 ジョイフル本田千代田店2F","grid":[36.205923,139.472854],"machineNum":1,"prefId":10},{"name":"GIGA武蔵浦和本店","address":"埼玉県さいたま市南区沼影3-5-15","grid":[35.838013,139.65092],"machineNum":1,"prefId":11},{"name":"MEGAドン・キホーテ浦和原山店","address":"埼玉県さいたま市緑区原山４－３－３ ＭＥＧＡドン・キホーテ浦和原山","grid":[35.870853,139.674566],"machineNum":1,"prefId":11},{"name":"namcoステラタウン店","address":"埼玉県さいたま市北区宮原町一丁目854-1 ステラタウン3F","grid":[35.932772,139.622029],"machineNum":1,"prefId":11},{"name":"イオン大宮西店","address":"埼玉県さいたま市西区三橋6-607-13","grid":[35.917888,139.589804],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー大宮宮原店","address":"埼玉県さいたま市北区宮原町１－８５４－１ ステラモール大宮","grid":[35.932772,139.622029],"machineNum":2,"prefId":11},{"name":"イトーヨーカドー浦和店","address":"埼玉県さいたま市浦和区仲町１－７－１ イトーヨーカドー浦和","grid":[35.860346,139.655464],"machineNum":2,"prefId":11},{"name":"ウェアハウス三橋店","address":"埼玉県さいたま市西区三橋6-955-1 ウェアハウス三橋","grid":[35.915881,139.595834],"machineNum":1,"prefId":11},{"name":"セガスタジアムイオン与野","address":"埼玉県さいたま市中央区本町西５－２－９ イオン与野３Ｆ","grid":[35.890913,139.61488],"machineNum":1,"prefId":11},{"name":"タイトーFステーションダイエー大宮","address":"埼玉県さいたま市大宮区桜木町2‐3","grid":[35.907024,139.621852],"machineNum":1,"prefId":11},{"name":"タイトーステーション大宮店","address":"埼玉県さいたま市大宮区大門町一丁目１番地 タイトーステーション大宮","grid":[35.907389,139.625398],"machineNum":2,"prefId":11},{"name":"トイザらス岩槻店","address":"埼玉県さいたま市岩槻区城町２－６－２８ トイザらス岩槻","grid":[35.947967,139.714385],"machineNum":1,"prefId":11},{"name":"ビックカメラ大宮西口そごう店","address":"埼玉県さいたま市大宮区桜木町１－８－４ 大宮西口そごう","grid":[35.904402,139.620983],"machineNum":2,"prefId":11},{"name":"モーリーファンタジー与野店","address":"埼玉県さいたま市中央区本町西５－２－９ イオン与野３階","grid":[35.890913,139.61488],"machineNum":4,"prefId":11},{"name":"モーリーファンタジー大宮店","address":"埼玉県さいたま市北区櫛引町２－５７４－１ イオン大宮３階","grid":[35.923348,139.609944],"machineNum":4,"prefId":11},{"name":"モーリーファンタジー浦和美園店","address":"埼玉県さいたま市緑区大門３７１０ イオンモール浦和美園３階","grid":[35.883843,139.730715],"machineNum":4,"prefId":11},{"name":"ヨドバシカメラマルチメディアさいたま新都心駅前店","address":"埼玉県さいたま市大宮区吉敷町４－２６３－６ ヨドバシカメラマルチメディアさいたま新都心駅前","grid":[35.895304,139.634504],"machineNum":2,"prefId":11},{"name":"宝島 浦和原山店","address":"埼玉県さいたま市緑区原山4-3-3 MEGAドン・キホーテ浦和原山2階","grid":[35.870853,139.674566],"machineNum":1,"prefId":11},{"name":"宝島 浦和美園店","address":"埼玉県さいたま市緑区大門3710 イオンモール浦和美園2F","grid":[35.883843,139.730715],"machineNum":2,"prefId":11},{"name":"PALO埼玉大井店","address":"埼玉県ふじみ野市西鶴ケ岡1-3-15 ビバモ-ル埼玉大井2階","grid":[35.8639,139.502232],"machineNum":2,"prefId":11},{"name":"イトーヨーカドー上福岡東店","address":"埼玉県ふじみ野市大原２－１－３０ イトーヨーカドー上福岡東","grid":[35.880212,139.517613],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー埼玉大井店","address":"埼玉県ふじみ野市西鶴ヶ岡１－３－１５ ビバモ－ル埼玉大井","grid":[35.8639,139.502232],"machineNum":1,"prefId":11},{"name":"カバロキッズ上福岡東店","address":"埼玉県ふじみ野市大原２－１－３０ イトーヨーカドー上福岡東２Ｆ","grid":[35.880511,139.518202],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー大井店","address":"埼玉県ふじみ野市ふじみ野１－２－１ イオン大井３階","grid":[35.859826,139.514317],"machineNum":3,"prefId":11},{"name":"イトーヨーカドー三郷店","address":"埼玉県三郷市ピアラシティ一丁目1番地1","grid":[35.843289,139.854254],"machineNum":2,"prefId":11},{"name":"ゲームパニック三郷","address":"埼玉県三郷市彦野2-25 ピアラシティ","grid":[35.84168,139.852967],"machineNum":2,"prefId":11},{"name":"ラウンドワンスタジアムららぽーと新三郷店","address":"埼玉県三郷市新三郷ららシティ３丁目１－１ ららぽーと新三郷２階　２００００番","grid":[35.859316,139.867185],"machineNum":1,"prefId":11},{"name":"ラクガキ王国三郷店","address":"埼玉県三郷市天神２丁目２２番地 イトーヨーカドー三郷２Ｆ","grid":[35.844296,139.847688],"machineNum":1,"prefId":11},{"name":"アピナ上尾店","address":"埼玉県上尾市緑丘３丁目３番１１－２号 ＰＡＰＡ上尾プリンセス棟１階・２階","grid":[35.987393,139.580059],"machineNum":1,"prefId":11},{"name":"イトーヨーカドーアリオ上尾店","address":"埼玉県上尾市大字壱丁目367番地 アリオ上尾","grid":[35.961737,139.566036],"machineNum":2,"prefId":11},{"name":"イトーヨーカドー上尾駅前店","address":"埼玉県上尾市谷津2-1-1","grid":[35.971997,139.58857],"machineNum":1,"prefId":11},{"name":"ファミリーランド上尾店","address":"埼玉県上尾市 谷津 2-1-1 ショーサンプラザ5F","grid":[35.971997,139.58857],"machineNum":1,"prefId":11},{"name":"ラウンドワンスタジアム上尾店","address":"埼玉県上尾市大字平塚917番地1","grid":[35.985917,139.607952],"machineNum":1,"prefId":11},{"name":"龍宮ガーデンアリオ上尾店","address":"埼玉県上尾市壱丁目３６７ アリオ上尾２Ｆ","grid":[35.961737,139.566036],"machineNum":1,"prefId":11},{"name":"ＦＥＳＴＡ上尾店","address":"埼玉県上尾市愛宕３－１－４０ バリュープラザ上尾愛宕２階","grid":[35.964399,139.596826],"machineNum":1,"prefId":11},{"name":"こころっこ東鷲宮-","address":"埼玉県久喜市桜田3-2-1 イオン東鷲宮店2階","grid":[36.089525,139.681457],"machineNum":2,"prefId":11},{"name":"イトーヨーカドーアリオ鷲宮店","address":"埼玉県久喜市久本寺谷田7-1 アリオ内鷲宮","grid":[36.078835,139.661118],"machineNum":2,"prefId":11},{"name":"イトーヨーカドー久喜店","address":"埼玉県久喜市久喜中央４－９－１１ イトーヨーカドー久喜","grid":[36.071017,139.674847],"machineNum":1,"prefId":11},{"name":"プレイランド菖蒲店","address":"埼玉県久喜市菖蒲町菖蒲６００５番地１号 モラージュ菖蒲３Ｆ","grid":[36.075056,139.611303],"machineNum":2,"prefId":11},{"name":"ワンパクオウコク","address":"埼玉県久喜市久本寺谷田７－１ アリオ内鷲宮２Ｆ","grid":[36.082599,139.656688],"machineNum":1,"prefId":11},{"name":"セガワールド入間","address":"埼玉県入間市東藤沢２－１８ セガワールド入間","grid":[35.819123,139.418193],"machineNum":2,"prefId":11},{"name":"トイザらス入間店","address":"埼玉県入間市豊岡２－１－１ サイオス２Ｆ","grid":[35.8362,139.386884],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー入間店","address":"埼玉県入間市上藤沢４６２－１ イオン入間２階","grid":[35.822183,139.394809],"machineNum":3,"prefId":11},{"name":"ザ・サードプラネットフレスポ八潮店","address":"埼玉県八潮市大瀬８２２－１ フレスポ八潮３階","grid":[35.806256,139.845769],"machineNum":2,"prefId":11},{"name":"ザ・ビッグ八潮南店","address":"埼玉県八潮市大曽根２７３－５ ザ・ビッグ八潮南","grid":[35.8093,139.829458],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー加須店","address":"埼玉県加須市大門町２０－５８ イトーヨーカドー加須","grid":[36.130161,139.592816],"machineNum":1,"prefId":11},{"name":"HEYWORLD北本店","address":"埼玉県北本市深井6-87 HeyWorld1階プレビプレイランド","grid":[36.053595,139.525613],"machineNum":1,"prefId":11},{"name":"ライフ吉川駅前店","address":"埼玉県吉川市保１－１３－３ ライフ吉川駅前","grid":[35.878043,139.844006],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー和光店","address":"埼玉県和光市丸山台１－９－３ イトーヨーカドー和光","grid":[35.786409,139.612381],"machineNum":3,"prefId":11},{"name":"タイトーステーション和光店","address":"埼玉県和光市丸山台１－４－５ タイトーステーション和光","grid":[35.786626,139.613785],"machineNum":1,"prefId":11},{"name":"キッズプラザきゃらんど富士見店","address":"埼玉県富士見市山室１－１３１３ ららぽーと富士見２階","grid":[35.858278,139.547693],"machineNum":2,"prefId":11},{"name":"セガららぽーと富士見","address":"埼玉県富士見市山室１－１３１３ ３F ３５２００区画 ららぽーと富士見","grid":[35.858278,139.547693],"machineNum":1,"prefId":11},{"name":"Forkids' byこぐま そごう川口店","address":"埼玉県川口市栄町３－５－１ そごう川口","grid":[35.802976,139.718632],"machineNum":1,"prefId":11},{"name":"あそびライブラリー川口店","address":"埼玉県川口市宮町18-9 ララガーデン川口 2F","grid":[35.804829,139.698344],"machineNum":1,"prefId":11},{"name":"アミュージアム川口店","address":"埼玉県川口市本町2-7-25","grid":[35.801034,139.727363],"machineNum":2,"prefId":11},{"name":"イトーヨーカドーアリオ川口店","address":"埼玉県川口市並木元町1-79 アリオ川口","grid":[35.807298,139.713935],"machineNum":2,"prefId":11},{"name":"セガワールド川口","address":"埼玉県川口市東領家２－２－１０ セガワールド川口","grid":[35.7947,139.747611],"machineNum":1,"prefId":11},{"name":"ソユーゲームフィールド川口店","address":"埼玉県川口市並木元町１－７９ アリオ川口３Ｆ","grid":[35.80731,139.714284],"machineNum":2,"prefId":11},{"name":"モーリーファンタジー川口前川店","address":"埼玉県川口市前川１丁目１番１１号 イオンモール川口前川３階","grid":[35.833609,139.707124],"machineNum":4,"prefId":11},{"name":"楽市楽座イオンモール川口前川店","address":"埼玉県川口市前川１－１－１１ イオンモール川口前川３階","grid":[35.833536,139.707211],"machineNum":2,"prefId":11},{"name":"WonderGOO川越店","address":"埼玉県川越市大字小室３８５－１ ＷｏｎｄｅｒＧＯＯ川越","grid":[35.914138,139.463686],"machineNum":1,"prefId":11},{"name":"ゲームシティプラス川越店","address":"埼玉県川越市泉町1-1 ウニクス南古谷1F","grid":[35.903088,139.513158],"machineNum":1,"prefId":11},{"name":"丸広百貨店わんぱくランド","address":"埼玉県川越市新富町２－６－１ 丸広百貨","grid":[35.912675,139.48356],"machineNum":1,"prefId":11},{"name":"埼玉レジャーランド川越店","address":"埼玉県川越市 新富町1丁目1-17-4","grid":[35.915232,139.482797],"machineNum":2,"prefId":11},{"name":"にこぱ幸手店","address":"埼玉県幸手市上高野７６４ エムズタウン幸手","grid":[36.068205,139.714926],"machineNum":1,"prefId":11},{"name":"スクウェアワン幸手店","address":"埼玉県幸手市上高野2142-1 スクウェアワン幸手","grid":[36.057013,139.714313],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー北戸田店","address":"埼玉県戸田市美女木東１－３－１ イオン北戸田２階","grid":[35.826822,139.652539],"machineNum":4,"prefId":11},{"name":"ｎａｍｃｏイオン北戸田店","address":"埼玉県戸田市美女木東１－３－１ イオン北戸田","grid":[35.826822,139.652539],"machineNum":2,"prefId":11},{"name":"アミュージアム所沢店","address":"埼玉県所沢市小手指台23-1","grid":[35.791601,139.442878],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー所沢店","address":"埼玉県所沢市東町５－２２ ダイエー所沢７Ｆ","grid":[35.789214,139.469992],"machineNum":5,"prefId":11},{"name":"アミュージアム新座店","address":"埼玉県新座市東北２－３２－１２ イオン新座３Ｆ","grid":[35.820137,139.574867],"machineNum":2,"prefId":11},{"name":"ライフ新座店","address":"埼玉県新座市栗原４－１２－２５ ライフ新座","grid":[35.755554,139.550935],"machineNum":1,"prefId":11},{"name":"西友新座店","address":"埼玉県新座市野火止８－１６－１３ 西友新座","grid":[35.802206,139.571027],"machineNum":1,"prefId":11},{"name":"ベイシア日高店ファミリーランドあそびのくに","address":"埼玉県日高市森戸新田８８－５ ベイシアひだかモール","grid":[35.913675,139.372688],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー春日部店","address":"埼玉県春日部市中央１－１３－１ イトーヨーカドー春日部","grid":[35.979685,139.749578],"machineNum":1,"prefId":11},{"name":"クレヨンしんちゃんブリブリシネマスタジオ","address":"埼玉県春日部市南１－１－１ ララガーデン春日部３階","grid":[35.977166,139.755111],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー春日部店","address":"埼玉県春日部市下柳字森田420-1 イオンモール春日部","grid":[35.987707,139.788684],"machineNum":4,"prefId":11},{"name":"ユーズランド春日部店","address":"埼玉県春日部市下柳４２０－１ イオンモール春日部２Ｆ","grid":[35.987758,139.788432],"machineNum":1,"prefId":11},{"name":"埼玉レジャーランド春日部店","address":"埼玉県春日部市増富谷際１６３－１ 埼玉レジャーランド春日部","grid":[35.959357,139.728951],"machineNum":2,"prefId":11},{"name":"ラウンドワンスタジアム朝霞店","address":"埼玉県朝霞市膝折町2丁目16-10","grid":[35.790278,139.579596],"machineNum":1,"prefId":11},{"name":"アピタ本庄店","address":"埼玉県本庄市南１－２－１０ アピタ本庄","grid":[36.237093,139.182588],"machineNum":1,"prefId":11},{"name":"ハローズガーデン本庄店","address":"埼玉県本庄市南１－２－１０ アピタ本庄１階","grid":[36.236575,139.182206],"machineNum":1,"prefId":11},{"name":"アピタ東松山店","address":"埼玉県東松山市あずま町４－３ アピタ東松山","grid":[36.005532,139.410734],"machineNum":2,"prefId":11},{"name":"スウィーツファンタジーパックン東松山店","address":"埼玉県東松山市あずま町４－３ アピタ東松山","grid":[36.005532,139.410734],"machineNum":1,"prefId":11},{"name":"西友東松山店","address":"埼玉県東松山市小松原町１１－２ 西友東松山","grid":[36.043751,139.407999],"machineNum":2,"prefId":11},{"name":"アピタ桶川店","address":"埼玉県桶川市桶川都市計画事業下日出谷東特定土地区画整理事業地内４ ベニバナウォーク桶川","grid":[35.998174,139.54964],"machineNum":1,"prefId":11},{"name":"スウィーツファンタジーパックン桶川店","address":"埼玉県桶川市桶川郡市計画事業下日比谷東特定土地区画整理事業地内 ベニバナウォーク桶川２Ｆ","grid":[36.005766,139.542583],"machineNum":1,"prefId":11},{"name":"トイザらス桶川店","address":"埼玉県桶川市西２－９－３６ マメトラショッピングパ－ク２Ｆ","grid":[36.007754,139.557558],"machineNum":1,"prefId":11},{"name":"イトーヨーカドーアリオ深谷店","address":"埼玉県深谷市上柴町西4-2-14 アリオ深谷","grid":[36.181353,139.298949],"machineNum":2,"prefId":11},{"name":"ハローズガーデン深谷店","address":"埼玉県深谷市上紫町西４－２－１４ アリオ深谷２階","grid":[36.183204,139.296819],"machineNum":1,"prefId":11},{"name":"ＡＧスクエア埼玉花園店","address":"埼玉県深谷市荒川３５９ ＡＧスクエア埼玉花園","grid":[36.120408,139.233058],"machineNum":1,"prefId":11},{"name":"PALO熊谷店","address":"埼玉県熊谷市本石2-135 熊谷イオン3階","grid":[36.146252,139.378594],"machineNum":3,"prefId":11},{"name":"SOYU Game Field熊谷店","address":"埼玉県熊谷市銀座2-245 ショッピングセンターニットーモール4階","grid":[36.138796,139.393655],"machineNum":1,"prefId":11},{"name":"ゲームパークエムランド籠原","address":"埼玉県熊谷市新堀新田523","grid":[36.173331,139.321071],"machineNum":1,"prefId":11},{"name":"キャッツアイ狭山店","address":"埼玉県狭山市入間川イ３１４１ キャッツアイ狭山","grid":[35.850669,139.408484],"machineNum":2,"prefId":11},{"name":"モーリーファンタジー狭山店","address":"埼玉県狭山市上奥富１１２６－１ イオン狭山２階","grid":[35.867898,139.410218],"machineNum":3,"prefId":11},{"name":"ハローズパシオス秩父店-","address":"埼玉県秩父市永田町10-27 パシオス秩父","grid":[36.009439,139.086361],"machineNum":1,"prefId":11},{"name":"プラサカプコン羽生店","address":"埼玉県羽生市川崎２－２８１－３ イオンモール羽生２階","grid":[36.142596,139.54206],"machineNum":2,"prefId":11},{"name":"モーリーファンタジー羽生店","address":"埼玉県羽生市川崎２丁目２８１番地３ イオンモール羽生３階","grid":[36.142899,139.542111],"machineNum":3,"prefId":11},{"name":"MEGAドン・キホーテ草加店","address":"埼玉県草加市栄町２－８－３３ ＭＥＧＡドン・キホーテ草加","grid":[35.843133,139.803078],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー草加店","address":"埼玉県草加市高砂２－７－１ イトーヨーカドー草加","grid":[35.827763,139.804176],"machineNum":2,"prefId":11},{"name":"ゲオ草加花栗店","address":"埼玉県草加市花栗４－２６－２１ ゲオ草加花栗","grid":[35.836211,139.791142],"machineNum":1,"prefId":11},{"name":"トイザらス草加店","address":"埼玉県草加市清門町４０１－１ セーモンプラザ","grid":[35.852964,139.779266],"machineNum":1,"prefId":11},{"name":"ニコパ草加舎人店","address":"埼玉県草加市遊馬町２－１ 島忠ホームズ草加舎人","grid":[35.818375,139.768813],"machineNum":1,"prefId":11},{"name":"MEGAドン・キホーテ蓮田店","address":"埼玉県蓮田市東４－５－１３ ＭＥＧＡドン・キホーテ蓮田","grid":[35.980124,139.657581],"machineNum":2,"prefId":11},{"name":"イトーヨーカドー錦町店","address":"埼玉県蕨市錦町１－１２－１ イトーヨーカドー錦町","grid":[35.821647,139.678041],"machineNum":2,"prefId":11},{"name":"パイレーツキッズ錦町店","address":"埼玉県蕨市錦町１－１２－１ イトーヨーカドー錦町２階","grid":[35.821647,139.678041],"machineNum":1,"prefId":11},{"name":"namcoイオンレイクタウン店","address":"埼玉県越谷市東町2-8 イオンレイクタウンB街区3F 3133区画","grid":[35.883872,139.834893],"machineNum":3,"prefId":11},{"name":"ゲオ東越谷店","address":"埼玉県越谷市東越谷４－８－１７ ゲオ東越谷","grid":[35.898816,139.797023],"machineNum":1,"prefId":11},{"name":"テクモピア南越谷店","address":"埼玉県越谷市南越谷１－１５－１ 楽園タウン２Ｆ","grid":[35.875021,139.793185],"machineNum":2,"prefId":11},{"name":"トイザらス越谷店","address":"埼玉県越谷市上間久里３０８－１ トイザらス越谷","grid":[35.931911,139.787372],"machineNum":1,"prefId":11},{"name":"ファイヤーボール越谷レイクタウン店","address":"埼玉県越谷市東町２丁目８ イオンレイクタウンmori ３Ｆ","grid":[35.881762,139.828454],"machineNum":1,"prefId":11},{"name":"プレビ ALCo越谷ショッピングスクエア店","address":"埼玉県越谷市越ヶ谷1-16-1","grid":[35.886706,139.788054],"machineNum":1,"prefId":11},{"name":"モーリーファンタジーせんげん台店","address":"埼玉県越谷市千間台西３－２－１２ イオンせんげん台３階","grid":[35.93347,139.767391],"machineNum":2,"prefId":11},{"name":"モーリーファンタジーレイクタウン店","address":"埼玉県越谷市レイクタウン3丁目1番地1 イオンレイクタウンmori3階","grid":[35.882039,139.828022],"machineNum":4,"prefId":11},{"name":"ユーズランド越谷店","address":"埼玉県越谷市東町４－２１－１ イオンレイクタウンKAZE Ａ３４２","grid":[35.8778,139.824596],"machineNum":1,"prefId":11},{"name":"アミュージアム鴻巣店","address":"埼玉県鴻巣市本町１－１－２ エルミこうのす３Ｆ","grid":[36.05994,139.509994],"machineNum":2,"prefId":11},{"name":"ハローズガーデンワカバウォーク店","address":"埼玉県鶴ヶ島市富士見１－２－１ ワカバウォーク北棟２階","grid":[35.949784,139.41148],"machineNum":1,"prefId":11},{"name":"キッズプラザきゃらんど上里店","address":"埼玉県児玉郡上里町七本木２２７２－１ ＵＮＩＣＵＳ上里２階","grid":[36.238452,139.153415],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー上里店","address":"埼玉県児玉郡上里町大字金久保字蓮山３５９番１ イオンタウン上里２階","grid":[36.260533,139.136042],"machineNum":3,"prefId":11},{"name":"ラウンドワンさいたま・上里店","address":"埼玉県児玉郡上里町大字金久保３９４－１ ラウンドワンさいたま・上里","grid":[36.260094,139.137507],"machineNum":1,"prefId":11},{"name":"わんぱくキッズランドライフ毛呂山店","address":"埼玉県入間郡毛呂山町岩井西3-12-34 ライフ毛呂山2階","grid":[35.942223,139.314104],"machineNum":2,"prefId":11},{"name":"TSUTAYA嵐山店","address":"埼玉県比企郡嵐山町平沢土地区画内３１街区１０ ＴＳＵＴＡＹＡ嵐山","grid":[36.042017,139.315726],"machineNum":1,"prefId":11},{"name":"ベイシアなめがわモール店","address":"埼玉県比企郡滑川町大字羽根尾２７８０ なめがわ森林モール","grid":[36.066007,139.360815],"machineNum":1,"prefId":11},{"name":"ナムコ イオンタウンユーカリが丘店ゲームコーナー","address":"千葉県佐倉市ユーカリが丘6-12","grid":[35.729686,140.151653],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーユーカリが丘店","address":"千葉県佐倉市西ユーカリが丘6丁目12番地3","grid":[35.7267,140.150089],"machineNum":2,"prefId":12},{"name":"namcoイオンモール八千代緑が丘店","address":"千葉県八千代市緑が丘二丁目1番3 イオン八千代緑が丘4F","grid":[35.727888,140.073051],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー八千代店","address":"千葉県八千代市村上南１－３－１ イトーヨーカドー八千代","grid":[35.722346,140.117714],"machineNum":2,"prefId":12},{"name":"イトーヨーカドー八千代店キッズ・パーク","address":"千葉県八千代市村上４００１番地４ イトーヨーカドー八千代３階","grid":[35.73235,140.118946],"machineNum":1,"prefId":12},{"name":"キャッツアイ八千代店","address":"千葉県八千代市吉橋１８５ １ｉｓｍトライアル緑ケ丘","grid":[35.733919,140.072685],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー八千代緑が丘店","address":"千葉県八千代市緑が丘2-1-3 イオン八千代緑が丘","grid":[35.727888,140.073051],"machineNum":3,"prefId":12},{"name":"モーリーファンタジー八街店","address":"千葉県八街市文違３０１ イオン八街１階","grid":[35.681265,140.314189],"machineNum":2,"prefId":12},{"name":"NICOPAマリンピア店","address":"千葉県千葉市美浜区高洲３－１３－１ イオンマリンピア４Ｆ","grid":[35.628271,140.073045],"machineNum":2,"prefId":12},{"name":"SEGAARENASOGA","address":"千葉県千葉市中央区川崎町５１－１ 蘇我ハーバーシティフェスティバルウォーク１Ｆ","grid":[35.592628,140.117906],"machineNum":1,"prefId":12},{"name":"namcoイオンモール幕張新都心店","address":"千葉県千葉市美浜区豊砂１－１ イオンモール幕張新都心グランドモール３階","grid":[35.653865,140.03158],"machineNum":1,"prefId":12},{"name":"そごう 千葉店 本館6階玩具売場","address":"千葉県千葉市中央区新町１０００ そごう千葉","grid":[35.611104,140.113924],"machineNum":1,"prefId":12},{"name":"アミュージアム稲毛店","address":"千葉県千葉市稲毛区小仲台１－４－２０ イオン稲毛２Ｆ","grid":[35.636601,140.094985],"machineNum":2,"prefId":12},{"name":"アミューズメントパフェパレパレ千葉稲毛","address":"千葉県千葉市稲毛区長沼原町７３７－２５ フレスポ稲毛Ａ棟－４","grid":[35.657616,140.127706],"machineNum":1,"prefId":12},{"name":"イトーヨーカドーアリオ蘇我店","address":"千葉県千葉市中央区川崎町52-7 アリオ蘇我","grid":[35.589425,140.121939],"machineNum":3,"prefId":12},{"name":"イトーヨーカドー幕張店","address":"千葉県千葉市花見川区幕張町４－４１７－２５ イトーヨーカドー幕張","grid":[35.656276,140.051118],"machineNum":1,"prefId":12},{"name":"スポーツウェーブ鉄腕24浜野店","address":"千葉県千葉市中央区 スポーツウェーブ鉄腕２４","grid":[35.55415,140.12614],"machineNum":1,"prefId":12},{"name":"スポーツウェーブ鉄腕24稲毛長沼店","address":"千葉県千葉市稲毛区長沼原町６９４ スポーツウェーブ鉄腕２４稲毛長沼","grid":[35.662023,140.126554],"machineNum":2,"prefId":12},{"name":"ソピア幕張店","address":"千葉県千葉市花見川区幕張町４－４１７－２５ イトーヨーカドー幕張２階","grid":[35.656276,140.051118],"machineNum":1,"prefId":12},{"name":"タイトーステーションアリオ蘇我店","address":"千葉県千葉市中央区川崎町５２－７ アリオ蘇我２階","grid":[35.589425,140.121939],"machineNum":1,"prefId":12},{"name":"トイザらス千葉長沼店","address":"千葉県千葉市稲毛区長沼町３３０－５０ ワンズモール１Ｆ","grid":[35.657013,140.117457],"machineNum":1,"prefId":12},{"name":"ナムコランドおゆみ野店","address":"千葉県千葉市緑区おゆみ野中央２－３－１ ＭｒＭａｘおゆみ野","grid":[35.554322,140.159209],"machineNum":1,"prefId":12},{"name":"ファンタジープラザ千城台店","address":"千葉県千葉市若葉区千城台北３－２１－１ ラパーク千城台３階","grid":[35.622897,140.189101],"machineNum":1,"prefId":12},{"name":"プレビ ミスターマックス千葉美浜店","address":"千葉県千葉市美浜区新港32-11","grid":[35.617685,140.090272],"machineNum":1,"prefId":12},{"name":"プレビイオン幕張","address":"千葉県千葉市美浜区ひび野1-3 イオン幕張店1階","grid":[35.651882,140.045522],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーあすみが丘店","address":"千葉県千葉市緑区あすみが丘7-1 あすみが丘ブランニューモール","grid":[35.520591,140.267829],"machineNum":2,"prefId":12},{"name":"モーリーファンタジーおゆみ野店","address":"千葉県千葉市緑区おゆみ野南５丁目３７－１ イオンタウンおゆみ野２階","grid":[35.543873,140.173119],"machineNum":3,"prefId":12},{"name":"モーリーファンタジー幕張新都心店","address":"千葉県千葉市美浜区豊砂１－５ イオンモール幕張新都心ファミリーモール２階","grid":[35.655124,140.027812],"machineNum":2,"prefId":12},{"name":"モーリーファンタジー鎌取店","address":"千葉県千葉市緑区おゆみ野３丁目１６番地 ゆみーる鎌取ショッピングセンター４階","grid":[35.561424,140.177537],"machineNum":3,"prefId":12},{"name":"ヨドバシカメラ千葉店","address":"千葉県千葉市中央区富士見２－３－１ ヨドバシカメラ千葉","grid":[35.611598,140.116676],"machineNum":2,"prefId":12},{"name":"ＣＬＵＢＳＥＧＡ幕張","address":"千葉県千葉市美浜区ひび野１－８ メッセアミューズモール１階","grid":[35.649753,140.042351],"machineNum":1,"prefId":12},{"name":"ＣＬＵＢＳＥＧＡ稲毛オーツーパーク","address":"千葉県千葉市稲毛区園生町３８０－１ オーツパーク","grid":[35.651689,140.119256],"machineNum":1,"prefId":12},{"name":"ゲームランド千葉ニュータウン店","address":"千葉県印西市中央北３丁目３番 イオン千葉ニュータウン２階","grid":[35.802297,140.11217],"machineNum":1,"prefId":12},{"name":"ジョイプラザ印西店","address":"千葉県印西市原１－２ ビックホップガーデンモール印西２階","grid":[35.803391,140.164946],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー千葉ニュータウン店","address":"千葉県印西市中央北３丁目１番１ イオン千葉ニュータウン３階","grid":[35.802936,140.113733],"machineNum":3,"prefId":12},{"name":"イトーヨーカドー四街道店","address":"千葉県四街道市中央５ イトーヨーカドー四街道","grid":[35.667476,140.165343],"machineNum":2,"prefId":12},{"name":"ポニー四街道店","address":"千葉県四街道市中央５番地 イトーヨーカドー四街道２Ｆ","grid":[35.667582,140.165227],"machineNum":1,"prefId":12},{"name":"宝島 四街道店","address":"千葉県四街道市めいわ2-1-1 MEGAドン・キホーテ四街道2階","grid":[35.652596,140.169945],"machineNum":1,"prefId":12},{"name":"メルヘンランドアミリー大綱店","address":"千葉県大綱白里市みやこ野1-1-1","grid":[35.519189,140.314758],"machineNum":1,"prefId":12},{"name":"ファミリーランド遊びの国 ベイシア大網白里店","address":"千葉県大網白里市大網273-2","grid":[35.523291,140.327059],"machineNum":1,"prefId":12},{"name":"プラサカプコン富津店","address":"千葉県富津市青木１２４－１ イオンモール富津","grid":[35.323167,139.845769],"machineNum":1,"prefId":12},{"name":"ファンタジープラザ成東","address":"千葉県山武市成東１８０８－１ ＭＥＧＡドン・キホーテラパーク成東２階","grid":[35.595603,140.397457],"machineNum":1,"prefId":12},{"name":"千葉レジャーランド成東店","address":"千葉県山武市姫島１１１－１ 千葉レジャーランド成東","grid":[35.588548,140.390356],"machineNum":1,"prefId":12},{"name":"こころっこ姉崎店","address":"千葉県市原市姉崎645-1 イトーヨーカドー姉崎店3階プレビプレイランドコーナー","grid":[35.48003,140.045552],"machineNum":1,"prefId":12},{"name":"アピタ市原店","address":"千葉県市原市青柳喜多１－１ アピタ市原","grid":[35.514298,140.06434],"machineNum":1,"prefId":12},{"name":"イトーヨーカドーアリオ市原店","address":"千葉県市原市更級四丁目3 番2 アリオ市原","grid":[35.507986,140.10197],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー姉崎店","address":"千葉県市原市姉崎６４５－１ イトーヨーカドー姉崎","grid":[35.479935,140.045463],"machineNum":1,"prefId":12},{"name":"ゲームチャリオット五井店","address":"千葉県市原市五井中央西2-1-2","grid":[35.513575,140.089881],"machineNum":1,"prefId":12},{"name":"ハローズガーデン市原店","address":"千葉県市原市青柳北１－１ アピタ市原２階","grid":[35.514298,140.06434],"machineNum":1,"prefId":12},{"name":"プラサカプコンちはら台店","address":"千葉県市原市ちはら台西３－４ ｕｎｉｍｏちはら台ショッピングセンター２階","grid":[35.527921,140.171754],"machineNum":2,"prefId":12},{"name":"PALO市川店","address":"千葉県市川市鬼高1-1-1 ニッケコルトンプラザ2階","grid":[35.717688,139.933319],"machineNum":3,"prefId":12},{"name":"タイトーFステーション市川妙典店","address":"千葉県市川市妙典4-1-1 イオン市川妙典2番街2階","grid":[35.692539,139.926762],"machineNum":1,"prefId":12},{"name":"ダイエーいちかわコルトンプラザ店","address":"千葉県市川市鬼高1-1-1 ニッケコルトンプラザ","grid":[35.717688,139.933319],"machineNum":1,"prefId":12},{"name":"トイザらス・ベビーザらス市川店","address":"千葉県市川市鬼高１－１－１ ニッケコルトンプラザ２Ｆ","grid":[35.717688,139.933319],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー南行徳店","address":"千葉県市川市南行徳２－２０－２５ ダイエー南行徳２Ｆ","grid":[35.668521,139.905804],"machineNum":2,"prefId":12},{"name":"モーリーファンタジー市川妙典店","address":"千葉県市川市妙典５－３－１ イオン市川妙典３階","grid":[35.692872,139.927938],"machineNum":2,"prefId":12},{"name":"NICOPAイオンタウン成田富里店","address":"千葉県成田市東町１３３ イオンタウン成田富里２Ｆ","grid":[35.777942,140.322764],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー成田店","address":"千葉県成田市公津の杜４－５－３ 成田ユアエルム","grid":[35.75979,140.296587],"machineNum":1,"prefId":12},{"name":"キッズパーク ボンベルタ成田","address":"千葉県成田市赤坂2-1-1","grid":[35.778008,140.293807],"machineNum":1,"prefId":12},{"name":"テクモピアロックダム公津の杜店","address":"千葉県成田市公津の杜４－５－３ 成田ユアエルム３階","grid":[35.759672,140.296563],"machineNum":2,"prefId":12},{"name":"プラサカプコン成田店","address":"千葉県成田市ウイング土屋２４ イオン成田２階","grid":[35.795296,140.319227],"machineNum":2,"prefId":12},{"name":"モーリーファンタジー成田店","address":"千葉県成田市ウイング土屋24番地 イオン成田2階","grid":[35.795296,140.319227],"machineNum":3,"prefId":12},{"name":"イトーヨーカドー我孫子店","address":"千葉県我孫子市我孫子４－１１－１ イトーヨーカドー我孫子","grid":[35.876608,140.009152],"machineNum":1,"prefId":12},{"name":"セガワールド我孫子","address":"千葉県我孫子市柴崎４７－１ セガワールド我孫子","grid":[35.878207,140.030068],"machineNum":1,"prefId":12},{"name":"セガワールド旭","address":"千葉県旭市ニ３１５０－１ セガワールド旭","grid":[35.723553,140.639517],"machineNum":1,"prefId":12},{"name":"タイトーステーション旭サンモール店","address":"千葉県旭市イ－２６７６－１ イオン旭３Ｆ","grid":[35.725268,140.658355],"machineNum":1,"prefId":12},{"name":"BANDAI asobi:木更津店","address":"千葉県木更津市中島398 三井アウトレットパーク木更津","grid":[35.43482,139.93525],"machineNum":1,"prefId":12},{"name":"GAME&GO!KISARAZU","address":"千葉県木更津市太田２－５－１ 精文館書木更津店内ゲームコーナー","grid":[35.381798,139.941817],"machineNum":1,"prefId":12},{"name":"アピタ木更津店","address":"千葉県木更津市ほたる野４－２－４８ アピタ木更津","grid":[35.375674,139.962694],"machineNum":2,"prefId":12},{"name":"イスカンダル","address":"千葉県木更津市潮見４－１－２ イスカンダル","grid":[35.369684,139.917538],"machineNum":1,"prefId":12},{"name":"ソユーゲームフィールド木更津店","address":"千葉県木更津市築地１番４ イオンモール木更津２階","grid":[35.366989,139.907992],"machineNum":1,"prefId":12},{"name":"ハローズガーデン木更津店","address":"千葉県木更津市ほたる野４－２－４８ アピタ木更津２階","grid":[35.375674,139.962694],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー木更津店","address":"千葉県木更津市築地１－４ イオンモール木更津","grid":[35.365864,139.908477],"machineNum":2,"prefId":12},{"name":"パラボランド  東金店","address":"千葉県東金市東岩崎８－１０ サンピア３階","grid":[35.558607,140.364785],"machineNum":1,"prefId":12},{"name":"namco松戸店","address":"千葉県松戸市松戸1230-1 ピアザ松戸2階","grid":[35.783535,139.90082],"machineNum":3,"prefId":12},{"name":"イトーヨーカドー八柱店","address":"千葉県松戸市日暮１－１５－８ イトーヨーカドー八柱","grid":[35.790992,139.939799],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー松戸店","address":"千葉県松戸市松戸１１４９ イトーヨーカドー松戸","grid":[35.783792,139.902381],"machineNum":1,"prefId":12},{"name":"トイザらス松戸店","address":"千葉県松戸市二ツ木１７８１－２ プチモール二ツ木２Ｆ","grid":[35.817301,139.925939],"machineNum":1,"prefId":12},{"name":"宝島 北小金店","address":"千葉県松戸市小金1 イオン小金店5F","grid":[35.832678,139.93175],"machineNum":1,"prefId":12},{"name":"西友常盤平店","address":"千葉県松戸市常盤平３－１１－１ 西友常盤平","grid":[35.801905,139.951409],"machineNum":1,"prefId":12},{"name":"ぷれいらんど３７３ららぽーと柏の葉","address":"千葉県柏市若柴１７５ ららぽーと柏の葉３階","grid":[35.893305,139.951235],"machineNum":2,"prefId":12},{"name":"イトーヨーカドーアリオ柏店","address":"千葉県柏市大島田950-1","grid":[35.833492,140.01283],"machineNum":2,"prefId":12},{"name":"タイトーFステーションPAZ新柏店","address":"千葉県柏市名戸ヶ谷字中久保８８８番１号 ＰＡＺ新柏２Ｆ","grid":[35.842998,139.980415],"machineNum":1,"prefId":12},{"name":"タイトーステーションセブンパークアリオ柏店","address":"千葉県柏市大島田950-1 セブンパークアリオ柏店3F","grid":[35.833264,140.012652],"machineNum":1,"prefId":12},{"name":"タイトーステーション柏店","address":"千葉県柏市柏２－３－１ フーサワビル","grid":[35.861454,139.972704],"machineNum":2,"prefId":12},{"name":"ビックカメラ柏店","address":"千葉県柏市柏１－１－２０ スカイプラザ柏","grid":[35.862286,139.972183],"machineNum":1,"prefId":12},{"name":"ボウルアピア柏中央","address":"千葉県柏市十余二249-5","grid":[35.882205,139.959199],"machineNum":2,"prefId":12},{"name":"モラージュ柏キッズパーク","address":"千葉県柏市大山台２丁目３番地 モラージュ柏","grid":[35.882185,139.969326],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー柏店","address":"千葉県柏市豊町2丁目5番25号 イオンモール柏2階","grid":[35.851795,139.961525],"machineNum":3,"prefId":12},{"name":"ラウンドワンスタジアム アリオ柏店","address":"千葉県柏市大島田950-1 セブンパークアリオ柏 1070","grid":[35.833264,140.012652],"machineNum":2,"prefId":12},{"name":"For kids'+b byこぐま 流山おおたかの森S・C店","address":"千葉県流山市西初石6-185-2 流山おおたかの森S・C 3F","grid":[35.870579,139.926071],"machineNum":1,"prefId":12},{"name":"namco流山おおたかの森S・C店","address":"千葉県流山市西初石六丁目１８５番２号 おおたかの森ＳＣ","grid":[35.870579,139.926071],"machineNum":2,"prefId":12},{"name":"イトーヨーカドー流山店","address":"千葉県流山市流山９－８００－２ イトーヨーカドー流山","grid":[35.850102,139.8997],"machineNum":1,"prefId":12},{"name":"ハロータイトー流山","address":"千葉県流山市流山９丁目８００２号 イトーヨーカドー流山","grid":[35.850192,139.899285],"machineNum":1,"prefId":12},{"name":"にこぱ新浦安","address":"千葉県浦安市明海4-1-1 ニューコースト新浦安3F","grid":[35.642852,139.9228],"machineNum":1,"prefId":12},{"name":"イオン新浦安店","address":"千葉県浦安市入船１－４－１ ダイエー新浦安","grid":[35.649001,139.914885],"machineNum":1,"prefId":12},{"name":"宝島 新浦安店","address":"千葉県浦安市入船1-4-1 イオン新浦安4階","grid":[35.648862,139.914729],"machineNum":2,"prefId":12},{"name":"Morisia Amuse Park","address":"千葉県習志野市谷津1丁目16番1号 モリシア津田沼2階","grid":[35.689848,140.019157],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー津田沼店","address":"千葉県習志野市津田沼１－１０－３０ イトーヨーカドー津田沼","grid":[35.689744,140.024019],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー東習志野店","address":"千葉県習志野市東習志野６丁目７－８ イオンタウン東習志野１階","grid":[35.700006,140.066748],"machineNum":2,"prefId":12},{"name":"モーリーファンタジー津田沼店","address":"千葉県習志野市津田沼1-23-1 イオン津田沼","grid":[35.690746,140.023454],"machineNum":3,"prefId":12},{"name":"イオン高根木戸店","address":"千葉県船橋市習志野台１－１－３ イオン高根木戸","grid":[35.727029,140.03531],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー船橋店","address":"千葉県船橋市本町７－６－１ イトーヨーカドー船橋","grid":[35.703253,139.985046],"machineNum":2,"prefId":12},{"name":"セガららぽーとTOKYO-BAY","address":"千葉県船橋市浜町２－１－１ ららぽーとＴＯＫＹＯ－ＢＡＹ１Ｆ","grid":[35.686107,139.989718],"machineNum":1,"prefId":12},{"name":"タイトーステーション 船橋","address":"千葉県船橋市本町１丁目６－１ タイトーステーション船橋","grid":[35.699842,139.986087],"machineNum":1,"prefId":12},{"name":"テクモピア船橋店","address":"千葉県船橋市浜町２－２－７ ビビット南船橋４階","grid":[35.687389,139.993186],"machineNum":2,"prefId":12},{"name":"ビックカメラ船橋東武店","address":"千葉県船橋市本町7-1-1","grid":[35.70245,139.984471],"machineNum":1,"prefId":12},{"name":"ファンファン北習志野店","address":"千葉県船橋市習志野台２－６－１７ パチンコ遊戯座２Ｆ","grid":[35.722462,140.0436],"machineNum":1,"prefId":12},{"name":"マリンガーデンららぽーとTOKYO-BAY","address":"千葉県船橋市浜町２－２－２ ららぽーとＴＯＫＹＯ－ＢＡＹ西館３Ｆ","grid":[35.687609,139.99227],"machineNum":2,"prefId":12},{"name":"モーリーファンタジー船橋店","address":"千葉県船橋市山手１－１－８ イオン船橋３階","grid":[35.712585,139.978117],"machineNum":4,"prefId":12},{"name":"ｎａｍｃｏイオンモール船橋店","address":"千葉県船橋市山手１丁目１番８号 イオン船橋","grid":[35.712585,139.978117],"machineNum":1,"prefId":12},{"name":"GAME SQUARE茂原","address":"千葉県茂原市 六ツ野八貫野 ２７８５－１ ライフガーデン茂原","grid":[35.431054,140.310015],"machineNum":1,"prefId":12},{"name":"タイトーステーション茂原アスモ店","address":"千葉県茂原市高師１７３５ 茂原ショッピングプラザアスモ２Ｆ","grid":[35.434567,140.288054],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー長浦店","address":"千葉県袖ケ浦市長浦駅前1-7 ダイエー長浦","grid":[35.450294,139.997486],"machineNum":1,"prefId":12},{"name":"YAZWORLD野田七光台","address":"千葉県野田市七光台4-2 イオンタウン野田七光台","grid":[35.982669,139.851133],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーノア店","address":"千葉県野田市中根３６－１ イオンノア１階","grid":[35.947651,139.875815],"machineNum":3,"prefId":12},{"name":"セガイオンモール銚子","address":"千葉県銚子市三崎町2-2660-1 イオンモール銚子2F","grid":[35.710263,140.788016],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー銚子店","address":"千葉県銚子市三崎町２丁目２６６０－１ イオン銚子２階","grid":[35.710263,140.788016],"machineNum":3,"prefId":12},{"name":"WonderGOO鎌ヶ谷店","address":"千葉県鎌ヶ谷市東鎌ヶ谷１－６ ＷｏｎｄｅｒＧＯＯ鎌ヶ谷","grid":[35.763619,140.015679],"machineNum":1,"prefId":12},{"name":"にこぱアクロスモール新鎌ヶ谷店","address":"千葉県鎌ヶ谷市初富９２８ アクロスモール新鎌ヶ谷","grid":[35.783132,139.995278],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー鎌ヶ谷店","address":"千葉県鎌ヶ谷市新鎌ケ谷2-7-1 イオン鎌ヶ谷","grid":[35.77843,140.001123],"machineNum":3,"prefId":12},{"name":"モーリーファンタジー館山店","address":"千葉県館山市八幡５４５－１ イオン館山１階","grid":[35.007019,139.861557],"machineNum":2,"prefId":12},{"name":"イオン鴨川店","address":"千葉県鴨川市横渚９７３－１ イオン鴨川","grid":[35.108594,140.102776],"machineNum":1,"prefId":12},{"name":"スコナランド酒々井店","address":"千葉県印旛郡酒々井町本佐倉457-2 トライアル酒々井店2F","grid":[35.72149,140.256567],"machineNum":1,"prefId":12},{"name":"ファミリーランド 長生店","address":"千葉県長生郡長生村大字金田３２３７ ベイシア長生","grid":[35.382985,140.355158],"machineNum":1,"prefId":12},{"name":"エムエムランド","address":"東京都世田谷区北沢2-3-6 エムエムランド","grid":[35.660161,139.668115],"machineNum":1,"prefId":13},{"name":"タイトーイン祖師谷大蔵","address":"東京都世田谷区砧８－１０－１ プラッツ砧１Ｆ","grid":[35.642634,139.608583],"machineNum":1,"prefId":13},{"name":"ライフ経堂店","address":"東京都世田谷区経堂５－３２－６ ライフ経堂","grid":[35.648219,139.632247],"machineNum":1,"prefId":13},{"name":"玉川タカシマヤ","address":"東京都世田谷区玉川３－１７－１ 玉川タカシマヤ","grid":[35.614663,139.627191],"machineNum":1,"prefId":13},{"name":"西友三軒茶屋店","address":"東京都世田谷区太子堂４－２４－８ 西友三軒茶屋","grid":[35.644584,139.670249],"machineNum":2,"prefId":13},{"name":"博品館TOYPARK銀座本店","address":"東京都中央区銀座８－８－１１ 博品館ＴＯＹＰＡＲＫ銀座本店","grid":[35.667884,139.760957],"machineNum":1,"prefId":13},{"name":"ｎａｍｃｏ中野","address":"東京都中野区中野５－５２－１５ 中野ブロードウェイ別館","grid":[35.709236,139.665723],"machineNum":2,"prefId":13},{"name":"namco王子サンスクエア店","address":"東京都北区王子１－４－１ サンスクエア２Ｆ","grid":[35.752926,139.738858],"machineNum":1,"prefId":13},{"name":"イオン赤羽北本通り店","address":"東京都北区神谷３－１２－１ ダイエー赤羽北本通り","grid":[35.774401,139.731661],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー赤羽店","address":"東京都北区赤羽西１－７－１ イトーヨーカドー赤羽","grid":[35.777185,139.719344],"machineNum":1,"prefId":13},{"name":"ビックカメラ有楽町店","address":"東京都千代田区有楽町1-11-1 ビックカメラ有楽町店","grid":[35.675583,139.762929],"machineNum":3,"prefId":13},{"name":"ヨドバシカメラマルチメディアAkiba","address":"東京都千代田区神田花岡町1-1 ヨドバシカメラマルチメディアAkiba 6F","grid":[35.698779,139.774729],"machineNum":3,"prefId":13},{"name":"妖怪ウォッチ 発見!妖怪タウン 東京駅一番街店","address":"東京都千代田区丸の内１－９－１ 東京駅一番街Ｂ１Ｆ","grid":[35.68173,139.766185],"machineNum":9,"prefId":13},{"name":"東京レジャーランド秋葉原2号店","address":"東京都千代田区外神田４丁目３－３ ミナミビル６階","grid":[35.700742,139.771949],"machineNum":1,"prefId":13},{"name":"東京レジャーランド秋葉原店","address":"東京都千代田区外神田１－９－５ ナガシマアルファビル","grid":[35.698828,139.77012],"machineNum":3,"prefId":13},{"name":"ＣＬＵＢＳＥＧＡ秋葉原新館","address":"東京都千代田区外神田１－１１－１１ 外神田１丁目ビル","grid":[35.699257,139.770973],"machineNum":1,"prefId":13},{"name":"Ｈｅｙ","address":"東京都千代田区外神田１－１０－５ 広瀬本社ビル２Ｆ","grid":[35.699024,139.771062],"machineNum":5,"prefId":13},{"name":"タイトーステーション浅草","address":"東京都台東区浅草１－２７－３ タイトーステーション浅草","grid":[35.712592,139.793932],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア上野","address":"東京都台東区上野４－１０－１０ ヨドバシカメラマルチメディア上野","grid":[35.711101,139.774433],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー大井町店","address":"東京都品川区大井１－３－６ イトーヨーカドー大井町","grid":[35.607195,139.733904],"machineNum":2,"prefId":13},{"name":"モーリーファンタジー品川シーサイド店","address":"東京都品川区東品川4-12-5 イオン品川シーサイド","grid":[35.610951,139.74911],"machineNum":3,"prefId":13},{"name":"にこぱ錦糸町","address":"東京都墨田区江東橋3-9-10","grid":[35.69489,139.813705],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー曳舟店","address":"東京都墨田区京島１－２－１ イトーヨーカドー曳舟","grid":[35.717393,139.817833],"machineNum":1,"prefId":13},{"name":"キッズプラザきゃらんど曳舟店","address":"東京都墨田区京島１－２－１ イトーヨーカドー曳舟４階","grid":[35.717393,139.817833],"machineNum":1,"prefId":13},{"name":"タイトーFステーション オリナス錦糸町店","address":"東京都墨田区太平4―1-2 オリナスモールB1階","grid":[35.70072,139.81581],"machineNum":2,"prefId":13},{"name":"タイトーステーション錦糸町楽天地店","address":"東京都墨田区江東橋４－２７－１４ 楽天地ビル１階","grid":[35.69631,139.815865],"machineNum":1,"prefId":13},{"name":"ハローズガーデン墨田文花店","address":"東京都墨田区文花１－３１－９ オリンピック墨田文花１階","grid":[35.70684,139.823758],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア錦糸町","address":"東京都墨田区江東橋３－１４－５ 錦糸町ステーションビルテルミナ２Ｆ","grid":[35.696447,139.813927],"machineNum":1,"prefId":13},{"name":"namco東急プラザ蒲田店","address":"東京都大田区西蒲田７－６９－１ 東急プラザ蒲田","grid":[35.562076,139.715319],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー大森店","address":"東京都大田区大森北２－１３－１ イトーヨーカドー大森","grid":[35.586496,139.732997],"machineNum":2,"prefId":13},{"name":"シルクハット蒲田西口","address":"東京都大田区西蒲田7-2-3","grid":[35.563082,139.715928],"machineNum":1,"prefId":13},{"name":"タイトーステーションBIGFAN平和島店","address":"東京都大田区平和島 1-1-1 BIGFAN平和島3F","grid":[35.584616,139.740494],"machineNum":1,"prefId":13},{"name":"ハローズガーデン新糀谷店","address":"東京都大田区萩中２－１２－５ マルエツ新糀谷２階","grid":[35.550955,139.732861],"machineNum":1,"prefId":13},{"name":"ＳＯＹＵＺＡＵＲＵＳＷＯＲＬＤ大森店","address":"東京都大田区大森北２－１３－１ イトーヨーカドー大森３階","grid":[35.586299,139.732953],"machineNum":2,"prefId":13},{"name":"セガ 東京ドームシティ","address":"東京都文京区後楽１－３－６１ 東京ドームシティアトラクションズ内　カーニバル","grid":[35.70539,139.752265],"machineNum":2,"prefId":13},{"name":"タイトーステーション新宿南口ＧＷ店","address":"東京都新宿区新宿３－３５－８ タイトーステーション新宿南口ＧＷ","grid":[35.689866,139.702255],"machineNum":2,"prefId":13},{"name":"タイトーステーション新宿東口店","address":"東京都新宿区新宿3-22-7 指田ビル","grid":[35.693217,139.701468],"machineNum":1,"prefId":13},{"name":"タイトーステーションＢＩＧＢＯＸ高田馬場","address":"東京都新宿区高田馬場１－３５－３ ＢＩＧＢＯＸ６階","grid":[35.712595,139.704288],"machineNum":2,"prefId":13},{"name":"ビックカメラ新宿西口店","address":"東京都新宿区西新宿１－５－１ 新宿西口ハルク","grid":[35.692539,139.698629],"machineNum":2,"prefId":13},{"name":"ビックロ ビックカメラ新宿東口店","address":"東京都新宿区新宿３丁目２９番地１ ビックロビックカメラ新宿東口","grid":[35.69138,139.702996],"machineNum":2,"prefId":13},{"name":"ヨドバシカメラマルチメディア新宿東口別館","address":"東京都新宿区新宿３－２６－７ ヨドバシカメラマルチメディア新宿東口別館","grid":[35.691689,139.701823],"machineNum":2,"prefId":13},{"name":"ヨドバシカメラ新宿西口本店 ゲーム・ホビー館","address":"東京都新宿区西新宿１－１１－１ ヨドバシカメラ新宿西口本店","grid":[35.689517,139.697619],"machineNum":3,"prefId":13},{"name":"小田急百貨新宿店 本館9F玩具売り場","address":"東京都新宿区西新宿１－１－３ 小田急百貨新宿","grid":[35.691654,139.699632],"machineNum":2,"prefId":13},{"name":"ＣＬＵＢＳＥＧＡ新宿西口","address":"東京都新宿区西新宿１－１２－５ ＣＬＵＢＳＥＧＡ新宿西口","grid":[35.689441,139.697438],"machineNum":1,"prefId":13},{"name":"西友阿佐ヶ谷店","address":"東京都杉並区阿佐ヶ谷北１－５－６ 西友阿佐ヶ谷","grid":[35.710034,139.637558],"machineNum":1,"prefId":13},{"name":"PALO成増店","address":"東京都板橋区成増２－２１－２ ダイエー成増４階","grid":[35.778126,139.63044],"machineNum":3,"prefId":13},{"name":"イトーヨーカドー上板橋店","address":"東京都板橋区常盤台４－２６－１ イトーヨーカドー上板橋","grid":[35.764279,139.678214],"machineNum":1,"prefId":13},{"name":"ゲームサファリ大山","address":"東京都板橋区大山東町 ６０－１０ やすだ大山駅前２Ｆ","grid":[35.749028,139.702239],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー板橋店","address":"東京都板橋区徳丸2-6-1 イオン板橋","grid":[35.770191,139.660766],"machineNum":3,"prefId":13},{"name":"アムネット小岩店","address":"東京都江戸川区南小岩６－３１－３ 石井ビル１階","grid":[35.732033,139.880528],"machineNum":1,"prefId":13},{"name":"イトーヨーカドーアリオ葛西店","address":"東京都江戸川区東葛西9-3-3 イトーヨーカドー葛西","grid":[35.652536,139.881808],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー小岩店","address":"東京都江戸川区西小岩１－２４－１ イトーヨーカドー小岩","grid":[35.733637,139.88151],"machineNum":2,"prefId":13},{"name":"キャッツアイ西葛西店","address":"東京都江戸川区西葛西４－２－２８ サニーモール西葛西","grid":[35.668264,139.861764],"machineNum":2,"prefId":13},{"name":"セガワールド船堀","address":"東京都江戸川区船堀１－６－１１ セガワールド船堀","grid":[35.684625,139.863953],"machineNum":1,"prefId":13},{"name":"セガワールド葛西","address":"東京都江戸川区東葛西９－３－３ イトーヨーカドー葛西３Ｆ","grid":[35.652536,139.881808],"machineNum":3,"prefId":13},{"name":"ドン・キホーテラパーク瑞江店","address":"東京都江戸川区瑞江２－１－２ ドン・キホーテラパーク瑞江","grid":[35.692836,139.896757],"machineNum":1,"prefId":13},{"name":"モーリーファンタジーホームズ葛西店","address":"東京都江戸川区東葛西９－３－６ ホームズ葛西","grid":[35.653854,139.882791],"machineNum":1,"prefId":13},{"name":"ライフ篠崎店","address":"東京都江戸川区篠崎町７－２７－１ ライフ篠崎","grid":[35.706026,139.903766],"machineNum":1,"prefId":13},{"name":"宝島 瑞江店","address":"東京都江戸川区瑞江2-1-2 ドン・キホーテラパーク瑞江4階","grid":[35.692742,139.896827],"machineNum":1,"prefId":13},{"name":"東京健康ランドまねきの湯","address":"東京都江戸川区船堀１－２－１","grid":[35.686834,139.861652],"machineNum":1,"prefId":13},{"name":"namcoイトーヨーカドー木場店","address":"東京都江東区木場1-5-30 イトーヨーカドー木場2・3F","grid":[35.66618,139.804265],"machineNum":1,"prefId":13},{"name":"アドアーズ南砂町ＳＵＮＡＭＯ店","address":"東京都江東区新砂３－４－３１ 南砂町ショッピングセンターＳＵＮＡＭＯ","grid":[35.665198,139.835208],"machineNum":2,"prefId":13},{"name":"アミュージアム豊洲店","address":"東京都江東区豊洲２－４－９ ららぽーと豊洲３階","grid":[35.655531,139.79234],"machineNum":2,"prefId":13},{"name":"イトーヨーカドーアリオ北砂店","address":"東京都江東区北砂2-17 アリオ北砂3階","grid":[35.684226,139.825857],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー木場店","address":"東京都江東区木場１－５－３０ イトーヨーカドー木場","grid":[35.66618,139.804265],"machineNum":2,"prefId":13},{"name":"キッズスクエア東大島","address":"東京都江東区大島7-38-30","grid":[35.69086,139.842589],"machineNum":1,"prefId":13},{"name":"ダイエー東大島店","address":"東京都江東区大島7-38-30 ダイエー東大島","grid":[35.69086,139.842589],"machineNum":1,"prefId":13},{"name":"ハローズガーデン北砂店","address":"東京都江東区北砂２－１７ アリオ北砂３階","grid":[35.684226,139.825857],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー南砂店","address":"東京都江東区南砂６－７－１５ イオン南砂３階","grid":[35.671598,139.835639],"machineNum":3,"prefId":13},{"name":"ラウンドワンスタジアム ダイバーシティ東京プラザ店","address":"東京都江東区青海１丁目１番１０号 ダイバーシティ東京６階","grid":[35.625014,139.775112],"machineNum":2,"prefId":13},{"name":"タイトーステーション渋谷店","address":"東京都渋谷区渋谷１－２４－１２ 渋谷東映プラザ１階　タイトーステーション内","grid":[35.659853,139.701994],"machineNum":1,"prefId":13},{"name":"ハイテクランドセガ渋谷","address":"東京都渋谷区渋谷１－１４－１４ ＥＳＴビル","grid":[35.660046,139.702755],"machineNum":1,"prefId":13},{"name":"ビックカメラ渋谷東口店","address":"東京都渋谷区渋谷１－２４－１２ ビックカメラ渋谷東口","grid":[35.659972,139.701923],"machineNum":1,"prefId":13},{"name":"ビックカメラ赤坂見附駅店","address":"東京都港区赤坂３－１－６ ビックカメラ赤坂見附駅","grid":[35.677038,139.736768],"machineNum":1,"prefId":13},{"name":"東京レジャーランドお台場店","address":"東京都港区台場1丁目7番1号 アクアシティお台場4F409区","grid":[35.627742,139.773522],"machineNum":1,"prefId":13},{"name":"イオンスタイル碑文谷店","address":"東京都目黒区碑文谷4-1-1","grid":[35.622355,139.684202],"machineNum":1,"prefId":13},{"name":"ＣＬＵＢＳＥＧＡ自由ヶ丘","address":"東京都目黒区自由が丘２－１０－９ ＣＬＵＢＳＥＧＡ自由ヶ丘","grid":[35.608459,139.667592],"machineNum":1,"prefId":13},{"name":"アミュージアム大泉","address":"東京都練馬区東大泉２－１０－１１ 西友リヴィンオズ大泉５階","grid":[35.752273,139.595435],"machineNum":3,"prefId":13},{"name":"アミュージアムＯＳＣ店","address":"東京都練馬区東大泉２－３４－１ Ｔ・ジョイ大泉２Ｆ","grid":[35.753014,139.594837],"machineNum":1,"prefId":13},{"name":"イオン練馬店","address":"東京都練馬区光が丘５－１－１ 光が丘ＩＭＡ","grid":[35.759736,139.628306],"machineNum":2,"prefId":13},{"name":"ナムコランド練馬店","address":"東京都練馬区光が丘５‐１ 光が丘ＩＭＡ","grid":[35.759757,139.628294],"machineNum":1,"prefId":13},{"name":"ライフ平和台店","address":"東京都練馬区北町６－１０－１ ライフ平和台","grid":[35.758951,139.653396],"machineNum":2,"prefId":13},{"name":"リヴィン光が丘キッズパーク","address":"東京都練馬区光が丘５－１－１ 光が丘ＩＭＡ","grid":[35.759736,139.628306],"machineNum":1,"prefId":13},{"name":"西友リヴィンオズ大泉店","address":"東京都練馬区東大泉２－１０－１１ 西友リヴィンオズ大泉","grid":[35.752273,139.595435],"machineNum":1,"prefId":13},{"name":"西友練馬ＰＡＲＴ２店","address":"東京都練馬区練馬１－３－１０ 西友練馬","grid":[35.737825,139.653506],"machineNum":1,"prefId":13},{"name":"サンポップマチヤ-","address":"東京都荒川区荒川7-50-9 サンポップマチヤ","grid":[35.742456,139.78078],"machineNum":1,"prefId":13},{"name":"○×△□（ラくトス）","address":"東京都葛飾区新小岩１－４４－６ 新小岩プラザビル","grid":[35.716112,139.858286],"machineNum":1,"prefId":13},{"name":"イトーヨーカドーアリオ亀有店","address":"東京都葛飾区亀有3-49-3 アリオ亀有","grid":[35.764455,139.852592],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー四つ木店","address":"東京都葛飾区四つ木２－２１－１ イトーヨーカドー四つ木","grid":[35.737092,139.838572],"machineNum":3,"prefId":13},{"name":"イトーヨーカドー高砂店","address":"東京都葛飾区高砂３－１２－５ イトーヨーカドー高砂","grid":[35.75079,139.868122],"machineNum":1,"prefId":13},{"name":"ライフ奥戸店","address":"東京都葛飾区奥戸３－２３－１９ ライフ奥戸","grid":[35.730604,139.862654],"machineNum":1,"prefId":13},{"name":"ライフ水元店","address":"東京都葛飾区水元２－１１－５ ライフ水元","grid":[35.787307,139.856724],"machineNum":1,"prefId":13},{"name":"東京レジャーランド亀有店","address":"東京都葛飾区亀有３－２１－２ 東京レジャーランド亀有","grid":[35.765475,139.84793],"machineNum":2,"prefId":13},{"name":"AMサントロペ池袋","address":"東京都豊島区東池袋1-29 サントロペビル2F","grid":[35.730375,139.716428],"machineNum":1,"prefId":13},{"name":"アイカツ!オフィシャルショップ CPS池袋サンシャインシティ店","address":"東京都豊島区東池袋3‐1‐3 サンシャインシティ内ALTA 1階","grid":[35.728856,139.720013],"machineNum":6,"prefId":13},{"name":"タイトーステーション池袋西口","address":"東京都豊島区西池袋1丁目15番9号 西池ビル","grid":[35.730522,139.709724],"machineNum":2,"prefId":13},{"name":"ビックカメラ池袋本店","address":"東京都豊島区東池袋１－４１－５ ビックカメラ池袋本店","grid":[35.731623,139.712965],"machineNum":2,"prefId":13},{"name":"ビックカメラ池袋西口店","address":"東京都豊島区西池袋１－１６－３ ビックカメラ池袋西口","grid":[35.73088,139.709009],"machineNum":1,"prefId":13},{"name":"ライフ千川駅前店","address":"東京都豊島区要町３－４５－４ ライフ千川駅前","grid":[35.739607,139.688257],"machineNum":1,"prefId":13},{"name":"池袋ＧＩＧＯ","address":"東京都豊島区東池袋１－２１－１ 池袋ＧＩＧＯ","grid":[35.730183,139.715902],"machineNum":2,"prefId":13},{"name":"イトーヨーカドーアリオ西新井店","address":"東京都足立区西新井栄町1-20-1 アリオ西新井","grid":[35.774708,139.785676],"machineNum":3,"prefId":13},{"name":"イトーヨーカドー竹の塚店","address":"東京都足立区竹の塚５－１７－１ イトーヨーカドー竹の塚","grid":[35.795424,139.795326],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー綾瀬店","address":"東京都足立区綾瀬３－４－２５ イトーヨーカドー綾瀬","grid":[35.762732,139.825468],"machineNum":1,"prefId":13},{"name":"ゲオ鹿浜店","address":"東京都足立区谷在家２－１１－２ ゲオ鹿浜","grid":[35.783333,139.766191],"machineNum":1,"prefId":13},{"name":"セガ竹の塚","address":"東京都足立区竹の塚６－８－３ ピーくんプラザ","grid":[35.794578,139.792424],"machineNum":2,"prefId":13},{"name":"ライフ竹の塚店","address":"東京都足立区西伊興４－１－２２ ライフ竹の塚","grid":[35.801481,139.783308],"machineNum":1,"prefId":13},{"name":"ハローズガーデンあきる野","address":"東京都あきる野市秋川１－１７－１ あきる野とうきゅう３Ｆ","grid":[35.730736,139.287337],"machineNum":1,"prefId":13},{"name":"YAZWORLD八王子みなみ野店","address":"東京都八王子市みなみ野1-2-1 アクロスモール3階","grid":[35.630701,139.329375],"machineNum":1,"prefId":13},{"name":"にこぱイーアス高尾","address":"東京都八王子市東浅川町549-3","grid":[35.644028,139.287965],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー八王子店","address":"東京都八王子市狭間町１４６２－１ イトーヨーカドー八王子","grid":[35.637843,139.293528],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー南大沢店","address":"東京都八王子市南大沢２－２８－１ イトーヨーカドー南大沢","grid":[35.613166,139.379419],"machineNum":1,"prefId":13},{"name":"シルクハット八王子店","address":"東京都八王子市旭町2-5 八王子ツインタワービル3F","grid":[35.656433,139.338483],"machineNum":1,"prefId":13},{"name":"ソピア八王子店","address":"東京都八王子市狭間町１４６２－１ イトーヨーカドー八王子３階","grid":[35.637843,139.293528],"machineNum":1,"prefId":13},{"name":"ソピア南大沢店","address":"東京都八王子市南大沢２－２８－１ イトーヨーカドー南大沢３階","grid":[35.613166,139.379419],"machineNum":1,"prefId":13},{"name":"ドラマ八王子高倉店","address":"東京都八王子市高倉町５５－４ ドラマ八王子高倉","grid":[35.665054,139.36648],"machineNum":1,"prefId":13},{"name":"ドン・キホーテ八王子駅前店","address":"東京都八王子市中町１－３ ドン・キホーテ八王子駅前","grid":[35.658032,139.337276],"machineNum":1,"prefId":13},{"name":"ビックカメラＪＲ八王子駅店","address":"東京都八王子市旭町１－１７ セレオ八王子","grid":[35.654718,139.339003],"machineNum":3,"prefId":13},{"name":"プレビ三和堀之内","address":"東京都八王子市別所2丁目1","grid":[35.6237,139.400443],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラ八王子店","address":"東京都八王子市東町７－４ ヨドバシカメラ八王子","grid":[35.657966,139.339623],"machineNum":2,"prefId":13},{"name":"東京あそびマーレ","address":"東京都八王子市別所2-1-2","grid":[35.623506,139.400168],"machineNum":1,"prefId":13},{"name":"タイトーステーション 国分寺店","address":"東京都国分寺市本町3-5-11","grid":[35.70146,139.480053],"machineNum":1,"prefId":13},{"name":"PALO聖蹟桜ヶ丘店","address":"東京都多摩市関戸4-72 聖蹟桜ケ丘オーパ6階","grid":[35.649634,139.447073],"machineNum":2,"prefId":13},{"name":"THE 3RD PLANET 多摩センター店","address":"東京都多摩市落合１－３９－２ マグレブビル","grid":[35.624587,139.425678],"machineNum":2,"prefId":13},{"name":"namcoクロスガーデン多摩店","address":"東京都多摩市落合２－３３ クロスガーデン多摩３Ｆ","grid":[35.620132,139.423251],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー多摩センター店","address":"東京都多摩市落合１－４４ イトーヨーカドー多摩センター","grid":[35.623619,139.425732],"machineNum":1,"prefId":13},{"name":"キッズトレイン永山店","address":"東京都多摩市永山1-4 グリナード永山3F","grid":[35.630915,139.448269],"machineNum":1,"prefId":13},{"name":"タイトーステーション多摩センター店","address":"東京都多摩市落合１－４５－１ 丘の上パティオ","grid":[35.623164,139.426274],"machineNum":1,"prefId":13},{"name":"トイザらス多摩店","address":"東京都多摩市東寺方６６０－１ トイザらス多摩","grid":[35.641167,139.436434],"machineNum":2,"prefId":13},{"name":"京王百貨店 聖蹟桜ヶ丘店 7階玩具売場","address":"東京都多摩市関戸１－１０－１ 京王百貨聖蹟桜ヶ丘","grid":[35.651327,139.447193],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー小平店","address":"東京都小平市小川東町2-12-1 ダイエー小平","grid":[35.74335,139.467488],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー武蔵小金井店","address":"東京都小金井市本町６－１４－９ イトーヨーカドー武蔵小金井","grid":[35.700523,139.504798],"machineNum":2,"prefId":13},{"name":"ハローズガーデン武蔵小金井店","address":"東京都小金井市本町６－１４－９ イトーヨーカドー武蔵小金井４階","grid":[35.700495,139.504785],"machineNum":1,"prefId":13},{"name":"セガワールド府中","address":"東京都府中市西原町１－６－２ フレスポ府中","grid":[35.682397,139.460386],"machineNum":3,"prefId":13},{"name":"トイザらス府中駅前店","address":"東京都府中市宮町１－５０ くるるＢ１Ｆ","grid":[35.671468,139.480935],"machineNum":1,"prefId":13},{"name":"ライフ府中中河原店","address":"東京都府中市住吉町１－８４－１ ライフ府中中河原","grid":[35.660266,139.458335],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー多摩平の森店","address":"東京都日野市多摩平2丁目4番1 イオンモール多摩平の森","grid":[35.662012,139.380865],"machineNum":3,"prefId":13},{"name":"アミュージアムモリタウン昭島店","address":"東京都昭島市田中町562-1 モリタウン2階","grid":[35.714106,139.362165],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー拝島店","address":"東京都昭島市松原町３－２－１２ イトーヨーカドー拝島","grid":[35.715579,139.348023],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー昭島店","address":"東京都昭島市田中町５６２－１ モリタウン","grid":[35.714104,139.362155],"machineNum":1,"prefId":13},{"name":"ザ・ビッグ昭島アミューズパーク","address":"東京都昭島市 宮沢町500-1 ザ・ビッグ昭島店3階","grid":[35.716299,139.373084],"machineNum":1,"prefId":13},{"name":"トイザらス昭島店","address":"東京都昭島市田中町５７３－１－４ モリタウン","grid":[35.714999,139.363211],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー東久留米店","address":"東京都東久留米市本町３－８－１ イトーヨーカドー東久留米","grid":[35.75897,139.528823],"machineNum":3,"prefId":13},{"name":"モーリーファンタジー東久留米店","address":"東京都東久留米市南沢５－１７ イオン東久留米３階","grid":[35.7452,139.526676],"machineNum":4,"prefId":13},{"name":"イトーヨーカドー東大和店","address":"東京都東大和市桜が丘２－１４２－１ イトーヨーカドー東大和","grid":[35.735946,139.424358],"machineNum":2,"prefId":13},{"name":"セガワールド東大和","address":"東京都東大和市桜ヶ丘１－１３３０－１９ ＢＩＧＢＯＸ東大和１Ｆ","grid":[35.733376,139.433733],"machineNum":2,"prefId":13},{"name":"ハローズガーデン東大和店","address":"東京都東大和市桜が丘２－１４２－１ イトーヨーカドー東大和２階","grid":[35.735946,139.424358],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー東村山店","address":"東京都東村山市本町２－２－１９ イトーヨーカドー東村山","grid":[35.758768,139.466536],"machineNum":1,"prefId":13},{"name":"イオンモールむさし村山 ノジマイオンモールむさし村山店内玩具コーナー","address":"東京都武蔵村山市榎1丁目1-3 イオンモールむさし村山 3Fノジマ内","grid":[35.746384,139.384923],"machineNum":1,"prefId":13},{"name":"タイトーFステーション ダイエー武蔵村山店","address":"東京都武蔵村山市伊奈平3-36-1","grid":[35.735703,139.3789],"machineNum":1,"prefId":13},{"name":"ダイエー武蔵村山店","address":"東京都武蔵村山市伊那平3-36-1","grid":[35.735703,139.3789],"machineNum":1,"prefId":13},{"name":"モーリーファンタジーむさし村山店","address":"東京都武蔵村山市榎1丁目1番3号 イオンモールむさし村山3階","grid":[35.746384,139.384923],"machineNum":4,"prefId":13},{"name":"イトーヨーカドー武蔵境店","address":"東京都武蔵野市境南町２－２－２０ イトーヨーカドー武蔵境","grid":[35.701031,139.544786],"machineNum":3,"prefId":13},{"name":"キデイランド吉祥寺店","address":"東京都武蔵野市吉祥寺本町１－１１－５ コピス吉祥寺６階　Ａ棟","grid":[35.70508,139.579673],"machineNum":1,"prefId":13},{"name":"プラサカプコン吉祥寺店","address":"東京都武蔵野市吉祥寺本町１－１０－１ いなりやビル１階","grid":[35.705313,139.579067],"machineNum":4,"prefId":13},{"name":"ヨドバシカメラマルチメディア吉祥寺","address":"東京都武蔵野市吉祥寺本町１－１９－１ ヨドバシカメラマルチメディア吉祥寺５Ｆ","grid":[35.704714,139.581559],"machineNum":3,"prefId":13},{"name":"MrMax町田多摩境店","address":"東京都町田市小山ヶ丘６－１－１０ ＭｒＭａｘ町田多摩境ショッピングセンター","grid":[35.606144,139.349615],"machineNum":1,"prefId":13},{"name":"こころっこ町田根岸店","address":"東京都町田市根岸町２３０－７ アメリア町田根岸ショッピングセンター２階","grid":[35.577671,139.407849],"machineNum":1,"prefId":13},{"name":"タイトーステーション町田店","address":"東京都町田市原町田６－２１－２３ 松山ビル１Ｆ","grid":[35.542744,139.448467],"machineNum":2,"prefId":13},{"name":"ビックカメラ町田店","address":"東京都町田市原町田6-12-20 小田急百貨店 町田店 7階・8階","grid":[35.543983,139.445084],"machineNum":1,"prefId":13},{"name":"プレビままともプラザ町田店","address":"東京都町田市旭町1-24-1","grid":[35.554925,139.442568],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア町田","address":"東京都町田市原町田１－１－１１ ヨドバシカメラマルチメディア町田","grid":[35.542357,139.444351],"machineNum":2,"prefId":13},{"name":"西友新福生店キッズパーク","address":"東京都福生市東町５－１ 西友福生","grid":[35.743218,139.32808],"machineNum":1,"prefId":13},{"name":"西友福生店","address":"東京都福生市東町５－１ 西友福生","grid":[35.743218,139.32808],"machineNum":1,"prefId":13},{"name":"アミューズメントカフェプレビアメリア稲城","address":"東京都稲城市矢野口2284-1 アメリア稲城ショッピングセンター2F","grid":[35.635688,139.515433],"machineNum":2,"prefId":13},{"name":"CLUBSEGA立川","address":"東京都立川市柴崎町３－２－１ サザンビル１階","grid":[35.697261,139.414696],"machineNum":2,"prefId":13},{"name":"namcoららぽーと立川立飛店","address":"東京都立川市泉町935-1 ららぽーと立川立飛店3F","grid":[35.713075,139.41789],"machineNum":1,"prefId":13},{"name":"タイトーステーション 立川北口店","address":"東京都立川市曙町2-4-5","grid":[35.69919,139.412117],"machineNum":2,"prefId":13},{"name":"ビックカメラ立川店","address":"東京都立川市曙町２－１２－２ ビックカメラ立川","grid":[35.699299,139.414854],"machineNum":3,"prefId":13},{"name":"西友リヴィン田無店","address":"東京都西東京市田無町２－１－１ 西友リヴィン田無","grid":[35.72851,139.540321],"machineNum":2,"prefId":13},{"name":"にこぱ仙川店","address":"東京都調布市若葉町２－２ 島忠ホームズ仙川２Ｆ","grid":[35.65759,139.588486],"machineNum":1,"prefId":13},{"name":"アドベンチャーリーフ国領店","address":"東京都調布市国領町８－２－６４ イトーヨーカドー国領３階","grid":[35.646748,139.564],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー国領店","address":"東京都調布市国領町８－２－６４ イトーヨーカドー国領","grid":[35.646748,139.564],"machineNum":3,"prefId":13},{"name":"ビックカメラ京王調布店","address":"東京都調布市小島町2-48-6 トリエ京王調布B館","grid":[35.652114,139.543202],"machineNum":2,"prefId":13},{"name":"西友調布店","address":"東京都調布市小島町１－１０－１ 西友調布","grid":[35.653619,139.543939],"machineNum":1,"prefId":13},{"name":"namcoザ・モールみずほ16店","address":"東京都西多摩郡瑞穂町高根６２３ 西友ザ・モールみずほ１６","grid":[35.786274,139.349631],"machineNum":1,"prefId":13},{"name":"ドラマ瑞穂店","address":"東京都西多摩郡瑞穂町大字武蔵３８２－１ ドラマ瑞穂","grid":[35.763198,139.356841],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー日の出店","address":"東京都西多摩郡日の出町大字平井字三吉野桜木237番3 イオンモール日の出","grid":[35.734714,139.273949],"machineNum":4,"prefId":13},{"name":"ユーズランド日の出店","address":"東京都西多摩郡日の出町平井三吉野桜木５５７番地 イオンモール日の出３階","grid":[35.74585,139.268936],"machineNum":1,"prefId":13},{"name":"HVS倉庫","address":"東京都ダミー","grid":[0,0],"machineNum":2,"prefId":13},{"name":"イトーヨーカドー伊勢原店","address":"神奈川県伊勢原市桜台１－８－１ イトーヨーカドー伊勢原","grid":[35.395343,139.31524],"machineNum":2,"prefId":14},{"name":"タイトーFステーションイオン伊勢原店","address":"神奈川県伊勢原市白根630-1 イオン伊勢原3F","grid":[35.397473,139.295497],"machineNum":1,"prefId":14},{"name":"トイザらス厚木店","address":"神奈川県厚木市妻田東３－２５－２４ トイザらス厚木","grid":[35.461177,139.360561],"machineNum":1,"prefId":14},{"name":"トムソーヤのなかまたち厚木店","address":"神奈川県厚木市戸室5-31-1 アツギ・トレリス3F","grid":[35.448236,139.342632],"machineNum":1,"prefId":14},{"name":"ハローズガーデン厚木店","address":"神奈川県厚木市中町1-5-10 厚木ガーデンシティ5階","grid":[35.442011,139.366639],"machineNum":1,"prefId":14},{"name":"ミリアンパーク厚木店","address":"神奈川県厚木市田村町９－２５ ミリアンパーク厚木","grid":[35.434999,139.35785],"machineNum":2,"prefId":14},{"name":"神奈川レジャーランド厚木店","address":"神奈川県厚木市戸室５－３１－１ アツギ・トレリス","grid":[35.448225,139.342632],"machineNum":3,"prefId":14},{"name":"イトーヨーカドー大和鶴間店","address":"神奈川県大和市下鶴間１－３－１ イトーヨーカドー大和鶴間","grid":[35.490558,139.457225],"machineNum":2,"prefId":14},{"name":"プレイランド大和鶴間店","address":"神奈川県大和市下鶴間１－３－１ イトーヨーカドー大和鶴間３階","grid":[35.490558,139.457225],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー大和店","address":"神奈川県大和市下和田字上ノ原1216-1 イオン大和3階","grid":[35.42953,139.468211],"machineNum":3,"prefId":14},{"name":"モーリーファンタジー大和鶴間店","address":"神奈川県大和市下鶴間一丁目２番１号 イオン大和鶴間３階","grid":[35.488923,139.457961],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー小田原店","address":"神奈川県小田原市中里２９６－１ 小田原ダイナシティ","grid":[35.281716,139.188598],"machineNum":1,"prefId":14},{"name":"キッズトレイン小田原店","address":"神奈川県小田原市中里２０８ 西武小田原ダイナシティ４階","grid":[35.283981,139.185547],"machineNum":1,"prefId":14},{"name":"セガ小田原ダイナシティ","address":"神奈川県小田原市中里２９６－１ 小田原ダイナシティ","grid":[35.281716,139.188598],"machineNum":1,"prefId":14},{"name":"トイザらス小田原店","address":"神奈川県小田原市前川１２０ 小田原シティーモールクレッセ２Ｆ","grid":[35.280247,139.195119],"machineNum":1,"prefId":14},{"name":"ナムコあそびパークPLUS小田原ダイナシティ店","address":"神奈川県小田原市中里208","grid":[35.284249,139.185474],"machineNum":1,"prefId":14},{"name":"小田原メトロポリス","address":"神奈川県小田原市前川２１９－４ 小田原メトロポリス","grid":[35.278735,139.194073],"machineNum":1,"prefId":14},{"name":"タイトーステーション小田原シティーモールクレッセ店","address":"神奈川県小田原市前川１２０ 小田原シティーモールクレッセ２Ｆ","grid":[35.280247,139.195119],"machineNum":2,"prefId":14},{"name":"AM PIA川崎モアーズ店","address":"神奈川県川崎市川崎区駅前本町７番地 岡田屋モアーズ１・２階","grid":[35.530543,139.699687],"machineNum":1,"prefId":14},{"name":"YAZ川崎店","address":"神奈川県川崎市幸区小倉1658-35 クロスガーデン川崎1F","grid":[35.538765,139.668169],"machineNum":1,"prefId":14},{"name":"namcoラゾーナ川崎店","address":"神奈川県川崎市幸区堀川町７２－１ ラゾーナ川崎４階","grid":[35.532839,139.695871],"machineNum":3,"prefId":14},{"name":"こころっこ川崎店","address":"神奈川県川崎市川崎区中瀬３－２０ホ ホームズ川崎２階ココロッコ","grid":[35.538705,139.733366],"machineNum":1,"prefId":14},{"name":"イオン新百合ヶ丘ファミリーパーク","address":"神奈川県川崎市麻生区上麻生１－１９ イオン新百合ヶ丘４Ｆ","grid":[35.60219,139.506446],"machineNum":1,"prefId":14},{"name":"イオン新百合ヶ丘店","address":"神奈川県川崎市麻生区上麻生１－１９ イオン新百合ヶ丘","grid":[35.60219,139.506446],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー グランツリー武蔵小杉店","address":"神奈川県川崎市中原区新丸子東３－１１３５－１ グランツリー武蔵小杉","grid":[35.573688,139.659802],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー川崎店","address":"神奈川県川崎市川崎区小田栄２－２－１ イトーヨーカドー川崎","grid":[35.51454,139.708807],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー川崎港町店","address":"神奈川県川崎市川崎区港町１２－１ イトーヨーカドー川崎港町","grid":[35.534198,139.718931],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー新百合ヶ丘店","address":"神奈川県川崎市麻生区上麻生１－４－１ イトーヨーカドー新百合ヶ丘","grid":[35.603111,139.509257],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー武蔵小杉駅前店","address":"神奈川県川崎市中原区小杉町３－４２０ イトーヨーカドー武蔵小杉駅前","grid":[35.575523,139.657804],"machineNum":3,"prefId":14},{"name":"イトーヨーカドー溝ノ口店","address":"神奈川県川崎市高津区久本３－６－２０ イトーヨーカドー溝ノ口","grid":[35.599042,139.615726],"machineNum":3,"prefId":14},{"name":"キッズトレインなっつべりぃ","address":"神奈川県川崎市川崎区港町12-1 イトーヨーカドー川崎港町2F","grid":[35.534198,139.718931],"machineNum":1,"prefId":14},{"name":"コジマXビックカメラ 梶ヶ谷店","address":"神奈川県川崎市高津区梶ヶ谷2-2-3","grid":[35.591137,139.602254],"machineNum":1,"prefId":14},{"name":"シルクハット川崎ダイス店","address":"神奈川県川崎市川崎区駅前本町８番地 川崎ダイスビルＢ２階","grid":[35.531165,139.700135],"machineNum":2,"prefId":14},{"name":"タイトーステーション溝の口店","address":"神奈川県川崎市高津区溝口１－１１－８ ムサシボウルビル １Ｆ","grid":[35.599952,139.612531],"machineNum":2,"prefId":14},{"name":"トイザらス川崎高津店","address":"神奈川県川崎市高津区溝口６－１１－１ トイザらス川崎高津","grid":[35.607893,139.612769],"machineNum":1,"prefId":14},{"name":"ビックカメララゾーナ川崎店","address":"神奈川県川崎市幸区堀川町７２－１ ラゾーナ川崎","grid":[35.533047,139.695902],"machineNum":3,"prefId":14},{"name":"フレッツ川崎野川店-","address":"神奈川県川崎市宮前区野川3961-1 フレッツ川崎野川","grid":[35.571607,139.597548],"machineNum":1,"prefId":14},{"name":"プレイランド川崎店","address":"神奈川県川崎市川崎区小田栄二丁目２－１ イトーヨーカドー川崎３階","grid":[35.512376,139.702625],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー向ヶ丘店","address":"神奈川県川崎市多摩区登戸2789 ダイエー向ヶ丘","grid":[35.615279,139.566292],"machineNum":2,"prefId":14},{"name":"モーリーファンタジー川崎小田栄店","address":"神奈川県川崎市川崎区小田栄2-3-1 コーナン川崎小田栄","grid":[35.514971,139.706804],"machineNum":1,"prefId":14},{"name":"ヨドバシカメラアウトレット京急川崎","address":"神奈川県川崎市川崎区駅前本町２１－１２ ヨドバシカメラアウトレット京急川崎","grid":[35.533403,139.70079],"machineNum":1,"prefId":14},{"name":"ヨドバシカメラマルチメディア川崎ルフロン","address":"神奈川県川崎市川崎区日進町１－１１ 川埼ルフロン４Ｆ玩具","grid":[35.529378,139.696648],"machineNum":3,"prefId":14},{"name":"ライフ宮内二丁目店","address":"神奈川県川崎市中原区宮内２－１－１ ライフ宮内二丁目","grid":[35.587211,139.640993],"machineNum":1,"prefId":14},{"name":"ライフ宮崎台店","address":"神奈川県川崎市宮前区宮崎２－３－８ ライフ宮崎台","grid":[35.588767,139.592676],"machineNum":1,"prefId":14},{"name":"namcoＯＳＣ湘南シティ店","address":"神奈川県平塚市代官町３３番地１ ＯＳＣ湘南シティ","grid":[35.328411,139.358787],"machineNum":2,"prefId":14},{"name":"アミューズメントランドYAZ平塚店","address":"神奈川県平塚市田村1丁目4-26 アミューズメントランドYAZ平塚","grid":[35.365382,139.360566],"machineNum":1,"prefId":14},{"name":"トイザらス平塚店","address":"神奈川県平塚市代官町３３－１Ｏ ＯＳＣ湘南シティ１Ｆ","grid":[35.328316,139.358263],"machineNum":2,"prefId":14},{"name":"ラウンドワンららぽーと湘南平塚","address":"神奈川県平塚市天沼10-1 ららぽーと湘南平塚3F","grid":[35.336457,139.35505],"machineNum":2,"prefId":14},{"name":"西友平塚店","address":"神奈川県平塚市東中原１－１－２５ 西友平塚","grid":[35.351459,139.342474],"machineNum":2,"prefId":14},{"name":"MEGAドン・キホーテUNY座間店","address":"神奈川県座間市入谷1-416-2","grid":[35.483044,139.394558],"machineNum":1,"prefId":14},{"name":"namcoイオンモール座間店","address":"神奈川県座間市広野台2-10-4","grid":[35.499869,139.425474],"machineNum":1,"prefId":14},{"name":"アミューズメントパークネバーランド2","address":"神奈川県座間市ひばりが丘４－１１－４８ アミューズメントパークネバーランド２","grid":[35.48005,139.432066],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー座間店","address":"神奈川県座間市広野台2-10-4","grid":[35.499869,139.425474],"machineNum":2,"prefId":14},{"name":"MEGAドン・キホーテUNY大口店","address":"神奈川県横浜市神奈川区神之木町2-30","grid":[35.493638,139.647513],"machineNum":1,"prefId":14},{"name":"NICOPA四季の森フォレオ店","address":"神奈川県横浜市旭区上白根3-41-1 フォレオ四季の森3階","grid":[35.498922,139.540844],"machineNum":2,"prefId":14},{"name":"namcoトレッサ横浜店","address":"神奈川県横浜市港北区師岡町700番地 トレッサ横浜南棟3階","grid":[35.525578,139.645397],"machineNum":2,"prefId":14},{"name":"namco港北TOKYUS・C店","address":"神奈川県横浜市都筑区茅ケ崎中央５番１号 港北ＴＯＫＹＵ・ＳＣ","grid":[35.544222,139.572239],"machineNum":2,"prefId":14},{"name":"あそびパークPLUS みなとみらい東急スクエア店","address":"神奈川県横浜市西区みなとみらい2-3-2","grid":[35.456324,139.632827],"machineNum":1,"prefId":14},{"name":"そごう 横浜店 8階","address":"神奈川県横浜市西区高島2-18-1 そごう横浜","grid":[35.465425,139.625095],"machineNum":2,"prefId":14},{"name":"アピタ戸塚店","address":"神奈川県横浜市戸塚区上倉田町７６９－１ アピタ戸塚","grid":[35.399123,139.537547],"machineNum":2,"prefId":14},{"name":"アピタ金沢文庫店","address":"神奈川県横浜市金沢区釜利谷東2-1-1 アピタ金沢文庫","grid":[35.341301,139.62019],"machineNum":1,"prefId":14},{"name":"アピタ長津田店","address":"神奈川県横浜市緑区長津田みなみ台４－７－１ アピタ長津田","grid":[35.518572,139.498955],"machineNum":2,"prefId":14},{"name":"アピナ山下公園店","address":"神奈川県横浜市中区新山下1-2-8","grid":[35.442385,139.654057],"machineNum":1,"prefId":14},{"name":"イトーヨーカドーたまプラーザ店","address":"神奈川県横浜市青葉区美しが丘１－６－１ イトーヨーカドーたまプラーザ","grid":[35.578348,139.556702],"machineNum":2,"prefId":14},{"name":"イトーヨーカドーららぽーと横浜店","address":"神奈川県横浜市都筑区池辺町４０３５－１ ららぽーと横浜","grid":[35.517074,139.566556],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー上永谷店","address":"神奈川県横浜市港南区丸山台１－１２ イトーヨーカドー上永谷","grid":[35.400611,139.572066],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー桂台店","address":"神奈川県横浜市栄区桂台中15-1","grid":[35.353214,139.566358],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー横浜別所店","address":"神奈川県横浜市南区別所１－１４－１ イトーヨーカドー横浜別所","grid":[35.415908,139.594784],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー洋光台店","address":"神奈川県横浜市磯子区洋光台３－１０－３ イトーヨーカドー洋光台","grid":[35.380257,139.594076],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー立場店","address":"神奈川県横浜市泉区中田西１－１－１５ イトーヨーカドー立場","grid":[35.413242,139.500519],"machineNum":3,"prefId":14},{"name":"イトーヨーカドー綱島店","address":"神奈川県横浜市港北区綱島西２－８－１ イトーヨーカドー綱島","grid":[35.535383,139.631838],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー能見台　キッズ・パーク","address":"神奈川県横浜市金沢区横浜市金沢区能見台東３－１ イトーヨーカドー能見台","grid":[35.358486,139.627244],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー能見台店","address":"神奈川県横浜市金沢区能見台東３－１ イトーヨーカドー能見台","grid":[35.358486,139.627244],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー若葉台店","address":"神奈川県横浜市旭区若葉台３－７－１ イトーヨーカドー若葉台","grid":[35.505249,139.498155],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー鶴見店","address":"神奈川県横浜市鶴見区鶴見中央３－１５－３０ イトーヨーカドー鶴見","grid":[35.508884,139.68615],"machineNum":2,"prefId":14},{"name":"オーケーストア港北店","address":"神奈川県横浜市都筑区葛が谷8-1 オーケーストアDC港北NT","grid":[35.537581,139.56147],"machineNum":1,"prefId":14},{"name":"ザ・サードプラネット横浜本店","address":"神奈川県横浜市都筑区中川中央1-25―1 ノースポート・モール6階","grid":[35.552024,139.57931],"machineNum":4,"prefId":14},{"name":"ジアス上大岡店","address":"神奈川県横浜市港南区上大岡西２－１－２８ 上大岡赤い風船","grid":[35.406577,139.596158],"machineNum":2,"prefId":14},{"name":"スコナランド イオン金沢","address":"神奈川県横浜市金沢区並木2-13-1 イオン金沢シーサイド3階","grid":[35.361569,139.640011],"machineNum":1,"prefId":14},{"name":"タイトーステーション戸塚西口店","address":"神奈川県横浜市戸塚区戸塚町４０２３番地","grid":[35.399552,139.531812],"machineNum":1,"prefId":14},{"name":"タイトーステーション横浜西口五番街店","address":"神奈川県横浜市西区南幸１－１２－９ タイトーステーション横浜西口五番街","grid":[35.464674,139.61959],"machineNum":1,"prefId":14},{"name":"トイザらス磯子店","address":"神奈川県横浜市磯子区磯子３－４－２３ トイザらス磯子","grid":[35.40292,139.619074],"machineNum":1,"prefId":14},{"name":"ナムコランドWAOこどものくに店","address":"神奈川県横浜市青葉区奈良１－２－１ 三和ショッピングセンター","grid":[35.557209,139.484373],"machineNum":1,"prefId":14},{"name":"ビックカメラ新横浜店","address":"神奈川県横浜市港北区新横浜２－１００－４５ キュ－ビックプラザ新横浜","grid":[35.507759,139.617446],"machineNum":2,"prefId":14},{"name":"ピアこばやし杉田東急店","address":"神奈川県横浜市磯子区杉田１－１７－１ 杉田東急３Ｆ","grid":[35.383744,139.616228],"machineNum":1,"prefId":14},{"name":"ファンタスティックジャーニー横浜店","address":"神奈川県横浜市都筑区池辺町４０３５－１ ららぽーと横浜２階","grid":[35.517305,139.566575],"machineNum":1,"prefId":14},{"name":"プラサカプコン磯子店","address":"神奈川県横浜市磯子区磯子１－１－１ マリコム磯子ショッピングセンター２階","grid":[35.414345,139.626686],"machineNum":1,"prefId":14},{"name":"モラモラ東神奈川店","address":"神奈川県横浜市神奈川区富家町1 イオン東神奈川","grid":[35.480066,139.633195],"machineNum":1,"prefId":14},{"name":"モーリーファンタジールララ港北店","address":"神奈川県横浜市都筑区中川中央2-2-1 ルララこうほく4F","grid":[35.548778,139.577817],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー三ツ境店","address":"神奈川県横浜市瀬谷区三ツ境７－１ ダイエー三ツ境２Ｆ","grid":[35.466023,139.504048],"machineNum":2,"prefId":14},{"name":"モーリーファンタジー本牧店","address":"神奈川県横浜市中区本牧原７－１ イオン本牧５階","grid":[35.425375,139.667092],"machineNum":2,"prefId":14},{"name":"モーリーファンタジー東戸塚店","address":"神奈川県横浜市戸塚区品濃町535-1 イオン東戸塚3F","grid":[35.430294,139.56148],"machineNum":3,"prefId":14},{"name":"モーリーファンタジー横浜新吉田店","address":"神奈川県横浜市港北区新吉田東八丁目４９番１号 イオン横浜新吉田２階","grid":[35.532446,139.612767],"machineNum":2,"prefId":14},{"name":"モーリーファンタジー港北店","address":"神奈川県横浜市都筑区中川中央1-31-1-5083 都筑阪急5階","grid":[35.554993,139.577962],"machineNum":2,"prefId":14},{"name":"モーリーファンタジー金沢八景店","address":"神奈川県横浜市金沢区泥亀1-27-1 ダイエー金沢八景","grid":[35.333838,139.622466],"machineNum":2,"prefId":14},{"name":"ヨドバシカメラマルチメディア京急上大岡","address":"神奈川県横浜市港南区上大岡西１－６－１ 京急百貨上大岡８Ｆ","grid":[35.409068,139.596581],"machineNum":2,"prefId":14},{"name":"ヨドバシカメラマルチメディア横浜","address":"神奈川県横浜市西区北幸１－２－７ ヨドバシカメラマルチメディア横浜６Ｆゲームホビー","grid":[35.467594,139.620408],"machineNum":4,"prefId":14},{"name":"ライフ鶴見店","address":"神奈川県横浜市鶴見区北寺尾２－１９ ライフ鶴見","grid":[35.515578,139.665151],"machineNum":1,"prefId":14},{"name":"西友鶴見店","address":"神奈川県横浜市鶴見区豊岡町２－１ 西友鶴見","grid":[35.508634,139.675149],"machineNum":1,"prefId":14},{"name":"ＣＬＵＢＳＥＧＡ新杉田","address":"神奈川県横浜市磯子区杉田１丁目１‐１ らびすた新杉田２Ｆ","grid":[35.385729,139.619103],"machineNum":1,"prefId":14},{"name":"タイトーステーションイトーヨーカドー横浜別所店","address":"神奈川県横浜市南区別所１－１１５－２ イトーヨーカドー横浜別所２Ｆ","grid":[35.416907,139.595813],"machineNum":1,"prefId":14},{"name":"プラサカプコン横須賀店","address":"神奈川県横須賀市若松町２－３０ モアーズシティ４階ゲームコーナー","grid":[35.278234,139.67008],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー久里浜店","address":"神奈川県横須賀市久里浜５丁目１３－１ イオン久里浜３階","grid":[35.229039,139.704016],"machineNum":4,"prefId":14},{"name":"リヴィンよこすかキッズ・パーク","address":"神奈川県横須賀市平成町３－２１－４ 西友リヴィンよこすか","grid":[35.274933,139.683722],"machineNum":1,"prefId":14},{"name":"西友リヴィンよこすか店","address":"神奈川県横須賀市平成町３－２１－４ 西友リヴィンよこすか","grid":[35.274933,139.683722],"machineNum":2,"prefId":14},{"name":"ららぽーと海老名 ノジマららぽーと海老名店内玩具コーナー","address":"神奈川県海老名市扇町13番1号 ららぽーと海老名","grid":[35.455938,139.389354],"machineNum":1,"prefId":14},{"name":"イオン海老名店","address":"神奈川県海老名市中央２－４－１ イオン海老名","grid":[35.450273,139.393064],"machineNum":2,"prefId":14},{"name":"タイトーステーション海老名ビナウォーク店","address":"神奈川県海老名市中央1ー18-1 ビナウォーク6番館2F","grid":[35.452695,139.395569],"machineNum":2,"prefId":14},{"name":"ハローズガーデン海老名店","address":"神奈川県海老名市中央２－４－１ イオン海老名２階","grid":[35.450273,139.393064],"machineNum":1,"prefId":14},{"name":"プリモピアさがみ野","address":"神奈川県海老名市東柏ケ谷5-14-6 マルエツさがみ野店2F","grid":[35.470073,139.431192],"machineNum":1,"prefId":14},{"name":"namcoイオン相模原店","address":"神奈川県相模原市南区古淵2-10-1 イオン相模原","grid":[35.553598,139.417366],"machineNum":1,"prefId":14},{"name":"アドアーズ橋本店","address":"神奈川県相模原市緑区橋本３－３－１ ＳＩＮＧ橋本２階","grid":[35.5943,139.349214],"machineNum":1,"prefId":14},{"name":"アピナ橋本店","address":"神奈川県相模原市緑区西橋本５－１－１ アピナ橋本１階","grid":[35.597514,139.338049],"machineNum":1,"prefId":14},{"name":"イトーヨーカドーアリオ橋本店","address":"神奈川県相模原市緑区大山町1-22 アリオ橋本","grid":[35.590916,139.34976],"machineNum":3,"prefId":14},{"name":"イトーヨーカドー古淵店","address":"神奈川県相模原市南区古淵３－１３－３３ イトーヨーカドー古淵","grid":[35.552832,139.418557],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー相模原店","address":"神奈川県相模原市南区松が枝町１７－１ イトーヨーカドー相模原","grid":[35.515511,139.425101],"machineNum":1,"prefId":14},{"name":"エブリデイFUNハウスこころっこアリオ橋本店","address":"神奈川県相模原市緑区大山町１－２２ アリオ橋本２階（２３５区画）　エブリデイＦＵＮハウス","grid":[35.590916,139.34976],"machineNum":2,"prefId":14},{"name":"コピオ相模原インター店","address":"神奈川県相模原市緑区川尻１４４７－５ コピオ相模原インター","grid":[35.604538,139.286678],"machineNum":1,"prefId":14},{"name":"セガワールド古淵","address":"神奈川県相模原市南区古淵３－１３－３３ イトーヨーカドー古淵３Ｆ","grid":[35.552832,139.418557],"machineNum":2,"prefId":14},{"name":"ニコパ相模原店","address":"神奈川県相模原市南区大野台６－１－１ ニトリモール相模原３Ｆ","grid":[35.555297,139.41023],"machineNum":1,"prefId":14},{"name":"ビックカメラ相模大野駅店","address":"神奈川県相模原市南区相模大野3-8-1 相模大野ステーションスクエアB館6階","grid":[35.531651,139.436839],"machineNum":2,"prefId":14},{"name":"モーリーファンタジーイオン相模原店","address":"神奈川県相模原市南区古淵２－１０－１ イオン相模原３階","grid":[35.55342,139.416929],"machineNum":4,"prefId":14},{"name":"モーリーファンタジー相模原小山店","address":"神奈川県相模原市中央区小山３－３７－１ コ－ナン相模原小山モ－ル２階","grid":[35.583042,139.35645],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー秦野店","address":"神奈川県秦野市入船町１２－１ イオン秦野２階","grid":[35.378119,139.228206],"machineNum":3,"prefId":14},{"name":"MEGAドン・キホーテ綾瀬店","address":"神奈川県綾瀬市大上 2-1-1","grid":[35.457736,139.426881],"machineNum":1,"prefId":14},{"name":"ハローズガーデン綾瀬店","address":"神奈川県綾瀬市深谷３７３４－１ 綾瀬タウンヒルズショッピングセンター２階","grid":[35.436777,139.429045],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー湘南茅ヶ崎店","address":"神奈川県茅ヶ崎市茅ヶ崎2-7-71 イオンスタイル湘南茅ヶ崎2階","grid":[35.33483,139.40896],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー茅ヶ崎中央店","address":"神奈川県茅ヶ崎市茅ヶ崎3-5-16 イオン茅ヶ崎中央","grid":[35.336035,139.402498],"machineNum":3,"prefId":14},{"name":"MrMax湘南藤沢店","address":"神奈川県藤沢市辻堂新町４－３－５ ＭｒＭＡＸ湘南藤沢ショッピングセンター","grid":[35.340361,139.464629],"machineNum":1,"prefId":14},{"name":"SOYU Game Field湘南店","address":"神奈川県藤沢市辻堂新町4-1-1 湘南モ-ルフィル2階","grid":[35.338853,139.464659],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー湘南台店","address":"神奈川県藤沢市石川６－２－１ イトーヨーカドー湘南台","grid":[35.392388,139.446687],"machineNum":2,"prefId":14},{"name":"イトーヨーカドー藤沢店","address":"神奈川県藤沢市鵠沼石上１－１０－１ イトーヨーカドー藤沢","grid":[35.335067,139.489119],"machineNum":1,"prefId":14},{"name":"タイトーステーション藤沢店","address":"神奈川県藤沢市南藤沢21-1","grid":[35.33753,139.487683],"machineNum":1,"prefId":14},{"name":"ドラマ藤沢店","address":"神奈川県藤沢市本藤沢５－６－８ ドラマ藤沢","grid":[35.358037,139.468107],"machineNum":2,"prefId":14},{"name":"ハローズガーデン湘南とうきゅう","address":"神奈川県藤沢市遠藤字滝ノ沢６９８－１０ 湘南とうきゅう２Ｆ","grid":[35.390529,139.431351],"machineNum":1,"prefId":14},{"name":"ビックカメラ藤沢店","address":"神奈川県藤沢市藤沢５５９ ビックカメラ藤沢","grid":[35.340229,139.488429],"machineNum":3,"prefId":14},{"name":"楽市楽座湘南藤沢店","address":"神奈川県藤沢市辻堂新町４－３－５ ＭｒＭＡＸ湘南藤沢ショッピングセンター２階","grid":[35.340222,139.464783],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー大船店","address":"神奈川県鎌倉市大船６－１－１ イトーヨーカドー大船","grid":[35.354146,139.538289],"machineNum":2,"prefId":14},{"name":"西友二宮店","address":"神奈川県中郡二宮町中里２－６－２８ 西友二宮","grid":[35.308653,139.247513],"machineNum":1,"prefId":14},{"name":"スーパーアルプス愛川店","address":"神奈川県愛甲郡愛川町角田５８０ スーパーアルプス愛川","grid":[35.533089,139.329349],"machineNum":1,"prefId":14},{"name":"イオン三条店","address":"新潟県三条市西裏館２－１２－２０ イオン三条","grid":[37.6396,138.956613],"machineNum":2,"prefId":15},{"name":"こころっこバロー上越モール店","address":"新潟県上越市樋場新町土地区画整理事業地内１６街区３３外 バロー上越モール","grid":[37.102591,138.27687],"machineNum":1,"prefId":15},{"name":"アピナ上越インター店","address":"新潟県上越市下門前１６６１ アピナ上越インター","grid":[37.154267,138.255642],"machineNum":1,"prefId":15},{"name":"イトーヨーカドー直江津店","address":"新潟県上越市西本町３－８－８ イトーヨーカドー直江津","grid":[37.17087,138.237923],"machineNum":1,"prefId":15},{"name":"タイトーFステーション上越店","address":"新潟県上越市富岡3524 タイトーFステーション上越J-MAXシアター内","grid":[37.14819,138.259047],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー上越店","address":"新潟県上越市富岡3457 上越ショッピングセンターアコーレ","grid":[37.152792,138.258518],"machineNum":3,"prefId":15},{"name":"上越レジャーランボウル","address":"新潟県上越市下門前薬島８２７－２ 上越レジャーランボウル","grid":[37.164049,138.248973],"machineNum":1,"prefId":15},{"name":"ウオロク五泉店","address":"新潟県五泉市今泉９３０ ウオロク五泉","grid":[37.725461,139.176325],"machineNum":1,"prefId":15},{"name":"PALO十日町店","address":"新潟県十日町市旭町161 リオン・ドール十日町1F","grid":[37.135947,138.758339],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー十日町店","address":"新潟県十日町市字川端丑784-1 イオン十日町1階","grid":[37.137394,138.744817],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー六日町店","address":"新潟県南魚沼市余川３１００ イオン六日町２階","grid":[37.081068,138.878604],"machineNum":2,"prefId":15},{"name":"モーリーファンタジー小千谷店","address":"新潟県小千谷市大字平沢新田字荒田３３９ イオン小千谷２階","grid":[37.320544,138.79455],"machineNum":1,"prefId":15},{"name":"お宝中古市場 新潟本店","address":"新潟県新潟市西区善久708","grid":[37.861579,139.018572],"machineNum":1,"prefId":15},{"name":"アピタ新潟亀田店","address":"新潟県新潟市江南区鵜ノ子４－４６６ アピタ新潟亀田","grid":[37.872149,139.088991],"machineNum":2,"prefId":15},{"name":"アピタ新潟西店","address":"新潟県新潟市西区小新４７４ アピタ新潟西","grid":[37.879209,138.999101],"machineNum":2,"prefId":15},{"name":"イオン新潟西店","address":"新潟県新潟市西区小新南２－１－１０ イオン新潟西","grid":[37.868342,138.994788],"machineNum":1,"prefId":15},{"name":"イトーヨーカドー丸大新潟店","address":"新潟県新潟市中央区本町通り６－１１２２－１ イトーヨーカドー丸大新潟","grid":[37.920024,139.047007],"machineNum":1,"prefId":15},{"name":"ウオロクスーパーセンター新津店","address":"新潟県新潟市秋葉区新津５１６３－３ ウオロクスーパーセンター新津","grid":[37.804648,139.112509],"machineNum":1,"prefId":15},{"name":"ウオロク巻店","address":"新潟県新潟市西蒲区巻甲４８６２ ウオロク巻","grid":[37.766577,138.896183],"machineNum":1,"prefId":15},{"name":"カプコサーカス新潟東店","address":"新潟県新潟市東区大形本町３－１－２ イオン新潟東","grid":[37.924864,139.11475],"machineNum":3,"prefId":15},{"name":"タイトーFステーションイオン新潟西店","address":"新潟県新潟市西区小新南２－１－１０ イオン新潟西３Ｆ","grid":[37.868342,138.994788],"machineNum":1,"prefId":15},{"name":"デッキー401ファミリーパーク","address":"新潟県新潟市中央区上近江４－１２－２０ デッキィ４０１２階","grid":[37.898397,139.029633],"machineNum":2,"prefId":15},{"name":"ハローズガーデン　新潟亀田店","address":"新潟県新潟市江南区鵜ノ子４－４６６ アピタ新潟亀田２Ｆ","grid":[37.872149,139.088991],"machineNum":1,"prefId":15},{"name":"ハローズガーデン新潟西店","address":"新潟県新潟市西区小新白鳥４７４ アピタ新潟西２階","grid":[37.880503,139.003056],"machineNum":1,"prefId":15},{"name":"ビックカメラ新潟店","address":"新潟県新潟市中央区花園１－１－２１ ＣｏＣｏＬｏ南館","grid":[37.911829,139.063132],"machineNum":3,"prefId":15},{"name":"ベイシア豊栄店ファミリーランドあそびのくに","address":"新潟県新潟市北区かぶとやま２－１－６２ ベイシア新潟豊栄","grid":[37.929006,139.218481],"machineNum":1,"prefId":15},{"name":"メジャーロード黒埼店","address":"新潟県新潟市西区山田3303 メジャーロード黒埼","grid":[37.868219,139.017282],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー・f 新潟南店","address":"新潟県新潟市江南区下早通柳田１丁目１番１号 イオンモール新潟南２階","grid":[37.876274,139.08179],"machineNum":4,"prefId":15},{"name":"モーリーファンタジー新潟南店","address":"新潟県新潟市江南区下早通柳田１丁目１番１号 イオンモール新潟南３階","grid":[37.876274,139.08179],"machineNum":4,"prefId":15},{"name":"モーリーファンタジー新潟東店","address":"新潟県新潟市東区大形本町３－１－２ イオン新潟東３階","grid":[37.924993,139.114692],"machineNum":3,"prefId":15},{"name":"モーリーファンタジー新潟青山店","address":"新潟県新潟市西区青山２－５－１ イオン新潟青山３階","grid":[37.896237,139.004808],"machineNum":3,"prefId":15},{"name":"ヨドバシカメラマルチメディア新潟駅前店","address":"新潟県新潟市中央区花園１－１－１ ＣｏＣｏＬｏ","grid":[37.912018,139.061868],"machineNum":2,"prefId":15},{"name":"ラウンドワンスタジアム新潟店","address":"新潟県新潟市中央区美咲町２－１－３８ ラウンドワンスタジアム新潟","grid":[37.887987,139.017993],"machineNum":1,"prefId":15},{"name":"ウオロク新発田コモ店","address":"新潟県新発田市舟入町３－１２－１１ ウオロク新発田コモ","grid":[37.956746,139.302959],"machineNum":1,"prefId":15},{"name":"ウオロク緑店","address":"新潟県新発田市緑町３－３－２３ ウオロク緑","grid":[37.956155,139.335702],"machineNum":1,"prefId":15},{"name":"ソユー新発田","address":"新潟県新発田市住吉町５－１１－５ イオン新発田２Ｆ","grid":[37.942552,139.309295],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー新発田店","address":"新潟県新発田市住吉町５丁目１１番５号 イオン新発田２階","grid":[37.942552,139.309295],"machineNum":4,"prefId":15},{"name":"イオン村上東店","address":"新潟県村上市仲間町２００ イオン村上東","grid":[38.221113,139.491746],"machineNum":1,"prefId":15},{"name":"MEGAドン・キホーテ柏崎店","address":"新潟県柏崎市東長浜町４－１５ ＭＥＧＡドン・キホーテ柏崎","grid":[37.368421,138.579021],"machineNum":1,"prefId":15},{"name":"ウオロク柏崎店","address":"新潟県柏崎市宝町1-84","grid":[37.362409,138.561725],"machineNum":1,"prefId":15},{"name":"ナムコランド MEGA ドン・キホーテ柏崎店","address":"新潟県柏崎市東長浜町４－１５ ＭＥＧＡドン・キホーテ柏崎２Ｆ","grid":[37.368412,138.579035],"machineNum":1,"prefId":15},{"name":"オーケーコーラル","address":"新潟県燕市佐渡2853 オーケーコーラル","grid":[37.654954,138.945501],"machineNum":1,"prefId":15},{"name":"タイトーFステーション燕三条店","address":"新潟県燕市井土巻３－１５０ イオン県央１階","grid":[37.650885,138.93525],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー県央店","address":"新潟県燕市井土巻３－６５ イオン県央２階","grid":[37.651077,138.934998],"machineNum":3,"prefId":15},{"name":"PLANT-5見附店","address":"新潟県見附市上新田町７２５－１ ＰＬＡＮＴ－５見附","grid":[37.539885,138.889208],"machineNum":1,"prefId":15},{"name":"ウオロク見附店","address":"新潟県見附市葛巻町1655 ウオロク見附","grid":[37.529569,138.907599],"machineNum":1,"prefId":15},{"name":"メジャーロード24","address":"新潟県見附市今町4丁目20番地568番地1 メジャーロード24","grid":[37.543599,138.891796],"machineNum":1,"prefId":15},{"name":"namco長岡店","address":"新潟県長岡市堺町字浦田31番地 アークガレリア長岡","grid":[37.46135,138.809241],"machineNum":1,"prefId":15},{"name":"アピタ長岡店","address":"新潟県長岡市千秋２－２７８ リバーサイド千秋","grid":[37.460837,138.826833],"machineNum":2,"prefId":15},{"name":"アピナ長岡店","address":"新潟県長岡市堺東町２２ アピナ長岡","grid":[37.457893,138.813153],"machineNum":1,"prefId":15},{"name":"イオン長岡店","address":"新潟県長岡市古正寺１－２４９－１ イオン長岡","grid":[37.454457,138.823489],"machineNum":2,"prefId":15},{"name":"トイザらス長岡店","address":"新潟県長岡市川崎町１４３６－５ トイザらス長岡","grid":[37.458592,138.876949],"machineNum":1,"prefId":15},{"name":"ナムコランドイオン長岡店","address":"新潟県長岡市古正寺１丁目２４９番１ イオン長岡","grid":[37.454428,138.823423],"machineNum":1,"prefId":15},{"name":"ハローズガーデン長岡店","address":"新潟県長岡市千秋２－２７８ リバーサイド千秋２階","grid":[37.461013,138.82697],"machineNum":1,"prefId":15},{"name":"夢大陸長岡店","address":"新潟県長岡市喜多町392-1 夢大陸長岡","grid":[37.451715,138.803627],"machineNum":1,"prefId":15},{"name":"ウオロク水原店","address":"新潟県阿賀野市市野山字大坪221","grid":[37.820555,139.226191],"machineNum":1,"prefId":15},{"name":"アピタ富山店","address":"富山県富山市上袋１００ アピタ富山","grid":[36.6608,137.213158],"machineNum":1,"prefId":16},{"name":"アピタ富山東店","address":"富山県富山市上冨居３１０－１ フェアモール富山","grid":[36.709095,137.241255],"machineNum":1,"prefId":16},{"name":"アピナ富山南","address":"富山県富山市堀川町３５５－３ マイプラザ","grid":[36.664971,137.217392],"machineNum":1,"prefId":16},{"name":"アピナ富山新庄店","address":"富山県富山市荒川３－２－１２ アピナ富山新庄","grid":[36.695333,137.248074],"machineNum":1,"prefId":16},{"name":"キッズサーカス五福","address":"富山県富山市五福１１４３－１ アリスショッピングセンター２階","grid":[36.695566,137.192615],"machineNum":1,"prefId":16},{"name":"タイトーステーションファボーレ婦中店","address":"富山県富山市婦中町下轡田１６５－１ フューチャーシティファボーレ２階","grid":[36.662932,137.171337],"machineNum":1,"prefId":16},{"name":"トヤマレジャーランド呉羽店","address":"富山県富山市高木２０５４ トヤマレジャーランド呉羽","grid":[36.71544,137.158014],"machineNum":1,"prefId":16},{"name":"平和堂アル・プラザ富山","address":"富山県富山市婦中町下轡田１６５－１ フューチャーシティファボーレ","grid":[36.663016,137.171366],"machineNum":1,"prefId":16},{"name":"ｎａｍｃｏアピタ富山東店","address":"富山県富山市上冨居３－８－３８ フェアモール富山２Ｆ","grid":[36.708838,137.240962],"machineNum":1,"prefId":16},{"name":"モーリーファンタジー小杉店","address":"富山県射水市三ヶ２６０２ アル・プラザ小杉２階","grid":[36.730639,137.075545],"machineNum":1,"prefId":16},{"name":"プラファ氷見店","address":"富山県氷見市加納４８４ プラファ氷見","grid":[36.862604,136.974493],"machineNum":1,"prefId":16},{"name":"PLANT-3滑川店","address":"富山県滑川市上島４６０－１ ＰＬＡＮＴ－３滑川","grid":[36.750721,137.352064],"machineNum":1,"prefId":16},{"name":"アピタ砺波店","address":"富山県砺波市太郎丸４７８９－１ アピタ砺波","grid":[36.626986,136.960473],"machineNum":1,"prefId":16},{"name":"モーリーファンタジーとなみ店","address":"富山県砺波市中神一丁目174番地 イオンモールとなみ2階","grid":[36.64158,136.947964],"machineNum":2,"prefId":16},{"name":"ゲットゲーム佐野店","address":"富山県高岡市西藤平蔵１２５６－１ クィーンオブノースランド","grid":[36.710303,136.989777],"machineNum":1,"prefId":16},{"name":"トイザらス高岡店","address":"富山県高岡市下伏間江３８３ イオン高岡南１Ｆ","grid":[36.723548,137.01806],"machineNum":1,"prefId":16},{"name":"モーリーファンタジー高岡南店","address":"富山県高岡市下伏間江３８３ イオン高岡南２階","grid":[36.724018,137.016759],"machineNum":2,"prefId":16},{"name":"モーリーファンタジー高岡店","address":"富山県高岡市江尻３３１－１ イオン高岡１階","grid":[36.761534,137.031666],"machineNum":1,"prefId":16},{"name":"ユーズランド高岡店","address":"富山県高岡市下伏間江３８３ イオン高岡南２階","grid":[36.724018,137.016759],"machineNum":1,"prefId":16},{"name":"アピタ魚津店","address":"富山県魚津市住吉６００ アピタ魚津","grid":[36.806929,137.406195],"machineNum":1,"prefId":16},{"name":"ナムコランドアピタ魚津店","address":"富山県魚津市住吉６００番地 アピタ魚津２Ｆ","grid":[36.806929,137.406195],"machineNum":1,"prefId":16},{"name":"namcoイオンモールかほく店","address":"石川県かほく市内日角タ25番 イオンモールかほく店2階","grid":[36.703967,136.701321],"machineNum":1,"prefId":17},{"name":"モーリーファンタジーかほく店","address":"石川県かほく市内日角地内タ２５番 イオンモールかほく２階","grid":[36.719842,136.706734],"machineNum":1,"prefId":17},{"name":"バイパスレジャーランド加賀店","address":"石川県加賀市箱宮町ヲ１－１ バイパスレジャーランド加賀","grid":[36.325154,136.411374],"machineNum":1,"prefId":17},{"name":"アミュージアム小松店","address":"石川県小松市園町ハ23-1","grid":[36.411775,136.457785],"machineNum":2,"prefId":17},{"name":"イオン小松店","address":"石川県小松市平面町ア６９ イオン小松","grid":[36.417291,136.469939],"machineNum":1,"prefId":17},{"name":"モーリーファンタジー新小松店","address":"石川県小松市沖周辺土地区画整理事業地内仮換地20街区","grid":[36.399082,136.464538],"machineNum":2,"prefId":17},{"name":"平和堂アル・プラザ小松","address":"石川県小松市園町八２３－１ アル・プラザ小松","grid":[36.414492,136.453835],"machineNum":1,"prefId":17},{"name":"楽市楽座イオンモール新小松店","address":"石川県小松市沖周辺土地区画整理事業区域内20街区","grid":[36.399082,136.464538],"machineNum":1,"prefId":17},{"name":"アピタ松任店","address":"石川県白山市幸明町２８０ アピタ松任","grid":[36.516165,136.576905],"machineNum":2,"prefId":17},{"name":"イオン松任店","address":"石川県白山市平松町１０２－１ イオン松任","grid":[36.508076,136.566079],"machineNum":1,"prefId":17},{"name":"アピナ野々市店","address":"石川県野々市市白山町４－１ イオンタウン野々市","grid":[36.526444,136.612353],"machineNum":1,"prefId":17},{"name":"モーリーファンタジー・f 御経塚店","address":"石川県野々市市御経塚２丁目９１番地 イオン御経塚１階","grid":[36.548687,136.59834],"machineNum":3,"prefId":17},{"name":"MEGAドン・キホーテラパーク金沢店","address":"石川県金沢市西泉４－１１ ＭＥＧＡドン・キホーテラパーク金沢","grid":[36.550659,136.631702],"machineNum":1,"prefId":17},{"name":"セガイオンタウン金沢示野","address":"石川県金沢市示野中町８７街区２号 イオンタウン金沢示野","grid":[36.579077,136.615898],"machineNum":1,"prefId":17},{"name":"セガワールド金沢","address":"石川県金沢市諸江町３０－１ アル・プラザ金沢２階","grid":[36.591117,136.643183],"machineNum":1,"prefId":17},{"name":"バイパスレジャーランド藤江本店新館","address":"石川県金沢市藤江南２丁目１０５ バイパスレジャーランド藤江本店新館１階","grid":[36.583659,136.620679],"machineNum":2,"prefId":17},{"name":"モーリーファンタジー杜の里店","address":"石川県金沢市もりの里１丁目７０番地 イオン杜の里２階","grid":[36.556772,136.684777],"machineNum":1,"prefId":17},{"name":"平和堂アル・プラザ金沢","address":"石川県金沢市諸江町３０－１ アル・プラザ金沢","grid":[36.591091,136.643575],"machineNum":2,"prefId":17},{"name":"アミュージアム津幡","address":"石川県河北郡津幡町北中条1-1 アル・プラザ津幡2F","grid":[36.660476,136.726101],"machineNum":1,"prefId":17},{"name":"平和堂アル・プラザ津幡","address":"石川県河北郡津幡町北中条１－１ アル・プラザ津幡","grid":[36.660476,136.726101],"machineNum":1,"prefId":17},{"name":"namcoアルプラザ鹿島店","address":"石川県鹿島郡中能登町井田と1-1 アル・プラザ鹿島2階","grid":[36.959439,136.914894],"machineNum":1,"prefId":17},{"name":"平和堂アル・プラザ鹿島","address":"石川県鹿島郡中能登町井田と１－１ アル・プラザ鹿島","grid":[36.959439,136.914894],"machineNum":1,"prefId":17},{"name":"オモローランドイ-ザ店","address":"福井県坂井市三国町三国東５－１－２０ 三国ショッピングワ－ルドイ－ザ１Ｆ","grid":[36.210529,136.159302],"machineNum":1,"prefId":18},{"name":"平和堂アル・プラザアミ","address":"福井県坂井市春江町随応寺第１６－１１ アル・プラザアミ","grid":[36.134813,136.21907],"machineNum":1,"prefId":18},{"name":"namcoアピタ敦賀店","address":"福井県敦賀市中央町一丁目５番５号 アピタ敦賀２Ｆ","grid":[35.643846,136.054533],"machineNum":1,"prefId":18},{"name":"アピタ敦賀店","address":"福井県敦賀市中央町１－５－５ アピタ敦賀","grid":[35.643625,136.059072],"machineNum":1,"prefId":18},{"name":"平和堂アル・プラザ敦賀","address":"福井県敦賀市白銀町１１－５ 平和堂アル・プラザ敦賀","grid":[35.648317,136.071521],"machineNum":1,"prefId":18},{"name":"namcoフェアモール福井大和田店","address":"福井県福井市大和田町第３２号２３番地 フェアモール福井２Ｆ","grid":[36.096149,136.250284],"machineNum":1,"prefId":18},{"name":"アピタ福井大和田店","address":"福井県福井市大和田町第３２号３２ フェアモール福井","grid":[36.095285,136.249991],"machineNum":1,"prefId":18},{"name":"ジョイランドベル店","address":"福井県福井市花堂南２丁目１６－１ ショッピングシティベル","grid":[36.033643,136.212081],"machineNum":1,"prefId":18},{"name":"ナムコランドアピタ福井店","address":"福井県福井市飯塚町１１－１１１ アピタ福井２階","grid":[36.066099,136.183255],"machineNum":1,"prefId":18},{"name":"モーリーファンタジー福井店","address":"福井県福井市松城町12-7 パリオシティ2F","grid":[36.062214,136.240739],"machineNum":2,"prefId":18},{"name":"レッツワクワク　エルパ店","address":"福井県福井市大和田町第３２－２４－１ エルパ","grid":[36.096412,136.25032],"machineNum":1,"prefId":18},{"name":"平和堂アル・プラザベル","address":"福井県福井市花堂南２－１６－１ ショッピングシティベル","grid":[36.032447,136.21204],"machineNum":1,"prefId":18},{"name":"福井レジャーランドワイプラザ店","address":"福井県福井市新保町北１丁目３０３番地 ヤスサキワイプラザＢ棟２階","grid":[36.081715,136.2496],"machineNum":2,"prefId":18},{"name":"福井レジャーランド板垣店","address":"福井県福井市下馬3-101","grid":[36.042248,136.233667],"machineNum":1,"prefId":18},{"name":"PALO武生店","address":"福井県越前市横市町28-14-1 エスカモール武生楽市1F","grid":[35.906943,136.192954],"machineNum":1,"prefId":18},{"name":"キッズサーカスシピィ店","address":"福井県越前市新町７－８ 武生シピィ２Ｆ","grid":[35.904204,136.152146],"machineNum":1,"prefId":18},{"name":"セガワールド武生","address":"福井県越前市新町３字１３－４ セガワールド武生","grid":[35.905189,136.153409],"machineNum":1,"prefId":18},{"name":"モーリーファンタジー鯖江店","address":"福井県鯖江市下河端１６字下町１６－１ アル・プラザ鯖江２階","grid":[35.969307,136.189513],"machineNum":2,"prefId":18},{"name":"平和堂アル・プラザ鯖江","address":"福井県鯖江市下河端町１６－１６－１ アル・プラザ鯖江","grid":[35.969307,136.189513],"machineNum":1,"prefId":18},{"name":"ナムコランド　リバーシティ店","address":"山梨県中央市山ノ神１１２２ オギノリバーシティＳＣ","grid":[35.61473,138.513389],"machineNum":1,"prefId":19},{"name":"アミュージアム南アルプス","address":"山梨県南アルプス市小笠原1423-1","grid":[35.617539,138.466667],"machineNum":2,"prefId":19},{"name":"イオン大月店","address":"山梨県大月市御太刀１－１３－２９ ダイエー大月","grid":[35.613932,138.945941],"machineNum":1,"prefId":19},{"name":"ゲームQ","address":"山梨県富士吉田市上吉田2-5-1 富士山駅ビルショッピングセンターQ-STA","grid":[35.48352,138.795833],"machineNum":2,"prefId":19},{"name":"スタジオプリモ 甲府店","address":"山梨県甲府市丸の内１－１６－２０ ココリ２Ｆ","grid":[35.662752,138.569933],"machineNum":1,"prefId":19},{"name":"岡島甲府店プレイランド","address":"山梨県甲府市丸の内１－２１－１５ 岡島百貨岡島甲府","grid":[35.661711,138.570554],"machineNum":1,"prefId":19},{"name":"アピタ双葉店","address":"山梨県甲斐市志田６４５－１ ラザウォーク甲斐双葉","grid":[35.684704,138.483634],"machineNum":3,"prefId":19},{"name":"タイトーFステーションラザウォーク甲斐双葉店","address":"山梨県甲斐市志田字柿木６１６－１ ラザウォーク甲斐双葉アミューズメント棟１Ｆ","grid":[35.687745,138.482474],"machineNum":1,"prefId":19},{"name":"アピタ石和店","address":"山梨県笛吹市石和町窪中島１５４ アピタ石和","grid":[35.645808,138.632045],"machineNum":1,"prefId":19},{"name":"ハローズガーデン石和店","address":"山梨県笛吹市石和町窪中島１５４ アピタ石和２階","grid":[35.645808,138.632045],"machineNum":1,"prefId":19},{"name":"モーリーファンタジー石和店","address":"山梨県笛吹市石和町駅前16-1 イオン石和3階","grid":[35.656748,138.634358],"machineNum":2,"prefId":19},{"name":"イトーヨーカドー甲府昭和店","address":"山梨県中巨摩郡昭和町西条１３－１ イトーヨーカドー甲府昭和","grid":[35.639616,138.543952],"machineNum":2,"prefId":19},{"name":"モーリーファンタジー甲府昭和店","address":"山梨県中巨摩郡昭和町常永土地区画整理地内1街区 イオン甲府昭和","grid":[35.627966,138.53514],"machineNum":3,"prefId":19},{"name":"楽市楽座イオンモール甲府店","address":"山梨県中巨摩郡昭和町常永土地区画整理内１街区 イオン甲府昭和","grid":[35.627966,138.53514],"machineNum":1,"prefId":19},{"name":"アミュージアム河口湖店","address":"山梨県南都留郡富士河口湖町船津２９８６ 河口湖ショッピングセンターベル３Ｆ","grid":[35.490028,138.764281],"machineNum":2,"prefId":19},{"name":"namcoアリオ上田店","address":"長野県上田市天神３丁目ー１－１街区他 アリオ上田","grid":[36.398637,138.246871],"machineNum":1,"prefId":20},{"name":"アピナ上田","address":"長野県上田市秋和３５９－１ アピナ上田","grid":[36.415986,138.223532],"machineNum":1,"prefId":20},{"name":"イトーヨーカドーアリオ上田店","address":"長野県上田市天神3-5-1 アリオ上田","grid":[36.399361,138.244493],"machineNum":1,"prefId":20},{"name":"セガワールド上田","address":"長野県上田市大字上田１８４７－１ ＴＳＵＴＡＹＡ上田バイパス","grid":[36.412935,138.261773],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー上田店","address":"長野県上田市常田2-12-18 イオン上田","grid":[36.392232,138.257996],"machineNum":3,"prefId":20},{"name":"モーリーファンタジー中野店","address":"長野県中野市大字一本木２５２－１ イオン中野２階","grid":[36.758753,138.372469],"machineNum":2,"prefId":20},{"name":"アピタ伊那店","address":"長野県伊那市大字伊那字下川原５１９８ アピタ伊那","grid":[35.831878,137.949797],"machineNum":2,"prefId":20},{"name":"アピナ伊那店","address":"長野県伊那市西町５０９３ アピナ伊那","grid":[35.83289,137.950748],"machineNum":1,"prefId":20},{"name":"namcoイオン佐久平店","address":"長野県佐久市佐久平駅南１１番地１０ イオン佐久平","grid":[36.275497,138.46424],"machineNum":2,"prefId":20},{"name":"アピナ佐久インター店","address":"長野県佐久市岩村田北１－１３－１ アピナ佐久インター","grid":[36.284367,138.482527],"machineNum":1,"prefId":20},{"name":"イオン佐久平店","address":"長野県佐久市佐久平駅南１１－１０ イオン佐久平","grid":[36.275497,138.46424],"machineNum":1,"prefId":20},{"name":"ベイシア更埴店-","address":"長野県千曲市大字桜堂字西神330-1 ベイシア更埴","grid":[36.52705,138.121711],"machineNum":1,"prefId":20},{"name":"アピナ塩尻店","address":"長野県塩尻市広丘野村１７９４－１ アピナ塩尻","grid":[36.141555,137.953831],"machineNum":1,"prefId":20},{"name":"アピナ穂高店","address":"長野県安曇野市穂高２４５０ アピナ穂高","grid":[36.334647,137.892235],"machineNum":1,"prefId":20},{"name":"セガワールド豊科","address":"長野県安曇野市豊科南穂高１１１５ セガワールド豊科","grid":[36.303086,137.922723],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー豊科店","address":"長野県安曇野市豊科４２７２－１０ イオン豊科２階","grid":[36.30106,137.907986],"machineNum":2,"prefId":20},{"name":"アピタ岡谷店","address":"長野県岡谷市銀座一丁目1番5号","grid":[36.065899,138.05209],"machineNum":1,"prefId":20},{"name":"アピナ松本店","address":"長野県松本市双葉１９－１０ アピナ松本","grid":[36.210505,137.96155],"machineNum":1,"prefId":20},{"name":"イトーヨーカドー南松本店","address":"長野県松本市高宮中１－２０ イトーヨーカドー南松本","grid":[36.212744,137.961096],"machineNum":2,"prefId":20},{"name":"セガ松本店","address":"長野県松本市渚１－７－１ セガ松本","grid":[36.232579,137.955896],"machineNum":1,"prefId":20},{"name":"タイトーFステーション松本店","address":"長野県松本市平田東1-27-1","grid":[36.201433,137.966803],"machineNum":1,"prefId":20},{"name":"タイトーステーション イトーヨーカドー南松本店","address":"長野県松本市高宮中1-20","grid":[36.212744,137.961096],"machineNum":1,"prefId":20},{"name":"トイザらス・ベビーザらス松本店","address":"長野県松本市芳川村井町1150-3 トイザらス・ベビーザらス松本","grid":[36.172222,137.960307],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー南松本店","address":"長野県松本市双葉５－２０ イオン南松本２階","grid":[36.208119,137.965787],"machineNum":4,"prefId":20},{"name":"モーリーファンタジー松本店","address":"長野県松本市中央4-9-51 イオンスタイル松本店3階","grid":[36.234039,137.978216],"machineNum":2,"prefId":20},{"name":"楽市楽座イオンモール松本","address":"長野県松本市中央4-1371","grid":[36.233273,137.977501],"machineNum":1,"prefId":20},{"name":"PALO諏訪店","address":"長野県諏訪市沖田町5丁目18 諏訪ステーションパーク","grid":[36.004581,138.130181],"machineNum":2,"prefId":20},{"name":"MEGAドン・キホーテ長野店","address":"長野県長野市高田１７５８ ＭＥＧＡドン・キホーテ長野","grid":[36.642594,138.215961],"machineNum":1,"prefId":20},{"name":"アピナ川中島店","address":"長野県長野市川中島町御厨９６７－１ アピナ川中島","grid":[36.598021,138.157484],"machineNum":1,"prefId":20},{"name":"アピナ長野大橋店","address":"長野県長野市若里７－９－１２ アピナ長野大橋","grid":[36.626551,138.200301],"machineNum":1,"prefId":20},{"name":"アピナ長野村山店","address":"長野県長野市村山５０２－１ アピナ長野村山","grid":[36.667936,138.26332],"machineNum":1,"prefId":20},{"name":"イトーヨーカドー長野店","address":"長野県長野市権堂町２２０１ イトーヨーカドー長野","grid":[36.653226,138.192057],"machineNum":1,"prefId":20},{"name":"ザ・サードプラネット 長野大通り店","address":"長野県長野市権堂町１５０６番地３ 長電権堂第２ビル１階","grid":[36.654168,138.192802],"machineNum":2,"prefId":20},{"name":"ソユーゲームフィールド イオンタウン長野三輪店","address":"長野県長野市三輪九丁目４３番２４号 イオンタウン長野三輪","grid":[36.669764,138.207495],"machineNum":1,"prefId":20},{"name":"トイザらス長野店","address":"長野県長野市高田１１７４ ヤングファラオ２Ｆ","grid":[36.637882,138.211836],"machineNum":1,"prefId":20},{"name":"ファンタジープラザ長野","address":"長野県長野市高田１７５８ ＭＥＧＡドン・キホーテ長野２階","grid":[36.642594,138.215961],"machineNum":1,"prefId":20},{"name":"西友川中島店","address":"長野県長野市川中島町今井１８１４－１ 西友川中島","grid":[36.596259,138.142407],"machineNum":1,"prefId":20},{"name":"アピタ飯田店","address":"長野県飯田市鼎名古熊２４６１ アピタ飯田","grid":[35.500076,137.829642],"machineNum":1,"prefId":20},{"name":"アピナ飯田店","address":"長野県飯田市座光寺３７２７－１ アピナ飯田","grid":[35.529977,137.859717],"machineNum":1,"prefId":20},{"name":"イオン飯田店","address":"長野県飯田市上郷飯沼1575 イオン飯田","grid":[35.523314,137.850718],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー飯田アップルロード店","address":"長野県飯田市鼎一色４５６ イオン飯田アップルロード２階","grid":[35.500743,137.816692],"machineNum":1,"prefId":20},{"name":"タイトーステーションアイシティ２１松本店","address":"長野県東筑摩郡山形村７９７７ アイシティ２１","grid":[36.184409,137.892629],"machineNum":1,"prefId":20},{"name":"バローランド中津川店","address":"岐阜県中津川市淀川町3-8","grid":[35.498058,137.507752],"machineNum":1,"prefId":21},{"name":"ファンタジックランド可児店","address":"岐阜県可児市下恵土５７５０ ヨシヅヤ可児３階","grid":[35.414877,137.050398],"machineNum":1,"prefId":21},{"name":"プレビ ドン・キホーテUNY可児店","address":"岐阜県可児市中恵土字溝向2120番1 MEGAドン・キホーテ","grid":[35.427064,137.064187],"machineNum":1,"prefId":21},{"name":"namcoイオンモール各務原店","address":"岐阜県各務原市那加萱場町３丁目８番地 イオン各務原２Ｆ","grid":[35.391707,136.824392],"machineNum":1,"prefId":21},{"name":"アピタ各務原店","address":"岐阜県各務原市鵜沼各務原町８－７ アピタ各務原","grid":[35.397852,136.904908],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー各務原店","address":"岐阜県各務原市那加萱場町３－８ イオン各務原３階","grid":[35.391707,136.824392],"machineNum":3,"prefId":21},{"name":"セガワールド多治見","address":"岐阜県多治見市住吉町１－１－１ セガワールド多治見","grid":[35.343555,137.123727],"machineNum":1,"prefId":21},{"name":"ピアゴ多治見店","address":"岐阜県多治見市住吉町３－１９ ピアゴ多治見","grid":[35.343756,137.122793],"machineNum":1,"prefId":21},{"name":"ピアゴ多治見店-","address":"岐阜県多治見市住吉町三丁目19番地の1 ピアゴ多治見","grid":[35.343635,137.122781],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー多治見店","address":"岐阜県多治見市西坂町5-31-1 多治見インターモール1F","grid":[35.349683,137.104929],"machineNum":1,"prefId":21},{"name":"namcoイオンモール大垣店","address":"岐阜県大垣市外野2-100","grid":[35.336738,136.612927],"machineNum":1,"prefId":21},{"name":"にこぱアクアウォーク大垣店","address":"岐阜県大垣市林町６－８０－２１ アクアウォーク大垣２Ｆ","grid":[35.370044,136.617274],"machineNum":1,"prefId":21},{"name":"アピタ大垣店","address":"岐阜県大垣市林町６－８０－２１ アクアウォーク大垣","grid":[35.370044,136.617274],"machineNum":1,"prefId":21},{"name":"カラフルパーク大垣店","address":"岐阜県大垣市三塚町丹瀬４６３－１ イオンタウン大垣ＥＡＳＴ棟","grid":[35.366173,136.630715],"machineNum":1,"prefId":21},{"name":"セガワールドアクアウォーク大垣","address":"岐阜県大垣市林町６－８０－２１ アクアウォーク大垣","grid":[35.370044,136.617274],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー大垣店","address":"岐阜県大垣市外野２丁目１００番 イオンモール大垣２階","grid":[35.33679,136.614051],"machineNum":2,"prefId":21},{"name":"平和堂アル・プラザ鶴見","address":"岐阜県大垣市鶴見町６４１－２ アル・プラザ鶴見","grid":[35.359095,136.642133],"machineNum":1,"prefId":21},{"name":"平和堂高富店","address":"岐阜県山県市高木１４７３ 平和堂高富","grid":[35.505011,136.789725],"machineNum":1,"prefId":21},{"name":"namcoカラフルタウン岐阜店","address":"岐阜県岐阜市柳津町丸野３－３－６ カラフルタウン岐阜","grid":[35.362909,136.727609],"machineNum":2,"prefId":21},{"name":"アピタ岐阜店","address":"岐阜県岐阜市加納神明町６－１ アピタ岐阜","grid":[35.401495,136.749331],"machineNum":1,"prefId":21},{"name":"イトーヨーカドー柳津店","address":"岐阜県岐阜市柳津町丸野３－３－６ カラフルタウン岐阜","grid":[35.362909,136.727609],"machineNum":1,"prefId":21},{"name":"トイザらス岐阜店","address":"岐阜県岐阜市正木中１－２－１ イオン岐阜１Ｆ","grid":[35.447971,136.745114],"machineNum":1,"prefId":21},{"name":"プレビVタウン芥見","address":"岐阜県岐阜市芥見南山2‐1‐8 Vタウン芥見内","grid":[35.456182,136.851593],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー・f 岐阜店","address":"岐阜県岐阜市正木中1-2-1 イオン岐阜北館 イオン3F","grid":[35.447971,136.745114],"machineNum":2,"prefId":21},{"name":"namcoモレラ岐阜店","address":"岐阜県本巣市三橋1100","grid":[35.45493,136.672628],"machineNum":1,"prefId":21},{"name":"ラウンドワンモレラ岐阜店","address":"岐阜県本巣市三橋１１００ モレラ岐阜","grid":[35.45451,136.672811],"machineNum":2,"prefId":21},{"name":"PLANT-6瑞穂店","address":"岐阜県瑞穂市犀川５－３８ ＰＬＡＮＴ－６瑞穂","grid":[35.369554,136.677174],"machineNum":1,"prefId":21},{"name":"岐阜レジャーランド穂積店","address":"岐阜県瑞穂市稲里６３０番地 岐阜レジャーランド穂積","grid":[35.384313,136.684563],"machineNum":1,"prefId":21},{"name":"アピタ美濃加茂店","address":"岐阜県美濃加茂市野笹町２－５－６５ アピタ美濃加茂","grid":[35.443565,137.039521],"machineNum":1,"prefId":21},{"name":"バローランド羽島-","address":"岐阜県羽島市江吉良町2939 ホームセンターバロー羽島インター","grid":[35.305066,136.690826],"machineNum":1,"prefId":21},{"name":"セガマーゴ関店","address":"岐阜県関市倉知516番地 イオン関","grid":[35.478991,136.900242],"machineNum":2,"prefId":21},{"name":"モーリーファンタジー関店","address":"岐阜県関市倉知５１６ イオン関１階","grid":[35.478991,136.900242],"machineNum":2,"prefId":21},{"name":"ルビットランド高山店","address":"岐阜県高山市岡本町3-18-2","grid":[36.149534,137.247043],"machineNum":1,"prefId":21},{"name":"アピタ御嵩店","address":"岐阜県可児郡御嵩町上恵土１０５２番１ アピタ御嵩","grid":[35.433734,137.070607],"machineNum":1,"prefId":21},{"name":"平和堂大野店","address":"岐阜県揖斐郡大野町大字黒野字上柿木１２－１ 平和堂大野","grid":[35.467152,136.621697],"machineNum":1,"prefId":21},{"name":"アピタ北方店","address":"岐阜県本巣郡北方町平成２－３ アピタ北方","grid":[35.432438,136.6815],"machineNum":2,"prefId":21},{"name":"わいわいランド三島店","address":"静岡県三島市中田町9-30 イトーヨーカドー三島3F","grid":[35.113286,138.919308],"machineNum":1,"prefId":22},{"name":"イトーヨーカドー三島店","address":"静岡県三島市中田町９－３０ イトーヨーカドー三島","grid":[35.113146,138.919367],"machineNum":2,"prefId":22},{"name":"ジョイランド三島","address":"静岡県三島市梅名３０８－６","grid":[35.090434,138.928233],"machineNum":1,"prefId":22},{"name":"ミシマトイス","address":"静岡県三島市本町３－３５ ミシマトイス","grid":[35.11948,138.914027],"machineNum":1,"prefId":22},{"name":"アピタ伊東店","address":"静岡県伊東市玖須美元和田７２０－１４３ アピタ伊東","grid":[34.948785,139.114751],"machineNum":2,"prefId":22},{"name":"アピタ大仁店","address":"静岡県伊豆の国市吉田字九十分１５３－１ アピタ大仁","grid":[34.999605,138.940484],"machineNum":2,"prefId":22},{"name":"タイトーＦステーションイオン富士宮店","address":"静岡県富士宮市浅間町１番８号 イオン富士宮３階","grid":[35.220784,138.612063],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー富士宮店","address":"静岡県富士宮市浅間町1-8 イオン富士宮2階","grid":[35.220784,138.612063],"machineNum":3,"prefId":22},{"name":"アピタ富士吉原店","address":"静岡県富士市国久保２－１－１０ アピタ富士吉原","grid":[35.168029,138.68082],"machineNum":1,"prefId":22},{"name":"ザ・サードプラネット富士店","address":"静岡県富士市永田町２－９９ ザ・サードプラネット富士","grid":[35.162448,138.669279],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー・f 富士南店","address":"静岡県富士市鮫島１１８－１０ イオンタウン富士南２階","grid":[35.14017,138.675603],"machineNum":2,"prefId":22},{"name":"夢大陸お宝中古市場富士本店","address":"静岡県富士市中里２５８８－２ 夢大陸富士本店","grid":[35.141196,138.73993],"machineNum":1,"prefId":22},{"name":"アピタ島田店","address":"静岡県島田市宝来町８－２ アピタ島田","grid":[34.82753,138.184872],"machineNum":2,"prefId":22},{"name":"ハローズガーデン島田店","address":"静岡県島田市宝来町８－２ アピタ島田２階","grid":[34.82753,138.184872],"machineNum":1,"prefId":22},{"name":"BANDAI asobi:御殿場店","address":"静岡県御殿場市深沢1312 御殿場プレミアムアウトレット2040","grid":[35.306767,138.962882],"machineNum":1,"prefId":22},{"name":"マミー二枚橋店","address":"静岡県御殿場市二枚橋275-2","grid":[35.310088,138.93894],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー御殿場店","address":"静岡県御殿場市萩原636番地 サンサンプラザ御殿場3F","grid":[35.305043,138.934631],"machineNum":3,"prefId":22},{"name":"AGスクエア掛川","address":"静岡県掛川市細田２４８ ＡＧスクエア掛川","grid":[34.773869,137.985338],"machineNum":2,"prefId":22},{"name":"アピタ掛川店","address":"静岡県掛川市大池２２８６ アピタ掛川","grid":[34.772858,137.98953],"machineNum":2,"prefId":22},{"name":"シートピアYAZ大須賀店","address":"静岡県掛川市西大渕3359 ロックタウン","grid":[34.67806,137.968568],"machineNum":1,"prefId":22},{"name":"イトーヨーカドー沼津店","address":"静岡県沼津市高島本町１－５ イシバシプラザ","grid":[35.107694,138.857861],"machineNum":1,"prefId":22},{"name":"ザ・サードプラネットＢｉＶｉ沼津店","address":"静岡県沼津市大手町１－１－５ ＢｉＶｉ沼津","grid":[35.103976,138.861016],"machineNum":2,"prefId":22},{"name":"ジョイランドアミューズ諏訪店","address":"静岡県沼津市大諏訪叶２０－２ ジョイランドアミューズ諏訪","grid":[35.108485,138.832219],"machineNum":1,"prefId":22},{"name":"西友沼津店","address":"静岡県沼津市大岡１３３０－１ 西友沼津","grid":[35.101984,138.875181],"machineNum":2,"prefId":22},{"name":"MEGAドン・キホーテ浜松可美店","address":"静岡県浜松市南区東若林町１１－１ ＭＥＧＡドン・キホーテ浜松可美","grid":[34.69201,137.71418],"machineNum":1,"prefId":22},{"name":"YAZWORLD浜松葵店","address":"静岡県浜松市中区葵西2-27-10 イオンタウン浜松葵","grid":[34.767133,137.708118],"machineNum":1,"prefId":22},{"name":"アピタ浜北店","address":"静岡県浜松市浜北区貴布祢１２００ プレ葉ウォーク浜北","grid":[34.797616,137.779404],"machineNum":2,"prefId":22},{"name":"タイトーFステーションイオンモール浜松市野店","address":"静岡県浜松市東区天王町１９８１－３ イオンモール浜松市野２Ｆ","grid":[34.740103,137.762832],"machineNum":3,"prefId":22},{"name":"タイトーFステーションプレ葉ウォーク浜北","address":"静岡県浜松市浜北区貴布祢1200番地 プレ葉ウォーク浜北","grid":[34.797616,137.779404],"machineNum":1,"prefId":22},{"name":"タイトーステーション新浜松ザザシティ店","address":"静岡県浜松市中区鍛冶町15 ザザシティ浜松西館","grid":[34.704855,137.729186],"machineNum":1,"prefId":22},{"name":"ビックカメラ浜松店","address":"静岡県浜松市中区砂山町３２２－１ ビックカメラ浜松","grid":[34.703422,137.733894],"machineNum":1,"prefId":22},{"name":"ピアゴ浜松泉町店","address":"静岡県浜松市泉１－６－１ ピアゴ浜松泉町","grid":[34.745739,137.720618],"machineNum":1,"prefId":22},{"name":"プラサカプコン志都呂店","address":"静岡県浜松市西区志都呂町５６０５ イオンモール浜松志都呂３階","grid":[34.696753,137.651432],"machineNum":1,"prefId":22},{"name":"ポート24浜松店","address":"静岡県浜松市西区坪井町４１８３ ポート２４浜松","grid":[34.680161,137.644381],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー浜松市野店","address":"静岡県浜松市東区天王町字諏訪１９８１－３ イオンモール浜松市野２階","grid":[34.736531,137.771155],"machineNum":3,"prefId":22},{"name":"モーリーファンタジー浜松志都呂店","address":"静岡県浜松市西区志都呂町2丁目37番1号 イオン浜松志都呂3階","grid":[34.696809,137.65122],"machineNum":4,"prefId":22},{"name":"モーリーファンタジー浜松西店","address":"静岡県浜松市西区入野町６２４４－１ イオン浜松西３階","grid":[34.699061,137.690142],"machineNum":2,"prefId":22},{"name":"楽市楽座サンストリート浜北店","address":"静岡県浜松市浜北区平口２８６１ サンストリート浜北Ｍ－２０７","grid":[34.79417,137.760555],"machineNum":1,"prefId":22},{"name":"ザ・サードプラネット焼津","address":"静岡県焼津市八楠３－１８－５ ザ・サードプラネット焼津","grid":[34.878502,138.307769],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー焼津店","address":"静岡県焼津市祢宜島５５５ イオン焼津２階","grid":[34.839311,138.309767],"machineNum":2,"prefId":22},{"name":"ハローズガーデン榛原店","address":"静岡県牧之原市細江1371-1 ピアゴ榛原店1F","grid":[34.749921,138.239376],"machineNum":1,"prefId":22},{"name":"namcoららぽーと磐田店","address":"静岡県磐田市高見丘１２００番地 ららぽーと磐田２階","grid":[34.750527,137.839814],"machineNum":1,"prefId":22},{"name":"namcoアピタ磐田店","address":"静岡県磐田市今之浦３－１－１１ アピタ磐田２階","grid":[34.718088,137.856966],"machineNum":1,"prefId":22},{"name":"アピタ磐田店","address":"静岡県磐田市今之浦3-1-11 アピタ磐田","grid":[34.718088,137.856966],"machineNum":1,"prefId":22},{"name":"ピアゴ上岡田店","address":"静岡県磐田市上岡田字村東817番地1","grid":[34.697807,137.848905],"machineNum":1,"prefId":22},{"name":"LAND藤枝店","address":"静岡県藤枝市前島1-7-10 BiVi藤枝4階","grid":[34.847336,138.252957],"machineNum":1,"prefId":22},{"name":"AGスクエア 袋井店","address":"静岡県袋井市川井１１４２－１ ＡＧスクエア袋井","grid":[34.74634,137.911439],"machineNum":1,"prefId":22},{"name":"ファミリーランド袋井","address":"静岡県袋井市 新池字原川田 1158-1 ピアゴ袋井店2F","grid":[34.731411,137.909455],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー袋井店","address":"静岡県袋井市上山梨4丁目1番地の1 イオン袋井2階","grid":[34.784949,137.902931],"machineNum":2,"prefId":22},{"name":"モーリーファンタジー裾野店","address":"静岡県裾野市佐野１０３９ グルメシティ裾野１階","grid":[35.175846,138.908126],"machineNum":1,"prefId":22},{"name":"MARK IS 静岡店","address":"静岡県静岡市葵区柚木１９１ ＭＡＲＫＩＳ静岡３階","grid":[34.98455,138.409737],"machineNum":1,"prefId":22},{"name":"アピタ静岡店","address":"静岡県静岡市駿河区石田１－５－１ セントラルスクエア静岡","grid":[34.959722,138.401666],"machineNum":2,"prefId":22},{"name":"アミュージアム清水店","address":"静岡県静岡市清水区入船町１３－１５ エスパルスドリームプラザ","grid":[35.010586,138.49293],"machineNum":2,"prefId":22},{"name":"イトーヨーカドー静岡店","address":"静岡県静岡市駿河区曲金３－１－５ イトーヨーカドー静岡","grid":[34.972288,138.407239],"machineNum":1,"prefId":22},{"name":"カバロ静岡店","address":"静岡県静岡市駿河区曲金３－１－５ イトーヨーカドー静岡カパロ","grid":[34.972288,138.407239],"machineNum":1,"prefId":22},{"name":"ザ・サードプラネットフレスポ静岡店","address":"静岡県静岡市清水区鳥坂８６０ フレスポ静岡","grid":[35.013202,138.43415],"machineNum":1,"prefId":22},{"name":"ザ・サードプラネット静岡インター店","address":"静岡県静岡市駿河区中野新田３８３－３ ザ・サードプラネット静岡インター","grid":[34.949416,138.390008],"machineNum":1,"prefId":22},{"name":"セガワールド静岡","address":"静岡県静岡市葵区七間町４－２ 静活プラザビル１、２Ｆ","grid":[34.974139,138.381783],"machineNum":1,"prefId":22},{"name":"ソユー竜宮タウン静岡店","address":"静岡県静岡市駿河区石田１―５―１ セントラルスクエア静岡","grid":[34.959722,138.401666],"machineNum":1,"prefId":22},{"name":"タイトーFステーション静岡店","address":"静岡県静岡市葵区呉服町二丁目５番地４ ふしみや第２ビル","grid":[34.9744,138.383211],"machineNum":1,"prefId":22},{"name":"プレビバロー清水高橋","address":"静岡県静岡市清水区高橋5丁目1-1 バロー清水高橋内","grid":[35.025503,138.470823],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー清水店","address":"静岡県静岡市清水区上原１－６－１６ イオン清水２階","grid":[35.009176,138.458821],"machineNum":2,"prefId":22},{"name":"ラウンドワン静岡・駿河","address":"静岡県静岡市駿河区手越75番地","grid":[34.950968,138.360539],"machineNum":1,"prefId":22},{"name":"ＡＧスクエア清水店","address":"静岡県静岡市清水区駒越北町８－１ ベイドリーム清水","grid":[34.984763,138.499583],"machineNum":1,"prefId":22},{"name":"キッズトレイン三島","address":"静岡県駿東郡清水町伏見泉頭58-1 サントムーン柿田川3階ゲームdo","grid":[35.108695,138.900785],"machineNum":1,"prefId":22},{"name":"セガワールドサントムーン","address":"静岡県駿東郡清水町玉川６１－２ サントムーン柿田川","grid":[35.109826,138.903953],"machineNum":1,"prefId":22},{"name":"タイトーステーションウェルディ長泉店","address":"静岡県駿東郡長泉町下長窪字城山１０７６ ウェルディ長泉２Ｆ","grid":[35.14848,138.891167],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー三好店","address":"愛知県みよし市三好町青木91 イオン三好","grid":[35.092241,137.079622],"machineNum":3,"prefId":23},{"name":"namcoテラスウォーク一宮店","address":"愛知県一宮市両郷町１－２ テラスウォーク一宮２Ｆ","grid":[35.310976,136.816542],"machineNum":1,"prefId":23},{"name":"アピタ木曽川店","address":"愛知県一宮市木曽川町黒田八ノ通り５１－４ アピタ木曽川","grid":[35.344689,136.790651],"machineNum":1,"prefId":23},{"name":"ゲームゾーン一宮","address":"愛知県一宮市羽衣町2-5-1 ゲームゾーン尾張一宮","grid":[35.305459,136.810348],"machineNum":1,"prefId":23},{"name":"セガイオンモール木曽川","address":"愛知県一宮市木曽川町黒田字南八ツケ池２５－１ イオン木曽川３Ｆ","grid":[35.349459,136.774756],"machineNum":1,"prefId":23},{"name":"セガワールド尾西","address":"愛知県一宮市篭屋３－９－７ アソビックス尾西","grid":[35.309181,136.771494],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー妙興寺店","address":"愛知県一宮市大和町妙興寺字白山西3番地2 ピアゴ妙興寺3F","grid":[35.28677,136.797498],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー木曽川店","address":"愛知県一宮市木曽川町黒田字南八ツケ池25番1 イオン木曽川","grid":[35.349459,136.774756],"machineNum":3,"prefId":23},{"name":"アピタ刈谷店","address":"愛知県刈谷市南桜町２－５６－１ アピタ刈谷","grid":[34.99111,137.004776],"machineNum":1,"prefId":23},{"name":"ザ・ビッグエクストラ刈谷店","address":"愛知県刈谷市東境町京和１ イオンタウン刈谷","grid":[35.038641,137.026431],"machineNum":1,"prefId":23},{"name":"セガイオンタウン刈谷","address":"愛知県刈谷市東境町京和１ イオンタウン刈谷","grid":[35.038641,137.026431],"machineNum":2,"prefId":23},{"name":"楽市街道名古屋店","address":"愛知県北名古屋市中之郷字神明４５－１ 楽市街道名古屋","grid":[35.239859,136.848794],"machineNum":1,"prefId":23},{"name":"サムソン半田店","address":"愛知県半田市乙川吉野町９ パワードーム半田Ｂ１階","grid":[34.905916,136.936823],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー半田店","address":"愛知県半田市有楽町８－７ イオン半田２階","grid":[34.869221,136.917662],"machineNum":2,"prefId":23},{"name":"ラウンドワンスタジアム半田店","address":"愛知県半田市瑞穂町6丁目7番地の8","grid":[34.885298,136.941373],"machineNum":1,"prefId":23},{"name":"namcoイオンモールナゴヤドーム前店","address":"愛知県名古屋市東区矢田南四丁目102番3 イオンモールナゴヤドーム前3F","grid":[35.188883,136.944693],"machineNum":1,"prefId":23},{"name":"namcoイオンモール大高店","address":"愛知県名古屋市緑区大高町字奥平子１番１ イオン大高４階","grid":[35.054142,136.946817],"machineNum":2,"prefId":23},{"name":"namcoイオンモール熱田店","address":"愛知県名古屋市熱田区六野１－２－１１ イオンモール熱田","grid":[35.137432,136.9089],"machineNum":1,"prefId":23},{"name":"にこぱなるぱーく","address":"愛知県名古屋市緑区浦里３－２３２ なるぱーく","grid":[35.084488,136.946667],"machineNum":1,"prefId":23},{"name":"アズパークファミリータウン","address":"愛知県名古屋市中川区新家１丁目２４２１番地 アズパークＳＣ２Ｆ","grid":[35.157119,136.805373],"machineNum":1,"prefId":23},{"name":"アピタ千代田橋店","address":"愛知県名古屋市千種区千代田橋２－１－１ アピタ千代田橋","grid":[35.187318,136.969387],"machineNum":2,"prefId":23},{"name":"アピタ名古屋北店","address":"愛知県名古屋市北区辻町９－１ アピタ名古屋北","grid":[35.209543,136.922789],"machineNum":1,"prefId":23},{"name":"アピタ名古屋北店スタジアム","address":"愛知県名古屋市北区辻町９－１ アピタ名古屋北３階","grid":[35.209451,136.922801],"machineNum":1,"prefId":23},{"name":"アピタ名古屋南店","address":"愛知県名古屋市南区豊田４－９－４７ アピタ名古屋南","grid":[35.102799,136.913085],"machineNum":1,"prefId":23},{"name":"アピタ港店","address":"愛知県名古屋市港区当知２－１５０１ ポートウォークみなと","grid":[35.109428,136.84778],"machineNum":1,"prefId":23},{"name":"アピタ鳴海店","address":"愛知県名古屋市緑区鳴海町伝治山３－９ アピタ鳴海","grid":[35.094105,136.959412],"machineNum":1,"prefId":23},{"name":"イオン千種店ゲームコーナー","address":"愛知県名古屋市千種区千種２－１６－１３ イオンタウン千種２Ｆ","grid":[35.16206,136.923609],"machineNum":1,"prefId":23},{"name":"イオン南陽店","address":"愛知県名古屋市港区春田野1-330","grid":[35.116235,136.81654],"machineNum":1,"prefId":23},{"name":"カラフルパーク有松店","address":"愛知県名古屋市緑区鳴海町有松裏２００ イオンタウン有松","grid":[35.06736,136.972536],"machineNum":1,"prefId":23},{"name":"サムソン千代田橋店","address":"愛知県名古屋市千種区千代田橋２－１－１ アピタ千代田橋３階","grid":[35.187352,136.969454],"machineNum":1,"prefId":23},{"name":"サムソン港店","address":"愛知県名古屋市港区当知２－１５０１ ポートウォークみなと３Ｆ","grid":[35.109428,136.84778],"machineNum":1,"prefId":23},{"name":"ジョイスクエア緑店","address":"愛知県名古屋市緑区徳重２丁目２０１ アピタ緑２階","grid":[35.090024,137.003255],"machineNum":1,"prefId":23},{"name":"セガイオンタウン名西","address":"愛知県名古屋市西区香呑町６－４９－１ イオンタウン名西","grid":[35.204309,136.89283],"machineNum":1,"prefId":23},{"name":"セガワールド上小田井mozoワンダーシティ","address":"愛知県名古屋市西区二方町４０番地 ｍｏｚｏワンダーシティ","grid":[35.224681,136.880943],"machineNum":3,"prefId":23},{"name":"タイトーステーションフェドラ大須店","address":"愛知県名古屋市中区大須3丁目30番地31号 萬松寺駐車場ビル","grid":[35.159419,136.905414],"machineNum":3,"prefId":23},{"name":"タイトーステーション大須店","address":"愛知県名古屋市中区大須３－２０－７ タイトーステーション大須","grid":[35.159681,136.90482],"machineNum":2,"prefId":23},{"name":"トイザらス名古屋中川店","address":"愛知県名古屋市中川区新家１－２４２１ アズパークＳＣ２Ｆ","grid":[35.157119,136.805373],"machineNum":1,"prefId":23},{"name":"ビックカメラ名古屋JRゲートタワー店","address":"愛知県名古屋市中村区名駅一丁目1番3号 9 階","grid":[35.172207,136.882618],"machineNum":1,"prefId":23},{"name":"ビックカメラ名古屋駅西店","address":"愛知県名古屋市中村区椿町６－９ ビックカメラ名古屋駅西","grid":[35.170302,136.87956],"machineNum":4,"prefId":23},{"name":"ピアゴ ラ フーズコアアラタマ店","address":"愛知県名古屋市南区駈上1-1-31","grid":[35.11591,136.937586],"machineNum":1,"prefId":23},{"name":"ファンタジックランド太平通店","address":"愛知県名古屋市中川区宮脇町２－１１ ヨシヅヤ太平通り","grid":[35.135134,136.868098],"machineNum":1,"prefId":23},{"name":"ファンタジープラザ名古屋店","address":"愛知県名古屋市北区玄馬町２３４－１ ドン・キホーテ名古屋本店２Ｆ","grid":[35.226407,136.908993],"machineNum":1,"prefId":23},{"name":"プラザカプコン徳重店","address":"愛知県名古屋市緑区鳴海町字徳重18-44","grid":[35.094439,136.999311],"machineNum":1,"prefId":23},{"name":"モーリーファンタジーナゴヤドーム前店","address":"愛知県名古屋市東区矢田南４丁目１０２番地の３ イオンモールナゴヤドーム前３階","grid":[35.188883,136.944693],"machineNum":4,"prefId":23},{"name":"モーリーファンタジーメイトピア店","address":"愛知県名古屋市名東区高間町501-1 ダイエーメイトピア2F","grid":[35.159955,137.003331],"machineNum":2,"prefId":23},{"name":"モーリーファンタジーワンダーシティ店","address":"愛知県名古屋市西区二方町４０ イオンモール名古屋ワンダーシティ３階","grid":[35.224681,136.880943],"machineNum":3,"prefId":23},{"name":"モーリーファンタジー・f 新瑞橋店","address":"愛知県名古屋市南区菊住１丁目７－１０ イオン新瑞橋３階","grid":[35.114643,136.935251],"machineNum":3,"prefId":23},{"name":"モーリーファンタジー上飯田店","address":"愛知県名古屋市北区織部町1 ダイエー上飯田3F","grid":[35.201084,136.928788],"machineNum":2,"prefId":23},{"name":"モーリーファンタジー名古屋みなと店","address":"愛知県名古屋市港区品川町２－１－６ イオン名古屋みなと３階","grid":[35.103333,136.862573],"machineNum":2,"prefId":23},{"name":"モーリーファンタジー名古屋東店","address":"愛知県名古屋市名東区猪子石原2-1701 イオン名古屋東店2階","grid":[35.195344,136.99382],"machineNum":2,"prefId":23},{"name":"モーリーファンタジー名古屋茶屋店","address":"愛知県名古屋市港区西茶屋 ２丁目１１ イオンモール名古屋茶屋３階","grid":[35.1027,136.825062],"machineNum":2,"prefId":23},{"name":"モーリーファンタジー大高店","address":"愛知県名古屋市緑区大高町字奥平子１－１ イオン大高３階","grid":[35.054142,136.946817],"machineNum":4,"prefId":23},{"name":"モーリーファンタジー守山店","address":"愛知県名古屋市守山区笹ヶ根３－１２２８ イオン守山２階","grid":[35.234952,137.003866],"machineNum":2,"prefId":23},{"name":"モーリーファンタジー熱田店","address":"愛知県名古屋市熱田区六野1-2-11 イオンモール熱田","grid":[35.137432,136.9089],"machineNum":4,"prefId":23},{"name":"ヨシヅヤ名西ゲームコーナー店","address":"愛知県名古屋市西区名西2-33-8 イッツボナンザシティヨシヅヤ名古屋名西","grid":[35.190071,136.878501],"machineNum":1,"prefId":23},{"name":"ヨドバシカメラマルチメディア名古屋松坂屋店","address":"愛知県名古屋市中区栄3-16-1 名古屋松坂屋","grid":[35.166259,136.908036],"machineNum":2,"prefId":23},{"name":"中川メトロポリス","address":"愛知県名古屋市中川区江松３－１１０ 中川コロナワールド","grid":[35.125372,136.823828],"machineNum":1,"prefId":23},{"name":"名古屋レジャーランドささしま店","address":"愛知県名古屋市中村区平池町４－６０－１４ マーケットスクエアささしま１階","grid":[35.162646,136.884802],"machineNum":1,"prefId":23},{"name":"名古屋レジャーランド大高店","address":"愛知県名古屋市緑区大高町忠治山１２－１ 名古屋グランドボウル","grid":[35.066946,136.934378],"machineNum":1,"prefId":23},{"name":"楽市楽座イオンモール名古屋茶屋","address":"愛知県名古屋市港区西茶屋２－１１ イオンモール名古屋茶屋３階","grid":[35.1027,136.825062],"machineNum":1,"prefId":23},{"name":"ＳＯＹＵＢＲＥＭＥＮＴＯＷＮ鳴海店","address":"愛知県名古屋市緑区鳴海町伝治山３－９ アピタ鳴海２階","grid":[35.094048,136.959368],"machineNum":1,"prefId":23},{"name":"アピタ大府店","address":"愛知県大府市明成町４－１３３ アピタ大府","grid":[35.025525,136.950155],"machineNum":1,"prefId":23},{"name":"アピタ安城南店","address":"愛知県安城市桜井町貝戸尻６０ アピタ安城南","grid":[34.920246,137.087576],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー安城店","address":"愛知県安城市住吉町３－１－８ イトーヨーカドー安城","grid":[34.9851,137.083247],"machineNum":1,"prefId":23},{"name":"ザ・モール安城アミューズメントシティ","address":"愛知県安城市大東町９－３１ 西友ザ・モール安城","grid":[34.966172,137.079675],"machineNum":1,"prefId":23},{"name":"ソユープレイランドソピア安城店","address":"愛知県安城市住吉町３－１－８ イトーヨーカドー安城２階","grid":[34.9851,137.083247],"machineNum":1,"prefId":23},{"name":"ハローズガーデン安城南店","address":"愛知県安城市桜井町貝戸尻６０番地 アピタ安城南２階","grid":[34.920307,137.088132],"machineNum":1,"prefId":23},{"name":"安城メトロポリス","address":"愛知県安城市浜富町6-8 安城メトロポリス","grid":[34.955088,137.097391],"machineNum":1,"prefId":23},{"name":"西友ザ・モール安城店","address":"愛知県安城市大東町９－３１ 西友ザ・モール安城","grid":[34.966172,137.079675],"machineNum":1,"prefId":23},{"name":"アピタ桃花台店","address":"愛知県小牧市古雅１－１ ピアーレ","grid":[35.30155,136.982029],"machineNum":1,"prefId":23},{"name":"パラボランド小牧店","address":"愛知県小牧市東１－１２６ イオン小牧２階","grid":[35.284956,136.939677],"machineNum":1,"prefId":23},{"name":"小牧メトロポリス","address":"愛知県小牧市間々片山１８１－１ タイムトラベル館","grid":[35.295957,136.905718],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー尾張旭店","address":"愛知県尾張旭市南原山町石原１１６－４ イトーヨーカドー尾張旭","grid":[35.213515,137.051512],"machineNum":2,"prefId":23},{"name":"NICOPA岡崎店","address":"愛知県岡崎市上和田町南天白５－１ エルエルタウン岡崎２階","grid":[34.932199,137.150225],"machineNum":1,"prefId":23},{"name":"にこぱウイングタウン岡崎東店","address":"愛知県岡崎市羽根町小豆坂３ ウイングタウン岡崎","grid":[34.923398,137.174883],"machineNum":1,"prefId":23},{"name":"アピタ岡崎北店","address":"愛知県岡崎市日名北町４－４６ アピタ岡崎北","grid":[34.975115,137.15257],"machineNum":2,"prefId":23},{"name":"ゲームランド岡崎","address":"愛知県岡崎市戸崎町外山３８－５ イオンモール岡崎","grid":[34.93756,137.164164],"machineNum":1,"prefId":23},{"name":"トイザらス岡崎店","address":"愛知県岡崎市大平町石丸３８ ワ－ルド・ワン２Ｆ","grid":[34.945768,137.187558],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー岡崎南店","address":"愛知県岡崎市戸崎町字ばら山１－１ イオン岡崎南３階","grid":[34.938729,137.164376],"machineNum":3,"prefId":23},{"name":"モーリーファンタジー岡崎店","address":"愛知県岡崎市上六名町字宮前1 コムタウン1F","grid":[34.950858,137.156556],"machineNum":1,"prefId":23},{"name":"西友岡崎店ゲームコーナー","address":"愛知県岡崎市戸崎町越舞２－１ 西友岡崎２Ｆ","grid":[34.931502,137.165436],"machineNum":1,"prefId":23},{"name":"アピタ岩倉店","address":"愛知県岩倉市旭町1-25 アピタ岩倉","grid":[35.276574,136.872941],"machineNum":1,"prefId":23},{"name":"アミューズファクトリー","address":"愛知県常滑市りんくう町２丁目２０番３ イオンモール常滑２階","grid":[34.882162,136.826214],"machineNum":2,"prefId":23},{"name":"モーリーファンタジー常滑店","address":"愛知県常滑市りんくう町2-20-3 イオンモール常滑2階","grid":[34.882162,136.826214],"machineNum":1,"prefId":23},{"name":"タイトーステーション弥富","address":"愛知県弥富市五明蒲原1371-4 タイトーステーション弥富","grid":[35.114406,136.719253],"machineNum":1,"prefId":23},{"name":"ファミリーアミューズメント新城店","address":"愛知県新城市宮ノ後６８ ピアゴ新城２Ｆ","grid":[34.903454,137.495112],"machineNum":1,"prefId":23},{"name":"ビックトイズ プライムツリー赤池店","address":"愛知県日進市赤池町箕ノ手1番 プライムツリー赤池3F","grid":[35.119015,137.020377],"machineNum":1,"prefId":23},{"name":"アピタ高蔵寺店","address":"愛知県春日井市中央台２－５ アピタ高蔵寺","grid":[35.28276,137.048876],"machineNum":1,"prefId":23},{"name":"イオン春日井店キッズインタイトー","address":"愛知県春日井市柏井町４―１７ イオン春日井３階ゲームコーナー","grid":[35.238126,136.962444],"machineNum":1,"prefId":23},{"name":"トイザらス高蔵寺ニュータウン店","address":"愛知県春日井市中央台１－１－２ 高蔵寺センター","grid":[35.280037,137.048513],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー春日井店","address":"愛知県春日井市柏井町４－１７ イオン春日井４階","grid":[35.2378,136.962293],"machineNum":3,"prefId":23},{"name":"アピタ東海荒尾店","address":"愛知県東海市荒尾町山王前２０ アピタ荒尾","grid":[35.038112,136.905869],"machineNum":1,"prefId":23},{"name":"アピタ江南西店","address":"愛知県江南市松竹町上野２０５ アピタ江南西","grid":[35.343286,136.854692],"machineNum":1,"prefId":23},{"name":"ワンダーフォレスト江南西店","address":"愛知県江南市松竹町上野２０５番地 アピタ江南西２階","grid":[35.343286,136.854692],"machineNum":1,"prefId":23},{"name":"アミュージアム津島店","address":"愛知県津島市大字津島字北新開351 ヨシズヤ津島本店 シネマ館2F","grid":[35.174478,136.746413],"machineNum":1,"prefId":23},{"name":"ジャムジャムガーデン津島店","address":"愛知県津島市津島北新開３５１ ヨシヅヤ津島本店３階","grid":[35.174478,136.746413],"machineNum":1,"prefId":23},{"name":"ファンタジックランド清洲店","address":"愛知県清須市西市場５－５－３ ヨシヅヤ清洲３階","grid":[35.218788,136.829037],"machineNum":1,"prefId":23},{"name":"太閤天然温泉湯吉郎","address":"愛知県清須市下河原下之切１１１０－１ 太閤天然温泉湯吉郎","grid":[35.182811,136.845356],"machineNum":1,"prefId":23},{"name":"セガ東名ボール","address":"愛知県瀬戸市西原町２丁目１１４ 東名ボール","grid":[35.209148,137.062874],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー瀬戸みずの店","address":"愛知県瀬戸市みずの坂２丁目２５３番地 イオン瀬戸みずの２階","grid":[35.242897,137.067425],"machineNum":2,"prefId":23},{"name":"ファミリーランドドリーム","address":"愛知県田原市田原町南新地７６－１ ショッピングタウンパオ１階ト３階","grid":[34.672354,137.274533],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー知多店","address":"愛知県知多市新知東町１－１０－１ イトーヨーカドー知多","grid":[34.981428,136.866987],"machineNum":1,"prefId":23},{"name":"ギャラリエアピタ知立店","address":"愛知県知立市長篠町大山１８－１ ギャラリエアピタ知立","grid":[34.998208,137.053627],"machineNum":2,"prefId":23},{"name":"セガワールド知立","address":"愛知県知立市長篠町大山１８－１ ギャラリエアピタ知立１階","grid":[34.998208,137.053627],"machineNum":1,"prefId":23},{"name":"namcoアピタ稲沢店","address":"愛知県稲沢市天池五反田町１番地 アピタ稲沢","grid":[35.253146,136.772165],"machineNum":2,"prefId":23},{"name":"アピタ稲沢店","address":"愛知県稲沢市天池五反田町１ アピタ稲沢","grid":[35.253557,136.770659],"machineNum":1,"prefId":23},{"name":"アピタ稲沢東店","address":"愛知県稲沢市下津穂所１－１－１ アピタ稲沢東","grid":[35.259141,136.8194],"machineNum":1,"prefId":23},{"name":"タイトーステーションパールシティ稲沢店","address":"愛知県稲沢市井之口大坪町８０－１ パールシティ稲沢２Ｆ","grid":[35.237519,136.818836],"machineNum":1,"prefId":23},{"name":"フラミンゴキッズ","address":"愛知県稲沢市下津穂所一丁目１番１ アピタ稲沢東２階","grid":[35.259102,136.819434],"machineNum":1,"prefId":23},{"name":"プラザカプコン稲沢店","address":"愛知県稲沢市長野７丁目１－２ リーフウォーク稲沢２階","grid":[35.259125,136.819367],"machineNum":1,"prefId":23},{"name":"アピタ蒲郡店","address":"愛知県蒲郡市港町１７－１０ アピタ蒲郡","grid":[34.820812,137.225449],"machineNum":1,"prefId":23},{"name":"アピタ西尾店","address":"愛知県西尾市高畠町三丁目２３－９ ヴェルサウォーク西尾","grid":[34.863332,137.059711],"machineNum":1,"prefId":23},{"name":"シャオ店内ムー大陸","address":"愛知県西尾市下町御城下２３－１ おしろタウンシャオ","grid":[34.867383,137.045563],"machineNum":1,"prefId":23},{"name":"ファンタジーウエストタウン","address":"愛知県西尾市高畠町３－２３－９ ヴェルサウォーク西尾３Ｆ","grid":[34.863383,137.059468],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー豊川店","address":"愛知県豊川市開運通り２－３１ イオン豊川２階","grid":[34.827155,137.386721],"machineNum":4,"prefId":23},{"name":"豊川メトロポリス","address":"愛知県豊川市下長山町上アライ１４－１ 豊川コロナワールド","grid":[34.802497,137.384637],"machineNum":1,"prefId":23},{"name":"アピタ向山店","address":"愛知県豊橋市向山町字中畑１－１ アピタ向山","grid":[34.755017,137.401446],"machineNum":2,"prefId":23},{"name":"タイトーステーション豊橋店","address":"愛知県豊橋市藤沢町１４１－４ ホリディスクエア内アミューズメントビル１Ｆ","grid":[34.744133,137.371452],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー豊橋南店","address":"愛知県豊橋市野依町字落合1-12 イオン豊橋南","grid":[34.709847,137.388092],"machineNum":3,"prefId":23},{"name":"MEGAドン・キホーテUNY豊田元町店","address":"愛知県豊田市土橋町2-65","grid":[35.062543,137.131176],"machineNum":1,"prefId":23},{"name":"イオン高橋店","address":"愛知県豊田市東山町１－９５０－１ グリーンシティ","grid":[35.085729,137.195943],"machineNum":1,"prefId":23},{"name":"プラサカプコン豊田店","address":"愛知県豊田市東山町１－５－１ グリーンシティ３階ゲームコーナー","grid":[35.087756,137.184393],"machineNum":3,"prefId":23},{"name":"モーリーファンタジー豊田店","address":"愛知県豊田市広路1-1イオンスタイル豊田3階","grid":[35.078353,137.160279],"machineNum":3,"prefId":23},{"name":"ＧＡＺＡ","address":"愛知県豊田市喜多町１丁目１４０番地 ＧＡＺＡ３Ｆ","grid":[35.08795,137.157318],"machineNum":1,"prefId":23},{"name":"namcoイオンモール長久手店","address":"愛知県長久手市長久手中央土地区画整理事業地内 イオンモール長久手店3階","grid":[35.173518,137.050709],"machineNum":2,"prefId":23},{"name":"アピタ長久手店","address":"愛知県長久手市戸田谷９０１－１ アピタ長久手","grid":[35.172489,137.038415],"machineNum":3,"prefId":23},{"name":"モーリーファンタジー長久手店","address":"愛知県長久手市長久手中央土地区画整理事業地内5・10・11街区 イオンスタイル長久手店3階","grid":[35.184083,137.048722],"machineNum":2,"prefId":23},{"name":"花しょうぶ","address":"愛知県長久手市丁子田１７－１３ 花しょうぶ","grid":[35.156212,137.02904],"machineNum":1,"prefId":23},{"name":"ファンタジックランド高浜店","address":"愛知県高浜市神明町８－２０－１ Ｔぽーと２階","grid":[34.936403,137.001489],"machineNum":1,"prefId":23},{"name":"アピタ大口店","address":"愛知県丹羽郡大口町丸２－３６ アピタ大口","grid":[35.330712,136.905645],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー扶桑店","address":"愛知県丹羽郡扶桑町大字南山名字高塚５－１ イオン扶桑２階","grid":[35.363835,136.905263],"machineNum":2,"prefId":23},{"name":"楽市楽座扶桑店","address":"愛知県丹羽郡扶桑町南山名高塚５番地 イオンモール扶桑２階","grid":[35.361979,136.897996],"machineNum":1,"prefId":23},{"name":"アピタ阿久比店","address":"愛知県知多郡阿久比町大字椋岡字徳吉１－１２ アピタ阿久比","grid":[34.921055,136.920793],"machineNum":2,"prefId":23},{"name":"トイザらス東浦店","address":"愛知県知多郡東浦町緒川申新田二区６７－８ イオンモール東浦２Ｆ","grid":[34.979563,136.971705],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー東浦店","address":"愛知県知多郡東浦町大字緒川字旭13-2 イオン東浦","grid":[34.978751,136.974178],"machineNum":3,"prefId":23},{"name":"ユーズランド東浦店","address":"愛知県知多郡東浦町緒川申新田二区６７－８ イオンモール東浦２階","grid":[34.979563,136.971705],"machineNum":1,"prefId":23},{"name":"アピタ名古屋空港店","address":"愛知県西春日井郡豊山町大字豊場字林先１番８ エアポートウォーク名古屋","grid":[35.245942,136.924823],"machineNum":1,"prefId":23},{"name":"ナムコランドヒーローズキャンプ名古屋店","address":"愛知県西春日井郡豊山町豊場字林先１番地８ エアポートウォーク名古屋３Ｆ","grid":[35.245879,136.917392],"machineNum":2,"prefId":23},{"name":"ポート24幸田店","address":"愛知県額田郡幸田町高力字沖原１５ カメリアガーデン幸田","grid":[34.88896,137.163749],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー伊勢ララパーク店","address":"三重県伊勢市小木町曽弥５３８ イオンタウン伊勢ララパーク２階","grid":[34.50522,136.724884],"machineNum":3,"prefId":24},{"name":"ＮＩＣＯＰＡ伊勢店","address":"三重県伊勢市楠部町乙１６０ イオン伊勢２階","grid":[34.475014,136.735761],"machineNum":1,"prefId":24},{"name":"アピタ伊賀上野店","address":"三重県伊賀市服部町尾崎１７８８ アピタ伊賀上野","grid":[34.780754,136.139842],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー伊賀上野店","address":"三重県伊賀市上野茅町２５１９ イオン伊賀上野２階","grid":[34.759973,136.136518],"machineNum":1,"prefId":24},{"name":"CLUBSEGA名張","address":"三重県名張市希央台３－１５ ＣＬＵＢＳＥＧＡ名張","grid":[34.623507,136.103513],"machineNum":1,"prefId":24},{"name":"アピタ名張店","address":"三重県名張市下比奈知字黒田３１００－１ アピタ名張","grid":[34.624259,136.13029],"machineNum":1,"prefId":24},{"name":"YAZワールド四日市店","address":"三重県四日市市泊小柳町4-34 YAZワールド四日市","grid":[34.939331,136.606782],"machineNum":1,"prefId":24},{"name":"アピタ四日市店","address":"三重県四日市市安島１－３－３１ ララスクエア","grid":[34.968394,136.616618],"machineNum":1,"prefId":24},{"name":"ナムコカヨーアミューズパーク","address":"三重県四日市市日永4-2-41","grid":[34.946767,136.604025],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー四日市北店","address":"三重県四日市市富州原町２－４０ イオン四日市北２階","grid":[35.007668,136.658179],"machineNum":2,"prefId":24},{"name":"モーリーファンタジー四日市尾平店","address":"三重県四日市市尾平町字天王川原1805 イオン四日市尾平","grid":[34.977317,136.590998],"machineNum":3,"prefId":24},{"name":"四日市アミューズメントパーク","address":"三重県四日市市安島１－３－３１ ララスクエア５階","grid":[34.968303,136.616578],"machineNum":2,"prefId":24},{"name":"ＮＩＣＯＰＡ四日市北","address":"三重県四日市市富州原町２－４０ イオン四日市北２階","grid":[35.007668,136.658179],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー阿児店","address":"三重県志摩市阿児町鵜方３２１５ イオン阿児２階","grid":[34.323467,136.828474],"machineNum":1,"prefId":24},{"name":"アピタ松阪三雲店","address":"三重県松阪市市場庄町１２６６－１ アピタ松阪三雲","grid":[34.604084,136.520414],"machineNum":1,"prefId":24},{"name":"クラブセガアドバンスモール松阪","address":"三重県松阪市田村町２３５－１ クラブセガアドバンスモール松阪","grid":[34.553884,136.514665],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー松阪店","address":"三重県松阪市船江町１３９２－２７ イオン松阪３階","grid":[34.593673,136.522734],"machineNum":2,"prefId":24},{"name":"BANDAI asobi:長島店","address":"三重県桑名市長島町浦安368 ジャズドリーム長島","grid":[35.028176,136.726638],"machineNum":1,"prefId":24},{"name":"PALO桑名店","address":"三重県桑名市新西方1丁目22番地 イオン2F","grid":[35.072291,136.662491],"machineNum":3,"prefId":24},{"name":"アピタ桑名店","address":"三重県桑名市中央町３－２１ アピタ桑名","grid":[35.064124,136.687909],"machineNum":1,"prefId":24},{"name":"セガワールド桑名","address":"三重県桑名市大字大仲新田字宮前１５８番地 サンシパーク","grid":[35.079094,136.609009],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー桑名店","address":"三重県桑名市新西方1丁目22番地 イオン桑名1番街3階","grid":[35.072291,136.662491],"machineNum":3,"prefId":24},{"name":"にこぱイオン津店","address":"三重県津市桜橋３－４４６ イオン津２階","grid":[34.736591,136.519451],"machineNum":2,"prefId":24},{"name":"イオン津店","address":"三重県津市桜橋３－４４６ イオン津","grid":[34.736591,136.519451],"machineNum":2,"prefId":24},{"name":"セガワールド久居","address":"三重県津市久居明神町字風早２５３４－１ セガワールド久居","grid":[34.68411,136.466832],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー津城山店","address":"三重県津市久居小野辺町１１３０－７ マックスバリュ津城山２階","grid":[34.679388,136.501492],"machineNum":3,"prefId":24},{"name":"namcoイオンモール鈴鹿店","address":"三重県鈴鹿市庄野羽山四丁目1番2号 イオンモール鈴鹿2F","grid":[34.871628,136.531569],"machineNum":1,"prefId":24},{"name":"アピナ鈴鹿店","address":"三重県鈴鹿市庄野羽山４－２０－１ イオンタウン鈴鹿２Ｆ","grid":[34.872131,136.527105],"machineNum":2,"prefId":24},{"name":"ドナリアコットサンズ店","address":"三重県鈴鹿市白子駅前９－２０ イオン白子３階","grid":[34.836127,136.59116],"machineNum":1,"prefId":24},{"name":"ハローズガーデン鈴鹿店","address":"三重県鈴鹿市南玉垣町３６２８ アピタ鈴鹿２階","grid":[34.853198,136.582163],"machineNum":2,"prefId":24},{"name":"モーリーファンタジーイオン鈴鹿店","address":"三重県鈴鹿市庄野羽山４－１－２ イオンモール鈴鹿２階","grid":[34.871628,136.531569],"machineNum":4,"prefId":24},{"name":"モーリーファンタジー鈴鹿店","address":"三重県鈴鹿市算所2-5-1 鈴鹿ハンター","grid":[34.873403,136.546356],"machineNum":2,"prefId":24},{"name":"モーリーファンタジー東員店","address":"三重県員弁郡東員町長深字築田５１０番地１ イオンモール東員３階","grid":[35.060091,136.578877],"machineNum":2,"prefId":24},{"name":"楽市楽座イオンモール東員店","address":"三重県員弁郡東員町長深築田510-1 イオンモール東員","grid":[35.060091,136.578877],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー明和店","address":"三重県多気郡明和町中村長波賀１２２３番地 イオンモール明和２階","grid":[34.581187,136.613899],"machineNum":2,"prefId":24},{"name":"ザ・ビッグエクストラ玉城店","address":"三重県度会郡玉城町世古字小垣内３３５－２ ザ・ビッグエクストラ玉城","grid":[34.515507,136.63554],"machineNum":1,"prefId":24},{"name":"ザ・サードプラネット 大津店","address":"滋賀県大津市打出浜14‐30","grid":[35.004542,135.879173],"machineNum":1,"prefId":25},{"name":"モーリーファンタジー大津一里山店","address":"滋賀県大津市一里山7-1-1 フォレオ大津一里山2F","grid":[34.974207,135.933241],"machineNum":2,"prefId":25},{"name":"モーリーファンタジー大津京店","address":"滋賀県大津市皇子が丘3-11-1 イオン大津京","grid":[35.024467,135.860294],"machineNum":1,"prefId":25},{"name":"ラウンドワン浜大津アーカス","address":"滋賀県大津市浜町２－１ 浜大津アーカス","grid":[35.01084,135.866806],"machineNum":1,"prefId":25},{"name":"GAME FIELD守山店","address":"滋賀県守山市今浜町２６２０－５ ピエリ守山１Ｆ","grid":[35.123048,135.945579],"machineNum":2,"prefId":25},{"name":"平和堂アル・プラザ守山","address":"滋賀県守山市播磨田町１８５－１ モリーブ","grid":[35.066653,135.994832],"machineNum":1,"prefId":25},{"name":"namcoビバシティ彦根","address":"滋賀県彦根市竹ヶ鼻町４３－１ ビバシティ彦根２Ｆ","grid":[35.243842,136.251487],"machineNum":1,"prefId":25},{"name":"ビバシティ平和堂","address":"滋賀県彦根市竹ヶ鼻町４３－１ ビバシティ彦根","grid":[35.243788,136.25015],"machineNum":1,"prefId":25},{"name":"平和堂アル・プラザ八日市","address":"滋賀県東近江市八日市浜野町３－１ ショッピングプラザアピア","grid":[35.114711,136.197115],"machineNum":1,"prefId":25},{"name":"プラザパルAP栗東店","address":"滋賀県栗東市綣2-3-22 アル・プラザ栗東2階","grid":[35.036593,135.98169],"machineNum":1,"prefId":25},{"name":"平和堂アル・プラザ栗東","address":"滋賀県栗東市綣２－３－２２ アル・プラザ栗東","grid":[35.036593,135.98169],"machineNum":1,"prefId":25},{"name":"イオンタウン湖南ゲームコーナー","address":"滋賀県湘南市岩根４５８０ イオンタウン湘南","grid":[34.994758,136.108096],"machineNum":1,"prefId":25},{"name":"ナムコランドアルプラザ水口店","address":"滋賀県甲賀市水口町名坂４１９－１ アル・プラザ水口新館２Ｆ","grid":[34.976981,136.172078],"machineNum":1,"prefId":25},{"name":"平和堂アル・プラザ水口","address":"滋賀県甲賀市水口町本綾野５６６－１ アル・プラザ水口","grid":[34.976946,136.170263],"machineNum":1,"prefId":25},{"name":"ゲームランド草津店","address":"滋賀県草津市新浜町３００番地 イオン草津３階","grid":[34.998466,135.910824],"machineNum":3,"prefId":25},{"name":"セガワールド草津","address":"滋賀県草津市西渋川１－２３－２３ エイスクエア２Ｆ","grid":[35.024392,135.959333],"machineNum":2,"prefId":25},{"name":"モーリーファンタジー草津店","address":"滋賀県草津市新浜町３００ イオン草津３階","grid":[34.998466,135.910824],"machineNum":3,"prefId":25},{"name":"平和堂アル・プラザ草津","address":"滋賀県草津市西渋川１－２３－３０ アルプラザ草津","grid":[35.025535,135.958532],"machineNum":1,"prefId":25},{"name":"エースレーン近江八幡","address":"滋賀県近江八幡市 出町736","grid":[35.131777,136.102218],"machineNum":1,"prefId":25},{"name":"タイトーFステーション 近江八幡店","address":"滋賀県近江八幡市鷹飼町南3-7 イオン近江八幡","grid":[35.121558,136.103033],"machineNum":1,"prefId":25},{"name":"モーリーファンタジーイオン近江八幡店","address":"滋賀県近江八幡市鷹飼町南３丁目７番 イオン近江八幡３階","grid":[35.121641,136.103078],"machineNum":1,"prefId":25},{"name":"ユーアイランド近江八幡店","address":"滋賀県近江八幡市桜宮町２０２－１ アル・プラザ近江八幡３Ｆ","grid":[35.130395,136.096081],"machineNum":1,"prefId":25},{"name":"平和堂アル・プラザ近江八幡","address":"滋賀県近江八幡市桜宮町２０２－１ アル・プラザ近江八幡","grid":[35.130395,136.096081],"machineNum":1,"prefId":25},{"name":"ザ・ビッグエクストラ野洲店","address":"滋賀県野洲市乙窪長繰４８０－１ イオンタウン野洲","grid":[35.099084,136.007468],"machineNum":1,"prefId":25},{"name":"モーリーファンタジー長浜店","address":"滋賀県長浜市山階町２７１－１ イオン長浜２階","grid":[35.397037,136.289442],"machineNum":2,"prefId":25},{"name":"平和堂アル・プラザ長浜","address":"滋賀県長浜市小堀町４５０ アルプラザ長浜","grid":[35.383684,136.285941],"machineNum":1,"prefId":25},{"name":"平和堂今津店","address":"滋賀県高島市今津町今津１６８８ 今津ショッピングセンターリプル","grid":[35.405052,136.038295],"machineNum":1,"prefId":25},{"name":"タカラ島亀岡店","address":"京都府亀岡市篠町野条上又１１－１ アル・プラザ亀岡３階","grid":[35.001422,135.6026],"machineNum":1,"prefId":26},{"name":"平和堂エール峰山店","address":"京都府京丹後市峰山町新町１６０６－１ エール峰山","grid":[35.608312,135.082716],"machineNum":1,"prefId":26},{"name":"ユーイング 京田辺店","address":"京都府京田辺市田辺中央５－２－１ アル・プラザ京田辺","grid":[34.822018,135.768938],"machineNum":1,"prefId":26},{"name":"namcoイオンモールKYOTO店","address":"京都府京都市南区西九条鳥居口町1 イオンモールKYOTO Sakura館 4F","grid":[34.982747,135.754598],"machineNum":2,"prefId":26},{"name":"ゲームパニック京都","address":"京都府京都市中京区新京極通 三条下ル桜之町415番 MOVIX京都別館別館1階","grid":[35.007911,135.767712],"machineNum":1,"prefId":26},{"name":"ザ・サードプラネットBiVi京都二条店","address":"京都府京都市中京区西ノ京栂尾町107番地 ザ・サードプラネットBiVi京都二条","grid":[35.010322,135.741174],"machineNum":4,"prefId":26},{"name":"セガワールド六地蔵","address":"京都府京都市伏見区桃山町山ノ下３２ ＭＯＭＯテラスＡＭ棟２Ｆ","grid":[34.936586,135.793946],"machineNum":1,"prefId":26},{"name":"ビックカメラＪＲ京都駅店","address":"京都府京都市下京区東塩小路町９２７ ビックカメラＪＲ京都駅","grid":[34.985873,135.755638],"machineNum":1,"prefId":26},{"name":"プラサカプコン京都店","address":"京都府京都市右京区西院追分町２５－１ イオン京都五条３階","grid":[34.997548,135.727093],"machineNum":3,"prefId":26},{"name":"プレイランド京都店","address":"京都府京都市右京区山ノ内池尻町１－１ 京都ファミリー３Ｆ","grid":[35.004535,135.720963],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー京都五条店","address":"京都府京都市右京区西院追分町25-1 イオン京都五条","grid":[34.997548,135.727093],"machineNum":4,"prefId":26},{"name":"モーリーファンタジー京都桂川店","address":"京都府京都市南区久世高田町376-1 イオンモール京都桂川","grid":[34.963735,135.707219],"machineNum":3,"prefId":26},{"name":"モーリーファンタジー桂南店","address":"京都府京都市南区久世上久世町485 ダイエー桂南2F","grid":[34.967453,135.71717],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー洛南店","address":"京都府京都市南区吉祥院御池町３１ イオン洛南２階","grid":[34.975426,135.736401],"machineNum":3,"prefId":26},{"name":"ユーイング 醍醐店","address":"京都府京都市伏見区醍醐高畑町１－３７ アル・プラザ醍醐","grid":[34.951134,135.811215],"machineNum":1,"prefId":26},{"name":"ヨドバシカメラマルチメディア京都","address":"京都府京都市下京区京都駅前京都 ヨドバシカメラマルチメディア京都","grid":[34.987984,135.759465],"machineNum":3,"prefId":26},{"name":"北大路ビブレ","address":"京都府京都市北区小山北上総町49-1 北大路ビブレ","grid":[35.044972,135.758349],"machineNum":1,"prefId":26},{"name":"平和堂フレンドマート梅津店","address":"京都府京都市右京区梅津中村町３７－１ 平和堂フレンドマート梅津","grid":[35.00262,135.699714],"machineNum":1,"prefId":26},{"name":"楽市楽座イオンモール京都桂川店","address":"京都府京都市南区久世高田町３４６－１ ３０５１区画 イオンモール京都桂川３階","grid":[34.963735,135.707219],"machineNum":1,"prefId":26},{"name":"レインボーランド八幡店","address":"京都府八幡市八幡一ノ坪２３－１ イズミヤ八幡","grid":[34.861129,135.712727],"machineNum":1,"prefId":26},{"name":"アミパラ京都南店","address":"京都府向日市森本町１５－７ うきわくシティ２Ｆ","grid":[34.948138,135.710656],"machineNum":1,"prefId":26},{"name":"namcoアルプラザ城陽店","address":"京都府城陽市富野荒見田112番地 アル・プラザ城陽4F","grid":[34.84221,135.785972],"machineNum":1,"prefId":26},{"name":"平和堂アル・プラザ城陽","address":"京都府城陽市富野荒見田１１２ アル・プラザ城陽","grid":[34.842239,135.785828],"machineNum":1,"prefId":26},{"name":"namcoアルプラザ宇治東店","address":"京都府宇治市莵道28-1 アル・プラザ宇治東3F","grid":[34.901681,135.825601],"machineNum":1,"prefId":26},{"name":"ナムコランドミップル店","address":"京都府宮津市字浜町３０１２ 宮津シーサイドマートＭｉｐｐｌｅ５階","grid":[35.539188,135.193569],"machineNum":1,"prefId":26},{"name":"アミュージアム木津川店","address":"京都府木津川市州見台1-1-1-1","grid":[34.720608,135.817593],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー高の原店","address":"京都府木津川市相楽台１－１－１ イオン高の原４階","grid":[34.725075,135.790307],"machineNum":3,"prefId":26},{"name":"平和堂アル・プラザ木津","address":"京都府木津川市相楽城西１５ アル・プラザ木津","grid":[34.7386,135.791894],"machineNum":1,"prefId":26},{"name":"PLANT-3福知山店","address":"京都府福知山市字多保市小字手次１１４－１３ ＰＬＡＮＴ－３福知山","grid":[35.272143,135.185123],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー福知山店","address":"京都府福知山市岩井７９－８ イオン福知山２階","grid":[35.317015,135.100954],"machineNum":2,"prefId":26},{"name":"モーリーファンタジー綾部店","address":"京都府綾部市綾中町花ノ木30 バザールタウン綾部2F","grid":[35.302386,135.257791],"machineNum":1,"prefId":26},{"name":"ナムコランドらぽーる","address":"京都府舞鶴市南浜町２７－５ らぽーる３Ｆ","grid":[35.466648,135.395507],"machineNum":1,"prefId":26},{"name":"レインボーランド長岡店","address":"京都府長岡京市開田４丁目７番１号 イズミヤ長岡２階","grid":[34.922807,135.692603],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー久御山店","address":"京都府久世郡久御山町森南大内１５６－１ イオンモール久御山２階","grid":[34.893247,135.74611],"machineNum":3,"prefId":26},{"name":"アピタ精華台店","address":"京都府相楽郡精華町精華台9-2-4 アピタ精華台","grid":[34.746658,135.770744],"machineNum":1,"prefId":26},{"name":"ジョイパーク精華台","address":"京都府相楽郡精華町精華台9-2-4 アピタ精華台西館2階","grid":[34.746607,135.770217],"machineNum":1,"prefId":26},{"name":"ビックカメラ あべのキューズモール店","address":"大阪府阿倍野区阿倍野筋1-6-1 あべのキューズモール内3階","grid":[34.644773,135.511589],"machineNum":1,"prefId":27},{"name":"イトーヨーカドーアリオ八尾店","address":"大阪府八尾市光町2-3 アリオ八尾","grid":[34.632487,135.605796],"machineNum":2,"prefId":27},{"name":"ゲームフェイス八尾店","address":"大阪府八尾市天王寺屋２－６８ 八尾ボールアロー","grid":[34.603983,135.612349],"machineNum":1,"prefId":27},{"name":"レインボーランド八尾店","address":"大阪府八尾市沼１丁目１番地 イズミヤ八尾１階","grid":[34.58862,135.603039],"machineNum":1,"prefId":27},{"name":"エンターテイメントフィールド ららぽーとEXPOCITY店","address":"大阪府吹田市千里万博公園２－１ ららぽーとＥＸＰＯＣＩＴＹ３Ｆ","grid":[34.805123,135.535396],"machineNum":1,"prefId":27},{"name":"トイザらス阪急山田店","address":"大阪府吹田市山田西４－１－２ デュー阪急山田４Ｆ","grid":[34.80496,135.515368],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー南千里店","address":"大阪府吹田市千里山西６－５６－１ イオン南千里４階","grid":[34.785926,135.50567],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー吹田店","address":"大阪府吹田市朝日町2番101号 ダイエー吹田4F","grid":[34.762675,135.525854],"machineNum":2,"prefId":27},{"name":"レインボーランド千里丘店","address":"大阪府吹田市山田南１番１号 イズミヤ千里丘２階レインボーランド千里丘店","grid":[34.788468,135.537959],"machineNum":1,"prefId":27},{"name":"きゃらんど和泉","address":"大阪府和泉市あゆみ野４－４－７ ららぽーと和泉２階","grid":[34.436797,135.448216],"machineNum":1,"prefId":27},{"name":"スーパーセンターオークワ和泉納花店","address":"大阪府和泉市納花町３１３ スーパーセンターオークワ和泉納花","grid":[34.444721,135.475408],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー和泉府中店","address":"大阪府和泉市肥子町２－２－１ イオン和泉府中４階","grid":[34.48588,135.420688],"machineNum":3,"prefId":27},{"name":"ラウンドワンららぽーと和泉店","address":"大阪府和泉市あゆみ野４－４－７ ４階 ららぽーと和泉","grid":[34.436797,135.448216],"machineNum":2,"prefId":27},{"name":"レインボーランド和泉中央店","address":"大阪府和泉市いぶき野５丁目１番１１号 エコール和泉３階","grid":[34.460181,135.456905],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー四條畷店","address":"大阪府四條畷市砂４丁目３番２号 イオン四條畷３Ｆ","grid":[34.746375,135.629194],"machineNum":2,"prefId":27},{"name":"楽市楽座イオンモール四條畷店","address":"大阪府四條畷市砂４－３－２ イオン四條畷３階","grid":[34.746375,135.629194],"machineNum":1,"prefId":27},{"name":"にこぱ原山台店","address":"大阪府堺市南区原山台５－９－８ クロスモール","grid":[34.478873,135.499616],"machineNum":1,"prefId":27},{"name":"イトーヨーカドーアリオ鳳店","address":"大阪府堺市西区鳳南町3-199-12 アリオ鳳","grid":[34.524406,135.459436],"machineNum":2,"prefId":27},{"name":"イトーヨーカドー津久野店","address":"大阪府堺市西区下田町２０－１ イトーヨーカドー津久野","grid":[34.541456,135.464439],"machineNum":2,"prefId":27},{"name":"ゲームパニック堺","address":"大阪府堺市堺区築港八幡町1番地1 堺浜シーサイドステージ内堺浜えんため館","grid":[34.598087,135.454783],"machineNum":2,"prefId":27},{"name":"ソユーゲームフィールド堺鉄砲町店","address":"大阪府堺市堺区鉄砲町1番地 イオンモール堺鉄砲町3階","grid":[34.594265,135.481363],"machineNum":1,"prefId":27},{"name":"ナムコランド鳳","address":"大阪府堺市西区鳳南町３－１９９－１２ アリオ鳳３Ｆ　３２８０","grid":[34.524406,135.459436],"machineNum":1,"prefId":27},{"name":"ハローズガーデン津久野店","address":"大阪府堺市西区下田町２０－１ イトーヨーカドー津久野２Ｆ","grid":[34.54155,135.46452],"machineNum":1,"prefId":27},{"name":"ハローズガーデン鳳店","address":"大阪府堺市西区鳳南町３－１９９－１２ アリオ鳳３Ｆ","grid":[34.524502,135.459176],"machineNum":1,"prefId":27},{"name":"モーリーファンタジーおおとり店","address":"大阪府堺市西区鳳東町７－７３３ おおとりウィングス２階","grid":[34.532712,135.463437],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー堺北花田店","address":"大阪府堺市北区東浅香山町４－１－１２ イオン堺北花田２階","grid":[34.584482,135.514728],"machineNum":3,"prefId":27},{"name":"モーリーファンタジー堺鉄砲町店","address":"大阪府堺市堺区鉄砲町1 イオンスタイル堺鉄砲町3階","grid":[34.594265,135.481363],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー新金岡店","address":"大阪府堺市北区新金岡町４－１－１１ イオン新金岡３階","grid":[34.567069,135.515503],"machineNum":1,"prefId":27},{"name":"ラウンドワンスタジアム堺中央環状店","address":"大阪府堺市東区石原町２町２４１番 ラウンドワンスタジアム堺中央環状","grid":[34.556976,135.536513],"machineNum":1,"prefId":27},{"name":"レインボーランド泉北店","address":"大阪府堺市中区小阪２７０ イズミヤ泉北２階","grid":[34.521819,135.492787],"machineNum":1,"prefId":27},{"name":"宝島 泉ヶ丘店","address":"大阪府堺市南区三原台1―1―3 ジョイパーク泉ヶ丘1階","grid":[34.498515,135.514284],"machineNum":1,"prefId":27},{"name":"タイトーFステーション住道店","address":"大阪府大東市赤井１－４－３ ポップタウン住道３Ｆ","grid":[34.708501,135.619552],"machineNum":1,"prefId":27},{"name":"MEGAドン・キホーテ深江橋店","address":"大阪府大阪市東成区深江北１－１３ ＭＥＧＡドン・キホーテ深江橋","grid":[34.674721,135.55716],"machineNum":1,"prefId":27},{"name":"NICOPAベルファ都島店","address":"大阪府大阪市都島区友渕２－１３－３４ ベルファ都島３Ｆ","grid":[34.715659,135.530121],"machineNum":1,"prefId":27},{"name":"PALO京橋店","address":"大阪府大阪市都島区片町2-3-51 イオン京橋2・3階","grid":[34.696161,135.532909],"machineNum":2,"prefId":27},{"name":"namcoなんばパークス店","address":"大阪府大阪市浪速区難波中2丁目10番70号 なんばパークス6F","grid":[34.661679,135.501906],"machineNum":1,"prefId":27},{"name":"namcoイオンモール鶴見緑地店","address":"大阪府大阪市鶴見区鶴見４－１７－１－４２１ イオンモール鶴見４Ｆ","grid":[34.704395,135.566296],"machineNum":2,"prefId":27},{"name":"namco大阪日本橋店","address":"大阪府大阪市浪速区難波中2-1-17 コスモビル","grid":[34.662941,135.504332],"machineNum":8,"prefId":27},{"name":"namco梅田","address":"大阪府大阪市北区小松原町３番３号 ＯＳビル２Ｆナムコシティ内","grid":[34.702871,135.500429],"machineNum":4,"prefId":27},{"name":"かみしんプラザアミューズパーク","address":"大阪府大阪市東淀川区大隅1-6-12","grid":[34.748642,135.541653],"machineNum":1,"prefId":27},{"name":"イトーヨーカドーあべの店","address":"大阪府大阪市阿倍野区阿倍野筋１－６－１ あべのキューズタウン","grid":[34.644773,135.511589],"machineNum":2,"prefId":27},{"name":"セガあべのキューズモール","address":"大阪府大阪市阿倍野区阿倍野筋１－６－１ あべのキューズタウン","grid":[34.644773,135.511589],"machineNum":2,"prefId":27},{"name":"セガワールドアポロ","address":"大阪府大阪市阿倍野区阿倍野筋１－５－３１ アポロビル３Ｆ","grid":[34.646541,135.511716],"machineNum":2,"prefId":27},{"name":"セガ今福","address":"大阪府大阪市城東区今福東１－９－３４ セガ今福","grid":[34.70098,135.55746],"machineNum":1,"prefId":27},{"name":"タイトーステーション大阪日本橋店","address":"大阪府大阪市浪速区日本橋４－９－１４ タイトーステーション大阪日本橋","grid":[34.660389,135.506124],"machineNum":1,"prefId":27},{"name":"タイトーステーション梅三小路","address":"大阪府大阪市北区梅田3丁目2-4","grid":[34.700867,135.494666],"machineNum":2,"prefId":27},{"name":"タイトーステーション難波","address":"大阪府大阪市中央区難波千日前１５－１２ タイトーステーション難波","grid":[34.663363,135.503185],"machineNum":1,"prefId":27},{"name":"トイザらス住之江公園店","address":"大阪府大阪市住之江区南加賀屋２－３－２３ トイザらス住之江公園","grid":[34.607981,135.474387],"machineNum":2,"prefId":27},{"name":"ドン・キホーテ新世界店","address":"大阪府大阪市浪速区恵美須東３－４－３６ ＭＥＧＡドン・キホーテ新世界","grid":[34.649682,135.504594],"machineNum":1,"prefId":27},{"name":"ビックカメラなんば店","address":"大阪府大阪市中央区千日前２－１０－１ ビックカメラなんば","grid":[34.666574,135.502636],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー京橋店","address":"大阪府大阪市都島区片町2-3-51 イオン京橋4階","grid":[34.696161,135.532909],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー喜連瓜破駅前店","address":"大阪府大阪市平野区瓜破２－１－１３ イオン喜連瓜破駅前３階","grid":[34.608132,135.551778],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー大阪ドームシティ店","address":"大阪府大阪市西区千代崎３丁目１３番１ イオン大阪ドームシティ３階","grid":[34.670377,135.477934],"machineNum":4,"prefId":27},{"name":"モーリーファンタジー野田阪神店","address":"大阪府大阪市福島区海老江１－１－２３ イオン野田阪神４階","grid":[34.695349,135.475843],"machineNum":4,"prefId":27},{"name":"モーリーファンタジー長吉店","address":"大阪府大阪市平野区長吉長原西1-1-10 ダイエー長吉","grid":[34.609236,135.565485],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー鶴見緑地店","address":"大阪府大阪市鶴見区鶴見4丁目17-1 イオンモール鶴見3階","grid":[34.704395,135.566296],"machineNum":3,"prefId":27},{"name":"ヨドバシカメラマルチメディア梅田","address":"大阪府大阪市北区大深町１－１ ヨドバシカメラマルチメディア梅田","grid":[34.704094,135.496268],"machineNum":4,"prefId":27},{"name":"ラウンドワン千日前店","address":"大阪府大阪市中央区難波１丁目３番１号 ラウンドワン千日前","grid":[34.667511,135.502862],"machineNum":1,"prefId":27},{"name":"天王寺パスカ店","address":"大阪府大阪市阿倍野区阿倍野筋２－４－５１ 天王寺パスカ","grid":[34.643955,135.512637],"machineNum":1,"prefId":27},{"name":"楽市楽座イオンモール大阪ドーム店","address":"大阪府大阪市西区千代崎３－１３－１ イオン大阪ドームシティ４階","grid":[34.670377,135.477934],"machineNum":1,"prefId":27},{"name":"近鉄百貨店上本町店7F For kids'+b byこぐま","address":"大阪府大阪市天王寺区上本町6-1-55","grid":[34.665579,135.520925],"machineNum":1,"prefId":27},{"name":"ｎａｍｃｏ マグスミノエ店","address":"大阪府大阪市住之江区泉１丁目１番８２号 マグスミノエ１Ｆ","grid":[34.609982,135.468277],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー金剛店","address":"大阪府大阪狭山市半田1-35-1 イオン金剛","grid":[34.498219,135.557905],"machineNum":2,"prefId":27},{"name":"namcoイオンモール大日店","address":"大阪府守口市大日東町1番18号 イオン大日4階","grid":[34.749306,135.579848],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー大日店","address":"大阪府守口市大日東町1-18 イオン大日","grid":[34.749439,135.580529],"machineNum":4,"prefId":27},{"name":"モーリーファンタジー金剛東店","address":"大阪府富田林市向陽台３－１－１ イオン金剛東４階","grid":[34.501391,135.580005],"machineNum":2,"prefId":27},{"name":"YAZ寝屋川店","address":"大阪府寝屋川市石津中町25-30 YAZ寝屋川","grid":[34.780629,135.619315],"machineNum":1,"prefId":27},{"name":"セガビバモール寝屋川","address":"大阪府寝屋川市寝屋南２－２２－２ ビバモール寝屋川モール","grid":[34.766883,135.650732],"machineNum":3,"prefId":27},{"name":"ユーイング 香里園店","address":"大阪府寝屋川市日新町５－５ アル・プラザ香里園","grid":[34.783242,135.623312],"machineNum":2,"prefId":27},{"name":"平和堂アル・プラザ香里園","address":"大阪府寝屋川市日新町５－５ アル・プラザ香里園","grid":[34.783242,135.623312],"machineNum":1,"prefId":27},{"name":"アミュージアム岸和田店","address":"大阪府岸和田市下松町１－３－１ ウィンディ岸和田内","grid":[34.459664,135.392233],"machineNum":1,"prefId":27},{"name":"トムソーヤのなかまたち岸和田店","address":"大阪府岸和田市港緑町2-1","grid":[34.466676,135.371413],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー東岸和田店","address":"大阪府岸和田市土生町２－３２－７ イオン東岸和田２階","grid":[34.447806,135.380909],"machineNum":2,"prefId":27},{"name":"宝島 岸和田店","address":"大阪府岸和田市春木若松町21-1 ラパーク岸和田2階","grid":[34.47959,135.392077],"machineNum":1,"prefId":27},{"name":"ふぇすたらんど東大阪店","address":"大阪府東大阪市西岩田３－２－３ 山陽マルナカ東大阪２Ｆ","grid":[34.669092,135.596602],"machineNum":1,"prefId":27},{"name":"わいわいランド東大阪店","address":"大阪府東大阪市吉田下島１－１ イトーヨーカドー東大阪２階","grid":[34.672268,135.617591],"machineNum":1,"prefId":27},{"name":"セガワールド布施","address":"大阪府東大阪市長堂１－１－１ ロンモール布施","grid":[34.664333,135.563428],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー東大阪店","address":"大阪府東大阪市荒本北２丁目３番２２号 イオン東大阪１階","grid":[34.67971,135.602292],"machineNum":1,"prefId":27},{"name":"レインボーランド若江岩田店","address":"大阪府東大阪市瓜生堂１丁目１０番５２号 イズミヤ若江岩田４階","grid":[34.661894,135.601022],"machineNum":1,"prefId":27},{"name":"宝島 鴻池店","address":"大阪府東大阪市鴻池町1‐1‐72","grid":[34.698829,135.602365],"machineNum":1,"prefId":27},{"name":"ＡＧスクエア東大阪店","address":"大阪府東大阪市稲田新町３－９－６４ フレスポ東大阪","grid":[34.691465,135.590847],"machineNum":1,"prefId":27},{"name":"namcoくずはモール店","address":"大阪府枚方市楠葉花園町１０―８５ くずはモール２Ｆ","grid":[34.859823,135.676805],"machineNum":2,"prefId":27},{"name":"セガニトリモール枚方店","address":"大阪府枚方市北山一丁目2番1号","grid":[34.838759,135.697759],"machineNum":2,"prefId":27},{"name":"セガワールド枚方","address":"大阪府枚方市須山町８３－１ サンシャインプラザ枚方","grid":[34.81962,135.675564],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー枚方店","address":"大阪府枚方市岡本町７番１－２０３ イオン枚方４階","grid":[34.815664,135.646513],"machineNum":3,"prefId":27},{"name":"ユーイング アル・プラザ枚方店","address":"大阪府枚方市津田元町1-4-1 アル・プラザ枚方","grid":[34.808104,135.702031],"machineNum":1,"prefId":27},{"name":"平和堂アル・プラザ枚方","address":"大阪府枚方市津田元町１－４－１ アル・プラザ枚方","grid":[34.808104,135.702031],"machineNum":1,"prefId":27},{"name":"namcoりんくうシークル店","address":"大阪府泉佐野市りんくう往来南３ りんくうタウン","grid":[34.410018,135.298543],"machineNum":1,"prefId":27},{"name":"ハローズガーデン泉佐野店","address":"大阪府泉佐野市下瓦屋２－２－７７ ショッパーズモール泉佐野３階","grid":[34.422122,135.327562],"machineNum":2,"prefId":27},{"name":"宝島 日根野店","address":"大阪府泉佐野市日根野2496-1","grid":[34.393734,135.333889],"machineNum":1,"prefId":27},{"name":"ソユーゲームフィールド泉南店","address":"大阪府泉南市りんくう南浜3-12 イオンモールりんくう泉南2階","grid":[34.37941,135.266769],"machineNum":1,"prefId":27},{"name":"モーリーファンタジーりんくう泉南店","address":"大阪府泉南市りんくう南浜３－１２ イオンモールりんくう泉南２階","grid":[34.37941,135.266769],"machineNum":3,"prefId":27},{"name":"泉大津フタバボウル","address":"大阪府泉大津市松之浜町１丁目２番５３号 泉大津フタバボウル","grid":[34.510884,135.415729],"machineNum":1,"prefId":27},{"name":"NAMCOLANDみのおキューズモール","address":"大阪府箕面市西宿１－１７－２２ みのおキューズモール３階","grid":[34.832246,135.490529],"machineNum":1,"prefId":27},{"name":"イオン新茨木店","address":"大阪府茨木市中津町１８－１ イオン新茨木","grid":[34.815316,135.580055],"machineNum":2,"prefId":27},{"name":"トイザらス茨木店","address":"大阪府茨木市藤の里１－７－４１ 茨木ショッピングプラザ１Ｆ","grid":[34.8377,135.545392],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー・f茨木店","address":"大阪府茨木市松ヶ本町８－３０－５ イオン茨木４階","grid":[34.819273,135.573265],"machineNum":3,"prefId":27},{"name":"モーリーファンタジー茨木店","address":"大阪府茨木市松ヶ本町8-30-5 イオンモール茨木3階","grid":[34.819273,135.573265],"machineNum":3,"prefId":27},{"name":"ユーイング 茨木店","address":"大阪府茨木市上郡２－１２－８ アル・プラザ茨木","grid":[34.83823,135.555709],"machineNum":1,"prefId":27},{"name":"平和堂アル・プラザ茨木","address":"大阪府茨木市上郡２－１２－８ アル・プラザ茨木","grid":[34.83823,135.555709],"machineNum":1,"prefId":27},{"name":"トイザらス藤井寺店","address":"大阪府藤井寺市岡２－８－４１ ソリヤ２Ｆ","grid":[34.572186,135.593286],"machineNum":1,"prefId":27},{"name":"ＣＬＵＢＳＥＧＡ藤井寺","address":"大阪府藤井寺市沢田１丁目２０－８ ＣＬＵＢＳＥＧＡ藤井寺","grid":[34.572773,135.605831],"machineNum":1,"prefId":27},{"name":"セガ 新三国アルゴ7店","address":"大阪府豊中市神州町１－１５ セガ新三国アルゴ７","grid":[34.738456,135.479621],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー貝塚店","address":"大阪府貝塚市地蔵堂７４－２ イオン貝塚","grid":[34.426736,135.355747],"machineNum":1,"prefId":27},{"name":"タイトーステーション 摂津富田店","address":"大阪府高槻市大畑町13-1","grid":[34.837481,135.589405],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー高槻店","address":"大阪府高槻市萩之庄３－４７－２ イオン高槻３階","grid":[34.858955,135.644317],"machineNum":3,"prefId":27},{"name":"ラウンドワンスタジアム高槻店","address":"大阪府高槻市辻子３丁目６番４号 ラウンドワンスタジアム高槻","grid":[34.832602,135.630268],"machineNum":1,"prefId":27},{"name":"平和堂アル・プラザ高槻","address":"大阪府高槻市芥川町１－２C－２０１ アクトアモーレ","grid":[34.852255,135.616655],"machineNum":2,"prefId":27},{"name":"モーリーファンタジー竜野店","address":"兵庫県たつの市龍野町堂本字五反田250-1 イオン竜野3階","grid":[34.85542,134.553725],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー三木店","address":"兵庫県三木市大村字砂１６３ イオン三木３階","grid":[34.809238,134.969682],"machineNum":2,"prefId":28},{"name":"ハローズガーデン新三田店","address":"兵庫県三田市けやき台１－６－４ イオン三田ウッディタウンイオン２","grid":[34.908274,135.186072],"machineNum":1,"prefId":28},{"name":"プラザパル三田店","address":"兵庫県三田市けやき台１－６－２ イオン三田ウッディタウン一番館３階","grid":[34.90826,135.186114],"machineNum":1,"prefId":28},{"name":"JOY POINT ニシダヤ","address":"兵庫県丹波市氷上町本郷300 ゆめタウン1F","grid":[35.158806,135.045462],"machineNum":1,"prefId":28},{"name":"アミューズメントパーク宝島 氷上店","address":"兵庫県丹波市氷上町本郷300 ゆめタウン氷上2階","grid":[35.158806,135.045462],"machineNum":1,"prefId":28},{"name":"カリヨンパークＮＩＣＯＰＡ","address":"兵庫県伊丹市池尻４－１－１ イオン伊丹昆陽４階","grid":[34.78459,135.381496],"machineNum":2,"prefId":28},{"name":"モーリーファンタジー伊丹店","address":"兵庫県伊丹市藤ノ木１－１－１ イオン伊丹３階","grid":[34.781713,135.423799],"machineNum":3,"prefId":28},{"name":"モーリーファンタジー伊丹昆陽店","address":"兵庫県伊丹市池尻4-1番1 イオン伊丹昆陽","grid":[34.78459,135.381496],"machineNum":3,"prefId":28},{"name":"レインボーランド昆陽店","address":"兵庫県伊丹市池尻１－１ イズミヤ昆陽","grid":[34.775878,135.38335],"machineNum":1,"prefId":28},{"name":"ハローズガーデン広畑店","address":"兵庫県兵庫県姫路市広畑区夢前町1-1-1","grid":[34.797248,134.637058],"machineNum":1,"prefId":28},{"name":"namcoニッケパークタウン加古川店","address":"兵庫県加古川市加古川町寺家町173-1","grid":[34.769658,134.835802],"machineNum":1,"prefId":28},{"name":"あそんじゃ王国加古川店","address":"兵庫県加古川市別府町緑町２ イトーヨーカドー加古川３Ｆ","grid":[34.726978,134.848041],"machineNum":1,"prefId":28},{"name":"アミパラ加古川店","address":"兵庫県加古川市尾上町今福７１－２ アミパラ加古川","grid":[34.75134,134.828697],"machineNum":1,"prefId":28},{"name":"イオン加古川店","address":"兵庫県加古川市平岡町新在家６１５－１ イオン加古川","grid":[34.749166,134.862395],"machineNum":1,"prefId":28},{"name":"イトーヨーカドー加古川店","address":"兵庫県加古川市別府町緑町２ イトーヨーカドー加古川","grid":[34.726978,134.848041],"machineNum":1,"prefId":28},{"name":"遊スペーススプラ（メガコート）","address":"兵庫県加古川市尾上町安田３５１－１ メガコート加古川","grid":[34.745709,134.835563],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー社店","address":"兵庫県加東市社１１２６－１ イオン社２階","grid":[34.914655,134.961604],"machineNum":2,"prefId":28},{"name":"モーリーファンタジー・f加西北条店","address":"兵庫県加西市北条町北条308-1 イオン加西北条","grid":[34.930469,134.828356],"machineNum":3,"prefId":28},{"name":"モーリーファンタジー南淡路店","address":"兵庫県南あわじ市賀集八幡北字東内３７８－１ イオン南淡路１階","grid":[34.281879,134.736971],"machineNum":2,"prefId":28},{"name":"MEGAドン・キホーテ姫路広畑店","address":"兵庫県姫路市広畑区夢前町1丁目1-1","grid":[34.797248,134.637058],"machineNum":1,"prefId":28},{"name":"namcoイオンモール姫路リバーシティー","address":"兵庫県姫路市飾磨区細江５２０番地姫路 イオンモール姫路リバーシティ２階","grid":[34.7978,134.665587],"machineNum":1,"prefId":28},{"name":"ふぇすたらんど広畑店","address":"兵庫県姫路市広畑区吾妻町３－２９－２ マルナカ広畑２階ゲ－ムコ－ナ－","grid":[34.795286,134.619995],"machineNum":1,"prefId":28},{"name":"ゆめパーク姫路店","address":"兵庫県姫路市神子岡前3丁目12‐17 4F","grid":[34.840558,134.670466],"machineNum":1,"prefId":28},{"name":"アピナ姫路","address":"兵庫県姫路市東郷町1454-3 姫路リオス2F","grid":[34.826718,134.715087],"machineNum":1,"prefId":28},{"name":"タイトーFステーション姫路","address":"兵庫県姫路市駅前町269‐270","grid":[34.828554,134.691717],"machineNum":2,"prefId":28},{"name":"ハローズガーデン姫路店","address":"兵庫県姫路市増位本町２－１２－１０ イオン姫路２階","grid":[34.856808,134.706406],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー姫路リバーシティ店","address":"兵庫県姫路市飾磨区細江２５６０番地 イオンモール姫路リバーシティ２階","grid":[34.79837,134.668442],"machineNum":3,"prefId":28},{"name":"モーリーファンタジー姫路大津店","address":"兵庫県姫路市大津区大津町２丁目５番 イオンモール姫路大津２階","grid":[34.806557,134.606673],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー山崎店","address":"兵庫県宍粟市山崎町中井字城下１０ イオン山崎３階","grid":[34.998337,134.54149],"machineNum":2,"prefId":28},{"name":"ふぇすたらんど小野店","address":"兵庫県小野市王子町868-1 イオン小野店2F","grid":[34.856414,134.935725],"machineNum":1,"prefId":28},{"name":"セガあまがさきキューズモール","address":"兵庫県尼崎市潮江１－３－１ あまがさきキューズモール４Ｆ","grid":[34.733576,135.430763],"machineNum":2,"prefId":28},{"name":"セガワールドつかしん","address":"兵庫県尼崎市塚口本町４－８－１ つかしん","grid":[34.761669,135.419511],"machineNum":1,"prefId":28},{"name":"タイトーステーション尼崎つかしん店","address":"兵庫県尼崎市塚口本町４丁目８番地１号 つかしん３階","grid":[34.761669,135.419511],"machineNum":1,"prefId":28},{"name":"ニシダヤ三和店","address":"兵庫県尼崎市神田南通3-83 三和本通商街","grid":[34.720766,135.407893],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー尼崎店","address":"兵庫県尼崎市次屋３－１３－１８ イオン尼崎２階","grid":[34.742105,135.442443],"machineNum":3,"prefId":28},{"name":"平和堂アル・プラザあまがさき","address":"兵庫県尼崎市潮江１－３－１ あまがさきキューズモール","grid":[34.733574,135.430865],"machineNum":1,"prefId":28},{"name":"平和堂アル・プラザつかしん","address":"兵庫県尼崎市塚口本町４－８－１ つかしん","grid":[34.761669,135.419511],"machineNum":1,"prefId":28},{"name":"ゲームパーク 西友川西店","address":"兵庫県川西市栄町16-8 西友川西店5F","grid":[34.828498,135.412303],"machineNum":1,"prefId":28},{"name":"きゃらんどスーパーシティ明石店","address":"兵庫県明石市二見町西二見駅前１－１８ イトーヨーカドー明石３Ｆ","grid":[34.705119,134.878316],"machineNum":1,"prefId":28},{"name":"ふぇすたらんど土山店","address":"兵庫県明石市魚住町清水字舞々２２０８－１ イオン土山","grid":[34.711534,134.904314],"machineNum":1,"prefId":28},{"name":"イトーヨーカドー明石店","address":"兵庫県明石市二見町西二見駅前１－１８ イトーヨーカドー明石","grid":[34.705518,134.878313],"machineNum":1,"prefId":28},{"name":"トイザらス明石店","address":"兵庫県明石市東仲ノ町６－１ アスピア明石３Ｆ","grid":[34.647735,134.995278],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー明石店","address":"兵庫県明石市大久保町ゆりのき通り２－３－１ イオン明石ショッピングセンター３階","grid":[34.680502,134.936426],"machineNum":3,"prefId":28},{"name":"モーリーファンタジー和田山店","address":"兵庫県朝来市和田山町枚田岡７７４ イオン和田山２階","grid":[35.329815,134.86394],"machineNum":2,"prefId":28},{"name":"モーリーファンタジー洲本店","address":"兵庫県洲本市塩屋1-1-8 イオン洲本","grid":[34.344573,134.892128],"machineNum":1,"prefId":28},{"name":"アル・クリオゲームコーナー","address":"兵庫県淡路市志筑新島１０番地の３ イオン淡路３Ｆゲームコーナー","grid":[34.426057,134.906156],"machineNum":1,"prefId":28},{"name":"namcoイオンモール神戸南店","address":"兵庫県神戸市兵庫区中之島2-1-1","grid":[34.665719,135.17459],"machineNum":1,"prefId":28},{"name":"アルゴ","address":"兵庫県神戸市中央区下山手通１－１－８ アルゴ","grid":[34.693852,135.191303],"machineNum":1,"prefId":28},{"name":"セガフェニックスプラザ摩耶","address":"兵庫県神戸市灘区味泥町６－１ フェニックスプラザ摩耶１Ｆ","grid":[34.704051,135.228018],"machineNum":1,"prefId":28},{"name":"セガ神戸umieサウスモール","address":"兵庫県神戸市中央区東川崎町1-7-2 A408 神戸ハーバーランド","grid":[34.678981,135.18264],"machineNum":2,"prefId":28},{"name":"タイトーFステーションHAT神戸店","address":"兵庫県神戸市中央区脇浜海岸通2-2-2 ブルメールHAT神戸2階","grid":[34.699482,135.214232],"machineNum":1,"prefId":28},{"name":"タイトーFステーション三宮","address":"兵庫県神戸市中央区三宮町２－１１－１ 神戸センタープラザ３Ｆ","grid":[34.691148,135.1912],"machineNum":2,"prefId":28},{"name":"ダイエー甲南店","address":"兵庫県神戸市東灘区本山南町8-7-18","grid":[34.724658,135.282699],"machineNum":1,"prefId":28},{"name":"メガパレス遊スペースアローズ","address":"兵庫県神戸市西区丸塚２－９－１８ メガパレス２階","grid":[34.679104,134.982928],"machineNum":1,"prefId":28},{"name":"モーリーファンタジージェームス山店","address":"兵庫県神戸市垂水区青山台７－７－１ イオンゲームス山１階","grid":[34.646234,135.076147],"machineNum":2,"prefId":28},{"name":"モーリーファンタジー板宿店","address":"兵庫県神戸市須磨区前池町3-2-1 ダイエー板宿","grid":[34.661272,135.13244],"machineNum":3,"prefId":28},{"name":"モーリーファンタジー神戸北店","address":"兵庫県神戸市北区上津台8-1-1 イオン神戸北","grid":[34.861085,135.195706],"machineNum":3,"prefId":28},{"name":"モーリーファンタジー舞子店","address":"兵庫県神戸市垂水区舞子台6-20-17 ダイエー舞子2F","grid":[34.63937,135.031511],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー藤原台店","address":"兵庫県神戸市北区藤原台中町１－２－２ ダイエー藤原台","grid":[34.821727,135.220516],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー西神中央店","address":"兵庫県神戸市西区糀台5-3-4 ダイエー西神中央3F","grid":[34.720058,135.019225],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー長田南店","address":"兵庫県神戸市長田区東尻池新町１－２０ イオン長田南ショッピングセンター２階","grid":[34.65519,135.159246],"machineNum":2,"prefId":28},{"name":"レインボーランド神戸玉津店","address":"兵庫県神戸市西区森友３丁目７－３ イズミヤ神戸玉津２階","grid":[34.663735,134.982845],"machineNum":1,"prefId":28},{"name":"レインボーランド西神戸店","address":"兵庫県神戸市西区竜が岡１－２１－１ イズミヤ西神戸２階プレイガーデンパティオ","grid":[34.710827,134.940401],"machineNum":1,"prefId":28},{"name":"楽市楽座イオンモール神戸北店","address":"兵庫県神戸市北区上津台８－１－１ イオン神戸北３階","grid":[34.861085,135.195706],"machineNum":1,"prefId":28},{"name":"イトーヨーカドー甲子園店","address":"兵庫県西宮市甲子園八番町１－１００ イトーヨーカドー甲子園","grid":[34.718525,135.363502],"machineNum":2,"prefId":28},{"name":"キッズパーク西宮","address":"兵庫県西宮市浜松原町21-1 マルナカ西宮2F","grid":[34.725634,135.346317],"machineNum":1,"prefId":28},{"name":"セガららぽーと甲子園","address":"兵庫県西宮市甲子園８番町１番地１００ ららぽーと甲子園","grid":[34.718525,135.363502],"machineNum":2,"prefId":28},{"name":"モーリーファンタジー西宮店","address":"兵庫県西宮市林田町2-24 ダイエー西宮2F","grid":[34.756004,135.362174],"machineNum":2,"prefId":28},{"name":"namco豊岡店","address":"兵庫県豊岡市中陰字大工617 3F namco豊岡店","grid":[35.555002,134.812261],"machineNum":1,"prefId":28},{"name":"ジョイプラザ豊岡店","address":"兵庫県豊岡市加広町7-32 コ-プデイズ豊岡 2階","grid":[35.550788,134.816279],"machineNum":1,"prefId":28},{"name":"イオン赤穂店","address":"兵庫県赤穂市中広別所５５－３ イオン赤穂","grid":[34.737505,134.387479],"machineNum":1,"prefId":28},{"name":"イオン赤穂店ファミリーランド","address":"兵庫県赤穂市中広字別所５５－３ イオン赤穂２Ｆファミリーランド内","grid":[34.737505,134.387479],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー高砂店","address":"兵庫県高砂市緑丘２丁目１－４０ イオン高砂２階","grid":[34.769434,134.802833],"machineNum":2,"prefId":28},{"name":"モーリーファンタジー猪名川店","address":"兵庫県川辺郡猪名川町白金２－１ イオン猪名川３階","grid":[34.899407,135.359261],"machineNum":3,"prefId":28},{"name":"アピタ大和郡山店","address":"奈良県大和郡山市田中町宮西５１７ アピタ大和郡山","grid":[34.641171,135.769871],"machineNum":1,"prefId":29},{"name":"ハローズガーデン大和郡山店","address":"奈良県大和郡山市田中町宮西５１７番地 アピタ大和郡山２階","grid":[34.641171,135.769871],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー大和郡山店","address":"奈良県大和郡山市下三橋町741 イオンモール郡山","grid":[34.651053,135.8021],"machineNum":4,"prefId":29},{"name":"楽市楽座イオンモール大和郡山店","address":"奈良県大和郡山市下三橋町７４１ イオンモール郡山３階","grid":[34.651053,135.8021],"machineNum":1,"prefId":29},{"name":"namcoトナリエ大和高田店","address":"奈良県大和高田市幸町3-18","grid":[34.518472,135.743955],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー天理店","address":"奈良県天理市東井戸堂町３８１ イオンタウン天理１階","grid":[34.590774,135.824942],"machineNum":2,"prefId":29},{"name":"ザ・ビッグエクストラ大安寺店","address":"奈良県奈良市南京終町１－１２８－１ イオンタウン大安寺","grid":[34.670653,135.82044],"machineNum":1,"prefId":29},{"name":"ラウンドワンスタジアム 奈良 ミ・ナーラ店","address":"奈良県奈良市二条大路南1‐3-1 ミ・ナーラ5階","grid":[34.685216,135.802182],"machineNum":1,"prefId":29},{"name":"近鉄百貨店奈良店 6階玩具売場","address":"奈良県奈良市西大寺東町2-4-1","grid":[34.695105,135.785074],"machineNum":1,"prefId":29},{"name":"スーパーセンターオークワ御所店","address":"奈良県御所市室１１８５－２ スーパーセンターオークワ御所","grid":[34.439013,135.728568],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー桜井店","address":"奈良県桜井市上之庄２７８－１ イオン桜井２階","grid":[34.52127,135.837548],"machineNum":2,"prefId":29},{"name":"SOYU Game Field 奈良橿原店","address":"奈良県橿原市曲川町７－２０－１ イオンモール橿原３階","grid":[34.504941,135.761999],"machineNum":1,"prefId":29},{"name":"アミパラ橿原店","address":"奈良県橿原市十市町1222-1","grid":[34.529339,135.796581],"machineNum":1,"prefId":29},{"name":"トイザらス奈良橿原店","address":"奈良県橿原市曲川町７－２０－１－２０１ イオンモール橿原２Ｆ","grid":[34.504941,135.761999],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー橿原店","address":"奈良県橿原市曲川町7-20-1 イオンモール橿原2階","grid":[34.504941,135.761999],"machineNum":3,"prefId":29},{"name":"アミューズメントパーク奈良登美ヶ丘店","address":"奈良県生駒市鹿畑町３０２７ イオン奈良登美ヶ丘ＳＣ専門店街３階","grid":[34.725688,135.750512],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー登美ヶ丘店","address":"奈良県生駒市鹿畑町３０２７番地 イオン奈良登美ヶ丘２階","grid":[34.725688,135.750512],"machineNum":3,"prefId":29},{"name":"アピタ西大和店","address":"奈良県北葛城郡上牧町大字上牧３０００－１ アピタ西大和","grid":[34.557768,135.716574],"machineNum":1,"prefId":29},{"name":"アピタ西大和店ゲームコーナー","address":"奈良県北葛城郡上牧町大字上牧３０００－１ アピタ西大和","grid":[34.557768,135.716574],"machineNum":1,"prefId":29},{"name":"レインボーランド広陵店","address":"奈良県北葛城郡広陵町大字安部４５０番地１ イズミヤ広陵","grid":[34.533732,135.745288],"machineNum":1,"prefId":29},{"name":"西友王寺店","address":"奈良県北葛城郡王寺町久度２－２－１ リーベル王寺","grid":[34.597969,135.702923],"machineNum":1,"prefId":29},{"name":"NICOPA和歌山店","address":"和歌山県和歌山市新生町7-20 イズミヤ和歌山2階","grid":[34.221722,135.187499],"machineNum":1,"prefId":30},{"name":"にこぱガーデンパーク和歌山店","address":"和歌山県和歌山市松江向鵜の島１４６９－１ ガーデンパーク和歌山２階","grid":[34.238586,135.128405],"machineNum":1,"prefId":30},{"name":"タイトーFステーション和歌山","address":"和歌山県和歌山市小雑賀８０５番１ オークワスーパーセンターセントラルシティ和歌山","grid":[34.195442,135.183514],"machineNum":2,"prefId":30},{"name":"パームシティ和歌山ナムコランド","address":"和歌山県和歌山市中野３１－１ オークワパ－ムシティ和歌山２Ｆ","grid":[34.254936,135.141134],"machineNum":1,"prefId":30},{"name":"モーリーファンタジー和歌山店","address":"和歌山県和歌山市中字楠谷 ５７３番地 イオン和歌山３階","grid":[34.230368,135.170741],"machineNum":1,"prefId":30},{"name":"ユーズランド和歌山店","address":"和歌山県和歌山市中字楠谷５７３番地 イオン和歌山","grid":[34.230368,135.170741],"machineNum":1,"prefId":30},{"name":"レインボーランド紀伊川辺","address":"和歌山県和歌山市川辺220番 イズミヤ紀伊川辺店内","grid":[34.261797,135.263681],"machineNum":1,"prefId":30},{"name":"オークワミレニアシティ岩出店","address":"和歌山県岩出市中迫１４７ ミレニアシティ岩出","grid":[34.260591,135.315302],"machineNum":1,"prefId":30},{"name":"ドナリアコット岩出店","address":"和歌山県岩出市中迫塚本１４７ ミレニアシティ岩出２Ｆ","grid":[34.26333,135.314641],"machineNum":1,"prefId":30},{"name":"タイトーFステーションオークワロマンシティ御坊店","address":"和歌山県御坊市湯川町財部１８１番地 オークワロマンシティ御坊","grid":[33.897649,135.148816],"machineNum":1,"prefId":30},{"name":"スーパーセンターオークワ南紀店","address":"和歌山県新宮市佐野３－１１－１９ スーパーセンターオークワ南紀","grid":[33.675002,135.969586],"machineNum":1,"prefId":30},{"name":"モーリーファンタジー新宮店","address":"和歌山県新宮市橋本２丁目１４番２３号 イオン新宮２階","grid":[33.714317,135.990464],"machineNum":1,"prefId":30},{"name":"オークワ箕島店","address":"和歌山県有田市新堂１０－３ オークワ箕島","grid":[34.08504,135.128077],"machineNum":1,"prefId":30},{"name":"PALO橋本彩の台店","address":"和歌山県橋本市あやの台1丁目50番地2 オーストリート彩の台","grid":[34.33553,135.651586],"machineNum":2,"prefId":30},{"name":"オークワ高野口店","address":"和歌山県橋本市高野口町伏原１３９－１ オークワ高野口","grid":[34.304034,135.569581],"machineNum":1,"prefId":30},{"name":"ジョイパーク海南","address":"和歌山県海南市築地１番１ スーパーセンターオークワ海南","grid":[34.152186,135.207699],"machineNum":1,"prefId":30},{"name":"PALO田辺店","address":"和歌山県田辺市宝来町24-26 グルメシティ田辺3F","grid":[33.734745,135.388119],"machineNum":1,"prefId":30},{"name":"namcoオークワパビリオンシティ田辺店","address":"和歌山県田辺市稲成町3165 オークワパビリオンシティ田辺C館2F","grid":[33.744065,135.377158],"machineNum":1,"prefId":30},{"name":"オークワオーシティ田辺店","address":"和歌山県田辺市東山１－５－１ オークワオーシティ田辺","grid":[33.729003,135.388915],"machineNum":1,"prefId":30},{"name":"オークワパビリオンシティ田辺店","address":"和歌山県田辺市稲成町新江原３１６５ オークワパビリオンシティ田辺","grid":[33.766658,135.379237],"machineNum":1,"prefId":30},{"name":"スーパーセンターオークワ上富田店","address":"和歌山県西牟婁郡上富田町朝来１５４－１ スーパーセンターオークワ上富田","grid":[33.699166,135.427816],"machineNum":1,"prefId":30},{"name":"PALO境港店","address":"鳥取県境港市竹内団地81番地3 パロ境港","grid":[35.522447,133.252525],"machineNum":2,"prefId":31},{"name":"PLANT-5境港店","address":"鳥取県境港市竹内団地２７６ ＰＬＡＮＴ－５境港","grid":[35.52006,133.252429],"machineNum":1,"prefId":31},{"name":"モーリーファンタジーホープタウン店","address":"鳥取県米子市米原２－１－１ ホープタウン３階","grid":[35.442181,133.330513],"machineNum":2,"prefId":31},{"name":"モーリーファンタジー米子駅前店","address":"鳥取県米子市末広町311 イオン米子駅前3階","grid":[35.423072,133.332341],"machineNum":2,"prefId":31},{"name":"PALO鳥取店","address":"鳥取県鳥取市天神町1 イオン鳥取2階","grid":[35.493396,134.221997],"machineNum":1,"prefId":31},{"name":"アミパラ鳥取店","address":"鳥取県鳥取市晩稲１００－１ イオン鳥取北２階","grid":[35.525916,134.204051],"machineNum":1,"prefId":31},{"name":"モーリーファンタジー鳥取北店","address":"鳥取県鳥取市晩稲348番地 イオン鳥取北2階","grid":[35.523991,134.201525],"machineNum":3,"prefId":31},{"name":"アミパラ日吉津店","address":"鳥取県西伯郡日吉津村日吉津１１６０－１ イオン日吉津２階","grid":[35.445829,133.38724],"machineNum":1,"prefId":31},{"name":"モーリーファンタジー日吉津店","address":"鳥取県西伯郡日吉津村日吉津1160-1 イオン日吉津","grid":[35.445829,133.38724],"machineNum":4,"prefId":31},{"name":"ABCパレード出雲店","address":"島根県出雲市大塚町６５０－１ ゆめタウン出雲２Ｆ","grid":[35.377131,132.754954],"machineNum":1,"prefId":32},{"name":"ゆめサーカス出雲店","address":"島根県出雲市大塚町６５０－１ ゆめタウン出雲東館３階","grid":[35.377131,132.754954],"machineNum":3,"prefId":32},{"name":"モーリーファンタジー出雲店","address":"島根県出雲市渡橋町1066 イオンスタイル出雲3階","grid":[35.367639,132.73892],"machineNum":3,"prefId":32},{"name":"イオン大田店","address":"島根県大田市長久町土江９７ イオン大田","grid":[35.198795,132.480868],"machineNum":1,"prefId":32},{"name":"セガ松江","address":"島根県松江市嫁島町１２－１５ セガワールド松江","grid":[35.45011,133.04781],"machineNum":1,"prefId":32},{"name":"モーリーファンタジー・f 松江店","address":"島根県松江市東朝日町151 イオン松江","grid":[35.462827,133.069499],"machineNum":4,"prefId":32},{"name":"モーリーファンタジー江津店","address":"島根県江津市嘉久志町2306番地30 ショッピングタウングリーンモール 2F","grid":[35.009704,132.218939],"machineNum":1,"prefId":32},{"name":"ピノッキースパティオ益田店","address":"島根県益田市高津7丁目21-12 ゆめタウン益田店内","grid":[34.691037,131.815912],"machineNum":1,"prefId":32},{"name":"こころっこ児島","address":"岡山県倉敷市児島駅前2-35 天満屋ハピータウン児島3階","grid":[34.466882,133.804275],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど中島店","address":"岡山県倉敷市中島２７８０－１ マルナカ中島","grid":[34.575763,133.741655],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど倉敷マスカット店","address":"岡山県倉敷市松島羽伏１１６３－２ マルナカ倉敷マスカット３階","grid":[34.627385,133.801633],"machineNum":1,"prefId":33},{"name":"アミパラ倉敷店","address":"岡山県倉敷市西中新田６２４－１ アミパラボウル１階","grid":[34.583317,133.77125],"machineNum":1,"prefId":33},{"name":"キッズプラザきゃらんど倉敷店","address":"岡山県倉敷市寿町12-2 アリオ倉敷 2階","grid":[34.603218,133.764286],"machineNum":1,"prefId":33},{"name":"セガワールド倉敷","address":"岡山県倉敷市西中新田字八反割５３５－２ セガワールド倉敷","grid":[34.583897,133.769851],"machineNum":1,"prefId":33},{"name":"タイトーFステーションマルナカ新倉敷店","address":"岡山県倉敷市玉島爪崎９８１－１ マルナカ新倉敷","grid":[34.5612,133.684312],"machineNum":1,"prefId":33},{"name":"トイザらス倉敷店","address":"岡山県倉敷市水江１ イオンモール倉敷１Ｆ","grid":[34.603354,133.74566],"machineNum":1,"prefId":33},{"name":"パルドスパティオ店","address":"岡山県倉敷市笹沖１２７４－１ ゆめタウン倉敷３階","grid":[34.578738,133.770361],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー倉敷店","address":"岡山県倉敷市水江1 イオンモール倉敷","grid":[34.603384,133.74568],"machineNum":5,"prefId":33},{"name":"モーリーファンタジー水島店","address":"岡山県倉敷市水島高砂町３番１１号 イオンタウン水島ショッピングセンター１階","grid":[34.529917,133.735946],"machineNum":3,"prefId":33},{"name":"ユーズランド倉敷店","address":"岡山県倉敷市水江１番地 イオンモール倉敷２階","grid":[34.603438,133.746177],"machineNum":1,"prefId":33},{"name":"KODOMOYA西大寺店","address":"岡山県岡山市東区西大寺南１－２－５ 天満屋ハピータウン西大寺２Ｆ","grid":[34.652472,134.03018],"machineNum":1,"prefId":33},{"name":"MrMax岡山西店","address":"岡山県岡山市北区久米３１０－１ ＭｒＭａｘ岡山西","grid":[34.648811,133.872691],"machineNum":1,"prefId":33},{"name":"こころっこ原尾島","address":"岡山県岡山市中区原尾島1-6-20 天満屋ハピータウン原尾島3階","grid":[34.671819,133.947267],"machineNum":2,"prefId":33},{"name":"こころっこ岡北","address":"岡山県岡山市中井町2-2-7 天満屋ハピータウン岡北3階","grid":[34.679483,133.928688],"machineNum":1,"prefId":33},{"name":"こころっこ岡南","address":"岡山県岡山市築港新町1-18-5 天満屋ハピータウン岡南3階","grid":[34.603867,133.940985],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど平島店","address":"岡山県岡山市東区東平島１６０９ マルナカ平島１階","grid":[34.707888,134.049856],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど築港店","address":"岡山県岡山市南区築港元町１４－１ 山陽マルナカ築港","grid":[34.606247,133.948752],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど高屋店","address":"岡山県岡山市中区高屋３６－１ 山陽マルナカ高屋","grid":[34.673593,133.960608],"machineNum":1,"prefId":33},{"name":"ゆめタウン平島店","address":"岡山県岡山市東区東平島163 ゆめタウン平島2F","grid":[34.706796,134.054569],"machineNum":1,"prefId":33},{"name":"アミパラ岡山店","address":"岡山県岡山市北区青江１－１３－８ アミパラ岡山","grid":[34.636195,133.919958],"machineNum":2,"prefId":33},{"name":"ゲームアイビス岡山店","address":"岡山県岡山市中区高屋３０８番地３ フレスポ高屋","grid":[34.67301,133.96638],"machineNum":1,"prefId":33},{"name":"セガイオンモール岡山","address":"岡山県岡山市北区下石井１－２－１ イオンモール岡山６Ｆ　６０２４－１区画","grid":[34.662053,133.917537],"machineNum":2,"prefId":33},{"name":"トイザらス・ベビーザらス岡山店","address":"岡山県岡山市北区岡南町２－６－５２ トイザらス岡山","grid":[34.640334,133.926425],"machineNum":1,"prefId":33},{"name":"ビックカメラ岡山駅前店","address":"岡山県岡山市北区駅前町１－１－１ ビックカメラ岡山駅前","grid":[34.665932,133.919814],"machineNum":1,"prefId":33},{"name":"プレビエブリイOkanaka津高店","address":"岡山県岡山市北区横井上83-3","grid":[34.699937,133.902085],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー・f岡山店","address":"岡山県岡山市北区下石井1丁目2番1号 イオンモール岡山4階","grid":[34.662053,133.917537],"machineNum":3,"prefId":33},{"name":"アミパラ津山店","address":"岡山県津山市河辺１０００－１ イオン津山２階","grid":[35.06487,134.045627],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー津山店","address":"岡山県津山市河辺１０００－１ イオン津山２階","grid":[35.06487,134.045627],"machineNum":3,"prefId":33},{"name":"こころっこ玉野","address":"岡山県玉野市宇野1-38-1 天満屋ハピータウン玉野3階","grid":[34.491932,133.944825],"machineNum":1,"prefId":33},{"name":"アミューズメントパークMG総社店","address":"岡山県総社市門田元屋敷１８７番地 天満屋リブ総社３階","grid":[34.679359,133.739395],"machineNum":1,"prefId":33},{"name":"アミューズメントパークマルナカ山陽店","address":"岡山県赤磐市下市１３３ マルナカ山陽","grid":[34.750664,134.017904],"machineNum":1,"prefId":33},{"name":"こころっこポルカ高梁","address":"岡山県高梁市中原町１０８４番地１ ポルカ天満屋ハピータウン高梁２階","grid":[34.783216,133.610777],"machineNum":1,"prefId":33},{"name":"namcoフジグラン三原店","address":"広島県三原市円一町１－１－７ フジグラン三原","grid":[34.392692,133.07863],"machineNum":1,"prefId":34},{"name":"フジグラン三原","address":"広島県三原市円一町１－１－７ フジグラン三原","grid":[34.392692,133.07863],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー三原店","address":"広島県三原市城町２－１３－１ イオン三原２階","grid":[34.399007,133.087111],"machineNum":2,"prefId":34},{"name":"アズロスパティオ店","address":"広島県呉市宝町５－１０ ゆめタウン呉３階","grid":[34.242445,132.556322],"machineNum":1,"prefId":34},{"name":"イオン広店","address":"広島県呉市広本町２－１７－１ イオン広","grid":[34.23384,132.622923],"machineNum":1,"prefId":34},{"name":"フタバ図書シネパーク広","address":"広島県呉市広中町１－９ フタバ図書広店 ２階","grid":[34.228582,132.629459],"machineNum":1,"prefId":34},{"name":"ピノッキースパティオ大竹店","address":"広島県大竹市晴海１－５－１ ピノッキースパティオ大竹","grid":[34.241056,132.223549],"machineNum":1,"prefId":34},{"name":"ピノッキースパティオ吉田店","address":"広島県安芸高田市吉田町吉田５９４－１ ゆめタウン吉田２Ｆ","grid":[34.668368,132.701554],"machineNum":1,"prefId":34},{"name":"セガ尾道","address":"広島県尾道市新浜１－２－１３ セガ尾道","grid":[34.403019,133.186309],"machineNum":1,"prefId":34},{"name":"フジグラン尾道","address":"広島県尾道市東尾道１９－７ フジグラン尾道","grid":[34.425475,133.23867],"machineNum":1,"prefId":34},{"name":"フジグラン尾道子供の国","address":"広島県尾道市東尾道１９－７ フジグラン尾道","grid":[34.425475,133.23867],"machineNum":1,"prefId":34},{"name":"namcoフジグラン高陽店","address":"広島県広島市安佐北区亀崎１－１－６ フジグラン高陽３Ｆ","grid":[34.482178,132.52296],"machineNum":1,"prefId":34},{"name":"namco広島アルパーク店","address":"広島県広島市西区草津新町2-26-1 アルパーク4F","grid":[34.373645,132.394744],"machineNum":1,"prefId":34},{"name":"namco広島紙屋町店","address":"広島県広島市中区大手町２丁目３－３ 大手町アニメイトビル１Ｆ","grid":[34.393372,132.45546],"machineNum":1,"prefId":34},{"name":"ふぇすたらんど五日市店","address":"広島県広島市佐伯区八幡１－２４－１７ サンリブ五日市２階","grid":[34.386929,132.358328],"machineNum":1,"prefId":34},{"name":"ふぇすたらんど可部店","address":"広島県広島市安佐北区可部７－４－１３ 山陽マルナカ可部２階","grid":[34.523544,132.511877],"machineNum":1,"prefId":34},{"name":"ゆめＫＩＤＳゆめタウン広島店","address":"広島県広島市南区皆実町２丁目８番１７号 ゆめタウン広島","grid":[34.37616,132.463792],"machineNum":2,"prefId":34},{"name":"アミパラフォレオ広島東店","address":"広島県広島市東区温品1-3-2","grid":[34.407987,132.503503],"machineNum":1,"prefId":34},{"name":"アミパラ広島店","address":"広島県広島市西区西観音町３－１７ アミパラ広島","grid":[34.393453,132.436009],"machineNum":1,"prefId":34},{"name":"アルティーアルパーク北棟店アルティランド","address":"広島県広島市西区草津南４－７－１ アルティーアルパーク北棟２階","grid":[34.375596,132.393338],"machineNum":1,"prefId":34},{"name":"セガLECT広島","address":"広島県広島市西区扇二丁目1番45号","grid":[34.372878,132.406725],"machineNum":1,"prefId":34},{"name":"タイトーステーションフジグラン緑井店","address":"広島県広島市安佐南区緑井１－５－２ フジグラン緑井３階","grid":[34.466683,132.476601],"machineNum":1,"prefId":34},{"name":"タイトーステーション広島本通店","address":"広島県広島市中区本通３－５ タイトーステーション広島本通","grid":[34.392798,132.460389],"machineNum":1,"prefId":34},{"name":"タイトーステーション広島紙屋町店","address":"広島県広島市中区紙屋町２ー２－２１ タイトーステーション広島紙屋町","grid":[34.394055,132.45605],"machineNum":1,"prefId":34},{"name":"ビックカメラ広島駅前店","address":"広島県広島市南区松原町5-1","grid":[34.395734,132.474977],"machineNum":1,"prefId":34},{"name":"フジグラン広島","address":"広島県広島市中区宝町２－１ フジグラン広島","grid":[34.386024,132.464327],"machineNum":1,"prefId":34},{"name":"フジグラン緑井","address":"広島県広島市安佐南区緑井１－５－２ フジグラン緑井","grid":[34.466292,132.476218],"machineNum":1,"prefId":34},{"name":"フジグラン高陽","address":"広島県広島市安佐北区亀崎１－１－６ フジグラン高陽","grid":[34.482285,132.523175],"machineNum":1,"prefId":34},{"name":"プラザカプコン広島店","address":"広島県広島市佐伯区石内東4-1-1","grid":[34.409882,132.397833],"machineNum":2,"prefId":34},{"name":"モーリーファンタジー・f広島祇園店","address":"広島県広島市安佐南区祇園3丁目2-1 イオンモール広島祇園3階","grid":[34.443766,132.461478],"machineNum":2,"prefId":34},{"name":"モーリーファンタジー宇品店","address":"広島県広島市南区宇品東６－１－１５ イオン宇品２階","grid":[34.36261,132.468341],"machineNum":2,"prefId":34},{"name":"モーリーファンタジー広島祇園店","address":"広島県広島市安佐南区祇園3-2-1 イオンモール広島祇園","grid":[34.444094,132.461559],"machineNum":3,"prefId":34},{"name":"楽市楽座広島店","address":"広島県広島市南区段原南１－３－５２ 広島段原ショッピングセンター７階","grid":[34.385252,132.475379],"machineNum":1,"prefId":34},{"name":"namcoゆめタウン廿日市店","address":"広島県廿日市市下平良２－２－１ ゆめタウン廿日市３Ｆ","grid":[34.34619,132.335497],"machineNum":1,"prefId":34},{"name":"namcoフジグランナタリー店","address":"広島県廿日市市阿品３－１－１ フジグランナタリー２Ｆ","grid":[34.321687,132.315412],"machineNum":1,"prefId":34},{"name":"おもちゃのあおき 廿日市店","address":"広島県廿日市市下平良２丁目２－１ ゆめタウン廿日市３Ｆ","grid":[34.34619,132.335497],"machineNum":1,"prefId":34},{"name":"フジグランナタリー","address":"広島県廿日市市阿品３－１－１ フジグランナタリー","grid":[34.321687,132.315412],"machineNum":1,"prefId":34},{"name":"お宝買取団東広島","address":"広島県東広島市 西条御条町6-20","grid":[34.421031,132.745097],"machineNum":1,"prefId":34},{"name":"タイトーFステーションゆめタウン東広島店","address":"広島県東広島市西条土与丸１－５－７ ゆめタウン東広島４階","grid":[34.426996,132.750077],"machineNum":1,"prefId":34},{"name":"ナムコランド東広島店","address":"広島県東広島市西条町御薗宇4405 フジグラン東広島2F","grid":[34.408073,132.749447],"machineNum":1,"prefId":34},{"name":"ピノッキーランドイズミ黒瀬店","address":"広島県東広島市黒瀬町楢原１００－１ ゆめタウン黒瀬","grid":[34.324163,132.665445],"machineNum":1,"prefId":34},{"name":"フジグラン東広島","address":"広島県東広島市西条町御薗宇４４０５ フジグラン東広島","grid":[34.408136,132.74951],"machineNum":1,"prefId":34},{"name":"八本松店ソフトピアAMコーナー","address":"広島県東広島市八本松東３－１１－９","grid":[34.44658,132.707534],"machineNum":1,"prefId":34},{"name":"あみぱらんど福山店","address":"広島県福山市三吉町南２－８－２４ あみぱらんど福山","grid":[34.488482,133.378434],"machineNum":1,"prefId":34},{"name":"アミパラ神辺店","address":"広島県福山市神辺町新道上１－２－１ アミパラ神辺","grid":[34.545766,133.358619],"machineNum":1,"prefId":34},{"name":"アミューズメントパークMGゆめタウン松永店","address":"広島県福山市柳津町１丁目５－７ ゆめタウン松永２階","grid":[34.441781,133.259253],"machineNum":1,"prefId":34},{"name":"セガワールド福山","address":"広島県福山市瀬戸町山北３００ セガワールド福山","grid":[34.476032,133.315967],"machineNum":1,"prefId":34},{"name":"タイトーステーションフジグラン神辺店","address":"広島県福山市神辺町新道上２－１０－６ フジグラン神辺３階","grid":[34.544206,133.357524],"machineNum":1,"prefId":34},{"name":"トイザらス福山店","address":"広島県福山市東深津町３－２１－４７ トイザらス福山","grid":[34.494639,133.398416],"machineNum":1,"prefId":34},{"name":"ピエロゆめタウン松永","address":"広島県福山市柳津町1-5-7 ゆめタウン松永店 2F","grid":[34.44186,133.259369],"machineNum":1,"prefId":34},{"name":"フジグラン神辺","address":"広島県福山市神辺町大字新道上字２－１０－２６ フジグラン神辺","grid":[34.543791,133.357825],"machineNum":1,"prefId":34},{"name":"福山メトロポリス","address":"広島県福山市一文字町２４－１ 福山コロナワールド","grid":[34.468242,133.410277],"machineNum":1,"prefId":34},{"name":"namcoイオンモール広島府中店","address":"広島県安芸郡府中町大須2-1-1 イオンモール広島府中","grid":[34.394434,132.499444],"machineNum":2,"prefId":34},{"name":"ふぇすたらんど府中店","address":"広島県安芸郡府中町大須４－２－１０ サンリブ府中３階ゲームコーナー","grid":[34.397945,132.500712],"machineNum":1,"prefId":34},{"name":"セガ海田","address":"広島県安芸郡海田町南大正町３－３５ セガワールドメガ海田","grid":[34.367662,132.533669],"machineNum":1,"prefId":34},{"name":"フジグラン安芸","address":"広島県安芸郡坂町北新地２－３－３０ フジグラン安芸","grid":[34.349564,132.518721],"machineNum":1,"prefId":34},{"name":"フタバ図書TERA広島府中","address":"広島県安芸郡府中町大須２－１－１－３０２２ イオンモール広島府中３Ｆ","grid":[34.394756,132.497634],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー広島府中店","address":"広島県安芸郡府中町大須2-1-1 イオンモール広島府中3階","grid":[34.394756,132.497634],"machineNum":1,"prefId":34},{"name":"ふぇすたらんど下松店","address":"山口県下松市南花岡６－８－１ サンリブ下松２階","grid":[34.030647,131.865474],"machineNum":1,"prefId":35},{"name":"アミュージアム周南店","address":"山口県下松市中央町２１－３ 西友ザ・モール周南３階","grid":[34.018401,131.863099],"machineNum":2,"prefId":35},{"name":"MrMax綾羅木店","address":"山口県下関市綾羅木新町３－２－１ ＭｒＭａｘ綾羅木","grid":[34.013339,130.92287],"machineNum":1,"prefId":35},{"name":"おもちゃのあおき 夢シティ下関店","address":"山口県下関市伊倉新町３－１－１ ゆめシティ３Ｆ","grid":[34.006718,130.93423],"machineNum":1,"prefId":35},{"name":"ゆめシティゆめパーク","address":"山口県下関市伊倉新町３丁目１－１ ゆめシティ","grid":[34.006773,130.934034],"machineNum":2,"prefId":35},{"name":"アミパラ下関店","address":"山口県下関市長府才川１丁目４２－４８ アミパラ下関","grid":[34.025414,131.007467],"machineNum":1,"prefId":35},{"name":"サンゲームス下関店","address":"山口県下関市ゆめタウン2-7","grid":[34.029164,131.013815],"machineNum":1,"prefId":35},{"name":"トイザらス下関店","address":"山口県下関市ゆめタウン１－１ ゆめタウン長府","grid":[34.030204,131.012764],"machineNum":1,"prefId":35},{"name":"モーリーファンタジー下関店","address":"山口県下関市竹崎町4-4-7 シーモール4F","grid":[33.94936,130.924386],"machineNum":2,"prefId":35},{"name":"モーリーファンタジー光店","address":"山口県光市浅江字木園１７５６－１ イオン光２階","grid":[33.978898,131.927797],"machineNum":2,"prefId":35},{"name":"カプコンゆめパーク徳山店","address":"山口県周南市青山町1-18 ゆめタウン徳山2階","grid":[34.042707,131.815544],"machineNum":1,"prefId":35},{"name":"MrMax宇部店","address":"山口県宇部市大字東岐波１５６９－１ ハイパーモールメルクス宇部","grid":[33.999359,131.347586],"machineNum":1,"prefId":35},{"name":"namcoフジグラン宇部店","address":"山口県宇部市明神町三丁目１番１号 フジグラン宇部２Ｆ","grid":[33.930606,131.256297],"machineNum":2,"prefId":35},{"name":"ピノッキースパティオ宇部店","address":"山口県宇部市大字妻崎開作411","grid":[33.971338,131.208027],"machineNum":1,"prefId":35},{"name":"フジグラン宇部","address":"山口県宇部市明神町３－１－１ フジグラン宇部","grid":[33.930606,131.256297],"machineNum":1,"prefId":35},{"name":"ザ・サードプラネット山口店","address":"山口県山口市湯田温泉６－８－３ ザ・サードプラネット山口","grid":[34.164856,131.451829],"machineNum":1,"prefId":35},{"name":"タイトーステーションメルクス店","address":"山口県山口市大字黒川８２－１ ハイパーモールメルクス山口","grid":[34.13652,131.433259],"machineNum":1,"prefId":35},{"name":"ピノッキースパティオ山口店","address":"山口県山口市大内御堀１３０２－１ ゆめタウン山口２Ｆ","grid":[34.137896,131.496279],"machineNum":1,"prefId":35},{"name":"ＡＧスクエア小郡店","address":"山口県山口市小郡前田町３－６ ＡＧスクエア小郡","grid":[34.086957,131.398653],"machineNum":1,"prefId":35},{"name":"namcoおのだサンパーク店","address":"山口県山陽小野田市中川6-4-1 おのだサンパーク2F","grid":[33.985174,131.170921],"machineNum":1,"prefId":35},{"name":"namcoゆめタウン小野田店","address":"山口県山陽小野田市中川６－４－１ おのだサンパークユメタウン小","grid":[33.985174,131.170921],"machineNum":1,"prefId":35},{"name":"ピノッキーランドゆめタウン南岩国店","address":"山口県岩国市南岩国町１－２０－３０ ゆめタウン南岩国","grid":[34.134906,132.20258],"machineNum":1,"prefId":35},{"name":"MrMax柳井店","address":"山口県柳井市駅南１－１１ ＭｒＭａｘ柳井ショッピングセンター","grid":[33.965674,132.105393],"machineNum":1,"prefId":35},{"name":"ピノッキースパティオ柳井店","address":"山口県柳井市南町4-5-3 ゆめタウン柳井2階","grid":[33.961248,132.105969],"machineNum":1,"prefId":35},{"name":"ふぇすたらんど萩店","address":"山口県萩市唐樋町２－４ サンリブ萩","grid":[34.410452,131.403301],"machineNum":1,"prefId":35},{"name":"ちびっこらんど長門店","address":"山口県長門市仙崎網田３２２－２ フジ長門２Ｆ","grid":[34.408673,131.195461],"machineNum":1,"prefId":35},{"name":"PALO防府店","address":"山口県防府市中央町1-3 イオン防府3階","grid":[34.052394,131.569621],"machineNum":2,"prefId":35},{"name":"SOYUFamilyGameField防府店","address":"山口県防府市鐘紡町7-1 イオンタウン防府1階","grid":[34.04799,131.590249],"machineNum":1,"prefId":35},{"name":"ピノッキースパティオ防府店","address":"山口県防府市八王子２－６－８ ゆめタウン防府","grid":[34.058239,131.565924],"machineNum":1,"prefId":35},{"name":"PALO小松島店","address":"徳島県小松島市小松島町領田20 小松島ショッピングプラザルピア1階","grid":[34.005346,134.571801],"machineNum":2,"prefId":36},{"name":"アミューズメントパフェパレパレ田宮","address":"徳島県徳島市南田宮２－２－４６ アミューズメントパフェパレパレ田宮","grid":[34.086334,134.542581],"machineNum":1,"prefId":36},{"name":"アミューズメントパークMG徳島店","address":"徳島県徳島市西新浜町１－４５ マルナカ徳島２階","grid":[34.045038,134.561374],"machineNum":1,"prefId":36},{"name":"セガ徳島スエヒロボウル","address":"徳島県徳島市南末広４－９５－２ セガ徳島スエヒロボウル","grid":[34.061294,134.573706],"machineNum":1,"prefId":36},{"name":"モーリーファンタジー徳島店","address":"徳島県徳島市南末広町4番1号","grid":[34.061918,134.573189],"machineNum":1,"prefId":36},{"name":"ふぇすたらんど脇町店","address":"徳島県美馬市脇町拝原１７１１番地１ マルナカ脇町２階ゲームコーナー","grid":[34.064486,134.165908],"machineNum":1,"prefId":36},{"name":"フジグラン阿南","address":"徳島県阿南市領家町土倉１０ フジグラン阿南","grid":[33.920526,134.665684],"machineNum":1,"prefId":36},{"name":"ナムコランド鳴門店","address":"徳島県鳴門市撫養町大桑島字すべり岩浜４－９ パワーシティ鳴門別棟","grid":[34.186729,134.612095],"machineNum":1,"prefId":36},{"name":"namcoフジグラン石井店","address":"徳島県名西郡石井町高川原天神５４４－１ フジグラン石井２Ｆ","grid":[34.083007,134.441145],"machineNum":2,"prefId":36},{"name":"フジグラン石井","address":"徳島県名西郡石井町高川原字天神５４４－１ フジグラン石井","grid":[34.083697,134.441971],"machineNum":1,"prefId":36},{"name":"namcoゆめタウン徳島店","address":"徳島県板野郡藍住町奥野字東中須８８－１ ゆめタウン徳島２階","grid":[34.119379,134.501118],"machineNum":2,"prefId":36},{"name":"おもちゃのイルカ","address":"徳島県板野郡藍住町奥野字東中須８８－の１ ゆめタウン徳島","grid":[34.119379,134.501118],"machineNum":1,"prefId":36},{"name":"フジグラン北島","address":"徳島県板野郡北島町鯛浜字西ノ須１７４ フジグラン北島","grid":[34.112733,134.546412],"machineNum":1,"prefId":36},{"name":"アミューズメントパークMG志度店","address":"香川県さぬき市志度２４３１番地１ パルティフジ志度別棟","grid":[34.315437,134.171333],"machineNum":1,"prefId":37},{"name":"ゆめタウン三豊店ＢＩＧＷＡＶＥ","address":"香川県三豊市豊中町本山甲２２番地 ゆめタウン三豊２階","grid":[34.145288,133.699205],"machineNum":1,"prefId":37},{"name":"ゆめタウン丸亀ＢＩＧＷＡＶＥ店","address":"香川県丸亀市新田町１５０ ゆめタウン丸亀３階","grid":[34.27336,133.78539],"machineNum":2,"prefId":37},{"name":"タイトーステーション丸亀店","address":"香川県丸亀市川西町南１２８０番地１ フジグラン丸亀２Ｆ","grid":[34.240397,133.835703],"machineNum":1,"prefId":37},{"name":"フジグラン丸亀","address":"香川県丸亀市川西町南１２８０－１ フジグラン丸亀","grid":[34.240397,133.835703],"machineNum":1,"prefId":37},{"name":"ポップンパーク丸亀","address":"香川県丸亀市新浜町1-803-2","grid":[34.292988,133.787108],"machineNum":1,"prefId":37},{"name":"マックスプラザ善通寺","address":"香川県善通寺市中村町1798-2 マックスプラザ善通寺","grid":[34.243617,133.764084],"machineNum":1,"prefId":37},{"name":"ふぇすたらんど白鳥店","address":"香川県東かがわ市白鳥１４４－１ マルナカ白鳥","grid":[34.241806,134.353399],"machineNum":1,"prefId":37},{"name":"SOYU Game Field高松店","address":"香川県高松市香西本町１―１ イオンモール高松２階","grid":[34.352416,134.005094],"machineNum":1,"prefId":37},{"name":"ゆめタウン高松店ゆめランド","address":"香川県高松市三条町字中所６０８－１ ゆめタウン高松","grid":[34.314627,134.047283],"machineNum":1,"prefId":37},{"name":"アミュージアム高松","address":"香川県高松市伏石町2144-9","grid":[34.30771,134.060293],"machineNum":1,"prefId":37},{"name":"アミューズメントパークＭＧレインボー店","address":"香川県高松市多肥下町凹原６３０番地 マルナカパワーシティレインボー２階","grid":[34.299653,134.058809],"machineNum":1,"prefId":37},{"name":"トイザらス高松店","address":"香川県高松市屋島西町字百石１９１２－１ パワ－シティ屋島２Ｆ","grid":[34.347476,134.091277],"machineNum":1,"prefId":37},{"name":"フジグラン十川","address":"香川県高松市十川東町５５－１ フジグラン十川","grid":[34.271599,134.109699],"machineNum":1,"prefId":37},{"name":"モーリーファンタジー高松店","address":"香川県高松市香西本町１－１ イオンモール高松３階","grid":[34.352416,134.005094],"machineNum":3,"prefId":37},{"name":"モーリーファンタジー高松東店","address":"香川県高松市福岡町3-8-5 イオン高松東3階","grid":[34.34545,134.072733],"machineNum":4,"prefId":37},{"name":"ふぇすたらんど三木店","address":"香川県木田郡三木町氷上482-2 マルナカ三木店内","grid":[34.267285,134.138126],"machineNum":1,"prefId":37},{"name":"アミューズメントパークＭＧ宇多津店","address":"香川県綾歌郡宇多津町２４１９－１ マルナカスーパーセンター宇多津","grid":[34.311352,133.825692],"machineNum":1,"prefId":37},{"name":"モーリーファンタジー・f 綾川店","address":"香川県綾歌郡綾川町萱原８２２－１ イオンモール綾川３階","grid":[34.25162,133.930809],"machineNum":4,"prefId":37},{"name":"モーリーファンタジー綾川店","address":"香川県綾歌郡綾川町萱原８２２－１ イオンモール綾川３階","grid":[34.25162,133.930809],"machineNum":2,"prefId":37},{"name":"namcoフジグラン今治店","address":"愛媛県今治市東門町 5丁目13番1号 フジグラン今治2階","grid":[34.061391,133.014875],"machineNum":1,"prefId":38},{"name":"ふぇすたらんど今治店","address":"愛媛県今治市馬越町4-8-1 イオン今治店3F","grid":[34.056205,132.979823],"machineNum":1,"prefId":38},{"name":"フジグラン今治","address":"愛媛県今治市東門町５－１３－１ フジグラン今治","grid":[34.061391,133.014875],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー今治新都市店","address":"愛媛県今治市にぎわい広場1番地1 イオンスタイル今治新都市2階","grid":[34.044365,132.962193],"machineNum":1,"prefId":38},{"name":"楽市楽座イオンモール今治店","address":"愛媛県今治市にぎわい広場1-1 イオンモール今治新都市店2階","grid":[34.044365,132.962193],"machineNum":1,"prefId":38},{"name":"ふぇすたらんど川之江店","address":"愛媛県四国中央市妻鳥町上樋ノ上１７９５－１ イオン川之江２Ｆ","grid":[33.993428,133.567903],"machineNum":1,"prefId":38},{"name":"ナムコランド川之江店","address":"愛媛県四国中央市妻鳥町１１３６－１ フジグラン川之江２Ｆ","grid":[33.992954,133.574939],"machineNum":1,"prefId":38},{"name":"フジグラン川之江","address":"愛媛県四国中央市妻鳥町１１３６－１ フジグラン川之江","grid":[33.992954,133.574939],"machineNum":1,"prefId":38},{"name":"namcoフジグラン北宇和島店","address":"愛媛県宇和島市伊吹町字タカヒ甲912 フジグラン北宇和島別棟","grid":[33.238172,132.568117],"machineNum":1,"prefId":38},{"name":"フジグラン北宇和島","address":"愛媛県宇和島市伊吹町甲９１２－２ フジグラン北宇和島","grid":[33.238172,132.568117],"machineNum":1,"prefId":38},{"name":"プラサカプコン新居浜店","address":"愛媛県新居浜市前田町８－８ イオン新居浜２階","grid":[33.954788,133.267865],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー新居浜店","address":"愛媛県新居浜市前田町８番８号 イオン新居浜１階","grid":[33.954788,133.267865],"machineNum":2,"prefId":38},{"name":"namcoフジグラン重信店","address":"愛媛県東温市野田3-1-13 フジグラン重信店2階","grid":[33.795618,132.833398],"machineNum":1,"prefId":38},{"name":"フジグラン重信","address":"愛媛県東温市野田３－１－１３ フジグラン重信","grid":[33.795618,132.833398],"machineNum":1,"prefId":38},{"name":"アミパラ松山店","address":"愛媛県松山市生石町６５５－１ アミパラ松山","grid":[33.833807,132.74498],"machineNum":1,"prefId":38},{"name":"グランドシティMG INN キスケ店","address":"愛媛県松山市宮田町4","grid":[33.841306,132.75292],"machineNum":1,"prefId":38},{"name":"セガ松山","address":"愛媛県松山市枝松５－７－３２ セガ松山","grid":[33.828135,132.786448],"machineNum":1,"prefId":38},{"name":"タイトーステーション衣山店","address":"愛媛県松山市衣山１丁目１８８ パルティフジ衣山","grid":[33.85294,132.746617],"machineNum":1,"prefId":38},{"name":"バンバン衣山店","address":"愛媛県松山市衣山町１－２４８－１ バンバン衣山","grid":[33.852459,132.745745],"machineNum":1,"prefId":38},{"name":"ビッグバンアミぷり","address":"愛媛県松山市大街道１－４－１７ ＭＧ大街道","grid":[33.837858,132.769875],"machineNum":1,"prefId":38},{"name":"フジグラン松山","address":"愛媛県松山市宮西１－２－１ フジグラン松山","grid":[33.844924,132.753133],"machineNum":1,"prefId":38},{"name":"ポップンパーク東石井","address":"愛媛県松山市東石井６－１６－３９ マルナカ東石井","grid":[33.813028,132.777779],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー南松山店","address":"愛媛県松山市朝生田町5丁目1番25号 ジョー・プラ2F","grid":[33.821021,132.773027],"machineNum":2,"prefId":38},{"name":"モーリーファンタジー松山店","address":"愛媛県松山市天山１丁目１３番５号 イオン松山３階","grid":[33.823587,132.776555],"machineNum":3,"prefId":38},{"name":"ｎａｍｃｏフジグラン松山店","address":"愛媛県松山市宮西１丁目２－１ フジグラン松山４Ｆ","grid":[33.84487,132.753082],"machineNum":1,"prefId":38},{"name":"アミューズメントパークMG東予周布店","address":"愛媛県西条市周布７１５－１ フジ東予別棟","grid":[33.919725,133.076626],"machineNum":1,"prefId":38},{"name":"フジグラン西条","address":"愛媛県西条市新田字北新田２３５ フジグラン西条","grid":[33.919495,133.181144],"machineNum":1,"prefId":38},{"name":"エミフルMASAKI","address":"愛媛県伊予郡松前町筒井８５０番 エミフルＭＡＳＡＫＩ","grid":[33.789716,132.716075],"machineNum":1,"prefId":38},{"name":"ソユーフォレストハンター松前店","address":"愛媛県伊予郡松前町筒井８５０ エミフルＭＡＳＡＫＩ１階","grid":[33.789356,132.716266],"machineNum":1,"prefId":38},{"name":"サニーアクシス南国店アクシスキッズ","address":"高知県南国市大そね乙１００９ サニーアクシス南国","grid":[33.563088,133.639931],"machineNum":2,"prefId":39},{"name":"namcoフジグラン四万十店","address":"高知県四万十市具同字東五反田２２２２番地 フジグラン四万十","grid":[32.983223,132.910061],"machineNum":1,"prefId":39},{"name":"フジグラン四万十","address":"高知県四万十市具同２２２２ フジグラン四万十","grid":[32.981033,132.920546],"machineNum":1,"prefId":39},{"name":"アミューズメントパークMG須崎店","address":"高知県須崎市神田2500-1 マルナカ須崎店 別棟","grid":[33.408646,133.297638],"machineNum":1,"prefId":39},{"name":"タイトーステーション野市店","address":"高知県香南市野市町西野２００７－１ フジグラン野市","grid":[33.561144,133.696299],"machineNum":1,"prefId":39},{"name":"フジグラン野市","address":"高知県香南市野市町西野２００７－１ フジグラン野市","grid":[33.560934,133.696728],"machineNum":1,"prefId":39},{"name":"namcoフジグラン葛島店","address":"高知県高知市小倉町3-30 フジグラン葛島2階","grid":[33.558661,133.567584],"machineNum":1,"prefId":39},{"name":"アミュージアム高知店","address":"高知県高知市介良字長丁乙３１７－１","grid":[33.565289,133.609416],"machineNum":1,"prefId":39},{"name":"セガワールドフジグラン","address":"高知県高知市朝倉東町５２－１５ フジグラン高知３階","grid":[33.542877,133.497849],"machineNum":1,"prefId":39},{"name":"チッキッズ イオン高知旭町店","address":"高知県高知市旭町３－９４ イオン高知旭町２Ｆ","grid":[33.556484,133.505131],"machineNum":1,"prefId":39},{"name":"フジグラン高知","address":"高知県高知市朝倉東町５２－１５ フジグラン高知","grid":[33.542877,133.497849],"machineNum":1,"prefId":39},{"name":"プラサカプコン高知店","address":"高知県高知市秦南町１丁目４－８ イオンモール高知２階","grid":[33.576403,133.542493],"machineNum":2,"prefId":39},{"name":"モーリーファンタジー高知店","address":"高知県高知市秦南町１丁目４－８ イオンモール高知２階","grid":[33.576403,133.542493],"machineNum":3,"prefId":39},{"name":"チッキッズ","address":"高知県吾川郡いの町２０５ サニーアクシスいの２階","grid":[33.548671,133.427708],"machineNum":1,"prefId":39},{"name":"ゆめマートうきは","address":"福岡県うきは市吉井町千年153 ゆめマートうきは","grid":[33.346926,130.766341],"machineNum":1,"prefId":40},{"name":"モーリーファンタジーなかま店","address":"福岡県中間市上蓮花寺1丁目1番1号 ショッパーズモールなかま1F","grid":[33.823335,130.723279],"machineNum":2,"prefId":40},{"name":"ＳＥＧＡＡＲＥＮＡ中間","address":"福岡県中間市上蓮花寺３－１１－１ ショッパーズモールなかま","grid":[33.829803,130.717442],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど久留米店","address":"福岡県久留米市野中町１４１１ サンリブ久留米２Ｆゲームコーナー","grid":[33.303194,130.530071],"machineNum":1,"prefId":40},{"name":"トイザらス久留米店","address":"福岡県久留米市新合川１－３－３０ ゆめタウン久留米別館２Ｆ","grid":[33.320562,130.537476],"machineNum":1,"prefId":40},{"name":"プラボ久留米店","address":"福岡県久留米市新合川１丁目２番１号 ゆめタウン久留米２階","grid":[33.32188,130.538305],"machineNum":2,"prefId":40},{"name":"ゆめタウン八女店ゆめキッズ","address":"福岡県八女市大字蒲原９８８－２８ ゆめタウン八女","grid":[33.2156,130.547275],"machineNum":1,"prefId":40},{"name":"ピノキオランド八女店","address":"福岡県八女市蒲原字五反田８４８ スーパーセンタートライアル八女１Ｆ","grid":[33.216307,130.542386],"machineNum":1,"prefId":40},{"name":"MrMax八幡東店","address":"福岡県北九州市八幡区東田１－４－２２ ＭｒＭａｘ八幡東","grid":[33.871413,130.797236],"machineNum":1,"prefId":40},{"name":"MrMax八幡西店","address":"福岡県北九州市八幡西区真名子２－４－１ ＭｒＭａｘ八幡西ショッピングセンター","grid":[33.784055,130.729059],"machineNum":1,"prefId":40},{"name":"MrMax小倉北店","address":"福岡県北九州市小倉北区西港町９－１６ ＭｒＭａｘ小倉北","grid":[33.896935,130.862179],"machineNum":1,"prefId":40},{"name":"MrMax本城店","address":"福岡県北九州市八幡西区本城５－１－１ ＭｒＭａｘ本城ショッピングセンター","grid":[33.880101,130.737423],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど三ヶ森店","address":"福岡県北九州市八幡西区三ケ森３－９－１ サンリブ三ヶ森１階","grid":[33.831835,130.738508],"machineNum":1,"prefId":40},{"name":"アミューズメントMGM","address":"福岡県北九州市八幡西区陣原1‐2-12","grid":[33.867352,130.744029],"machineNum":1,"prefId":40},{"name":"イオン戸畑ショッピングセンター","address":"福岡県北九州市戸畑区汐井町2番2号 イオン戸畑","grid":[33.896144,130.819681],"machineNum":1,"prefId":40},{"name":"スマイルステーション戸畑店","address":"福岡県北九州市戸畑区汐井町２－２ イオン戸畑３Ｆ","grid":[33.896144,130.819681],"machineNum":1,"prefId":40},{"name":"タイトーサニーサイドモール小倉店","address":"福岡県北九州市小倉南区下曽根新町10-1","grid":[33.832316,130.933174],"machineNum":1,"prefId":40},{"name":"タイトーステーションリバーウォーク（プリスタ）","address":"福岡県北九州市小倉北区室町１ー１－１ リバーウォーク北九州４Ｆ５４０９","grid":[33.885886,130.875155],"machineNum":2,"prefId":40},{"name":"トイザらス八幡店","address":"福岡県北九州市八幡東区東田３－２－１０２ イオン八幡東ショッピングセンター１Ｆ","grid":[33.87043,130.811038],"machineNum":2,"prefId":40},{"name":"パスカランド黒崎店","address":"福岡県北九州市八幡西区西曲里町3-1 イオンタウン黒崎","grid":[33.859786,130.76025],"machineNum":2,"prefId":40},{"name":"モーリーファンタジー八幡東店","address":"福岡県北九州市八幡東区東田３丁目２－１０２ イオン八幡東ショッピングセンター３階","grid":[33.87043,130.811038],"machineNum":3,"prefId":40},{"name":"モーリーファンタジー若松店","address":"福岡県北九州市若松区二島１－３－１ イオン若松２階","grid":[33.891803,130.743857],"machineNum":4,"prefId":40},{"name":"小倉メトロポリス","address":"福岡県北九州市小倉北区西港町２７－５ 小倉コロナワールド","grid":[33.896646,130.858151],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール八幡東店","address":"福岡県北九州市八幡東区東田３－２－１０２ イオン八幡東ショッピングセンター３階","grid":[33.87043,130.811038],"machineNum":1,"prefId":40},{"name":"楽市楽座サンリブシティ小倉店","address":"福岡県北九州市小倉南区上葛原２－１４－１ サンリブシティ小倉","grid":[33.839379,130.908536],"machineNum":2,"prefId":40},{"name":"遊遊パーク 若松店","address":"福岡県北九州市若松区本町３－１１－１ サンリブ若松２Ｆ","grid":[33.901596,130.808215],"machineNum":1,"prefId":40},{"name":"遊遊パーク朝日ヶ丘店","address":"福岡県北九州市小倉北区朝日ケ丘３－１８ サンリブ朝日ケ丘２階","grid":[33.889856,130.853366],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど古賀店","address":"福岡県古賀市天神２－５－１ サンリブ古賀２階","grid":[33.734503,130.466513],"machineNum":1,"prefId":40},{"name":"MrMax大牟田店","address":"福岡県大牟田市馬渡町１－１ ＭｒＭａｘ大牟田ショッピングセンター","grid":[33.014224,130.466187],"machineNum":1,"prefId":40},{"name":"パスカランド大牟田店","address":"福岡県大牟田市旭町2丁目28-1","grid":[33.035791,130.452082],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー大牟田店","address":"福岡県大牟田市岬町3-4 イオンモール大牟田2階","grid":[33.030674,130.428013],"machineNum":2,"prefId":40},{"name":"楽市楽座イオンモール大牟田店","address":"福岡県大牟田市岬町３－４ イオンモール大牟田２階","grid":[33.030674,130.428013],"machineNum":1,"prefId":40},{"name":"ゲームらんど乙金店","address":"福岡県大野城市 乙金3丁目23番1号イオン乙金SC内北街区B","grid":[33.545695,130.496828],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー大野城店","address":"福岡県大野城市錦町４－１－１ イオン大野城３階","grid":[33.537961,130.475661],"machineNum":2,"prefId":40},{"name":"スペースタイム２５宗像店","address":"福岡県宗像市くりえいと１丁目５番１号 サンリブ宗像２階","grid":[33.811999,130.563729],"machineNum":1,"prefId":40},{"name":"イオン小郡店","address":"福岡県小郡市大保字弓場１１０ イオン小郡","grid":[33.408911,130.564398],"machineNum":1,"prefId":40},{"name":"楽市楽座イオン小郡店","address":"福岡県小郡市大保弓場110 イオン小郡","grid":[33.408911,130.564398],"machineNum":1,"prefId":40},{"name":"MrMax春日店","address":"福岡県春日市大字下白水２０５－２２ ＭｒＭａｘ春日ショッピングセンター","grid":[33.505601,130.455921],"machineNum":1,"prefId":40},{"name":"スペースタイム２５春日店","address":"福岡県春日市春日５－１７ 西友ザ・モール春日２階","grid":[33.520109,130.468182],"machineNum":1,"prefId":40},{"name":"フタバ図書ギガ春日店","address":"福岡県春日市昇町８丁目１－１ ＧＩＧＡ春日","grid":[33.520171,130.451551],"machineNum":1,"prefId":40},{"name":"西友ザ・モール 春日店","address":"福岡県春日市春日５－１７ 西友ザ・モール春日","grid":[33.516301,130.470669],"machineNum":2,"prefId":40},{"name":"namcoゆめモール柳川店","address":"福岡県柳川市三橋町蒲船津地内34街区29画地","grid":[33.168543,130.42489],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど田川店","address":"福岡県田川市川宮１６９３－１ サンリブ田川２階","grid":[33.64948,130.798001],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー田川店","address":"福岡県田川市大字伊田字火掛4616番 トライアル田川1F","grid":[33.652728,130.809144],"machineNum":1,"prefId":40},{"name":"プラサカプコン直方店","address":"福岡県直方市湯野原２－１－１ イオン直方２階","grid":[33.768585,130.749644],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー直方店","address":"福岡県直方市湯野原２丁目１番１号 イオン直方２階","grid":[33.769202,130.749117],"machineNum":4,"prefId":40},{"name":"MrMax土井店","address":"福岡県福岡市東区青葉７－６１－１ ＭｒＭａｘ土井","grid":[33.63649,130.466286],"machineNum":1,"prefId":40},{"name":"MrMax姪浜店","address":"福岡県福岡市西区内浜１－７－１ ウエストコースト姪浜","grid":[33.582101,130.321822],"machineNum":1,"prefId":40},{"name":"MrMax橋本店","address":"福岡県福岡市西区橋本１－１０－２７ ＭｒＭａｘ橋本ショッピングセンター","grid":[33.559918,130.318175],"machineNum":1,"prefId":40},{"name":"namcoゆめタウン博多","address":"福岡県福岡市東区東浜１－１－１ ゆめタウン博多","grid":[33.611086,130.411355],"machineNum":1,"prefId":40},{"name":"namcoマークイズ福岡ももち店","address":"福岡県福岡市中央区地行浜2-2","grid":[33.593891,130.363717],"machineNum":3,"prefId":40},{"name":"namco博多バスターミナル店","address":"福岡県福岡市博多区博多駅中央街２－１ 博多バスターミナル７階","grid":[33.59152,130.419786],"machineNum":2,"prefId":40},{"name":"ジーカム和白店","address":"福岡県福岡市東区和白３－２７－６９ ジーカム和白","grid":[33.690693,130.431954],"machineNum":1,"prefId":40},{"name":"ジーパラ博多","address":"福岡県福岡市博多区東光寺町2丁目6-40","grid":[33.577036,130.435918],"machineNum":1,"prefId":40},{"name":"タイトースFテーションヨドバシ博多店","address":"福岡県福岡市博多区博多駅中央街６ー１２ ヨドバシカメラマルチメディア博多４Ｆ","grid":[33.588185,130.421738],"machineNum":1,"prefId":40},{"name":"タイトーステーションキャナルシティ博多店","address":"福岡県福岡市博多区住吉１－２－２２ キャナルシティ博多・ＯＰＡ","grid":[33.589372,130.411811],"machineNum":1,"prefId":40},{"name":"タイトーステーションマリノア","address":"福岡県福岡市西区小戸２－２７０４－２ ピアウォークマリノアシティ２階","grid":[33.597802,130.317796],"machineNum":1,"prefId":40},{"name":"タイトーステーション福岡天神店","address":"福岡県福岡市中央区天神２ー６ー３５ サザンクロスビル","grid":[33.589624,130.397327],"machineNum":3,"prefId":40},{"name":"ビックカメラ天神2号館","address":"福岡県福岡市中央区天神2-4-5 ビックカメラ天神2号館6階 オモチャ売リ場","grid":[33.587547,130.398624],"machineNum":1,"prefId":40},{"name":"モーリーファンタジーマリナタウン店","address":"福岡県福岡市西区豊浜3-1-10 イオンマリナタウン","grid":[33.58945,130.333909],"machineNum":3,"prefId":40},{"name":"モーリーファンタジー福岡伊都店","address":"福岡県福岡市西区北原一丁目2番1号 イオン福岡伊都3階","grid":[33.577404,130.258223],"machineNum":4,"prefId":40},{"name":"モーリーファンタジー笹丘店","address":"福岡県福岡市中央区笹丘1-28-74 ダイエー笹丘地下1階","grid":[33.564983,130.376842],"machineNum":3,"prefId":40},{"name":"モーリーファンタジー香椎浜店","address":"福岡県福岡市東区香椎浜3-12-1 イオン香椎浜","grid":[33.66556,130.401958],"machineNum":4,"prefId":40},{"name":"ヨドバシカメラマルチメディア博多","address":"福岡県福岡市博多区博多駅中央街６－１２ ヨドバシカメラマルチメディア博多","grid":[33.588285,130.421625],"machineNum":2,"prefId":40},{"name":"楽市楽座イオンモール福岡伊都店","address":"福岡県福岡市西区北原一丁目2番1号 イオン福岡伊都2階","grid":[33.577404,130.258223],"machineNum":1,"prefId":40},{"name":"楽市街道箱崎店２Ｆ","address":"福岡県福岡市東区箱崎５丁目１番８号 楽市街道箱崎","grid":[33.62427,130.419715],"machineNum":1,"prefId":40},{"name":"遊遊パーク フォレオ博多","address":"福岡県福岡市博多区東那珂１－１４－４６ フォレオ博多２Ｆ","grid":[33.574195,130.439696],"machineNum":1,"prefId":40},{"name":"トイザらス福津店","address":"福岡県福津市７９３イオンモール福津店３F イオンモール福津","grid":[33.766763,130.491062],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー福津店","address":"福岡県福津市日蒔野6丁目16番地の1 イオンモール福津2階","grid":[33.753413,130.493975],"machineNum":3,"prefId":40},{"name":"楽市楽座イオンモール福津店","address":"福岡県福津市７９３ イオンモール福津３階","grid":[33.766763,130.491062],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー筑後店","address":"福岡県筑後市大字上北島字井原口1259-1 トライアル筑後1F","grid":[33.20387,130.493688],"machineNum":2,"prefId":40},{"name":"MrMax筑紫野店","address":"福岡県筑紫野市大字原田８３６－２０ シュロアモール筑紫野","grid":[33.49625,130.515594],"machineNum":1,"prefId":40},{"name":"namcoゆめタウン筑紫野店","address":"福岡県筑紫野市針摺東3-3-1 ゆめタウン筑紫野","grid":[33.484317,130.538339],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー筑紫野店","address":"福岡県筑紫野市立明寺434-1 イオンモール筑紫野","grid":[33.481119,130.526821],"machineNum":4,"prefId":40},{"name":"楽市楽座イオンモール筑紫野店","address":"福岡県筑紫野市立明寺４３４－１－３３７ イオンモール筑紫野","grid":[33.481119,130.526821],"machineNum":1,"prefId":40},{"name":"楽市楽座行橋店","address":"福岡県行橋市西泉６－１－１ コスタ行橋","grid":[33.717555,130.973278],"machineNum":1,"prefId":40},{"name":"イオン穂波店","address":"福岡県飯塚市枝国長浦666-48 イオン穂波","grid":[33.637342,130.673737],"machineNum":2,"prefId":40},{"name":"モーリーファンタジー飯塚店","address":"福岡県飯塚市徳前1-4 トライアル飯塚1階","grid":[33.632048,130.683043],"machineNum":1,"prefId":40},{"name":"楽市楽座イオン穂波店","address":"福岡県飯塚市枝国長浦６６６－４８ イオン穂波２階","grid":[33.637342,130.673737],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー大木店","address":"福岡県三潴郡大木町蛭池1200番地 イオンスーパーセンター大木1階","grid":[33.220534,130.447533],"machineNum":2,"prefId":40},{"name":"ふぇすたらんど苅田店","address":"福岡県京都郡苅田町殿川町１－７ サンリブエル苅田１階","grid":[33.774391,130.983624],"machineNum":1,"prefId":40},{"name":"MrMax粕屋店","address":"福岡県糟屋郡粕屋町仲原２７１４ ＭｒＭａｘ粕屋","grid":[33.609652,130.447538],"machineNum":1,"prefId":40},{"name":"トイザらス福岡かすや店","address":"福岡県糟屋郡粕屋町大字酒殿字老ノ木１９２ イオンモール福岡ルクル１Ｆ","grid":[33.599082,130.484727],"machineNum":1,"prefId":40},{"name":"ピノキオランド宇美店","address":"福岡県糟屋郡宇美町宇美４－８－１ ライフプラザユービオス３Ｆ","grid":[33.569384,130.511857],"machineNum":2,"prefId":40},{"name":"モーリーファンタジー福岡店","address":"福岡県糟屋郡粕屋町大字酒殿字老ノ木１９２－１ イオンモール福岡２階","grid":[33.61073,130.480559],"machineNum":3,"prefId":40},{"name":"モーリーファンタジー福岡空港店","address":"福岡県糟屋郡志免町別府2-17-20 スーパーセンタートライアル福岡空港店1F","grid":[33.601907,130.454659],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール福岡ルクル店","address":"福岡県糟屋郡粕屋町大字酒殿字老ノ木１９２－１ イオンモール福岡ルクル２階","grid":[33.599082,130.484727],"machineNum":1,"prefId":40},{"name":"楽市楽座２１０トリアス店","address":"福岡県糟屋郡久山町山田９９０ 楽市楽座２１０トリアス","grid":[33.652866,130.492027],"machineNum":1,"prefId":40},{"name":"プレイランド筑紫野ベレッサ","address":"福岡県818-0034 筑紫野市美しが丘南1‐12-1","grid":[33.445821,130.542019],"machineNum":1,"prefId":40},{"name":"ソニックワールド伊万里店","address":"佐賀県伊万里市二里町八谷搦１８９番地３ ソニックワールド伊万里","grid":[33.278612,129.872197],"machineNum":1,"prefId":41},{"name":"namcoゆめタウン佐賀店","address":"佐賀県佐賀市兵庫町兵庫北土地区画整理地内２２街区 ゆめタウン佐賀２Ｆ","grid":[33.263118,130.300906],"machineNum":2,"prefId":41},{"name":"アミパラ佐賀","address":"佐賀県佐賀市巨勢町大字牛島７３０ モラージュ佐賀南館１Ｆ","grid":[33.252554,130.318591],"machineNum":1,"prefId":41},{"name":"モーリーファンタジー佐賀大和店","address":"佐賀県佐賀市大和町大字尼寺３５３５番地 イオン佐賀大和２階","grid":[33.304188,130.280646],"machineNum":2,"prefId":41},{"name":"モーリーファンタジー佐賀店","address":"佐賀県佐賀市東与賀町大字下古賀字一本杉87番地1 イオンスーパーセンター佐賀1階","grid":[33.181094,130.280778],"machineNum":2,"prefId":41},{"name":"遊道楽嘉瀬店","address":"佐賀県佐賀市嘉瀬町大字中原２４８８－１ 遊道楽嘉瀬","grid":[33.242208,130.256504],"machineNum":1,"prefId":41},{"name":"MrMax唐津","address":"佐賀県唐津市鏡３７１６ ＭｒＭａｘ唐津","grid":[33.436295,130.006931],"machineNum":1,"prefId":41},{"name":"モーリーファンタジー唐津店","address":"佐賀県唐津市鏡字立神４６７１ イオン唐津２階","grid":[33.432105,130.009461],"machineNum":3,"prefId":41},{"name":"ゆめタウン武雄ゆめキッズ","address":"佐賀県武雄市武雄町武雄４９９２ ゆめタウン武雄２Ｆユメキッズ","grid":[33.189006,130.025014],"machineNum":1,"prefId":41},{"name":"ＡＧスクエア佐賀武雄店","address":"佐賀県武雄市武雄町富岡１２５１７－１ アクロスプラザ武雄","grid":[33.182361,130.027416],"machineNum":1,"prefId":41},{"name":"楽市楽座鳥栖店","address":"佐賀県鳥栖市本鳥栖町下鳥栖５３７－１ フレスポ鳥栖２階","grid":[33.378242,130.519073],"machineNum":1,"prefId":41},{"name":"MrMax北茂安店","address":"佐賀県三養基郡みやき町大字白壁２２２８ ＭｒＭａｘ北茂安","grid":[33.328347,130.476564],"machineNum":1,"prefId":41},{"name":"イオン佐世保店","address":"長崎県佐世保市島瀬町10-9 イオン佐世保ショッピングセンター","grid":[33.171241,129.720598],"machineNum":1,"prefId":42},{"name":"トイザらス・ベビーザらス佐世保店","address":"長崎県佐世保市新港町２－１ させぼ五番街３Ｆ","grid":[33.165181,129.722901],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー大塔店","address":"長崎県佐世保市大塔町１４－２ イオン大塔３階","grid":[33.148694,129.780044],"machineNum":2,"prefId":42},{"name":"モーリーファンタジー有家店","address":"長崎県南島原市有家町山川１３５－１ イオン有家１階","grid":[32.663496,130.309163],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー壱岐店","address":"長崎県壱岐市芦辺町箱崎中山触字干拓2604-2 イオン壱岐2階","grid":[33.81024,129.751437],"machineNum":1,"prefId":42},{"name":"ソニックワールド大村店","address":"長崎県大村市古賀島町３８３－１ ソニックワールド大村","grid":[32.927428,129.939467],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー大村店","address":"長崎県大村市幸町２５－２００ イオン大村２階","grid":[32.900026,129.957863],"machineNum":1,"prefId":42},{"name":"にこにこらんど島原店","address":"長崎県島原市弁天町１－７０８０－１ イオン島原店内ゲームコーナー","grid":[32.783964,130.372344],"machineNum":1,"prefId":42},{"name":"ハイテクセガもみの木村","address":"長崎県諫早市小川町９０－１ ハイテクセガもみの木村","grid":[32.831547,130.05537],"machineNum":1,"prefId":42},{"name":"MrMax長崎店","address":"長崎県長崎市岩見町２６－１ ＭｒＭａｘ長崎ショッピングセンター","grid":[32.76815,129.851843],"machineNum":1,"prefId":42},{"name":"namcoゆめタウン夢彩都店","address":"長崎県長崎市元船町１０－１夢彩都４Ｆ ゆめタウン夢彩都","grid":[32.746278,129.870036],"machineNum":1,"prefId":42},{"name":"おもちゃのあおき 道の尾店","address":"長崎県長崎市葉山1丁目6-10 西友道の尾店2F","grid":[32.803803,129.850678],"machineNum":1,"prefId":42},{"name":"おもちゃのあおき 長崎夢彩都店","address":"長崎県長崎市元船町１０－１ ゆめタウン夢彩都２Ｆ","grid":[32.746357,129.869966],"machineNum":1,"prefId":42},{"name":"セガみらい長崎ココウォーク","address":"長崎県長崎市茂里町1-55 みらい長崎ココウォーク5F","grid":[32.762322,129.864739],"machineNum":1,"prefId":42},{"name":"タイトーステーションアミュプラザ長崎店","address":"長崎県長崎市尾上町１－１ アミュプラザ長崎４Ｆ","grid":[32.751755,129.871006],"machineNum":1,"prefId":42},{"name":"モーリーファンタジーチトセピア店","address":"長崎県長崎市千歳町5番1号 イオンチトセピア3F","grid":[32.79031,129.861758],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー東長崎店","address":"長崎県長崎市田中町１０２７－８ イオン東長崎２階","grid":[32.768372,129.952382],"machineNum":2,"prefId":42},{"name":"モーリーファンタジー長崎店","address":"長崎県長崎市新地町3-17 ダイエー長崎店 5F","grid":[32.741652,129.87433],"machineNum":2,"prefId":42},{"name":"ぴのきお","address":"長崎県北松浦郡佐々町本田原免７３－３ マックスバリュ佐々","grid":[33.239869,129.649912],"machineNum":1,"prefId":42},{"name":"MrMax時津店","address":"長崎県西彼杵郡時津町左底郷１８３２－１ ＭｒＭａｘ時津","grid":[32.834466,129.84477],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー時津店","address":"長崎県西彼杵郡時津町浜田郷７５１－５ イオン時津２階","grid":[32.831335,129.863151],"machineNum":2,"prefId":42},{"name":"FESTA人吉店","address":"熊本県人吉市宝来町１３０７番地１ ＨＩＴＯＹＯＳＨＩ－ＲＥＸ","grid":[32.212048,130.748247],"machineNum":1,"prefId":43},{"name":"タイトーステーションゆめタウン八代店","address":"熊本県八代市建馬町３－１ ゆめタウン八代２Ｆ","grid":[32.505968,130.585563],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー八代店","address":"熊本県八代市沖町六番割3987-3 イオン八代2階","grid":[32.527467,130.582625],"machineNum":2,"prefId":43},{"name":"ピノキオランド本渡店","address":"熊本県天草市船之尾町２７９－６ スーパーセンタータイヨーリンドマール３Ｆ","grid":[32.45826,130.188224],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー天草店","address":"熊本県天草市亀場町食場後山下740 イオン天草2階","grid":[32.428305,130.173422],"machineNum":1,"prefId":43},{"name":"パスカワールド宇土店","address":"熊本県宇土市善道寺町綾織95 宇土シティモール","grid":[32.680566,130.674017],"machineNum":1,"prefId":43},{"name":"namcoイオンモール宇城店","address":"熊本県宇城市小川町河江１番１号 イオンモール宇城","grid":[32.597075,130.70585],"machineNum":1,"prefId":43},{"name":"MrMax山鹿店","address":"熊本県山鹿市方保田３４６２－１ 山鹿ショッピングセンター","grid":[33.004982,130.723155],"machineNum":1,"prefId":43},{"name":"ＦＥＳＴＡ山鹿店","address":"熊本県山鹿市方保田鳥越３４６８－１ ＦＥＳＴＡ山鹿","grid":[33.004723,130.723035],"machineNum":1,"prefId":43},{"name":"MrMax熊本南店","address":"熊本県熊本市南区十禅寺３－４－１４ ＭｒＭａｘ熊本南","grid":[32.776013,130.697484],"machineNum":1,"prefId":43},{"name":"namcoワンダーシティ南熊本店","address":"熊本県熊本市中央区九品寺6丁目9番1 ワンダーシティ南熊本","grid":[32.787513,130.716701],"machineNum":1,"prefId":43},{"name":"ゆめタウンサンピアンアミューズメントパーク","address":"熊本県熊本市上南部二丁目2番2号 ゆめタウンサンピアン3F","grid":[32.827176,130.763524],"machineNum":1,"prefId":43},{"name":"トイザらス熊本店","address":"熊本県熊本市東区上南部２－２－２ ゆめタウンサンピアン１Ｆ","grid":[32.827043,130.76342],"machineNum":1,"prefId":43},{"name":"パスカランドはません店","address":"熊本県熊本市南区田井島1丁目2-1 ゆめタウンはません内","grid":[32.77158,130.726497],"machineNum":1,"prefId":43},{"name":"パスカランド長嶺店","address":"熊本県熊本市東区長嶺西１－５－１ シュロアモール長嶺","grid":[32.811709,130.761975],"machineNum":1,"prefId":43},{"name":"ピノキオランドくまなん店","address":"熊本県熊本市中央区平成3-23-30 サンリブシティくまなん3F","grid":[32.777655,130.704608],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー熊本中央店","address":"熊本県熊本市中央区大江4-2-1 イオン熊本中央2F","grid":[32.80009,130.718707],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー田崎店","address":"熊本県熊本市西区田崎町字下寄380番地 イオンタウン田崎1F","grid":[32.782357,130.677188],"machineNum":1,"prefId":43},{"name":"ピノキオランド玉名店","address":"熊本県玉名市亀甲前田１１０ ビッグミカエル玉名","grid":[32.928667,130.552764],"machineNum":1,"prefId":43},{"name":"パスカワールドグリーンランド店","address":"熊本県荒尾市本井手１５７４－５４ パスカワールドグリーンランド","grid":[32.987856,130.471211],"machineNum":1,"prefId":43},{"name":"ピノキオランドあらおシティモール店","address":"熊本県荒尾市緑ヶ丘１－１－１ あらおシティモール１Ｆ","grid":[32.982538,130.470646],"machineNum":1,"prefId":43},{"name":"モーリーファンタジーあらおシティモール店","address":"熊本県荒尾市緑ケ丘1-1-1 あらおシティモール2階","grid":[32.982538,130.470646],"machineNum":2,"prefId":43},{"name":"モーリーファンタジー熊本店","address":"熊本県上益城郡嘉島町上島字長池2232 イオン熊本2階","grid":[32.737618,130.753867],"machineNum":3,"prefId":43},{"name":"楽市楽座イオンモール熊本クレア店","address":"熊本県上益城郡嘉島町上島長池２２３２ イオンモール熊本２階","grid":[32.737618,130.753867],"machineNum":1,"prefId":43},{"name":"namcoゆめタウン光の森店","address":"熊本県菊池郡菊陽町光の森７丁目３９番１ ゆめタウン光の森南館３Ｆ","grid":[32.859014,130.785681],"machineNum":1,"prefId":43},{"name":"スマイルステーション菊陽店","address":"熊本県菊池郡菊陽町津久礼２４７２ イオン菊陽２Ｆ","grid":[32.862005,130.801206],"machineNum":1,"prefId":43},{"name":"大津ショッピングプラザアーク店ナムコランド","address":"熊本県菊池郡大津町大字室１３７ 大津ショッピングプラザアーク","grid":[32.876042,130.866419],"machineNum":1,"prefId":43},{"name":"ゆめタウン中津店ゆめキッズ","address":"大分県中津市島田１３４－１ ゆめタウン中津３Ｆユメキッズ","grid":[33.602701,131.194593],"machineNum":1,"prefId":44},{"name":"セガワールド中津","address":"大分県中津市沖代町１－２－１６ セガワールド中津","grid":[33.59121,131.201959],"machineNum":1,"prefId":44},{"name":"ピノキオランド中津店","address":"大分県中津市　下池永１５０－１ トライアル中津１Ｆ","grid":[33.586921,131.213651],"machineNum":1,"prefId":44},{"name":"モーリーファンタジー三光店","address":"大分県中津市三光佐知1032 イオンモール三光","grid":[33.558499,131.193263],"machineNum":1,"prefId":44},{"name":"ユーズランド三光店","address":"大分県中津市三光佐知１０３２ イオンモール三光２階","grid":[33.55815,131.193739],"machineNum":1,"prefId":44},{"name":"トキハインダストリー佐伯店ナムコランド","address":"大分県佐伯市池田２０６４ トキハインダストリー佐伯２Ｆ","grid":[32.944123,131.90167],"machineNum":1,"prefId":44},{"name":"ＦＥＳＴＡコスモタウン佐伯店","address":"大分県佐伯市脇津留コスモタウンＣ－４街区Ｂ－１ コスモタウン佐伯","grid":[32.964526,131.871251],"machineNum":1,"prefId":44},{"name":"ゆめタウン別府店ＢＩＧＷＡＶＥ","address":"大分県別府市楠町３８２－６ ゆめタウン別府","grid":[33.275432,131.508085],"machineNum":2,"prefId":44},{"name":"MrMax西大分店","address":"大分県大分市大字生石１４５－４４ ＭｒＭａｘ西大分","grid":[33.243488,131.577452],"machineNum":1,"prefId":44},{"name":"namco  トキハ本店","address":"大分県大分市府内町２－１－４ トキハ本店６階","grid":[33.236687,131.608199],"machineNum":2,"prefId":44},{"name":"namcoトキハわさだタウン店","address":"大分県大分市大字玉沢字楠本755-1 トキハわさだタウン2F","grid":[33.189201,131.582464],"machineNum":1,"prefId":44},{"name":"namco明野店","address":"大分県大分市明野東1-1-1 あけのアクロスタウン4F","grid":[33.223794,131.652321],"machineNum":1,"prefId":44},{"name":"アムス大在ナムコランド","address":"大分県大分市大在浜２－１－１ トキハインダストリーアムス大在","grid":[33.242886,131.73028],"machineNum":1,"prefId":44},{"name":"イオン高城店","address":"大分県大分市高城西町２８－１ イオン高城","grid":[33.241487,131.652457],"machineNum":1,"prefId":44},{"name":"セガワールド高城","address":"大分県大分市牧１－１６１－８ セガワールド高城","grid":[33.241756,131.637364],"machineNum":2,"prefId":44},{"name":"タイトーFステーション セントポルタ大分店","address":"大分県大分市中央町2‐1-1","grid":[33.235356,131.606353],"machineNum":1,"prefId":44},{"name":"タイトーステーションアミュプラザおおいた","address":"大分県大分市要町１－１４ アミュプラザおおいた４階","grid":[33.233146,131.606326],"machineNum":1,"prefId":44},{"name":"トイザらス大分店","address":"大分県大分市大字宮崎字スカワ５２５ トイザらス大分","grid":[33.201627,131.608728],"machineNum":1,"prefId":44},{"name":"プラサカプコン大分店","address":"大分県大分市公園通り西２－１ イオンパークプレイス大分２階","grid":[33.195832,131.656799],"machineNum":2,"prefId":44},{"name":"モーリーファンタジーパークプレイス大分店","address":"大分県大分市公園通り西２丁目－１ イオンパークプレイス大分２階","grid":[33.195832,131.656799],"machineNum":3,"prefId":44},{"name":"楽市楽座大分店","address":"大分県大分市大字勢家１１３７番地 楽市楽座大分","grid":[33.246246,131.605823],"machineNum":1,"prefId":44},{"name":"ＦＥＳＴＡフリーモールわさだ店","address":"大分県大分市木上鉾手２１０２ ＦＥＳＴＡフリーモールわさだ","grid":[33.184726,131.568071],"machineNum":1,"prefId":44},{"name":"namcoミスターマックス宇佐店","address":"大分県宇佐市法鏡寺500 ハイパーモールメルクス宇佐","grid":[33.524498,131.348074],"machineNum":1,"prefId":44},{"name":"モーリーファンタジー日田店","address":"大分県日田市南元町14-22 イオン日田2F","grid":[33.315269,130.939133],"machineNum":2,"prefId":44},{"name":"にこにこらんど杵築店","address":"大分県杵築市杵築字北浜665-618 サンリブ杵築","grid":[33.421171,131.623417],"machineNum":1,"prefId":44},{"name":"モーリーファンタジー挾間店","address":"大分県由布市挾間町北方７７番地 イオン挾間ショッピングセンター２階","grid":[33.206477,131.522271],"machineNum":1,"prefId":44},{"name":"にこにこらんど臼杵店","address":"大分県臼杵市江無田２６６－５ サンリブ臼杵２Ｆ","grid":[33.125539,131.79004],"machineNum":1,"prefId":44},{"name":"ピノキオランド三重店","address":"大分県豊後大野市三重町赤嶺字角神９９２ トライアル三重２Ｆ","grid":[32.986344,131.600218],"machineNum":1,"prefId":44},{"name":"namco宮交シティ","address":"宮崎県宮崎市大淀４－６－２８ 宮交シティ３階","grid":[31.895056,131.419506],"machineNum":1,"prefId":45},{"name":"ファミリーランドポニー小松台店","address":"宮崎県宮崎市小松台南町１３－１ タイヨー小松台２階ゲームコーナー","grid":[31.926176,131.391413],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー南宮崎店","address":"宮崎県宮崎市大淀4-7-30 イオン南宮崎","grid":[31.895511,131.419333],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー宮崎店","address":"宮崎県宮崎市新別府町江口862-1 イオン宮崎","grid":[31.922628,131.456402],"machineNum":4,"prefId":45},{"name":"ラウンドワンスタジアム宮崎店","address":"宮崎県宮崎市中村東3丁目4-60","grid":[31.895339,131.417664],"machineNum":1,"prefId":45},{"name":"楽市楽座イオンモール宮崎店","address":"宮崎県宮崎市新別府町江口８６２－１ イオン宮崎２階区画№２３１","grid":[31.923133,131.455851],"machineNum":1,"prefId":45},{"name":"ファミリーランドポニー小林店","address":"宮崎県小林市堤金鳥居３００５－１２ サンキュー小林店内ゲームコーナー","grid":[31.981732,130.996665],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー延岡店","address":"宮崎県延岡市旭町２－２－１ イオン延岡２階","grid":[32.572433,131.670152],"machineNum":3,"prefId":45},{"name":"ピノキオランド日南店","address":"宮崎県日南市材木町１ サピア日南ショッピングセンター","grid":[31.587148,131.40184],"machineNum":1,"prefId":45},{"name":"ピノキオランド日向店","address":"宮崎県日向市都町１０７５４－１１ スーパーセンタートライアル日向３Ｆ","grid":[32.4268,131.627201],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー日向店","address":"宮崎県日向市日知屋字古田町６１－１ イオン日向２階","grid":[32.424057,131.652607],"machineNum":1,"prefId":45},{"name":"ピノキオランド西都店","address":"宮崎県西都市小野崎１－７６ 西都ショッピングセンターパオ２Ｆ","grid":[32.106462,131.404326],"machineNum":1,"prefId":45},{"name":"マンガ倉庫都城","address":"宮崎県都城市吉尾町840","grid":[31.75329,131.078191],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー都城店","address":"宮崎県都城市早鈴町１９５０番地 イオン都城２階","grid":[31.714656,131.075727],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー都城駅前店","address":"宮崎県都城市栄町4672-5 イオンモール都城駅前","grid":[31.735257,131.080019],"machineNum":1,"prefId":45},{"name":"楽市楽座イオンモールミエル都城駅前店","address":"宮崎県都城市栄町４６７２－５－２１７ イオンモール都城駅前","grid":[31.735229,131.079961],"machineNum":1,"prefId":45},{"name":"セガワールド出水","address":"鹿児島県出水市六月田町３４７ セガワールド出水","grid":[32.106128,130.345154],"machineNum":1,"prefId":46},{"name":"ナムコランドプラッセ大和出水店","address":"鹿児島県出水市本町４－４５ プラッセ大和出水２Ｆ","grid":[32.080405,130.359493],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー出水店","address":"鹿児島県出水市黄金町３１３－１ サンキュー出水店内ゲームコーナー","grid":[32.103312,130.346445],"machineNum":1,"prefId":46},{"name":"モーリーファンタジー姶良店","address":"鹿児島県姶良市西餅田264-1 イオンスタイル姶良店3階","grid":[31.732129,130.626356],"machineNum":2,"prefId":46},{"name":"楽市楽座イオンタウン姶良","address":"鹿児島県姶良市東餅田336 イオンタウン姶良2階","grid":[31.733179,130.628636],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー西志布志店","address":"鹿児島県志布志市志布志町安楽１００－１ サンキュー西志布志店内ゲームコーナー","grid":[31.470069,131.08693],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー北指宿店","address":"鹿児島県指宿市西方１４７４ サンキュー北指宿店内ゲームコーナー","grid":[31.257217,130.627929],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー伊集院店","address":"鹿児島県日置市伊集院町徳重3丁目9-1 山忠ビル ソレイユタウン伊集院店2階ゲームコーナー","grid":[31.630033,130.397908],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー永利店","address":"鹿児島県薩摩川内市永利町７１２番地 タイヨー永利店内ゲームコーナー","grid":[31.810049,130.333267],"machineNum":1,"prefId":46},{"name":"ふぁみりーらんどゆうゆう種子島店","address":"鹿児島県西之表市西之表１０４４０－１ コスモタウンプラッセだいわ店内ゲームコーナー","grid":[30.720461,130.99984],"machineNum":1,"prefId":46},{"name":"ザ・サードプラネットフレスポ国分店","address":"鹿児島県霧島市国分広瀬２－４－１ フレスポ国分","grid":[31.722383,130.756838],"machineNum":1,"prefId":46},{"name":"モーリーファンタジー隼人国分店","address":"鹿児島県霧島市隼人町見次１２２９ イオン隼人国分ショッピングセンター２階","grid":[31.738281,130.74187],"machineNum":1,"prefId":46},{"name":"あそびパーク アクロスプラザ与次郎店","address":"鹿児島県鹿児島市与次郎1-7-20","grid":[31.569539,130.562195],"machineNum":1,"prefId":46},{"name":"ザ・サードプラネットフレスポＪＰ鹿児島店","address":"鹿児島県鹿児島市与次郎１－１１－１ フレスポジャングルパーク２階","grid":[31.570505,130.565531],"machineNum":2,"prefId":46},{"name":"タイトーステーションアミュプラザ鹿児島店","address":"鹿児島県鹿児島市中央町１－１ アミュプラザ鹿児島５Ｆ","grid":[31.584573,130.542754],"machineNum":1,"prefId":46},{"name":"ビックカメラ鹿児島中央駅店","address":"鹿児島県鹿児島市中央町１－１ ビックカメラ鹿児島中央駅","grid":[31.583909,130.540301],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー花棚店","address":"鹿児島県鹿児島市吉野町３６１５－１ タイヨー花棚２階ゲームコーナー","grid":[31.653483,130.568809],"machineNum":1,"prefId":46},{"name":"マンガ倉庫鹿児島","address":"鹿児島県鹿児島市小松原1-6-7","grid":[31.538437,130.535673],"machineNum":1,"prefId":46},{"name":"モーリーファンタジー鹿児島店","address":"鹿児島県鹿児島市東開町7 イオンモール鹿児島3階","grid":[31.527679,130.537828],"machineNum":2,"prefId":46},{"name":"モーリーファンタジー鹿児島鴨池店","address":"鹿児島県鹿児島市鴨池2-26-30 イオン鹿児島鴨池2F","grid":[31.562665,130.550719],"machineNum":1,"prefId":46},{"name":"ファミリーランドポニー寿店","address":"鹿児島県鹿屋市寿７丁目４９４－１ サンキュー寿２階ゲームコーナー","grid":[31.386136,130.866504],"machineNum":1,"prefId":46},{"name":"プラッセだいわ鹿屋店ナムコランド","address":"鹿児島県鹿屋市白崎町４－１ プラッセだいわ鹿屋","grid":[31.378609,130.856217],"machineNum":1,"prefId":46},{"name":"サンゲームス鹿屋店","address":"鹿児島県肝属郡肝付町富山１００８－５","grid":[31.388713,130.897998],"machineNum":1,"prefId":46},{"name":"ピノキオランド宮之城店","address":"鹿児島県薩摩郡さつま町宮之城屋地１５０８ 大和ブラッセ宮之城","grid":[31.904176,130.454478],"machineNum":1,"prefId":46},{"name":"ナムコランド具志川","address":"沖縄県うるま市字前原幸崎原３０３番地 イオン具志川ＳＣ２階","grid":[26.340736,127.847251],"machineNum":1,"prefId":47},{"name":"ミルキーズサンエー具志川店","address":"沖縄県うるま市江洲４５０－１ サンエー具志川メインシティ１Ｆ","grid":[26.352729,127.825691],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー具志川店","address":"沖縄県うるま市前原幸崎原３０３番地 イオン具志川ＳＣ２階","grid":[26.340736,127.847251],"machineNum":3,"prefId":47},{"name":"サンエー具志川メインシティ","address":"沖縄県具志川市江洲４５０－１ サンエー具志川メインシティ","grid":[26.352718,127.825642],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー名護店","address":"沖縄県名護市字名護見取川原４４７２ イオン名護１階","grid":[26.583769,128.004935],"machineNum":2,"prefId":47},{"name":"ラウンドワンスタジアム沖縄・宜野湾店","address":"沖縄県宜野湾市真志喜３－２８－８","grid":[26.275784,127.731016],"machineNum":1,"prefId":47},{"name":"namco沖縄店","address":"沖縄県沖縄市池原5-1-24","grid":[26.384692,127.828096],"machineNum":1,"prefId":47},{"name":"ゲームランドジョイジャングル経塚店","address":"沖縄県浦添市経塚６５２番 サンエー経塚シティ２階","grid":[26.237669,127.722806],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー浦添店","address":"沖縄県浦添市城間4-7-1 浦添ショッピングセンター3階","grid":[26.258492,127.712869],"machineNum":1,"prefId":47},{"name":"アミューズメントパークミルキーランド潮崎店","address":"沖縄県糸満市潮崎町２－２ サンエーしおざきシティ","grid":[26.124045,127.668262],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー糸満店","address":"沖縄県糸満市兼城400番地 サンプラザいとまん1F","grid":[26.139078,127.672542],"machineNum":1,"prefId":47},{"name":"namcoイオンとよみショッピングセンター店","address":"沖縄県豊見城市根差部710 イオンとよみSC内","grid":[26.189484,127.687503],"machineNum":1,"prefId":47},{"name":"namco那覇メインプレイス店","address":"沖縄県那覇市おもろまち４丁目４番地 サンエー那覇メインプレイス２Ｆ","grid":[26.225619,127.695062],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー那覇店","address":"沖縄県那覇市金城５－１０－２ イオン那覇３階","grid":[26.196957,127.665768],"machineNum":3,"prefId":47},{"name":"ゲームランドジョイジャングル美浜店","address":"沖縄県中頭郡北谷町美浜１５－６８ ドラゴンパレス２階","grid":[26.317335,127.757211],"machineNum":1,"prefId":47},{"name":"サンエー西原シティ","address":"沖縄県中頭郡西原町嘉手刈１３０ サンエー西原シティ","grid":[26.222835,127.758839],"machineNum":1,"prefId":47},{"name":"サンエー西原店ゲームコーナー","address":"沖縄県中頭郡西原町嘉手苅１３０－２ サンエー西原シティ２Ｆ","grid":[26.224348,127.764736],"machineNum":1,"prefId":47},{"name":"モーリーファンタジーライカム店","address":"沖縄県中頭郡北中城村アワセ土地区画整理事業地内 イオンモール沖縄ライカム","grid":[26.301078,127.793065],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー北谷店","address":"沖縄県中頭郡北谷町字美浜８－３ イオン北谷２階","grid":[26.31439,127.75719],"machineNum":3,"prefId":47},{"name":"楽市楽座イオンモール沖縄ライカム","address":"沖縄県中頭郡北中城村アワセ土地区画整理事業区域内４街区 イオンモール沖縄ライカムライカム４階","grid":[26.301078,127.793065],"machineNum":1,"prefId":47},{"name":"アミュージアム南風原店","address":"沖縄県島尻郡南風原町字宮城３７１－１ アミュージアム南風原","grid":[26.203629,127.73615],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー南風原店","address":"沖縄県島尻郡南風原町字宮平２６４ イオン南風原２階","grid":[26.200854,127.737735],"machineNum":3,"prefId":47},{"name":"(南投)家樂福：南投店","address":"南投縣南投市三和三路21號","grid":[23.905666,120.689121],"machineNum":1,"prefId":48},{"name":"(南投)家樂福：埔里店","address":"南投縣埔里鎮信義路1029號","grid":[23.970817,120.957123],"machineNum":1,"prefId":48},{"name":"(台中)光南大批發：台中三民店","address":"台中市北區三民路三段125號B1","grid":[24.148807,120.683315],"machineNum":1,"prefId":48},{"name":"(台中)鼎美玩具：台中中友","address":"台中市北區三民路3段179號8樓","grid":[24.152682,120.685118],"machineNum":1,"prefId":48},{"name":"(台中)家樂福：崇德店","address":"台中市北區崇德路一段635號","grid":[24.167703,120.684903],"machineNum":1,"prefId":48},{"name":"(台中)玩具e哥：台中文心店","address":"台中市北屯區文心路四段556號","grid":[24.172111,120.685056],"machineNum":1,"prefId":48},{"name":"(台中)王者娛樂休閒館","address":"台中市南屯區惠文路497號一樓","grid":[24.14598,120.643343],"machineNum":1,"prefId":48},{"name":"(台中)家樂福：文心店","address":"台中市南屯區文心路一段521號","grid":[24.153917,120.646406],"machineNum":1,"prefId":48},{"name":"(台中)TOYWORLD：台中麗寶","address":"台中市后里區福容路201號","grid":[24.324389,120.699249],"machineNum":1,"prefId":48},{"name":"(台中)TOYWORLD：台中秀泰廣場站前店","address":"台中市東區南京路66號2樓","grid":[24.140215,120.691843],"machineNum":1,"prefId":48},{"name":"(台中)玩具反斗城：台中新時代","address":"台中市東區區復興路四段186號6樓","grid":[24.136044,120.687486],"machineNum":1,"prefId":48},{"name":"(台中)迪貝堡親子樂園：台中新時代店","address":"台中市東區復興路四段186號10樓","grid":[24.136306,120.687717],"machineNum":1,"prefId":48},{"name":"(台中)家樂福：沙鹿店","address":"台中市沙鹿區光華路336號","grid":[24.242418,120.565204],"machineNum":1,"prefId":48},{"name":"(台中)玩具反斗城：台中金典","address":"台中市西區健行路1049號6樓","grid":[24.155738,120.663261],"machineNum":1,"prefId":48},{"name":"(台中)FUNBOX：台中大遠百","address":"台中市西區台灣大道3段261號5F","grid":[24.16262,120.649754],"machineNum":1,"prefId":48},{"name":"(台中)德周玩具：淺草店","address":"台中市西屯區台灣大道四段1086號","grid":[24.184133,120.614969],"machineNum":1,"prefId":48},{"name":"(台中)鼎美玩具：台中新光","address":"台中市西屯區台灣大道3段301號6樓","grid":[24.165257,120.643708],"machineNum":1,"prefId":48},{"name":"(台中)玩具反斗城：台中老虎城店","address":"台中市西屯區河南路三段120號B2","grid":[24.164247,120.638124],"machineNum":1,"prefId":48},{"name":"(台中)家樂福：青海店","address":"台中市西屯區青海路2段207-18號","grid":[24.170472,120.644874],"machineNum":1,"prefId":48},{"name":"(台中)家樂福：中清店","address":"台中市西屯區中清路三段436號","grid":[24.20641,120.652542],"machineNum":1,"prefId":48},{"name":"(台中)SEGA：老虎城店","address":"台中市西屯區河南路三段120號B2樓","grid":[24.164247,120.638124],"machineNum":1,"prefId":48},{"name":"(台中)FUNBOX：豐原太平洋","address":"台中市豐原區復興路2號5樓","grid":[24.250988,120.720606],"machineNum":1,"prefId":48},{"name":"(台中)家樂福：豐原店","address":"台中市豐原區成功路500號","grid":[24.252028,120.706136],"machineNum":1,"prefId":48},{"name":"(台北)鼎美玩具：南西新光","address":"台北市中山區南京西路12號6樓","grid":[25.052304,121.521105],"machineNum":1,"prefId":48},{"name":"(台北)TOYWORLD：美麗華","address":"台北市中山區敬業三路22號4樓","grid":[25.083482,121.556296],"machineNum":1,"prefId":48},{"name":"(台北)玩具反斗城：新生店","address":"台北市中山區新生北路二段28號1樓","grid":[25.054047,121.527113],"machineNum":1,"prefId":48},{"name":"(台北)FUNBOX：寶慶遠東","address":"台北市中正區寶慶路32號5樓","grid":[25.041501,121.509111],"machineNum":1,"prefId":48},{"name":"(台北)鼎美玩具：站前新光","address":"台北市中正區忠孝西路一段66號8樓","grid":[25.046128,121.515325],"machineNum":1,"prefId":48},{"name":"(台北)玩具e哥：台北大道一店","address":"台北市中正區市民大道一段100號","grid":[25.048704,121.515045],"machineNum":1,"prefId":48},{"name":"(台北)玩具e哥：台北三創店","address":"台北市中正區市民大道三段2號6樓","grid":[25.04549,121.531129],"machineNum":1,"prefId":48},{"name":"(台北)永淇樂園地下街","address":"台北市中正區市民大道一段100號","grid":[25.048704,121.515045],"machineNum":1,"prefId":48},{"name":"(台北)偉曜玩具：台北地下街","address":"台北市中正區市民大道一段100號","grid":[25.048704,121.515045],"machineNum":1,"prefId":48},{"name":"(台北)中興精品","address":"台北市中正區中華路二段303巷3號","grid":[25.02941,121.504933],"machineNum":1,"prefId":48},{"name":"全家便利商店：新安興店","address":"台北市信義區松仁路238號","grid":[25.024873,121.569216],"machineNum":1,"prefId":48},{"name":"(台北)鼎美玩具：信義新光","address":"台北市信義區松高路12號5樓","grid":[25.038749,121.56667],"machineNum":1,"prefId":48},{"name":"(台北)奇蹟時代玩具精品店","address":"台北市信義區和平東路三段391巷6號","grid":[25.020008,121.557747],"machineNum":1,"prefId":48},{"name":"(台北)金玉堂：葫洲店","address":"台北市內湖區民權東路六段296巷20號2樓","grid":[25.072335,121.60595],"machineNum":1,"prefId":48},{"name":"(台北)玩具e哥：內湖康寧店","address":"台北市內湖區康寧路三段74號2樓","grid":[25.069951,121.611469],"machineNum":1,"prefId":48},{"name":"(台北)玩具反斗城：內湖家樂福店","address":"台北市內湖區民善街88號4樓","grid":[25.060235,121.575349],"machineNum":1,"prefId":48},{"name":"(台北)大潤發：內湖二店","address":"台北市內湖區舊宗路一段188號","grid":[25.062902,121.575896],"machineNum":1,"prefId":48},{"name":"(台北)大潤發：內湖一店","address":"台北市內湖區舊宗路一段128號","grid":[25.060968,121.578039],"machineNum":1,"prefId":48},{"name":"(台北)家樂福：內湖店","address":"台北市內湖區民善街88號3樓","grid":[25.060235,121.575349],"machineNum":1,"prefId":48},{"name":"(台北)隆興文具禮品行","address":"台北市內湖區港墘路82巷13號","grid":[25.081119,121.577059],"machineNum":1,"prefId":48},{"name":"(台北)聖橋行","address":"台北市內湖區內湖路2段76巷18號","grid":[25.07917,121.580957],"machineNum":1,"prefId":48},{"name":"(台北)卡通巴士","address":"台北市北投區光明路138號2樓","grid":[25.134149,121.502435],"machineNum":1,"prefId":48},{"name":"(台北)鴻成行","address":"台北市北投區實踐街65號","grid":[25.115308,121.509924],"machineNum":1,"prefId":48},{"name":"(台北)樂巧：南港店","address":"台北市南港區忠孝東路七段369號C棟6F","grid":[25.052558,121.604518],"machineNum":1,"prefId":48},{"name":"(台北)家樂福：南港店","address":"台北市南港區南港路二段20巷5號","grid":[25.053857,121.596619],"machineNum":1,"prefId":48},{"name":"(台北)鼎美玩具：天母新光","address":"台北市士林區天母東路68號6樓","grid":[25.11792,121.53393],"machineNum":1,"prefId":48},{"name":"(台北)101玩具：高島屋","address":"台北市士林區忠誠路二段55號3樓","grid":[25.111826,121.531522],"machineNum":1,"prefId":48},{"name":"(台北)紅蘋果","address":"台北市士林區天母西路63號1樓","grid":[25.118596,121.526447],"machineNum":1,"prefId":48},{"name":"(台北)家樂福：天母店","address":"台北市士林區德行西路47號","grid":[25.105749,121.52274],"machineNum":1,"prefId":48},{"name":"(台北)偉曜玩具：天母SOGO","address":"台北市士林區中山北路六段77號7樓","grid":[25.104745,121.524536],"machineNum":1,"prefId":48},{"name":"(台北)101玩具：長安店","address":"台北市大同區長安西路143號","grid":[25.051481,121.514925],"machineNum":1,"prefId":48},{"name":"(台北)芃芃玩具店","address":"台北市大同區太原路100號1樓","grid":[25.052449,121.515662],"machineNum":1,"prefId":48},{"name":"(台北)家樂福：重慶店","address":"台北市大同區重慶北路2段171號","grid":[25.059176,121.513836],"machineNum":1,"prefId":48},{"name":"(台北)正昇文具行","address":"台北市大安區羅斯福路3段277號地下1樓","grid":[25.018236,121.531117],"machineNum":1,"prefId":48},{"name":"(台北)統一書香號","address":"台北市大安區通安街64號1樓","grid":[25.030806,121.553187],"machineNum":1,"prefId":48},{"name":"(台北)偉曜玩具：忠孝SOGO","address":"台北市大安區忠孝東路四段45號10樓","grid":[25.041872,121.544865],"machineNum":1,"prefId":48},{"name":"(台北)永業文具行","address":"台北市大安區永康街6巷16號1樓","grid":[25.032663,121.529118],"machineNum":1,"prefId":48},{"name":"(台北)愛買：景美店","address":"台北市文山區景中街30巷12號","grid":[24.992179,121.542446],"machineNum":1,"prefId":48},{"name":"(台北)鈺峰行","address":"台北市文山區景華街194號","grid":[24.99844,121.547829],"machineNum":1,"prefId":48},{"name":"(台北)玩具反斗城：敦化店","address":"台北市松山區南京東路三段337號7樓","grid":[25.052006,121.548289],"machineNum":1,"prefId":48},{"name":"(台北)玩具反斗城：京華城","address":"台北市松山區八德路四段138號8樓","grid":[25.048118,121.561822],"machineNum":1,"prefId":48},{"name":"(台北)家樂福：三民店","address":"台北市松山區三民路160號","grid":[25.061641,121.563347],"machineNum":1,"prefId":48},{"name":"(台北)原紹商行","address":"台北市松山區民生東路五段184-6號","grid":[25.058434,121.56392],"machineNum":1,"prefId":48},{"name":"(台北)興育聖文化事業有限公司","address":"台北市萬華區桂林路71號1樓","grid":[25.038434,121.502278],"machineNum":1,"prefId":48},{"name":"(台北)家樂福：桂林店","address":"台北市萬華區桂林路1號","grid":[25.037703,121.506182],"machineNum":1,"prefId":48},{"name":"(台南)鼎美玩具：台南新光","address":"台南市中西區中山路162號8樓","grid":[22.995501,120.20982],"machineNum":1,"prefId":48},{"name":"(台南)鼎美玩具：西門新光","address":"台南市中西區西門路一段658號3樓","grid":[22.986779,120.198797],"machineNum":1,"prefId":48},{"name":"(台南)家樂福：仁德店","address":"台南市仁德區中山路711號","grid":[22.972372,120.246765],"machineNum":1,"prefId":48},{"name":"(台南)領先書局","address":"台南市北區和緯路三段228號","grid":[23.010862,120.197736],"machineNum":1,"prefId":48},{"name":"(台南)FUNBOX：台南遠百","address":"台南市北區前鋒路210號4樓","grid":[22.996286,120.214308],"machineNum":1,"prefId":48},{"name":"(台南)大潤發：台南店","address":"台南市北區臨安路2段310號","grid":[23.004488,120.203569],"machineNum":1,"prefId":48},{"name":"(台南)金玉堂：海佃店","address":"台南市安南區海佃路一段361號","grid":[23.027558,120.190754],"machineNum":1,"prefId":48},{"name":"(台南)玩具反斗城：台南安平家樂福","address":"台南市安平區中華西路二段16號2樓","grid":[22.988433,120.187106],"machineNum":1,"prefId":48},{"name":"(台南)玩具e哥：台南新營店","address":"台南市新營區復興路155之2號","grid":[23.302942,120.307737],"machineNum":1,"prefId":48},{"name":"(台南)金玉堂：新營店","address":"台南市新營區三民路96號","grid":[23.307129,120.315272],"machineNum":1,"prefId":48},{"name":"(台南)迪貝堡親子樂園-國賓店","address":"台南市東區中華路一段66-1號1樓","grid":[22.996257,120.234263],"machineNum":1,"prefId":48},{"name":"(台南)玩具反斗城：南紡購物中心","address":"台南市東區中華東路1段366號4樓","grid":[22.993754,120.234443],"machineNum":1,"prefId":48},{"name":"(台南)FUNBOX：南紡購物中心","address":"台南市東區中華東路1段366號4樓","grid":[22.993754,120.234443],"machineNum":1,"prefId":48},{"name":"(台南)老虎歡樂世界：愛買台南","address":"台南市永康區中正南路533號","grid":[23.03454,120.228849],"machineNum":1,"prefId":48},{"name":"(台南)金玉堂：中華店","address":"台南市永康區中華路249號","grid":[23.00616,120.234947],"machineNum":1,"prefId":48},{"name":"(台南)家樂福：中華店","address":"台南市永康區中華二路350號","grid":[23.008494,120.230799],"machineNum":1,"prefId":48},{"name":"(台南)家樂福：中正店","address":"台南市永康區中正南路358號","grid":[23.032797,120.228612],"machineNum":1,"prefId":48},{"name":"(台東)大潤發：台東店","address":"台東縣台東市中興路3段592號","grid":[22.771554,121.108672],"machineNum":1,"prefId":48},{"name":"(嘉義)玩具e哥：嘉義忠孝店","address":"嘉義市東區忠孝路576號","grid":[23.495664,120.452471],"machineNum":1,"prefId":48},{"name":"(嘉義)TOYWORLD：嘉義秀泰","address":"嘉義市西區文化路299號2樓","grid":[23.485284,120.447663],"machineNum":1,"prefId":48},{"name":"(嘉義)玩具反斗城：嘉義家樂福","address":"嘉義市西區博愛路二段461號1樓","grid":[23.471311,120.43119],"machineNum":1,"prefId":48},{"name":"(嘉義)嘉舜遊戲王模型玩具店","address":"嘉義市東區嘉北街72號","grid":[23.493924,120.454191],"machineNum":1,"prefId":48},{"name":"(嘉義)家樂福：嘉義店","address":"嘉義市西區博愛路二段461號","grid":[23.471311,120.43119],"machineNum":1,"prefId":48},{"name":"(嘉義)興義發記","address":"嘉義市西區中正路433號","grid":[23.478704,120.448506],"machineNum":1,"prefId":48},{"name":"(基隆)全家樂玩具店","address":"基隆市中正區中正區義二路12號","grid":[25.130787,121.745059],"machineNum":1,"prefId":48},{"name":"(基隆)好兒童圖書玩具專賣店","address":"基隆市仁愛區愛四路3-3號1樓","grid":[25.12815,121.743387],"machineNum":1,"prefId":48},{"name":"(宜蘭)玩具反斗城：宜蘭店","address":"宜蘭縣宜蘭市民權路二段38巷2號B2","grid":[24.753507,121.750129],"machineNum":1,"prefId":48},{"name":"(宜蘭)FUNBOX：新月廣場","address":"宜蘭縣宜蘭市民權路二段38巷6號3F","grid":[24.753507,121.750129],"machineNum":1,"prefId":48},{"name":"(宜蘭)華泰玩具：宜蘭","address":"宜蘭縣宜蘭市林森路12號    (倉庫辦公:舊城東路35-1號)","grid":[24.756757,121.755893],"machineNum":1,"prefId":48},{"name":"(宜蘭)玩具e哥：羅東店","address":"宜蘭縣羅東鎮興東路242之1號","grid":[24.683007,121.770154],"machineNum":1,"prefId":48},{"name":"(宜蘭)蟲蟲底家","address":"宜蘭縣羅東鎮忠孝路113號","grid":[24.678355,121.76547],"machineNum":1,"prefId":48},{"name":"(屏東)湯姆熊：屏東中正店","address":"屏東縣屏東市中正路439號","grid":[22.634022,120.541524],"machineNum":1,"prefId":48},{"name":"(屏東)玩具e哥：屏東逢甲店","address":"屏東縣屏東市逢甲路88號","grid":[22.67054,120.486724],"machineNum":1,"prefId":48},{"name":"(屏東)FUNBOX：屏東太平洋","address":"屏東縣屏東市中正路72號5樓","grid":[22.655844,120.470326],"machineNum":1,"prefId":48},{"name":"(屏東)FUNBOX：屏東環球","address":"屏東縣屏東市仁愛路90號4樓","grid":[22.673267,120.493402],"machineNum":1,"prefId":48},{"name":"(屏東)金玉堂：潮州店","address":"屏東縣潮州鎮中山路177-1號","grid":[22.549708,120.537594],"machineNum":1,"prefId":48},{"name":"(彰化)金玉堂：員林店","address":"彰化縣員林市大同路一段348號","grid":[23.963429,120.579715],"machineNum":1,"prefId":48},{"name":"(彰化)大潤發：員林店","address":"彰化縣埔心鄉瓦南村中山路319號","grid":[23.947226,120.563704],"machineNum":1,"prefId":48},{"name":"(彰化)FUNBOX：彰化家樂福","address":"彰化縣彰化市金馬路二段321號2F","grid":[24.094506,120.542444],"machineNum":1,"prefId":48},{"name":"(彰化)家樂福：彰化店","address":"彰化縣彰化市金馬路二段321號","grid":[24.094506,120.542444],"machineNum":1,"prefId":48},{"name":"(新北)玩具反斗城：蘆洲家樂福","address":"新北市三重區五華街282號4樓","grid":[25.088002,121.486473],"machineNum":1,"prefId":48},{"name":"(新北)愛買：三重店","address":"新北市三重區中正北路193巷45號","grid":[25.071368,121.476013],"machineNum":1,"prefId":48},{"name":"(新北)奇樂多歡樂天地：三和店","address":"新北市三重區中央北路26號2樓","grid":[25.064296,121.500576],"machineNum":1,"prefId":48},{"name":"(新北)亞利文具行","address":"新北市三重區三民街175巷28號1樓","grid":[25.0661,121.483901],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：蘆洲店","address":"新北市三重區五華街282號","grid":[25.087959,121.486499],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：重新店","address":"新北市三重區重新路五段654號","grid":[25.043293,121.467512],"machineNum":1,"prefId":48},{"name":"(新北)玩具反斗城：中和環球","address":"新北市中和區中山路三段122號3樓","grid":[25.006673,121.474779],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：中和店","address":"新北市中和區中山路2段295號","grid":[25.001998,121.496023],"machineNum":1,"prefId":48},{"name":"(新北)金玉堂：中和店","address":"新北市中和區中和路192號","grid":[24.999547,121.505134],"machineNum":1,"prefId":48},{"name":"(新北)玩具E哥-土城中央店(土城日月光店)","address":"新北市土城區中央路二段61巷11號","grid":[24.978793,121.443004],"machineNum":1,"prefId":48},{"name":"(新北)大潤發：土城店","address":"新北市土城區永安街25號","grid":[24.963798,121.434273],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：土城店","address":"新北市土城區青雲路152號","grid":[24.98336,121.458923],"machineNum":1,"prefId":48},{"name":"(新北)197批發中心","address":"新北市土城區延和路197號","grid":[24.99039,121.469419],"machineNum":1,"prefId":48},{"name":"(新北)旺旺虎歡樂世界：新店店","address":"新北市新店區建國路268號3樓","grid":[24.983219,121.537754],"machineNum":1,"prefId":48},{"name":"(新北)小獅王文具店","address":"新北市新店區三民路69號","grid":[24.971207,121.536283],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：新店店","address":"新北市新店區中興路3段1號","grid":[24.976105,121.546595],"machineNum":1,"prefId":48},{"name":"(新北)金玉堂：新泰店","address":"新北市新莊區新泰路85號","grid":[25.0345,121.449072],"machineNum":1,"prefId":48},{"name":"(新北)旺旺虎歡樂世界：新莊店","address":"新北市新莊區幸福路763號","grid":[25.048858,121.44785],"machineNum":1,"prefId":48},{"name":"(新北)微學館：新莊店","address":"新北市新莊區中華路2段20之1號","grid":[25.044569,121.4533],"machineNum":1,"prefId":48},{"name":"(新北)文薪書城","address":"新北市新莊區民安路222號","grid":[25.022508,121.425976],"machineNum":1,"prefId":48},{"name":"(新北)玩具ｅ哥：板橋新埔","address":"新北市板橋區文化路一段360號B1","grid":[25.023628,121.4688],"machineNum":1,"prefId":48},{"name":"(新北)鼎美玩具-板橋遠百","address":"新北市板橋區中山路一段152號8樓","grid":[25.01096,121.464454],"machineNum":1,"prefId":48},{"name":"(新北)FUNBOX：板橋大遠百","address":"新北市板橋區新站路28號5樓","grid":[25.013651,121.466765],"machineNum":1,"prefId":48},{"name":"(新北)愛買：南雅店","address":"新北市板橋區貴興路101號","grid":[25.002656,121.456195],"machineNum":1,"prefId":48},{"name":"(新北)微學館：板橋店","address":"新北市板橋區民生路三段11號","grid":[25.023539,121.467243],"machineNum":1,"prefId":48},{"name":"(新北)POPA：板橋麗寶","address":"新北市板橋區縣民大道二段3號","grid":[25.012375,121.461954],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：板橋店","address":"新北市板橋區三民路二段31號","grid":[25.017667,121.479387],"machineNum":1,"prefId":48},{"name":"(新北)Fish玩具屋","address":"新北市板橋區中山路二段151號","grid":[25.016685,121.475549],"machineNum":1,"prefId":48},{"name":"(新北)鼎美-林口三井","address":"新北市林口區文化三路一段356號2樓20520櫃","grid":[25.070735,121.363961],"machineNum":1,"prefId":48},{"name":"(新北)眠羊星樂園","address":"新北市林口區文化三路一段402巷2號","grid":[25.073748,121.368837],"machineNum":1,"prefId":48},{"name":"(新北)文聖書局：林口","address":"新北市林口區中正路86號","grid":[25.077354,121.394403],"machineNum":1,"prefId":48},{"name":"(新北)SEGA：林口三井","address":"新北市林口區文化三路一段356號2樓","grid":[25.070735,121.363961],"machineNum":1,"prefId":48},{"name":"(新北)旺旺虎歡樂世界：樹林店","address":"新北市樹林區博愛街89號","grid":[24.991531,121.427238],"machineNum":1,"prefId":48},{"name":"(新北)微學館：樹林店","address":"新北市樹林區中山路一段48號","grid":[24.992159,121.42356],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：北大店","address":"新北市樹林區大雅路288號","grid":[24.947726,121.379678],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：樹林店","address":"新北市樹林區大安路118號3F","grid":[24.997457,121.421702],"machineNum":1,"prefId":48},{"name":"(新北)FUNBOX：比漾廣場","address":"新北市永和區中山路一段258號4F","grid":[25.007832,121.507637],"machineNum":1,"prefId":48},{"name":"(新北)愛買：永和店","address":"新北市永和區民生路46巷56號","grid":[24.99648,121.521019],"machineNum":1,"prefId":48},{"name":"(新北)席滿客漫畫影音書坊","address":"新北市永和區中正路280號2樓","grid":[24.998724,121.517135],"machineNum":1,"prefId":48},{"name":"(新北)FUNBOX：汐止遠雄","address":"新北市汐止區新台五路一段93-99號","grid":[25.061945,121.648075],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：汐科店","address":"新北市汐止區新台五路一段99號","grid":[25.061997,121.648484],"machineNum":1,"prefId":48},{"name":"(新北)FUNBOX：淡水中正","address":"新北市淡水區中正路159號","grid":[25.170975,121.438792],"machineNum":1,"prefId":48},{"name":"(新北)永崎利漁人碼頭","address":"新北市淡水區淡海路72巷30弄18號2樓","grid":[25.182501,121.425154],"machineNum":1,"prefId":48},{"name":"(新北)家樂福：淡新店","address":"新北市淡水區中山北路二段383號","grid":[25.187023,121.443973],"machineNum":1,"prefId":48},{"name":"(新北)薪友文具行","address":"新北市蘆洲區民族路26號1樓","grid":[25.084098,121.47626],"machineNum":1,"prefId":48},{"name":"春大地","address":"新北市蘆洲區中正路117號","grid":[25.08422,121.469638],"machineNum":1,"prefId":48},{"name":"(新竹)玩具反斗城：新竹巨城","address":"新竹市東區中央路229號7樓","grid":[24.809486,120.974721],"machineNum":1,"prefId":48},{"name":"(新竹)愛買：新竹店","address":"新竹市東區公道五路二段469號","grid":[24.804446,120.992971],"machineNum":1,"prefId":48},{"name":"(新竹)大潤發：湳雅店","address":"新竹市北區湳雅街97號","grid":[24.818186,120.970707],"machineNum":1,"prefId":48},{"name":"(新竹)TG運動館：新竹店","address":"新竹市東區關東路23巷66號","grid":[24.782903,121.020836],"machineNum":1,"prefId":48},{"name":"(新竹)偉曜玩具：新竹SOGO","address":"新竹市東區民族路2號6樓","grid":[24.802733,120.971812],"machineNum":1,"prefId":48},{"name":"(新竹)鼎美玩具：新竹遠東","address":"新竹市東區西大路323號6樓","grid":[24.801935,120.964837],"machineNum":1,"prefId":48},{"name":"(新竹)TOYWORLD：6+Plaza廣場","address":"新竹縣竹北市復興三路二段168號3樓","grid":[24.807625,121.03831],"machineNum":1,"prefId":48},{"name":"(新竹)家樂福：竹北店","address":"新竹縣竹北市光明六路89號","grid":[24.826755,121.00949],"machineNum":1,"prefId":48},{"name":"(桃園)鼎美玩具-中壢大江","address":"桃園縣中壢市中園路501號4樓","grid":[24.986246,121.238163],"machineNum":1,"prefId":48},{"name":"(桃園)玩具e哥：桃園環東店","address":"桃園市中壢區環中東路561號","grid":[24.957834,121.249549],"machineNum":1,"prefId":48},{"name":"(桃園)TOYWORLD：大江店","address":"桃園市中壢區中園路二段501號4樓","grid":[25.001528,121.228475],"machineNum":1,"prefId":48},{"name":"(桃園)玩具反斗城：中原家樂福","address":"桃園市中壢區中華路二段501號3樓","grid":[24.962397,121.23241],"machineNum":1,"prefId":48},{"name":"(桃園)FUNBOX：華泰名品城","address":"桃園市中壢區春德路189號1樓","grid":[25.014538,121.212791],"machineNum":1,"prefId":48},{"name":"(桃園)旺旺虎歡樂世界：中壢店","address":"桃園市中壢區中正路51號4樓","grid":[24.954106,121.224092],"machineNum":1,"prefId":48},{"name":"(桃園)新都市：久和店","address":"桃園市中壢區九和一街52號","grid":[24.961569,121.22433],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：內壢店","address":"桃園市中壢區中華路一段450號","grid":[24.972756,121.253448],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：中壢店","address":"桃園市中壢區中山東路二段510號","grid":[24.946614,121.244573],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：中原店","address":"桃園市中壢區中華路二段501號","grid":[24.962397,121.23241],"machineNum":1,"prefId":48},{"name":"(桃園)偉曜玩具：中壢SOGO","address":"桃園市中壢區元化路357號8樓","grid":[24.962727,121.223824],"machineNum":1,"prefId":48},{"name":"(桃園)SEGA：大江店","address":"桃園市中壢區中園路二段501號4樓","grid":[25.001528,121.228475],"machineNum":1,"prefId":48},{"name":"(桃園)大潤發：八德店","address":"桃園市八德區介壽路2段148號","grid":[24.954106,121.298139],"machineNum":1,"prefId":48},{"name":"(桃園)文聖書局：大湳","address":"桃園市八德區廣福路28號","grid":[24.959001,121.298474],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：八德店","address":"桃園市八德區介壽路一段728號","grid":[24.96491,121.299258],"machineNum":1,"prefId":48},{"name":"(桃園)大潤發：平鎮店","address":"桃園市平鎮區南東路57-1號","grid":[24.920447,121.213214],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：平鎮店","address":"桃園市平鎮區坤慶路1號","grid":[24.902636,121.212451],"machineNum":1,"prefId":48},{"name":"(桃園)一刻館","address":"桃園市桃園區中華路43號2樓","grid":[24.990914,121.31088],"machineNum":1,"prefId":48},{"name":"全家便利商店：桃園同德店","address":"桃園市桃園區中正路1316號1樓","grid":[25.02084,121.296585],"machineNum":1,"prefId":48},{"name":"(桃園)TOYWORLD：桃園統領店","address":"桃園市桃園區中正路61號4樓","grid":[24.991061,121.312373],"machineNum":1,"prefId":48},{"name":"(桃園)鼎美玩具：桃園大有新光","address":"桃園市桃園區大有路189號5樓","grid":[25.008132,121.320028],"machineNum":1,"prefId":48},{"name":"(桃園)玩具反斗城：桃園中華","address":"桃園市桃園區中華路3號3樓","grid":[24.991038,121.311607],"machineNum":1,"prefId":48},{"name":"(桃園)FUNBOX：桃園站前新光","address":"桃園市桃園區中正路19號8樓","grid":[24.989978,121.312624],"machineNum":1,"prefId":48},{"name":"(桃園)愛買：桃園店","address":"桃園市桃園區中山路939號","grid":[24.984834,121.286172],"machineNum":1,"prefId":48},{"name":"(桃園)順盛國際木業有限公司","address":"桃園市桃園區三民路一段131號1樓","grid":[25.000544,121.319366],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：經國店","address":"桃園市桃園區經國路369號","grid":[25.015949,121.305012],"machineNum":1,"prefId":48},{"name":"(桃園)家樂福：桃園店","address":"桃園市桃園區春日路1593號","grid":[25.02416,121.306335],"machineNum":1,"prefId":48},{"name":"(桃園)愛買：楊梅店","address":"桃園市楊梅區中山北路二段23巷6號","grid":[24.907763,121.168057],"machineNum":1,"prefId":48},{"name":"(桃園)新興模型玩具商行","address":"桃園市楊梅區環東路484號","grid":[24.910591,121.156736],"machineNum":1,"prefId":48},{"name":"(桃園)老虎歡樂世界：南崁店","address":"桃園市蘆竹區南山路一段2-5號","grid":[25.049376,121.291869],"machineNum":1,"prefId":48},{"name":"(桃園)TOYWORLD：桃園台茂","address":"桃園市蘆竹區南崁路一段112號4樓","grid":[25.05366,121.288565],"machineNum":1,"prefId":48},{"name":"(桃園)玩具反斗城：家樂福南竹","address":"桃園市蘆竹區桃園街118號","grid":[25.047746,121.290881],"machineNum":1,"prefId":48},{"name":"(桃園)金玉堂：龜山店","address":"桃園市龜山區新興里自強南路75號及77號","grid":[24.992779,121.339139],"machineNum":1,"prefId":48},{"name":"(桃園)旺旺虎歡樂世界：桃園店","address":"桃園市龜山區春日路618號","grid":[25.009333,121.311635],"machineNum":1,"prefId":48},{"name":"(桃園)微學館：長庚店","address":"桃園市龜山區復興一路158號1樓","grid":[25.058275,121.366393],"machineNum":1,"prefId":48},{"name":"(花蓮)家樂福：花蓮店","address":"花蓮縣新城鄉嘉里路15號","grid":[24.014638,121.610066],"machineNum":1,"prefId":48},{"name":"(花蓮)老虎歡樂世界：花蓮愛買店","address":"花蓮市和平路581號B1","grid":[23.974515,121.600853],"machineNum":1,"prefId":48},{"name":"(花蓮)FUNBOX：花蓮遠東","address":"花蓮縣花蓮市和平路581號2樓","grid":[23.978358,121.599798],"machineNum":1,"prefId":48},{"name":"(花蓮)玩具e哥：花蓮和平店","address":"花蓮縣花蓮市和平路449號","grid":[23.975675,121.601979],"machineNum":1,"prefId":48},{"name":"(苗栗)家樂福：苗栗店","address":"苗栗縣苗栗市國華路599號","grid":[24.573759,120.817646],"machineNum":1,"prefId":48},{"name":"(苗栗)SEGA：苗栗尚順","address":"苗栗縣頭份鎮中央路105號6樓","grid":[24.689045,120.903999],"machineNum":1,"prefId":48},{"name":"(苗栗)就是要玩創意館","address":"苗栗縣頭份日新街42號","grid":[24.686441,120.91052],"machineNum":1,"prefId":48},{"name":"(金門)家樂福：金門店","address":"金門縣金寧鄉伯玉路2段223號","grid":[24.432014,118.323677],"machineNum":1,"prefId":48},{"name":"(雲林)FUNBOX：斗六家樂福","address":"雲林縣斗六市雲林路二段297號","grid":[23.701744,120.529866],"machineNum":1,"prefId":48},{"name":"(雲林)玩具ｅ哥：斗六保長店","address":"雲林縣斗六市保長路2號","grid":[23.705444,120.534316],"machineNum":1,"prefId":48},{"name":"(雲林)家樂福：虎尾店","address":"雲林縣虎尾鎮立新街96號","grid":[23.70499,120.426695],"machineNum":1,"prefId":48},{"name":"(高雄)老虎歡樂世界：高雄澄清","address":"高雄市三民區澄清路339號","grid":[22.63754,120.344456],"machineNum":1,"prefId":48},{"name":"(高雄)金玉堂：鼎中店","address":"高雄市三民區金鼎路339號","grid":[22.664883,120.319558],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：鼎山店","address":"高雄市三民區鼎山街529號","grid":[22.653099,120.318792],"machineNum":1,"prefId":48},{"name":"(高雄)雄大書局：鼎山店","address":"高雄市三民區鼎山街290號","grid":[22.658452,120.321741],"machineNum":1,"prefId":48},{"name":"(高雄)玩具反斗城：大立百貨","address":"高雄市前金區五福三路59號8樓","grid":[22.621718,120.29748],"machineNum":1,"prefId":48},{"name":"(高雄)大立百貨","address":"高雄市前金區五福三路59號8樓","grid":[22.621718,120.29748],"machineNum":1,"prefId":48},{"name":"(高雄)TOYWORLD：高雄大魯閣","address":"高雄市前鎮區中安路1之1號2樓","grid":[22.582777,120.330912],"machineNum":1,"prefId":48},{"name":"(高雄)玩具反斗城：夢時代","address":"高雄市前鎮區中華五路789號5樓","grid":[22.594904,120.306611],"machineNum":1,"prefId":48},{"name":"(高雄)FUNBOX：夢時代","address":"高雄市前鎮區區中華五路789號5樓","grid":[22.585435,120.309562],"machineNum":1,"prefId":48},{"name":"(高雄)金玉堂：草衙店","address":"高雄市前鎮區佛德街38號","grid":[22.576327,120.322971],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：愛河店","address":"高雄市前鎮區河東路356號B1","grid":[22.63362,120.285843],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：成功店","address":"高雄市前鎮區中華五路1111號","grid":[22.60498,120.304228],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：光華店","address":"高雄市前鎮區光華二路157號","grid":[22.61123,120.317327],"machineNum":1,"prefId":48},{"name":"(高雄)鼎美玩具：新光三多","address":"高雄市前鎮區三多三路213號8樓","grid":[22.614446,120.306778],"machineNum":1,"prefId":48},{"name":"(高雄)偉曜玩具：高雄SOGO","address":"高雄市前鎮區三多三路217號6樓","grid":[22.614212,120.306046],"machineNum":1,"prefId":48},{"name":"(高雄)玩具反斗城：義大店","address":"高雄市大樹區學城路一段12號C區2樓","grid":[22.730388,120.402402],"machineNum":1,"prefId":48},{"name":"(高雄)文仁文具王","address":"高雄市小港區漢民路292號B1","grid":[22.566697,120.353871],"machineNum":1,"prefId":48},{"name":"(高雄)玩具貓模型店","address":"高雄市岡山區岡山路199號","grid":[22.791642,120.295955],"machineNum":1,"prefId":48},{"name":"(高雄)老虎歡樂世界：高雄博愛","address":"高雄市左營區博愛二路320號","grid":[22.663764,120.303662],"machineNum":1,"prefId":48},{"name":"(高雄)鼎美玩具：左營新光","address":"高雄市左營區高鐵路123號5樓","grid":[22.688472,120.310048],"machineNum":1,"prefId":48},{"name":"(高雄)玩具反斗城：新左營環球","address":"高雄市左營區站前北路1號4樓","grid":[22.687544,120.306788],"machineNum":1,"prefId":48},{"name":"(高雄)GAME休閒館：楠梓店","address":"高雄市楠梓區土庫一路60號116櫃位","grid":[22.736215,120.331072],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：楠梓店","address":"高雄市楠梓區楠梓區藍田路288號","grid":[22.727718,120.290442],"machineNum":1,"prefId":48},{"name":"(高雄)金玉堂：後勁店","address":"高雄市楠梓區後昌路77號","grid":[22.719447,120.311461],"machineNum":1,"prefId":48},{"name":"(高雄)酷博書局（酷達）","address":"高雄市橋頭區樹德路52號","grid":[22.760113,120.30478],"machineNum":1,"prefId":48},{"name":"(高雄)文具王：三多店","address":"高雄市苓雅區三多二路290號","grid":[22.618428,120.317359],"machineNum":1,"prefId":48},{"name":"(高雄)玩具反斗城：鳳山家樂福","address":"高雄市鳳山區中山西路236號2樓","grid":[22.628258,120.347818],"machineNum":1,"prefId":48},{"name":"(高雄)百分百文具百貨行","address":"高雄市鳳山區文濱路142號1樓","grid":[22.642341,120.349383],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：鳳山店","address":"高雄市鳳山區中山西路236號","grid":[22.628095,120.347461],"machineNum":1,"prefId":48},{"name":"(高雄)家樂福：五甲店","address":"高雄市鳳山區林森路291號","grid":[22.596515,120.336505],"machineNum":1,"prefId":48},{"name":"(高雄)雄大書局：鳳山店","address":"高雄市鳳山區南榮路161號","grid":[22.601609,120.336446],"machineNum":1,"prefId":48}];

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const leaflet_1 = tslib_1.__importDefault(__webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js"));
const leaflet_heat_1 = tslib_1.__importDefault(__webpack_require__(/*! leaflet.heat */ "./node_modules/leaflet.heat/dist/leaflet-heat.js"));
__webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
__webpack_require__(/*! ../css/map.css */ "./src/css/map.css");
const store_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../data/store.json */ "./src/data/store.json"));
// leafletの上書きなので、インポートそのものにはあんまり意味が無い
// ほんとは以下みたいなのは要らないんだけどこうでもしないとビルド後に消滅しちゃう
console.log(leaflet_heat_1.default);
/** マーカーアイコン */
const icon = leaflet_1.default.icon({
    iconUrl: 'https://www.aikatsu.com/friends/images/playshop/kyoutai.gif',
    iconRetinaUrl: 'https://www.aikatsu.com/friends/images/playshop/kyoutai.gif',
    iconSize: [40, 40],
});
/** 地図の初期ズームレベル */
const zoom = 8;
const map = leaflet_1.default.map('map').setView([35.699024, 139.771062], zoom);
// 地図情報を取ってくるところ
leaflet_1.default.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
/** ヒートマップの座標リスト */
const heatPoints = [];
// マーカーセットとヒートリストへの追加
for (const store of store_json_1.default) {
    // マーカー置く
    const markerGrid = store.grid;
    leaflet_1.default.marker(markerGrid, { icon })
        .addTo(map)
        .bindPopup(`<h3>${store.name}</h3><span>${store.address}</span>`); // クリック時、店名と住所を表示
    // .openPopup();
    // 筐体数に応じてヒートを強くする
    const intensity = 100 + store.machineNum * 10;
    heatPoints.push([store.grid[0], store.grid[1], intensity]);
}
const heatOption = { radius: 25 };
// ヒートマップ描画
leaflet_1.default.heatLayer(heatPoints, heatOption).addTo(map);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map