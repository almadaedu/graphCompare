import { View, Text } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const Line = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2 
            }
          ],
          legend: ["Rainy Days"]
        }}
        width={2}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default Line;
