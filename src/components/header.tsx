import left from '../assets/left.svg'


function Header() {
    return <div className="position-absolute w-100 z-1 p-4 d-flex align-items-center justify-content-between shadow">
        <img src={left}></img>
        <div className="d-flex gap-4">
            <span className="fw-bold">Home</span>
            <span className="fw-bold">Sobre</span>
            <span className="fw-bold">Ecotreinamento</span>
            <span className="fw-bold">Espaço Nature</span>
            <span className="fw-bold">Contato</span>
        </div>
    </div>
}

export default Header