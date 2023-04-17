import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SaluteNotificationDefaultComponent } from './salute-notification-default.component';
import { SaluteNotificationComponent } from './salute-notification.component';
import { SaluteService } from './salute.service';

@Component({
    standalone: true,
    selector: 'salute-container',
    imports: [ CommonModule, SaluteNotificationComponent, SaluteNotificationComponent, SaluteNotificationComponent, SaluteNotificationDefaultComponent ],
    template: `
        <ng-container #root>
            <div class="salute-container"
                 [style.right]="0"
                 [@listAnimation]="saluteService.config.notifications.length">
                <ng-container *ngFor="let notification of saluteService.config.notifications">
                    <salute-notification
                        *ngIf="!isString(notification.content)"
                        [style.display]="notification.static || notification.timer.remaining > 0 ? 'block' : 'none'"
                        [notification]="notification"></salute-notification>
                    <salute-notification-default *ngIf="!notification.content || isString(notification.content)"
                                                 [style.display]="notification.static || notification.timer.remaining > 0 ? 'block' : 'none'"
                                                 [notification]="notification"></salute-notification-default>
                </ng-container>
            </div>
        </ng-container>
    `,
    styles: [
        `
            .salute-container {
                position: fixed;
                display: flex;
                flex-direction: column;
                margin: 10px;
                z-index: 9999;
                align-items: end;
            }

            .salute-container * {
                border-radius: 4px;
                margin-top: 10px;
            }

            .salute-container *:first-child {
                margin-top: 0;
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
export class SaluteContainerComponent {
    @ViewChild('root', { read: ViewContainerRef }) public root: ViewContainerRef;

    public constructor(public readonly saluteService: SaluteService) {

    }

    public isString(t: any): boolean {
        return typeof t === 'string';
    }
}
