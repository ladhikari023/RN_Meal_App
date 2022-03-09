import React, { useState, useLayoutEffect, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import Colors from '../utils/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const FilterSwitch = (props) => {
  return(
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch 
        value={props.state} 
        onValueChange={props.onChange} 
        trackColor ={{true: Colors.primaryColor}}
        thumbColor = {Colors.accentColor}
      />
    </View>
  )
}

function FilterScreen(props) {

  const navigation = props.navigation

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

const appliedFilters = {
  glutenFree: isGlutenFree,
  LactoseFree: isLactoseFree,
  isVegan: isVegan,
  isVegetarian: isVegetarian,
}

useEffect(() => {
  navigation.navigate('FilterScreen',{
    save: saveFilter
  })
},[saveFilter])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Save' 
            iconName='ios-save' 
            onPress={() => {}}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch label='Gluten-Free' state={isGlutenFree} onChange={(newValue) => {setIsGlutenFree(newValue)}}/>
        <FilterSwitch label='Lactose-Free' state={isLactoseFree} onChange={(newValue) => {setIsLactoseFree(newValue)}}/>
        <FilterSwitch label='Vegan' state={isVegan} onChange={(newValue) => {setIsVegan(newValue)}}/>
        <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={(newValue) => {setIsVegetarian(newValue)}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
      fontFamily: 'huballi',
      fontSize: 25,
      margin: 20,
      textAlign: 'center'
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 10,
    }
})

export default FilterScreen