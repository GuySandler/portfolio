<script>
    import { fly } from 'svelte/transition';
    import {page} from "../stores.js"

    import cube from '../lib/assets/cube.svg';
    import house from '../lib/assets/house.svg';
    import gear from '../lib/assets/gear.svg';
    import info from '../lib/assets/info.svg';
    import awards from '../lib/assets/awards.svg';
    import github from '../lib/assets/github.svg';
    import letter from '../lib/assets/letter.svg';
    import G1 from '../lib/assets/G1.svg';
    import G2 from '../lib/assets/G2.svg';

    let MouseX = 0;
    let MouseY = 0;
    function handleMouseMove(e) {
        MouseX = e.clientX;
        MouseY = e.clientY;
    }
    // position
    // color
    // look at cursor
    // random rotation
    $: Geffectx = (MouseX-1000) / 90;
    $: Geffecty = (MouseY-500) / 75;
    $: buttonMenuy = MouseY-30;
    let buttonMenu = false;
    let buttonMenuTxt = "";
</script>

<svelte:window on:mousemove={handleMouseMove} />

<main>
    {#if buttonMenu}
        <div transition:fly={{ x: 50, duration: 750 }}
             style="position:absolute;z-index: 1;top:{buttonMenuy}px;"
             id="buttonMenu">
            <h1>{buttonMenuTxt}</h1>
        </div>
    {/if}
    <center>
        <div id="container" style="background: linear-gradient({(MouseY-50)/8}deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);" class="md:flex sh:overflow-y-auto">
            <div class="item order-1">
                <div id="logoBox">
                    <img style="z-index: 1" alt="G" src={G1} />
                    <img
                        style="position:absolute;z-index: 0;top:{Geffecty}px;left:{Geffectx}px;"
                        alt="G"
                        src={G2}
                    />
                </div>
            </div>
            <div class="item order-2">
                <div id="menu">
                    <button on:mouseenter={() => {buttonMenu = true;buttonMenuTxt = "Home"}}
                            on:mouseleave={() => {buttonMenu = false;}}
                            on:click={() => {page.set(0);}}
                            class="image-button">
                        <img class="image" alt="home" src={house} />
                    </button>
                    <button on:mouseenter={() => {buttonMenu = true;buttonMenuTxt = "Projects & Skills"}}
                            on:mouseleave={() => {buttonMenu = false;}}
                            on:click={() => {page.set(1);}}
                            class="image-button">
                        <img class="image" alt="projects" src={cube} />
                    </button>
                    <button on:mouseenter={() => {buttonMenu = true;buttonMenuTxt = "About Me"}}
                            on:mouseleave={() => {buttonMenu = false;}}
                            on:click={() => {page.set(3);}}
                            class="image-button">
                        <img class="image" alt="info" src={info} />
                    </button>
                    <button on:mouseenter={() => {buttonMenu = true;buttonMenuTxt = "Awards"}}
                            on:mouseleave={() => {buttonMenu = false;}}
                            on:click={() => {page.set(4);}}
                            class="image-button">
                        <img class="image" alt="awards" src={awards} />
                    </button>
                </div>
            </div>
            <div class="item order-3">
                <div id="contact">
                    <a tabindex="-1" href="https://github.com/GuySandler"><button on:mouseenter={() => {buttonMenu = true;buttonMenuTxt = "Github"}}
                            on:mouseleave={() => {buttonMenu = false;}}
                            class="image-button">
                        <img class="image" alt="github" src={github} />
                    </button></a>
                    <a tabindex="-2" href="mailto:guy@sandler.co.il"><button on:mouseenter={() => {buttonMenu = true;buttonMenuTxt = "Email"}}
                            on:mouseleave={() => {buttonMenu = false;}}
                            class="image-button">
                        <img style="position: relative;bottom:1vh;" class="image" alt="email" src={letter} />
                    </button></a>
                </div>
            </div>
        </div>
    </center>
</main>

<style>
    #container {
        position: absolute;
        display: flex;
        width: 75px;
        height: 99.9vh;
        flex-flow: row wrap;
        overflow-y: scroll;
        background-color: #121212;
        overflow-x: hidden;
    }
    .item {
        width: 100px;
    }
    .image {
        width:5vh;
        height:5vh;
    }
    #menu {
        margin-bottom: 5px;
        margin-top: 5px;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    :root {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    .image-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        padding: 0;
        margin-bottom: 35px;
        margin-top: 35px;
    }
    @keyframes buttonClick {
        from {
            transform: translateY(0);
            transform: scale(1);
        }
        to {
            transform: translateY(5px);
            transform: scale(1.2);
        }
    }
    .image-button:hover {
        /*box-shadow: 0 5px 15px rgba(145, 92, 182, .4);*/
        filter: drop-shadow(0px 0px 15px white);
    }
    .image-button:active {
        filter: drop-shadow(0 0 2em #747bff);
        animation: .25s forwards ease-in-out buttonClick;
        /*    fix animation early stop*/
    }
    #buttonMenu {
        font-size: 1em;
        color: #fff;
        background: #868686;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
        left: 95px;
    }
    #buttonMenu::after {
        content: "";
        border: 10px solid transparent;
        left: -10px;
        top: calc(50% - 10px);
        border-right-color: #868686;
        border-left: 0;
        position: absolute;
    }
</style>
