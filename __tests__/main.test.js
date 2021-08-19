import assert from 'assert'
import path from 'path'
import {Application} from 'spectron'
import electronPath from 'electron'

const app = new Application({
    path: electronPath,
    args: [path.join(__dirname, '..')]
});

describe('testing main app window', function () {
    jest.setTimeout(10000)

    beforeAll(() => {
        return app.start();
    });

    afterAll(() => {
        if (app && app.isRunning()) {
            return app.stop();
        }
    });

    test('should work', () => {
        assert.ok(true);
    });

    test('should show an initial window', async () => {
        const count = await app.client.getWindowCount();
        expect(count).toBe(1)
    });

    test('should be visible to user', async () => {
        let temp = await app.browserWindow.isVisible()
        expect(temp).toBe(true)
    })

    test('should have correct title', async () => {
        app.client.waitUntilWindowLoaded()
        let title = await app.client.getTitle()
        expect(title).toBe('Camera')
    })
    
});