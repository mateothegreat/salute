import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaluteContainerComponent } from '../../projects/lib/src/lib/salute-container.component';

import { AppComponent } from './app.component';
import { InteractiveComponent } from './custom-notifications/interactive/interactive.component';

@NgModule({
    declarations: [
        AppComponent,
        InteractiveComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SaluteContainerComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
