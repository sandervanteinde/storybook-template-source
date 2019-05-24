import { STORY_CHANGED } from '@storybook/core-events';
import { SET_TEMPLATE } from './globals';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';
import React = require('react');
import pretty = require('pretty');
import { TemplateSourceOptions } from 'template-source-options';

export default class StorybookTemplateSourcePanel extends React.Component<{ api: any, active: boolean }> {
    state = {
        template: '',
        showingButton: false,
        pretty: true
    };

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
    onSetTemplate = (template: string, options: TemplateSourceOptions) => {
        this.setState({ template, ...options });
        this.state.template = template;
    }

    onStoryRender = () => {
        this.setState({ template: '', showingButton: false });
    }

    setTemplateOnClipboard = () => {
        (navigator as any).clipboard.writeText(this.state.template);
        this.setState({ showingButton: true });
        setTimeout(() => this.setState({ showingButton: false }), 5000);
    }

    ShowThatICopied = () => {
        if (this.state.showingButton) {
            return <span>Copied!</span>
        }
        return null;
    }
    ShowCopyButton = () => {
        if (this.state.template) {
            debugger;
            const template = this.state.pretty ? pretty(this.state.template, { ocd: true }) : this.state.template;
            return <div><button style={this.buttonStyle} onClick={this.setTemplateOnClipboard}>Copy to clipboard</button>
                <SyntaxHighlighter language='html' showLineNumbers={true} style={docco}>{template}</SyntaxHighlighter>
            </div>
        }
        return <span>No template found. Did you invoke `withTemplateSource`?</span>;
    }

    render() {
        const { active } = this.props;
        return !active ? null : <div>
            <this.ShowCopyButton />
            <this.ShowThatICopied />
        </div>;
    }
}
