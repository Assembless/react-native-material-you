# react-native-material-you
Bring newest Android 12 feature [Material You](https://material.io/blog/announcing-material-you) to your React Native app. This package enables you to use the from wallpaper generated colors in your app. 

![RNMY Thumbnail](https://i.imgur.com/fcdOyLs.png)
![npm (tag)](https://img.shields.io/npm/v/@assembless/react-native-material-you/latest?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/assembless/react-native-material-you?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/assembless/react-native-material-you?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@assembless/react-native-material-you?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@assembless/react-native-material-you?style=for-the-badge)

## Features

- 🎨 Generate a palette based on dominant wallpaper colors
- 🪝 Supports React hooks
- 🕒 Provides fallback palette for older Android versions
- ♻️ Refreshes palette when the wallpaper changes

## How to install

**Yarn**
```
yarn add @assembless/react-native-material-you
```

**NPM**
```
npm install @assembless/react-native-material-you
```

## How to use

### React Context + Hook
In order to get the colors always refreshed when the palette is being regenerated on the native side, it's necessary to wrap your app with `MaterialYouService` and get the palette from the context, by using `useMaterialYouPalette` or `useMaterialYouService` hooks.
The service subscribes to palette changes on the native side and updates the context when the palette is changed. `fallbackPalette` is optional.

```typescript
import { MaterialYouService, useMaterialYouPalette, defaultPalette } from '@assembless/react-native-material-you';

const App = () => (
    <MaterialYouService fallbackPalette={defaultPalette}>
        {...}
    </MaterialYouService>
)

const MyComponent = () => {
    const palette = useMaterialYouPalette();

    return (
        <View style={{ backgroundColor: palette.system_neutral2[2] }}>
            <Text style={{ color: palette.system_accent1[6] }}>Hello World</Text>
        </View>
    );
}
```

### React Hook
Alternatively, you can use the `useMaterialYou` hook that returns the system generated color palette. In order to get the newest palette, run the `_refresh` method exposed by the hook. `fallbackPalette` is optional.
```typescript
import { useMaterialYou, defaultPalette } from '@assembless/react-native-material-you';

const MyComponent = () => {
    const { palette } = useMaterialYou({ fallbackPalette: defaultPalette });

    return (
        <View style={{ backgroundColor: palette.system_neutral2[2] }}>
            <Text style={{ color: palette.system_accent1[6] }}>Hello World</Text>
        </View>
    );
}
```

## Static methods

### Get palette synchronously
The `getPaletteSync` function returns a rich palette of 5 system generated colors (`system_accent1`, `system_accent2`, `system_accent3`, `system_neutral1`, `system_neutral2`) and each containing 12 shades of Material color in hex strings that are used to determine the hues closest to the user’s wallpaper. The color constants are passed from the native module. Check out the [Android documentation](https://developer.android.com/reference/android/R.color#system_accent1_0) for more details about system generated colors.

```typescript
import { getPaletteSync } from '@assembless/react-native-material-you';

const palette = getPaletteSync();

const theme = {
    palette: {
        primary: palette.system_accent1[6],
        background: palette.system_neutral2[2],
        ...
    }
}
```

> ⚠️ This function only returns constant colors generated at runtime once. If you want to get the colors regenerated while the app is already running, you need to use the `getPalette` function which is asynchronous.

### Get palette asynchronously
```typescript
import { getPalette } from '@assembless/react-native-material-you';

const createTheme = async () => {
    const palette = await getPalette();

    return ({
        palette: {
            primary: palette.system_accent1[6],
            background: palette.system_neutral2[2],
            ...
        }
    })
}
```

## Documentation

The documentation has been generated from JSDoc.

[Documentation website](https://assembless.github.io/react-native-material-you/index.html)

## How to debug

1. Install dependencies (in root dir and ./example dir)
2. Open the `example` directory project in Android Studio, build and run the project. (`./example/android`)
3. Run `yarn start` in the `example` directory.

## Special thanks

We're very thankful to our genius testers and contributors helping us get this package to perfection. Thank you! :heart:

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/0rsa">
            <img src="https://avatars.githubusercontent.com/u/769750?v=3?s=100" width="100px;" alt=""/>
            <br />
            <sub><b>0rsa</b></sub>
        </a>
        <br />
    </td>
  </tr>
</table>
