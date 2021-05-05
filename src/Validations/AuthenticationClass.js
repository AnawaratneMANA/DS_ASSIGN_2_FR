class Auth {
    constructor() {
            this.authenicated = false;
        }
        //Need to check before cart checkout

    login() {
        //API validation
        this.authenicated = true;
        console.log("User Validated")

    }

    logout(cb) {
        //Clear the Flag upon pressing log
        this.authenticated = false;
        console.log("User Removed")
    }

    isAthenticated() {
        console.log(this.authenicated);
        return this.authenticated;
    }
}
export default new Auth();
