import request, { SuperTest } from 'supertest';

import app from '../../app';

export default (): SuperTest<request.Test> => request(app.listen());