import React from 'react'
import ReactDOM from 'react-dom'
import './estilo.css'
import IMG from './Imagens/josedasilva.jpeg'

const ProfSaude = () => {
    const prof1 = "José da Silva" //Salvou, nesta const, estes três objetos json
    const prof2 = "Maria da Silva"
    const prof3 = "Jaqueline Mendes"
    const estiloexterno = {border: 'solid', borderRadius: 8, backgroundColor: '#EEE', paddingTop: 8, textAlign: 'center', width: '70%'}

    return(

        <div style={estiloexterno}>
            Profissionais de Saúde
            <div style={{ border: 'solid', borderRadius: 8, backgroundColor: '#EEE', paddingTop: 8, textAlign: 'center', width: '85%', marginLeft: '7%'}}>
                <div className="profissionais">
                    <img src={IMG} style={{display: "inline-grid", border: 'solid', borderRadius: 1, backgroundColor: '#EEE', width: '150px', height: '150px'}} alt='new'></img>
                    <br/>{prof1}
                </div>
                <div className="profissionais">
                    <img src={process.env.PUBLIC_URL + '/mariadasilva.jpeg'} style={{display: "inline-grid", border: 'solid', borderRadius: 1, backgroundColor: '#EEE', width: '150px', height: '150px'}}  alt='new'/>
                    <br/>{prof2}</div>
                <div className="profissionais">
                    <img src="https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?cs=srgb&dl=pexels-cedric-fauntleroy-4270088.jpg&fm=jpg" style={{display: "inline-grid", border: 'solid', borderRadius: 1, backgroundColor: '#EEE', width: '150px', height: '150px'}} alt='new'/>
                    <br/>{prof3}</div>
            </div>
        </div>
    )
}
//algumas coisas: na linha 21, ele  herdou a imagem de uma pasta imagens que eu cirei auqi.
//na linha 25, puxei da pasta public
//na linha 28, puxei de url externa

ReactDOM.render(
    <ProfSaude/>,
    document.querySelector("#root")
)