export interface SaluteTheme {
    background?: string;
    borderRadius?: string;
    padding?: string;
    color?: string;
    closeOpacity?: string;
    title?: {
        color?: string;
        fontSize?: string;
        fontWeight?: string;
    };
}

export class SaluteThemeTitle {
    public color?: string;
    public fontSize?: string;
    public fontWeight?: string;

    public constructor(obj?: SaluteThemeTitle) {
        Object.assign(this, obj);
    }
}

export class SaluteThemeLight implements SaluteTheme {
    public background = 'rgb(255, 255, 255, .5)';
    public borderRadius = '5px';
    public padding = '5px';
    public color = '#666';
    public closeOpacity = '25%';
    public title = new SaluteThemeTitle({
        color: '#333',
        fontWeight: 'bold'
    });

    public constructor(obj?: SaluteTheme) {
        Object.assign(this, obj);
    }
}

export class SaluteThemeDark implements SaluteTheme {
    public background = 'rgb(0, 0, 0, .8)';
    public borderRadius = '5px';
    public padding = '10px';
    public color = '#d2d2d2';
    public closeOpacity = '5%';
    public title = new SaluteThemeTitle({
        color: '#ddd',
        fontWeight: 'bold'
    });

    public constructor(obj?: SaluteTheme) {
        Object.assign(this, obj);
    }
}
