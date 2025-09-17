
// import { useParams } from 'react-router-dom'

// export default function Categoryitem() {
//     const {name }  = useParams();
    
   
//   return (
//     <div>
     
//     </div>
//   )
// }



import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function Categoryitem() {
  const { name } = useParams();
  const nav = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMeals = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, [name]);

  if (loading) return <h2 className="p-6">Loading meals...</h2>;

  return (
    <div className="px-10 py-3">
      <h2 className="text-2xl font-bold mb-5">Meals in {name}</h2>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {meals.map((meal) => (
          <Card
            key={meal.idMeal}
            isPressable
            onPress={() => nav(`/meal/${meal.idMeal}`)}
            className="py-4 cursor-pointer"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{meal.strMeal}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={meal.strMeal}
                src={meal.strMealThumb}
                className="w-full h-48 object-cover rounded-xl"
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 underline">
          ← Back to Categories
        </Link>
      </div>
    </div>
  );
}



