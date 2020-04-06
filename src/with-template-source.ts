import addons from '@storybook/addons';
import { SET_TEMPLATE } from './globals';
import Channel from '@storybook/channels';
import { TemplateSourceOptions } from './template-source-options';

const Default: TemplateSourceOptions = {
  pretty: true
};

export function withTemplateSource(source: string, options: Partial<TemplateSourceOptions> = Default): string {
  if (options !== Default) {
    for (let key in Default) {
      if (!options.hasOwnProperty(key) && Default.hasOwnProperty(key)) {
        (options as any)[key] = (Default as any)[key];
      }
    }
  }
  const channel: Channel = addons.getChannel();
  channel.emit(SET_TEMPLATE, source, options);
  return source;
}
