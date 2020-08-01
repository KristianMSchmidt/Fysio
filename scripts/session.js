class Session{
    constructor(){
        console.log("hej fra session!!")
        this.userEmail = "";
        this.recoverDataFromUrl();
        //this.emailhandler = New ...
        //New InputHannder();.... måske. Måske er inputhandlerne bare ude i de enkelte tests. 
    }

    recoverDataFromUrl(){
        let url = window.location.href;    
        if (url.includes("?")){
           (new URL(url)).searchParams.forEach((x, y) =>
            document.getElementById(y).value = x);
        }
    }
}

new Session();
