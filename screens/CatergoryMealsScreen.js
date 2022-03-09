import React, { useState, useLayoutEffect } from 'react'
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy_data';

function CategoryMealsScreen(props) {

 // const [value, onChangeText] = useState(props.route.params.title);

  const categoryId = props.route.params.categoryId
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory.title === '' ? 'No title' : selectedCategory.title,
    });
  }, [props.navigation, selectedCategory.title]);

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)
  
  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  )
}

export default CategoryMealsScreen