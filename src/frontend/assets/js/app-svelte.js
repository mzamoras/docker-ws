import App from '../../../public/App.svelte';
import '../css/app.css';

const mountPoint = document.getElementById('appRoot');
const app = new App({
    target: mountPoint,
    props: {
        name: 'world'
    }
});

window.app = app;

export default app;