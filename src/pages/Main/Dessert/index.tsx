import { useSnack } from "../../../hooks/useSnack";

import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";

export default function Dessert() {
    const { desserts } = useSnack();

    return (
        <>
            <Head title="Sobremesas" description="As melhores sobremesas da atualidade." />
            <SnackTitle>Sobremesas</SnackTitle>
            <Snacks snacks={desserts}></Snacks>
        </>
    );
}