import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy_data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

function CategoriesScreen(props) {

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

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=> {
          props.navigation.navigate('CategoryMeals',{
              categoryId: itemData.item.id,
            })
        }}
      />
    )
  }
  return (
    <FlatList 
      numColumns={2}
      data = {CATEGORIES}
      renderItem={renderGridItem}
      style={{backgroundColor: 'white'}}
    />
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

})

export default CategoriesScreen