import { useState, useEffect } from "react"
import Head from "../../../components/Head"
import SnackTitle from "../../../components/SnackTitle"
import Snacks from "../../../components/Snacks"

import { getBurgers } from '../../../services/api';

export default function Burguers() {

    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        (async () => {
            const burgerRequest = await getBurgers()

            setBurgers(burgerRequest.data)
        })()
    }, [])



    return (
        <>
            <Head title="Hambúrgueres" description="Aqui você encontra os melhores hambúrgues caseiros, assados direto na grelha." />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={burgers}></Snacks>
        </>
    )
}