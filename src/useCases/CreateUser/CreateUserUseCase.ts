import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from "../../providers/Mail/IMailProvider";
import { IBaseCreateUser } from "../Base/IBaseCreateUser";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";
import { IWhatsappProvider } from "../../providers/Whatsapp/IWhatsappProvider";

export class CreateUserUseCase implements IBaseCreateUser {
  private usersRepository: IUsersRepository;
  private mailProvider: IMailProvider;
  private whatsappProvider: IWhatsappProvider

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider, whatsapp: IWhatsappProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
    this.whatsappProvider = whatsapp
  }

  async execute(data: IUserAttributesDTO): Promise<IUserAttributesDTO> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = await this.usersRepository.save(data);
    this.whatsappProvider.sendMessageNewUser(data)

    await this.mailProvider.sendMail({
      to: { name: data.name, email: data.email },
      from: { name: "Equipe Observ", email: "equipe@observ.com.br" },
      subject: "Seja bem-vindo á plataforma!",
      body: `<p>Você já pode fazer login em nossa plataforma!</p>`,
    });

    return user;
  }
}
