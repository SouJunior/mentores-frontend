import { api } from "@/lib/axios"
import { useState } from "react"
import { ITestimony, IuseTestimonyService } from "../interfaces/IUseTestimonyService"

export const useTestimonyService = (): IuseTestimonyService => {
    const [ testimonies, setTestimonies ] = useState<ITestimony[]>([])
    const [ testimoniesErrors, setTestimoniesErrors ] = useState<string>("")

    const handleGetTestimonies = async () => {
        try {
        const response = await api.get("/testimony")

        if (response.status === 200) {
            setTestimonies(response.data)
        }

        } catch (error: any){
            console.log(error.response)
            setTestimoniesErrors(error.response?.message)
        }

    }

    return {
        testimonies, setTestimonies, handleGetTestimonies, testimoniesErrors, setTestimoniesErrors
    }
}