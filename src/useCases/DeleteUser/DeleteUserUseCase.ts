import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { IBaseDeleteUser } from "../Base/IBaseDeleteUser";

export class DeleteUserUseCase implements IBaseDeleteUser {
  private usersRepository: MysqlUserRepository;

  constructor(usersRepository: MysqlUserRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
