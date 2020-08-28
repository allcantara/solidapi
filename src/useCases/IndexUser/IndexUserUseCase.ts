import { IBaseIndexUser } from "../Base/IBaseIndexUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export class IndexUserUseCase implements IBaseIndexUser {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(): Promise<IUserAttributesDTO[]> {
    return await this.usersRepository.index()
  }
}
