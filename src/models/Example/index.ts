import { model } from 'mongoose';

import Schema from './schema';
import { ModelNames } from "../constants";
import { Example } from "./interface";

export default model<Example>(ModelNames.EXAMPLE, Schema);