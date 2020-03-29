import { Example as IExample} from '../../models/Example/interface';
import Example from '../../models/Example';
import { connect, disconnect } from "../helpers/database";

describe('[MODEL] Example', () => {
    const toCleanAfterTest: IExample[] = [];

    beforeAll(async (): Promise<void> => {
        await connect();
    });

    afterAll(async (): Promise<void> => {
        await Promise.all(toCleanAfterTest.map((model) => model.remove()));
        await disconnect();
    });


    test('Create valid data in examples collections', async (): Promise<void> => {
        const example: IExample = new Example({ dummyField: 'Foobar' });
        toCleanAfterTest.push(example);

        await example.save();

        const fetchedExample = await Example.findOne({ dummyField: 'Foobar' });

        expect(fetchedExample).not.toBeNull();
        expect(fetchedExample?.dummyField).toBe('Foobar');
    });

});