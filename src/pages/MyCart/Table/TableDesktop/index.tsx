import { Container } from "./styles"

export function TableDesktop() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lanche</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </Container>
    )
}