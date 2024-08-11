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

function Button({ onClick, children }) {
  return <button className="button"
    onClick={onClick}>{children}</button>
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend() {
    setShowAddFriend(show => !show)
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend])
    setShowAddFriend(false)
  }

  return <div className="app">
    <div className="sidebar">
      <FriendsList friends={friends} />
      {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      <Button onClick={handleShowAddFriend}>
        {showAddFriend ? 'Close' : 'Add friend'}
      </Button>
    </div>

    <FormSplitBill />
  </div>;
}

function FriendsList({ friends }) {
  return <ul>
    {friends.map(friend => (
      <Friend key={friend.id} friend={friend} />  // Passing friend data as prop to Friend component.  // key prop is used to uniquely identify each element in the array.  // Arrow function is used for concise rendering.  // The Friend component is reused for each friend in the friends array.  // The friend data is passed as a prop to the Friend component.  // The Friend component renders a li element containing the friend's name.  // The map function creates a new array with the Friend components, each with the corresponding friend data.  // The resulting array is then rendered as a list.  // The FriendsList component renders an unordered list containing the Friend components for each friend in the initialFriends array.  // The FriendsList component is a functional component.  // The App component renders the FriendsList component.  // The App component is a functional component.  // The App component renders a div with a class name of "
    ))}
  </ul>
}

function Friend({ friend }) {
  return <li>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>
    {friend.balance < 0 &&
      (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
    {friend.balance > 0 &&
      (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
    {friend.balance === 0 &&
      (
        <p>
          You and {friend.name} are even
        </p>
      )}

    <Button>Select</Button>
  </li>
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !image) return

    const id = crypto.randomUUID()

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    // console.log(newFriend)

    onAddFriend(newFriend)
    setName("")
    setImage("https://i.pravatar.cc/48")
  }
  return <form className="form-add-friend"
    onSubmit={handleSubmit}>
    <label>👥 Friend name</label>
    <input type='text'
      value={name}
      onChange={e => setName(e.target.value)} />

    <label>🏞️ Image URL</label>
    <input type='text'
      value={image}
      onChange={e => setImage(e.target.value)} />

    <Button>Add</Button>
  </form>
}

function FormSplitBill() {
  return <form className="form-split-bill">
    <h2>Split a bill with X</h2>

    <label>💰 Bill value</label>
    <input type='text' />

    <label>🕴️ Your expense</label>
    <input type='text' />

    <label>👥 X's expense</label>
    <input type='text' disabled />

    <label>🤑 Who is paying the bill</label>
    <select>
      <option value="user">You</option>
      <option value="friend">X</option>
    </select>

    <Button>Split bill</Button>
  </form>
}