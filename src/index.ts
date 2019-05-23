import addons from '@storybook/addons';
import { SET_TEMPLATE } from './globals';
import Channel from '@storybook/channels';


export function withTemplateSource(source: string): string {
    const channel: Channel = addons.getChannel();
    channel.emit(SET_TEMPLATE, source);
    return source;
}