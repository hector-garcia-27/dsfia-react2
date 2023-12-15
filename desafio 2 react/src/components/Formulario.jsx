import Button from 'react-bootstrap/Button';

export default function Formulario() {
    return (
        <form className="d-flex flex-column p-2 m-2">
            <input className="m-2 rounded" type="text" placeholder="Nombre" />
            <input className="m-2 rounded" type="text" placeholder="tuemail@ejemplo.com" />
            <input className="m-2 rounded" type="password" placeholder="Contraseña" />
            <input className="m-2 rounded" type="password" placeholder="Confirmar tu contraseña" />
            <Button className=" " variant="success" type='submit'>Registrarse</Button>
        </form>
    )
}