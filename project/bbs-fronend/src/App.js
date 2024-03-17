import ThreadList from "./ThreadList";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import SettingForm from "./SettingForm";
import PostButton from "./PostButton";
import ModifyPostButton from "./ModifyPostButton";
import Footer from "./Footer";
import ReplyPostForm from "./ReplyPostForm";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Instruction from "./Instruction";


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
      <UserInfo username='root'/>
      <Instruction/>
      {/* <ThreadList /> */}
      <Footer />
    </>
  );
}

export default App;
