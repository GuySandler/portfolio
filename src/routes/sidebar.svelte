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
        MouseX = e.clientX-350;
        MouseY = e.clientY-350;
    }
    $: Geffectx = MouseX/50;
    $: Geffecty = MouseY/50;
</script>

<svelte:window on:mousemove={handleMouseMove}/>

<main>
    <center>
        <div id="container">
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
                    <button><img class="image" alt="home" src={house} /></button>
                    <button><img class="image" alt="projects" src={cube} /></button>
                    <button><img class="image" alt="skills" src={gear} /></button>
                    <button><img class="image" alt="info" src={info} /></button>
                    <button><img class="image" alt="awards" src={awards} /></button>
                </div>
            </div>
            <div class="item order-4">
                <div id="spacer"></div>
            </div>
            <div class="item order-5">
                <div id="contact">
                    <button><img id="git" style="width:7vh;height:7vh;margin-bottom: 5px;margin-top: 30px" alt="github" src={github} /></button>
                    <button><img class="image" alt="email" src={letter} /></button>
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
        justify-content: center;
        flex-flow: row wrap;
        overflow-y: scroll;
        /*overflow-x: hidden;*/
        background-color: #121212;
        overflow-x: hidden;
    }
    .item {
        width: 100px;
        /*border: purple 1px solid;*/
        margin-right: auto;
    }
    #spacer {
        height: 5vh;
    }
    .image {
        width:7vh;
        height:7vh;
        margin-bottom: 5px;
        margin-top: 5px;
        min-height: 100px;
        /*margin-left: 7px;*/
    }
    @keyframes buttonHover {
         from{transform: translate(0, 0px);}
         to{transform: translate(0, -10px);}
     }
    .image:hover, #git:hover {
        filter: drop-shadow(0 0 2em #747bff);
        /*transform: translate(0, -10px);*/
        animation: 3s ease-in-out 1s 2 reverse both paused buttonHover;
    }
    #menu {
        margin-bottom: 10px;
        margin-top: 10px;
    }
    ::-webkit-scrollbar {
        width: 5px;

    }
    ::-webkit-scrollbar-track {
        background: #404040;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
