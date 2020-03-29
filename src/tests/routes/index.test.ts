import request from 'supertest';
import http, { Server } from 'http';
import app from '../../app';

describe('[GET] /', () => {
    let server: Server;

    beforeAll(() => {
        server = http.createServer(app.callback());
    });

    afterAll( () => {
        server.close();
    });

    test('Return 200 status code',  () => {
        return request(server)
            .get('/')
            .expect(200, /.*OK.*/);
    });
});