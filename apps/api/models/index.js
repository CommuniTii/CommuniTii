import getUserModel from "./Users"

export default ({ collections }) => ({
  users: getUserModel(collections)
})
