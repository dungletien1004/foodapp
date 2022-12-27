import React from 'react'
import AvaiableMeals from './AvaiableMeals'
import MealsSummary from './MealsSummary'

export default function Meals() {
  return (
    <React.Fragment>
      <MealsSummary/>
      <AvaiableMeals />
    </React.Fragment>
  )
}
