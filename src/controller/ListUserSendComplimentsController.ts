import { Request, Response } from "express"
import { ListUserSendComplimentService } from "../services/ListUserSendComplimentsService"

class ListUserSendComplimentsController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { user_id } = request;

  const listUserSendComplimentService = new ListUserSendComplimentService();

  const compliments = await listUserSendComplimentService.execute(user_id)

  return response.json(compliments)
 }
}

export { ListUserSendComplimentsController }