import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/Main';
import Login from '../screens/Login';
import Registro from '../screens/Registro';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main'
                    component={Main}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Registro' component={Registro} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes