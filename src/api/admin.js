import { DIC } from '@/const/dic'
export const getDic = (type) => {
    return new Promise((resolve, reject) => {
        resolve({ data: DIC[type] });
    })
}