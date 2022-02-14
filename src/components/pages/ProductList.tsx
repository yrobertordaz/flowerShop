import { Card, List } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hook";
// type ProductListProps = {

// };
const ProductList: React.FC = () => {
  const { categoryId } = useParams();
  const products = useAppSelector((state) => state.products.data);

  useEffect(() => {}, [categoryId]);
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={products.filter(
        (f) => f.categoryId === +(categoryId || "-1")
      )}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name} />
        </List.Item>
      )}
    />
  );
};
export default ProductList;
