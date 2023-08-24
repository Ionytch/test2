import { useState } from "react";
import { useDispatch } from "react-redux";
// import { setFilter } from "redux/actions";
import { setContactsFilter } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
      const [filter, setFilter] = useState('');
    const changeFilter = e => {

        // e.preventDefault();
        // const form = e.target;
        console.log(e.currentTarget.value);
        setFilter(e.currentTarget.value.toLowerCase())
        dispatch(setContactsFilter(e.currentTarget.value));

        // onSubmit({ name, number });
        //   dispatch(addContact(form.elements.name.value));
        // form.reset();
    
    };

    return (<div>
        <h2>filter</h2>
        <form>
            <label for="filter">
                find contacts by name
            </label>
            <input
            type="text"
            name="filter"
            value={filter}
            onChange={changeFilter}
                
            ></input>
                </form>  
        </div>
       
    )
}