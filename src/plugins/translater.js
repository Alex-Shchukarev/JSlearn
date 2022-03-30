export default {
    install( app, options ) {
        app.config.globalProperties.$translate = ( key, flag = 'en' ) => {
            return key.split('.').reduce( ( phrase, k ) => {
                return phrase[k] || 'unknown phrase'
            }, options[flag] );
        };
    }
}