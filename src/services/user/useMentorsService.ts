import { api } from "@/lib/axios"
import { useState } from "react"
import { IMentors, IuseMentorsService } from "../interfaces/IUseMentorsService"

export const useMentorsService = (): IuseMentorsService => {
    const [mentors, setMentors] = useState<IMentors[]>([])
    const [mentorsErrors, setMentorsErrors] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const fetchMentors = async () => {
        setLoading(true)

        try {
          const response = await api.get('/mentor')

          console.log(response)
          setMentors(response.data)
          setLoading(false)

        } catch (error: any) {
          console.error(error)
          setMentorsErrors(error.response)
        }
      }

    return { mentors, setMentors, fetchMentors, loading, setLoading, mentorsErrors, setMentorsErrors}
}