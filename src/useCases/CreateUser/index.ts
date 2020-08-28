import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapMailProvider = new MailTrapMailProvider();
const mysqlUserRepository = new MysqlUserRepository();

const createUserUseCase = new CreateUserUseCase(
  mysqlUserRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
