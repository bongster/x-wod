import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const Workouts = new Mongo.Collection('workouts');

const WorkoutSchema = new SimpleSchema()


Workouts.attachSchema( WorkoutSchema )
export default Workouts;
