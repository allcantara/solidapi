import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { IndexUserUseCase } from "./IndexUserUseCase";
import { IndexUserController } from "./IndexUserController";

const mysqlUserRepository = new MysqlUserRepository()
const indexUserUseCase = new IndexUserUseCase(mysqlUserRepository)
const indexUserController = new IndexUserController(indexUserUseCase)

export { indexUserController }
