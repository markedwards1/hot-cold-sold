import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_CLIENT } from "../../utils/mutations";
import { ALL_CLIENT } from "../../utils/queries";

const AddClientForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    note: "",
    createdAt: "",
    status: "",
  });

  const [addClient, { error }] = useMutation(ADD_CLIENT, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { ADD_CLIENT } }) {
      try {
        const { clients } = cache.readQuery({ query: ALL_CLIENT });

        cache.writeQuery({
          query: ALL_CLIENT,
          data: { clients: [addClient, ...clients] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addClient({
        variables: { ...formState },
      });

      setFormState({
        name: "",
        phone: "",
        email: "",
        product: "",
        note: "",
        createdAt: "",
        status: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setFormState(inputValue);
    } else if (inputType === "phone") {
      setFormState(inputValue);
    } else if (inputType === "email") {
      setFormState(inputValue);
    } else if (inputType === "product") {
      setFormState(inputValue);
    } else if (inputType === "note") {
      setFormState(inputValue);
    } else if (inputType === "createdAt") {
      setFormState(inputValue);
    } else if (inputType === "status") {
      setFormState(inputValue);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="name"
            placeholder="Client Name"
            value={formState.name}
            className="form-input w-100"
            style={{ lineHeight: "1.5" }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="phone"
            placeholder="Phone Number"
            value={formState.phone}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="email"
            placeholder="Email"
            value={formState.email}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="product"
            placeholder="Product"
            value={formState.product}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="note"
            placeholder="Notes"
            value={formState.note}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>{" "}
        <div className="col-12 col-lg-9">
          <input
            name="status"
            placeholder="Status"
            value={formState.status}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Submit
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default AddClientForm;
