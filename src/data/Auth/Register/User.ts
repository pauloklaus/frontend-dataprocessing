import ISerialize from "@/data/ISerialize";

class User implements ISerialize {
    private _name = "";
    private _email = "";
    private _password = "";

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name.trim();
    }
    get email(): string {
        return this._email;
    }
    set email(email: string) {
        this._email = email.trim();
    }
    get password(): string {
        return this._password;
    }
    set password(password: string) {
        this._password = password.trim();
    }

    toSerialize(): string {
        return JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password
        });
    }
}

export default User;
