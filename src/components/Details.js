import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";

export default class Details extends Component {
  static contextType = ProductContext;

  componentDidMount() {
    let value = this.context;
  }

  function(UserAction) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", ",/test.json", false);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var data = xhr.responseText;
          var jsonResponse = JSON.parse(data);
          console.log(jsonResponse["logfile"]);
        }
      }
    };
    xhr.send(null);
  }

  render() {
    let value = this.context;

    const {
      listingId,
      pictureUrl,
      name,
      description,
      price,
      hostName,
      accomadates,
      beds,
      bathrooms,
      reviewScoreRating,
      cancellationPolicy,
      amenities,
      city,
      state,
      comments,
      img,
      inCart
    } = value.detailProduct;

    return (
      <div className="container py-5">
        {/* Name */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{name}</h1>
          </div>
        </div>
        {/* end of name */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} className="img-fluid" alt="" />
          </div>
          {/* description and hosted by */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h1>Description : {description}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              Hosted by: <span className="text-uppercase">{hostName}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price : <span>$</span>
                {price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Accomadates :
            </p>
            <p className="text-muted lead">{accomadates}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">Beds :</p>
            <p className="text-muted lead">{beds}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Bathrooms :
            </p>
            <p className="text-muted lead">{bathrooms}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Guest Rating :
            </p>
            <p className="text-muted lead">{reviewScoreRating}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Cancellation Policy :
            </p>
            <p className="text-muted lead">{cancellationPolicy}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Amenities :
            </p>
            <p className="text-muted lead">{amenities}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">City :</p>
            <p className="text-muted lead">{city}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              State :
            </p>
            <p className="text-muted lead">{state}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>Back to our listings</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(listingId);
                  value.openModal(listingId);
                }}
              >
                {inCart ? "in cart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
