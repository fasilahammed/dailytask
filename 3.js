function syncs() {
    console.log("start");
    setTimeout(() => {
        console.log("Async Task");
     
    }, 2000);  
        console.log("end");
}
syncs()