import styled from "styled-components";
import Image from "./Image";



const Portrait = ({animal}) => {
    return ( <figure>
        <Image src={`https://photos.petfinder.com/photos/${animal.photos}`}
        width="124"
        height="124"/>
    </figure> );
}
 
export default Portrait;