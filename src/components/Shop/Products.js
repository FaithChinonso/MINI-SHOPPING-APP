// import uuidv4 from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Yettie from "../../assets/image/vneckGown.png";
import Oma from "../../assets/image/omaGown.png";
import Fifi from "../../assets/image/fifi.png";
import Lulu from "../../assets/image/turtlenneck.png";
import LowKey from "../../assets/image/lowKeyy.png";
import LaCurve from "../../assets/image/laCurve.png";
import Awetu from "../../assets/image/awetu.png";
import Charmz from "../../assets/image/charmz.png";
import Preshy from "../../assets/image/preshy.png";
import Mutula from "../../assets/image/mutula.png";
import Bundy from "../../assets/image/T.E.A.png";
import TEA from "../../assets/image/ruffledTop.png";
import Chisara from "../../assets/image/chisarara.png";
import onChez from "../../assets/image/onChez.png";
import luluPop from "../../assets/image/luluPop.png";
import maureen from "../../assets/image/maureenn.png";
import nwobi from "../../assets/image/Nwobii.png";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 16000,
    title: "Yettie V-neck Gown",
    description: "Made with Lycra",
    src: Yettie,
  },
  {
    id: "p2",
    price: 15000,
    title: "Oma Scrunch Gown",
    description: "Made with Challis ",
    src: Oma,
  },
  {
    id: "p3",
    price: 5000,
    title: "Fifi Vintage Shirt",
    description: "Made with Chiffon ",
    src: Fifi,
  },
  {
    id: "p4",
    price: 5000,
    title: "LuluXX Turtle Neck",
    description: "Made with Fannel",
    src: Lulu,
  },
  {
    id: "p5",
    price: 4000,
    title: "Low-Key Crop Top",
    description: "Made with Spandex",
    src: LowKey,
  },
  {
    id: "p6",
    price: 19000,
    title: "LaCurve Two piece",
    description: "Made with Spandex",
    src: LaCurve,
  },
  {
    id: "p7",
    price: 15000,
    title: "Awetu Fur Top",
    description: "Made with Mink Fur",
    src: Awetu,
  },
  {
    id: "p8",
    price: 15000,
    title: "Charmz Leather Jacket",
    description: "Made with Leather",
    src: Charmz,
  },
  {
    id: "p9",
    price: 8000,
    title: "Preshy Gown",
    description: "Made with Suede and Organza",
    src: Preshy,
  },
  {
    id: "p10",
    price: 8000,
    title: "Mutula BodyCon Gown ",
    description: "Made with Crepe and Elastane",
    src: Mutula,
  },
  {
    id: "p11",
    price: 12000,
    title: "Bundy Jacket ",
    description: "Made with Suede",
    src: Bundy,
  },
  {
    id: "p12",
    price: 10000,
    title: "T.E.A Top ",
    description: "Made with Organza",
    src: TEA,
  },
  {
    id: "p13",
    price: 13000,
    title: "Chisara Bling Gown ",
    description: "Made with Sequin",
    src: Chisara,
  },
  {
    id: "p14",
    price: 12000,
    title: "onChez Jumpsuit ",
    description: "Made with Crepe",
    src: onChez,
  },
  {
    id: "p15",
    price: 20000,
    title: "LuluPop Blazer",
    description: "Made with Cashmere",
    src: luluPop,
  },
  {
    id: "p16",
    price: 7000,
    title: "Maureen Vintage",
    description: "Made with Cotton",
    src: maureen,
  },
  {
    id: "p17",
    price: 14000,
    title: "NNwobi Denim set",
    description: "Made with Denim",
    src: nwobi,
  },
];
const Products = (props) => {
  const dispatch = useDispatch();
  const loadedItems = useSelector((state) => state.ui.loadedItems);
  const loadMoreHandler = () => {
    dispatch(uiActions.loadMore());
  };
  const loadLessHandler = () => {
    dispatch(uiActions.loadLess());
  };
  const slice = DUMMY_PRODUCTS.slice(0, loadedItems);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        <div className={classes.productsContent}>
          {slice.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              img={product.src}
            />
          ))}
        </div>
      </ul>

      <div className={classes.loadButtons}>
        {loadedItems < DUMMY_PRODUCTS.length && (
          <button className={classes.buttonLoad} onClick={loadMoreHandler}>
            Load More
          </button>
        )}
        {loadedItems > 6 && (
          <button className={classes.buttonLoad} onClick={loadLessHandler}>
            Load Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
