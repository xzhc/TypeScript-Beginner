import type React from "react";
import { useEffect, useState } from "react";

interface HomeProps {
  owner: string;
}

const Home: React.FC<HomeProps> = ({ owner }) => {
  return <>Home of {owner}</>;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    setList(["1", "2", "3"]);
  });
  return (
    <>
      <Home owner="Tom" />
      {/* <Home owner=123 /> */}
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default App;
