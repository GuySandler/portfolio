<script lang="ts">
    import "../app.css";
    import Sidebar from "./sidebar.svelte"
    import OnLoad from "./OnLoad.svelte"
    import MainPage from "./MainPage.svelte";
    import ProjectsAndSkills from "./ProjectsAndSkills.svelte";

    import { onMount } from 'svelte';
    import {page} from '../stores.js';
    import svelte from "$lib/assets/svelte.svg";
    import python from "$lib/assets/python.svg";
    import Css from "$lib/assets/css.svg";
    import Html from "$lib/assets/html.svg";
    import Firebase from "$lib/assets/firebase.svg";
    import Javascript from "$lib/assets/javascript.svg";
    import Typescript from "$lib/assets/typescript.svg";


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

    type skillType = {
        name: string;
        img: object;
        badge: boolean;
        learning: boolean;
    };
    const skills: skillType = [
        { name: 'Svelte/kit', img: svelte, badge: true, learning: false },
        { name: 'Python', img: python, badge: true, learning: false },
        { name: 'Css', img: Css, badge: true, learning: false },
        { name: 'Html', img: Html, badge: true, learning: false },
        { name: 'Typescript', img: Typescript, badge: true, learning: false },

        { name: 'Firebase', img: Firebase, badge: false, learning: false },
        { name: 'Javascript', img: Javascript, badge: false, learning: false },
    //     rust
    //     c++
    //     golang
    //     maybe separate libs from langs
    ];
    let cooltransition = [];
    function noRepeatRandom() {
        let list = [];
        for (let i = 0; i < skills.length; i++) {
            let num = Math.floor(Math.random() * skills.length) + 1
            while (list.includes(num)) {
                num = Math.floor(Math.random() * skills.length) + 1
            }
            list.push(num)
            cooltransition.push(num)
            // console.log(cooltransition)
        }
    }
    noRepeatRandom()

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
                        <ProjectsAndSkills cooltransition={cooltransition} skills={skills}/>
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