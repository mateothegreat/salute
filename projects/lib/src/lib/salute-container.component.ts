import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SaluteNotificationComponent } from './salute-notification.component';
import { SaluteService } from './salute.service';

@Component({
    standalone: true,
    selector: 'salute-container',
    imports: [ CommonModule, SaluteNotificationComponent ],
    template: `
        <ng-container #root>
            <div class="salute-container"
                 [style.right]="0"
                 [@listAnimation]="saluteService.config.notifications.length">
                <salute-notification *ngFor="let notification of saluteService.config.notifications"
                                     [style.display]="notification.timer.remaining > 0 ? 'block' : 'none'"
                                     [notification]="notification"></salute-notification>
            </div>
        </ng-container>
    `,
    styles: [
        `
            .salute-container {
                position: fixed;
                display: flex;
                flex-direction: column;
                margin: 15px;
                font-family: "Ubuntu Nerd Font";

            }

            salute-notification {
                border-radius: 4px;
                margin-top: 10px;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

            }

            salute-notification:first-child {
                margin-top: 0;
            }

            .salute-notification-info {
                background: cornflowerblue;
            }
        `
    ],
    animations: [
        trigger('listAnimation', [
            transition('* <=> *', [
                query(
                    ':enter',
                    [
                        style({ opacity: 0, transform: 'translateX(32px)' }),
                        stagger(
                            '300ms',
                            animate(
                                '300ms ease',
                                style({ opacity: 1, transform: 'translateX(0px)' })
                            )
                        )
                    ],
                    { optional: true }
                ),
                query(
                    ':leave',
                    animate(
                        '200ms ease-in-out',
                        style({ opacity: 0, transform: 'translateY(32px)' })
                    ),
                    {
                        optional: true
                    }
                )
            ])
        ])
    ]
})
export class SaluteContainerComponent implements AfterViewInit {
    @ViewChild('root', { read: ViewContainerRef }) public root: ViewContainerRef;

    public constructor(public readonly saluteService: SaluteService) {

    }

    public ngAfterViewInit(): void {
        console.log(this.root);
    }
}
