import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';

import Restaurant from './components/Restaurant';
import ALLRESTAURANTS from '../ALLRESTAURANTS';


import Profilebutton from './components/Profile/Profilebutton';
import Profile from  './components/Profile';

import Searchbutton from './components/Search/Searchbutton';
import Search from './components/Search';

import GoBackbutton from './components/GoBackbutton';


import Name from './components/Profile/profileOpitions/Opition/Name'
import Adress from "./components/Profile/profileOpitions/Opition/Adress"
import Number from "./components/Profile/profileOpitions/Opition/Number"
import Email from "./components/Profile/profileOpitions/Opition/Email"

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="GoBackbutton"
                    component={GoBackbutton}
                    options={{headerShown: false}}
                />



                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{headerShown: false}}
                />



                <Stack.Screen
                    name="Restaurant"
                    component={Restaurant}
                />
                <Stack.Screen
                    name="ALLRESTAURANTS"
                    component={ALLRESTAURANTS}
                />

                

                <Stack.Screen
                    name="Profilebutton"
                    component={Profilebutton}
                    options={{headerShown: false}}

                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{headerShown: false}}
                />



                <Stack.Screen
                    name="Searchbutton"
                    component={Searchbutton}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{headerShown: false}}
                />



                 <Stack.Screen
                    name="Name"
                    component={Name}
                    options={{headerShown: false}}
                />

                   <Stack.Screen
                    name="Adress"
                    component={Adress}
                    options={{headerShown: false}}
                />

                   <Stack.Screen
                    name="Number"
                    component={Number}
                    options={{headerShown: false}}
                />
                
                <Stack.Screen
                    name="Email"
                    component={Email}
                    options={{headerShown: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>

  );
}
export default Router;