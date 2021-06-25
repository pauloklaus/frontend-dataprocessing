import User from "@/data/Auth/Register/User";
import ICrudRepository from "@/data/Repository/ICrudRepository";
import RequesterApi from "@/data/Repository/RequesterApi";

class UserRepositoryApi implements ICrudRepository<User> {
    private requester: RequesterApi<User>;
    
    constructor(requester: RequesterApi<User>) {
        this.requester = requester;
    }

    async insert(user: User): Promise<User> {
        const userResult = await this.requester.insert("/auth/register", user);
        return new Promise(resolve => resolve(userResult));
    }
}

export default UserRepositoryApi;
