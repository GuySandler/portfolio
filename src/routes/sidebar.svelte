<script>
    import cube from '../lib/assets/cube.svg';
    import house from '../lib/assets/house.svg';
    import gear from '../lib/assets/gear.svg';
    import info from '../lib/assets/info.svg';
    import awards from '../lib/assets/awards.svg';
    import github from '../lib/assets/github.svg';
    import letter from '../lib/assets/letter.svg';

    let MouseX = 0;
    let MouseY = 0;
    function handleMouseMove(e) {
        MouseX = e.clientX;
        MouseY = e.clientY;
    }
    $: angle = Math.atan2(MouseY - 0, MouseX - 0) * (180 / Math.PI); // Assuming element is centered at (150, 150)
</script>

<svelte:window on:mousemove={handleMouseMove}/>

<main>
    <center>
        <div id="container">
<!--            <div class="item order-1">-->
<!--                <div id="logoBox">-->
<!--                    <h1 id="logo" style="transform: rotate3d(0, 0, 1, {angle}deg);">G</h1>-->
<!--                    <h1 style="color:white;">{MouseX}</h1>-->
<!--                    <h1 style="color:white;">{MouseY}</h1>-->
<!--                </div>-->
<!--            </div>-->
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
                    <button><img class="image" alt="github" src={github} /></button>
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
        width: 10%;
        min-width: 100px;
        max-width: 100px;
        height: 99.9vh;
        border: green 1px solid;
        justify-content: center;
        flex-flow: column wrap;

    }
    .item {
        width: 100px;
        border: purple 1px solid;
    }
    #logo {
        color:white;
        font-size: xx-large;
    }
    #spacer {
        height: 10vh;
        border: yellow 1px solid;
    }
    .image {
        width:5vh;
        height:5vh;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    #menu {
        margin-bottom: 10px;
        margin-top: 10px;
    }
</style>
