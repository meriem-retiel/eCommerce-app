import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customer",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Meriem Retiel",
        phone: "0553804536",
        adress: {
          city: "Mostaganem",
        },
        photo:'https://picsum.photos/id/1010/60'
      },
      {
        id: 2,
        name: "Yasmine Boudaoud",
        phone: null,
        adress: {
          city: "Oran",
        },
        photo:'https://picsum.photos/id/1011/60'
      },
      {
        id: 3,
        name: "Amine Yacou",
        phone: "0557485635",
        adress: {
          city: "Alger",
        },
        photo:'https://picsum.photos/id/1012/60'
      },
      {
        id: 4,
        name: "Fardi Abellah",
        phone: "0667364536",
        adress: {
          city: "Blida",
        },
        photo:'https://picsum.photos/id/1013/60'
      },
      {
        id: 5,
        name: "Lotfi motefai",
        phone: "0775645038",
        adress: {
          city: "Bejaia",
        },
        photo:'https://picsum.photos/id/1014/60'
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary">
            {this.state.customersCount}
          </span>
          <button onClick={this.handleRefresh} className="btn btn-primary">
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Profile</th>
              <th scope="col">Cutsomer name</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>{this.getCostumerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Called when refresh button is clicked
  handleRefresh = () => {
    this.setState({
      customersCount: 7,
    });
  };
  handlePhotoChange=(index)=>{
    let arr=this.state.customers
    arr[index].photo='https://picsum.photos/id/134/60'
    this.setState({
      customers:arr,
    })

  }
  getPhoneNumber = (phone) => {
    if (phone == null) {
      return <div className="bg-warning p-2 text-center">No phone number </div>;
    } else {
      return phone;
    }
  };
  getCostumerRow = () => {
    {
      return this.state.customers.map((cust,index) => {
        return (
          <tr scope="row" key={cust.id}>
            <td>{cust.id}</td>
            <td>
              <img src={cust.photo} />
              <div>
              <button onClick={()=>{this.handlePhotoChange(index)}} className="btn btn-sm btn-secondary">Change</button>
              </div>
              </td>
            <td>{cust.name}</td>
            <td>{this.getPhoneNumber(cust.phone)}</td>
            <td>{cust.adress.city}</td>
          </tr>
        );
      });
    }
  };


}
