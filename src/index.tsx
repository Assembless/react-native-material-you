/* eslint-disable prettier/prettier */
import * as React from 'react'
import { AppState, NativeModules } from 'react-native'
const { RNMaterialYouModule } = NativeModules

type MaterialYouPalette = {
    system_accent1: string[];
    system_accent2: string[];
    system_accent3: string[];
    system_neutral1: string[];
    system_neutral2: string[];
}

const DEFAULT_PALETTE: MaterialYouPalette = Object.freeze({
    // system_accent1:  [PlatformColor("@android:color/system_accent1_0").toString(), PlatformColor("@android:color/system_accent1_10").toString(), PlatformColor("@android:color/system_accent1_50").toString(), PlatformColor("@android:color/system_accent1_100").toString(), PlatformColor("@android:color/system_accent1_200").toString(), PlatformColor("@android:color/system_accent1_300").toString(), PlatformColor("@android:color/system_accent1_400").toString(), PlatformColor("@android:color/system_accent1_500").toString(), PlatformColor("@android:color/system_accent1_600").toString(), PlatformColor("@android:color/system_accent1_700").toString(), PlatformColor("@android:color/system_accent1_800").toString(), PlatformColor("@android:color/system_accent1_900").toString(), PlatformColor("@android:color/system_accent1_1000").toString()],
    // system_accent2:  [PlatformColor("@android:color/system_accent2_0").toString(), PlatformColor("@android:color/system_accent2_10").toString(), PlatformColor("@android:color/system_accent2_50").toString(), PlatformColor("@android:color/system_accent2_100").toString(), PlatformColor("@android:color/system_accent2_200").toString(), PlatformColor("@android:color/system_accent2_300").toString(), PlatformColor("@android:color/system_accent2_400").toString(), PlatformColor("@android:color/system_accent2_500").toString(), PlatformColor("@android:color/system_accent2_600").toString(), PlatformColor("@android:color/system_accent2_700").toString(), PlatformColor("@android:color/system_accent2_800").toString(), PlatformColor("@android:color/system_accent2_900").toString(), PlatformColor("@android:color/system_accent2_1000").toString()],
    // system_accent3:  [PlatformColor("@android:color/system_accent3_0").toString(), PlatformColor("@android:color/system_accent3_10").toString(), PlatformColor("@android:color/system_accent3_50").toString(), PlatformColor("@android:color/system_accent3_100").toString(), PlatformColor("@android:color/system_accent3_200").toString(), PlatformColor("@android:color/system_accent3_300").toString(), PlatformColor("@android:color/system_accent3_400").toString(), PlatformColor("@android:color/system_accent3_500").toString(), PlatformColor("@android:color/system_accent3_600").toString(), PlatformColor("@android:color/system_accent3_700").toString(), PlatformColor("@android:color/system_accent3_800").toString(), PlatformColor("@android:color/system_accent3_900").toString(), PlatformColor("@android:color/system_accent3_1000").toString()],
    // system_neutral1: [PlatformColor("@android:color/system_neutral1_0").toString(), PlatformColor("@android:color/system_neutral1_10").toString(), PlatformColor("@android:color/system_neutral1_50").toString(), PlatformColor("@android:color/system_neutral1_100").toString(), PlatformColor("@android:color/system_neutral1_200").toString(), PlatformColor("@android:color/system_neutral1_300").toString(), PlatformColor("@android:color/system_neutral1_400").toString(), PlatformColor("@android:color/system_neutral1_500").toString(), PlatformColor("@android:color/system_neutral1_600").toString(), PlatformColor("@android:color/system_neutral1_700").toString(), PlatformColor("@android:color/system_neutral1_800").toString(), PlatformColor("@android:color/system_neutral1_900").toString(), PlatformColor("@android:color/system_neutral1_1000").toString()],
    // system_neutral2: [PlatformColor("@android:color/system_neutral2_0").toString(), PlatformColor("@android:color/system_neutral2_10").toString(), PlatformColor("@android:color/system_neutral2_50").toString(), PlatformColor("@android:color/system_neutral2_100").toString(), PlatformColor("@android:color/system_neutral2_200").toString(), PlatformColor("@android:color/system_neutral2_300").toString(), PlatformColor("@android:color/system_neutral2_400").toString(), PlatformColor("@android:color/system_neutral2_500").toString(), PlatformColor("@android:color/system_neutral2_600").toString(), PlatformColor("@android:color/system_neutral2_700").toString(), PlatformColor("@android:color/system_neutral2_800").toString(), PlatformColor("@android:color/system_neutral2_900").toString(), PlatformColor("@android:color/system_neutral2_1000").toString()],
    system_accent1: ["#FFFFFF", "#FAFAFA", "#F9F9F9", "#F8F8F8", "#F7F7F7", "#F6F6F6", "#F5F5F5", "#F4F4F4", "#F3F3F3", "#F2F2F2", "#F1F1F1", "#EFEFEF", "#EEEEEE"],
    system_accent2: ["#FFFFFF", "#FAFAFA", "#F9F9F9", "#F8F8F8", "#F7F7F7", "#F6F6F6", "#F5F5F5", "#F4F4F4", "#F3F3F3", "#F2F2F2", "#F1F1F1", "#EFEFEF", "#EEEEEE"],
    system_accent3: ["#FFFFFF", "#FAFAFA", "#F9F9F9", "#F8F8F8", "#F7F7F7", "#F6F6F6", "#F5F5F5", "#F4F4F4", "#F3F3F3", "#F2F2F2", "#F1F1F1", "#EFEFEF", "#EEEEEE"],
    system_neutral1: ["#FFFFFF", "#FAFAFA", "#F9F9F9", "#F8F8F8", "#F7F7F7", "#F6F6F6", "#F5F5F5", "#F4F4F4", "#F3F3F3", "#F2F2F2", "#F1F1F1", "#EFEFEF", "#EEEEEE"],
    system_neutral2: ["#FFFFFF", "#FAFAFA", "#F9F9F9", "#F8F8F8", "#F7F7F7", "#F6F6F6", "#F5F5F5", "#F4F4F4", "#F3F3F3", "#F2F2F2", "#F1F1F1", "#EFEFEF", "#EEEEEE"],
});

/**
 * 
 * @returns 
 */
export const getPalette = async () => {
    try {
        const palette = await RNMaterialYouModule?.getMaterialYouPalettePromise();
        if(!palette)
            throw new Error("Material You is not supported on this device.");

        return { ...palette }
    } catch (err) {
        console.error(err);
        return getInitialPalette();
    }
}

export const getPaletteSync = (): MaterialYouPalette | null => {
    try {
        const palette = getInitialPalette();

        if(!palette)
            throw new Error("Material You is not supported on this device.");

        return { ...palette }
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const deviceSupportsMaterialYou = () => RNMaterialYouModule?.isSupported ?? false;

let cachedPalette: MaterialYouPalette = null as unknown as MaterialYouPalette;

const getInitialPalette = () => RNMaterialYouModule?.initialPalette ?? cachedPalette ?? DEFAULT_PALETTE;


/**
 * Hook to get the generated Material You colors.
 * @category React
 * @returns {MaterialYouPalette}
 */
export const useMaterialYou = () => {
    type State = {
        palette: MaterialYouPalette;
        isSupported: boolean;
        _refresh: () => void;
    }
    const stateRef = React.useRef(null as unknown as State);
    const [palette, setPalette] = React.useState<MaterialYouPalette>(getInitialPalette());

    if (stateRef.current === null) {
        const _refresh = async () => {
            const plt = await getPalette();

            if (plt && plt.system_accent1 && plt.system_accent2 && plt.system_accent3 && plt.system_neutral1 && plt.system_neutral2) {
                setPalette(plt)
                cachedPalette = plt;
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
    palette: MaterialYouPalette;
    _refresh: () => void;
    isSupported: boolean;
}

const MaterialYouContext = React.createContext(null as unknown as MaterialYouState);

export const MaterialYouService = ({children}: {children: React.ReactNode}) => {
    const materialYouApi = useMaterialYou();

    // Update color on app focus change.
    React.useEffect(() => {
        if(!materialYouApi.isSupported)
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

export const useMaterialYouPalette = () => {
    const {palette} = React.useContext(MaterialYouContext);

    return palette;
}

export const useMaterialYouService = () => {
    return React.useContext(MaterialYouContext)
}

// export default { getPalette, getPaletteSync, deviceSupportsMaterialYou, useMaterialYou, useMaterialYouPalette, useMaterialYouService, MaterialYouService };