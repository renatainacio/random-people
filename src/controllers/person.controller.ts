import { Person } from "@/protocols/person";
import personServices from "@/services/person.services";
import { Request, Response } from "express";

export async function getRandomPerson(req: Request, res: Response){
    try {
        const person = await personServices.getRandomPerson() as Person;
        res.send(person);
    }
    catch(error){
        res.sendStatus(500);
    }
}

const personController = {
    getRandomPerson
}

export default personController;