import './App.css';
import Header from './components/header';
import triangles from './assets/triangle-pattern.svg'

function App() {
  let imagePath = './src/assets/banner1.svg'
  let banners = [1, 2, 3]
  return (
    <div>
      <Header />
      <div className="first-div pb-3" style={{ backgroundImage: `url('${imagePath}')` }}>
        <div style={{ marginBottom: '9.5rem' }} className='z-1 col-8 col-lg-6'>
          <h1>Trabalhe a sua equipe com treinamentos ao ar livre</h1>
          <div className='d-flex gap-2 justify-content-center'>
            {banners.map((banner) => <span key={banner} className='rounded-circle bullets bg-white' style={{ width: '10px', height: '10px' }}></span>)}
          </div>
        </div>
      </div>
      <div className='w-100 light-green-background second-div d-flex justify-content-lg-center align-items-lg-end p-bottom-2 flex-column flex-lg-row'>
        <div className="d-flex">
          <img src={triangles} style={{ maxHeight: '73%', left: '5rem', bottom: '5rem' }} className="position-absolute"></img>
          <iframe src="https://www.youtube.com/embed/et9ueYUt9Po" className='rounded w-100 z-1' style={{ aspectRatio: '16/9' }} height="300">
          </iframe>
        </div>
        <div className='d-flex flex-column justify-content-between col-lg-6 col-12 px-4 py-0 z-1' style={{ height: '300px' }}>
          <span className='dark-green-color'>SOBRE</span>
          <h2 className='dark-green-color fw-bold bg-white' style={{ width: 'fit-content' }}>CONHEÇA A NATURE</h2>
          <p>A Nature é uma empresa que tem como maior especialidade os treinamentos empresariais ao ar livre.<br /> Desenvolvemos todas as potencialidades, para formarmos colaboradores e equipes corporativas de alta produtividade.</p>
          <button className="btn btn-secondary fw-bold col-12 col-lg-4">Saiba mais</button>
        </div>
      </div>
      <div className='w-100 position-relative' style={{ bottom: '15rem' }}>
        <img src="./src/assets/third-section.svg" className='w-100'></img>
        <div className="position-absolute" style={{ bottom: '4.5%', left: '20%' }}>
          <div className='ecotreinamento h-100 d-flex flex-column justify-content-center p-4 z-1 dark-green-background position-relative bottom-0'>
            <h2 className='light-green-color fw-bolder bg-white' style={{ width: 'fit-content' }}>ECOTREINAMENTO</h2>
            <p className='fw-bold light-green-color'>Pioneirismo e excelência em treinamentos corporativos</p>
            <p>A abordagem de Ecotreinamento engloba o ensino físico, mental e emocional durante uma imersão na natureza.
              Ele é planejado para fomentar a colaboração e a sinergia em busca do sucesso, incentivando a confiança em si mesmo e em seus colegas.
            </p>
            <button className="btn btn-secondary light-green-background fw-bold col-12 p-2" style={{ fontSize: '24px' }}>Confira nossos programas</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
