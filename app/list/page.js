import Image from "next/image";

export default function List() {
  let 상품 = ['Tomatos', 'Pasta', 'Coconut']
  
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {상품.map((a, i) => {
          return <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img"/>
            <h4>{a} $40</h4>
          </div>
        })}
        
      </div>
    );
  }
  