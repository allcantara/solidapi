import { IBaseUpdateUser } from "../Base/IBaseUpdateUser";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";

export class UpdateUserUseCase implements IBaseUpdateUser {
  private usersRepository: MysqlUserRepository;

  constructor(usersRepository: MysqlUserRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: IUserAttributesDTO, id: string): Promise<void> {
    await this.usersRepository.update(data, id);
  }

}
