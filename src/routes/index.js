import { NavigationContainer } from "@react-navigation/native";

import { View, Text } from 'react-native'
import React from 'react'
import TabRoutes from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
        <TabRoutes />
    </NavigationContainer>
  )
}