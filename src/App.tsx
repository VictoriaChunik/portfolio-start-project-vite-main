
import './App.css'
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { MyWorks } from './layout/sections/works/MyWorks';


// здесь отрисовка всего сайта отделных компонентах
function App() {
    return (
        <section className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contact/>
            <Footer/>
        </section>
    )
}

export default App
