import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Bussiness = () => {
  const [bussiness, setBussiness] = useState({
    bname: "",
    gstno: "",
    noOfEmp: "",
    turnOver: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBussiness({
      ...bussiness,
      [name]: value,
    });
  };

  const submit = () => {
    const { bname, gstno, noOfEmp, turnOver, address } = bussiness;
    console.log(bussiness);
    if (bname && gstno && noOfEmp && turnOver && address) {
      axios
        .post("https://dygnifytask1.herokuapp.com/bussiness", bussiness)
        .then((res) => {
          toast.success(res.data.message);
        });
    } else {
      toast.error("invalid input");
    }
  };
  return (
    <div className="container">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Bussiness Info
                </h3>

                <form class="px-md-2">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Bussiness Name"
                          name="bname"
                          onChange={handleChange}
                          value={bussiness.bname}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Gst No"
                          name="gstno"
                          onChange={handleChange}
                          value={bussiness.gstno}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="No of Employees"
                          name="noOfEmp"
                          onChange={handleChange}
                          value={bussiness.noOfEmp}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Turn Over"
                          name="turnOver"
                          onChange={handleChange}
                          value={bussiness.turnOver}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      name="address"
                      onChange={handleChange}
                      value={bussiness.address}
                      rows={4}
                    />
                  </div>

                  <div class="btn btn-success btn-lg mb-1" onClick={submit}>
                    Submit
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
