import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export interface IBaseShowUser {
  execute(id: string): Promise<IUserAttributesDTO | null>;
}
