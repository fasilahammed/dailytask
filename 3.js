// function syncs() {
//     console.log("start");
//     setTimeout(() => {
//         console.log("Async Task");

//     }, 2000);  
//         console.log("end");
// }
// syncs()


////////////////////////////////////////////

function first() {

    /////first global exicution will work
    console.log("first");
    ////then syncrunoslyy "first will work"

    function second() {
       
        ////then second exicute and syncrounuslyy its log will exicute

        console.log("second");

        function third() {

            ////then third exicute and syncrounusllyy its log will works
            console.log("third");

        }
        third()

    }
    second()

}
first()

