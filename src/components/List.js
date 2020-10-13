import PropTypes from 'prop-types';

const List = ({ numbers, type }) => {
    const listItems = numbers.map(number => <ListItem key={type + number.toString()} value={number} />);

    return <ul>{listItems}</ul>;
};

List.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    type: PropTypes.oneOf(['a', 'b']).isRequired,
};

const ListItem = ({ value }) => <li>{value}</li>;

ListItem.propTypes = {
    value: PropTypes.number.isRequired,
};

export default List;
