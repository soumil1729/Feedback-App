import PropTypes from 'prop-types';

function Header(props) {
  const headerStyle = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

//if we want to set default props
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
// if will do a type check wether the prop type is of the specficed type
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
