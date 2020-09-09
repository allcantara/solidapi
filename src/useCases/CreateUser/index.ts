import { MailTrapMailProvider } from "../../providers/Mail/implementations/MailTrapMailProvider";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { WhatsappProvider } from "../../providers/Whatsapp/implementations/WhatsappProvider";
import { whatsapp } from "../../client";

const mailTrapMailProvider = new MailTrapMailProvider();
const mysqlUserRepository = new MysqlUserRepository();
const whatsappProvider = new WhatsappProvider(whatsapp)

const createUserUseCase = new CreateUserUseCase(
  mysqlUserRepository,
  mailTrapMailProvider,
  whatsappProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
