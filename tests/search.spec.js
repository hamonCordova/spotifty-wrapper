import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { search, searchArtists, searchAlbums, searchPlaylists, searchTracks } from '../src/search';
import { API_URL } from '../src/configs';
import SpotifyWrapper from "../src/index";

global.fetch = require('node-fetch');

chai.use(sinonChai);

describe('Search', () => {
    let fetchedStub;
    let spotifyWrapper;

    beforeEach(() => {
        spotifyWrapper = new SpotifyWrapper();
        fetchedStub = sinon.stub(global, 'fetch');
        fetchedStub.resolves({ json: () => ({ body: 'json' }) });
    });

    afterEach(() => {
        fetchedStub.restore();
    });

    describe('Smoke tests', () => {
        // Generic search
        it('should exists method "search"', () => {
            expect(spotifyWrapper.search.searcher).to.exist;
        });

        it('should exists method "searchArtists"', () => {
            expect(spotifyWrapper.search.searchArtists).to.exist;
        });

        it('should exists method "searchAlbums"', () => {
            expect(spotifyWrapper.search.searchAlbums).to.exist;
        });

        it('should exists method "searchPlaylists"', () => {
            expect(spotifyWrapper.search.searchPlaylists).to.exist;
        });

        it('should exists method "searchTracks"', () => {
            expect(spotifyWrapper.search.searchTracks).to.exist;
        });
    });

    describe('Generic Search', () => {
        it('should call fetch function', () => {
            spotifyWrapper.search.searcher();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call the correct URL to fetch', () => {
            context('passing one type', () => {
                // eslint-disable-next-line no-unused-vars
                const artists = spotifyWrapper.search.searcher('Sabotage', 'artist');
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Sabotage&type=artist`);

                // eslint-disable-next-line no-unused-vars
                const albums = spotifyWrapper.search.searcher('Sabotage', 'album');
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Sabotage&type=album`);
            });

            context('passing multiple types', () => {
                // eslint-disable-next-line no-unused-vars
                const result = spotifyWrapper.search.searcher('Sabotage', ['artist', 'album']);
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Sabotage&type=artist,album`);
            });
        });

        it('should return the JSON data from the Promise', () => {
            fetchedStub.resolves({ json: () => ({ body: 'content' }) });
            const artists = spotifyWrapper.search.searcher('Sabotage', 'artists');
            return artists.then((data) => {
                expect(data).to.be.eql({ body: 'content' });
            });
        });
    });

    describe('Artists Search', () => {
        it('should call fetch method', () => {
            spotifyWrapper.search.searchArtists('Sabotage');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should fetch correct URL', () => {
            spotifyWrapper.search.searchArtists('Sabotage');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Sabotage&type=artist`);
        });
    });

    describe('Albums Search', () => {
        it('should call fetch method', () => {
            spotifyWrapper.search.searchAlbums('Sai da Frente');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should fetch correct URL', () => {
            spotifyWrapper.search.searchAlbums('Sai da Frente');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Sai da Frente&type=album`);
        });
    });

    describe('Tracks Search', () => {
        it('should call fetch method', () => {
            spotifyWrapper.search.searchTracks('Rap é Compromisso');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should fetch correct URL', () => {
            spotifyWrapper.search.searchTracks('Rap é Compromisso');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Rap é Compromisso&type=track`);
        });
    });

    describe('Playlist Search', () => {
        it('should call fetch method', () => {
            spotifyWrapper.search.searchPlaylists('Sabotage');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should fetch correct URL', () => {
            spotifyWrapper.search.searchPlaylists('Sabotage');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Sabotage&type=playlist`);
        });
    });
});
