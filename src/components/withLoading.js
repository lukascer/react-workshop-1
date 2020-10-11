const WithLoading = Component => ({ isLoading, ...props }) =>
    !isLoading ? <Component {...props} /> : <p>... Načítám</p>;

export default WithLoading;
