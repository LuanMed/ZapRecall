import styled from "styled-components";
import right from "../assets/icone_certo.png"
import almost from "../assets/icone_quase.png"
import wrong from "../assets/icone_erro.png"

export default function Footer({ completedCounter, cards, answerRow}) {
    return (
        <ConteinerFooter>
            <p data-test="footer">{completedCounter}/{cards.length} CONCLUÍDOS</p>
            <ConteinerImage>
                {answerRow.map((answer, index) => answer)}
            </ConteinerImage>
        </ConteinerFooter>
    )
}

const ConteinerFooter = styled.footer`
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

const ConteinerImage = styled.div`
    
`