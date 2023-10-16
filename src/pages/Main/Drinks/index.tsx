import { useState, useEffect } from "react";
import Head from "../../../components/Head";
import { SnackData } from "../../../interfaces/SnackData";

import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";

import { getDrinks } from "../../../services/api";

export default function Drinks() {

    const [drinks, setDrinks] = useState<SnackData[]>([]);

    useEffect(() => {
        (async () => {
            const drinkRequest = await getDrinks()

            setDrinks(drinkRequest.data)
        })()
    }, []);

    return (
        <>
            <Head title="Bebidas" description="As diversas bebidas geladas e ao ponto." />
            <SnackTitle>Bebidas</SnackTitle>
            <Snacks snacks={drinks}></Snacks>
        </>
    );
}