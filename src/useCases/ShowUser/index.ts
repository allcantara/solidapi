import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { ShowUserUseCase } from "./ShowUserUseCase";
import { ShowUserController } from "./ShowUserController";

const mysqlUsersRepository = new MysqlUserRepository();
const showUserUseCase = new ShowUserUseCase(mysqlUsersRepository);
const showUserController = new ShowUserController(showUserUseCase);

export { showUserController };
