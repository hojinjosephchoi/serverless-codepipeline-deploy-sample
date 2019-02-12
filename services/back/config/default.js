module.exports = {
  project: 'back.services',

  database: {
    type: 'mysql',
    host: 'localhost',
    port: 13306,
    database: 'back',
    user: 'dbuser',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    pool_size: 3,
  },

};
