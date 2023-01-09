import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./products.css";
import Button from '@material-ui/core/Button';
import CustomizedDialogs from './components/dialog'
import ProductForm from './components/productForm'
import CustomizedDialogsEdit from './components/dialogEdit'
import EditForm from './components/editProduct'
import DeleteIcon from '@material-ui/icons/Delete';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#22223b",
    color: "white",
    fontSize:"35px",
    fontWeight:'bold'
  },
  body: {
    fontSize: 20,
    fontWeight:'bold'
  },
 
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,

  },
});

const Tablee = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const emailID = localStorage.getItem('emailID');


  const getProductData = async () => {
  try {
    const data = await axios.get(
      `http://127.0.0.1:5000/getProducts?emailID=${emailID}`
    );
    setProduct(data.data);
    console.log(emailID);
  } catch (e) {
    console.log(e);
  }
};


  useEffect(() => {
    getProductData();
  }, [emailID]);

 function deleteProduct(name, id)
  {
    if(window.confirm('Delete the item ' +name +'?',)){
      fetch("http://127.0.0.1:5000/deleteProduct/" + id, 
        { method: 'DELETE'
      // headers: {
        // 'Accept': 'application/json',
         //'Content-Type': 'application/json'
      // },
        
      }).then((result)=>{
        result.json().then((resp)=>{
          window.alert('Item deleted successfully')
          console.warn(resp)
          getProductData()

        })
      })
  }}

  return (
    
      <div className="tools">
   
          <div className="add">
            <div>
                <input type="search" placeholder="Search here...." className="right"  onChange={(e) => {setSearch(e.target.value); }} />
               <CustomizedDialogs>
                  <ProductForm getProductData={getProductData}/>
                </CustomizedDialogs>
          </div>
      </div>
          

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table" >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Όνομα</StyledTableCell>
              <StyledTableCell align="center">Κωδικός</StyledTableCell>
              <StyledTableCell align="center">Μέγεθος</StyledTableCell>
              <StyledTableCell align="center">Ποσότητα</StyledTableCell>
              <StyledTableCell align="center" title='Τιμή πριν Φ.Π.Α'>Τ.Π.Φ</StyledTableCell>
              <StyledTableCell align="center" title='Τιμή μετά Φ.Π.Α'>Τ.Μ.Φ</StyledTableCell>
              <StyledTableCell align="center">Τελική τιμή</StyledTableCell>
              <StyledTableCell >Επιλογές</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.code.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                } else {
                  return ""
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.id} >
                  
                    <StyledTableCell component="th" scope="row" align="center">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      {item.code}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      {item.size}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      {item.quantity}
                    </StyledTableCell>
                    <StyledTableCell comp-onent="th" scope="row" align="center">
                      {item.pbf}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      {item.paf}
                    </StyledTableCell>                
                     <StyledTableCell component="th" scope="row" align="center">
                      {item.finalprice}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                        <div className='bt'>
                              <div className="bt1">
                                 <CustomizedDialogsEdit  >
                                    <EditForm getProductData={getProductData} {...item}/>
                                  </CustomizedDialogsEdit>
                              </div>
                              <div className="bt2">
                                  <Button onClick={() => deleteProduct(item.name, item.id)}><DeleteIcon fontSize="medium"/></Button>
                             </div>      
                        </div> 
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        
        </Table>
        
      </TableContainer>
        
    </div>

  );
};

export default Tablee;
