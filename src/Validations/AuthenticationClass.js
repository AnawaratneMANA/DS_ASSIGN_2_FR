class Auth {
    constructor() {
            this.authenicated = false;
        }
        //Need to check before cart checkout

    login() {
        //API validation
        localStorage.setItem('flag', true);
        this.authenicated = true;
        console.log("User Validated")

    }

    logout(cb) {
        //Clear the Flag upon pressing log
        localStorage.setItem('flag', false);
        this.authenticated = false;
        console.log("User Removed")
    }

    isAuthenticated() {
        const flag = localStorage.getItem('flag')
        console.log("Localstorage Values - " + flag);
        if(flag === 'true'){
            return true;
        } else {
             return false;
        }
    }
}
export default new Auth();
