import { merge } from "lodash"

import Query from "./Query"
import Mutation from "./Mutation"
import User from "./User"

export default merge(Query, Mutation, User)
