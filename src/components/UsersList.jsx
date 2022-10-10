import React from 'react'
import './styles/userCard.css'

const UsersList = ({ user, deleteUser, setUpdateInfo, setFormIsClose }) => {

  const handleUpdate = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  return (
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user__list'>
        <li className='user__item'>
          <span className='user__span'>Email: </span>{user.email}</li>
        <li className='user__item'>
          <span className='user__span'>Birthday: </span>
          <div className='user__item-container'><i class="user__birth fa-solid fa-cake-candles"></i>{user.birthday}</div></li>
      </ul>
      <footer className='user__footer'>

        <button className='user_btn' onClick={() => deleteUser(user.id)}>
          <i className="user__trash fa-regular fa-trash-can"></i>
        </button>

        <button className='user_btn' onClick={handleUpdate}>
          <i className="user__edit fa-solid fa-pencil"></i>
        </button>

      </footer>
    </article>
  )
}

export default UsersList