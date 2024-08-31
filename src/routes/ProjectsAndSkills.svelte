<script lang="ts">
    import { fly } from 'svelte/transition';
    import {onMount} from "svelte";

    import Bliss from '../lib/assets/bliss.png';
    import svelte from '../lib/assets/svelte.svg';
    import python from '../lib/assets/python.svg';
    import Css from '../lib/assets/css.svg';
    import Html from '../lib/assets/html.svg';
    import Firebase from '../lib/assets/firebase.svg';
    import Javascript from '../lib/assets/javascript.svg';
    import Typescript from '../lib/assets/typescript.svg';

    export let skills
    export let cooltransition
    let filters = []

    type ProjectsType = {
        name: string;
        link: string;
        // status: number;
        img: object;
        skillimg: object[];
        briefing: string;
    };
    const projects: ProjectsType = [
        { name: 'Portfolio', link: 'https://www.google.com', img: Bliss, skillimg: [svelte, Html, Css, Typescript], briefing: 'This website' },
        { name: 'Portfolio', link: 'https://www.google.com', img: Bliss, skillimg: [svelte, Html, Css, Typescript], briefing: 'This website' },
        { name: 'Portfolio', link: 'https://www.google.com', img: Bliss, skillimg: [svelte, Html, Css, Typescript], briefing: 'This website' },
    ];
</script>
<div id="body">
    <center>
        <div in:fly={{ y: -100, duration: 1500, delay: 250 }} id="skills">
<!--            <h1 style="color:white;">&#45;&#45;{cooltransition.length}&#45;&#45;</h1>-->
            <h1 style="float:left;font-size:3.5vh">My Skills (click to filter projects and learn more)</h1>
            <br>
            <div id="skillbox">
                {#each skills as { name, img, badge, learning }, i}
                    <button in:fly|global={{ y: -50, duration: 1500, delay: 450+(cooltransition[i]*100) }} class="skill" on:click={() => filters[i] = !filters[i]}>
                        <div id="background" class="{filters[i] ? 'active' : ''}" style="justify-content: center;align-items: center;flex-direction:column;display:flex;padding:2px;border-radius:7px;background-color: #262626;background-size: 100% 5000%;flex-basis:7.5vw;flex-grow: 0;flex-shrink: 0;">
                            <img src="{img}" alt="{name}" style="order:0;width:4vw;height:4vw;">
                            <h1 style="font-size:1.25vw;z-index: 2;">{name}</h1>
                        </div>
                    </button>
                {/each}
            </div>
        </div>

        <div id="projects">
            <h1 style="float:left;font-size:3.5vh">My Projects</h1>
            <br>
            <div id="projectbox">
                {#each projects as { name, link, img, skillimg, briefing }, i}
                    <a in:fly|global={{ y: -50, duration: 1500, delay: 450 }} class="project" href="{link}">
                        <div id="background" style="justify-content: center;align-items: center;flex-direction:column;display:flex;padding:2px;border-radius:7px;background-color: #262626;background-size: 100% 5000%;flex-basis:7.5vw;flex-grow: 0;flex-shrink: 0;">
                            <img src="{img}" alt="{name}" style="order:0;width:4vw;height:4vw;">
                            <h1 style="font-size:1.25vw;z-index: 2;">{name}</h1>
                            <ul style="border:1px solid red;width:100%;display:inline-block;">
                                {#each skillimg as skill, i}
                                    <!--{#if i > 0}<br>{/if}-->
                                    <li>
                                        <img style="width:40px;height:40px;" src="{skill}" alt="todo">
                                    </li>
                                    <!--{#if i < skillimg.length}<br>{/if}-->
                                {/each}
                            </ul>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </center>
</div>
<style>
    #body {
        width: 100%;
        height: 100vh;
        /*border: yellow 1px solid;*/
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #skills, #projects {
        width:calc(90% - 75px);
        /*border: red 1px solid;*/
    }
    h1 {
        color:white;
    }
    #skillbox, #projectbox {
        /*height:300px;*/
        /*border: yellow 1px solid;*/
        padding: 10px;
        /*box-sizing: border-box;*/
        margin-top:5vh;
        margin-bottom: 10px;
        display: flex;
        min-height: 0;
        /*margin: 5px;*/
        align-self: flex-start;
        /*flex: 1 1 20%;*/
        overflow-y: auto;
        justify-content:space-evenly;
        flex-wrap: wrap;
        gap:20px;

    }
    .skill {
        /*border: green 1px solid;*/
        width: 7.5vw;
        height: 7.5vw;
        flex-basis: 7.5vw;
        display: flex;
        /*min-height: 0;*/
        /*margin: 5px;*/
        align-self: flex-start;
        /*flex: 1 1 20%;*/
        justify-content: center;
        flex-wrap: wrap;
    }
    @keyframes SkillHover {
        0% { background-position: 0% 0%; }
        50% { background-position: 0% 100%; }
        100% { background-position: 0% 0%;}
    }
    #background {
        /*width:100%;*/
        height:100%;
        /*margin:10px*/
        transition: scale 250ms;
    }
    #background:hover, .active {
        background: linear-gradient(0deg,#cf5c5c,#c19b4a,#def2a0,#c6ee4a,#42eca6,#64b3d9,#208ea2,#498ada,#5b73df,#897ed3,#cf5c5c,#c19b4a);
        animation: SkillHover 30s infinite linear;
        /*background-size: 100% 50000%;*/
        scale: 1.1;
    }
    .project {
        width:90%;
        cursor: pointer;
    }
</style>