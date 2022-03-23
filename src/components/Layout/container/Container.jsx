import Header from '../header/Header';

const Container = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Container;