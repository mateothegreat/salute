![salute.png](docs/salute.png)

# 🚀 Angular toaster notifications like a boss.

![demo.gif](docs/demo.gif)

# ⚡ Features

* One line of code to show a notification. 🙏
* Interactive pause and resume support.
* Bring-your-own-component support (100% customization support). 💣
* No module import required, just add the component to your app root.
* Complete control over styling with theme support.
* Hackable and extensible. 🧰

# 🛴 Installation

```bash
npm install @mateothegreat/salute
```

# 📖 Usage

## Add component

Update your `app.component.html` to include the `salute-container` component:

```html
...
<salute-container></salute-container>
```

## Use service

Inject the `SaluteService` into your component:

```
import {SaluteLevel, SaluteNotification, SaluteService, SaluteThemeDark} from "@mateothegreat/salute";
...
public constructor(public readonly saluteService: SaluteService) {}
```

> You can programatically add notifications to the queue using the
> `SaluteService.push` method throughout your application.

```typescript
this.saluteService.push(new SaluteNotification({
    level: SaluteLevel.INFO,
    title: 'I have a themed title only!',
    timeout: Math.round(Math.random() * 10000),
    theme: new SaluteThemeLight({
        title: {
            color: 'cornflowerblue',
            fontSize: '20px',
            fontWeight: 'bold'
        }
    }),
    static: true
}));
```

The notification should show up now and will automatically be removed after 5 seconds (default).

## Customization

### Levels (default: `SaluteLevel.INFO`)

Levels are used to determine the color of the notification and icon default
when not passing a custom component `content`.

The default levels are:

| Level                 | Color     |
|-----------------------|-----------|
| `SaluteLevel.INFO`    | `#2196F3` |
| `SaluteLevel.SUCCESS` | `#4CAF50` |
| `SaluteLevel.WARNING` | `#FFC107` |
| `SaluteLevel.ERROR`   | `#F44336` |

You can customize the look and feel of the notification by passing a `theme` object to the `SaluteNotification`
constructor. See [salute-theme.ts](projects/lib/src/salute-theme.ts) for all available options.

### Positioning (default: `top-right`)

The `SaluteContainerComponent` can be positioned anywhere in your application and will be
on top of all other elements. The default position is `top-right`.

```typescript
export enum SalutePosition {
    Auto = 'auto',
    TopLeft = 'top-left',
    TopRight = 'top-right',
    BottomLeft = 'bottom-left',
    BottomRight = 'bottom-right'
}
```

[salute-notification.ts](projects/lib/src/salute-notification.ts)

```typescript
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
```

[salute-theme.ts](projects/lib/src/salute-theme.ts)

# 👐 Contributing & Hacking

Pull down this repo and install the dependencies using npm:

```bash
git clone https://github.com/mateothegreat/salute
cd salute
npm install
```

Next we can compile the library out to the dist directory:

```bash
npm start
```

Open http://localhost:4200 and enjoy!

# ❔ Help

* https://github.com/mateothegreat/salute/issues
* Discord mateothegreat#0001
