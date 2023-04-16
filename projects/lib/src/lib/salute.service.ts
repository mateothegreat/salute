import { Injectable, Type } from '@angular/core';
import { Salute } from './salute';
import { SaluteLevel } from './salute-level';
import { SaluteNotification } from './salute-notification';
import { SaluteTimer } from './salute-timer';

@Injectable({
    providedIn: 'root'
})
export class SaluteService {
    public readonly config: Salute = new Salute();

    public constructor() {
    }

    public push(notification: SaluteNotification): void {
        notification.timer = new SaluteTimer(() => {
            this.pop(notification.id);
        }, notification.timeout || this.config.timeout || 5000);

        this.config.notifications.push(notification);

        // let index = this.toastsBag.findIndex((n) => n.id === toast.id);
        // this.toastsBag.splice(index, 1, toast);
    }

    public pop(id: string | number): void {
        this.config.notifications.splice(this.config.notifications.findIndex((n) => n.id == id), 1);
    }

    public info(content: string | Type<any>): void {
        this.push(new SaluteNotification({
            content,
            level: SaluteLevel.Info
        }));
    }
}
