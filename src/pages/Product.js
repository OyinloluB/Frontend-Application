import React from "react";

import styles from "../assets/styles/product.module.scss";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.product_lhs}>
          <div className={styles.product_lhs_productImage}>Some text</div>
          <div className={styles.product_lhs_productMainInfo}>Some text</div>
          <div className={styles.product_lhs_productTab}>Some text</div>
        </div>
        <div className={styles.product_rhs}>
          <div className={styles.product_rhs_user}>Some text</div>
          <div className={styles.product_rhs_map}>Some text</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
