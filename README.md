# Usage
Install from NPM using thse command

1. `npm i --save-dev storybook-template-source`
2. Register addon in `.storybook/addons.js` using `import 'storybook-template-source/register';`
3. Invoke `withTemplateSource` in your story like this:
```TypeScript
storiesOf('Test Stories', module)
    .add('With template', () => withTemplateSource('<h1>Hello World</h1>'))
```

# Settings
You can provide an optional second object to ` withTemplateSource` to control the behavior. This can be one, any or all of the options below.

```typescript
{
    pretty: boolean = true; // Pretty prints the HTML output. Defaults to true
}
``` 

**Example without pretty print:**
```typescript
storiesOf('Test Stories', module)
    .add('With template', () => withTemplateSource('<h1>Hello World</h1>', { pretty: false }))
```
