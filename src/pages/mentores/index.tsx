import CardScheduling from "@/components/atoms/CardSchedulingMentor";
import { MentorsContainer } from "@/styles/pages/mentors";
import { useEffect, useState } from "react";
import { MentorCardProp } from "@/components/atoms/CardSchedulingMentor";
import axios from "axios";

export default function MentorPage() {
  const [fetchMentor, setMentor] = useState([]); 

  const fetchMentors = async () => {
    try {
      const response = await axios.get('https://mentores-backend.onrender.com/mentor');
      setMentor(response.data); 
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMentors();
  }, []);

  return (
    <MentorsContainer>
      {fetchMentor.map((mentor:MentorCardProp) => (
        <CardScheduling key={mentor.id} mentor={mentor} /> 
      ))}
    </MentorsContainer>
  );
}
