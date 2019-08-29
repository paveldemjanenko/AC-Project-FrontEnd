import styled from 'styled-components';

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: rgba(226, 224, 110);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: transform 1s linear;
    }
    .card-img-top:hover {
        transform: scale(1.5) translate(0, 25%);
    } 
`;

export { NavWrapper, ButtonContainer, ProductWrapper };