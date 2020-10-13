/* eslint-disable react/no-unused-state */
import LocaleContext from './LocaleContext';

const LocaleTogglerButton = () => (
    <LocaleContext.Consumer>
        {({ locale, toggleLocale }) => (
            <button type="button" onClick={toggleLocale}>
                Toggle Locale from {locale}
            </button>
        )}
    </LocaleContext.Consumer>
);

const Text = () => <LocaleContext.Consumer>{({ locale }) => <h2>{locale}</h2>}</LocaleContext.Consumer>;

const Content = () => (
    <div>
        <LocaleTogglerButton />
    </div>
);

class ContextApply extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            locale: 'cs',
            toggleLocale: this.toggleLocale,
        };
    }

    toggleLocale = () => {
        this.setState(state => ({
            locale: state.locale === 'en' ? 'cs' : 'en',
        }));
    };

    render() {
        return (
            <LocaleContext.Provider value={this.state}>
                <Content />
                <Text />
            </LocaleContext.Provider>
        );
    }
}

export default ContextApply;
