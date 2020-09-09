import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export interface IBaseCreateUser {
  execute(data: IUserAttributesDTO): Promise<IUserAttributesDTO>;
}
