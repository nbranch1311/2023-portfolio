import React from 'react';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import Button from 'components/Button';
import TextField from 'components/TextField';
import TextArea from 'components/TextArea';
import { updateContact } from '../helper/contacts';

const editAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contact/${params.contactId}`);
};

const EditContact = () => {
  const { contact } = useLoaderData();
  console.log(contact);

  return (
    <div className="flex flex-grow">
      <div className="flex flex-grow p-4">
        <Form method="post" id="contact-form" className="max-w-3xl">
          <div className="flex flex-grow flex-col">
            <label className="block font-semibold mb-2">Name</label>
            <div className="flex flex-grow gap-4">
              <TextField
                placeholder="First"
                name="first"
                defaultValue={contact?.first}
              />
              <TextField
                placeholder="Last"
                name="last"
                defaultValue={contact?.last}
              />
            </div>
          </div>
          <div className="flex flex-grow flex-col">
            <TextField
              label="Twitter"
              placeholder="@username"
              name="twitter"
              defaultValue={contact?.twitter}
            />
            <TextField
              label="Avatar URL"
              placeholder="https://example.com/avatar.jpg"
              name="avatar"
              defaultValue={contact?.avatar}
            />
          </div>
          <TextArea
            label="Notes"
            name="notes"
            defaultValue={contact?.notes}
            rows={6}
          />
          <div className="flex gap-2">
            <Button type="submit">Save</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export { EditContact as default, editAction };
