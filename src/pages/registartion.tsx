import { useLocation } from "react-router-dom";
import { BaseLayout } from "../components/base-layout/baseLayout";
import RegistrationLayout from "../components/registration-layout/registrationLayout";
import RegistrationTitle from "../components/registration-title/registrationTitle";

const Registration = () => {
    const { state } = useLocation();

    return (
        <BaseLayout>
            {
                state && <>
                    <RegistrationTitle />
                    <RegistrationLayout />
                </>
            }
        </BaseLayout>
    );
}

export default Registration;