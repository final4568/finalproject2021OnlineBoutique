import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import "../index.css";
import "../index.css";
import { useState, useEffect } from "react";

const AllTailorMain_admin = ({ history }) => {
  const [tailors, setTailor] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [ dataavaibale, setDataavaibale] = useState("No Tailor Regitered");

  useEffect(() => {

    if (refresh) return setRefresh(false);
    
    const loadTailor = async () => {
      const result = await axios.get("/api/tailor/getalltailors");
      if(result == ""){
        setDataavaibale("No Tailor Regitered");
      }else if(result == result){
        setTailor(result.data);
       
        setDataavaibale("All Regitered Tailors Here");
       
      }
    };

    loadTailor();
  }, [history, refresh]);

  const deletetailor = (id) => {
    axios.delete(`/api/tailor/delete/${id}`);
    setRefresh(true);
  };

  return (
    <>
      <AdminHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <AdminSideBar />
        </div>
        <div
          className="col-10"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>All Tailors </h1>
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
                    <Link to={`/Tailor/Profile/${tailor._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>
                    <Link to={`/Tailor/Update/${tailor._id}`}>
                      <Button id="btn_table" color="warning" size="sm">
                        Edit
                      </Button>
                    </Link>

                    <Button
                      id="btn_table"
                      onClick={() => {
                        if (window.confirm (`Are you sure you wish to delete this Tailor?`))
                          deletetailor(tailor._id);
                      }}
                      color="danger" size="sm"
                    >
                      Delete
                    </Button>
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

export default AllTailorMain_admin;
