const app = require('./app'); // Load your Express app separately
const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = server; // Export for tests
