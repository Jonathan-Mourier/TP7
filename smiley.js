//@ts-check

function canvasApp(){
    // dessin après chaque 30 secondes
    let canvas=document.getElementById("smiley");
    let context=canvas.getContext("2d");
    context.beginPath();
    context.lineWidth=3;
    context.fillStyle="yellow";
    context.arc(100,100,75,0,2*Math.PI)
    context.closePath();
    context.stroke();
    context.fill();
    //rond
    context.beginPath();
    context.fillStyle="black";
    context.arc(65,70,10,0,2*Math.PI)
    context.arc(135,70,10,0,2*Math.PI)
    context.closePath();
    context.fill();
    //yeux
    context.beginPath();
    context.lineWidth=6;
    context.strokeStyle="black";
    context.arc(99,120,35,0,Math.PI)
    context.closePath();
    context.stroke();
    //sourire
    context.beginPath();
    context.lineWidth=6;
    context.strokeStyle="yellow";
    context.rect(64,120,70,1)
    context.closePath();
    context.stroke();
    //enlever le trait en trop
    context.textBaseline="middle";
    context.textAlign="left";
    context.font="20px sans serif";
    context.fillText("Hello Canvas!",45,200);
    //texte
}

function displayDateTime(){
    
    const event=new Date();
    const options={weeday:'long',year:'numeric',month:'long',day:'numeric'};
    document.getElementById("1").innerText=(event.toLocaleDateString(undefined,options));
    document.getElementById("2").innerText=(event.toLocaleTimeString(undefined));
}

function displayDecrementSeconds(){
    document.getElementById("4").innerText=String(parseInt(document.getElementById("4").innerText)-1);
}


function main(){
    canvasApp();
    setInterval(displayDateTime,1000);
    let decrement = setInterval(displayDecrementSeconds,1000);
    setTimeout(function(){
        clearInterval(decrement);
        document.getElementById("3").innerText="Le dessin est affiché ci-dessous";
        document.querySelector("canvas").removeAttribute("hidden");
    }
    ,60000);
}


main();
