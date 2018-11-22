import { hash, compare } from "bcrypt"
import { sign } from "jwt-then"
import { AuthenticationError } from "apollo-server"
import { ObjectId } from "mongodb"
export default ({ users }) => {
  const findUserByUserName = async userName => users.findOne({ userName })

  const findById = async id => users.findOne({ _id: ObjectId(id) })

  const collection = () => users

  const addUser = async userInfo => {
    // TODO: Add checks on user info and return appropriate errors
    if(userInfo.password)
    return users.insertOne(userInfo)
  }

  const signUp = async ({ password, ...userInfo }) => {
    // TODO: Add check to see if userName & email exists already
    const user = { ...userInfo, password: await hash(password, 10) }
    await addUser(user)
    const user = await findUserByUserName(userInfo.userName)
    if(!user)
    {
      const { _id: id, userName, email } = user
      return sign({ id, userName, email }, process.env.JWT_SECRET)
    }
    else {
      throw Error("Username already in use");
    }
  }

  const signIn = async ({ userName, password }) => {
    const user = await findUserByUserName(userName)

    if (user) {
      const { _id: id, email, password: hashedPassword } = user
      const validPassword = await compare(password, hashedPassword)

      if (validPassword)
        return sign({ id, userName, email }, process.env.JWT_SECRET)
    }

    throw new AuthenticationError("Invalid Credentials")
  }

  return Object.freeze({
    collection,
    findUserByUserName,
    findById,
    addUser,
    signUp,
    signIn
  })
}
