import React, { useEffect, useState } from "react";
import http from "../http";

const Home: React.FC = () => {
  const [users, setUsers] = useState<{name:string, email:string}[]>([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <div>
      <h1>User Listing</h1>
      <table className="table my-4">
        <thead>
          <th>S.No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index++}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
