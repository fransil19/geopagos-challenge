const server = require('./src/server.js');
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Tournament service listening on port ${PORT}`);
  });
});