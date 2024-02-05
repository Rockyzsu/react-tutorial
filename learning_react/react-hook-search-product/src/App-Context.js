import { useContext, useState, createContext } from "react";
const AppContext = createContext({});

const C = () => {
  const appContext = useContext(AppContext);
  const deleteUser = () => {
    if (!appContext.roles.includes("admin")) {
      console.log("no permission to delete user");
      alert("no permission to delete");
    }
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <p>C组件</p>
      <button onClick={deleteUser}>删除账户</button>
    </div>
  );
};
const B = () => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <p>B组件</p>
      <C />
    </div>
  );
};
const A = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>A组件</p>
      <B />
    </div>
  );
};

function App() {
  const [userRole, setUserRole] = useState(["user", "admin"]);

  return (
    <div>
      <p>根组件</p>
      <AppContext.Provider value={{ roles: userRole }}>
        <A />
      </AppContext.Provider>
    </div>
  );
}

export default App;
