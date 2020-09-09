import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export interface IWhatsappProvider {
  sendMessageNewUser(user: IUserAttributesDTO): void
}
