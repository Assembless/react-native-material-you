package com.assembless.reactnativematerialyou

import android.R
import android.graphics.Color
import android.graphics.ColorSpace
import android.util.Log
import androidx.core.content.ContextCompat
import kotlin.collections.HashMap
import android.os.Build
import com.facebook.react.bridge.*
import com.facebook.react.bridge.WritableArray








class RNMaterialYouModule(val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNMaterialYouModule"

    override fun getConstants(): MutableMap<String, Any?> {
        val constants: MutableMap<String, Any?> = HashMap();

        constants["isSupported"] = isSupported();
        constants["initialPalette"] = getMaterialYouPalette();

        return constants;
    }

    private fun isSupported(): Boolean {
        return R.color.system_accent1_0 != null;
    }

    @ReactMethod
    public fun getMaterialYouPalettePromise(promise: Promise) {
        try {
            val colors = getMaterialYouPalette();
            promise.resolve(colors);
        } catch(e: Exception) {
            print(e);
            promise.reject("Create return palette", e);
        }
    }

    fun getMaterialYouPalette(): WritableMap? {
        if(isSupported() != true) {
            return null;
        }

        val system_accent1: WritableArray? = toWritableArray(arrayOf(
            R.color.system_accent1_0,
            R.color.system_accent1_10,
            R.color.system_accent1_50,
            R.color.system_accent1_100,
            R.color.system_accent1_200,
            R.color.system_accent1_300,
            R.color.system_accent1_400,
            R.color.system_accent1_500,
            R.color.system_accent1_600,
            R.color.system_accent1_700,
            R.color.system_accent1_800,
            R.color.system_accent1_900,
            R.color.system_accent1_1000
        ).map { colorToHex(it) });

        val system_accent2: WritableArray? = toWritableArray(arrayOf(
            R.color.system_accent2_0,
            R.color.system_accent2_10,
            R.color.system_accent2_50,
            R.color.system_accent2_100,
            R.color.system_accent2_200,
            R.color.system_accent2_300,
            R.color.system_accent2_400,
            R.color.system_accent2_500,
            R.color.system_accent2_600,
            R.color.system_accent2_700,
            R.color.system_accent2_800,
            R.color.system_accent2_900,
            R.color.system_accent2_1000
        ).map { colorToHex(it) });

        val system_accent3: WritableArray? = toWritableArray(arrayOf(
            R.color.system_accent3_0,
            R.color.system_accent3_10,
            R.color.system_accent3_50,
            R.color.system_accent3_100,
            R.color.system_accent3_200,
            R.color.system_accent3_300,
            R.color.system_accent3_400,
            R.color.system_accent3_500,
            R.color.system_accent3_600,
            R.color.system_accent3_700,
            R.color.system_accent3_800,
            R.color.system_accent3_900,
            R.color.system_accent3_1000
        ).map { colorToHex(it) });

        val system_neutral1: WritableArray? = toWritableArray(arrayOf(
            R.color.system_neutral1_0,
            R.color.system_neutral1_10,
            R.color.system_neutral1_50,
            R.color.system_neutral1_100,
            R.color.system_neutral1_200,
            R.color.system_neutral1_300,
            R.color.system_neutral1_400,
            R.color.system_neutral1_500,
            R.color.system_neutral1_600,
            R.color.system_neutral1_700,
            R.color.system_neutral1_800,
            R.color.system_neutral1_900,
            R.color.system_neutral1_1000
        ).map { colorToHex(it) });

        val system_neutral2: WritableArray? = toWritableArray(arrayOf(
            R.color.system_neutral2_0,
            R.color.system_neutral2_10,
            R.color.system_neutral2_50,
            R.color.system_neutral2_100,
            R.color.system_neutral2_200,
            R.color.system_neutral2_300,
            R.color.system_neutral2_400,
            R.color.system_neutral2_500,
            R.color.system_neutral2_600,
            R.color.system_neutral2_700,
            R.color.system_neutral2_800,
            R.color.system_neutral2_900,
            R.color.system_neutral2_1000
        ).map { colorToHex(it) });

        val colorMap: WritableMap = WritableNativeMap();

        colorMap.putArray("system_accent1", system_accent1);
        colorMap.putArray("system_accent2", system_accent2);
        colorMap.putArray("system_accent3", system_accent3);
        colorMap.putArray("system_neutral1", system_neutral1);
        colorMap.putArray("system_neutral2", system_neutral2);

        return colorMap;
    }

    private fun colorToHex(c: Int): String {
        if(c == null || c !is Int) {
            return "#00000000"
        }
        val hex = getColor(c);

        return java.lang.String.format("#%06X", 0xFFFFFF and hex);
    }

    fun getColor(id: Int): Int {
        val version = Build.VERSION.SDK_INT
        return if (version >= 23) {
            ContextCompat.getColor(reactContext, id)
        } else {
            reactContext.getResources().getColor(id)
        }
    }

    fun toWritableArray(array: List<Any?>): WritableArray? {
        val writableArray = Arguments.createArray()
        for (i in array.indices) {
            val value = array[i]
            if (value == null) {
                writableArray.pushNull()
            }
            if (value is Boolean) {
                writableArray.pushBoolean((value as Boolean?)!!)
            }
            if (value is Double) {
                writableArray.pushDouble((value as Double?)!!)
            }
            if (value is Int) {
                writableArray.pushInt((value as Int?)!!)
            }
            if (value is String) {
                writableArray.pushString(value as String?)
            }
        }
        return writableArray
    }
}