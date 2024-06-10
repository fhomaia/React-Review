import './App.css';

function App() {
  let imagePath = './src/assets/Mainbanner.png'
  let banners = [1, 2, 3]
  return (
    <div>
      <div className="first-div pb-3" style={{ backgroundImage: `url('${imagePath}')` }}>
        <div style={{ marginBottom: '9.5rem' }} className='z-1 col-8 col-lg-6'>
          <h1>Trabalhe a sua equipe com treinamentos ao ar livre</h1>
          <div className='d-flex gap-2 justify-content-center'>
            {banners.map((banner) => <span key={banner} className='rounded-circle bullets bg-white' style={{ width: '10px', height: '10px' }}></span>)}
          </div>
        </div>
      </div>
      <div className='w-100 light-green-background second-div d-flex justify-content-lg-center align-items-lg-end p-bottom-2 flex-column flex-lg-row'>
        <div className="position-relative">
          {/* <img src='./src/assets/triangle-pattern.png' style={{ maxWidth: '60%' }} className="position-absolute top-0 lef-0"></img> */}
          <iframe src="https://www.youtube.com/embed/et9ueYUt9Po" className='rounded w-100' style={{ height: '208px' }}>
          </iframe>
        </div>
        <div className='d-flex flex-column justify-content-end col-lg-6 col-12 p-4 pb-0'>
          <span className='dark-green-color'>SOBRE</span>
          <h2 className='dark-green-color fw-bold bg-white' style={{ width: 'fit-content' }}>CONHEÇA A NATURE</h2>
          <p>A Nature é uma empresa que tem como maior especialidade os treinamentos empresariais ao ar livre.<br /> Desenvolvemos todas as potencialidades, para formarmos colaboradores e equipes corporativas de alta produtividade.</p>
          <button className="btn btn-secondary fw-bold">Saiba mais</button>
        </div>
      </div>
    </div>
  )
}

export default App
