const bcrypt = require('bcryptjs');


const resolvers = {
  Query: {
      async user (root, { id }, { models }) {
            return models.User.findByPk(id);
      },
      async allClubs (root, args, { models }) {
            return models.Club.findAll()
      },
      async club (root, { id }, { models }) {
            return models.Club.findById(id)
      }
    },
  Mutation: {
    async createUser (root, { name, email, password }, { models }) {
        return models.User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10)
          })
    },
    async createClub (root, { userId, title, details, location }, { models }) {
        return models.Club.create({ userId, title, details, location })
    }
  },
  User: {
    async clubs (user) {
        return user.getClubs()
    }
  },
  Club: {
      async user (club) {
          return club.getUser()
      }
  }
}

module.exports = resolvers;