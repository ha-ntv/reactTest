


export interface PropsInputType {
    type : string;
    className: string;
    placeHolder?: string;
    name: string;
    label?: string;
};
export interface UserType {
    id: number;
    name: string;
    avatar?: string;
    email: string;
    phone: string;
}
export type HeadlinesType = {
    headlineH4: string,
    headlineH6: string
}
export type LoginDataType = {
    username: string,
    password: string
}
export interface PaginationType  {
    items: number[];
    currentPage: number;
    handlePage: (page: number) => void;
}