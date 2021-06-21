

import TailorHeader from "../layouts/TailorHeader";
import TailorSideBar from "../layouts/TailorSidebar";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import "../index.css";
import "../index.css";
import { useState, useEffect } from "react";

const UserMain_Tailor = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  

  useEffect(() => {

    if (refresh) return setRefresh(false);
    
    const loadUser = async () => {
      const result = await axios.get("/api/users/getallusers");
      setUsers(result.data);
    };

    loadUser();
  }, [history, refresh]);

  const deleteUser = (id) => {
    axios.delete(`/api/users/deleteUser/${id}`);
    setRefresh(true);
    // window.location.href = "/tailorMain"
  };

  return (
    <>
      <TailorHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <TailorSideBar />
        </div>
        <div
          className="col-10"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>Tailors Records</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
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
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/tailor/User/profile/${user._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>

                    <Link to={`/user/updateprofile/${user._id}`}>
                      <Button id="btn_table" color="warning" size="sm">
                        Edit
                      </Button>
                    </Link>

                    <Button
                      id="btn_table"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you wish to delete this User?`
                          )
                        )
                        deleteUser(user._id);
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

export default UserMain_Tailor;
