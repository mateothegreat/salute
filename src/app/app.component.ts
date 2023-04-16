import { Component } from '@angular/core';
import { SaluteLevel } from '../../projects/lib/src/lib/salute-level';
import { SaluteNotification } from '../../projects/lib/src/lib/salute-notification';
import { SaluteService } from '../../projects/lib/src/lib/salute.service';
import { InteractiveComponent } from './custom-notifications/interactive/interactive.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    public constructor(public readonly saluteService: SaluteService) {
        for (let i = 0; i < 5; i++) {
            this.saluteService.push(new SaluteNotification({
                level: SaluteLevel.Success,
                title: 'asdf',
                content: InteractiveComponent,
                timeout: Math.round(Math.random() * 10000),
                pausible: true
            }));
        }
    }
}
