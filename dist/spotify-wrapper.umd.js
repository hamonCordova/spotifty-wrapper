(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpotifyWrapper"] = factory();
	else
		root["SpotifyWrapper"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./src/index */ "./src/index.js").default;

/***/ }),

/***/ "./src/albums.js":
/*!***********************!*\
  !*** ./src/albums.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ albums)
/* harmony export */ });
function albums() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request("".concat(_this.apiUrl, "/albums/").concat(id));
    },
    getAlbums: function getAlbums(ids) {
      return _this.request("".concat(_this.apiUrl, "/albums?ids=").concat(ids));
    },
    getAlbumTracks: function getAlbumTracks(albumId) {
      return _this.request("".concat(_this.apiUrl, "/albums/").concat(albumId, "/tracks"));
    }
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpotifyWrapper)
/* harmony export */ });
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums */ "./src/albums.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/search.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SpotifyWrapper = /*#__PURE__*/function () {
  function SpotifyWrapper() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      apiUrl: 'https://api.spotify.com/v1',
      token: null
    };

    _classCallCheck(this, SpotifyWrapper);

    this.apiUrl = config.apiUrl || 'https://api.spotify.com/v1';
    this.token = config.token;
    this.albums = _albums__WEBPACK_IMPORTED_MODULE_0__.default.bind(this)();
    this.search = _search__WEBPACK_IMPORTED_MODULE_1__.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: "request",
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: "Bearer ".concat(this.token)
        }
      };
      return fetch(url, headers).then(function (res) {
        return res.json();
      });
    }
  }]);

  return SpotifyWrapper;
}();



/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ search)
/* harmony export */ });
function search() {
  var _this = this;

  return {
    searcher: function searcher(query, type) {
      return _this.request("".concat(_this.apiUrl, "/search?q=").concat(query, "&type=").concat(type));
    },
    searchArtists: function searchArtists(artist) {
      return _this.search.searcher(artist, 'artist');
    },
    searchAlbums: function searchAlbums(album) {
      return _this.search.searcher(album, 'album');
    },
    searchTracks: function searchTracks(track) {
      return _this.search.searcher(track, 'track');
    },
    searchPlaylists: function searchPlaylists(playlist) {
      return _this.search.searcher(playlist, 'playlist');
    }
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./index.js");
/******/ })()
;
});
//# sourceMappingURL=spotify-wrapper.umd.js.map