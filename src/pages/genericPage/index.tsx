import useUser from "@/context/useUser"

export default function genericPage (){
    const user = useUser()
    return (
        <>
        <h1>Página genérica de desenvolvimento. Esperando US#33</h1>
        <span>Hi {user.user?.fullName}</span>
        </>
    )
}