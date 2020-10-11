import PropTypes from 'prop-types';

import React from 'react';

const Table = ({ items }) => (
    <table>
        <tbody>
            {items.map((item, index) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

Table.propTypes = {
    items: PropTypes.array.isRequired,
};

const Grid = ({ items }) => (
    <div className="row">
        {items.map((item, index) => (
            <div className="col" key={item.id}>
                <span>{item.id}</span>
                <span>{item.name}</span>
            </div>
        ))}
    </div>
);

Grid.propTypes = {
    items: PropTypes.array.isRequired,
};

class RenderProps extends React.PureComponent {
    state = {
        items: [],
    };

    async componentDidMount() {
        const response = await fetch('/fake-api');
        const { data } = await response.json();

        this.setState({ items: data });
    }

    render() {
        return (
            <>
                <h2>Render Props {this.props.title}</h2>
                {this.props.render({ items: this.state.items })}
            </>
        );
    }
}

RenderProps.propTypes = {
    render: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export const ItemsTable = () => <RenderProps title="Table" render={({ items }) => <Table items={items} />} />;

export const ItemsGrid = () => <RenderProps title="Grid" render={({ items }) => <Grid items={items} />} />;
