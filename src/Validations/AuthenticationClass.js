class Auth {
    constructor() {
            this.authenicated = false;
        }
        //Need to check before cart checkout

    login(id, email) {
        //API validation
        console.log(id);
        localStorage.setItem('flag', true);
        localStorage.setItem('userid', id);
        localStorage.setItem('email', email);
        this.authenicated = true;
    }

    logout(cb) {
        //Clear the Flag upon pressing log
        localStorage.setItem('flag', false);
        this.authenticated = false;
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
