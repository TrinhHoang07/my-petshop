import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { PrivateRoute } from './components/PrivateRoute';
import AppProvider from './providers/AppProvider';
import { ChatBox } from './components/Layout/components/ChatBox';

function App() {
    return (
        <AppProvider>
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
                                    <PrivateRoute
                                        redirect={route.path}
                                        component={() => (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        )}
                                    />
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
            <ChatBox />
        </AppProvider>
    );
}

export default App;
