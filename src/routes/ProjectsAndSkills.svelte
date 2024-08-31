<script>
    import { fly } from 'svelte/transition';
    const Skills = ["Svelte/kit","Python"];
    const SkillPic = ["/src","/src2"];
</script>
<div id="body">
    <center>
        <div in:fly={{ y: -100, duration: 1500, delay: 250 }} id="skills">
            <h1 style="float:left;font-size:3.5vh">My Skills (click to filter projects and learn more)</h1>
            <div id="skillbox">
                {#each Skills as skills, SkillPic as pic, i}
                    <div class="skill">
                        <h1>{skills}</h1>
                        <h1>{pic}</h1>
                    </div>
                {/each}
            </div>
        </div>
        <div id="projects">
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #skills {
        width:calc(90% - 75px);
        border: red 1px solid;
    }
    #projects {
        margin-top: 75px;
        width:calc(90% - 75px);
        border: aqua 1px solid;
    }
    h1, h2 {
        color:white;
    }
    #skillbox {
        height:100px;

        border: yellow 1px solid;
        padding: 5%;
        box-sizing: border-box;
        margin-top:30px;
        margin-bottom: 10px;
    }
    .skill {
        border: green 1px solid;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>