import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MessageComponent} from './message/message.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    entryComponents: [
        MessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        const customElement = createCustomElement(MessageComponent, {injector});
        customElements.define('my-message', customElement);
        //Web components
    }

    ngDoBootstrap() {
    }
}
//ng g component