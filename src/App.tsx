import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSEONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  useEffect(() => {
    client
      .query({
        query: GET_LESSEONS_QUERY,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return <h1 className="text-5xl font-bold text-violet-500  ">Hello world</h1>;
}

export default App;
