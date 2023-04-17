import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SaluteNotification } from './salute-notification';
import { SaluteService } from './salute.service';

@Component({
    selector: 'salute-notification-default',
    standalone: true,
    imports: [ CommonModule ],
    template: `
        <div (mouseover)="notification.pausible ? notification.timer?.pause() : null"
             (mouseout)="notification.pausible ? notification.timer?.resume() : null"
             (click)="notification.timer.end()"
             [style.background]="notification.theme.background"
             [style.border-radius]="notification.theme.borderRadius"
             [style.padding]="notification.theme.padding"
             class="salute-notification">
            <div class="salute-notification-left">
                <svg *ngIf="notification.level === 'INFO'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m21.25 0h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75v-18.5c0-1.517-1.233-2.75-2.75-2.75z"
                        style="fill: rgb(91, 132, 225);"/>
                    <path d="m12 5c.552 0 1 .447 1 1s-.448 1-1 1-1-.447-1-1 .448-1 1-1z" fill="#fafafa"/>
                    <path
                        d="m14.25 19h-4.5c-.552 0-1-.447-1-1s.448-1 1-1h1.25v-6h-.75c-.552 0-1-.447-1-1s.448-1 1-1h1.75c.552 0 1 .447 1 1v7h1.25c.552 0 1 .447 1 1s-.448 1-1 1z"
                        fill="#fafafa"/>
                    <path
                        d="m12 0h-9.25c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h9.25v-5h-2.25c-.552 0-1-.447-1-1s.448-1 1-1h1.25v-6h-.75c-.552 0-1-.447-1-1s.448-1 1-1h1.75v-2c-.552 0-1-.447-1-1s.448-1 1-1z"
                        style="fill: rgb(79, 114, 196);"/>
                    <g fill="#dadada">
                        <path d="m12 5c-.552 0-1 .447-1 1s.448 1 1 1z"/>
                        <path
                            d="m12 9h-1.75c-.552 0-1 .447-1 1s.448 1 1 1h.75v6h-1.25c-.552 0-1 .447-1 1s.448 1 1 1h2.25z"/>
                    </g>
                </svg>
                <svg *ngIf="notification.level === 'ERROR'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m21.25 0h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75v-18.5c0-1.517-1.233-2.75-2.75-2.75z"
                        style="fill: rgb(255, 87, 85);"/>
                    <path
                        d="m12 0h-9.25c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h9.25v-5c-.552 0-1-.447-1-1s.448-1 1-1v-2c-.552 0-1-.447-1-1v-8c0-.553.448-1 1-1z"
                        style="fill: rgb(244, 68, 65);"/>
                    <g fill="#f44336" transform="matrix(0.033302, 0, 0, 0.033302, 5.463154, 5.730593)" style="">
                        <path
                            d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"
                            style="fill: rgb(232, 232, 232);"/>
                        <path
                            d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"
                            style="fill: rgb(232, 232, 232);"/>
                    </g>
                </svg>
                <svg *ngIf="notification.level === 'WARNING'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m21.25 0h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75v-18.5c0-1.517-1.233-2.75-2.75-2.75z"
                        style="fill: rgb(244, 163, 65);"/>
                    <path d="m12 19c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1z" fill="#fafafa"/>
                    <path d="m13 14c0 .553-.448 1-1 1s-1-.447-1-1v-8c0-.553.448-1 1-1s1 .447 1 1z" fill="#fafafa"/>
                    <path
                        d="m12 0h-9.25c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h9.25v-5c-.552 0-1-.447-1-1s.448-1 1-1v-2c-.552 0-1-.447-1-1v-8c0-.553.448-1 1-1z"
                        style="fill: rgb(243, 147, 34);"/>
                    <g fill="#dadada">
                        <path d="m12 17c-.552 0-1 .447-1 1s.448 1 1 1z"/>
                        <path d="m12 5c-.552 0-1 .447-1 1v8c0 .553.448 1 1 1z"/>
                    </g>
                </svg>
                <svg *ngIf="notification.level === 'SUCCESS'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m24 2.75c0-1.517-1.233-2.75-2.75-2.75h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75z"
                        fill="#4caf50"/>
                    <path
                        d="m18.082 8.043c.391.391.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.25-3.25c-.391-.391-.391-1.024 0-1.414.391-.391 1.023-.391 1.414 0l2.543 2.543 5.793-5.793c.391-.391 1.023-.391 1.414 0z"
                        fill="#fafafa"/>
                    <path
                        d="m12 0h-9.25c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h9.25v-8.461l-.418.418c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.25-3.25c-.391-.391-.391-1.024 0-1.414.195-.195.451-.293.707-.293s.512.098.707.293l2.543 2.543 1.125-1.125z"
                        fill="#429846"/>
                    <path
                        d="m7.625 11c-.256 0-.512.098-.707.293-.391.391-.391 1.024 0 1.414l3.25 3.25c.195.195.451.293.707.293s.512-.098.707-.293l.418-.418v-2.828l-1.125 1.125-2.543-2.543c-.195-.195-.451-.293-.707-.293z"
                        fill="#dadada"/>
                </svg>
            </div>
            <div class="salute-notification-content">
                <div class="salute-notification-wrapper">
                    <div *ngIf="notification.title" class="salute-notification-title">
                        {{ notification.title }}
                    </div>
                    <div *ngIf="notification.content"
                         [innerHTML]="notification.content"
                         class="salute-notification-message"></div>
                </div>
                <div class="salute-notification-close"
                     [style.color]="'lightgray'"
                     [style.opacity]="'50%'">
                    <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="currentColor"
                                  d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .salute-notification {
                display: flex;
                gap: 10px;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15);
            }

            .salute-notification svg {
                width: 25px;
                height: 25px;
                opacity: 90%;
            }

            .salute-notification-left {
                margin: 5px 0 5px 5px;
            }

            .salute-notification-content {
                margin-top: 5px;
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
            }

            .salute-notification-message {
                font-size: smaller;
                max-width: 100px;
            }

            .salute-notification-title {
                max-width: 100px;
                padding-top: 3px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .salute-notification-close {
                display: flex;
                width: 100px;

                justify-content: end;
            }
        `
    ]
})
export class SaluteNotificationDefaultComponent implements OnInit {
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
