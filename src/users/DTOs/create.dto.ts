export class CreateDTO {
  // I will make the id type of string because I will use uuid module to create ids.
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly age: number;
  readonly gender: string;
}
