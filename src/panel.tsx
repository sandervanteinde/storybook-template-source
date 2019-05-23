import { STORY_CHANGED } from '@storybook/core-events';
import { SET_TEMPLATE } from './globals';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';
import React = require('react');

export default class StorybookTemplateSourcePanel extends React.Component<{ api: any, active: boolean }> {
    state = { template: '' };

    buttonStyle = {
        color: '#1EA7FD',
        border: '1px solid #1EA7FD',
        backgroundColor: 'white',
        padding: '5px',
        cursor: 'pointer'
    };

    componentDidMount() {
        const { api } = this.props;

        api.on(STORY_CHANGED, this.onStoryRender);
        api.on(SET_TEMPLATE, this.onSetTemplate);
    }

    componentWillUnmount() {
        const { api } = this.props;

        api.off(STORY_CHANGED, this.onStoryRender);
        api.off(SET_TEMPLATE, this.onSetTemplate);
    }

    /**
     *
     * @param {string} template
     */
    onSetTemplate(template: string): void {
        this.setState({ template });
        this.state.template = template;
    }

    onStoryRender(): void {
        this.setState({ template: '' });
    }

    setTemplateOnClipboard = () => {
        (navigator as any).clipboard.writeText(this.state.template);
        alert('copied!');
    }

    render() {
        const { template } = this.state;
        const { active } = this.props;
        return !active ? null : <div>
            <button style={this.buttonStyle} onClick={this.setTemplateOnClipboard}>Copy to clipboard</button>
            <SyntaxHighlighter language='html' style={docco}>{template}</SyntaxHighlighter>
        </div>;
    }
}