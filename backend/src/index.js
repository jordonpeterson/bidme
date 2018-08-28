const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {

  Query: {
      bids(parent, args, ctx, info) {
          return ctx.db.query.bids(info)
      },
      bid(parent, { id }, ctx, info) {
          return ctx.db.query.bid({ where: { id } },info)
      },


      jobs(parent, args, ctx, info) {
          return ctx.db.query.jobs(info)
      },
      job(parent, { id }, ctx, info) {
          return ctx.db.query.job({ where: { id } },info)
      },
    //The below lines are not needed for my app.
    // feed(parent, args, ctx, info) {
    //   return ctx.db.query.posts({ where: { isPublished: true } }, info)
    // },
    // drafts(parent, args, ctx, info) {
    //   return ctx.db.query.posts({ where: { isPublished: false } }, info)
    // },
    // post(parent, { id }, ctx, info) {
    //   return ctx.db.query.post({ where: { id } }, info)
    // },
  },



  Mutation: {
      makeBid(parent, { price, comment, company, user}, ctx, info) {
          return ctx.db.mutation.createBid(
              {
                  data: {
                      price,
                      comment,
                        company,
                  },
              },
              info,                           //I don't know why it is asking for info here.
          )
      },
      editJob(parent, {id, description, title, user}, ctx, info){
          return ctx.db.mutation.updateJob(
              {
                  data:{
                      description,
                      title,
                      user,

                  },
                  where:{
                      id,
                  },
              },
              info,
          )
      },
    postJob(parent, { title, description, user}, ctx, info) {
      return ctx.db.mutation.createJob(
          {
              data: {
                title,
                description,
                user,
              },
          },
          info,                           //I don't know why it is asking for info here.
      )
    },
      deleteJob(parent, { id }, ctx, info) {
          return ctx.db.mutation.deleteJob({ where: { id } }, info)
      },
      deleteBid(parent, { id }, ctx, info) {
          return ctx.db.mutation.deleteBid({ where: { id } }, info)
      },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: 'https://us1.prisma.sh/public-firdiver-396/backend/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
