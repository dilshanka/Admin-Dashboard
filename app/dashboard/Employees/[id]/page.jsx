import { updateProductEmp } from "@/app/lib/actions";
import { fetchProductEmp } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPageEmp = async ({ params }) => {
  const { id } = params;
  const productEmp = await fetchProductEmp(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {productEmp.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProductEmp} className={styles.form}>
          <input type="hidden" name="id" value={productEmp.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={productEmp.title} />
          <label>Unit Price</label>
          <input type="text" name="price" placeholder={productEmp.price} />
          <label>Quantity in Stock</label>
          <input type="text" name="stock" placeholder={productEmp.stock} />
          <label>Category</label>
          <input
            type="text"
            name="color"
            placeholder={productEmp.color || "color"}
          />
          <label>Status</label>
          <textarea
            type="text"
            name="size"
            placeholder={productEmp.size || "size"}
          />
          {/* <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select> */}
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={productEmp.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPageEmp;
