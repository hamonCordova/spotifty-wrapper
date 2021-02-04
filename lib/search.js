"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

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