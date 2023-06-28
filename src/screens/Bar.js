import { View, Text } from "react-native";
import React from "react";
import { BarChart, Grid } from "react-native-svg-charts";
import { data } from "../data";

const fill = "rgb(134, 65, 244)";

const Bar = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{textAlign: "center", alignItems: "center"}}>
      <Text style={{ fontSize: 24 }}>
          SVG Charts
        </Text>
        <Text style={{ fontSize: 18 }}>
          Gráfico de Barras
        </Text>
      </View>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    </View>
  );
};

export default Bar;
