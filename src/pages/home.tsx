import { BaseLayout } from "../components/base-layout/baseLayout";
import CardsContainer from "../components/cards-container/cardsContainer";
import FilterForm from "../components/filter-form/filterForm";

const Home = () => {
    return (
        <BaseLayout>
            <FilterForm />
            <CardsContainer />
        </BaseLayout>
    );
}

export default Home;