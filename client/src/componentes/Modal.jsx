import styled from 'styled-components';
import { IoClose } from "react-icons/io5";
const Modal = ({ isVisible, onClose, children, titulo }) => {
    if (!isVisible) {
        return null;
    }
    return (
        <>
            <Overlay>
                <ContenedorModal>
                    <Encabezado>
                        <h2>{titulo}</h2>
                    </Encabezado>
                    <Boton onClick={() => onClose()}><IoClose /></Boton>
                    {children}
                </ContenedorModal>
            </Overlay>
        </>
    )
}

export default Modal

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E2E8F0;

    h2{
    font-weight: 500;
    font-size: 20px;
    color: black;
    }
`;

const Boton = styled.button`
   position: absolute;
   top: 20px;
   right: 20px;
   width: 30px;
   height: 30px;
   font-size: 18px;
   background: none;
   border: none;
   cursor: pointer;
   transition: .3s ease all;
   border-radius: 5px;
   color: black;

   &:hover{
       background: #f2f2f2;
   }
`;
