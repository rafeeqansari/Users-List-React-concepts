import type { User } from '../types/users';

export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'rafeeq',
          email: 'rafeeq@mgail.cm',
          status: 'active',
        },
        {
          id: 2,
          name: 'ansari',
          email: 'ansari@mgail.cm',
          status: 'active',
        },
        {
          id: 3,
          name: 'md',
          email: 'md@mgail.cm',
          status: 'inactive',
        },
        {
          id: 4,
          name: 'rafnas',
          email: 'rafans@mgail.cm',
          status: 'inactive',
        },
        {
          id: 5,
          name: 'rafeeq',
          email: 'rafeeq@mgail.cm',
          status: 'active',
        },
        {
          id: 6,
          name: 'rafeeq',
          email: 'rafeeq@mgail.cm',
          status: 'active',
        },
      ]);
    }, 2000);
  });
}
