import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const Links = new Mongo.Collection('links');

const LinkSchema = new SimpleSchema()


Links.attachSchema( LinkSchema )
export default Links;
