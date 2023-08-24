import { Contact } from "./Contact"


const Contacts = ({ names }) => {
        return (
            <ul>
                   {
                       names.map(name => (
                           <li key={name.id}>
                               <Contact name={name} />
                            </li>))}
            </ul>
        )
    
}

export default Contacts
