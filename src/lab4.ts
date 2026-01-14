type Student = {
    id: number;
    name: string;
    score: number;
  };
  
  interface User {
    id: number;
    email: string;
    phone?: string;
  }
  
  type Calculate = (a: number, b: number) => number;
  
  const add: Calculate = (a, b) => a + b;
  const multiply: Calculate = (a, b) => a * b;
  
  type ApiStatus = "idle" | "loading" | "success" | "error";
  
  function logStatus(status: ApiStatus): void {
    if (status === "loading") {
      console.log("Đang tải...");
    } else if (status === "success") {
      console.log("Thành công");
    } else if (status === "error") {
      console.log("Có lỗi xảy ra");
    }
  }
  
console.log(add(2, 3));
console.log(multiply(4, 5));

logStatus("loading");
logStatus("success");
logStatus("error");
