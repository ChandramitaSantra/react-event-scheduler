import { Schema, model } from 'mongoose';
import { IEvent } from '../interfaces/types';

const schema = new Schema<IEvent>({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    isPrivate: {
        type: Boolean,
        required: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const EventModel = model<IEvent>('Event', schema);
