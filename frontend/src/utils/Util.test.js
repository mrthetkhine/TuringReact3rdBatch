import { formatUserName } from "./Util";

describe('Utils', () => {
    test('formatUserName adds @ at the beginning of the username', () => {
        expect(formatUserName('jc')).toBe('@jc');
    });
});