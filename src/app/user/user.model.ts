export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  cpf: string,
  dataNascimento?: Date | null
}
