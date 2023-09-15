import { db } from "@/configs/database.connection";
import { Person } from "@/protocols/person";

async function getPersonById(id: number): Promise<Person>{
    const person = await db.query<Person>(`
        SELECT * FROM people WHERE id=$1;
    `, [id]);
    return person.rows[0];
}

async function countPeople(): Promise<number>{
    const number = await db.query<{count: number}>(`
        SELECT COUNT(id) FROM PEOPLE;
    `);
    return number.rows[0].count;
}

export const personRepository = {
    getPersonById,
    countPeople
}