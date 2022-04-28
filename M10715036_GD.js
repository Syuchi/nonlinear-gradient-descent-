let learningRate =0.1;
let Xnew=0;
let Xold=0;
let iteration=1;
let threshold=0.00001;

updateWeight();

while(!(Math.abs(Xnew-Xold)) < 0.00001){   
    iteration++;
    updateWeight();
}

let Fx = Xnew * Math.exp(Xnew);
console.log("x = " + Xnew);
console.log("f(x) = " + Fx);

function updateWeight() {
    Xold = Xnew;
    let dx = Xold * Math.exp(Xold) +Math.exp(Xold);
    if(dx>0){
        Xnew = Xold-learningRate * (Xold * Math.exp(Xold) +Math.exp(Xold));
    }
    else if(dx<0){
        Xnew = Xold+learningRate * (Xold * Math.exp(Xold) +Math.exp(Xold));
    }
    console.log("iteration :"+iteration);
    console.log("Xnew: "+Xnew +", Xold: "+Xold);
    console.log("");
    
}



