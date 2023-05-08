import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import AOS from 'aos';

function App() {
    AOS.init({
        offset: 100,
        throttleDelay: 120,
        duration: 800,
    });

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route) => {
                    const Layout = route.layout;
                    const Page = route.component;

                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {privateRoutes.map((route) => {
                    const Layout = route.layout;
                    const Page = route.component;

                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
