var { getEnv } = require('./src/utils/getEnv');
var { app } = require('./src/app');

var port = getEnv('PORT', 4000);

app.listen(port, () => {
    console.log(`App running on port ${port}!`);
});

