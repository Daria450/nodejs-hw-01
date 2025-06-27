import { readContacts } from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const contacts = await readContacts();
    const updatedContacts = contacts.slice(0, -1);
    const data = JSON.stringify(updatedContacts, null, 2);
    try {
        await fs.writeFile(PATH_DB, data, 'utf8')
    } catch (e) {
        console.log(e)
    }
};

removeLastContact();
