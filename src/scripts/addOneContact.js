import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from "../utils/readContacts.js";


export const addOneContact = async () => {
    const data = await readContacts();
    const contact = createFakeContact();
    data.push(contact);
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf8');
};

addOneContact();
