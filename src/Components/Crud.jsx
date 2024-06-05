import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, DeleteUser, EditUser } from "../Redux/Reducers/Users";
const Crud = () => {
  const [FelidValue, setFelidValue] = useState({
    Name: "",
    Email: "",
    Address: "",
  });
  const [Edit, setEdit] = useState(false);
  const [ActiveIndex, setActiveIndex] = useState();
  const dispatch = useDispatch();
  const HandleChange = (event) => {
    setFelidValue({ ...FelidValue, [event.target.name]: event.target.value });
  };

  let GetAllDataFromRedux = useSelector((state) => state?.user);

  const SubmitData = (event) => {
    event.preventDefault();
    dispatch(AddUser(FelidValue));
    setFelidValue({
      Name: "",
      Email: "",
      Address: "",
    });
  };

  const DeleteRecord = (item) => {
    dispatch(DeleteUser(item));
  };

  const onEditClick = (index) => {
    let data = GetAllDataFromRedux[index];
    setFelidValue(data);
    setEdit(true);
    setActiveIndex(index);
  };

  const UpdateData = () => {
    let CopyArray = [...GetAllDataFromRedux];
    let updatedObject = {
      Name: FelidValue.Name,
      Email: FelidValue.Email,
      Address: FelidValue.Address,
    };
    CopyArray[ActiveIndex] = updatedObject;
    dispatch(EditUser(CopyArray));
    setEdit(false);
    setFelidValue({ Name: "", Email: "", Address: "" });
  };

  return (
    <>
      <h1 className="text-center">CRUD APP</h1>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={FelidValue.Name}
                  name="Name"
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={FelidValue.Email}
                  name="Email"
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={FelidValue.Address}
                  name="Address"
                  onChange={HandleChange}
                />
              </div>

              {Edit && Edit == true && (
                <button
                  className="btn btn-success form-control"
                  onClick={UpdateData}
                >
                  Update
                </button>
              )}
              {Edit == false && (
                <button
                  className="btn btn-success form-control"
                  onClick={SubmitData}
                >
                  Add
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-5 ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {GetAllDataFromRedux &&
            GetAllDataFromRedux.length > 0 &&
            GetAllDataFromRedux.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.Name}</td>
                  <td>{item?.Email}</td>
                  <td>{item?.Address}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        onEditClick(index);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        DeleteRecord(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Crud;
