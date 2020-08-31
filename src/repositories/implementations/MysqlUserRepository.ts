import { uuid } from "uuidv4";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export class MysqlUserRepository implements IUsersRepository {
  private users = User;

  async findByEmail(email: string): Promise<IUserAttributesDTO | null> {
    try {
      const user = this.users.findOne({ where: { email } });
      return user;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async save(user: IUserAttributesDTO): Promise<IUserAttributesDTO> {
    try {
      user.id = uuid();
      const newUser = await this.users.create(user);
      return newUser;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async show(id: string): Promise<IUserAttributesDTO | null> {
    try {
      const user = this.users.findOne({ where: { id } });
      if (!user) {
        throw new Error("User not exists!");
      }
      return user;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async index(): Promise<IUserAttributesDTO[]> {
    try {
      const users = await this.users.findAll();
      return users;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async update(data: IUserAttributesDTO, id: string): Promise<void> {
    try {
      const userExists = this.users.findByPk(id);

      if (!userExists) {
        throw new Error("User not exists!");
      }

      await this.users.update(data, { where: { id } });
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.users.destroy({ where: { id } });
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
