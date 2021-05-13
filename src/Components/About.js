import {Link} from 'react-router-dom';
const About = () => {
    return(
        < div className="about">
            <p style={{fontWeight:'600'}}>This is a demo Task-Tracker</p>
            <p>Version 2.0.1</p>
            <Link to="/">Go Back</Link>
        </ div>
    )
}
export default About