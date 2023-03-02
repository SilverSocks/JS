const generateRandNumsArray = (count, max)=>{
    const rand=[];
    while (rand.length < count){
    const r = Math.floor(Math.random() * max);
    if(rand.indexOf(r) === -1){
        rand.push(r);
    }
    }
    return console.log(rand);
};
generateRandNumsArray(10, 15);