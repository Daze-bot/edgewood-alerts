import { useEffect, useState } from "react";

const AddAlert = () => {
  const [currentAlert, setCurrentAlert] = useState(null);
  const [data, setData] = useState({
    alertText: ""
  });

  const handleSubmit = (event) => {
    const newData = {...data};
    event.preventDefault();
    fetch(`https://daze-api.adaptable.app/edgewood/alerts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        setCurrentAlert(newData.alertText);
        setData({
          alertText: ""
        });
        return res.json();
      });
  };

  const handleChange = (event) => {
    const newData = {...data}
    if (event.target.name === "alertText") {
      newData.alertText = event.target.value;
      setData(newData);
    }
  }

  useEffect(() => {
    fetch('https://daze-api.adaptable.app/edgewood/alerts/recent')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentAlert(data.data.text);
      });
  }, []);

  return (
    <div className="alerts">
      <h1>Edgewood Cafe Website Management</h1>
      <div className="recent-alert">
        <h2>Current Message:</h2>
        <p>{currentAlert}</p>
      </div>

      <div className="new-alert">
        <h2>New Message:</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="alertText"
            id="alertText"
            type="text"
            value={data.alertText}
            onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddAlert;
