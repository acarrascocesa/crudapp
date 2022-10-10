import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const baseURL = "https://users-crud1.herokuapp.com/";

  const [users, setUsers] = useState();

  const [updateInfo, setUpdateInfo] = useState()

  const [formIsClose, setFormIsClose] = useState(true)


  const getAllUsers = () => {
    const URL = `${baseURL}users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  const createNewUser = data => {
    const URL = `${baseURL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = id => {
    const URL = `${baseURL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${baseURL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setFormIsClose(false)
  }
  return (
    <div className="App">
      <div className="App_container-title">
        <h1 className="App__title">AC Users CRUD</h1>
        <button className="App__btn" onClick={handleOpenForm}>Create a New User</button>
      </div>

      <div className={`form-container ${formIsClose && "disable__form"}`}>
        <UsersForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUser={updateUser}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      </div>


      <div className="users__container">
        {
          users?.map(user => (
            <UsersList
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdateInfo={setUpdateInfo}
              setFormIsClose={setFormIsClose}

            />
          ))
        }
      </div>

    </div>
  )
}

export default App;
