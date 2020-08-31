import { IUserAttributesDTO } from "../dtos/UserAttributesDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUserAttributesDTO | null>;
  save(user: IUserAttributesDTO): Promise<IUserAttributesDTO>;
  show(id: string): Promise<IUserAttributesDTO | null>;
  index(): Promise<IUserAttributesDTO[]>
  update(user: IUserAttributesDTO, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
