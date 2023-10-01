import useUser from "@/context/Auth/useUser"

function GenericPage (){
    const user = useUser()
    return (
        <>
        <h1>Página genérica de desenvolvimento. Esperando US#33</h1>
        <span>Hi {user.user?.fullName}</span>
        </>
    )
}

export default GenericPage