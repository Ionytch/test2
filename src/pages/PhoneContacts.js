import Contacts from "components/contacts/Contacts";
import { Filter } from "components/filter/Filter";
import { Phonebook } from "components/phonebook/Phonebook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectFilterValue } from "redux/selectors";

const PhoneContacts = () => {

    const dispatch = useDispatch();
 
  const contacts = useSelector(state => state.contacts.items);
  const filtered=useSelector(selectFilterValue);
  
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
        
   const filteredContacts = () => {
    
     return contacts.filter(contact => 
         contact.name.toLowerCase().includes(filtered.toLowerCase())
         
    );
  };


    return (
        // <>
        //     <div>contacts somwhere here</div>
            
        // </>
        <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook  />
            <Filter />
        {contacts.length > 0 ? (
          <Contacts
            names={filteredContacts()}
                      />
        ) : (
          <span text="Contact list is empty."> "Contact list is empty."</span>
        )}
        
        </div>
        
    );
};
export default PhoneContacts;