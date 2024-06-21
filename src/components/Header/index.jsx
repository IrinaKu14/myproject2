import React, {useState}  from "react";
import styles from "./Header.module.scss";
import { IoIosAirplane } from "react-icons/io";
import { BsBasket2Fill } from "react-icons/bs";


export default function Header (){
    let [cartOpen, setcartOpen]=useState(false);
return (
    <header>
        <div>
            <IoIosAirplane className={styles.icon} />
            <span className={styles.logo}>На крыльях ветра</span>
            <ul className={styles.nav} >
                <li> О нас </li>
                <li> Контакты </li>
                <li> Личный кабинет </li>


            </ul>
            <BsBasket2Fill onClick={()=>setcartOpen(cartOpen=!cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active :''}`}/>

        </div>

        {cartOpen && (
            <div className={styles.shopCart}>


            </div>
        )}
        <div className={styles.presentation}></div>
    </header>
);

}