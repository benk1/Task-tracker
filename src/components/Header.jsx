import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title}) => {
    const handleClick =(e) =>{
        console.log(e);
    }
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='green' text='Add' onClick={handleClick}/>
            </header>
            
        </div>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.prototypes = {
    title: PropTypes.string.isRequired
}

export default Header
