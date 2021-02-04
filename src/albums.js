export default function albums() {
    return {
        getAlbum: (id) => this.request(`${this.apiUrl}/albums/${id}`),
        getAlbums: (ids) => this.request(`${this.apiUrl}/albums?ids=${ids}`),
        getAlbumTracks: (albumId) => this.request(`${this.apiUrl}/albums/${albumId}/tracks`),
    };
}
