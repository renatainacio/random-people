import { Person } from "@/protocols/person";
import { personRepository } from "@/repositories/person.repository";

async function getRandomPerson(): Promise<Person> {
    const count: number = await personRepository.countPeople();
    const number = Math.floor(Math.random() * count) + 1;
    const person = await personRepository.getPersonById(number);
    return person;
}

const personServices = {
    getRandomPerson
}

export default personServices;