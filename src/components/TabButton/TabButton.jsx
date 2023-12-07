// export default function TabButton(props){
//     /* props.children se refera fix la ce este intre opening si closing tag */
//     return <li><button>{props.children}</button></li>
// }

/* Sau asa tot prin destructurare direct */

export default function TabButton({ children, onSelect }) {
   
    return <li><button onClick={onSelect}>{children}</button></li>
}