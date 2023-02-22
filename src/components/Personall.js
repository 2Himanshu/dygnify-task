import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Personall = () => {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    age: "",
    mno: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const submit = () => {
    const { fname, lname, age, mno, email } = person;
    console.log(person);
    if (fname && lname && age && mno && email) {
      axios
        .post("https://dygnifytask1.herokuapp.com/personal", person)
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
                  Registration Info
                </h3>

                <form class="px-md-2">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          name="fname"
                          placeholder="First Name"
                          onChange={handleChange}
                          value={person.fname}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          name="lname"
                          placeholder="Last Name"
                          onChange={handleChange}
                          value={person.lname}
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
                          name="age"
                          placeholder="Age"
                          onChange={handleChange}
                          value={person.age}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile Number"
                          name="mno"
                          onChange={handleChange}
                          value={person.mno}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email id"
                      name="email"
                      onChange={handleChange}
                      value={person.email}
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

export default Personall;
