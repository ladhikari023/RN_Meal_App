import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CatergoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import Colors from '../utils/Colors';
import FilterScreen from '../screens/FiltersScreen';

const Stack = createStackNavigator()
const MainNavigator = createDrawerNavigator()

const defaultStackNavOptions = {
    headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' },
    headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
    presentation: 'card'
}

function MealsStackNavigator(props){
    return (
        <Stack.Navigator
            screenOptions={defaultStackNavOptions}>
                <Stack.Screen 
                    name="Categories"
                    component={CategoriesScreen} 
                    options={ () => ({
                        title: 'CUISINES CATEGORIES',
                    })}/>
                <Stack.Screen 
                    name="CategoryMeals" 
                    component={CategoryMealsScreen} 
                    options={({ route }) => ({
                        title: route.params.title,
                    })}
                />
                <Stack.Screen 
                    name="MealDetail" 
                    component={MealDetailScreen} 
                    options={({ route }) => ({
                        title: route.params.title,
                    })}
                />
        </Stack.Navigator>
    )
}

function FavoriteStackNavigator(props) {
    return(
        <Stack.Navigator
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    title: 'FAVOURTIE MEALS',
                    // headerLeft: () => (
                    //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    //         <Item 
                    //             title='Menu'
                    //             iconName='ios-menu'
                    //             onPress={() => {props.navigation.openDrawer()}}
                    //         />
                    //     </HeaderButtons>
                    // )
                }}
            />
            <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen} 
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    )
}

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator();

const getNavigationOptions = (props) => {
    if (Platform.OS === 'ios') {
        //Props for the ios navigator bottom Tab
        return {
            screenOptions: {
                headerShown: false,
                tabBarActiveTintColor: Colors.accentColor,
                tabBarInactiveTintColor: Colors.accentColor,
            },
        };
    }
      //Props for any other OS navigator
    return {
        activeColor: 'white',
        inactiveColor: 'white',
        shifting: 'true',
    };
}

function MealsFabTabNavigator(){
    return(
        <Tab.Navigator
            {...getNavigationOptions()}>
            <Tab.Screen 
                name="Meals" 
                component={MealsStackNavigator}
                options={({ route }) => ({
                    tabBarLabel: 'Meals',
                    tabBarIcon: ({focused,color}) => (
                        <Ionicons 
                            name = {focused ? 'restaurant' : 'restaurant-outline'}
                            size = {25}
                            color = {color}
                        />
                    ),
                    tabBarColor: Colors.primaryColor,
                })}
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoriteStackNavigator}
                options={({ route }) => ({
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({focused,color,size}) => (
                        <Ionicons 
                            name = {focused ? 'star' : 'star-outline'}
                            size = {25}
                            color = {color}
                        />
                    ),
                    tabBarColor: Colors.accentColor,
                })}
            />
        </Tab.Navigator>
    )
}

function MainDrawerNavigator(){
    return(
        <NavigationContainer>
            <MainNavigator.Navigator
                screenOptions={{
                    ...defaultStackNavOptions, 
                    //drawerType: 'back',
                    //swipeEdgeWidth: 100,
                    //overlayColor: 'white',
                    drawerActiveTintColor: Colors.accentColor,
                    drawerInactiveTintColor: Colors.primaryColor,
                    drawerLabelStyle: {
                        fontSize: 20,
                        fontFamily: 'huballi'
                    }
                }}
            >
                <MainNavigator.Screen 
                    name="MealsAndFavs"
                    component={MealsFabTabNavigator}
                    options={{
                        headerShown: false,
                        drawerLabel: 'MEALS & FAVS'
                    }}
                />
                <MainNavigator.Screen
                    name="FilterStack"
                    component={FilterScreen}
                    options={{
                        drawerLabel: 'FILTERS',
                        title: 'FILTERS'
                    }}
                />
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}


export default MainDrawerNavigator