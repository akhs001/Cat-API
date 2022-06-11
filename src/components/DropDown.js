import { useCallback, useEffect, useRef,useState } from "react";
import "../App.css";

const DropDown = (props) => {
    const nameRef= useRef();
    const [lastIndex , setLastIndex] = useState(0);

     const getData = useCallback( event => {
        event.preventDefault();
         const index =  nameRef.current.selectedIndex;
         const element = nameRef.current.childNodes[index];
         const id= element.getAttribute('id');
        
         props.loadimg(id)
         setLastIndex(index);
        }, [props] )

   useEffect(()=>{
        nameRef.current.selectedIndex = lastIndex
   }, [lastIndex,getData])

    return (      <div> 
        <select ref={nameRef} onChange={getData}>
       {!props.isLoading && props.breeds && props.breeds.map(item=>
        <option key={item.id + Math.random()} id={item.id}> {item.name} </option>
       ) }
       </select>
       </div> );
}
 
export default DropDown;