import React from "react";
import "./partner.css";
import CustomizedDialogs from "./components/dialogPartner";
import PartnerForm from "./components/partnerForm";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import CustomizedDialogsEdit from "./components/dialogPartnerEdit";
import EditPartnerForm from "./components/editPartner";

const Partners = () => {
  const [partner, setPartner] = useState([]);
  const [search, setSearch] = useState("");
  const emailID = localStorage.getItem("emailID");

  const getPartnersData = async () => {
    try {
      const data = await axios.get(
        `http://127.0.0.1:5000/getPartners?emailID=${emailID}`
      );
      setPartner(data.data);
      console.log(emailID);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPartnersData();
  }, [emailID]);

  function deletePartner(name, id) {
    if (window.confirm("Are you sure you want to delete  " + name + "?")) {
      fetch("http://127.0.0.1:5000/deletePartner/" + id, {
        method: "DELETE",
        // headers: {
        // 'Accept': 'application/json',
        //'Content-Type': 'application/json'
        // },
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
          window.alert(name + " deleted successfully");
          getPartnersData();
        });
      });
    }
  }

  return (
    <>
      <div className="Tile">_</div>
      <div className="buttonn">
        {emailID ? (
          <CustomizedDialogs>
            <PartnerForm />
          </CustomizedDialogs>
        ) : null}
        {emailID ? (
          <input
            type="search"
            placeholder="Search here...."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        ) : null}
      </div>

      {partner
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          } else {
            return "";
          }
        })
        .map((item) => {
          return (
            <div className="Container">
              <div className="Box">
                <div className="Title">{item.name}</div>
                {item.email && <h3>Email: {item.email}</h3>}
                {item.phone && <h3>Τηλέφωνο: {item.phone}</h3>}
                {item.phone2 && <h3>Τηλέφωνο: {item.phone2}</h3>}
                {item.bank && (
                  <h3>
                    {item.bank}: {item.IBAN}
                  </h3>
                )}
                {item.bank2 && (
                  <h3>
                    {item.bank2}: {item.IBAN2}
                  </h3>
                )}
                {item.bank3 && (
                  <h3>
                    {item.bank3}: {item.IBAN3}
                  </h3>
                )}
                <div>
                  <Button
                    className="deleteIcon"
                    onClick={() => deletePartner(item.name, item.id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </Button>

                  <div className="editIcon">
                    <CustomizedDialogsEdit>
                      <EditPartnerForm
                        getPartnersData={getPartnersData}
                        {...item}
                      />
                    </CustomizedDialogsEdit>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Partners;
