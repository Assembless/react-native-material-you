import React, { useEffect } from 'react'
import ReactNative from "react-native";
import MaterialYou from 'react-native-material-you'

const shades = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const App = () => {
  const system_accent1El = MaterialYou.system_accent1.map(mapToComponent)
  const system_accent2El = MaterialYou.system_accent2.map(mapToComponent)
  const system_accent3El = MaterialYou.system_accent3.map(mapToComponent)
  const system_neutral1El = MaterialYou.system_neutral1.map(mapToComponent)
  const system_neutral2El = MaterialYou.system_neutral2.map(mapToComponent)

  useEffect(() => {
    console.log("MaterialYou Package =>", MaterialYou)
  })

  return <ReactNative.ScrollView>
    <ReactNative.Text>Material You for RN (Assembless Research)</ReactNative.Text>

    <ReactNative.View style={{ marginTop: 18 }}>
      <ReactNative.View style={{ paddingVertical: 26, borderTopColor: "#eee", borderTopWidth: 2 }}>
        <ReactNative.Text>system_accent1</ReactNative.Text>
        <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_accent1El}</ReactNative.View>
      </ReactNative.View>
      <ReactNative.View style={{ paddingVertical: 26, borderTopColor: "#eee", borderTopWidth: 2 }}>
        <ReactNative.Text>system_accent2</ReactNative.Text>
        <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_accent2El}</ReactNative.View>
      </ReactNative.View>
      <ReactNative.View style={{ paddingVertical: 26, borderTopColor: "#eee", borderTopWidth: 2 }}>
        <ReactNative.Text>system_accent3</ReactNative.Text>
        <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_accent3El}</ReactNative.View>
      </ReactNative.View>
      <ReactNative.View style={{ paddingVertical: 26, borderTopColor: "#eee", borderTopWidth: 2 }}>
        <ReactNative.Text>system_neutral1</ReactNative.Text>
        <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_neutral1El}</ReactNative.View>
      </ReactNative.View>
      <ReactNative.View style={{ paddingVertical: 26, borderTopColor: "#eee", borderTopWidth: 2 }}>
        <ReactNative.Text>system_neutral2</ReactNative.Text>
        <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_neutral2El}</ReactNative.View>
      </ReactNative.View>
    </ReactNative.View>
  </ReactNative.ScrollView>
}

const ColorBlock = (props: { color: string }) => {
  return <ReactNative.View style={{ width: 52, height: 52, borderRadius: 52, marginBottom: 14, backgroundColor: props.color }}></ReactNative.View>
}

const mapToComponent = (color: string, i: number) => {
  return <ReactNative.View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginHorizontal: 12, marginVertical: 16 }}>
    <ColorBlock key={color + shades[i].toString()} color={color} />
    <ReactNative.View>
      <ReactNative.Text style={{ color: "#000", textAlign: "center" }}>{shades[i]}</ReactNative.Text>
      <ReactNative.Text style={{ color: "#000", textAlign: "center" }}>{color}</ReactNative.Text>
    </ReactNative.View>
  </ReactNative.View>;
}

export default App
