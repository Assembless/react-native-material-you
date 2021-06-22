import React, { useEffect } from 'react'
import ReactNative from "react-native";
import MaterialYou from 'react-native-material-you'

const shades = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const App = () => {
  useEffect(() => {
    console.log("MaterialYou Package =>", MaterialYou)
    console.log("\n");

    MaterialYou.system_accent1.forEach((accent: number, i: number) => {
      const pClr =  parseColorInt(accent) ?? [];
      console.log(`Parsed rgba / system_accent1_${shades[i]} =>`, `rgba(${pClr[1]}, ${pClr[2]}, ${pClr[3]}, 0.${pClr[0]})`)
    })
    console.log("\n");
    MaterialYou.system_accent2.forEach((accent: number, i: number) => {
      const pClr =  parseColorInt(accent) ?? [];
      console.log(`Parsed rgba / system_accent2_${shades[i]} =>`, `rgba(${pClr[1]}, ${pClr[2]}, ${pClr[3]}, 0.${pClr[0]})`)
    })
    console.log("\n");
    MaterialYou.system_accent3.forEach((accent: number, i: number) => {
      const pClr =  parseColorInt(accent) ?? [];
      console.log(`Parsed rgba / system_accent3_${shades[i]} =>`, `rgba(${pClr[1]}, ${pClr[2]}, ${pClr[3]}, 0.${pClr[0]})`)
    })
    console.log("\n");
    MaterialYou.system_neutral1.forEach((accent: number, i: number) => {
      const pClr =  parseColorInt(accent) ?? [];
      console.log(`Parsed rgba / system_neutral1_${shades[i]} =>`, `rgba(${pClr[1]}, ${pClr[2]}, ${pClr[3]}, 0.${pClr[0]})`)
    })
    console.log("\n");
    MaterialYou.system_neutral2.forEach((accent: number, i: number) => {
      const pClr =  parseColorInt(accent) ?? [];
      console.log(`Parsed rgba / system_neutral2_${shades[i]} =>`, `rgba(${pClr[1]}, ${pClr[2]}, ${pClr[3]}, 0.${pClr[0]})`)
    })
  })

  return <ReactNative.View style={{backgroundColor: MaterialYou.system_accent1[7]}}>
    
    <ReactNative.Text style={{color: MaterialYou.system_neutral1[0]}}>My Pen is long: {JSON.stringify(MaterialYou)}</ReactNative.Text>
  </ReactNative.View>
}

const parseColorInt = (c: number) => {
  return c.toString().match(/.{1,2}/g);
}

export default App
