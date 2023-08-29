//решение 4 вопроса
import React from "react";
import Card from "./Card";

const shoes = [
  {
    id: 1,
    title: "Зимние ботинки",
    price: 99,
    description: "Такие только у нас",
    imgLink: "ссылка на изображение",
  },
  {
    id: 2,
    title: "Пляжные тапки",
    price: 23,
    description: "Надеюсь, пригодятся",
    imgLink: "ссылка на изображение",
  },
  {
    id: 3,
    title: "Праздничные туфли",
    price: 85,
    description: "Теперь и в черном цвете",
    imgLink: "ссылка на изображение",
  },
];

function CardList() {
  const maxPrice = 85; // максимальная цена для отображения
  //используем метод filter() для фильтрации массива shoes и создания нового массива filteredShoes, который содержит только элементы с ценой, которая не превышает maxPrice.
  const filteredShoes = shoes.filter((item) => item.price <= maxPrice);

  return (
    <React.Fragment>
      {filteredShoes.map((item, index) => (
        <Card key={index.id} {...item} />
      ))}
    </React.Fragment>
  );
}

export default CardList;

//решение 5 вопроса
/* ...

function Product(){
  // получаем параметры
  const params = useParams();
  const prodId = params.id;
  return <h4>Товар № {prodId}</h4>;
}
...

<Route path="/products" element={<Products />}>
  <Route path=":id" element={<Product />} />
</Route> */

//решение 9 вопроса
import { useNavigate } from "react-router-dom";

//внутри компонента создаем переменную и передаем ей хук useNavigate()
const navigate = useNavigate();

//Обработаем клик на кнопку и вызовем функцию navigate с передачей в нее пути перенаправления
const handleButtonClick = () => {
  navigate("/новый url адрес");
};
return <button onClick={handleButtonClick}>Перейти на другую страницу</button>;
