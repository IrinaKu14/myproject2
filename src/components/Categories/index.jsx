import React from "react";
import styles from "./Categories.module.scss";


export default function Categories(props){
    const categories=[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Россия",
            name:"Россия"
        },
        {
            key:"Европа",
            name:"Европа"
        },
        {
            key:"Америка",
            name:"Америка"
        },
        {
            key:"Азия",
            name:"Азия"
        }
    ]


    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>

            ))}


        </div>
    )
}