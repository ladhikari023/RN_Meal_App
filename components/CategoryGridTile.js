import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native'

function CategoryGridTile(props) {
  return (
    <TouchableOpacity
        onPress={props.onSelect}
        style={styles.gridItem}
        >
        <View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    },
    container: {
        flex: 1,
        // For ios
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        // end ios
        elevation: 3, // For android
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
    },
    title: {
        fontFamily: 'huballi',
        fontSize: 20,
        textAlign: 'right',
    }
})

export default CategoryGridTile