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

    .section-one{
        height: 70vh;
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
    .section-two{
        height: 15vh;
        text-align: center;

        .cadastro{
            display: flex;
            justify-content: center;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
            
        .form{
            display: flex;
        }

        input{
            width: 200px;
            height: auto;
            margin-bottom: 10px;
            text-align: center;
        }
    }
`