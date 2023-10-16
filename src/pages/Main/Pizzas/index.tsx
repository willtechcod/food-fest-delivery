import { useState, useEffect } from "react";
import Head from "../../../components/Head";

import { SnackData } from "../../../interfaces/SnackData";

import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";

import { getPizzas } from "../../../services/api";

export default function Pizzas() {

    const [pizzas, setPizzas] = useState<SnackData[]>([]);

    useEffect(() => {
        (async () => {
            const pizzaRequest = await getPizzas()

            setPizzas(pizzaRequest.data)
        })()
    }, []);

    return (
        <>
            <Head title="Pizzas" description="A melhor pizza da cidade com aquele toque caseiro." />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={pizzas}></Snacks>
        </>
    );
}