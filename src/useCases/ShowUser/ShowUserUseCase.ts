import { IBaseShowUser } from "../Base/IBaseShowUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export class ShowUserUseCase implements IBaseShowUser {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<IUserAttributesDTO | null> {
    return await this.usersRepository.show(id)
  }
}
