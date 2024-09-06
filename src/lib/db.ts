/**
 * @file api.ts
 *
 * @changelog
 *  - 2024-09-05
 *    - Create api.ts.
 */

import {promises as fs} from 'fs';

// This is a fake API that simulates making a request to a database.

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
}

export type OrderStatus = 'pending' | 'finished' | 'producing';

export type Order = {
    id: number;
    status: OrderStatus;
    type: Product;
    total: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}

const API_DELAY = 300;
const DATA_FILE = 'database.json';

const makeGetData = <T>(resource: string) => {
    return () => {
        return new Promise<T[]>((resolve) => {
            setTimeout(async () => {
                const data = await fs.readFile(DATA_FILE, 'utf-8');
                const json = JSON.parse(data);

                if (json && resource in json) {
                    resolve(Object.values(json[resource]));
                }

                return resolve([]);
            }, API_DELAY);
        });
    }
}

/**
 * load orders from the database
 */
export const getOrders = makeGetData<Order>('orders');

const makePartialUpdateData = <T>(resource: string) => {
    return async (id: string, data: Partial<T>) => {
        return new Promise<number>((resolve) => {
            setTimeout(async () => {
                const currentData = await fs.readFile(DATA_FILE, 'utf-8');
                const json = JSON.parse(currentData);

                if (json && resource in json) {
                    if (id in json[resource]) {
                        json[resource][id] = {
                            ...json[resource][id],
                            ...data,
                            updatedAt: new Date(),
                        };
                        await fs.writeFile(DATA_FILE, JSON.stringify(json, null, 2));

                        return resolve(1)
                    }
                }

                resolve(0);
            }, API_DELAY);
        });
    }
}

/**
 * update orders in the database
 */
export const updatePartialOrders = makePartialUpdateData<Order>('orders');
