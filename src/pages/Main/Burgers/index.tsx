import { useSnack } from "../../../hooks/useSnack";

import Head from "../../../components/Head";
import Snacks from "../../../components/Snacks";
import SnackTitle from "../../../components/SnackTitle";

export default function Burguers() {
    const { burgers } = useSnack();

    return (
        <>
            <Head title="Hambúrgueres" description="Aqui você encontra os melhores hambúrgues caseiros, assados direto na grelha." />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={burgers}></Snacks>
        </>
    );
}