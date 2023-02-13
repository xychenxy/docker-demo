import { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || window.location.origin;

const User = () => {
	const [users, setUsers] = useState([]);

	const getUsers = () => {
		axios
			.get(`${BASE_URL}/v1/users`)
			.then((response) => {
				setUsers(response.data.users);
			})
			.catch((error) => {
				console.log("error", error);
			});
	};

	const removeUser = () => {
		setUsers([]);
	};

	return (
		<div>
			<div>
				{users.length === 0 && (
					<button onClick={getUsers}>
						Hi, I want to get some users
					</button>
				)}
				{users.length > 0 && (
					<button onClick={removeUser}>Remove users</button>
				)}
				<ul>
					{users.map((user, index) => (
						<li key={index}>{user}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default User;
