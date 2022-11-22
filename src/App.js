import "./App.css";
import contactData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    contactData[0],
    contactData[1],
    contactData[2],
    contactData[3],
    contactData[4],
  ]);

  console.log(contactData);

  const handleAddRandomContact = () => {
    setContacts([
      ...contacts,
      contactData[Math.random(Math.random() * contactData.length) + 6],
    ]);
  };

  return (
    <div className="App">
      <h3>IronContacts</h3>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td>Won an Emmy</td>
          </tr>
        </thead>

        {contacts.map((value) => {
          return (
            <>
              <tbody key={value}>
                <tr>
                  <td key={value.pictureUrl}>
                    <img src={value.pictureUrl} alt={value.name} />
                  </td>
                  <td key={value.name}>{value.name}</td>
                  <td key={value.popularity}>{value.popularity}</td>
                  <td>
                    {(value.wonOscar && <p>🏆</p>) ||
                      (!value.wonOscar && <p></p>)}
                  </td>
                  <td>
                    {(value.wonEmmy && <p>🏆</p>) ||
                      (!value.wonEmmy && <p></p>)}
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
