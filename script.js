const keys=document.querySelectorAll('.key');

const WHITE_KEYS=['z','x','c','v','b','n','m',',','.','/','Shift','1'];
const BLACK_KEYS=['s','d','g','h','j','l',';','Enter','4','5'];

keys.forEach(key=>{
    key.addEventListener('click', ()=> playKey(key));
});


function playKey(key){
    const noteAudio=document.getElementById(key.dataset.note);
    noteAudio.currentTime=0;
    noteAudio.play();

    key.classList.add('active');
    //setTimeout waits for the specified amount of time in milliseconds 
    //and then executes the callback
    setTimeout(()=>{key.classList.remove('active');},200);


    // This is not working properly because the audio clips are too long I think
    // noteAudio.addEventListener('ended',()=>{
    //     key.classList.remove('active');
    // });
}


const whiteKeys=document.querySelectorAll('.key.white');
const blackKeys=document.querySelectorAll('.key.black');

document.addEventListener('keydown',(evt)=>{
    //This takes care of the situation when a key is held down the sound
    if(evt.repeat) return;

    const key=evt.key;

    const whiteKeyIndex=WHITE_KEYS.indexOf(key);
    const blackKeyIndex=BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex>-1) playKey(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex>-1) playKey(blackKeys[blackKeyIndex]);
});