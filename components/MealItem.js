import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

function MealItem(props) {
  return (
    <TouchableOpacity
        onPress={props.onSelectMeal}
        style={styles.mealItem}
    >
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri : props.image}} style={styles.bg}>
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '90%',
        backgroundColor: 'lightgrey',
        marginVertical: '5%',
        marginHorizontal: '5%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    bg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealRow:{
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '15%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'huballi',
        fontSize: 25,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    }
})

export default MealItem