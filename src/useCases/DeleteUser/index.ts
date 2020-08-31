import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUserController";

const mysqlUserRepository = new MysqlUserRepository()
const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController }
