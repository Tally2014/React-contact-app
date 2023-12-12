import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id:"1",
      name:"Montso",
      contact:"081467096",
      email:"montsoernestmoalosi@gmail.com"
    },
    {
      id:"2",
      name:"Tally",
      contact:"0731130421",
      email:"montsomoalosi@icloud.com"
    }
  ]

  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
