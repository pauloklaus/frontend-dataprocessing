import User from "@/data/Auth/Register/User";
import UserService from "@/data/Auth/Register/UserService";
import UserRepositoryApi from "@/data/Auth/Register/UserRepositoryApi";
import RequesterApi from "@/data/Repository/RequesterApi";

class UserFactory {
    static factory(): UserService {
        const requesterApi = new RequesterApi<User>();
        const userRepositoryApi = new UserRepositoryApi(requesterApi);
        return new UserService(userRepositoryApi);
    }
}

export default UserFactory;
