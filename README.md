# react-native-material-you
Bring newest Android 12 feature [Material You](https://material.io/blog/announcing-material-you) to your React Native app. This package enables you to use the from wallpaper generated colors in your app. 

## Features

- Material You generated color palette
- Supports React hooks
- Subscribes to system palette changes

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
A palette generation algorithm then creates a rich palette of 5 colors — 2 neutral and 3 accent colors — as well as 12 shades of Material color that are used to determine the hues closest to the user’s wallpaper.
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

> ⚠️ This function only returns constant colors generated at run once. If you want to get the updated colors generated while the app is already running, you need to use the `getPalette` function which is asynchronous.

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

### React hook
The `useMaterialYou` hook returns the colors and invokes the `getColors` function when the App state changes.
```typescript
import { useMaterialYou } from '@assembless/react-native-material-you';

const MyComponent = () => {
    const { palette } = useMaterialYou();

    return (
        <View style={{ backgroundColor: palette.system_neutral2[2] }}>
            <Text style={{ color: palette.system_accent1[6] }}>Hello World</Text>
        </View>
    );
}
```

## How to debug

1. Install dependencies (in root dir and ./example dir)
2. Change "main" in `package.json` file from `lib/index.js` to `src/index.tsx`. (please do not push that as this is crucial in deployment!)
3. Open the `example` directory project in Android Studio, build and run the project. (`./example/android`)
4. Run `yarn start` in the `example` directory.
