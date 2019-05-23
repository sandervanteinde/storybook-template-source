import { configure } from '@storybook/html';

const req = require.context('../dist', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
