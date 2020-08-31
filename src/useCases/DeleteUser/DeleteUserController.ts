import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  private deleteUserUseCase: DeleteUserUseCase;

  constructor(deleteUserUseCase: DeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      await this.deleteUserUseCase.execute(id);
      return response
        .status(200)
        .json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
