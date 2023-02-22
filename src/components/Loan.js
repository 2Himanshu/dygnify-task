import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Loan = () => {
  const [loan, setLoan] = useState({
    id: "",
    amt: "",
    rate: "",
    tenure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoan({
      ...loan,
      [name]: value,
    });
  };

  const submit = () => {
    const { id, amt, rate, tenure } = loan;
    console.log(loan);
    if (id && amt && rate && tenure) {
      axios
        .post("https://dygnifytask1.herokuapp.com/loan", loan)
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
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Loan Info</h3>

                <form class="px-md-2">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Loan id"
                          name="id"
                          onChange={handleChange}
                          value={loan.id}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Loan Amount"
                          name="amt"
                          onChange={handleChange}
                          value={loan.amt}
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
                          placeholder="Interest rate"
                          name="rate"
                          onChange={handleChange}
                          value={loan.rate}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Loan Tenure "
                          name="tenure"
                          onChange={handleChange}
                          value={loan.tenure}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div class="mb-4">
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      rows={4}
                    />
                  </div> */}

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

export default Loan;
