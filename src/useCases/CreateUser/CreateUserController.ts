import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUSeCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUSeCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      const user = await this.createUserUseCase.execute({ name, email, password })
      
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}
