import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export interface IBaseUpdateUser {
  execute(data: IUserAttributesDTO, id: string): Promise<void>;
}
