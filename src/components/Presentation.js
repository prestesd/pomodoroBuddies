import './Presentation.css';
import logo from '../assets/logoPomodoroBuddy.png';
import screenshottimer from '../assets/timer-pomodoro.JPG';
import screenshottasks from '../assets/screenshot-tasks.JPG';
export default function Presentation(){
    return(
      <div className="container mt-3">
        <h1 className="text-introduction"> Bem-vind@ ao Pomodoro Buddies!</h1>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-block w-100"><p className='text-introduction'>Utilizamos a técnica pomodoro para ajudar a superar obstáculos de foco e organização.</p>
                       <div className='pomodoro-logo-image'>
                        <img
                            alt='logotipo do pomodoro buddies'
                            width='200px'
                            src={logo}
                            />
                       </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 text-introduction">Um ciclo pomodoro (ou somente pomodoro) refere-se ao período de 25 minutos.</div>
                    <div className=' pomodoro-logo-image mt-2'>
                        <img
                         alt='Imagem representativa do ciclo do pomodoro com duração de 25 minutos cada'
                         src={screenshottimer}
                         />
                         
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 text-introduction">Vá para a aba de tarefas e dê nome às atividades que você pretende realizar. Selecione 1, 2, 3 ou 4 ciclos de pomodoros para realizá-la.</div>
                    <div className=' pomodoro-logo-image mt-2'>
                        <img
                         alt='Imagem representativa do ciclo do pomodoro com duração de 25 minutos cada'
                         src={screenshottasks}
                         />
                         
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block w-100 text-introduction">Vá para o temporizador para iniciar a contagem regressiva do ciclo.</div>
                </div>
            </div>
        </div>
        <div className='mt-3'>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>    
            </div>
      </div>
    );
}