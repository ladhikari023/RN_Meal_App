import React from 'react'
import {View ,FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem'

function MealList(props) {
    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {props.navigation.navigate("MealDetail",{
                    id: itemData.item.id,
                })}
                }
            />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.displayedMeals}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
})

export default MealList