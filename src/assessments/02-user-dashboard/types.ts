export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export type UserCompany = User["company"];
export type UserAddress = User["address"];

export type FetchedUsers = Pick<User, "name" | "email" | "company" | "id">;

// We'll use discriminated union type to represent the state of our data fetching logic. This will help us manage the different states (loading, error, success) in a more type-safe way.

export type FetchState =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "success";
      data: FetchedUsers[];
    };
