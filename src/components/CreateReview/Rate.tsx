import { SvgIcon } from "../../assets/svg/SvgIcon";
import { getArrFromNumber } from "../../helpers/getArrFromNumber";
import { RateContainer, RateStar } from "./styles";

type Props = {
    rateNumber?:number;
    setRateNumber:(n:number) => void;
    isEditable?:boolean;
}

export const Rate:React.FC<Props> = ({isEditable,rateNumber,setRateNumber}) => {
    return <RateContainer>
            {getArrFromNumber(rateNumber)?.map(star => 
                <RateStar $isEditable={isEditable} key={star} $isActive={true} onClick={() => setRateNumber(star)}><SvgIcon type={'starFilled'}/></RateStar>)}

            {getArrFromNumber(5 - (rateNumber || 0))?.reverse().map(star => 
                <RateStar $isEditable={isEditable} key={star} $isActive={false} onClick={() => setRateNumber(6 - star)}><SvgIcon type={'starOutlined'}/></RateStar>)}
    </RateContainer>
}