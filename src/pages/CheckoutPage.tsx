import styled from "styled-components";
// import { useCartContext } from '../context/cart_context'
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>Checkout</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
