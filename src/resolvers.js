const users = [
  { id: 1, name: 'Neutrino', email: 'x1@example.com' },
  { id: 1, name: 'Bóson', email: 'x2@example.com' },
]

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0]
  }
}