import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title}) => {
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='green' text='Hello'/>
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
