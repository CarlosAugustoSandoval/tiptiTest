import moment from "moment";
const ValidDate = (dateString: string):boolean => {
    return moment(dateString).isValid();
}

const GenerateDates = (from: string, to: string):string[] => {
    if(from === to) return [from]
    else {
        const a = moment(from)
        const b = moment(to)
        let init = a
        let end = b
        if(a.diff(b, 'days') > 0) {
            init = b
            end = a
        }
        const newDates: string[] = []
        while (init.isSameOrBefore(end)) {
            newDates.push(init.format('YYYY-MM-DD'));
            init.add(1, 'days');
        }
        return newDates
    }
}

const GetDaysCount = (dates:string[], type: string): number => {
    const idDays: number[] = []
    dates.forEach((date) => {
        idDays.push(moment(date).days())
    })
    if(type === 'weekend') return idDays.filter((day) => day === 0 || day === 6).length
    return idDays.filter((day) => day !== 0 && day !== 6).length
}
export { ValidDate, GenerateDates, GetDaysCount }
