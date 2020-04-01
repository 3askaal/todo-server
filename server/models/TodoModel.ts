import { Schema, model, Model } from 'mongoose';

export const TodoSchema: Schema = new Schema({
  content: { type: String },
  completed: { type: Boolean, default: false },
  created: { type: Date, default: Date.now }
});

export const Col: Model<any> = model('todo', TodoSchema);
