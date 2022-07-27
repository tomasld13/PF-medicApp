import React from 'react'
import { Button } from '../Button/Button'
import { IconContext } from 'react-icons/lib'
import { HiUserGroup } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiLovers } from 'react-icons/gi'
import { 
    PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
 } from './PricingH.element'

function Pricing() {
  return (
    <IconContext.Provider value={{ color: 'white', size: 64 }}>
        <PricingSection name='pricing'>
          <PricingWrapper>
            <PricingHeading>Precios</PricingHeading>
                <PricingContainer>
                    <PricingCard>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <BsFillPersonFill />
                            </PricingCardIcon>
                            <PricingCardPlan>Citas Individuales</PricingCardPlan>
                            <PricingCardCost>Desde $3.499 ARS</PricingCardCost>
                            {/* <PricingCardLength>Semanal</PricingCardLength> */}
                            <PricingCardFeatures>
                                <PricingCardFeature>Incluye 1 cita de 50 minutos</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 1 persona</PricingCardFeature>
                            </PricingCardFeatures>
                            {/* <Button primary>Elegir Plan</Button> */}
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiLovers />
                            </PricingCardIcon>
                            <PricingCardPlan>Citas de pareja</PricingCardPlan>
                            <PricingCardCost>Desde $16.499 ARS</PricingCardCost>
                            {/* <PricingCardLength>Mensual</PricingCardLength> */}
                            <PricingCardFeatures>
                                <PricingCardFeature>Incluye 2 citas semanales</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 2 personas</PricingCardFeature>
                            </PricingCardFeatures>
                            {/* <Button primary>Elegir Plan</Button> */}
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <HiUserGroup />
                            </PricingCardIcon>
                            <PricingCardPlan>Citas grupales</PricingCardPlan>
                            <PricingCardCost>$28.499 ARS</PricingCardCost>
                            {/* <PricingCardLength>Mensual</PricingCardLength> */}
                            <PricingCardFeatures>
                                <PricingCardFeature>2 citas semanales</PricingCardFeature>
                                <PricingCardFeature>Soporte 24 hs</PricingCardFeature>
                                <PricingCardFeature>Para 6 personas</PricingCardFeature>
                            </PricingCardFeatures>
                            {/* <Button primary>Elegir Plan</Button> */}
                        </PricingCardInfo>
                    </PricingCard>
                </PricingContainer>
          </PricingWrapper>
        </PricingSection>
    </IconContext.Provider>
  )
}

export default Pricing