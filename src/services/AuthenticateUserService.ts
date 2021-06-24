import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepository } from "../repositories/UsersRepository"

interface IAuthenticateRequest {
 email: string;
 password: string;
}

class AuthenticateUserService {

 async execute({ email, password }: IAuthenticateRequest) {
  const usersRepository = getCustomRepository(UsersRepository)

  const user = await usersRepository.findOne({ email })

  if (!user) {
   throw new Error("Email/Password incorrect")
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
   throw new Error("Email/Password incorrect")
  }

  const token = sign(
   { email: user.email },
   "906aa37505be6c991fde742cbc1fc107",
   {
    subject: user.id,
    expiresIn: "1d"
   })

  return token
 }

}

export { AuthenticateUserService }