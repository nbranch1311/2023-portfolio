import { redirect } from 'react-router-dom';
import { deleteContact } from '../../../helper/contacts';

const deleteAction = async ({ params }) => {
  await deleteContact(params.contactId);
  return redirect(`/contact`);
};

export { deleteAction as default };
