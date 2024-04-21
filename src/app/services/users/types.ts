export interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
  is_admin: boolean;
  is_active: boolean;
}

export interface UsersList {
  users: User[];
}

export interface CreateUser {
  username: string;
  email: string;
  password: string;
}

export interface EditUser {
  username: string;
  email: string;
}

export interface UserAccesses {
  accesses: [
    {
      user_id: number;
      day_of_week: number;
      start: string;
      end: string;
    }
  ];
}
