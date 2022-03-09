import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy_data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'


const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}

function MealDetailScreen(props) {
  //const [value, onChangeText] = useState(props.route.params.title);

  const mealId = props.route.params.id
  const selectedMeal = MEALS.find(cat => cat.id === mealId)

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title === '' ? 'A Meal' : selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Favorite' 
            iconName='ios-star' 
            onPress={() => {
              console.log('Ssup I click')
            }}
          />
        </HeaderButtons>
      )
    });
  }, [props.navigation, selectedMeal.title]);

  return (
    <ScrollView>
      <Image
        source={{uri : selectedMeal.imageUrl}}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>

      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>
          {ingredient}
        </ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>

      {selectedMeal.steps.map(step => (
        <ListItem key={step}>
          {step}
        </ListItem>
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200,
    },
    details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around',
    },
    title: {
      fontSize: 20,
      textAlign: 'center'
    },
    listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 2,
      padding: 10
    }
})

export default MealDetailScreen