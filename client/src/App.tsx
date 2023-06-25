import { ToastContainer } from 'react-toastify';
import './App.css'
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
 import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
     <PostCreate />
     <PostList />
     <ToastContainer />
    </div>
  );
}

export default App;
