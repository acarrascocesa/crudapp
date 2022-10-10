import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/formUsers.css'


const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: ""
}

const UsersForm = ({ createNewUser, updateInfo, updateUser, setUpdateInfo, setFormIsClose }) => {

  const { register, reset, handleSubmit } = useForm()

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo)
    }

  }, [updateInfo])


  const submit = data => {
    if (updateInfo) {
      updateUser(updateInfo.id, data)
      setUpdateInfo()

    } else {
      createNewUser(data)
    }
    reset(defaultValues)
    setFormIsClose(true)
  }

  const handleCloseForm = () => {
    setFormIsClose(true)
  }

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(submit)}>
      <i onClick={handleCloseForm} className="form__x fa-regular fa-circle-xmark"></i>
        <h2 className="form__title">{updateInfo ? "Edit User" : "Create User"}</h2>
        
        <div className="form__div">
          <label className="form__label" htmlFor="email">Email</label>
          <input className="form__input" placeholder="Type your email" type="email" id="email" {...register('email')} />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" placeholder="Type your password" type="password" id="password" {...register('password')} />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="first_name">First Name</label>
          <input className="form__input" placeholder="Type your first name" type="text" id="first_name" {...register('first_name')} />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="last_name">Last Name</label>
          <input className="form__input" placeholder="Type your last name" type="text" id="last_name" {...register('last_name')} />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="birthday">Birthday</label>
          <input className="form__input" type="date" id="birthday" {...register('birthday')} />
        </div>
        <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default UsersForm;
