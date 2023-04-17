import { Component } from '@angular/core';
import { SaluteLevel } from '../../projects/lib/src/lib/salute-level';
import { SaluteNotification } from '../../projects/lib/src/lib/salute-notification';
import { SaluteThemeDark, SaluteThemeLight } from '../../projects/lib/src/lib/salute-theme';
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
        this.saluteService.push(new SaluteNotification({
            level: SaluteLevel.SUCCESS,
            theme: new SaluteThemeLight(),
            title: 'Title and content passed',
            content: 'asdfasdf asdf asdfadsf asd fasd fasdfasd fasdfasdfasdfasdfdas',
            timeout: Math.round(Math.random() * 10000),
            width: '400px',
            static: true
        }));
        this.saluteService.push(new SaluteNotification({
            level: SaluteLevel.SUCCESS,
            theme: new SaluteThemeDark(),
            title: 'Title and content passed',
            content: 'asdfasdf asdf asdfadsf asd fasd fasdfasd fasdfasdfasdfasdfdas',
            timeout: Math.round(Math.random() * 10000),
            width: '400px',
            static: true
        }));

        this.saluteService.push(new SaluteNotification({
            level: SaluteLevel.INFO,
            title: 'I have a themed title only!',
            timeout: Math.round(Math.random() * 10000),
            theme: new SaluteThemeLight({
                title: {
                    color: 'cornflowerblue',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }
            }),
            static: true
        }));

        this.saluteService.push(new SaluteNotification({
            level: SaluteLevel.WARNING,
            theme: new SaluteThemeDark(),
            title: 'Dark theme is always good..',
            timeout: Math.round(Math.random() * 10000),
            static: true
        }));

        for (let i = 0; i < 3; i++) {
            this.saluteService.push(new SaluteNotification({
                level: this.levels[Math.floor(Math.random() * this.levels.length)],
                title: Math.random().toString(),
                content: `Random data aye yo!<br>${ Math.random().toString() }`,
                timeout: Math.round(Math.random() * 10000),
                pausible: true
            }));
        }

        this.saluteService.push(new SaluteNotification({
            level: this.levels[Math.floor(Math.random() * this.levels.length)],
            title: Math.random().toString(),
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

    }
}
