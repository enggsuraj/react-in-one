import React from "react";
import Profile from "./Profile/Profile";

function App() {
  const todosData = [
    {
      id: 1,
      text: "Take out the trash",
      completed: true,
    },
    {
      id: 2,
      text: "Check Boxes",
      completed: false,
    },
    {
      id: 3,
      text: "Move lawn",
      completed: true,
    },
  ];

  const newData = todosData.map((item) => {
    return <Profile key={item.id} data={item} />;
  });

  return <>{newData}</>;
}

export default App;
