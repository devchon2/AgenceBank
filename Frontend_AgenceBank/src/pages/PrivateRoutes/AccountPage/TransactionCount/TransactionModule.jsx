import { useState } from "react";
import style from "./TransactionModule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp, faPencil } from "@fortawesome/free-solid-svg-icons";

// Fonction Collapsible qui affiche un élément pouvant être replié/déplié
export default function TransactionModule({
  date,
  description,
  amount,
  balance,
  notes,
  category,
  transactionType,
}) {
  const [Toggle, setToggle] = useState({
    state: false,
    direction: "down",
  });

  const handleCollapse = (e) => {
    if (!e.target && (Toggle.state === true)) {
      setToggle({
        state: !Toggle.state,
        direction: "down",
      });
    } else {

    setToggle({
      state: !Toggle.state,
      direction: dir,
      clsName: clsName,
      icon: icon,
      collapsed: collapsed,
      element: element,
    });
  }}

  // Détermine la direction de la flèche en fonction de l'état de Toggle
  const dir = Toggle.state === true ? "up" : "down";
  const clsName = style.arrow
  const collapsed = Toggle.state === true ? style.expanded : style.collapsed;
  const icon = dir === "up" ? faChevronUp : faChevronDown;
  const element = document.querySelector(`.${style.account}`);

  return (
    // Transaction module section with a click event handler to toggle collapse/expand
    <section className={style.account} onClick={handleCollapse}>
      <div className={style.resumeContainer}>
        <div className={style.dateContainer}>
          <div className={style.dateWrapper}>
            {/* Arrow icon for collapse/expand */}
            <FontAwesomeIcon icon={icon} className={clsName} />
            {/* Transaction date */}
            <p className={style.date}>{date}</p>
          </div>
        </div>
        {/* Transaction description */}
        <div className={style.description}><p>{description}</p></div>
        {/* Transaction amount */}
        <div className={style.amount}><p>$ {amount}</p></div>
        {/* Transaction balance */}
        <div className={style.balance}><p>$ {balance}</p></div>
      </div>
      <div className={collapsed}>
        {/* Transaction Type */}
        <p className={style.transactionType}>{`Transaction Type: ${transactionType}`}</p>
        {/* Transaction Category with an edit pencil icon */}
        <p className={style.category}>
          Category: {category}
          <span className={style.pencil}>
            <FontAwesomeIcon icon={faPencil} />
          </span>
        </p>
        {/* Transaction Notes with an edit pencil icon */}
        <p className={style.notes}>
          Notes: {notes}
          <span className={style.pencil}>
            <FontAwesomeIcon icon={faPencil} />
          </span>
        </p>
      </div>
    </section>
  );

}
