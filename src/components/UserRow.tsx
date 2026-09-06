import type { User } from '../types/users';
import React, { useState } from 'react';

interface UserRowProps {
  user: User;
  onEdit: (user: User) => void;
}

export const UserRow = React.memo(({ user, onEdit }: UserRowProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  console.log('user row rendered...', user.name);
  const handleEditClick = (user: User) => {
    console.log('edit clicked id', user.id);
    onEdit(user);
    setIsEditing((prev) => !prev);
  };
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.status}</td>
      <td>
        <button onClick={() => handleEditClick(user)}>
          {isEditing ? 'Editing' : 'Edit'}
        </button>
      </td>
    </tr>
  );
});
