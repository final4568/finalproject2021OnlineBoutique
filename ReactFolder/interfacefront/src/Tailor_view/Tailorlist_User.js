import UserHeader from "../layouts/UserHeader";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import "../index.css";
import "../index.css";
import { useState, useEffect } from "react";

const Tailordeatils_User = ({ history }) => {
  const [tailors, setTailor] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [dataavaibale, setDataavaibale] = useState("");  

  useEffect(() => {

    if (refresh) return setRefresh(false);
    
    const loadTailor = async () => {
      const result = await axios.get("/api/tailor/getalltailors");
      if(result == ""){
        setDataavaibale("There Is No Tailor Avaialble Right Now");
      }else{
        setDataavaibale("All Avaiable Tailors Here");
        setTailor(result.data);

      }
    };

    loadTailor();
  }, [history, refresh]);

 

  return (
    <>
      <UserHeader />
      <div className="containter">
        <div
          className="col-12"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>List Of All Tailors</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
<p style={{fontSize:"30px", color:"black", opacity:"0.3"}}>{dataavaibale}</p>

          <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tailors.map((tailor) => (
                <tr key={tailor._id}>
                  <td>{tailor.username}</td>
                  <td>{tailor.email}</td>
                  <td>{tailor.phone}</td>
                  <td>
                    <Link to={`/users/TailorDetailss/${tailor._id}`}>
                      <Button style={{width:"80%"}} id="btn_table" color="success" size="sm">
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tailordeatils_User;

 
// export default Tailordeatils_User;