
<script>
    export let name;
</script>

<style>
    *{
        font-family: 'Roboto', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .basic{

    }

    .card{
        width: 450px;
        background-color: #282c34;
        border-radius: 4px;
        color: white;
        padding: 20px;
    }
</style>

<h1 class="basic">Hello {name}!</h1>
<div class="card">
    Svelte Component 2
</div>
<div class="row">
    <div class="col s12 m6">
        <div class="card">
            <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="/">This is a link</a>
                <a href="/">This is a link</a>
            </div>
        </div>
    </div>
</div>
<footer class="page-footer">
    <div class="footer-copyright">
        <div class="container">
            © 2014 Copyright Text
            <a href="/" class="grey-text text-lighten-4 right">More Links</a>
        </div>
    </div>
</footer>