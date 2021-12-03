const keys=document.querySelectorAll('.key');


console.log(keys);

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