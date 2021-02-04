import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { API_URL } from '../src/configs';
import SpotifyWrapper from "../src";

chai.use(sinonChai);

describe('Albums', () => {
    let stubFetch;
    let spotifyWrapper;

    beforeEach(() => {
        spotifyWrapper = new SpotifyWrapper();
        stubFetch = sinon.stub(global, 'fetch');
        stubFetch.resolves({
            json: () => {
                return { body: 'json' };
            },
        });
    });

    afterEach(() => {
        stubFetch.restore();
    });

    describe('Smoke tests', () => {
        it('should exists method getAlbum', () => {
            expect(spotifyWrapper.albums.getAlbum()).to.exist;
        });

        it('should exists method getAlbums', () => {
            expect(spotifyWrapper.albums.getAlbums).to.exist;
        });

        it('should exists method getAlbumTracks', () => {
            expect(spotifyWrapper.albums.getAlbumTracks).to.exist;
        });
    });

    describe('getAlbums', () => {
        it('should call fetch method', () => {
            spotifyWrapper.albums.getAlbums('382ObEPsp2rxGrnsizN5TX');
            expect(stubFetch).to.have.been.calledOnce;
        });

        it('should fetch URL with the correct parameters', () => {
            spotifyWrapper.albums.getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
            expect(stubFetch).to.have.been.calledWith(
                `${API_URL}/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo`
            );
        });

        it('should resolve promise', () => {
            return spotifyWrapper.albums.getAlbums('1A2GTWGtFfWp7KSQTwWOyo').then((data) => {
                expect(data).to.be.eql({ body: 'json' });
            });
        });
    });

    describe('getAlbum', () => {
        it('should call fetch method', () => {
            spotifyWrapper.albums.getAlbum('382ObEPsp2rxGrnsizN5TX');
            expect(stubFetch).to.have.been.calledOnce;
        });

        it('should fetch URL with the correct parameters', () => {
            spotifyWrapper.albums.getAlbum('382ObEPsp2rxGrnsizN5TX');
            expect(stubFetch).to.have.been.calledWith(`${API_URL}/albums/382ObEPsp2rxGrnsizN5TX`);
        });

        it('should resolve promise', () => {
            return spotifyWrapper.albums.getAlbum('1A2GTWGtFfWp7KSQTwWOyo').then((data) => {
                expect(data).to.be.eql({ body: 'json' });
            });
        });
    });

    describe('getAlbumTracks', () => {
        it('should call fetch method', () => {
            spotifyWrapper.albums.getAlbumTracks('382ObEPsp2rxGrnsizN5TX');
            expect(stubFetch).to.have.been.calledOnce;
        });

        it('should fetch URL with the correct parameters', () => {
            spotifyWrapper.albums.getAlbumTracks('382ObEPsp2rxGrnsizN5TX');
            expect(stubFetch).to.have.been.calledWith(`${API_URL}/albums/382ObEPsp2rxGrnsizN5TX/tracks`);
        });

        it('should resolve promise', () => {
            return spotifyWrapper.albums.getAlbumTracks('1A2GTWGtFfWp7KSQTwWOyo').then((data) => {
                expect(data).to.be.eql({ body: 'json' });
            });
        });
    });
});
