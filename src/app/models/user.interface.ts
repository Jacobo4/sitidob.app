export interface UserInterface {
  email: string,
  password: string,
  type: UserType
}

enum UserType {
  admin,
  student,
  teacher
}
