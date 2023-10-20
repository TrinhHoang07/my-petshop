// UPDATE TYPESCRIPT LATER

import { AxiosClientApi } from './AxiosInstance';

export class ApiService {
    get auth() {
        const route = {
            register: 'register',
            login: 'login',
        };

        return {
            register: (data: any): Promise<any> => AxiosClientApi.post(route.register, data),
            login: (data: any): Promise<any> => AxiosClientApi.post(route.login, data),
        };
    }

    get products() {
        const route = {
            getProducts: 'products/all',
            getProduct: (id: string) => `products/product/${id}`,
            searchProducts: 'products/search',
            randomProducts: 'products/random',
        };

        return {
            getProducts: (query?: any): Promise<any> => AxiosClientApi.get(route.getProducts, query),
            getProduct: (id: string, query?: any): Promise<any> => AxiosClientApi.get(route.getProduct(id), query),
            searchProducts: (query?: any): Promise<any> => AxiosClientApi.get(route.searchProducts, query),
            randomProducts: (): Promise<any> => AxiosClientApi.get(route.randomProducts),

            route: route,
        };
    }

    get carts() {
        const route = {
            getCartsByUserId: (userId: string) => `carts/cart-by-customer/${userId}`,
            addToCart: 'carts/add-to-cart',
        };

        return {
            getCartsByUserId: (userId: string, token: string) =>
                AxiosClientApi.get(route.getCartsByUserId(userId), null, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
            addToCart: (data: any, token: string) =>
                AxiosClientApi.post(route.addToCart, data, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),

            route,
        };
    }

    get orders() {
        const route = {
            addOrder: 'orders/create',
            getOrderById: (userId: string) => `orders/get-order-id/${userId}`,
        };

        return {
            addOrder: (data: any, token: string) =>
                AxiosClientApi.post(route.addOrder, data, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
            getOrderById: (userId: string, token: string) =>
                AxiosClientApi.get(route.getOrderById(userId), null, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
            route,
        };
    }

    get blogs() {
        const route = {
            getBlogById: (blogId: string) => `blogs/blog/${blogId}`,
        };

        return {
            getBlogById: (blogId: string) => AxiosClientApi.get(route.getBlogById(blogId)),
            route,
        };
    }

    get address() {
        const route = {
            getAddresses: 'address/all',
            getAddressesById: (cusId: string) => `address/address/${cusId}`,
            createAddress: 'address/create',
        };

        return {
            getAddresses: (token: string): Promise<any> =>
                AxiosClientApi.get(route.getAddresses, null, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
            getAddressesById: (cusId: string, token: string): Promise<any> =>
                AxiosClientApi.get(route.getAddressesById(cusId), null, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
            createAddress: (data: any, token: string) =>
                AxiosClientApi.post(route.createAddress, data, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
        };
    }
}
