import { atom } from 'recoil';

export const filterItem = atom({
    key: 'filter',
    default: '',
});

export const filterItemByPrice = atom<[number, number]>({
    key: 'filterByPrice',
    default: [0, 100],
});