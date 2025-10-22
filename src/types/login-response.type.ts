type userRole = "ADMIN" | "COMMON";

export type LoginResponse = {
    token:string;
    username:string;
    role:userRole;
}