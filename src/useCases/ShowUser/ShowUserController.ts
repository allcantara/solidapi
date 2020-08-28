import { ShowUserUseCase } from "./ShowUserUseCase";
import { Request, Response } from "express";

export class ShowUserController {
  private showUserUseCase: ShowUserUseCase;

  constructor(showUserUseCase: ShowUserUseCase) {
    this.showUserUseCase = showUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const user = await this.showUserUseCase.execute(id);
      return response.status(200).json(user);
    } catch (error) {
      console.log(error);
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
