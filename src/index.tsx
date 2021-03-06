/* eslint-disable prettier/prettier */
import * as React from 'react'
import { AppState, NativeModules } from 'react-native'

import { DEFAULT_PALETTE } from './constants';
import { MaterialYouPalette } from './types';

let RNMaterialYouModule: any;

try {
    RNMaterialYouModule = NativeModules?.RNMaterialYouModule;
} catch(err) {
    console.error(err);
    RNMaterialYouModule = undefined;
}


/**
 * Hook to get the generated Material You colors.
 * @category React
 * @subcategory Hooks
 * @param {MaterialYouPalette} [fallbackPalette] The palette to use in case Material You is not supported.
 * @returns {MaterialYouPalette}
 */
export const useMaterialYou = ({ fallbackPalette }: { fallbackPalette?: MaterialYouPalette }) => {
    type State = {
        palette: MaterialYouPalette;
        isSupported: boolean;
        _refresh: () => void;
    }
    const stateRef = React.useRef(null as unknown as State);
    const initialPalette = RNMaterialYouModule?.initialPalette ?? cachedPalette ?? fallbackPalette ?? DEFAULT_PALETTE;
    const [palette, setPalette] = React.useState<MaterialYouPalette>(initialPalette);

    if (stateRef.current === null) {
        const _refresh = async () => {

            let _palette = initialPalette;

            try {
                _palette = await getPalette();
            }
            catch(err){
                console.error(err);
                if (!stateRef.current.isSupported && fallbackPalette){
                    _palette = fallbackPalette;
                }
            }

            if (_palette && _palette.system_accent1 && _palette.system_accent2 && _palette.system_accent3 && _palette.system_neutral1 && _palette.system_neutral2) {
                setPalette(_palette)
                cachedPalette = _palette;
            } else {
                console.warn("Something went wrong while extracting Material You palette.");
            }
        };

        stateRef.current = {
            palette,
            isSupported: deviceSupportsMaterialYou(),
            _refresh
        }
        stateRef.current._refresh();
    }
    stateRef.current.palette = palette;

    return stateRef.current;
}

// ---

type MaterialYouState = {
    /** The generated palette. */
    palette: MaterialYouPalette;
    /** Get the palette from native module. */
    _refresh: () => void;
    /** Is Material You supported on this device. */
    isSupported: boolean;
}

/**
 * The context for the Material You API.
 */
const MaterialYouContext = React.createContext(null as unknown as MaterialYouState);

/**
 * React Context Provider for the Material You API.
 * - Makes sure Material You is supported on the device.
 * - Subscribes to palette regeneration.
 * 
 * @param {MaterialYouPalette} [fallbackPalette] The palette to use in case Material You is not supported.
 */
export const MaterialYouService = ({ children, fallbackPalette }: { children: React.ReactNode, fallbackPalette?: MaterialYouPalette }) => {
    const materialYouApi = useMaterialYou({ fallbackPalette });

    // Update color on app focus change.
    React.useEffect(() => {
        if (!materialYouApi.isSupported)
            return;

        const subscription = AppState.addEventListener('focus', () => {
            materialYouApi._refresh();
        });

        return () => {
            // @ts-ignore
            subscription.remove();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <MaterialYouContext.Provider value={materialYouApi}>
        {children}
    </MaterialYouContext.Provider>
}

/**
 * A hook that returns the current palette in current context.
 */
export const useMaterialYouPalette = () =>
    React.useContext(MaterialYouContext).palette;

/**
 * A hook that returns the current context.
 */
export const useMaterialYouService = () =>
    React.useContext(MaterialYouContext)


// ---

/**
 * Returns a promise with Material You palette generated from the devices wallpaper.
 */
export const getPalette = async () => {
    const palette = await RNMaterialYouModule?.getMaterialYouPalettePromise();
    if (!palette)
        throw new Error("Material You is not supported on this device.");

    return { ...palette }
}

/**
 * Returns the Material You palette generated at runtime from the device wallpaper.
 */
export const getPaletteSync = (): MaterialYouPalette | null => {
    try {
        const palette = getInitialPalette();

        if (!palette)
            throw new Error("Material You is not supported on this device.");

        return { ...palette }
    } catch (err) {
        console.error(err);
        return null;
    }
}

// ---

/**
 * Returns true, if the device is running Android 12/has the generated color palette.
 * @returns {Boolean}
 */
export const deviceSupportsMaterialYou = () => RNMaterialYouModule?.isSupported ?? false;

// Chaching the palette to avoid flicker when the palette changes and provice a fallback. 
// Might be stupid, let me know if you have objections.
let cachedPalette: MaterialYouPalette = null as unknown as MaterialYouPalette;

/**
 * Returns the initial palette.
 */
const getInitialPalette = () => RNMaterialYouModule?.initialPalette ?? cachedPalette ?? DEFAULT_PALETTE;

export const defaultPalette = DEFAULT_PALETTE;

export { MaterialYouPalette };
