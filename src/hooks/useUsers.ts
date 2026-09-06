import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/usersAPI';
import type { User } from '../types/users';
import {useQuery} from '@tanstack/react-query'

export function useUsers() {
  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetchUsers();
  //       setUsers(response);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getUsers();
  // }, []);
  // return { users, isLoading, error };

  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });
}
