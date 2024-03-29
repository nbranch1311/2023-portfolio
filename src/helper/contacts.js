import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';

export const getContacts = async (query) => {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem('contacts');
  contacts = contacts || [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] });
  }
  return contacts.sort(sortBy('last', 'createdAt'));
};

export const createContact = async () => {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await setContact(contacts);
  return contact;
};

export const getContact = async (id) => {
  await fakeNetwork(`contact:${id}`);
  const contacts = await localforage.getItem('contacts');
  const contact = contacts.find((contact) => contact.id === id);
  return contact ?? null;
};

export const updateContact = async (id, updates) => {
  await fakeNetwork();
  let contacts = await localforage.getItem('contacts');
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await setContact(contacts);
  return contact;
};

export const deleteContact = async (id) => {
  let contacts = await localforage.getItem('contacts');
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await setContact(contacts);
    return true;
  }
  return false;
};

const setContact = async (contacts) => {
  return localforage.setItem('contacts', contacts);
};

let fakeCache = {};

const fakeNetwork = async (key) => {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
};
