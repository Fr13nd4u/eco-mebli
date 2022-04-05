// import { useEffect, useState } from "react";

// export const useMove = () => {
//   const [state, setState] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: any) => {
//     e.persist();
//     setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
//   };
//   return {
//     x: state.x,
//     y: state.y,
//     handleMouseMove,
//   };
// };

// export const useContainerDimensions = (myRef: any) => {
//   const getDimensions = () => ({
//     width: myRef.current.offsetWidth,
//     height: myRef.current.offsetHeight,
//   });

//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const handleResize = () => {
//       setDimensions(getDimensions());
//     };

//     if (myRef.current) {
//       setDimensions(getDimensions());
//     }

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [myRef]);

//   return dimensions;
// };
