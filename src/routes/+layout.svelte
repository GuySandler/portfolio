<script>
    import "../app.css";
    import Sidebar from "./sidebar.svelte"
    import OnLoad from "./OnLoad.svelte"

    import { onMount } from 'svelte';

    let showOpening = true;
    let RunAnimation = false;
    onMount(() => {
        RunAnimation = true;
        setTimeout(HideOnLoad, 5001);
    });
    function HideOnLoad() {
        showOpening = false;
    }

</script>
<main>
    {#if showOpening}
        <OnLoad prop={RunAnimation} />
    {/if}
    {#if !showOpening}
        <div id="container">
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="item">
                <slot />
            </div>
        </div>

    {/if}
</main>
<style>
    main {
        /*position:absolute;*/
        /*top:-21px;*/
        width: 100%;
        height: 100vh;
        background-color: black;
        overflow: hidden;
        font-family: ubuntu;
    }
    :global(body) {margin: 0; padding: 0;}
    #container {
        display: flex;
        width: 100%;
        height: 100vh;
        border: cornflowerblue 1px solid;
        flex-wrap: nowrap;
        justify-content: center;

    }
    #item {
        order: 2;
        width: 100%;

    }
    #sidebar {
        order: 1;
        width: 100px;
    }
</style>