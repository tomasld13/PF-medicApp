import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons/lib'
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
  //PricingCardLength,
  //PricingCardFeatures,
  //PricingCardFeature
 } from './Pricing.element'
 import { postMP } from '../../slice/psico/thunks.js';
import { GoBriefcase } from "react-icons/go";
import { MdEscalatorWarning, MdOutlineEmojiPeople, MdOutlineWc, MdOutlineGroups } from "react-icons/md";

let element;
let clearClass;
function Pricing({idpsycho}) {
    const { pychoId } = useSelector(state => state.psicology);
    const {date, time} = useSelector(state => state.psicology.calendar);
    const dispatch = useDispatch();
    const {id, email, token } = useSelector(state=>state.auth.authBack)
    //let ico = [(<GoBriefcase/>),(<MdEscalatorWarning/>),(<MdOutlineGroups/>),(<MdOutlineWc/>),(<MdOutlineEmojiPeople/>)];
    function handleOnClick(e, s, p, index){
        
        
        e.preventDefault();
        try {
            if (!time) throw new Error('Seleccione una fecha');
            clearClass = document.getElementsByClassName('current')
            if(clearClass[0]) {
                clearClass[0].classList.remove('current')
            }
            element = document.getElementsByName(`name-${index}`)
            element[0].classList.add('current')
            
            dispatch(postMP({
                id: id,
                servicio: s,
                precio: p,
                hora: time,
                fecha: date,
                psicoId: idpsycho,
                email: email
            }, token));    
        } catch (error) {
            alert(error);
        }
    }

    function selectIcon(sesionValue) {
        switch (sesionValue) {
            case 'Sesion de trabajo':     
                return (<GoBriefcase/>);
            case 'Sesion infantil':     
                return (<MdEscalatorWarning/>);
            case 'Sesion de grupo':     
                return (<MdOutlineGroups/>);
            case 'Sesion de pareja':     
                return (<MdOutlineWc/>); 
            case 'Sesion personal':     
                return (<MdOutlineEmojiPeople/>);       
            default:
                break;
        }
    }

  return (
    <IconContext.Provider value={{ color: 'white', size: 48 }}>
        <PricingSection name='pricing'>
          <PricingWrapper>
            <PricingHeading>Selecciona una sesion</PricingHeading>
                <PricingContainer>
                {pychoId ? pychoId.servicios?.map((item, index) => {
                            return (     
                                    <PricingCard name={`name-${index}`} onClick={(e) =>{
                                        
                                        handleOnClick(e, item.servicio, item.precios[0].costo, index)}}
                                        PricingCard to='#pago'>
                                        <PricingCardInfo>
                                            <PricingCardIcon>
                                                {selectIcon(item.servicio)}
                                            </PricingCardIcon>
                                            <PricingCardPlan>{`${item.servicio}`}</PricingCardPlan>
                                            <PricingCardCost>{`$${item.precios[0].costo} ARS`}</PricingCardCost>
                                        </PricingCardInfo>
                                    </PricingCard>
                            )
                        }
                        
                        )
                    : <></>}
                </PricingContainer>
          </PricingWrapper>
        </PricingSection>
    </IconContext.Provider>
  )
}
export default Pricing