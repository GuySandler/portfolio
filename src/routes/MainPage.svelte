<script>
    // let oceanGradiantDeg = 0;
    // function oceanGradiant(){
    //     if(oceanGradiantDeg != 359){oceanGradiantDeg++;}
    //     else{oceanGradiantDeg=0}
    // }
    // // let oceanInt =
    // setInterval(oceanGradiant, 100);
</script>
<div id="body">
    <center>
        <div id="box">
            <h1>hello 👋</h1>
            <h1>I'm Guy Sandler</h1>
            <h2>I'm a <span id="age">14</span> year old developer/student from the <span id="ocean">Bay Area</span> in California. To see my projects, skills, or contact me use the menu on the left or the buttons below.</h2>
        </div>
    </center>
</div>
<style>
    #body {
        width: 100%;
        height: 100%;
        border: yellow 1px solid;
        box-sizing: border-box;
    }
    #box {
        width:70%;
        /*height:0%;*/
        position: relative;
        top:2vh;
        border: red 1px solid;
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