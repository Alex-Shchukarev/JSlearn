export default {
    install( app ) {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'LightTheme.css';
        document.head.appendChild(style);

        app.config.globalProperties.$changeTheme = address => {
            if( address === 'Dark') {
                style.href = 'LightTheme.css';
            } else { 
                style.href = 'DarkTheme.css';
            }
        };
    }
}