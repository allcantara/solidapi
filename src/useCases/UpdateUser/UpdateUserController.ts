import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase;

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, email, password, telephoneNumber } = request.body;
      const data = { name, email, password, telephoneNumber };
      await this.updateUserUseCase.execute(data, id);
      return response
        .status(200)
        .json({ message: "Usuário alterado com sucesso!" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
