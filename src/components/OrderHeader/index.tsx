import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import { Container } from './styles';

import logoImg from '../../assets/logo1.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

export function OrderHeader() {
    const { cart } = useCart();

    return (
        <Container>
            <Link to='/'>
                <img src={logoImg} alt='Fast Food logo' />
            </Link>
            <div>
                <div>
                    <h3>Meus pedidos</h3>
                    <span>
                        <strong>
                            {`${cart.length}`.padStart(2, '0')} item(s)
                        </strong>
                    </span>
                </div>
                <CartIcon />
            </div>
        </Container>
    );
}