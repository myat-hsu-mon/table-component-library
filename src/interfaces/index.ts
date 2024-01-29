export type DepartmentType = "sales" | "designs" | "support";
export type StatusType = "pending" | "failed" | "done";
export type FilterKeyProp = "department" | "paymentStatus" | "paymentDate";
export type MenuItemProp =
  | "Archive"
  | "Share"
  | "Download"
  | "Detail"
  | "Tag"
  | "Edit"
  | "Delete";

export interface Employee {
  id: number;
  employeeName: string;
  department: DepartmentType;
  salary: number;
  paymentDate: string;
  details: string;
  paymentStatus: StatusType;
}
