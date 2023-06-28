import { View, Text } from "react-native";
import React from "react";

import {
  VictoryPie,
} from "victory-native";
import { data } from "../data";
export default function Pie() {

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{textAlign: "center", alignItems: "center"}}>
      <Text style={{ fontSize: 24 }}>
          Victory Charts
        </Text>
        <Text style={{ fontSize: 18 }}>
          Gráfico de Pizza
        </Text>
      </View>

        <VictoryPie colorScale={["tomato", "orange", "gold", "purple", "blue", "red", "pink"]} data={data} />

    </View>
  );
}
