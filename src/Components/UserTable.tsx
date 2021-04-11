import React from 'react';
import { UserType } from '../Types/type';
import Lg from './logo.svg';

function UserTable(props: { users: UserType[]}) {
    const {users} = props;
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                        User
                        </th>
                        <th>
                        ID
                        </th>
                        <th>
                        Name
                        </th>
                        <th>
                        Email
                        </th>
                        <th>
                        Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: UserType) => 
                        <tr key={user.id}>
                            <td className="py-1">
                            <img alt={user.name} src={user.avatar ? user.avatar: Lg } />
                            </td>
                            <td>
                            {user.id}
                            </td>
                            <td>
                            {user.name}
                            </td>
                            <td>
                            {user.email}
                            </td>
                            <td>
                            {user.phone}
                            </td>
                        </tr> )}
                </tbody>
            </table>
        </div>
    )
}
export default React.memo(UserTable);