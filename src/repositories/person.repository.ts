import { Person } from '@/entities/person.entitiy'

export class PersonRepository {
    async findById(id: number): Promise<Person> {
        return {
            id,
            cpf: '12345678901',
            name: 'John Doe',
            birth: new Date('2000-01-01'),
            email: 'jer@gmail.com',
            user_id: 1
        }
    }
    async create(person: Person): Promise<Person> {
        return person
    }
}