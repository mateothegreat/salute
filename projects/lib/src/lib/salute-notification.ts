import { Type } from '@angular/core';
import { SaluteLevel } from './salute-level';
import { SalutePosition } from './salute-position';
import { SaluteTheme, SaluteThemeLight } from './salute-theme';
import { SaluteTimer } from './salute-timer';

export class SaluteNotification {
    public id?: string | number = Math.random() * 1000000;
    public level?: SaluteLevel = SaluteLevel.INFO;
    public title?: string;
    public content?: string | Type<any>;
    public static?: boolean;
    public position?: SalutePosition;
    public timeout?: number = 5000;
    public timer?: SaluteTimer;
    public theme?: SaluteTheme = new SaluteThemeLight();
    public pausible?: boolean = true;
    public width?: string = '350px';

    public constructor(obj: SaluteNotification) {
        Object.assign(this, obj);
    }
}
