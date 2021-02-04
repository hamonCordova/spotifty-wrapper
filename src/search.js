export default function search() {
    return {
        searcher: (query, type) => this.request(`${this.apiUrl}/search?q=${query}&type=${type}`),
        searchArtists: (artist) => this.search.searcher(artist, 'artist'),
        searchAlbums: (album) => this.search.searcher(album, 'album'),
        searchTracks: (track) => this.search.searcher(track, 'track'),
        searchPlaylists: (playlist) => this.search.searcher(playlist, 'playlist'),
    };
}
