import { Type } from '@angular/core';
import { SaluteLevel } from './salute-level';
import { SalutePosition } from './salute-position';
import { SaluteTheme, SaluteThemeDefault } from './salute-theme';
import { SaluteTimer } from './salute-timer';

export class SaluteNotification {
    public id?: string | number = Math.random() * 1000000;
    public level?: SaluteLevel = SaluteLevel.Info;
    public title?: string;
    public content: string | Type<any>;
    public sticky?: boolean;
    public position?: SalutePosition;
    public timeout?: number = 5000;
    public timer?: SaluteTimer;
    public theme?: SaluteTheme = new SaluteThemeDefault();
    public pausible?: boolean = true;

    public constructor(obj: SaluteNotification) {
        Object.assign(this, obj);
    }
}
