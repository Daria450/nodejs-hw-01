import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from "../utils/readContacts.js";

const generateContacts = async (number) => {

    const data = await readContacts();

    for (let i = 0; i < number; i++) {
        const contact = createFakeContact();
        data.push(contact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf8');

};

generateContacts(5);
