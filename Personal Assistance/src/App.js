import 'bulma/css/bulma.css'
import PorfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

// console.log(AlexaImage )//different for img less than 9.7kb
// console.log(SiriImage)//different for img greater than 9.7kb

function App() {
    return (
        <div>
            {/* <img src='https://picsum.photos/200/300'/> */}
            {/* This is the way we can get random pictures */}
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistance
                    </p>

                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <PorfileCard title='Alexa' handle='@alexa99' img={AlexaImage} description="Alexa was created by Amazon and helps you to buy things." />

                        </div>
                        <div className='column is-4'>

                            <PorfileCard title='Cortana' handle='@cortana01' img={CortanaImage} description="Cortana was developed by Microsoft.Nobody knows what is does."/>
                        </div>
                        <div className='column is-4'>

                            <PorfileCard title='Siri' handle='@siri36' img={SiriImage} description="Siri was made by Apple and is being phased out Hey nothing." />
                        </div>

                    </div>
                </section>
            </div>





        </div>
    )
}

export default App;