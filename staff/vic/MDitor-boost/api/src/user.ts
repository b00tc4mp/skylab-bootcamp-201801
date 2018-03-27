import { Call } from "./call";

// const call = new Call("https", "server-mditor.herokuapp.com");

class UserAPI extends Call {
    constructor(protocol: ("http" | "https"), host: string, port?: string) {
        super(protocol, host, port)
    }

    create(name: string, surname: string, email: string, username: string, password: string) {

        return this.request("post", "user", "register", { name, surname, email, username, password });
    }
}

export { UserAPI };