import { Request, Response } from "express";
import { CreateTagServicer } from "../services/CreateTagService";

class CreateTagController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { name } = request.body;

  const createTagService = new CreateTagServicer();

  const tag = await createTagService.execute(name);

  return response.json(tag)
 }
}

export { CreateTagController }