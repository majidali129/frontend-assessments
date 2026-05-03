export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type ApiError = {
  message: string;
  statusCode?: number;
};

export type ApiStatus<T> =
  | { status: "idle" }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: ApiError;
    };
