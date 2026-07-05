const fireflies = document.getElementById("fireflies");
const petals = document.getElementById("petals");
const particles = document.getElementById("particles");

function random(min,max){
    return Math.random()*(max-min)+min;
}

// Fireflies
for(let i=0;i<20;i++){

    const f=document.createElement("div");
    f.className="firefly";

    f.style.left=random(0,100)+"%";
    f.style.top=random(20,100)+"%";

    f.style.animationDuration=random(6,12)+"s";
    f.style.animationDelay=random(0,5)+"s";

    fireflies.appendChild(f);
}

// Petals
for(let i=0;i<25;i++){

    const p=document.createElement("div");
    p.className="petal";

    p.style.left=random(0,100)+"%";

    p.style.animationDuration=random(8,16)+"s";
    p.style.animationDelay=random(0,8)+"s";

    petals.appendChild(p);
}

// Particles
for(let i=0;i<40;i++){

    const s=document.createElement("div");
    s.className="particle";

    s.style.left=random(0,100)+"%";

    s.style.animationDuration=random(8,18)+"s";
    s.style.animationDelay=random(0,10)+"s";

    particles.appendChild(s);
}

// Button
document.getElementById("journeyBtn").addEventListener("click",()=>{

    const music=document.getElementById("music");

    music.play();

    document.body.style.transition="opacity 1s";
    document.body.style.opacity="0";

    setTimeout(()=>{
        window.location.href="letter.html";
    },1000);

});