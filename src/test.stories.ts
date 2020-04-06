import { withTemplateSource } from './with-template-source';

export default { title: 'Test Stories' }

export const withTemplate = () => withTemplateSource('<h1>Hallo Wereld</h1>');
export const withoutTemplate = () => '<h1>Hallo Wereld</h1>';
export const aLotOfHTMLWithoutPrettyPrint = () => withTemplateSource(`<!DOCTYPE html>
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
    
    </html>`, { pretty: false });
export const angularTemplateWithPrettyPrint = () => withTemplateSource(`
<form [formGroup]="form" style="width: 500px">
    <rosa-form-group>
                <label *ngIf="label" rosaFormLabel>{{label}}</label>
        <rosa-input [readonly]="isReadonly" formControlName="test" placeholder="This input requires 5 characters">
                    <i *ngIf="showIcon" rosaInputIcon class="icon-briefcase"></i>
            <span [rosaInputAddonLabel]="labelsFullCaps ? 'FullCaps' : 'Default'" *ngFor="let label of labels">{{label}}</span>
        </rosa-input>
              <p rosaValidationMessage *ngFor="let validationMessage of validationMessages">{{validationMessage}}</p>
    </rosa-form-group>
</form>
`);

export const withVeryLongOneLiners = () => withTemplateSource(`
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus quis purus congue dapibus. Integer ac tincidunt est. Integer porttitor accumsan dignissim. Integer vitae erat sed mi pulvinar viverra. Vivamus bibendum posuere egestas. Sed aliquet eros magna, at blandit eros lobortis sit amet. Vivamus vel nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel sodales ligula. Proin efficitur orci arcu, mattis pretium risus porta eget. Maecenas porttitor lacus tellus. Quisque nec dictum tortor. Etiam in est sagittis, congue lacus in, euismod magna. In ultricies fringilla felis, eu placerat eros facilisis vitae.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus quis purus congue dapibus. Integer ac tincidunt est. Integer porttitor accumsan dignissim. Integer vitae erat sed mi pulvinar viverra. Vivamus bibendum posuere egestas. Sed aliquet eros magna, at blandit eros lobortis sit amet. Vivamus vel nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel sodales ligula. Proin efficitur orci arcu, mattis pretium risus porta eget. Maecenas porttitor lacus tellus. Quisque nec dictum tortor. Etiam in est sagittis, congue lacus in, euismod magna. In ultricies fringilla felis, eu placerat eros facilisis vitae.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus quis purus congue dapibus. Integer ac tincidunt est. Integer porttitor accumsan dignissim. Integer vitae erat sed mi pulvinar viverra. Vivamus bibendum posuere egestas. Sed aliquet eros magna, at blandit eros lobortis sit amet. Vivamus vel nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel sodales ligula. Proin efficitur orci arcu, mattis pretium risus porta eget. Maecenas porttitor lacus tellus. Quisque nec dictum tortor. Etiam in est sagittis, congue lacus in, euismod magna. In ultricies fringilla felis, eu placerat eros facilisis vitae.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus quis purus congue dapibus. Integer ac tincidunt est. Integer porttitor accumsan dignissim. Integer vitae erat sed mi pulvinar viverra. Vivamus bibendum posuere egestas. Sed aliquet eros magna, at blandit eros lobortis sit amet. Vivamus vel nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel sodales ligula. Proin efficitur orci arcu, mattis pretium risus porta eget. Maecenas porttitor lacus tellus. Quisque nec dictum tortor. Etiam in est sagittis, congue lacus in, euismod magna. In ultricies fringilla felis, eu placerat eros facilisis vitae.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus quis purus congue dapibus. Integer ac tincidunt est. Integer porttitor accumsan dignissim. Integer vitae erat sed mi pulvinar viverra. Vivamus bibendum posuere egestas. Sed aliquet eros magna, at blandit eros lobortis sit amet. Vivamus vel nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel sodales ligula. Proin efficitur orci arcu, mattis pretium risus porta eget. Maecenas porttitor lacus tellus. Quisque nec dictum tortor. Etiam in est sagittis, congue lacus in, euismod magna. In ultricies fringilla felis, eu placerat eros facilisis vitae.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus quis purus congue dapibus. Integer ac tincidunt est. Integer porttitor accumsan dignissim. Integer vitae erat sed mi pulvinar viverra. Vivamus bibendum posuere egestas. Sed aliquet eros magna, at blandit eros lobortis sit amet. Vivamus vel nulla risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel sodales ligula. Proin efficitur orci arcu, mattis pretium risus porta eget. Maecenas porttitor lacus tellus. Quisque nec dictum tortor. Etiam in est sagittis, congue lacus in, euismod magna. In ultricies fringilla felis, eu placerat eros facilisis vitae.</p>
`)