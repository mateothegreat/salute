export interface SaluteTheme {
    background?: string;
    borderRadius?: string;
    padding?: string;
}

export class SaluteThemeDefault implements SaluteTheme {
    public background = '#eeeeee';
    public borderRadius = '5px';
    public padding = '5px';
}
