import { useState } from "react";

const Login = ({setIsLoggedIn}) => {
  const loginKey = 'edgewood123!';

  const [data, setData] = useState({
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.password === loginKey) {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password, try again");
      setData({
        password:""
      });
    }
  }

  const handleChange = (event) => {
    const newData = {...data};
    if (event.target.name === "password") {
      newData.password = event.target.value;
      setData(newData);
    }
  }

  return (
    <div className="login">
      <h1>Enter Password to Continue</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="password"
          id="password"
          type="text"
          value={data.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;
