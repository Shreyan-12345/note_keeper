/*
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App()
{
    return( 
    <div>
        <Heading/>
        <List/>
    </div>
    );
}

export default App;
*/

// import React from "react";
// import Card from "./Card";
// import contacts from "./contact";

// function createCard(contact)
// {
//   return <Card
//   key={contact.id}     //special react component , cannot be used as a prop and not shown in page 
//   id={contact.id}
//   name={contact.name}
//   img={contact.imgURL}
//   tel={contact.phone}
//   email={contact.email} />
// }


// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       {contacts.map(createCard)}

//       {/*<Card
//         name={contacts[0].name}
//         img={contacts[0].imgURL}
//         tel={contacts[0].phone}
//         email={contacts[0].email}
//       />
//       <Card
//         name={contacts[1].name}
//         img={contacts[1].imgURL}
//         tel={contacts[1].phone}
//         email={contacts[1].email}
//       />
//       <Card
//         name={contacts[2].name}
//         img={contacts[2].imgURL}
//         tel={contacts[2].phone}
//         email={contacts[2].email}
//       />*/}
//     </div>
//   );
// }

//export default App;



/*
import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emojiTerm => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
*/

/*
import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
*/

/*
import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
*/

/*
import React from "react";

var isDone = false;

function strike() {
  isDone = true;    // declarative programming
  //document.getElementById("root").style.textDecoration="line-through";    //imperative programming
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

  

function App() {
  const state=useState(121);
  console.log(state);

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{state}</h1>   {//automatically triggers in the UI (shwon in sandbox) when state's value is change}
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
*/

/*
import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

export default App;
*/


// import React, { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: ""
//   });

//   function handleChange(event) {
//     const { value, name } = event.target;

//     /*
//     if(name==="fName")
//     {
//       setFullName({fName: value});
//     }
//     else if(name==="lName")
//     {
//       setFullName({lName: value});
//     }  
//     */    // When First Name is clicked and value is entered then the object change, new object shows only fName as key. Similar way when lName is clicked and entered value. 

//     setFullName(prevValue => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName
//         };
//       } 
//       else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lname: value
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact(prevValue => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName,
//           email: prevValue.email
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value,
//           email: prevValue.email
//         };
//       } else if (name === "email") {
//         return {
//           fName: prevValue.fName,
//           lName: prevValue.lName,
//           email: value
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={handleChange}
//           value={contact.fName}
//           name="fName"
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           value={contact.lName}
//           name="lName"
//           placeholder="Last Name"
//         />
//         <input
//           onChange={handleChange}
//           value={contact.email}
//           name="email"
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

/*
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


