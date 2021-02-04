"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_TOKEN = exports.API_URL = void 0;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var API_TOKEN = 'BQDM35fckoKOMerX7d8lXp78s2lZYgzW8YwWJ0no-LcGdZWyzttP7cCnKH-NK-bw9XkhDez-PvOLWn4tJq-te6V4vs_6GHiJSMIL8LqtwOvLonn2FOdV1dHKFRKwuQPnoS7LfKE2nyR3nw';
exports.API_TOKEN = API_TOKEN;
var HEADERS = {
  headers: {
    Authoriztation: "Bearer ".concat(API_URL)
  }
};
exports.HEADERS = HEADERS;