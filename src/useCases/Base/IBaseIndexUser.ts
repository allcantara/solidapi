import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export interface IBaseIndexUser {
  execute(): Promise<IUserAttributesDTO[]>
}
