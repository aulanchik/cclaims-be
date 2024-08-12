require('dotenv').config();

const getEnv = (key, defaultValue) => {
    const value = process.env[key];

    if (value !== undefined) {
        return value;
    }

    if (defaultValue === undefined) {
        throw new Error(`Environment variable ${key} is not defined and no default value is provided.`);
    }

    return defaultValue;

};

module.exports = { getEnv };
