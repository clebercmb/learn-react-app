import React from "react"
const style = {
    width: '100%',
    height: 1000,
    borderStyle: 'none',
}


function Folha() {
    return (
        <iframe style={style} src="http://www.folha.com.br"></iframe>
    )
}

export default Folha