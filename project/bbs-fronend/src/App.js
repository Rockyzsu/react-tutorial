import ThreadList from "./ThreadList";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import SettingForm from "./SettingForm";
import PostButton from "./PostButton";
function App() {
  return (
    <>
      <h1>论坛</h1>
      <RegisterForm />
      <LoginForm />
      <SettingForm />
      <PostButton />
      {/* <ThreadList /> */}
      <h1>备案信息</h1>
    </>
  );
}

export default App;
