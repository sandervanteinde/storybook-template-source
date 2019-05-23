import { storiesOf } from '@storybook/html';
import { withTemplateSource } from '.';

storiesOf('Test Stories', module)
    .add('With template', () => withTemplateSource('<h1>Hallo Wereld</h1>'))
    .add('Without template', () => '<h1>Hallo Wereld</h1>')
    .add('A lot of HTML', () => withTemplateSource(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    
    <body>
        Awesomeness
    </body>
    
    </html>`));