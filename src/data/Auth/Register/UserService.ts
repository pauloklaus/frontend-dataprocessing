import User from "@/data/Auth/Register/User";
import ICrudRepository from "@/data/Repository/ICrudRepository";
import RequiredFieldValidationError from "@/data/Error/Validation/RequiredFieldValidationError";
import InvalidFormatValidationError from "@/data/Error/Validation/InvalidFormatValidationError";

class UserService {
    repository: ICrudRepository<User>;

    constructor(repository: ICrudRepository<User>) {
        this.repository = repository;
    }

    private validate(user: User): void {
        if (user.name == "")
            throw new RequiredFieldValidationError("Preencha o nome.", "name");

        if (user.name.split(" ").length < 2)
            throw new InvalidFormatValidationError("Informe seu nome completo.", "name");

        if (user.email == "")
            throw new RequiredFieldValidationError("Informe o e-mail.", "email");

        if (user.password == "")
            throw new RequiredFieldValidationError("Define uma senha.", "password");
    }

    insert(user: User): Promise<User> {
        this.validate(user);
        return this.repository.insert(user);
    }
}

export default UserService;
