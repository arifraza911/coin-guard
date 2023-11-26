import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,

} from "react-bootstrap";


const CrypotCategories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const fetchMenuSearchCategories = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/categories/"
    );
    setCategoryData(data);
  };

  useEffect(() => {
    fetchMenuSearchCategories();
  }, []);

  console.log(categoryData);

  return (
    <div
      style={{ width: "100%", backgroundColor: "#F0F2F5", paddingTop: "2rem" }}
    >
      {/* showdata section */}

      <div className="px-4 pb-4">
        <h1 className="text-center lg-pb-5 pb-2 ">Categories</h1>
        <div className="row">
          {categoryData.map((cate) => {
            const profit = cate.market_cap_change_24h > 0;

            return (
              <div
                key={cate.id}
                className="col-lg-4 col-md-6 py-2 px-1  cursor-pointer "
              >
                <Card className="py-14 px-4  hover:drop-shadow-lg 1 border-0 ">
                  <Card.Text  className="fw-semibold">  Name : {cate.name}</Card.Text>
                  <span className=" flex justify-between align-items-center h-20 pb-4 pt-1 ">
                    <Card.Text  > Top 3 Coins : </Card.Text>
                    <img alt={cate.name} src={cate.top_3_coins[0]} />
                    <img alt={cate.name} src={cate.top_3_coins[1]} />
                    <img alt={cate.name} src={cate.top_3_coins[2]} />
                  </span>

                  <Card.Text>Market Cap : {cate.market_cap}</Card.Text>
                  <Card.Text>Volume 24 Hr : {cate.volume_24h}</Card.Text>

                  <Card.Text>
                    {" "}
                    24 Hr Change :{" "}
                    <span
                      className={profit ? "text-green-500" : "text-red-700"}
                    >
                      {" "}
                      {profit ? "+ " : ""} {cate.market_cap_change_24h}{" "}
                    </span>
                  </Card.Text>
                  <Card.Text>Last Updated At : {cate.updated_at}</Card.Text>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CrypotCategories;

// {[ 'xxl'].map((expand) => (
//     <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//       <Container fluid>
//         {/* <Navbar.Brand href="#">Category</Navbar.Brand> */}
//         <Navbar.Toggle style={{position:"absolute", top:"100%"}}  placement="start" aria-controls={`offcanvasNavbar-expand-${expand}`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand-${expand}`}
//           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//           placement="start"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//               All Category
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="justify-content-start flex-grow-1 pe-3">

//                 {allCategory.map((cat)=>{
//                     return (
//                        <Nav.Link   style={{borderBottom:"1px solid black" }} as={Link} key={cat.category_id} > {cat.name} </Nav.Link>
//                     )

//                 })}
//             </Nav>

//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   ))}
