<script lang="ts">
	import { DarkTheme, page } from "./stores.js";
	import Github from "$lib/images/github.svg";

    

    let theme = false;
    $: DarkTheme.set(theme);
    let background = "";
    $: if(!theme){background="#474747";}else{background="white";}
</script>

<!-- <center style="background-color:{background};"> -->
<center>
	<div style="padding-top:2vh;padding-bottom:1vh;position:sticky;">
		<div class="item">
			<button id="Github" on:click={() => window.open('https://github.com/GuySandler', '_blank')}>
                <img src="{Github}" alt="Github">
            </button>
		</div>
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
    #Github {
        width: 50%;
        height: 50%;
        aspect-ratio: 1/1;
    }
	/* #home:hover:after {
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
	} */
</style>
