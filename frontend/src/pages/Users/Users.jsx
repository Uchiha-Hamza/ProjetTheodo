import './Users.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import UsersTable from '../../components/UsersTable/UsersTable';

function Users() {
  const [users, setUsers] = useState([]);
  const [usersLoadingError, setUsersLoadingError] = useState(null);

  const fetchUsers = () => {
    setUsersLoadingError(null);

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        setUsersLoadingError('An error occured while fetching users.');
        console.error(error);
      });
  };

  // fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="Users-container">
      <h1>SIGN IN</h1>
      <AddUserForm onSuccessfulUserCreation={fetchUsers} />
      <UsersTable users={users} onSuccessfulUserDeletion={fetchUsers} />
      {usersLoadingError !== null && (
        <div className="users-loading-error">{usersLoadingError}</div>
      )}
    </div>
  );
}

export default Users;
