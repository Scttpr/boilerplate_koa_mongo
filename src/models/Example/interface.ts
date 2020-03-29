import { Document } from "mongoose";

export interface Example extends Document {
    dummyField: string;
}