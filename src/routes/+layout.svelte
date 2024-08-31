<script>
    import "../app.css";
    import Sidebar from "./sidebar.svelte"
    import OnLoad from "./OnLoad.svelte"
    import MainPage from "./MainPage.svelte";
    import ProjectsAndSkills from "./ProjectsAndSkills.svelte";

    import { onMount } from 'svelte';
    import {page} from '../stores.js';


    let showOpening = true;
    let RunAnimation = false;
    onMount(() => {
        page.set(-1)
        RunAnimation = true;
        setTimeout(HideOnLoad, 5001);
    });
    function HideOnLoad() {
        showOpening = false;
        setTimeout(function(){page.set(0)}, 150)
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
                    <div>
                        <MainPage/>
                    </div>
                {/if}
                {#if pageNum == 1}
                    <div>
                        <ProjectsAndSkills />
                    </div>
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
        font-weight: bold;
    }
    :global(body) {margin: 0; padding: 0;}
    #container {
        display: flex;
        width: 100%;
        height: 100%;
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
        width: 75px;
    }
</style>