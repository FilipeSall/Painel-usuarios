import './App.css'
import CreateModal from './components/createUserModal/CreateUserModal'
import Header from './components/header/Header'
import UsersContainer from './components/usersContainer/UsersContainer'
import { useGlobalContext } from './GlobalContext'
import { ToastContainer } from 'react-toastify';

function App() {

  const { isAddUserModal } = useGlobalContext();
  

  return (
    <main>
      <Header />
      <UsersContainer />
      {isAddUserModal && <CreateModal />}
      <ToastContainer />
    </main>
  )
}

export default App
