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
  return <div className="app">
    <div className="sidebar">
      <FriendsList />
    </div>
  </div>;
}

function FriendsList() {
  const friends = initialFriends;
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
        <p className="red">
          You and {friend.name} are even
        </p>
      )}

    <button className="button">Select</button>
  </li>
}