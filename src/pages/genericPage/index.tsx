import { useAuthContext } from '@/context/Auth/AuthContext'

function GenericPage() {
  const { mentor } = useAuthContext()

  return (
    <>
      <h1>Página genérica de desenvolvimento. Esperando US#33</h1>
      <span>Hi {mentor.data?.fullName}</span>
    </>
  )
}

export default GenericPage
