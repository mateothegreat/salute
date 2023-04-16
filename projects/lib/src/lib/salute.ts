import { SaluteNotification } from './salute-notification';

export class Salute {
    public max?: number;
    public timeout?: number = 5000;
    public notifications: SaluteNotification[] = [];
}

