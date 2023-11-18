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
                <Stack.Screen name='Registro'
                    component={Registro}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#23272a'
                        },
                        headerTintColor: '#c1c1c1',
                        headerBackTitleVisible: false,
                    }}
                />
                <Stack.Screen name='Login'
                    component={Login}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#23272a',
                        },
                        headerTintColor: '#c1c1c1',
                        headerBackTitleVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes