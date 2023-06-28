import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';
import Pizza from '../screens/Pizza'
import Bar from '../screens/Bar'
import Line from '../screens/Line'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name='Pizza'
                component={Pizza}
                options={{
                    tabBarIcon: () => <AntDesign name="piechart" size={24} color="black" />
                }}
            />
            <Tab.Screen 
                name='Bar'
                component={Bar}
                options={{
                    tabBarIcon: () => <AntDesign name="barschart" size={24} color="black" />
                }}
            />
            <Tab.Screen 
                name='Line'
                component={Line}
                options={{
                    tabBarIcon: () => <AntDesign name="linechart" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}