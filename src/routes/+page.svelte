<script lang="ts">
	import { page, transitioning, DarkTheme } from "./stores.js";
	import { fly, fade } from "svelte/transition";
	import logo from "$lib/images/printerbench.png";
    import html from "$lib/images/html.svg";
    import python from "$lib/images/python.svg";
    import css from "$lib/images/css.svg";
    import js from "$lib/images/js.svg";
    import ts from "$lib/images/ts.svg";
    import firebase from "$lib/images/firebase.svg";
    import git from "$lib/images/git.svg";
    import bash from "$lib/images/bash.svg";
    import svelte from "$lib/images/svelte.svg";

	let currentPage = "";

	const unsubscribe = page.subscribe((value) => {
		currentPage = value;
	});

	let transitiongoing = false;
	function transitionStart() {
		transitiongoing = true;
	}
	function transitionEnd() {
		// alert("transition ended!")
		transitiongoing = false;
	}
	export let PrinterBenchIMG = '../lib/images/printerbench.png';

</script>

<svelte:head>
	<title>Guy Sandler</title>
	<meta name="description" content="My Homepage" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>
<!-- <center style="background-color:{background}"> -->
<center>
	{#key $page}
		<div
			in:fly|global={{ y: 100, duration: 1000, delay: 1000 }}
			out:fly|global={{ x: 0, y: 100, duration: 1000 }}
			on:outrostart={() => ($transitioning = true)}
			on:outroend={() => ($transitioning = false)}
		>
			{#if $page === "home"}
				<h1>Hi! <br>I'm Guy Sandler</h1>
				<h2>I am a <span style="color:#cc66ff">14</span> year old programmer from <span style="color:#6699ff;">Israel</span> and I live in the <span style="color:#ff5c33;">Bay Area</span></h2>
				<div>
					<h2>Top Accomplishments</h2>
					<div class="outer-box">
						<div class="inner-box">
							<div>
								Content goes here
							</div>
						</div>
					</div>
				</div> -->
			{:else if $page === "projects"}
				<div class="project">
					<div class="imageBG">
						<img
						style="positionaspect-ratio: 1 / 1;"
						alt="Printerbench"
						src={logo}
						class="icon"
						/>
						<div class="language"></div>
					</div>
                    <div class="toolUsed">
                        <div style="background-color:#f0947e;z-index:0">
                            <div on:mouseenter={hovered1On} on:mouseleave={hovered1Off} class="hover1">
                                <img src="{html}" style="width:100%;aspect-ratio:1/1;" alt="python icon">
                            </div>
                        </div>
                    </div>
                    <div class="toolUsed">
                        <div style="background-color:#f0947e;z-index:0">
                            <div on:mouseenter={hovered9On} on:mouseleave={hovered9Off} class="hover1">
                                <img src="{svelte}" style="width:100%;aspect-ratio:1/1;" alt="svelte icon">
                            </div>
                        </div>
                    </div>
					<h2 class="title">PrinterBench</h2>
					<h3 class="discription">3D printing benchmarks</h3>
				</div>
				<div class="imageBG">
				</div>
			{/if}
		</div>
	{/key}
</center>
<style>
    @keyframes hoverFX {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.2);
        }
    }
    @keyframes dehoverFX {
        from {
            transform: scale(1.2);
        }
        to {
            transform: scale(1);
        }
    }
	:root {
		font-family: ubuntu;
		overflow: warp;
	}
	h1 {
		font-size: 2vw;
	}
	h2 {
		font-size: 1.5vw;
	}
	h3 {
		font-size: 1vw;
	}
	.outer-box {
		background-color: gray;
		display: flex;
		justify-content: center;
		align-items: center;
		height:20vw;
		width:20vw;
	}
	.inner-box {
	  background-color: green;
	  height: 90%;
	  width: 90%;
	}
	.project {
		border: 1px black solid;
		border-radius: 20px;
		width: 50vw;
		height: auto;
        background-color:#2EB7EA
	}
	.imageBG {
		display:block;
		border-radius: 20px;
		width:100%;
		height:5vw;
		overflow:hidden;
		border: 1px black solid;
        background-color:#C0C0C0;
	}
    .Skills {
        width: 30vw;
        height: 30vw;
        display: grid; 
        grid-template-columns: 30% 30% 30%; 
        grid-template-rows: 30% 30% 30%; 
        gap: 5% 5%; 
        grid-template-areas: 
            "python html css"
            "js ts firebase"
            "git bash svelte";
        /* border: 1px black solid; */
    }
    #python {
        border: 2px black solid;
        grid-area: "python";
    }
    #html {
        border: 2px black solid;
        grid-area: "html";
    }
    #css {
        border: 2px black solid;
        grid-area: "css";
    }
    #js {
        border: 2px black solid;
        grid-area: "js";
    }
    #ts {
        border: 2px black solid;
        grid-area: "ts";
    }
    #firebase {
        border: 2px black solid;
        grid-area: "firebase";
    }
    #git {
        border: 2px black solid;
        grid-area: "git";
    }
    #bash {
        border: 2px black solid;
        grid-area: "bash";
    }
    #svelte {
        border: 2px black solid;
        grid-area: "svelte";
    }
    .hover1 {
        animation-name: dehoverFX;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    .hover1:hover {
        animation-name: hoverFX;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    .area {
        width: 70%;
        height: 75%;
        margin-right: 15%;
        margin-left: 15%;
        margin-bottom: 10%;
        margin-top: 10%;
    }
    .toolUsed {
        border: 1px solid black;
        width: 3vw;
        height: 3vw;
        margin-top:10px;
        overflow:hidden;
        display: inline-block;
        border-radius: 5px;
    }
    #contact {
        border: 1px solid black;
        border-radius: 10px;
        width: 50%;
        height: 25%;
        /* padding-left: 10px;
        padding-right: 10px; */
        overflow:hidden;
    }
    .row1{
        display:inline-block;
        margin-left: 5vw;
        margin-right: 5vw;
    }
</style>