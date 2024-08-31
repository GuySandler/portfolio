<script>
    import "../app.css";
    import Sidebar from "./sidebar.svelte"
    import OnLoad from "./OnLoad.svelte"
    import MainPage from "./MainPage.svelte";
    import Projects from "./Projects.svelte";

    import { onMount } from 'svelte';
    import {page} from '../stores.js';
    // import { fade } from 'svelte/transition';

    let showOpening = true;
    let RunAnimation = false;
    onMount(() => {
        RunAnimation = true;
        setTimeout(HideOnLoad, 5001);
    });
    function HideOnLoad() {
        showOpening = false;
    }

    let pageNum = 0;
    page.subscribe((value) => {
        pageNum = value;
    });

</script>
<main>
    <slot/>
    {#if showOpening}
        <OnLoad prop={RunAnimation} />
    {/if}
    {#if !showOpening}
        <div id="container">
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="item">
                {#if pageNum == 0}
<!--                    <div transition:fade>-->
                    <MainPage/>
<!--                    </div>-->
                {/if}
                {#if pageNum == 1}
<!--                    <div transition:fade>-->
                    <Projects />
<!--                    </div>-->
                {/if}
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