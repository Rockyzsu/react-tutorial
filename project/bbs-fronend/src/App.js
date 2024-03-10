import ThreadList from "./ThreadList";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import SettingForm from "./SettingForm";
import PostButton from "./PostButton";
import ModifyPostButton from "./ModifyPostButton";
import Footer from "./Footer";
import ReplyPostForm from "./ReplyPostForm";
import Header from "./Header";

function App() {
  const tid = '65ed80e383309b75d73ca06e' // just for debug
  return (
    <>
      {/* <h1>论坛</h1> */}
      <Header />
      <RegisterForm />
      <LoginForm />
      <SettingForm />
      <PostButton />
      <ModifyPostButton tid={tid}/>
      <ReplyPostForm tid={tid}/>
      {/* <ThreadList /> */}
      <Footer />
    </>
  );
}

export default App;
