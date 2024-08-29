<script>
    import Navbar from './navbar.svelte';
    // import Bottom from './footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<nav>
		<Navbar />
	</nav>
	<main>
		<slot />
	</main>
    <!-- <footer>
        <Bottom />
    </footer> -->
</div>

<style>
    /* :root {
        background-color: #474747;
    } */
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		font-family: ubuntu;
        /* background-color: #474747; */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
