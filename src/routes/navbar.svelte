<script lang="ts">
	import { DarkTheme, page } from "./stores.js";
    import github from "$lib/images/github.svg";
	function home() {
		page.set("home");
	}
	function projects() {
		page.set("projects");
	}
	function skills() {
		page.set("skills");
	}
	function contact() {
		page.set("contact");
	}
	function award() {
		page.set("award");
	}
    let theme = false;
    $: DarkTheme.set(theme);
    let background = "";
    $: if(!theme){background="#474747";}else{background="white";}
</script>

<!-- <center style="background-color:{background};"> -->
<center>
	<div style="padding-top:2vh;padding-bottom:1vh;position:sticky;">
		<div class="item">
			<button id="home" on:click={home}> Home </button>
		</div>
		<div class="item">
			<button id="projects" on:click={projects}> Projects </button>
		</div>
		<div class="item">
			<button id="skills" on:click={skills}> Skills </button>
		</div>
		<div class="item">
			<button id="contact" on:click={contact}> Contact Me </button>
		</div>
		<div class="item">
			<button id="honors" on:click={award}> Honors </button>
		</div>
        <div class="item">
			<button id="Github" on:click={() => window.open('https://github.com/GuySandler', '_blank')}>
                <img id="GithubImg" src="{github}" alt="Github">
            </button>
		</div>
        <!-- {#if !theme}
        <label for="theme">☀️</label>
        {/if}
        {#if theme}
        <label for="theme">🌙</label>
        {/if}
        <input type="checkbox" id="theme" style="display:none;" bind:checked={theme} /> -->
	</div>
</center>

<style>
	.item {
		display: inline-block;
		margin-left: 1vw;
		margin-right: 1vw;
	}
	button {
		font-size: 2vw;
		background: none;
		border: none;
		-webkit-box-shadow: none;
		box-shadow: none;
		display: inline-block;
		cursor: pointer;
	}
	button:after {
		content: "";
		display: block;
		margin: auto;
		height: 3px;
		width: 0px;
		background: transparent;
		transition: width 0.5s ease, background-color 0.5s ease;
	}
	button:hover:after {
		width: 100%;
	}
	#home:hover:after {
		background: blue;
	}
	#projects:hover:after {
		background: red;
	}
	#skills:hover:after {
		background: green;
	}
	#contact:hover:after {
		background: purple;
	}
	#honors:hover:after {
		background: pink;
	}
    #GithubImg {
        /* border:1px solid black; */
        width:100%;
        /* aspect-ratio:1/1; */
        position:relative;
        right:5%;
        top:12%;
    }
    #Github {
        width: 5vw;
        aspect-ratio:1/1;
        /* border: 1px solid black; */
    }
</style>
