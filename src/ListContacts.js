import React, { Component } from "react";

function ListContacts(props) {
  console.log("Props:", props);
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => {
        return (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>@{contact.handle}</p>
            </div>
            <button
              onClick={() => props.onDeleteContact(contact)}
              className="contact-remove"
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ListContacts;
