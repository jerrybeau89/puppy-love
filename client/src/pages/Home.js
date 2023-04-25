
import Nav from '../components/Nav'
const Home = () => {

    const authToken = true
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className = "background">
            <Nav />
            <div className="home">
                <h1> Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App </h1>
                <button className="create-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Signup'}
                </button>
            </div>
        </div>
    )
}
export default Home