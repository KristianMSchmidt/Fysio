class Session{
    constructor(){
        this.userEmail = "";
        this.recoverDataFromUrl();
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
