import { View, Text } from "react-native";
import React from "react";

import {
  VictoryPie,
} from "victory-native";
import { data } from "../data";
export default function Pie() {

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Gráfico de Pizza
        </Text>
        <VictoryPie colorScale={["tomato", "orange", "gold", "purple", "blue", "red", "pink"]} data={data} />

    </View>
  );
}
