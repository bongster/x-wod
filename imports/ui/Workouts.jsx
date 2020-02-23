import React, { useState } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import styled from 'styled-components';

import workouts from '../api/workouts';

const Workout = styled.section`
  box-shadow: 3px 5px 5px 3px grey;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`

const WorkoutMain = ({ workout }) => {
  return (
    <React.Fragment>
      <section>Title / date</section>
      <section> Warm up </section>
      <section> Weighting lift</section>
      <section> Metcon </section>
      <section> Accessory workout </section>
    </React.Fragment>
  )
}

const Workouts = ({ workouts }) => {
  return (
    <div>
      <h1>Workouts </h1>
      <section className="container">
        workout List <button>Create</button>
        {workouts.map((workout, i) => (
          <Workout key={i}>
            <WorkoutMain></WorkoutMain>
          </Workout>
        ))}

      </section>
    </div>
  )
}

export default withTracker(() => ({
  workouts: new Array(10).fill({}),
  // workouts: workouts.find({}).fetch(),
}))(Workouts)