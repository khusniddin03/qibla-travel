import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { ITourPack } from '../../interface';
import { useTranslation } from 'react-i18next';
import './card.css';

interface IProps extends ITourPack { }

const Card = ({ title, description, price, logo }: IProps) => {
    const { state } = useLocation();
    const { lang } = useAppContext();
    const { t } = useTranslation();
    const baseUrl = 'https://api.qibla-travel.uz/public/';
    const image = baseUrl + logo;

    return (
        <div className="card">
            <div className="card__wrap">
                <div className="card__left">
                    <div className="card__image">
                        <img src={image} alt="hotel image" />
                    </div>
                </div>
                <div className="card__right">
                    <h4 className="card__title">
                        {title?.[lang]}
                    </h4>
                    <p className="card__description">
                        {description?.[lang]}
                    </p>
                    <div>
                        <span>Narxi:</span> &nbsp;<b>{price} $</b>
                    </div>
                    <Link state={state} to={`/${lang}/registration`} className="card__link button">
                        {t('registration_btn_text')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;