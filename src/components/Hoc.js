import PropTypes from 'prop-types';
import withLoading from './withLoading';

const List = ({ repos }) => {
    if (!repos) {
        return null;
    }

    if (!repos.length) {
        return <p>No repos, sorry</p>;
    }

    return (
        <ul>
            {repos.map(repo => {
                return <li key={repo.id}>{repo.full_name}</li>;
            })}
        </ul>
    );
};

List.propTypes = {
    repos: PropTypes.array.isRequired,
};

const ListWithLoading = withLoading(List);

class Hoc extends React.PureComponent {
    state = {
        loading: false,
        repos: [],
        error: '',
    };

    async componentDidMount() {
        this.setState({ loading: true });

        try {
            const response = await fetch(`https://api.github.com/users/martinkristof/repos`);
            const repos = await response.json();

            this.setState({ loading: false, repos: repos });
        } catch (e) {
            this.setState({ loading: false, error: e.message });
        }
    }

    render() {
        return (
            <>
                <h2>HoC</h2>
                {this.state.error ? (
                    <h4>Any error occurred: {this.state.error}</h4>
                ) : (
                    <ListWithLoading isLoading={this.state.loading} repos={this.state.repos} />
                )}
            </>
        );
    }
}

export default Hoc;
