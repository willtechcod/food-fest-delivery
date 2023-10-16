import { useSnack } from "../../../hooks/useSnack";


import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";


export default function Pizzas() {
    const { pizzas } = useSnack();

    return (
        <>
            <Head title="Pizzas" description="A melhor pizza da cidade com aquele toque caseiro." />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={pizzas}></Snacks>
        </>
    );
}