import React = require('react');
import { STORY_RENDER } from '@storybook/core-events';
import addons, { types } from '@storybook/addons';
import { SET_TEMPLATE } from './globals';
import StorybookTemplateSourcePanel from './panel';

const ADDON_ID = 'storybook-template-source';
const PANEL_ID = `${ADDON_ID}/panel`;



addons.register(ADDON_ID, api => {
    const render = ({ active }: { active: boolean }) => <StorybookTemplateSourcePanel api={api} active={active} key='MyPanelKey' />;
    const title = 'Template source';

    addons.add(PANEL_ID, {
        type: types.PANEL,
        title,
        render: render
    });
});