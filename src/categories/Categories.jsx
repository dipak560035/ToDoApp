// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Card, CardHeader, CardBody, Image } from "@heroui/react";
// import { useNavigate } from "react-router-dom";  // ✅ FIXED

// export default function Categories() {
//   const [data, setData] = useState();
//   const [load, setLoad] = useState(false);
//   const [err, setErr] = useState();
//   const nav = useNavigate();

//   const getData = async () => {
//     setLoad(true);
//     try {
//       const response = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/categories.php"
//       );
//       setData(response.data);
//     } catch (err) {
//       setErr(err.message || "Something went wrong");
//     } finally {
//       setLoad(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   if (load) return <h1>Loading....</h1>;

//   if (err) return <div>{err}</div>;

//   return (
//     <div className="px-10 py-3 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
//       {data?.categories?.map((cata) => (
//         <Card
//            isPressable
//           onPress={() => nav(`/category-items/${cata.strCategory}`)}
//           className="py-4 cursor-pointer"
//           key={cata.idCategory}
//         >
//           <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//             <h4 className="font-bold text-large">{cata.strCategory}</h4>
//           </CardHeader>
//           <CardBody className="overflow-visible py-2">
//             <Image
//               alt={cata.strCategory}
//               className="object-cover rounded-xl"
//               src={cata.strCategoryThumb}
//               width={270}
//             />
//           </CardBody>
//         </Card>
//       ))}
//     </div>
//   );
// }




import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(response.data.categories || []);
    } catch (error) {
      setErr(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (err) return <div>{err}</div>;

  return (
    <div className="px-10 py-3 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
      {data.map((cata) => (
        <Card
          key={cata.idCategory}
          isPressable
          onPress={() => nav(`/category-items/${cata.strCategory}`)}
          className="py-4 cursor-pointer"
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{cata.strCategory}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={cata.strCategory}
              src={cata.strCategoryThumb}
              className="w-full h-48 object-cover rounded-xl"
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
