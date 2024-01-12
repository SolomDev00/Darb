export interface IRegisterInput {
  name: "username" | "email" | "password";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface ILoginInput {
  name: "identifier" | "password";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface IErrorResponse {
  error: {
    details?: {
      errors: {
        message: string;
      }[];
    };
    message?: string;
  };
}

export interface ITodo {
  id: number;
  title: string;
  description: string;
}

export interface IPrimeData {
  id?: string | undefined;
  icon: string;
  title: string;
  description: string;
}

export interface IToken {
  jwt: string;
  user: {
    username: string;
  };
}
