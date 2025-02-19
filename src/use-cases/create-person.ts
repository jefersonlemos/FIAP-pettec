import { Person } from "@/entities/person.entitiy";
import { PersonRepository } from "@/repositories/person.repository";


export class CreatePersonUseCase {
    constructor(
        private personRepository: PersonRepository) { }

    handler(person: Person) {
        return this.personRepository.create(person)
    }
}