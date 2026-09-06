import { useCallback, useMemo, useState } from 'react';
import { UserRow } from './UserRow';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { withLoading } from '../hoc/withLoading';
import { useUsers } from '../hooks/useUsers';

export const UserTable = () => {
  const [search, setSearch] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { users, isLoading, error } = useUsers();

  const query = search.toLowerCase().trim();

  const debouncedQuery = useDebouncedValue(query, 300);

  const filteredUsers = useMemo(() => {
    console.log('debounced search is working now');
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(debouncedQuery) ||
        user.email.toLowerCase().includes(debouncedQuery)
      );
    });
  }, [users, debouncedQuery]);

  const onEditRow = useCallback((user) => {
    setSelectedUser(user.id);
    console.log('edit row clicked,.,.,.,.,,');
  }, []);

  console.log('UserTable rendered....../////');

  const renderBody = () => {
    if (isLoading) {
      return (
        <tr>
          {' '}
          <td>Loading .... </td>{' '}
        </tr>
      );
    } else if (error) {
      return (
        <tr>
          <td> something went wrong.... </td>
        </tr>
      );
    } else if (filteredUsers.length > 0) {
      return filteredUsers.map((user) => (
        <UserRow key={user.id} user={user} onEdit={onEditRow} />
      ));
    } else {
      return (
        <tr>
          <td colSpan={4} style={{ textAlign: 'center' }}>
            No rows found
          </td>
        </tr>
      );
    }
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleSearchInputChange}
        placeholder="enter name or email"
      />
      <button onClick={() => setIsModal(!isModal)}>Toggle button</button>
      <div>{isModal ? 'Model open' : 'Model Closed'}</div>
      <div>
        <p>selected user id: {selectedUser}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

// export const UserTableWithLoading = withLoading(UserTable);
