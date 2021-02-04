"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = albums;

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