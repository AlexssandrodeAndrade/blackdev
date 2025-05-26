import { format } from 'date-fns'

export function useToDateFormat(param) {
  return format(param, 'dd/MM/yyyy')
}
