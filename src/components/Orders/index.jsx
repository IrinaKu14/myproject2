import React  from "react";
import styles from "./Orders.module.scss";
import { MdDeleteForever } from "react-icons/md";

export default function Orders(props){
    return(
    <div className={styles.item}>
        <img src={"./images/"+props.item.img}/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}</b>
        <MdDeleteForever className={styles.deleteIcon} onClick={()=>props.onDelete(props.item.id)}/>
       
    </div>
    );
}