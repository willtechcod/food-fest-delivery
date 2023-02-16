import { useEffect, useState } from "react"

import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTitle"
import Snacks from "../../../components/Snacks"
import { getDesserts } from "../../../services/api"

export default function Dessert() {

    const [desserts, setDesserts] = useState([])

    useEffect(() => {
        (async () => {
            const dessertRequest = await getDesserts()

            setDesserts(dessertRequest.data)
        })()
    }, [])

    return (
        <>
            <Head title="Sobremesas" description="As melhores sobremesas da atualidade." />
            <SnackTitle>Sobremesas</SnackTitle>
            <Snacks snacks={desserts}></Snacks>
        </>
    )
}