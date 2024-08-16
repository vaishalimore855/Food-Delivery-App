// import React, { useState, useRef, useEffect } from "react";
// import { useDispatchCart, useCart } from "./ContextReducer.js";

// const MenuCard = (props) => {
//   let dispatch = useDispatchCart();
//   let data = useCart();
//   let priceRef = useRef();
//   let options = props.options;
//   let priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0] || "");

//   const handelAddToCard = async () => {
//     let finalPrice = qty * parseInt(options[size]);

//     let food = [];
//     for (const item of data) {
//       if (item.id === props.foodItems._id) {
//         food = item;
//         break;
//       }
//     }
//     if (food !== []) {
//       if (food.size === size)
//         await dispatch({
//           type: "UPDATE",
//           id: props.foodItems._id,
//           price: finalPrice,
//           qty: qty,
//         });
//       return;
//     }
//     else if (food.size !== size) {
//       await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
//       console.log("Size different so simply ADD one more to the list")
//       return
//     }
//     return
//   }
//     await dispatch({
//       type: "ADD",
//       id: props.foodItems._id,
//       name: props.foodItems.name,
//       price: finalPrice,
//       size: size,
//       qty: qty,
//     });
//     console.log("Add to card data", data);
//   };
//   let finalPrice = qty * parseInt(options[size]);

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, [priceRef]);

//   return (
//     <div>
//       <div>
//         <div
//           className="card mt-3"
//           style={{ width: "18rem", maxHeight: "360px" }}
//         >
//           <img
//             src={props.img}
//             className="card-img-top"
//             alt="..."
//             style={{ height: "140px", objectFit: "fill" }}
//           />
//           <div className="card-body text-dark">
//             <h5 className="card-title">{props.foodItems.name}</h5>
//             <div className="container w-100">
//               <select
//                 className="m-2 h-100 bg-success rounded"
//                 onChange={(e) => setQty(e.target.value)}
//               >
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   );
//                 })}
//               </select>
//               <select
//                 className="m-2 h-100 bg-success rounded"
//                 ref={priceRef}
//                 onChange={(e) => setSize(e.target.value)}
//               >
//                 {priceOptions.map((data) => {
//                   return (
//                     <option key={data} value={data}>
//                       {data}
//                     </option>
//                   );
//                 })}
//               </select>
//               <div className="fs-5 d-inline h-100 ">₹{finalPrice}/-</div>
//             </div>
//             <hr />
//             <button
//               className="btn bg-success justify-center ms-2"
//               onClick={handelAddToCard}
//             >
//               Add To Card
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuCard;
import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer.js";

const MenuCard = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  let priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0] || "");

  const handelAddToCard = async () => {
    let finalPrice = qty * parseInt(options[size]);

    let food = data.find(
      (item) => item.id === props.foodItems._id && item.size === size
    );

    if (food) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItems._id,
        price: finalPrice,
        qty: qty,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItems._id,
        name: props.foodItems.name,
        price: finalPrice,
        size: size,
        qty: qty,
        img: props.img,
      });
      console.log("Size different so simply ADD one more to the list");
    }
    console.log("Add to card data", data);
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, [priceRef]);

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{
            width: "18rem",
            maxHeight: "360px",
            boxShadow:
              " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <img
            src={props.img}
            className="card-img-top"
            alt="..."
            style={{ height: "140px", objectFit: "fill" }}
          />
          <div className="card-body text-dark">
            <h5 className="card-title">{props.foodItems.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 bg-success rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 bg-success rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="fs-5 d-inline h-100 ">₹{finalPrice}/-</div>
            </div>
            <hr />
            <button
              className="btn bg-success justify-center ms-2"
              onClick={handelAddToCard}
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
