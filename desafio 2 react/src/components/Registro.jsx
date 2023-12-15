import Formulario from "./Formulario"
import SocialButtons from "./SocialButtons"

export default function Registro () {
    return (
        <div className="border rounded-5 p-3 registro">
            <h1 className="my-3">Crea una cuenta</h1>
            <SocialButtons url1="../src/assets/icon_facebook.svg" url2="../src/assets/icon_github.svg" url3="../src/assets/icon_linkedin.svg"/>
            <h4 className="text-center" >O usa tu email para registrarte</h4>
            <Formulario/>
        </div>
    )
}

