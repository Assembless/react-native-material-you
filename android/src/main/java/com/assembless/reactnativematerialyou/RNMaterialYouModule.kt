package com.assembless.reactnativematerialyou

import android.graphics.Color
import android.graphics.ColorSpace
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import kotlin.collections.HashMap


class RNMaterialYouModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNMaterialYouModule"

    override fun getConstants(): MutableMap<String, Any> {
        val color: MutableMap<String, Any> = HashMap()

        // TODO: Avoid this ugly repetition down there.
        /*val shades = arrayOf("0", "10", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000");
        val colors = arrayOf("accent1", "accent2", "accent3", "neutral1", "neutral2");

        val color: MutableMap<String, Any> = HashMap()

        for(c in colors) {
            val colorShades = arrayOf<String>();

            for(s in shades) {
                val cName = "system_" + c + "_" + s;
                val rClr = listOf(android.R.color);

                colorShades.plus(rClr[cName]);
            }

            color["system_$c"] = colorShades;
        }*/

        color["system_accent1"] = arrayOf(
            android.R.color.system_accent1_0,
            android.R.color.system_accent1_10,
            android.R.color.system_accent1_50,
            android.R.color.system_accent1_100,
            android.R.color.system_accent1_200,
            android.R.color.system_accent1_300,
            android.R.color.system_accent1_400,
            android.R.color.system_accent1_500,
            android.R.color.system_accent1_600,
            android.R.color.system_accent1_700,
            android.R.color.system_accent1_800,
            android.R.color.system_accent1_900,
            android.R.color.system_accent1_1000
        ).map { colorToHex(it) };

        color["system_accent2"] = arrayOf(
            android.R.color.system_accent2_0,
            android.R.color.system_accent2_10,
            android.R.color.system_accent2_50,
            android.R.color.system_accent2_100,
            android.R.color.system_accent2_200,
            android.R.color.system_accent2_300,
            android.R.color.system_accent2_400,
            android.R.color.system_accent2_500,
            android.R.color.system_accent2_600,
            android.R.color.system_accent2_700,
            android.R.color.system_accent2_800,
            android.R.color.system_accent2_900,
            android.R.color.system_accent2_1000
        ).map { colorToHex(it) };

        color["system_accent3"] = arrayOf(
            android.R.color.system_accent3_0,
            android.R.color.system_accent3_10,
            android.R.color.system_accent3_50,
            android.R.color.system_accent3_100,
            android.R.color.system_accent3_200,
            android.R.color.system_accent3_300,
            android.R.color.system_accent3_400,
            android.R.color.system_accent3_500,
            android.R.color.system_accent3_600,
            android.R.color.system_accent3_700,
            android.R.color.system_accent3_800,
            android.R.color.system_accent3_900,
            android.R.color.system_accent3_1000
        ).map { colorToHex(it) };

        color["system_neutral1"] = arrayOf(
            android.R.color.system_neutral1_0,
            android.R.color.system_neutral1_10,
            android.R.color.system_neutral1_50,
            android.R.color.system_neutral1_100,
            android.R.color.system_neutral1_200,
            android.R.color.system_neutral1_300,
            android.R.color.system_neutral1_400,
            android.R.color.system_neutral1_500,
            android.R.color.system_neutral1_600,
            android.R.color.system_neutral1_700,
            android.R.color.system_neutral1_800,
            android.R.color.system_neutral1_900,
            android.R.color.system_neutral1_1000
        ).map { colorToHex(it) };

        color["system_neutral2"] = arrayOf(
            android.R.color.system_neutral2_0,
            android.R.color.system_neutral2_10,
            android.R.color.system_neutral2_50,
            android.R.color.system_neutral2_100,
            android.R.color.system_neutral2_200,
            android.R.color.system_neutral2_300,
            android.R.color.system_neutral2_400,
            android.R.color.system_neutral2_500,
            android.R.color.system_neutral2_600,
            android.R.color.system_neutral2_700,
            android.R.color.system_neutral2_800,
            android.R.color.system_neutral2_900,
            android.R.color.system_neutral2_1000
        ).map { colorToHex(it) };

        return color
    }

    private fun colorToHex(c: Int): Int {

        return c;
        //return java.lang.String.format("#%06X", 0xFFFFFF and c)
    }
}
