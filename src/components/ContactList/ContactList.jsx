import React from "react";
import {ContactsList, ContactsListItem, ContactListText, Button} from './ContactList.styled'
    

export const ContactList = ({contacts, onDeleteContact}) => (
    
        <ContactsList>
            {contacts.map(({id, name, number}) => (
                <ContactsListItem key={id}>
                    <ContactListText>{`${name}: ${number}`}</ContactListText>
                    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
                </ContactsListItem>
            ))}
                
        </ContactsList>
        
    
)


    