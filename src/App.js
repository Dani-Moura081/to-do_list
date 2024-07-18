import './App.css';
import './style.css';
import { useState } from 'react';

function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAddItem() {
    const textWithoutSpace = inputText.trim(); // tira os espaços em branco inicio e fim do texto
    if (textWithoutSpace === "") return; // impede de add uma tarefa em branco

    let newItem = {
      id: Date.now(),
      itemList: textWithoutSpace,
    };

    setItemList([...itemList, newItem]);
    setInputText("");
  }

  function handleDeleteItem(item) {
    setItemList((prevList) => prevList.filter((list) => list.id !== item.id));
  }

  return (
    <div className='container'>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className='AddItemButton' onClick={handleAddItem}>Add</button>
      </div>

      <ul className='list'>
        {itemList.map((item) => (
          <li className='item' key={item.id}>
            {item.itemList}
            <button
              className="DeleteItemButton"
              onClick={() => handleDeleteItem(item)}
            >
              X
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
