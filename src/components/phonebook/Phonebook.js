import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "redux/actions";
// import { addContact } from "redux/contactSlice";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";

export const Phonebook = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    console.log(contacts);

    const doesContactExist = newName => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };
  
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;       
        console.log(e.target.elements.number);
        console.log(name, number);

        if (doesContactExist(form.elements.name.value))
        {
            alert(
                `user ${name} is already in the contact list`
            );
            return;
}

        // dispatch(addContact({ name: form.elements.name.value, number: form.elements.number.value }));
        dispatch(addContact({ name, number}));
        
        setName('');
        setNumber('');
        // form.reset();
    
    };

    

        return (<div>
            <h2>PHONEBOOK</h2>
            <form onSubmit={handleSubmit}>
                <label for="name">
                    NAME
                </label>
                <input
                    type="text"
                    name="name"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                ></input>
                <label for="number">
                    TEL NUMBER
                </label>
                <input
                    type="tel"
                    name="number"
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    required
                ></input>
                <button type="submit">ADD CONTACT</button>

            </form>
        </div>
       
        )
    
}

// export default Phonebook

// onSubmit={this.handleSubmit}