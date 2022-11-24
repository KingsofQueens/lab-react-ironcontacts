import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));

  console.log(contactList);

  const handleAddRandomContact = () => {
    const remainingContacts = contactList.filter((contact) => {
      return !contacts.includes(contact);
    });
    if (remainingContacts.length) {
      const randomContact =
        remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContacts([...contacts, randomContact]);
    }
  };

  const handleSortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);
  };

  const handleSortByPopularity = () => {
    const sortedPopularity = [...contacts];
    sortedPopularity.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setContacts(sortedPopularity);
  };

  const handleDeleteContact = (id) => {
    const contactsExcludingDeletedContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(contactsExcludingDeletedContact);
  };

  return (
    <div className="App">
      <h3>IronContacts</h3>
      <p>
        <br />
        <button onClick={handleAddRandomContact}>Add Random Contact</button>
        <button onClick={handleSortByName}>Sort by name</button>
        <button onClick={handleSortByPopularity}>Sort by popularity</button>
      </p>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>

        {contacts.map((contact) => {
          return (
            <>
              <tbody>
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    {(contact.wonOscar && <p>🏆</p>) ||
                      (!contact.wonOscar && <p></p>)}
                  </td>
                  <td>
                    {(contact.wonEmmy && <p>🏆</p>) ||
                      (!contact.wonEmmy && <p></p>)}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}
export default App;
