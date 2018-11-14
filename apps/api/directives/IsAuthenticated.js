import { AuthenticationError } from "apollo-server"
import { SchemaDirectiveVisitor } from "graphql-tools"
import {
  DirectiveLocation,
  GraphQLDirective,
  defaultFieldResolver
} from "graphql"

class IsAuthenticated extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName = "isAuthenticated") {
    return new GraphQLDirective({
      name: directiveName,
      locations: [DirectiveLocation.FIELD_DEFINITION]
    })
  }

  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async (root, args, context, info) => {
      if (context.user) return resolve.call(this, root, args, context, info)
      throw new AuthenticationError("You must be signed in")
    }
  }
}

export default IsAuthenticated
