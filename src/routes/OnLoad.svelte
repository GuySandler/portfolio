<script>
    import {cubicOut} from "svelte/easing";

    export let prop = false;
    let content = "G";
    let move = -100; // left is neg
    function spinAndChangeText(node, { duration }) {
        return {
            duration,
            css: (t) => {
                const rotation = t <= 0.2 ? 360 * t / 0.2 : 360; // Rotate 360deg within first 20%
                const translateX = t >= 0.75 ? cubicOut((t - 0.75) / 0.25) * move : 0; // Move left in last 25%
                return `
          transform: translate(${translateX}px) rotate(${rotation}deg);
        `;
            },
            tick: (t) => {
                if (t >= 1) {
                    content = 'Guy Sandler'; // Change text after transition completes
                }
            },
        };
    }

</script>
<!--<input type="checkbox" bind:checked={prop} />-->
<main>
    {#if prop}
        <center>
            <h1 in:spinAndChangeText="{{ duration: 3000 }}" id="prop">{content}</h1>
        </center>
    {/if}
</main>
<style>
    main {
        background-color: Black;
        width:100%;
        height:100vh;
        position: absolute;
        z-index: 1;
        overflow: hidden;
    }
    /*@keyframes animation {*/
    /*    20% {rotate: 360deg;}*/
    /*    100% {rotate: 360deg;content: 'Guy Sandler'}*/
    /*}*/
    #prop {
        color:white;
        width: 50%;
        position: relative;
        /*animation-name: animation;*/
        /*animation-duration: 3s;position: absolute;*/
        top:50vh;
        /*left:50%;*/
        /*transform: translate(-50%, -50%);*/
        font-size: 5vw;
        /*border: red 1px solid;*/
    }
</style>