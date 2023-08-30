import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const formattedDate = (date: string): string => {
    const arr = date.split('-')
    return format(new Date(+arr[0], +arr[1], +arr[2]), 'dd MMMM yyyy', {
        locale: ru,
    })
}
