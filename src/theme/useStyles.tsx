import { StyleSheet } from "react-native";
import { TColors } from "./colors";
import useColors from "./hooks";
import { useMemo } from "react";


interface Styles<T extends StyleSheet.NamedStyles<T>>{
    colors:TColors;
    styles:T
}

export default function<T extends StyleSheet.NamedStyles<T>>(
    createStyle: (colors: TColors) => T,
):Styles<T>{
    const {color} = useColors();
    return {
        colors: color,
        styles: useMemo(() => createStyle(color), [color, createStyle]),
      };
}