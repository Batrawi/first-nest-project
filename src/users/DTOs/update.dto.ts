// 😢Sorry, but now I am writing code while I am offline , there is mappedtype that nest provided to do this stuff 👇, by extend the properties and make them optional and its called partial type.
export class UpdateDTO {
  readonly id?: string;
  readonly name?: string;
  readonly email?: string;
  readonly age?: number;
  readonly gender?: string;
}
