import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddfriend] = useState(false);

  function handleShowAddFriend(addFriend) {
    setAddfriend(!addFriend);
  }

  function handleAddFriend(friend) {
    console.log(friends);

    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={() => handleShowAddFriend(addFriend)}>
          {`${addFriend ? "Close" : "Add Friend"}`}
        </Button>
      </div>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">{`You owe ${friend.name} ${Math.abs(
          friend.balance
        )}€`}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">{`${friend.name} owe you ${Math.abs(
          friend.balance
        )}€`}</p>
      )}
      {friend.balance === 0 && <p>{`You and ${friend.name} are even `}</p>}
      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();

  function handleName(e) {
    setName(() => e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = { name: name, image: `${image}?=${id}`, id, balance: 0 };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭Friend Name</label>
      <input type="text" value={name} onChange={(e) => handleName(e)} />

      <label>🌇 Image URL</label>
      <input type="text" value={image} onChange={(e) => handleImage(e)} />

      <Button>Add</Button>
    </form>
  );
}
