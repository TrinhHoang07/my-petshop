import { atom } from 'recoil';
import { TData } from '../models';

export const filterItem = atom<string>({
    key: 'filter',
    default: '',
});

export const filterItemByPrice = atom<[number, number]>({
    key: 'filterByPrice',
    default: [0, 100],
});

export const isFilter = atom<boolean>({
    key: 'isFilter',
    default: false,
});

export const isMenuMobile = atom<boolean>({
    key: 'isMenuMobile',
    default: false,
});

export const orderItems = atom<TData[]>({
    key: 'orderItems',
    default: [],
});
