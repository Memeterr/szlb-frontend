import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import {IconCircleCheck, IconCreditCardPay, IconTruckDelivery, IconUser} from "@tabler/icons-react";

export function OrderStepper() {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Stepper
                completedIcon={<IconCircleCheck size={18} />}
                size={"sm"}
                color={"#a058d1"}
                active={active}
                onStepClick={setActive}
                allowNextStepsSelect={false}
                pt={"sm"} px={"sm"}
            >
                <Stepper.Step icon={<IconUser size={16} />} label="Első lépés" description="Vásárló adatai">
                    Step 1 content
                </Stepper.Step>
                <Stepper.Step icon={<IconTruckDelivery size={18} />} label="Második lépés" description="Szállítás">
                    Step 2 content
                </Stepper.Step>
                <Stepper.Step icon={<IconCreditCardPay size={18} />} label="Utolsó lépés" description="Fizetés">
                    Step 3 content
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
                <Button color={"#a058d1"} variant="outline" onClick={prevStep}>Vissza</Button>
                <Button color={"#a058d1"} onClick={nextStep}>Következő lépés</Button>
            </Group>
        </>
    );
}