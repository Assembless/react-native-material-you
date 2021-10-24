import React from 'react'
import ReactNative, { Button, Pressable, StatusBar, Text, View } from "react-native";
import  { useMaterialYou } from '@assembless/react-native-material-you'

const shades = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const App = () => {
  return <View>
    <Demo />
  </View>
}

const Demo = () => {
  const { palette, isSupported, _refresh } = useMaterialYou();

  const [primaryColor, setPrimaryColor] = React.useState(palette?.system_accent1?.[2] ?? "#FFF");
  const [secondColor, setSecondColor] = React.useState(palette?.system_accent1?.[3] ?? "#EEE");
  const [textColor, setTextColor] = React.useState([...palette?.system_accent1].reverse()?.[2] ?? "#000");

  React.useEffect(() => {
      setPrimaryColor(palette?.system_accent1?.[2] ?? "#FFF");
      setSecondColor(palette?.system_accent1?.[3] ?? "#EEE");
      setTextColor([...palette?.system_accent1].reverse()?.[2] ?? "#000");
    }, [palette?.system_accent1?.[5]]);

  if (!isSupported)
    return <Text>Material You seems to not be supported on your device. Sorry :/</Text>

  if (!palette || !palette.system_accent1 || !palette.system_accent2 || !palette.system_accent3 || !palette.system_neutral1 || !palette.system_neutral2) {
    return <View>
      <Text>Material You is loading...</Text>
      <Button title="Refresh" onPress={_refresh}><Text>Refresh</Text></Button>
    </View>
  }

  const setUiColor = (color: keyof typeof palette) => (index: number) => {
    setPrimaryColor(palette[color][index]);
    setSecondColor(palette[color][index + 1] ?? palette[color][index - 1]);
    setTextColor([...palette[color]].reverse()[index]);
  }

  const system_accent1El = palette.system_accent1.map(mapToComponent(setUiColor("system_accent1"), primaryColor, textColor))
  const system_accent2El = palette.system_accent2.map(mapToComponent(setUiColor("system_accent2"), primaryColor, textColor))
  const system_accent3El = palette.system_accent3.map(mapToComponent(setUiColor("system_accent3"), primaryColor, textColor))
  const system_neutral1El = palette.system_neutral1.map(mapToComponent(setUiColor("system_neutral1"), primaryColor, textColor))
  const system_neutral2El = palette.system_neutral2.map(mapToComponent(setUiColor("system_neutral2"), primaryColor, textColor))

  return <>
    <StatusBar backgroundColor={secondColor} barStyle="dark-content" />
    <ReactNative.View style={{ paddingVertical: 18, backgroundColor: secondColor }}>
      <ReactNative.Text style={{ color: textColor, fontSize: 18, textAlign: "center" }}>Material You for RN</ReactNative.Text>
      <ReactNative.Text style={{ color: textColor, fontSize: 14, textAlign: "center" }}>(Assembless Research)</ReactNative.Text>
    </ReactNative.View>

    <ReactNative.ScrollView style={{ backgroundColor: secondColor }}>
      <ReactNative.View style={{ marginTop: 18, paddingHorizontal: 12 }}>
        <ReactNative.View style={{ padding: 32, marginBottom: 15, backgroundColor: primaryColor, borderRadius: 32 }}>
          <ReactNative.Text style={{ color: textColor, fontSize: 16, marginBottom: 12 }}><ReactNative.Text style={{ color: "rgba(0, 0, 0, 0.4)" }}>R.color.</ReactNative.Text><ReactNative.Text>system_accent1</ReactNative.Text></ReactNative.Text>
          <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_accent1El}</ReactNative.View>
        </ReactNative.View>
        <ReactNative.View style={{ marginVertical: 15, padding: 32, backgroundColor: primaryColor, borderRadius: 32 }}>
          <ReactNative.Text style={{ color: textColor, fontSize: 16, marginBottom: 12 }}><ReactNative.Text style={{ color: "rgba(0, 0, 0, 0.4)" }}>R.color.</ReactNative.Text><ReactNative.Text>system_accent2</ReactNative.Text></ReactNative.Text>
          <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_accent2El}</ReactNative.View>
        </ReactNative.View>
        <ReactNative.View style={{ marginVertical: 15, padding: 32, backgroundColor: primaryColor, borderRadius: 32 }}>
          <ReactNative.Text style={{ color: textColor, fontSize: 16, marginBottom: 12 }}><ReactNative.Text style={{ color: "rgba(0, 0, 0, 0.4)" }}>R.color.</ReactNative.Text><ReactNative.Text>system_accent3</ReactNative.Text></ReactNative.Text>
          <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_accent3El}</ReactNative.View>
        </ReactNative.View>
        <ReactNative.View style={{ marginVertical: 15, padding: 32, backgroundColor: primaryColor, borderRadius: 32 }}>
          <ReactNative.Text style={{ color: textColor, fontSize: 16, marginBottom: 12 }}><ReactNative.Text style={{ color: "rgba(0, 0, 0, 0.4)" }}>R.color.</ReactNative.Text><ReactNative.Text>system_neutral1</ReactNative.Text></ReactNative.Text>
          <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_neutral1El}</ReactNative.View>
        </ReactNative.View>
        <ReactNative.View style={{ marginVertical: 15, padding: 32, backgroundColor: primaryColor, borderRadius: 32 }}>
          <ReactNative.Text style={{ color: textColor, fontSize: 16, marginBottom: 12 }}><ReactNative.Text style={{ color: "rgba(0, 0, 0, 0.4)" }}>R.color.</ReactNative.Text><ReactNative.Text>system_neutral2</ReactNative.Text></ReactNative.Text>
          <ReactNative.View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start" }}>{system_neutral2El}</ReactNative.View>
        </ReactNative.View>
      </ReactNative.View>
    </ReactNative.ScrollView>
  </>
}

const ColorBlock = (props: { color: string, active: boolean }) => {
  return <ReactNative.View style={{ width: 52, height: 52, borderRadius: 52, marginBottom: 14, backgroundColor: props.color, borderColor: "#FFF", borderWidth: props.active ? 8 : 4 }}></ReactNative.View>
}

const mapToComponent = (setColor: (index: number) => void, primary: string, contrast: string) => (color: string, i: number) => {
  return <Pressable key={color} android_ripple={{ borderless: false, color: "rgba(0, 0, 0, 0.15)", radius: 100 }} style={{ borderRadius: 8 }} onPress={() => setColor(i)}>
    <ReactNative.View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginHorizontal: 12, marginVertical: 16 }}>
      <ColorBlock key={color + shades[i].toString()} color={color} active={color === primary} />
      <ReactNative.View>
        <ReactNative.Text style={{ color: contrast, textAlign: "center" }}>{shades[i]}</ReactNative.Text>
        <ReactNative.Text style={{ color: contrast, textAlign: "center" }}>{color}</ReactNative.Text>
      </ReactNative.View>
    </ReactNative.View>
  </Pressable>
}

export default App
