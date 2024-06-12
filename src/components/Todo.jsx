  // update an object in a state


  import React from 'react'

  const Todo = () => {

  const user = {
      username: 'Mariam',
      age: 24,
  }

  const [initialUser, setInitialUser] = React.useState(user);
  const [isEdit, setIsEdit] = React.useState(false);

  // console.log(initialUser.age);


  const handleClick = () =>{
    // console.log(initialUser)
    setIsEdit(!isEdit);
    
  }

  const handleChange = (ev) =>{

    const updateUser = {
      ...initialUser,
      username: ev.target.value
    }
    
    setInitialUser(updateUser);

  };

  const handleAgeChange = (ev) =>{
    const updateUser = {
      ...initialUser,
      age: ev.target.value
    }
    setInitialUser(updateUser);

  }


    return (
      <div>
        <h1>Updating object in a state</h1>
        <h2>Username: {initialUser.username}</h2>
        <h2>Age: {initialUser.age}</h2>

        {/* using the setinitial user to set new value */}
      
      {  isEdit ?      
       <div>
         <div>
           <p>Username</p>
            <input value={initialUser.username}  onChange={handleChange}  />
                    {/* { initialUser.username } */}
          </div>

        <div>
          <p>Age</p>
          <input value={initialUser.age}  onChange={handleAgeChange}  />
        {/* { initialUser.username } */}
        </div>
      </div>

: ""}


        <button onClick= {handleClick} >Update User</button>

      </div>
    )
  }

  // for us to change from mariam to devmariam, we use usestate

  export default Todo
