class Auth {
    constructor() {
            this.authenicated = false;
        }
        //Need to check befor cart checkout

    login(cb) {
        //API validation
        this.authenicated = true;
        cb();
    }

    logout(cb) {
        //Clear the Flag upon pressing log
        this.authenticated = false;
    }

    isAthenticated() {
        return this.authenticated;
    }
}
export default new Auth();