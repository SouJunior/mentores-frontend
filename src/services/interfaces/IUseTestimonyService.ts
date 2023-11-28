import { Dispatch, SetStateAction } from "react";

export interface ITestimony {
    id: string,
    userName: string,
    role: string,
    description: string
}

export interface IuseTestimonyService {
    handleGetTestimonies: () => Promise<void>

    testimonies: ITestimony[]
    setTestimonies: Dispatch<SetStateAction<ITestimony[]>>;
    testimoniesErrors: string
    setTestimoniesErrors: Dispatch<SetStateAction<string>>;
}