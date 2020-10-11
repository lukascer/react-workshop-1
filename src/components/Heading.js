import PropTypes from 'prop-types';

const Heading = ({ title, children }) => (
    <div>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
);

Heading.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
    title: '',
};

export default Heading;
