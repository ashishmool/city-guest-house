import { BsCalendar } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/datepicker.css';

const CheckOut = ({ value, onChange }) => {
    return (
        <div className='relative flex items-center justify-end h-full'>
            <div className='absolute z-10 pr-8'>
                <div><BsCalendar className='text-accent text-base' /></div>
            </div>
            <DatePicker
                className='w-full h-full'
                selected={value}
                placeholderText='Check out'
                onChange={onChange}
            />
        </div>
    );
};

export default CheckOut;
