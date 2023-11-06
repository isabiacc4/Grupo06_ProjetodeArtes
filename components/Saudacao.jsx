const { LoggedUserContext } = require("@/context/LoggedUserContext");
const { useContext } = require("react");

function Saudacao(){
    const LoggedUsarCtx = useContext(LoggedUserContext);

    return(
        <>
        <p>Olá, {LoggedUsarCtx.name}! </p>
        </>
    );
}

export default Saudacao;