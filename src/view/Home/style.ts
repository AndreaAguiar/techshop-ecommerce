import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    
    .nav{
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cart{
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section{
        height: 85vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        .product-content{
            display: grid;
            text-align: center;
            height: 400px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;            
        }
    }
`