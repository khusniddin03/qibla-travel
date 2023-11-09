import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "../card/card";
import Container from "../container/container";
import "./cardsContainer.css";

const CardsContainer = () => {
    const { state } = useLocation();
    const { t } = useTranslation();

    return (
        <Container>
            <div className="cards-container">
                {state?.tourpack?.id ? (
                    <Card {...state?.tourpack} />
                ) : (
                    <div className="cards-container__title-wrap">
                        <h2 className="cards-container__title">
                            {t('find_tourpack_rule_title')}
                        </h2>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default CardsContainer;
