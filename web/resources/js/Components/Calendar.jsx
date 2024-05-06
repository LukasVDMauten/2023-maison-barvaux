import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import {nlBE} from "date-fns/locale";
import { useState } from 'react'
import {usePage} from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Calendar = () => {
    const {events} = usePage().props;
    let today = startOfToday()
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function isInEvent(date) {
        let inEvent = false;
        events.forEach(e => {
            const start = new Date(e.start_date);
            const end = new Date(e.end_date);

            start.setDate(start.getDate() - 1)

            if (date >= start && date < end) {
                inEvent = true;
            }
        });

        return inEvent;
    }

    function isLastDay (date) {
        let isLastDay = false;
        events.forEach(e => {
            const end = new Date(e.end_date);

            if (date === end) {
                isLastDay = true;
            }
        });

        return isLastDay;
    }

    function eventBackground (date) {
        let backgroundStyle = "";
        events.forEach(event => {
            date.setHours(0,0,0);
            const start = new Date(event.start_date);
            start.setHours(0,0,0);
            const end = new Date(event.end_date);
            end.setHours(0,0,0);
            const tomorrow = new Date(event.end_date);
            tomorrow.setHours(0,0,0);
            tomorrow.setDate(tomorrow.getDate() + 1)

            if (date >= start && date < end) {
                backgroundStyle = "text-white bg-red-500";
            } else if (isSameDay(date, end)) {
                const et = events.filter(e => isSameDay(new Date(e.start_date), tomorrow))

                if (et.length > 0)
                    backgroundStyle = "text-white bg-red-500";
                else
                    backgroundStyle = "text-white bg-half-taken bg-center";
            }
        });

        return backgroundStyle;
    }

    return (
        <div className="w-full pt-12 max-w-[600px]">
            <div className="w-full px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                <div className="w-full md:grid md:grid-cols-1 md:divide-x md:divide-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'MMMM yyyy', {
                                    locale: nlBE,
                                })}
                            </h2>
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Vorige maand</span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                                onClick={nextMonth}
                                type="button"
                                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Volgende maand</span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div>M</div>
                            <div>D</div>
                            <div>W</div>
                            <div>D</div>
                            <div>V</div>
                            <div>Z</div>
                            <div>Z</div>
                        </div>
                        <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                                <div key={day.toString()}
                                    className={classNames(
                                        dayIdx === 0 && colStartClasses[getDay(day)],
                                        'py-1.5'
                                    )} >
                                    {}
                                    <p className={classNames(
                                            eventBackground(day),
                                            isToday(day) && 'text-white bg-[#89A87B]',
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )} >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                                            {format(day, 'd')}
                                        </time>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let colStartClasses = [
    'col-start-7',
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
]

export default Calendar;
