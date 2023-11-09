import { useTranslation } from "react-i18next";
import './registrationAside.css';
import { useLocation } from 'react-router-dom';
import { clearChilds } from '../../helpers/disabledCounter';
import { amountFormat } from '../../helpers/amontFormat';
import { useAppContext } from '../../context/appContext';
import { tourPackDecode } from "../../helpers/tourPackDecode";

const RegistrationAside = () => {
    const { state } = useLocation();
    const { t } = useTranslation();
    const { lang } = useAppContext();
    const additional = state?.tourpack?.data?.additional;
    const duration = tourPackDecode(state?.tourpack?.data?.dates)?.find((date) => date?.date === state?.date)?.duration;
    const peopleCount = +state?.people_count + clearChilds(JSON.parse(state.child_count ?? '[]'))?.length
    const price = BigInt(+(state?.tourpack?.price ?? 0)) * BigInt(peopleCount);
    const priceUzs = BigInt(+(state?.tourpack?.data?.price_uzs ?? 0)) * BigInt(peopleCount);
    
    return (
        <div className="registration-aside">
            <div className='registration-aside__card'>
                <div className="registration-aside__title">
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" width='20px' viewBox="0 0 384 512">
                        <path d="M14 2.2c8.5-3.9 18.5-2.5 25.6 3.6L80 40.4l40.4-34.6c9-7.7 22.3-7.7 31.2 0L192 40.4l40.4-34.6c9-7.7 22.3-7.7 31.2 0L304 40.4l40.4-34.6c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8v464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6l-40.4 34.6c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zm16-112c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"></path>
                    </svg>
                    <h4>{t("order_detail_title")}</h4>
                </div>
                <div className="registration-aside__subtitle">
                    <span>{t("passengers_label")}: </span>
                    <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" width={13} height={20} viewBox="0 0 320 512">
                        <path d="M112 48a48 48 0 1196 0 48 48 0 11-96 0zm40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"></path>
                    </svg>
                    <span>{peopleCount}</span>
                </div>

                <div className="registration-aside__duration">
                    {t('duration_label')}: {duration} {t('day_label')}
                </div>

                <div className="registration-aside__line"></div>

                <pre className='registration-aside__additional'>
                    {additional?.[lang]}
                </pre>

            </div>

            <div className="registration-aside__price">
                <h4 className="registration-aside__price-title">{t("total_cost_title")}</h4>
                <div className="registration-aside__amount">
                    {amountFormat(String(priceUzs).replace('n', ''))} <span>uzs</span>
                    <br />
                    {amountFormat(String(price).replace('n', ''))} <span>usd</span>
                </div>
            </div>
        </div>
    );
}

export default RegistrationAside;