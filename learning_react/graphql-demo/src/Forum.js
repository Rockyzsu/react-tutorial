import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const MESSAGE = gql`
  query Messages {
    messages {
      author
      text
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($author: String!, $text: String!) {
    addMessage(author: $author, text: $text) {
      author
      text
    }
  }
`;

const Forum = () => {
  const { loading, error, data } = useQuery(MESSAGE);
  const [addMessage] = useMutation(ADD_MESSAGE);
  const [text, setText] = useState();
  const [author, setAuthor] = useState();

  const messages = data && data.messages; // true or false
  console.log("data is ", messages);
  console.log("----");
  return (
    <div className="App">
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      ></input>
      <textarea value={text} placeholder="Message" onChange={(e) => setText(e.target.value)}></textarea>

      <button
        onClick={async () => {
          try {
            await addMessage({ variables: { author, text }, refetchQueries: ["Messages"] });
            setText("");
            setAuthor("");
          } catch (e) {
            console.log(e);
          }
        }}
      >
        POST
      </button>

      {error ? (
        <div className="error">Error</div>
      ) : loading ? (
        <div className="loading">loading</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m, i) => (
            <div key={i}>
              <dt>{m.author}</dt>
              <dt>{m.text}</dt>
            </div>
          ))}
        </dl>
      ) : (
        "No message"
      )}
    </div>
  );
};

export default Forum;
