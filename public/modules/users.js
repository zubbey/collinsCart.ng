export default class User {
    constructor(firstname, lastname, useremail, userpassword){
        this.userid = this.generateId();
        this.firstname = firstname;
        this.lastname = lastname;
        this.useremail = useremail;
        this.userpassword = userpassword;
        this.status = false;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    generateId(){
        return Math.floor(Math.random() * 100000);
    }
}