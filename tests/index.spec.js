import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);

describe('SpotifyWrapper', () => {
    it('should create an instance of SpotifyWrapper', () => {
        const spotifyWrapper = new SpotifyWrapper();
        expect(spotifyWrapper).to.be.instanceOf(SpotifyWrapper);
    });

    it('should receive an apiUrl as parameter', () => {
        const spotifyWrapper = new SpotifyWrapper({ apiUrl: 'http://api.com/v1' });
        expect(spotifyWrapper.apiUrl).to.exist;
        expect(spotifyWrapper.apiUrl).to.be.equal('http://api.com/v1');
    });

    it('should set a default URL case apiUrl is not provided as parameter', () => {
        const spotifyWrapper = new SpotifyWrapper();
        expect(spotifyWrapper.apiUrl).to.exist;
        expect(spotifyWrapper.apiUrl).to.not.be.emtpy;
    });

    it('should receive token as parameter', () => {
        const spotifyWrapper = new SpotifyWrapper({ token: 'SECRET' });
        expect(spotifyWrapper.token).to.exist;
        expect(spotifyWrapper.token).to.be.equal('SECRET');
    });

    describe('Request method', () => {
        let spotifyWrapper;
        let fetchStub;

        beforeEach(() => {
            spotifyWrapper = new SpotifyWrapper({});
            fetchStub = sinon.stub(global, 'fetch');
            fetchStub.resolves({
                json: () => {
                    return { body: 'json' };
                },
            });
        });

        afterEach(() => {
            fetchStub.restore();
        });

        it('should exist', () => {
            expect(spotifyWrapper.request).to.exist;
        });

        it('should call fetch', () => {
            spotifyWrapper.request();
            expect(fetchStub).to.be.calledOnce;
        });

        it('should call fetch with correct URL', () => {
            spotifyWrapper.request('URL');
            expect(fetchStub).to.be.calledWith('URL');
        });

        it('should call fetch with correct headers', () => {
            const spotify = new SpotifyWrapper({ token: 'TOKEN' });

            const headers = {
                headers: {
                    Authorization: 'Bearer TOKEN',
                },
            };

            spotify.request('URL');
            expect(fetchStub).to.be.calledWith('URL', headers);
        });
    });
});
