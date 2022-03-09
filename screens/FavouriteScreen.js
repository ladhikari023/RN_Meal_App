import React , {useLayoutEffect} from 'react'
import { MEALS } from '../data/dummy_data'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm3')

function FavouriteScreen(props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Menu'
                iconName='ios-menu'
                onPress={() => {props.navigation.toggleDrawer()}}
            />
        </HeaderButtons>
      )
    })
  },[])

  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation}/>
  )
}

export default FavouriteScreen