<script>
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
        MouseX = e.clientX-500;
        MouseY = e.clientY-250;
    }
    $: Geffectx = MouseX/100;
    $: Geffecty = MouseY/75;
</script>

<svelte:window on:mousemove={handleMouseMove}/>

<main>
    <center>
        <div id="container" class="md:flex sh:overflow-y-auto">
            <div class="item order-1">
                <div id="logoBox">
                    <img style="fill:white;z-index: 1" alt="G" src={G1} />
                    <img style="position:absolute;z-index: 0;top:{Geffecty}px;left:{Geffectx}px;" alt="G" src={G2} />
                </div>
            </div>
            <div class="item order-2">
                <div id="spacer"></div>
            </div>
            <div class="item order-3">
                <div id="menu">
                    <button class="extraPad">
                        <img class="image" alt="home" src={house} />
                    </button>
                    <button class="extraPad">
                        <button><img class="image" alt="projects" src={cube} /></button>
                    </button>
                    <button class="extraPad">
                        <button><img class="image" alt="skills" src={gear} /></button>
                    </button>
                    <button class="extraPad">
                        <button><img class="image" alt="info" src={info} /></button>
                    </button>
                    <button class="extraPad">
                        <button><img class="image" alt="awards" src={awards} /></button>
                    </button>
                </div>
            </div>
            <div class="item order-4">
                <div id="spacer"></div>
            </div>
            <div class="item order-5">
                <div id="contact">
                    <button class="extraPad">
                        <img id="git" alt="github" src={github} />
                    </button>
                    <button class="extraPad">
                        <img class="image" alt="email" src={letter} />
                    </button>
                </div>
            </div>
        </div>
    </center>
</main>

<style>
    #container {
        position: absolute;
        display: flex;
        /*width: 10%;*/
        width: 100px;
        height: 99.9vh;
        flex-flow: row wrap;
        overflow-y: scroll;
        background-color: #121212;
        overflow-x: hidden;
    }
    .item {
        width: 100px;
        /*border: purple 1px solid;*/
    }
    #spacer {
        height: 5vh;
        /*border: purple solid 1px;*/
    }

    .image {
        width:6vh;
        height:6vh;
        /*margin-bottom: 5px;*/
        /*margin-top: 5px;*/
        /*min-height: 100px;*/
        /*margin-left: 7px;*/
        /*border: white 1px solid;*/
    }
    #git {
        width:6vh;
        height:6vh;
        /*border: white 1px solid;*/
        /*margin-bottom: 10px;*/
        /*margin-top: 30px*/
    }
    @keyframes buttonHover {
        from {
            filter: drop-shadow(0 0 0em #ffffff);
        }
        to {
            filter: drop-shadow(0 0 5em #ffffff);
        }
    }
    .extraPad:active {
        filter: drop-shadow(0 0 2em #747bff);
        animation: .25s forwards ease-in-out buttonHover;
    /*    fix animation early stop*/
    }
    #menu {
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .extraPad {
        /*border: red solid 1px;*/
        display: flex;
        width: 100%;
        justify-content: center;
        flex-flow: row wrap;
        overflow-y: scroll;
        background-color: #121212;
        overflow-x: hidden;
        margin-top: 5vh;
        margin-bottom: 5vh;
        border-radius: 100px;
    }
    ::-webkit-scrollbar {
        width: 5px;

    }
    /*::-webkit-scrollbar-track {*/
    /*    background: #404040;*/
    /*}*/
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
