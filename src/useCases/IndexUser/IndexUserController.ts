import { IndexUserUseCase } from "./IndexUserUseCase";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";
import { Request, Response } from "express";

export class IndexUserController {
  private indexUserUseCase: IndexUserUseCase;

  constructor(indexUserUseCase: IndexUserUseCase) {
    this.indexUserUseCase = indexUserUseCase;
  }

  async handle(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const users = await this.indexUserUseCase.execute();
      return response.status(200).json(users);
    } catch (error) {
      console.log(error);
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
