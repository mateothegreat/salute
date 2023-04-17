import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SaluteNotification } from './salute-notification';
import { SaluteService } from './salute.service';

@Component({
    selector: 'salute-notification',
    standalone: true,
    imports: [ CommonModule ],
    template: `
        <div (mouseover)="notification.pausible ? notification.timer?.pause() : null"
             (mouseout)="notification.pausible ? notification.timer?.resume() : null"
             (click)="notification.timer.end()"
             class="salute-notification">
            <div class="salute-notification-wrapper">
                <ng-container *ngIf="!isString(notification.content)">
                    <ng-container
                        *ngComponentOutlet="$any(notification.content)"></ng-container>
                </ng-container>
                <ng-container *ngIf="isString(notification.content)">
                    {{ notification.title }}
                </ng-container>
            </div>
        </div>
    `,
    styles: [
        `
            .salute-notification {
                display: flex;
            }
        `
    ]
})
export class SaluteNotificationComponent implements OnInit {
    @Input() public notification: SaluteNotification;

    public constructor(public readonly saluteService: SaluteService) {

    }

    public isString(t: any): boolean {
        return typeof t === 'string';
    }

    public ngOnInit() {
        console.log(this.notification);
    }

    public getInjector(notification: SaluteNotification) {

    }
}
