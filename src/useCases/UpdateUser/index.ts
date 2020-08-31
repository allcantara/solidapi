import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";

const mysqlRepository = new MysqlUserRepository();
const updateUserUseCase = new UpdateUserUseCase(mysqlRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
