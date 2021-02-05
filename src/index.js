import albums from './albums';
import search from './search';

export default class SpotifyWrapper {
    constructor(config = { apiUrl: 'https://api.spotify.com/v1', token: null }) {
        this.apiUrl = config.apiUrl || 'https://api.spotify.com/v1';
        this.token = config.token;
        this.albums = albums.bind(this)();
        this.search = search.bind(this)();
    }

    request(url) {
        const headers = {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        };

        return fetch(url, headers).then((res) => res.json());
    }
}
