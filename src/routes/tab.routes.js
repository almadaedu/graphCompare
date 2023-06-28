import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';import Home from '../screens/Home'
import Graph01 from '../screens/Graph01'
import Graph02 from '../screens/Graph02'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => <AntDesign name="piechart" size={24} color="black" />
                }}
            />
            <Tab.Screen 
                name='Graph01'
                component={Graph01}
            />
            <Tab.Screen 
                name='Graph02'
                component={Graph02}
            />
        </Tab.Navigator>
    )
}