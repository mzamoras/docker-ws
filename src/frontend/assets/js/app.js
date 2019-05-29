
if(process.env.IS_SVELTE) {
    import('./app-svelte');
} else if(process.env.IS_VUE) {
    import('./app-vue');
} else{
    require('./app-react');
}