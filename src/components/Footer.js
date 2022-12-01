import styled from "styled-components";
import party from "../assets/party.png";
import sad from "../assets/sad.png"

export default function Footer({ completedCounter, cards, answerRow, includesWrong }) {

    function Feedback() {
        if (includesWrong) {
            return (
                <ContainerFeedBack>
                    <div>
                        <img src={sad} />
                        <p><strong>Putz...</strong></p>
                    </div>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </ContainerFeedBack>
            )
        } else {
            return (
                <ContainerFeedBack>
                    <div>
                        <img src={party} />
                        <p><strong>Parabéns!</strong></p>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </ContainerFeedBack>
            )
        }
    }

    return (
        <ContainerFooter>
            {completedCounter == cards.length ? <Feedback /> : ''}
            <p data-test="footer">{completedCounter}/{cards.length} CONCLUÍDOS</p>
            <ContainerImage>
                {answerRow.map((answer) => answer)}
            </ContainerImage>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    img{
        margin-top: 5px;
        margin-right: 5px;
    }
`

const ContainerImage = styled.div`
    
`

const ContainerFeedBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 200px;
    margin-bottom: 20px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        margin-bottom: 15px;
        img{
            margin: auto 10px auto 0;
        }
    }
`