import { useTranslation } from "react-i18next";
import moment from "moment";

interface IProps {
    flight_time: string;
    flight_aeraport_name: string;
    landing_time: string;
    landing_aeraport_name: string;
}

const Flight = ({
    flight_aeraport_name,
    flight_time,
    landing_aeraport_name,
    landing_time,
}: IProps) => {
    const { t } = useTranslation();
    const flightDate = moment(new Date(flight_time));
    const backToDate = moment(new Date(landing_time));

    return (
        <>
            <p className="registration-aside__text">
                {(flight_aeraport_name ||
                    landing_aeraport_name) && (
                        <>
                            {t("flight_label")}: {flight_aeraport_name} -{" "}
                            {landing_aeraport_name} (U yerga)
                        </>
                    )}
            </p>
            {flight_aeraport_name &&
                <>
                    <p className="registration-aside__text">{t("class_label")}: Ekonom (Y)</p>
                    <div className="registration-aside__row">
                        <div className="registration-aside__label">
                            <svg
                                fill="currentColor"
                                width="18px"
                                height="14px"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                            >
                                <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240l-58.2-25.9c-8.7-3.9-18.8-3.7-27.3.6l-32.2 16.1c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2h137.7c5 0 9.9-1.2 14.3-3.4l272.9-136.4c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48h-57.4c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"></path>
                            </svg>
                            <span>{flight_aeraport_name ?? ""} </span>
                        </div>
                        <div className="registration-aside__date">
                            {flight_time && (
                                <>
                                    <b>{flightDate.format("HH:mm")}</b>{" "}
                                    {flightDate.format("DD.MM.YYYY")}
                                </>
                            )}
                        </div>
                    </div>
                </>}
            <div className="registration-aside__row">
                <div className="registration-aside__label">
                    {landing_aeraport_name && (
                        <svg
                            fill="currentColor"
                            width="18px"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path d="M.3 166.9L0 68c0-10.3 9.5-17.9 19.5-15.7l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6-41.5-145.2C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2-41.2 15.6-86.2 18.1-128.8 7l-298.3-77.6c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14-9.3-22.5zM32 448h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1164 0 32 32 0 11-64 0zm128-16a32 32 0 110 64 32 32 0 110-64z"></path>
                        </svg>
                    )}
                    <span>{landing_aeraport_name ?? ""}</span>
                </div>
                <div className="registration-aside__date">
                    {landing_time && (
                        <>
                            <b>{backToDate.format("HH:mm")}</b>{" "}
                            {backToDate.format("DD.MM.YYYY")}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Flight;
