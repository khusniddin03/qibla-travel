import moment from "moment";
import { ITourPackDate } from "../../interface";

export const datePickerItem = (_: number, date: Date, tourPackDates: ITourPackDate[], countCondition: number) => {
    const currentTourPackDate = tourPackDates.find((tourPackDate: ITourPackDate) => {
        return moment(new Date(tourPackDate.date)).format('DD/MM/YYYY') === moment(date).format('DD/MM/YYYY');
    });

    let className = '';

    if (currentTourPackDate) {
        const count = Number(currentTourPackDate?.count)
        if (count > countCondition) {
            className = 'primary';
        } else if (count === 0) {
            className = 'danger';
        } else if (count <= countCondition && count > 0) {
            className = 'whiteprimary';
        } else {
            className = ''
        }
    }

    return (
        <div className={`custom-datepicker-item ${className}`}>
            <span className='custom-datepicker-date'>
                {new Date(date).getDate()}
            </span>
            {currentTourPackDate && <span className="custom-item-overlay">{currentTourPackDate.label}</span>}
        </div>
    );
};
