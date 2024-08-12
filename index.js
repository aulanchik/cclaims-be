var { getEnv } = require('./src/utils/getEnv');
var { db } = require('./src/configs/db');
var { app } = require('./src/app');

db.connect((err) => {
    if(err) {
        console.log(`Error connecting to database: `, err);
        process.exit(1);
    } else {
        console.log(`Connected to database!`);
        
        var port = getEnv('PORT', 4000);
        app.listen(port, () => {
            console.log(`App running on port ${port}!`);
        });
    }
})



