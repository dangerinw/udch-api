export const success = (params?: any) => {
    if (params) {
      return { result: "DONE", message: "success", data: params };
    } else {
      return { result: "DONE", message: "success" };
    }
  };
  export const err_message = (params?: any) => {
    if (params) {
      return { result: "FAILED", message: "error", data: params };
    } else {
      return { result: "FAILED", message: "error" };
    }
  };
  