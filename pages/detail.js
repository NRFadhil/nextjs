import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import AtomImage from "../components/atoms/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function detail() {
  return (
    <>
      <OrganismNav />
      <center>
      <div className="row container mt-5" >
      <div className="col">
      <AtomImage image="/products/product_4.png" width="360px" height="360px" size="55%" />
      <div className="row mt-3" style={{widht:"75%"}}>
      <div className="col">
      <AtomImage image="/products/product_4_1.png" />
      </div>
      <div className="col">
      <AtomImage image="/products/product_4_3.png" />
      </div>
      <div className="col">
      <AtomImage image="/products/product_4_3.png" />
      </div>
      </div>
      </div>
      <div className="col text-left">
      <AtomText
      value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment"
      size="28px"
      weight="bold"
      />
      <AtomText value="Stock : 50" size="18px" color="9D9D9D" />
            <AtomText value="$50.00" size="36px" weight="bold" marginTop="-15px" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            <AtomButton
              customClass="mt-5"
              value="Add to Cart"
              background="#0086CF"
              color="#FFF"
              padding="5px 30px"
              border="none"
              radius="10px"
            />
          </div>
        </div>
    </center>
    </>
  );
}
