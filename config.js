exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = 'blitz';
exports.CALLBACK_URL = 'http://localhost:3001';
exports.TOPIC = '/event/Return_Status__e';
exports.REPLAY_ID = -1;

exports.CLIENT_ID = "<YOUR_CLIENT_ID>";
exports.CLIENT_SECRET = "<YOUR_CLIENT_SECRET>";
exports.USERNAME = "<YOUR_USERNAME>";
exports.PASSWORD = "<YOUR_PASSWORD>";
