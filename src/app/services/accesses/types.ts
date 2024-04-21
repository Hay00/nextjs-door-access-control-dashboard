export interface Access {
  user_id: number;
  day_of_week: number;
  start: string;
  end: string;
}

export interface Accesses {
  accesses: Access[];
}

export interface CreateAccess {
  day_of_week: number;
  start: string;
  end: string;
}

export interface EditAccess {
  start: string;
  end: string;
}
