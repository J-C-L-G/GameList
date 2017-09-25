const defaultEnv = {
    dev: true,
    production: false
};

export default (env = defaultEnv) => {
    console.log(env);
    return env.dev ? require('./webpack_config_dev') : require('./webpack_config_production');
}
