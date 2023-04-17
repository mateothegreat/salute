import { Component } from '@angular/core';
import { SaluteLevel } from '../../projects/lib/src/lib/salute-level';
import { SaluteNotification } from '../../projects/lib/src/lib/salute-notification';
import { SaluteService } from '../../projects/lib/src/lib/salute.service';
import { InteractiveComponent } from './custom-notifications/interactive/interactive.component';
import { StaticComponent } from './custom-notifications/static/static.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    public levels = [
        SaluteLevel.SUCCESS,
        SaluteLevel.INFO,
        SaluteLevel.WARNING,
        SaluteLevel.ERROR
    ];

    public constructor(public readonly saluteService: SaluteService) {
        for (let i = 0; i < 10; i++) {
            this.saluteService.push(new SaluteNotification({
                level: this.levels[Math.floor(Math.random() * this.levels.length)],
                title: Math.random().toString(),
                content: Math.random().toString() + '<br>asdfasdfasdfasdf',
                timeout: Math.round(Math.random() * 10000),
                pausible: true
            }));
        }

        this.saluteService.push(new SaluteNotification({
            level: SaluteLevel.WARNING,
            title: 'asdf',
            content: InteractiveComponent,
            timeout: Math.round(Math.random() * 10000),
            pausible: true
        }));

        const notification = this.saluteService.push(new SaluteNotification({
            level: SaluteLevel.ERROR,
            content: StaticComponent,
            timeout: Math.round(Math.random() * 10000),
            pausible: true,
            static: true
        }));

        console.log(notification);

    }
}
