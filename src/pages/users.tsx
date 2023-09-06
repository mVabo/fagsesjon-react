import { useEffect, useState } from 'react';

const UsersPage = () => {
	const [users, setUsers] = useState<any>([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const tempUsers = await fetch('https://reqres.in/api/users', {
			method: 'GET',
		});
		const data = await tempUsers.json();
		setUsers(data.data);
	};

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<h2 className="text-gray-900 text-xl font-bold">Users</h2>
			<div>
				{users?.map?.((user) => (
					<div>{user.email}</div>
				))}
			</div>
		</div>
	);
};

export default UsersPage;
