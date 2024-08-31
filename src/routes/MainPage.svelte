<script>
    // let oceanGradiantDeg = 0;
    // function oceanGradiant(){
    //     if(oceanGradiantDeg != 359){oceanGradiantDeg++;}
    //     else{oceanGradiantDeg=0}
    // }
    // // let oceanInt =
    // setInterval(oceanGradiant, 100);
    import { fly } from 'svelte/transition';
</script>
<div id="body">
    <center>
        <div id="box">
            <h1 in:fly={{ y: -100, duration: 1500, delay: 250 }} style="font-size:5vh">Hello!</h1>
            <h1 in:fly={{ y: -100, duration: 1500, delay: 400 }} style="font-size:10vh">I'm Guy</h1>
            <h2 in:fly={{ y: -100, duration: 1500, delay: 550 }}>I'm a <span id="age">14</span> year old developer/student from the <span id="ocean">Bay Area</span> in California. To see my projects, skills, or contact me use the menu on the left or the buttons below.</h2>
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
        justify-content: center;
        align-items: center;
    }
    #box {
        width:calc(90% - 75px);
        /*position: relative;*/
        /*top:2vh;*/
        /*border: red 1px solid;*/

    }
    h1, h2 {
        color:white;
    }
    #ocean {
        background-image: linear-gradient(45deg, rgba(0,179,255,1) 0%, rgba(11,5,180,1) 100%);
        background-clip: text;
        color: transparent;
    }
    #age {
        background-image: linear-gradient(45deg, rgba(0,255,87,1) 0%, rgba(53,91,16,1) 100%);
        background-clip: text;
        color: transparent;

    }

</style>